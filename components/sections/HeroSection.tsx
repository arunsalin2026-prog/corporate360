"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_BADGES } from "@/lib/constants";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  badges?: string[];
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function CompassWatermark() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      className="absolute right-[-80px] md:right-[-40px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[0.04] pointer-events-none select-none"
      aria-hidden
    >
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="150" cy="150" r="140" stroke="white" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="110" stroke="white" strokeWidth="0.75" />
        <circle cx="150" cy="150" r="78"  stroke="white" strokeWidth="0.75" />
        <circle cx="150" cy="150" r="20"  stroke="white" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="4"   fill="white" />
        <line x1="150" y1="10"  x2="150" y2="290" stroke="white" strokeWidth="1" />
        <line x1="10"  y1="150" x2="290" y2="150" stroke="white" strokeWidth="1" />
        <line x1="51"  y1="51"  x2="249" y2="249" stroke="white" strokeWidth="0.5" />
        <line x1="249" y1="51"  x2="51"  y2="249" stroke="white" strokeWidth="0.5" />
        {/* N arrow (filled) */}
        <polygon points="150,10 144,55 150,45 156,55" fill="white" />
        {/* S, E, W arrows (outline) */}
        <polygon points="150,290 144,245 150,255 156,245" stroke="white" strokeWidth="1" fill="none" />
        <polygon points="290,150 245,144 255,150 245,156" stroke="white" strokeWidth="1" fill="none" />
        <polygon points="10,150 55,144 45,150 55,156"   stroke="white" strokeWidth="1" fill="none" />
        {/* Tick marks */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const isMajor = i % 9 === 0;
          const r1 = isMajor ? 132 : 136;
          const x1 = 150 + r1 * Math.sin(angle);
          const y1 = 150 - r1 * Math.cos(angle);
          const x2 = 150 + 140 * Math.sin(angle);
          const y2 = 150 - 140 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="white"
              strokeWidth={isMajor ? 1.5 : 0.75}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  badges,
}: HeroSectionProps) {
  const heroBadges =
    badges && badges.length > 0
      ? badges.map((b) => ({ value: b.split(" ")[0], label: b.split(" ").slice(1).join(" ") }))
      : HERO_BADGES;

  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.032]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-teal/[0.08]" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" aria-hidden />

      {/* Animated compass */}
      <CompassWatermark />

      {/* Content */}
      <div className="relative container-max pt-28 pb-16 md:pt-32 md:pb-20 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[720px]"
        >
          {/* Tag pill */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal/[0.12] border border-teal/25 text-teal rounded-full font-inter font-semibold text-xs tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse flex-shrink-0" />
              South India&apos;s 360° Partner
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            className="font-montserrat font-bold text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5.2vw, 3.25rem)" }}
          >
            {headline ?? (
              <>
                We Mould Businesses.{" "}
                <br className="hidden sm:block" />
                We Build People.{" "}
                <br className="hidden sm:block" />
                <span className="text-gold">We Dominate Markets.</span>
              </>
            )}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="font-inter font-medium leading-relaxed mb-9"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)" }}
          >
            {subheadline ?? (
              <>
                <span className="text-teal">South India&apos;s 360° Business Architecture Partner</span>
                <span className="text-white/30 mx-2">—</span>
                <span className="text-white/70">People · Marketing · Network</span>
              </>
            )}
          </motion.p>

          {/* Stat badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 px-4 py-2.5 border border-gold/45 rounded-sm bg-gold/[0.06]"
              >
                <span className="font-montserrat font-bold text-gold text-xl leading-none">
                  {badge.value}
                </span>
                <span className="font-inter text-white/60 text-sm leading-none">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-montserrat font-bold text-sm rounded hover:bg-gold/90 hover:shadow-[0_0_28px_rgba(201,168,76,0.4)] transition-all duration-300 group"
            >
              {ctaText ?? "Let’s Build Together"}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold/55 text-gold font-montserrat font-bold text-sm rounded hover:bg-gold/[0.08] hover:border-gold/80 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent" aria-hidden />
    </section>
  );
}
