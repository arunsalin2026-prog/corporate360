"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "exit_intent_last_shown";
const COOLDOWN_DAYS = 0.5;
const MIN_TIME_ON_PAGE_MS = 30_000;

function hasRecentlyShown(): boolean {
  const last = localStorage.getItem(STORAGE_KEY);
  if (!last) return false;
  const daysSince = (Date.now() - Number(last)) / (1000 * 60 * 60 * 24);
  return daysSince < COOLDOWN_DAYS;
}

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const lastScrollY = useRef(0);
  const readyToShow = useRef(false);
  const hasShown = useRef(false);

  useEffect(() => {
    if (hasRecentlyShown()) return;

    const timer = setTimeout(() => {
      readyToShow.current = true;
    }, MIN_TIME_ON_PAGE_MS);

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && readyToShow.current) show();
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    } else {
      const handleScroll = () => {
        const current = window.scrollY;
        if (lastScrollY.current - current > 150 && current > 300 && readyToShow.current) show();
        lastScrollY.current = current;
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  function show() {
    if (hasShown.current) return;
    hasShown.current = true;
    setVisible(true);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    trackEvent("exit_intent_shown");
  }

  function close() {
    setVisible(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/exit-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      trackEvent("exit_intent_submit");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[201] max-w-md mx-auto bg-navy border border-gold/40 rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.6)] p-8"
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>

            {/* Gold top bar */}
            <div className="w-12 h-0.5 bg-gold mb-5" />

            {!submitted ? (
              <>
                <h2
                  id="exit-intent-title"
                  className="font-montserrat font-bold text-white text-2xl leading-snug mb-2"
                >
                  Get a Free Business Consultation
                </h2>
                <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
                  Tell us your industry and we&apos;ll show you how we can help.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <label htmlFor="exit-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="exit-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your business email"
                    required
                    className="w-full bg-white/8 border border-white/15 rounded px-4 py-3 font-inter text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-gold/60 transition-colors mb-3"
                  />
                  {error && (
                    <p className="font-inter text-red-400 text-xs mb-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-navy font-montserrat font-bold text-sm rounded hover:bg-gold/90 transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Get Free Consultation"}
                    {!submitting && <ArrowRight size={15} />}
                  </button>
                </form>

                <p className="font-inter text-white/30 text-xs text-center mt-4">
                  No spam. We&apos;ll reach out within 24 hours.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl">✓</span>
                </div>
                <h2 className="font-montserrat font-bold text-white text-xl mb-2">
                  We&apos;ll be in touch!
                </h2>
                <p className="font-inter text-white/60 text-sm">
                  Expect a call from our team within 24 hours.
                </p>
                <button
                  onClick={close}
                  className="mt-6 font-inter text-gold text-sm hover:underline"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
