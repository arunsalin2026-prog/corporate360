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
  ArrowRight,
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
      <OurStorySection ourStory={ourStory} />
      <MeetTheFounderSection founderPhoto={founderPhoto} />
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
            South India&apos;s 360° Business Architecture Firm{" "}
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
                {mission ?? "To mould businesses into their highest potential."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Our Story ─────────────────────────────────────────────────────────────

const STORY_PILLARS = [
  { icon: "💰", label: "Finance", desc: "Your financial systems, MIS reporting, compliance frameworks and P&L monitoring — managed properly, so your business runs clean." },
  { icon: "👥", label: "People", desc: "Recruitment, certification and retention of your talent through our proprietary Sales & Vitality Bootcamp and monthly wellness monitoring." },
  { icon: "📢", label: "Brand", desc: "ATL, BTL and TTL marketing execution — from billboard to shelf to your client's digital CRM — all managed by one team." },
  { icon: "📊", label: "Intelligence", desc: "Deep market research, GPS competitor mapping and new opportunity identification — so every decision is data-backed, not guesswork." },
  { icon: "🚀", label: "Activation", desc: "Product launches, dealer meets, roadshows and in-store activations that actually convert — not just events that look good." },
  { icon: "🗺️", label: "Network", desc: "Distributor vetting and appointment, direct dealer sign-ups, and channel expansion across every district we operate in." },
];

const RED_FLAGS = [
  "Misaligned strategies that worked against each other",
  "Hours wasted in coordination meetings that produced nothing",
  "Budgets split across six retainers with diluted, unmeasurable returns",
  "Messages to the market that contradicted each other",
  "Not one single person accountable for the final outcome",
];

function OurStorySection({ ourStory }: { ourStory?: unknown[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max max-w-4xl">

        <motion.div {...fadeUp(0.05)} className="mb-10">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight mb-5">
            Why We Built This
          </h2>
          <div className="w-14 h-[2px] bg-gold" />
        </motion.div>

        {ourStory && ourStory.length > 0 ? (
          <div className="font-inter text-slate text-base leading-relaxed">
            <PortableText value={ourStory as Parameters<typeof PortableText>[0]["value"]} />
          </div>
        ) : (
          <div className="space-y-10 font-inter text-slate text-base leading-relaxed">

            {/* The Gap We Saw */}
            <motion.div {...fadeUp(0.07)}>
              <h3 className="font-montserrat font-bold text-navy text-xl mb-4">The Gap We Saw</h3>
              <p className="mb-3">India&apos;s most ambitious companies were quietly bleeding — not from bad products, not from weak demand, but from something far more fixable.</p>
              <p className="mb-3">They were managing too many agencies with too little alignment.</p>
              <p className="mb-3">One firm for financial systems. Another for recruitment. A third for training. A fourth for marketing. A fifth for branding. A sixth for market research. And yet another for distributor and dealer appointments.</p>
              <p className="mb-3">Each agency did its job. In isolation.</p>
              <p className="mb-3">Nobody talked to each other. Nobody owned the full picture. And nobody was accountable when the result fell short.</p>
              <p className="mb-5">The finance team didn&apos;t know what the marketing team was spending. The recruitment firm didn&apos;t know what kind of person the sales strategy actually needed. The branding agency had never visited a single retail outlet. The distributor network was built without a shred of market intelligence.</p>
              <p className="mb-4 font-medium text-navy">The result was always the same:</p>
              <ul className="space-y-2 mb-3">
                {RED_FLAGS.map((flag, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* The Moment It Became Clear */}
            <motion.div {...fadeUp(0.08)}>
              <h3 className="font-montserrat font-bold text-navy text-xl mb-4">The Moment It Became Clear</h3>
              <p className="mb-3">We saw this pattern play out — not once, not twice — but consistently, across some of India&apos;s most well-funded and well-intentioned companies.</p>
              <p className="mb-3">We saw FMCG brands invest crores in television campaigns, only to lose the sale at the shelf because nobody had trained the promoter standing in front of the customer.</p>
              <p className="mb-3">We saw growing companies hire brilliant talent through expensive recruitment firms, only to watch that talent walk out the door within 90 days — because nobody supported them after the placement, nobody tracked their energy, and nobody invested in keeping them performing.</p>
              <p className="mb-3">We saw brands enter new markets by appointing distributors the wrong way — without financial vetting, without market intelligence, without a system — wasting months of time and hundreds of thousands of rupees on a network that never delivered.</p>
              <p>And in every single case, when we asked who was responsible — the finger pointed in six different directions.</p>
            </motion.div>

            {/* What We Decided to Build */}
            <motion.div {...fadeUp(0.08)}>
              <h3 className="font-montserrat font-bold text-navy text-xl mb-4">What We Decided to Build</h3>
              <p className="mb-3">We decided the market needed something that didn&apos;t exist.</p>
              <p className="mb-1">Not a better HR firm.</p>
              <p className="mb-1">Not a smarter marketing agency.</p>
              <p className="mb-4">Not a sharper financial advisor.</p>
              <p className="mb-3">One firm that did all of it — and owned all of it.</p>
              <p>A <span className="text-teal font-semibold">Single Point of Responsibility</span> where one team managed your finances, found your people, trained them, built your brand, researched your market, launched your products, and expanded your distribution network — all connected, all accountable, all under one roof.</p>
              <p className="mt-3 font-montserrat font-bold text-navy">We called it Corporate 360 Hub.</p>
            </motion.div>

            {/* The Architecture */}
            <motion.div {...fadeUp(0.08)}>
              <h3 className="font-montserrat font-bold text-navy text-xl mb-4">The Architecture We Drew</h3>
              <p className="mb-6">We built Corporate 360 Hub around six integrated pillars — each one designed not to function in isolation, but to feed every other:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {STORY_PILLARS.map((pillar) => (
                  <div key={pillar.label} className="p-4 bg-offwhite rounded-xl border border-slate/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{pillar.icon}</span>
                      <span className="font-montserrat font-bold text-navy text-sm">{pillar.label}</span>
                    </div>
                    <p className="font-inter text-slate/70 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mb-3">When all six work together, something extraordinary happens.</p>
              <p>Market intelligence informs which districts to enter. Distributors are appointed in those districts with full financial vetting. A certified, trained team is deployed there. BTL campaigns drive customers to those dealers. Financial systems capture and report the results. Leadership reviews a single dashboard.</p>
              <p className="mt-3 font-medium text-navy">That is 360° architecture. That is what we built.</p>
            </motion.div>

            {/* Why Now */}
            <motion.div {...fadeUp(0.08)}>
              <h3 className="font-montserrat font-bold text-navy text-xl mb-4">Why 2026. Why Now.</h3>
              <p className="mb-3">We founded Corporate 360 Hub in 2026 — not by accident, but by design.</p>
              <p className="mb-3">South India&apos;s consumer markets are at an inflection point. Brands are expanding aggressively. Competition is intensifying. Distribution windows are narrowing. The cost of fragmented execution has never been higher.</p>
              <p className="mb-3">Companies that enter South India with one integrated partner will move faster, spend smarter and hold market share longer than those still juggling six agencies.</p>
              <p className="mb-3">We built Corporate 360 Hub to be that partner.</p>
              <p className="mb-3">We operate across South India with a presence that goes beyond city offices — with on-ground coordinators, verified distributor relationships and certified field teams covering every major district.</p>
              <p>Our mission is simple and non-negotiable: <span className="font-semibold text-navy">Be the growth backbone for India&apos;s most ambitious brands.</span></p>
            </motion.div>

            {/* Closing promise */}
            <motion.div {...fadeUp(0.08)}>
              <div className="bg-navy rounded-xl p-8">
                <p className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em] mb-4">The Promise That Drives Everything</p>
                <p className="font-inter text-white/80 text-base leading-relaxed mb-4">When you work with Corporate 360 Hub, you are not hiring a vendor. You are appointing a growth partner who is accountable — by contract, by culture and by conviction — for every function that determines whether your business grows or stalls.</p>
                <p className="font-montserrat font-bold text-gold text-lg mb-5">One call. One team. One result.</p>
                <p className="font-inter text-white/60 text-sm leading-relaxed italic">
                  &ldquo;We find the dealers to sell your product. We hire the staff to promote it. We manage your finances so your growth is sustainable. We keep your people energised so your sales never dip. We build the brand so your customers trust it. And we map the market so your next move is always the right one.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}

// ─── 4. Meet the Founder ──────────────────────────────────────────────────────

type CareerEntry = {
  year: string;
  company: string;
  role: string;
  desc: string;
  highlight?: boolean;
};

const CAREER_TIMELINE: CareerEntry[] = [
  {
    year: "2011",
    company: "Bajaj Electricals",
    role: "Sales Officer",
    desc: "Began his career learning the fundamentals of channel development, distributor appointment, and ground-level market activation across Kerala. Organised exhibitions, roadshows, and promotional events — building the habit of results-first execution that would define his entire career.",
  },
  {
    year: "",
    company: "Havells India",
    role: "Deputy Manager",
    desc: "Moved up to appointing innovative channel partners, launching dealer meets, electrician meets, and fan melas across central Kerala. Built high-value business associations with marquee clients like Lulu International.",
  },
  {
    year: "",
    company: "Usha International",
    role: "Deputy Sales Manager — Premium Fans",
    desc: "Led the Premium Fans department, working directly with architects and interior designers to position the right product in premium projects across Kerala. Introduced new models to the market, appointed dealers and distributors statewide, and contributed to scheme development for channel partners.",
  },
  {
    year: "2020–2023",
    company: "Atomberg Technologies",
    role: "Regional Sales Manager — Kerala",
    desc: "The defining chapter. In three years, took Kerala from 1,000 fans per month to 50,000 fans per month — making Kerala the Number One market in India for Atomberg's BLDC fan category. Built an entire sales force from scratch, created policies and market strategies, and won multiple national awards including the Great Leader Award, South Star, and Outstanding Contribution recognition in three consecutive quarters.",
    highlight: true,
  },
  {
    year: "",
    company: "Luker Electric Technologies",
    role: "Assistant General Manager — Tamil Nadu",
    desc: "Expanded his footprint into Tamil Nadu, applying his proven market-building playbook to a new geography.",
  },
  {
    year: "",
    company: "KCM Appliances",
    role: "Regional Sales Head — South India",
    desc: "Took on a broader South India mandate, overseeing regional sales strategy and channel expansion.",
  },
  {
    year: "",
    company: "BSH Household Appliances (Bosch)",
    role: "Branch Manager — Kerala",
    desc: "Led Kerala operations for one of the world's most premium appliance brands, bringing enterprise-level discipline and premium market positioning experience.",
  },
  {
    year: "2026",
    company: "Corporate 360 Hub",
    role: "Founder & Lead Strategist",
    desc: "Drew on every lesson from 15 years of building markets to found Corporate 360 Hub — because he had lived, firsthand, the problem the firm was built to solve.",
    highlight: true,
  },
];

const FOUNDER_BIO_PARAS = [
  "Arun Salin is the Founder and Lead Strategist of Corporate 360 Hub — South India's 360° Business Architecture firm. With over 15 years of hands-on experience building sales channels, leading high-performance teams, and driving market dominance for some of India's most respected consumer brands, Arun brings a rare combination of strategic vision and ground-level execution to every client engagement.",
  "He has worked across South Indian Markets — not as a consultant observing from a distance, but as the man on the ground who built the networks, trained the teams, set the strategies, and delivered the numbers.",
  "Arun's career is not a textbook story. It is a 15-year master class in what actually works — and what doesn't — when brands try to grow across South India's highly competitive and distribution-intensive markets.",
];

function MeetTheFounderSection({ founderPhoto }: { founderPhoto?: unknown }) {
  const photoUrl = founderPhoto
    ? urlFor(founderPhoto).width(600).height(750).fit("crop").auto("format").url()
    : "/images/founder-arun-salin.jpg";

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">

        {/* Header */}
        <motion.div {...fadeUp(0.05)} className="text-center max-w-xl mx-auto mb-14">
          <SectionLabel color="gold">The Founder</SectionLabel>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl leading-tight">
            Meet Arun Salin
          </h2>
        </motion.div>

        {/* Top block — photo + bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

          {/* Photo */}
          <motion.div {...fadeLeft(0.08)}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <Image
                src={photoUrl}
                alt="Arun Salin — Founder, Corporate 360 Hub"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                <p className="font-montserrat font-bold text-white text-lg">Arun Salin</p>
                <p className="font-inter text-white/70 text-sm">Founder & Lead Strategist</p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div {...fadeRight(0.1)} className="flex flex-col justify-center">
            <div className="w-14 h-[2px] bg-gold mb-7" />

            <div className="space-y-4 font-inter text-slate text-base leading-relaxed mb-8">
              {FOUNDER_BIO_PARAS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate/10">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "50×", label: "Market Growth" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-montserrat font-bold text-navy text-2xl leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-inter text-slate/50 text-xs leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Career timeline */}
        <motion.div {...fadeUp(0.08)} className="mb-12">
          <h3 className="font-montserrat font-bold text-navy text-xl md:text-2xl mb-8 text-center">
            The Journey That Built Corporate 360 Hub
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-slate/15 md:-translate-x-px" aria-hidden />

            <div className="space-y-6">
              {CAREER_TIMELINE.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp(0.04 + i * 0.05)}
                    className={cn(
                      "relative flex md:items-center gap-6",
                      "md:flex-row",
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    )}
                  >
                    {/* Dot */}
                    <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 mt-5 md:mt-0 flex-shrink-0 z-10"
                      style={{
                        backgroundColor: item.highlight ? "#C9A84C" : "#0D7C7C",
                        borderColor: item.highlight ? "#C9A84C" : "#0D7C7C",
                      }}
                    />

                    {/* Card */}
                    <div className={cn(
                      "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    )}>
                      <div className={cn(
                        "rounded-xl p-5 border",
                        item.highlight
                          ? "bg-navy border-gold/30"
                          : "bg-white border-slate/10"
                      )}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className={cn(
                              "font-montserrat font-bold text-sm",
                              item.highlight ? "text-white" : "text-navy"
                            )}>
                              {item.company}
                            </p>
                            <p className={cn(
                              "font-inter text-xs mt-0.5",
                              item.highlight ? "text-gold" : "text-teal"
                            )}>
                              {item.role}
                            </p>
                          </div>
                          {item.year && (
                            <span className={cn(
                              "font-inter font-semibold text-xs px-2.5 py-1 rounded-full flex-shrink-0",
                              item.highlight
                                ? "bg-gold/20 text-gold"
                                : "bg-slate/10 text-slate/60"
                            )}>
                              {item.year}
                            </span>
                          )}
                        </div>
                        <p className={cn(
                          "font-inter text-sm leading-relaxed mt-2",
                          item.highlight ? "text-white/70" : "text-slate/70"
                        )}>
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the other side (desktop) */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ─── 5. Core Values ───────────────────────────────────────────────────────────

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

// ─── 6. Coverage Map ──────────────────────────────────────────────────────────

function CoverageMapSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        <motion.div {...fadeUp(0.05)} className="text-center mb-12">
          <SectionLabel color="gold">Our Reach</SectionLabel>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            Across South India
          </h2>
          <p className="font-inter text-white/45 text-base max-w-md mx-auto">
            One team. Five states. Complete market coverage.
          </p>
        </motion.div>

        {/* Supporting stat strip */}
        <motion.div
          {...fadeUp(0.25)}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-8 border-t border-white/10"
        >
          {[
            { value: "5", label: "States Covered" },
            { value: "2026", label: "Founded" },
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

// ─── 7. Team ──────────────────────────────────────────────────────────────────

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
    : "/images/founder-arun-salin.jpg";

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
            <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-5">
              <Image
                src={photoUrl}
                alt={founderName ?? "Arun Salin"}
                fill
                className="object-cover object-[center_35%]"
                sizes="96px"
              />
            </div>

            <p className="font-montserrat font-bold text-navy text-sm mb-1">
              {founderName ?? "Arun Salin"}
            </p>

            <p className="font-inter text-slate/50 text-sm mt-2 mb-1">
              {founderDesignation ?? "Founder & Lead Strategist"}
            </p>
            {false && (
              <span className="hidden">
                placeholder
              </span>
            )}
          </div>
        </motion.div>

        {/* Supporting text + CTA */}
        <motion.div {...fadeUp(0.15)} className="text-center max-w-md mx-auto">
          <p className="font-inter text-slate text-sm leading-relaxed mb-6">
            We&apos;re always looking for sharp, driven people to join South India&apos;s most
            ambitious business architecture firm. Get in touch with us directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-navy text-white font-montserrat font-bold text-sm rounded hover:bg-navy/90 hover:shadow-[0_6px_20px_rgba(11,31,58,0.25)] transition-all duration-300 group"
          >
            Get In Touch
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
