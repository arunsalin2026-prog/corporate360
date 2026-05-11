"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Monitor,
  Laptop,
  Car,
  Landmark,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

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

const INDUSTRIES = [
  {
    id: "fmcg",
    number: "01",
    label: "FMCG",
    full: "Fast-Moving Consumer Goods",
    Icon: ShoppingBag,
    description:
      "From beverages to personal care — we place field promoters, run BTL campaigns, and expand dealer networks for FMCG brands across all 14 Kerala districts.",
    contacts: ["Marketing Head", "Sales Head", "HR Manager"],
    services: [
      "Talent Acquisition",
      "BTL Activation",
      "Network Expansion",
      "Market Research",
    ],
    cta: "Talk to FMCG Head",
  },
  {
    id: "fmcd",
    number: "02",
    label: "FMCD",
    full: "Consumer Durables",
    Icon: Monitor,
    description:
      "Refrigerators, ACs, washing machines — we recruit dealer-facing sales teams, run product launch events, and expand retail touchpoints for consumer durable brands.",
    contacts: ["Brand Manager", "Dealer Network Head"],
    services: [
      "Product Launches",
      "Sales Recruitment",
      "Dealer Network",
      "BTL Campaigns",
    ],
    cta: "Talk to FMCD Head",
  },
  {
    id: "it",
    number: "03",
    label: "IT & Technology",
    full: "Software, SaaS & Digital Services",
    Icon: Laptop,
    description:
      "SaaS, software, digital services — we handle tech talent acquisition, sales force staffing, and go-to-market execution for IT companies entering Kerala.",
    contacts: ["HR Head", "Talent Acquisition Manager"],
    services: [
      "Tech Talent Acquisition",
      "Sales Force Staffing",
      "Go-to-Market Execution",
      "Market Research",
    ],
    cta: "Talk to IT Head",
  },
  {
    id: "automotive",
    number: "04",
    label: "Automotive",
    full: "Two-Wheelers, Four-Wheelers & Dealers",
    Icon: Car,
    description:
      "Two-wheelers, four-wheelers, dealer networks — we build and activate dealer infrastructure, hire showroom staff, and run exchange mela events.",
    contacts: ["Regional Sales Manager", "Dealer Principal"],
    services: [
      "Dealer Appointment",
      "Showroom Staff Hiring",
      "Exchange Mela Events",
      "Network Expansion",
    ],
    cta: "Talk to Automotive Head",
  },
  {
    id: "banking",
    number: "05",
    label: "Banking & NBFC",
    full: "Banks, NBFCs & Microfinance Institutions",
    Icon: Landmark,
    description:
      "Banks, NBFCs, MFIs — we staff field agents and relationship managers, run awareness campaigns, and expand branch-level distribution networks.",
    contacts: ["HR Head", "Business Development Head"],
    services: [
      "Field Agent Staffing",
      "RM Recruitment",
      "Awareness Campaigns",
      "Network Expansion",
    ],
    cta: "Talk to Banking Head",
  },
];

