"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

const WA_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917034244404").trim();
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in Corporate 360 Hub's services. Can we connect?")}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isHome = pathname === "/";
  const showBg = isScrolled || isOpen || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showBg
            ? "bg-navy/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        )}
      >
        <nav className="container-max">
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group select-none">
              <span className="font-montserrat font-bold text-gold text-lg md:text-xl tracking-tight group-hover:text-gold/90 transition-colors duration-200">
                Corporate 360 Hub
              </span>
              <span
                className="font-inter font-medium text-teal tracking-[0.18em] uppercase mt-0.5"
                style={{ fontSize: "10px", letterSpacing: "0.18em" }}
              >
                {BRAND.company.subtitle}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 group"
                  >
                    <span
                      className={cn(
                        "text-sm font-inter font-medium transition-colors duration-200",
                        isActive ? "text-gold" : "text-white/75 group-hover:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                    {/* Sliding gold underline */}
                    <span
                      className={cn(
                        "absolute bottom-0.5 left-3 h-[1.5px] bg-gold transition-all duration-300 ease-out",
                        isActive
                          ? "w-[calc(100%-24px)] opacity-100"
                          : "w-0 opacity-0 group-hover:w-[calc(100%-24px)] group-hover:opacity-100"
                      )}
                    />
                  </Link>
                );
              })}

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 bg-gold text-navy font-montserrat font-bold text-sm rounded hover:bg-gold/90 hover:shadow-[0_0_20px_rgba(201,168,76,0.35)] transition-all duration-300 whitespace-nowrap"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex"
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-navy lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Gold accent stripe */}
            <div className="h-1 bg-gradient-to-r from-gold/80 via-gold to-gold/20 flex-shrink-0" />

            <div className="flex flex-col flex-1 justify-center px-8 py-24">
              <nav className="flex flex-col">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.055, duration: 0.28, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-4 border-b border-white/10 group",
                          isActive ? "text-gold" : "text-white/85 hover:text-gold"
                        )}
                      >
                        <span className="text-3xl font-montserrat font-bold transition-colors duration-200">
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.28 }}
                className="mt-10"
              >
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-4 bg-gold text-navy font-montserrat font-bold text-lg rounded hover:bg-gold/90 transition-colors duration-200"
                >
                  Let&apos;s Talk
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-10 text-white/30 text-sm font-inter"
              >
                {BRAND.company.email}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
