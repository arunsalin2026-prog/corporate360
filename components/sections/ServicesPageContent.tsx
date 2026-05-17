"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Megaphone,
  BarChart2,
  Rocket,
  Network,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

// ─── Icon map ─────────────────────────────────────────────────────────────────
const iconMap = {
  Users,
  Megaphone,
  BarChart2,
  Rocket,
  Network,
} as const;

// ─── Full pillar data ─────────────────────────────────────────────────────────
const PILLARS = [
  {
    id: "talent",
    number: "01",
    title: "Talent Acquisition & HR Training",
    icon: "Users" as const,
    paragraphs: [
      "Finding the right people is half the battle — keeping them is the other half. Our talent acquisition practice covers the full recruitment lifecycle, from job architecture and sourcing strategy to structured interviews and offer management.",
      "Beyond hiring, we design training programs that transform raw potential into frontline performance. Whether it's product knowledge workshops, sales skill development, or leadership readiness programs, we build people who stay and grow.",
      "Our HR advisory arm helps you build the systems that make great hires stick: onboarding frameworks, performance review cycles, compensation benchmarking, and the policies that protect both employer and employee.",
    ],
    features: [
      "End-to-end recruitment across all levels — frontline to C-suite",
      "Structured competency-based interview frameworks",
      "Sales and product knowledge training programs",
      "Leadership pipeline and succession planning",
      "HR policy design, compliance, and documentation",
      "Performance management and appraisal systems",
    ],
  },
  {
    id: "marketing",
    number: "02",
    title: "Marketing & Branding (ATL · BTL · TTL)",
    icon: "Megaphone" as const,
    paragraphs: [
      "A brand without reach is invisible. A campaign without strategy is noise. We design and execute marketing programs that work at every level — from mass awareness to the last metre of the retail shelf.",
      "Our ATL practice covers television, radio, print, and outdoor media buying and creative production. Our BTL team runs in-store activations, sampling drives, and channel promotions that move product. Our TTL campaigns bridge it all with digital amplification that connects mass media to point-of-sale.",
      "We manage every element in-house — creative strategy, media planning, vendor coordination, and post-campaign analytics — so you get one accountable partner instead of five fragmented agencies.",
    ],
    features: [
      "ATL: TV, radio, print, and outdoor media campaigns",
      "BTL: In-store activations, sampling, and direct marketing",
      "TTL: Integrated campaigns bridging offline and digital",
      "Brand identity, visual communication, and packaging design",
      "Trade marketing, merchandising standards, and POSM",
      "Campaign analytics, ROI tracking, and performance reporting",
    ],
  },
  {
    id: "research",
    number: "03",
    title: "Market Research & Intelligence",
    icon: "BarChart2" as const,
    paragraphs: [
      "Strategy built on assumption is strategy built on sand. Our market intelligence practice gives you ground-level data — direct from consumers, channels, and competitors — that turns guesswork into confident decisions.",
      "We conduct primary and secondary research across South India, mapping purchase behaviour, channel preferences, brand perception, and white-space opportunities specific to your category and geography.",
      "Every research engagement ends with a management-ready brief: key findings, strategic implications, and a prioritised action plan — not a thick report that gathers dust.",
    ],
    features: [
      "Consumer behaviour surveys and focus group research",
      "Competitor landscape and benchmarking studies",
      "Market sizing, forecasting, and opportunity assessment",
      "Channel and distribution network analysis",
      "Pricing intelligence and elasticity research",
      "White-space identification and entry strategy briefs",
    ],
  },
  {
    id: "launches",
    number: "04",
    title: "Product Launches & Dealer Meets",
    icon: "Rocket" as const,
    paragraphs: [
      "A product launch is a one-time event with permanent consequences. Get it right and you create market momentum. Get it wrong and you spend months rebuilding credibility. We take the execution risk off your plate.",
      "From the first planning meeting to the last post-event report, our team manages every detail: venue selection, logistics, AV and production, dealer incentive structures, media coverage, and social amplification. We've run launches for national brands entering South India and local brands going pan-India.",
      "Our dealer meet programs are built to do more than inform — they're designed to motivate. We craft experiences that reinforce brand loyalty, communicate trade terms, and send your channel partners home ready to sell.",
    ],
    features: [
      "End-to-end launch planning, logistics, and on-site execution",
      "Venue selection, AV, production, and stage management",
      "Dealer engagement, incentive design, and trade motivation",
      "Trade show and exhibition management",
      "Media coordination, press coverage, and social amplification",
      "Post-event analytics and impact reporting",
    ],
  },
  {
    id: "network",
    number: "05",
    title: "Network Appointment & Expansion",
    icon: "Network" as const,
    paragraphs: [
      "Distribution is destiny. A superior product sitting in a warehouse is worth nothing. We build the on-the-ground networks that get your product into every relevant retail point across South India.",
      "Our process starts with a market-wise opportunity map — identifying the right distributor profiles, dealer tiers, and coverage gaps. We then manage the entire appointment process: prospecting, due diligence, onboarding, and commercial agreement structuring.",
      "Post-appointment, we don't disappear. Our network activation programs ensure your new channels are performing against target — with regular health audits, incentive programs, and retail visibility standards that sustain sell-through.",
    ],
    features: [
      "District-wise dealer and distributor opportunity mapping",
      "Prospect identification, vetting, and appointment management",
      "Onboarding, compliance, and commercial agreement structuring",
      "Channel incentive program design and administration",
      "Retail visibility standards and merchandising compliance",
      "Network health audits and performance benchmarking",
    ],
  },
] as const;

