"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Megaphone,
  Network,
  Settings,
  Rocket,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const VERTICALS = [
  {
    label: "People Layer",
    accent: "teal" as const,
    Icon: Users,
    description:
      "Recruit, train, and retain the human infrastructure for growth.",
    items: [
      "Recruitment",
      "Training Bootcamp",
      "Wellness Protocol",
      "Performance Reviews",
    ],
  },
  {
    label: "Presence Layer",
    accent: "gold" as const,
    Icon: Megaphone,
    description:
      "Build brand visibility and market awareness across all channels.",
    items: [
      "ATL Media",
      "BTL Activation",
      "Product Launches",
      "Digital Integration",
    ],
  },
  {
    label: "Infrastructure Layer",
    accent: "deep" as const,
    Icon: Network,
    description:
      "Establish the distribution and dealer network that delivers scale.",
    items: [
      "Dealer Appointment",
      "Distributor Vetting",
      "Market Mapping",
      "Channel Expansion",
    ],
  },
];

const ACCENT_STYLES = {
  teal: {
    bar: "bg-teal",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    pill: "bg-teal/10 text-teal",
  },
  gold: {
    bar: "bg-gold",
    iconBg: "bg-gold/10",
    iconColor: "text-[#8b6f2c]",
    pill: "bg-gold/10 text-[#8b6f2c]",
  },
  deep: {
    bar: "bg-navy",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    pill: "bg-navy/10 text-navy",
  },
};

const PHASES = [
  {
    range: "Day 0 – 30",
    phase: "Infrastructure Phase",
    color: "navy" as const,
    Icon: Settings,
    tagline: "We set up your operational backbone.",
    items: [
      "Market mapping and territory allocation",
      "Dealer / distributor identification",
      "Recruitment pipeline setup",
      "Brand audit and gap analysis",
    ],
  },
  {
    range: "Day 31 – 60",
    phase: "People Phase",
    color: "teal" as const,
    Icon: Users,
    tagline: "We activate your human engine.",
    items: [
      "Sales force recruitment completion",
      "Training bootcamp delivery",
      "Field force deployment",
      "BTL team placement",
    ],
  },
  {
    range: "Day 61 – 90",
    phase: "Activation Phase",
    color: "gold" as const,
    Icon: Rocket,
    tagline: "We go to market and generate results.",
    items: [
      "Product launch execution",
      "Dealer meet and network activation",
      "ATL / BTL campaign launch",
      "Performance tracking begins",
    ],
  },
];

const PHASE_STYLES = {
  navy: {
    card: "bg-[#0F2A48] border border-white/10",
    badge: "bg-white/10 text-white/80",
    title: "text-white",
    tagline: "text-white/65",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    checkColor: "text-teal",
    itemColor: "text-white/75",
    node: "bg-white border-white/50",
  },
  teal: {
    card: "bg-teal border border-teal/80",
    badge: "bg-white/15 text-white",
    title: "text-white",
    tagline: "text-white/75",
    iconBg: "bg-white/15",
    iconColor: "text-white",
    checkColor: "text-white",
    itemColor: "text-white/80",
    node: "bg-teal border-white/60",
  },
  gold: {
    card: "bg-gold border border-gold/70",
    badge: "bg-navy/10 text-navy/80",
    title: "text-navy",
    tagline: "text-navy/70",
    iconBg: "bg-navy/10",
    iconColor: "text-navy",
    checkColor: "text-navy",
    itemColor: "text-navy/75",
    node: "bg-gold border-white/60",
  },
};

const REVENUE_MODELS = [
  {
    title: "HR Subscription",
    model: "Monthly Retainer",
    description:
      "Ongoing recruitment support, HR advisory, and training program delivery — structured as a fixed monthly engagement.",
  },
  {
    title: "Marketing Retainer",
    model: "Monthly Retainer",
    description:
      "End-to-end ATL/BTL campaign management, brand support, and event production under a single monthly fee.",
  },
  {
    title: "Expansion Success Fee",
    model: "Performance-Linked",
    description:
      "Dealer and distributor appointment programs where our fee is tied to verified network milestones achieved.",
  },
];

