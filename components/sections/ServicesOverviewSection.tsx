"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Megaphone, BarChart2, Rocket, Network, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOME_SERVICES } from "@/lib/constants";

const iconMap = {
  Users,
  Megaphone,
  BarChart2,
  Rocket,
  Network,
  PieChart,
} as const;

export default function ServicesOverviewSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-inter font-semibold text-gold text-xs uppercase tracking-[0.22em]">
            What We Do
          </span>
          <h2 className="font-montserrat font-bold text-white text-3xl md:text-4xl mt-3 mb-4 leading-tight">
            6 Pillars of 360° Growth
          </h2>
          <p className="font-inter text-white/45 leading-relaxed">
            From finding your people to building your market presence —
            one partner, total responsibility.
          </p>
        </motion.div>

        {/* Cards — 3 + 2 desktop layout using 6-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {HOME_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isSecondRow = i >= 3;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "lg:col-span-2",
                  isSecondRow && i === 3 && "lg:col-start-2",
                  isSecondRow && i === 4 && "lg:col-start-4"
                )}
              >
                <Link
                  href="/services"
                  className="group flex flex-col h-full bg-[#0F2847] border border-white/[0.06] rounded-lg overflow-hidden hover:border-gold/40 hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(201,168,76,0.11)] transition-all duration-300"
                >
                  {/* Teal top accent */}
                  <div className="h-[3px] bg-gradient-to-r from-teal via-teal/80 to-teal/40 flex-shrink-0" />

                  <div className="flex flex-col flex-1 p-6">
                    {/* Number + Icon */}
                    <div className="flex items-start justify-between mb-5">
                      <span className="font-montserrat font-bold text-gold/70 text-4xl leading-none">
                        {service.number}
                      </span>
                      <div className="w-9 h-9 rounded-md bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={17} className="text-teal" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-montserrat font-semibold text-white text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-white/40 text-sm leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <span className="inline-flex items-center gap-1 font-inter font-semibold text-teal text-xs group-hover:gap-2 transition-all duration-200">
                      Learn More <span>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
