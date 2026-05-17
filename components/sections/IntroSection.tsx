"use client";

import { motion } from "framer-motion";
import { Users, Megaphone, Network } from "lucide-react";

const SPR_PILLARS = [
  {
    icon: Users,
    label: "Your People",
    desc: "Talent acquisition, HR training & placement",
  },
  {
    icon: Megaphone,
    label: "Your Brand",
    desc: "ATL, BTL & TTL marketing campaigns",
  },
  {
    icon: Network,
    label: "Your Network",
    desc: "Dealer network & distribution expansion",
  },
] as const;

export default function IntroSection({ introParagraph }: { introParagraph?: string }) {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Left — main paragraph with teal left border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-3 pl-6 border-l-[3px] border-teal"
          >
            <p
              className="font-montserrat font-bold text-navy leading-snug mb-4"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)" }}
            >
              South India&apos;s{" "}
              <span className="text-teal">
                Single Point of Responsibility (SPR)
              </span>{" "}
              for companies that want to grow.
            </p>
            <p className="font-inter text-slate text-base md:text-lg leading-relaxed">
              {introParagraph ?? (
                <>
                  Without managing 3 separate agencies. We handle your people,
                  your brand, and your distribution network — so you focus on
                  what you do best:{" "}
                  <span className="text-navy font-semibold">
                    building a great product.
                  </span>
                </>
              )}
            </p>
          </motion.div>

          {/* Right — 3 SPR pillars */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {SPR_PILLARS.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate/10 hover:border-teal/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-teal" />
                </div>
                <div className="pt-0.5">
                  <p className="font-montserrat font-bold text-navy text-sm leading-none mb-1">
                    {label}
                  </p>
                  <p className="font-inter text-slate text-xs leading-snug">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
