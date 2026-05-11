"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import {
  ChevronRight,
  Users2,
  Megaphone,
  LineChart,
  RefreshCw,
  TrendingUp,
  User,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/client";
import type { CoreValue } from "@/sanity/lib/queries";

// ─── Data ────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    icon: Users2,
    title: "People First",
    desc: "Every strategy begins with people — the right talent, placed right, empowered right.",
  },
  {
    icon: Megaphone,
    title: "Bold Marketing",
    desc: "We don't play it safe. We execute campaigns that make your brand impossible to ignore.",
  },
  {
    icon: LineChart,
    title: "Market Intelligence",
    desc: "Decisions grounded in data. We map markets before we move into them.",
  },
  {
    icon: RefreshCw,
    title: "360° Partnership",
    desc: "We own the outcome alongside you — not just the deliverable.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    desc: "We evolve with your business. What works today is the floor, not the ceiling.",
  },
] as const;

const KERALA_DISTRICTS = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
] as const;

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay, ease: "easeOut" as const },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, delay, ease: "easeOut" as const },
});

// ─── Section label ─────────────────────────────────────────────────────────────

function SectionLabel({
  children,
  color = "teal",
}: {
  children: React.ReactNode;
  color?: "teal" | "gold";
}) {
  return (
    <span
      className={cn(
        "font-inter font-semibold text-xs uppercase tracking-[0.22em] block mb-3",
        color === "teal" ? "text-teal" : "text-gold"
      )}
    >
      {children}
    </span>
  );
}

// ─── Props ───────────────────────────────────────────────────────────────────

interface AboutPageContentProps {
  vision?: string;
  mission?: string;
  ourStory?: unknown[];
  founderName?: string;
  founderDesignation?: string;
  founderPhoto?: unknown;
  coreValues?: CoreValue[];
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPageContent({
  vision,
  mission,
  ourStory,
  founderName,
  founderDesignation,
  founderPhoto,
  coreValues,
}: AboutPageContentProps) {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <VisionMissionSection vision={vision} mission={mission} />
      <OurStorySection ourStory={ourStory} founderName={founderName} founderDesignation={founderDesignation} founderPhoto={founderPhoto} />
      <CoreValuesSection coreValues={coreValues} />
      <CoverageMapSection />
      <TeamSection founderName={founderName} founderDesignation={founderDesignation} founderPhoto={founderPhoto} />
    </div>
  );
}

// ─── 1. Page Hero ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-[52vh] bg-navy flex items-end overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80" aria-hidden />

      <div className="relative container-max pt-28 pb-14 md:pb-18 w-full">
        <motion.div {...fadeUp(0.1)} className="max-w-3xl">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-1.5 text-white/40 font-inter text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <ChevronRight size={12} className="text-white/25" />
            <span className="text-white/70">About</span>
          </nav>

          <h1
            className="font-montserrat font-bold text-white leading-[1.1] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            About Corporate 360 Hub
          </h1>

          <p className="font-inter font-medium text-teal text-lg md:text-xl leading-relaxed">
            Kerala&apos;s Business Architecture Firm{" "}
            <span className="text-white/40">—</span>{" "}
            <span className="text-white/75">Built for Growth</span>
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-offwhite to-transparent" aria-hidden />
    </section>
  );
}

// ─── 2. Vision & Mission ──────────────────────────────────────────────────────