export default function IndustriesPageContent() {
  return (
    <div className="pt-20">
      <PageHero />
      {INDUSTRIES.map((industry, i) => (
        <IndustrySection
          key={industry.id}
          industry={industry}
          isNavy={i % 2 === 0}
        />
      ))}
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function PageHero() {
  return (
    <section className="bg-navy section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-max relative z-10">
        <motion.nav
          {...fadeUp(0)}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-white/40 font-inter text-xs uppercase tracking-[0.18em] mb-8"
        >
          <Link href="/" className="hover:text-gold transition-colors duration-150">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gold" aria-current="page">Industries</span>
        </motion.nav>

        <motion.span
          {...fadeUp(0.05)}
          className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]"
        >
          Our Sectors
        </motion.span>
        <motion.h1
          {...fadeUp(0.1)}
          className="font-montserrat font-bold text-white text-4xl md:text-5xl lg:text-6xl mt-3 mb-6 max-w-4xl leading-tight"
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          {...fadeUp(0.16)}
          className="font-inter text-white/65 text-lg leading-relaxed max-w-2xl"
        >
          Deep sector knowledge. Ground-level execution. Five industries, all 14
          districts.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Industry Section ─────────────────────────────────────────────────────────
function IndustrySection({
  industry,
  isNavy,
}: {
  industry: (typeof INDUSTRIES)[number];
  isNavy: boolean;
}) {
  const Icon = industry.Icon as LucideIcon;
  const ctaHref = `/contact?service=${encodeURIComponent(industry.label)}`;

  return (
    <section
      id={`industry-${industry.id}`}
      className={`section-padding relative overflow-hidden scroll-mt-24 ${
        isNavy ? "bg-navy" : "bg-offwhite"
      }`}
    >
      {/* Number watermark */}
      <div
        aria-hidden
        className="absolute top-0 right-0 font-montserrat font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: "clamp(140px, 18vw, 260px)",
          color: "#C9A84C",
          opacity: isNavy ? 0.07 : 0.06,
          lineHeight: 1,
          transform: "translate(5%, -20%)",
        }}
      >
        {industry.number}
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
          {/* Left — Identity + description */}
          <div>
            <motion.div
              {...fadeLeft(0)}
              className="flex items-center gap-4 mb-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isNavy ? "bg-teal/20" : "bg-navy"
                }`}
              >
                <Icon
                  size={30}
                  className={isNavy ? "text-teal" : "text-white"}
                />
              </div>
              <div>
                <span
                  className={`font-montserrat font-bold text-xs tracking-[0.18em] uppercase block mb-0.5 ${
                    isNavy ? "text-gold/70" : "text-gold"
                  }`}
                >
                  Sector {industry.number}
                </span>
                <span
                  className={`font-inter text-xs ${
                    isNavy ? "text-white/45" : "text-slate/60"
                  }`}
                >
                  {industry.full}
                </span>
              </div>
            </motion.div>

            <motion.h2
              {...fadeLeft(0.08)}
              className={`font-montserrat font-bold text-3xl md:text-4xl leading-tight mb-6 ${
                isNavy ? "text-white" : "text-navy"
              }`}
            >
              {industry.label}
            </motion.h2>

            <motion.p
              {...fadeLeft(0.14)}
              className={`font-inter leading-relaxed text-lg mb-8 ${
                isNavy ? "text-white/70" : "text-slate"
              }`}
            >
              {industry.description}
            </motion.p>

            <motion.div {...fadeLeft(0.2)}>
              <Link
                href={ctaHref}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold text-sm transition-all duration-200 group ${
                  isNavy
                    ? "bg-gold text-navy hover:bg-gold/90"
                    : "bg-navy text-white hover:bg-navy/90"
                }`}
              >
                {industry.cta}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right — Contacts + Services card */}
          <motion.div
            {...fadeRight(0.1)}
            className={`rounded-2xl p-8 ${
              isNavy
                ? "bg-white/[0.05] border border-white/10"
                : "bg-white border border-slate/10 shadow-sm"
            }`}
          >
            {/* Key contacts */}
            <div className="mb-8">
              <p
                className={`font-inter font-semibold text-xs uppercase tracking-[0.18em] mb-4 ${
                  isNavy ? "text-teal" : "text-teal"
                }`}
              >
                Key Contacts We Work With
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.contacts.map((contact) => (
                  <span
                    key={contact}
                    className={`font-inter font-medium text-xs px-3 py-1.5 rounded-full ${
                      isNavy
                        ? "bg-teal/15 text-teal"
                        : "bg-navy/10 text-navy"
                    }`}
                  >
                    {contact}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className={`h-px mb-8 ${
                isNavy ? "bg-white/10" : "bg-slate/15"
              }`}
            />

            {/* Relevant services */}
            <div>
              <p
                className={`font-inter font-semibold text-xs uppercase tracking-[0.18em] mb-4 ${
                  isNavy ? "text-gold/70" : "text-gold"
                }`}
              >
                Services We Deliver
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.services.map((service) => (
                  <span
                    key={service}
                    className={`font-inter font-medium text-xs px-3 py-1.5 rounded-full ${
                      isNavy
                        ? "bg-gold/10 text-gold/80"
                        : "bg-gold/10 text-[#8b6f2c]"
                    }`}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
