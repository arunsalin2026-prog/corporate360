"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-gold overflow-hidden">

      {/* Navy diagonal texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(11,31,58,0.045), rgba(11,31,58,0.045) 1px, transparent 0, transparent 12px)",
        }}
        aria-hidden
      />

      {/* Top-left radial highlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(255,255,255,0.18) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-inter font-semibold text-navy/50 text-xs uppercase tracking-[0.22em] mb-4">
            Get Started Today
          </p>

          <h2
            className="font-montserrat font-bold text-navy leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
          >
            Ready to Scale Your Business
            <br className="hidden md:block" />
            Across South India?
          </h2>

          <p className="font-inter text-navy/55 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            One call. One partner. Full ownership of your growth. No agencies to
            juggle — just results.
          </p>

          <Link
            href="/contact"
            onClick={() => trackEvent("cta_click", { location: "cta_section" })}
            className="inline-flex items-center gap-2.5 px-10 py-4 bg-navy text-white font-montserrat font-bold text-sm rounded hover:bg-navy/90 hover:shadow-[0_8px_32px_rgba(11,31,58,0.45)] transition-all duration-300 group"
          >
            Let&apos;s Build Together
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