function VisionMissionSection({ vision, mission }: { vision?: string; mission?: string }) {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div {...fadeUp(0.05)} className="text-center max-w-xl mx-auto mb-12">
          <SectionLabel>Our Foundation</SectionLabel>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight">
            Vision &amp; Mission
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision card — deep navy */}
          <motion.div {...fadeLeft(0.1)} className="rounded-xl overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-gold via-gold/80 to-gold/30" />
            <div className="bg-navy p-8 md:p-10 h-full flex flex-col">
              <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
                Vision
              </span>
              <p
                className="font-montserrat font-bold text-white leading-snug flex-1"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
              >
                {vision ?? "To be the most trusted 360° business force in India."}
              </p>
            </div>
          </motion.div>

          {/* Mission card — dark teal */}
          <motion.div {...fadeRight(0.15)} className="rounded-xl overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-gold via-gold/80 to-gold/30" />
            <div className="h-full flex flex-col p-8 md:p-10" style={{ backgroundColor: "#0A5F5F" }}>
              <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-5">
                Mission
              </span>
              <p
                className="font-montserrat font-bold text-white leading-snug flex-1"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
              >
                {mission ?? "To mold businesses into their highest potential."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Our Story ─────────────────────────────────────────────────────────────

const FALLBACK_STORY_PARAGRAPHS = [
  <>
    Corporate 360 Hub was born from a clear market gap in Kerala —
    companies were forced to manage{" "}
    <span className="text-navy font-semibold">
      separate vendors for recruitment, branding, and distribution
    </span>
    . Coordinating three agencies meant wasted time, misaligned messaging, and
    no single owner of the result.
  </>,
  <>
    We created one firm to own all three. A{" "}
    <span className="text-teal font-semibold">Single Point of Responsibility</span>{" "}
    that handles your people, your brand, and your market reach — under one
    roof, with one team accountable for your growth.
  </>,
  <>
    Founded in 2024, we operate across all 14 districts of Kerala with a single
    mission:{" "}
    <span className="text-navy font-semibold">
      be the growth backbone for India&apos;s most ambitious brands.
    </span>
  </>,
];

function OurStorySection({
  ourStory,
  founderName,
  founderDesignation,
  founderPhoto,
}: {
  ourStory?: unknown[];
  founderName?: string;
  founderDesignation?: string;
  founderPhoto?: unknown;
}) {
  const photoUrl = founderPhoto
    ? urlFor(founderPhoto).width(600).height(750).fit("crop").auto("format").url()
    : null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div {...fadeLeft(0.05)}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight mb-5">
              Why We Built This
            </h2>
            <div className="w-14 h-[2px] bg-gold mb-7" />

            <div className="space-y-4 font-inter text-slate text-base leading-relaxed">
              {ourStory && ourStory.length > 0 ? (
                <PortableText value={ourStory as Parameters<typeof PortableText>[0]["value"]} />
              ) : (
                FALLBACK_STORY_PARAGRAPHS.map((para, i) => (
                  <p key={i}>{para}</p>
                ))
              )}
            </div>
          </motion.div>

          {/* Right — founder photo */}
          <motion.div {...fadeRight(0.12)}>
            {photoUrl ? (
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <Image
                  src={photoUrl}
                  alt={founderName ?? "Founder"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {(founderName || founderDesignation) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                    {founderName && (
                      <p className="font-montserrat font-bold text-white text-lg">
                        {founderName}
                      </p>
                    )}
                    {founderDesignation && (
                      <p className="font-inter text-white/70 text-sm">
                        {founderDesignation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="relative rounded-xl overflow-hidden bg-slate/[0.07] border-2 border-dashed border-slate/20 aspect-[4/5] flex flex-col items-center justify-center gap-4">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none">
                  <span className="font-montserrat font-black text-8xl text-slate rotate-[-15deg]">
                    PHOTO
                  </span>
                </div>
                <div className="relative flex flex-col items-center gap-3 text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-slate/20 border-2 border-dashed border-slate/25 flex items-center justify-center">
                    <User size={32} className="text-slate/35" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-slate/50 text-sm">
                      {founderDesignation ?? "Founder & CEO"}
                    </p>
                    <p className="font-inter text-slate/35 text-xs mt-1">
                      Founder photo — coming soon
                    </p>
                  </div>
                  <div className="mt-2 px-4 py-1.5 border border-teal/30 rounded-full">
                    <p className="font-inter text-teal/60 text-xs">
                      Corporate 360 Hub · Est. 2024
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── 4. Core Values ───────────────────────────────────────────────────────────

function CoreValuesSection({ coreValues }: { coreValues?: CoreValue[] }) {
  const values =
    coreValues && coreValues.length > 0
      ? coreValues.map((v, i) => ({
          icon: CORE_VALUES[i]?.icon ?? Users2,
          title: v.title ?? CORE_VALUES[i]?.title ?? "",
          desc: v.description ?? CORE_VALUES[i]?.desc ?? "",
        }))
      : CORE_VALUES.map((v) => ({ icon: v.icon, title: v.title, desc: v.desc }));

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div {...fadeUp(0.05)} className="text-center max-w-xl mx-auto mb-12">
          <SectionLabel color="gold">Core Values</SectionLabel>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight">
            What We Stand For
          </h2>
        </motion.div>

        {/* 5 cards — 3 + 2 using 6-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            const isSecondRow = i >= 3;
            return (
              <motion.div
                key={value.title || i}
                {...fadeUp(0.05 + i * 0.09)}
                className={cn(
                  "lg:col-span-2",
                  isSecondRow && i === 3 && "lg:col-start-2",
                  isSecondRow && i === 4 && "lg:col-start-4"
                )}
              >
                <div className="h-full bg-navy rounded-xl overflow-hidden group hover:shadow-[0_10px_32px_rgba(11,31,58,0.25)] transition-shadow duration-300">
                  <div className="h-[3px] bg-gradient-to-r from-gold/80 to-gold/20" />
                  <div className="p-6">
                    <div className="w-11 h-11 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-teal" />
                    </div>
                    <h3 className="font-montserrat font-bold text-white text-base mb-2 group-hover:text-gold transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="font-inter text-white/45 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Coverage Map ──────────────────────────────────────────────────────────

function CoverageMapSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        <motion.div {...fadeUp(0.05)} className="text-center mb-12">
          <SectionLabel color="gold">Our Reach</SectionLabel>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            All 14 Districts of Kerala
          </h2>
          <p className="font-inter text-white/45 text-base max-w-md mx-auto">
            One team. 14 districts. Complete market coverage.
          </p>
        </motion.div>

        {/* District pills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10"
        >
          {KERALA_DISTRICTS.map((district, i) => (
            <motion.div
              key={district}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: 0.04 + i * 0.04 }}
            >
              <div className="flex items-center gap-1.5 px-4 py-2 bg-teal/[0.12] border border-teal/25 rounded-full hover:border-teal/55 hover:bg-teal/20 transition-all duration-200 cursor-default group">
                <MapPin size={11} className="text-teal/70 flex-shrink-0 group-hover:text-teal transition-colors" />
                <span className="font-inter font-medium text-white/75 text-sm group-hover:text-white transition-colors">
                  {district}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supporting stat strip */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-8 border-t border-white/10"
        >
          {[
            { value: "14", label: "Districts Covered" },
            { value: "2024", label: "Founded" },
            { value: "1", label: "Point of Responsibility" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-montserrat font-bold text-gold text-3xl leading-none mb-1">
                {stat.value}
              </p>
              <p className="font-inter text-white/45 text-xs uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 6. Team ──────────────────────────────────────────────────────────────────

function TeamSection({
  founderName,
  founderDesignation,
  founderPhoto,
}: {
  founderName?: string;
  founderDesignation?: string;
  founderPhoto?: unknown;
}) {
  const photoUrl = founderPhoto
    ? urlFor(founderPhoto).width(300).height(300).fit("crop").auto("format").url()
    : null;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div {...fadeUp(0.05)} className="text-center max-w-xl mx-auto mb-12">
          <SectionLabel>The People</SectionLabel>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight">
            The Team
          </h2>
        </motion.div>

        {/* Founder card */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-10">
          <div className="w-64 text-center p-8 bg-offwhite rounded-xl border border-slate/10">
            {photoUrl ? (
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-5">
                <Image
                  src={photoUrl}
                  alt={founderName ?? "Founder"}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate/[0.12] border-2 border-dashed border-slate/20 flex items-center justify-center mx-auto mb-5">
                <User size={36} className="text-slate/30" />
              </div>
            )}

            {founderName ? (
              <p className="font-montserrat font-bold text-navy text-sm mb-1">
                {founderName}
              </p>
            ) : (
              <div className="w-32 h-3.5 bg-slate/15 rounded-full mx-auto mb-2" />
            )}

            <p className="font-inter text-slate/50 text-sm mt-2 mb-1">
              {founderDesignation ?? "Founder & CEO"}
            </p>
            {!founderPhoto && (
              <span className="inline-block px-3 py-0.5 bg-teal/10 border border-teal/20 rounded-full font-inter text-teal text-xs font-medium mt-1">
                Add photo
              </span>
            )}
          </div>
        </motion.div>

        {/* Supporting text + CTA */}
        <motion.div {...fadeUp(0.15)} className="text-center max-w-md mx-auto">
          <p className="font-inter text-slate text-sm leading-relaxed mb-6">
            Growing team — open positions are listed on our Careers page.
            We&apos;re looking for sharp, driven people to join Kerala&apos;s most
            ambitious business architecture firm.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white font-montserrat font-bold text-sm rounded hover:bg-navy/90 hover:shadow-[0_6px_20px_rgba(11,31,58,0.25)] transition-all duration-300 group"
          >
            Join Our Team
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