// ─── Hero pill nav ────────────────────────────────────────────────────────────
const PILL_NAV = [
  { label: "Talent & HR", href: "#pillar-talent" },
  { label: "Marketing", href: "#pillar-marketing" },
  { label: "Research", href: "#pillar-research" },
  { label: "Launches", href: "#pillar-launches" },
  { label: "Network", href: "#pillar-network" },
];

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

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

// ─── Types ────────────────────────────────────────────────────────────────────
interface SanityServicePillar {
  pillarNumber?: string;
  serviceName?: string;
  shortDescription?: string;
  features?: string[];
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function ServicesPageContent({
  services,
}: {
  pageIntro?: string;
  services?: SanityServicePillar[];
}) {
  const mergedPillars = PILLARS.map((pillar, i) => {
    const sanity = services?.[i];
    if (!sanity) return pillar;
    return {
      ...pillar,
      title: sanity.serviceName ?? pillar.title,
      features: sanity.features && sanity.features.length > 0
        ? sanity.features
        : pillar.features,
    };
  });

  return (
    <div className="pt-20">
      <PageHero />
      {mergedPillars.map((pillar, i) => (
        <PillarSection
          key={pillar.id}
          pillar={pillar}
          Icon={iconMap[pillar.icon]}
          isNavy={i % 2 === 0}
        />
      ))}
      <SPRSection />
    </div>
  );
}

// ─── Page Hero ────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-max relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          {...fadeUp(0)}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-white/40 font-inter text-xs uppercase tracking-[0.18em] mb-8"
        >
          <Link href="/" className="hover:text-gold transition-colors duration-150">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gold" aria-current="page">Services</span>
        </motion.nav>

