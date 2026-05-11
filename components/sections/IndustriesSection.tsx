"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Tv, Laptop, Car, Landmark, type LucideIcon } from "lucide-react";
import { HOME_INDUSTRIES } from "@/lib/constants";

const iconMap = {
  ShoppingBag,
  Tv,
  Laptop,
  Car,
  Landmark,
} as const;

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-inter font-semibold text-teal text-xs uppercase tracking-[0.22em]">
            Sectors
          </span>
          <h2 className="font-montserrat font-bold text-navy text-3xl md:text-4xl mt-3">
            Industries We Serve
          </h2>
        </motion.div>

        {/*
          Mobile: horizontal scroll strip (single row, overflow-x auto)
          Desktop (md+): 5-column grid
        */}
        <div className="relative">
          {/* Mobile scroll container */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
            {HOME_INDUSTRIES.map((industry, i) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex-shrink-0 snap-start"
                >
                  <IndustryCard Icon={Icon} label={industry.label} />
                </motion.div>
              );
            })}
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-4">
            {HOME_INDUSTRIES.map((industry, i) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <IndustryCard Icon={Icon} label={industry.label} />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function IndustryCard({
  Icon,
  label,
}: {
  Icon: LucideIcon;
  label: string;
}) {
  return (
    <div className="group flex flex-col items-center gap-3 px-5 py-6 bg-white border border-slate/10 rounded-lg min-w-[140px] md:min-w-0 hover:border-teal/40 hover:shadow-md hover:-translate-y-1 transition-all duration-250 cursor-default">
      <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center group-hover:bg-teal transition-colors duration-250">
        <Icon
          size={22}
          className="text-teal group-hover:text-white transition-colors duration-250"
        />
      </div>
      <span className="font-montserrat font-semibold text-navy text-sm text-center leading-tight">
        {label}
      </span>
    </div>
  );
}