const SPR_LINES = [
  "We find the dealers.",
  "We hire the staff.",
  "We keep them healthy.",
  "We run the campaigns.",
];

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function BusinessModelContent() {
  return (
    <div className="pt-20">
      <PageHero />
      <ThreeVerticalsSection />
      <TimelineSection />
      <RevenueStreamsSection />
      <SPRPitchSection />
    </div>
  );
}

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="min-h-[50vh] bg-navy flex items-end relative overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* "360°" watermark */}
      <div
        aria-hidden
        className="absolute right-[-3%] bottom-[-8%] font-montserrat font-black text-white leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(200px, 30vw, 420px)", opacity: 0.03 }}
      >
        360°
      </div>

      <div className="container-max relative z-10 pb-20 pt-16">
        <motion.nav
          {...fadeUp(0)}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-white/40 font-inter text-xs uppercase tracking-[0.18em] mb-8"
        >
          <Link
            href="/"
            className="hover:text-gold transition-colors duration-150"
          >
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gold" aria-current="page">Business Model</span>
        </motion.nav>

        <motion.span
          {...fadeUp(0.05)}
          className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]"
        >
          Our Approach
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mt-3 mb-6 max-w-4xl leading-tight"
        >
          Phase 1: The Growth Catalyst Framework
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="font-inter text-white/65 text-lg leading-relaxed max-w-2xl"
        >
          A structured 90-day model to activate, grow, and retain business
          impact.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Three Verticals ──────────────────────────────────────────────────────────
function ThreeVerticalsSection() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.22em]">
            Integrated Framework
          </span>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mt-3">
            Three Layers of Business Growth
          </h2>
          <p className="font-inter text-slate mt-4 max-w-xl mx-auto">
            Every engagement activates all three layers simultaneously — because
            isolated fixes don&apos;t create 360° results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_44px_1fr_44px_1fr] items-start gap-4 lg:gap-0">
          <VerticalCard vertical={VERTICALS[0]} index={0} />
          <ConnectorArrow delay={0.35} />
          <VerticalCard vertical={VERTICALS[1]} index={1} />
          <ConnectorArrow delay={0.52} />
          <VerticalCard vertical={VERTICALS[2]} index={2} />
        </div>
      </div>
    </section>
  );
}

function VerticalCard({
  vertical,
  index,
}: {
  vertical: (typeof VERTICALS)[number];
  index: number;
}) {
  const Icon = vertical.Icon as LucideIcon;
  const a = ACCENT_STYLES[vertical.accent];

  return (
    <motion.div
      {...fadeUp(0.1 + index * 0.12)}
      className="bg-white rounded-xl border border-slate/10 shadow-sm overflow-hidden flex flex-col h-full"
    >
      <div className={`h-1 w-full ${a.bar}`} />
      <div className="p-7 flex flex-col gap-5 flex-1">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${a.iconBg}`}
        >
          <Icon size={22} className={a.iconColor} />
        </div>
        <div>
          <h3 className="font-montserrat font-bold text-navy text-xl mb-2">
            {vertical.label}
          </h3>
          <p className="font-inter text-slate text-sm leading-relaxed">
            {vertical.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {vertical.items.map((item) => (
            <span
              key={item}
              className={`font-inter font-medium text-xs px-3 py-1 rounded-full ${a.pill}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ConnectorArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        delay,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="hidden lg:flex items-center justify-center pt-16"
    >
      <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
        <ArrowRight size={15} className="text-gold" />
      </div>
    </motion.div>
  );
}