        <motion.span
          {...fadeUp(0.05)}
          className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]"
        >
          Our 5 Pillars
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mt-3 mb-6 max-w-4xl leading-tight"
        >
          Structured Solutions for Every Business Challenge
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="font-inter text-white/65 text-lg leading-relaxed max-w-2xl mb-12"
        >
          Five integrated service pillars. One accountable partner. Delivered
          across South India.
        </motion.p>

        {/* Pill navigation anchors */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
          {PILL_NAV.map((pill) => (
            <a
              key={pill.href}
              href={pill.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white/80 font-inter text-sm hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-200 group"
            >
              {pill.label}
              <ArrowRight
                size={13}
                className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pillar Section ───────────────────────────────────────────────────────────
type PillarData = {
  id: string;
  number: string;
  title: string;
  icon: keyof typeof iconMap;
  paragraphs: readonly string[];
  features: readonly string[];
};

function PillarSection({
  pillar,
  Icon,
  isNavy,
}: {
  pillar: PillarData;
  Icon: LucideIcon;
  isNavy: boolean;
}) {
  const ctaHref = `/contact?service=${encodeURIComponent(pillar.title)}`;

  return (
    <section
      id={`pillar-${pillar.id}`}
      className={`section-padding relative overflow-hidden scroll-mt-24 ${
        isNavy ? "bg-navy" : "bg-offwhite"
      }`}
    >
      {/* Gold number watermark */}
      <div
        aria-hidden
        className="absolute top-0 right-0 font-montserrat font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(160px, 20vw, 280px)",
          color: "#C9A84C",
          opacity: isNavy ? 0.07 : 0.06,
          lineHeight: 1,
          transform: "translate(5%, -20%)",
        }}
      >
        {pillar.number}
      </div>

      {/* Gold top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: isNavy
            ? "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)"
            : "linear-gradient(to right, #C9A84C, #C9A84C80, transparent)",
        }}
      />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Identity + copy */}
          <div>
            <motion.div
              {...fadeLeft(0)}
              className="flex items-center gap-4 mb-6"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isNavy ? "bg-teal/20" : "bg-navy"
                }`}
              >
                <Icon size={26} className={isNavy ? "text-teal" : "text-white"} />
              </div>
              <span
                className={`font-montserrat font-bold text-xs tracking-[0.18em] uppercase ${
                  isNavy ? "text-gold/70" : "text-gold"
                }`}
              >
                Pillar {pillar.number}
              </span>
            </motion.div>

            <motion.h2
              {...fadeLeft(0.08)}
              className={`font-montserrat font-bold text-3xl md:text-4xl leading-tight mb-8 ${
                isNavy ? "text-white" : "text-navy"
              }`}
            >
              {pillar.title}
            </motion.h2>

            {(pillar.paragraphs as readonly string[]).map((para, pi) => (
              <motion.p
                key={pi}
                {...fadeLeft(0.12 + pi * 0.07)}
                className={`font-inter leading-relaxed mb-5 last:mb-0 ${
                  isNavy ? "text-white/70" : "text-slate"
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right — Feature card + CTA */}
          <div>
            <motion.div
              {...fadeRight(0.1)}
              className={`rounded-2xl p-8 ${
                isNavy
                  ? "bg-white/[0.05] border border-white/10"
                  : "bg-white border border-slate/10 shadow-sm"
              }`}
            >
              <p
                className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.18em] mb-6"
              >
                What&apos;s Included
              </p>

              <ul className="space-y-4 mb-8">
                {(pillar.features as readonly string[]).map((feature, fi) => (
                  <motion.li
                    key={fi}
                    {...fadeRight(0.14 + fi * 0.05)}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-gold mt-0.5 flex-shrink-0"
                    />
                    <span
                      className={`font-inter text-sm leading-relaxed ${
                        isNavy ? "text-white/80" : "text-slate"
                      }`}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.div {...fadeRight(0.38)}>
                <Link
                  href={ctaHref}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold text-sm transition-all duration-200 group ${
                    isNavy
                      ? "bg-gold text-navy hover:bg-gold/90"
                      : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  Get a Quote for This Service
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SPR Summary Section ──────────────────────────────────────────────────────
function SPRSection() {
  return (
    <section className="section-padding bg-gold relative overflow-hidden">
      {/* Diagonal navy texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(11,31,58,0.04) 18px, rgba(11,31,58,0.04) 19px)",
        }}
      />
      {/* Radial highlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 30%, rgba(255,255,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container-max relative z-10 text-center">
        <motion.span
          {...fadeUp(0)}
          className="font-inter font-semibold text-navy/60 text-xs uppercase tracking-[0.22em]"
        >
          Strategic Partnership
        </motion.span>

        <motion.h2
          {...fadeUp(0.08)}
          className="font-montserrat font-bold text-navy text-3xl md:text-4xl lg:text-5xl mt-3 mb-6 max-w-3xl mx-auto leading-tight"
        >
          All 5 pillars. One partner.{" "}
          <span className="whitespace-nowrap">Zero coordination headache.</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="font-inter text-navy/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Most businesses waste time and budget managing multiple agencies that
          don&apos;t talk to each other. We deliver all five pillars as an integrated
          system — one point of contact, a shared strategy, and measurable outcomes
          at every stage.
        </motion.p>

        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-inter font-semibold text-sm rounded-lg hover:bg-navy/90 transition-all duration-200 group shadow-lg"
          >
            Talk to Us About Your Business
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
