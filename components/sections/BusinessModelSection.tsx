"use client";

import { motion } from "framer-motion";
import { BUSINESS_MODEL_PILLARS } from "@/lib/constants";

export default function BusinessModelSection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-gold font-inter font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mt-2 mb-4">
            The 4D Business Architecture Framework
          </h2>
          <p className="text-white/60 font-inter leading-relaxed">
            A structured methodology that transforms complexity into clarity,
            guiding your organization from diagnosis to sustained excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_MODEL_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-teal/40 transition-colors duration-300 h-full">
                <span className="text-6xl font-montserrat font-bold text-white/10 leading-none block mb-3">
                  {pillar.step}
                </span>
                <h3 className="text-xl font-montserrat font-bold text-gold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm font-inter leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              {index < BUSINESS_MODEL_PILLARS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-teal/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