// ─── 90-Day Timeline ──────────────────────────────────────────────────────────
function TimelineSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-max relative z-10">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]">
            The Roadmap
          </span>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl mt-3">
            90-Day Launch &amp; Lead Timeline
          </h2>
          <p className="font-inter text-white/55 mt-4 max-w-xl mx-auto">
            Three structured phases. Clear milestones. Measurable results by day
            90.
          </p>
        </motion.div>

        {/* Animated progress track — desktop only */}
        <div
          ref={lineRef}
          className="hidden lg:flex items-center justify-between mb-10 relative px-[calc(100%/6)]"
        >
          {/* Background track */}
          <div className="absolute left-[calc(100%/6)] right-[calc(100%/6)] top-1/2 h-[2px] bg-white/10 -translate-y-1/2" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[calc(100%/6)] right-[calc(100%/6)] top-1/2 h-[2px] -translate-y-1/2 w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.7), #0D7C7C 50%, #C9A84C)",
              transformOrigin: "left center",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: lineInView ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          />
          {/* Phase nodes */}
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: lineInView ? 1 : 0,
                scale: lineInView ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.4 + i * 0.35,
                type: "spring",
              }}
              className={`relative z-10 w-4 h-4 rounded-full border-2 ${PHASE_STYLES[phase.color].node}`}
            />
          ))}
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PHASES.map((phase, i) => (
            <PhaseCard key={phase.phase} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof PHASES)[number];
  index: number;
}) {
  const Icon = phase.Icon as LucideIcon;
  const s = PHASE_STYLES[phase.color];

  return (
    <motion.div
      {...fadeUp(0.15 + index * 0.12)}
      className={`rounded-2xl p-7 flex flex-col gap-5 ${s.card}`}
    >
      {/* Badge + icon */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`font-inter font-semibold text-xs px-3 py-1 rounded-full ${s.badge}`}
        >
          {phase.range}
        </span>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg}`}
        >
          <Icon size={20} className={s.iconColor} />
        </div>
      </div>
      {/* Title + tagline */}
      <div>
        <h3 className={`font-montserrat font-bold text-lg mb-1.5 ${s.title}`}>
          {phase.phase}
        </h3>
        <p className={`font-inter text-sm leading-relaxed ${s.tagline}`}>
          {phase.tagline}
        </p>
      </div>
      {/* Checklist */}
      <ul className="space-y-3">
        {phase.items.map((item, fi) => (
          <li key={fi} className="flex items-start gap-2.5">
            <CheckCircle2
              size={15}
              className={`mt-0.5 flex-shrink-0 ${s.checkColor}`}
            />
            <span
              className={`font-inter text-sm leading-relaxed ${s.itemColor}`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Revenue Streams ──────────────────────────────────────────────────────────
function RevenueStreamsSection() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.22em]">
            Engagement Models
          </span>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mt-3">
            How We Work With Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {REVENUE_MODELS.map((model, i) => (
            <motion.div
              key={model.title}
              {...fadeUp(0.1 + i * 0.1)}
              className="bg-white rounded-xl border border-slate/10 shadow-sm p-7 flex flex-col gap-4"
            >
              <span
                className={`self-start font-inter font-semibold text-xs px-3 py-1 rounded-full ${
                  model.model === "Performance-Linked"
                    ? "bg-gold/10 text-[#8b6f2c]"
                    : "bg-teal/10 text-teal"
                }`}
              >
                {model.model}
              </span>
              <h3 className="font-montserrat font-bold text-navy text-xl">
                {model.title}
              </h3>
              <p className="font-inter text-slate text-sm leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.42)}
          className="text-center font-inter text-slate/60 text-sm italic"
        >
          Custom packages available — contact us for a tailored proposal.
        </motion.p>
      </div>
    </section>
  );
}

// ─── SPR Pitch ────────────────────────────────────────────────────────────────
function SPRPitchSection() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(201,168,76,0.025) 18px, rgba(201,168,76,0.025) 19px)",
        }}
      />
      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          {/* Pull quote with gold left bar */}
          <motion.div
            {...fadeLeft(0)}
            className="border-l-4 border-gold pl-8 mb-12"
          >
            {SPR_LINES.map((line, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.08 + i * 0.09)}
                className="font-montserrat font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-snug mb-3 last:mb-0"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp(0.46)}
            className="font-montserrat font-bold text-gold text-xl md:text-2xl mb-10"
          >
            This is the 360° difference.
          </motion.p>

          <motion.div {...fadeUp(0.54)}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-inter font-bold text-sm rounded-lg hover:bg-gold/90 transition-all duration-200 group shadow-lg shadow-gold/20"
            >
              Start Your 90-Day Journey
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
