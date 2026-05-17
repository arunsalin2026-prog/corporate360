"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const WHY_US_POINTS = [
  {
    title: "We Find the Dealers",
    desc: "Identify, onboard, and activate the right distribution partners across South India.",
  },
  {
    title: "We Hire the Staff",
    desc: "Source and place qualified sales, service, and leadership talent tailored to your business.",
  },
  {
    title: "We Train Them",
    desc: "Build high-performance teams through structured training in sales, operations, and brand standards.",
  },
  {
    title: "We Build the Brand",
    desc: "Execute ATL, BTL, and TTL campaigns that create market presence, trust, and consumer pull.",
  },
] as const;

export default function WhyUsSection({
  headline,
  subtext,
}: {
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]">
            Our Edge
          </span>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl mt-3 mb-4">
            {headline ?? "One Partner. Total Ownership."}
          </h2>
          <p className="font-inter text-white/45 leading-relaxed">
            {subtext ?? "While others give you reports, we give you results. We own the outcome — from day one to scale."}
          </p>
        </motion.div>

        {/* 4-column cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {WHY_US_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: i * 0.1 }}
              className="flex flex-col p-6 bg-white/[0.04] border border-white/10 rounded-lg hover:border-gold/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Check + gold accent line */}
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 size={20} className="text-teal flex-shrink-0" />
                <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </div>

              <h3 className="font-montserrat font-bold text-white text-lg mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="font-inter text-white/45 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SPR highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative border border-gold/30 rounded-lg p-8 md:p-10 text-center overflow-hidden"
        >
          {/* Gold diagonal texture */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.03) 50%, rgba(13,124,124,0.05) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(201,168,76,0.025) 18px, rgba(201,168,76,0.025) 19px)",
            }}
            aria-hidden
          />

          <div className="relative">
            <p className="font-montserrat font-bold text-gold text-xs uppercase tracking-[0.24em] mb-4">
              Single Point of Responsibility
            </p>
            <p
              className="font-montserrat font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}
            >
              One partner for{" "}
              <span className="text-teal">People</span>,{" "}
              <span className="text-teal">Marketing</span>,{" "}
              and{" "}
              <span className="text-teal">Network Expansion</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
