"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Building2, Zap, Briefcase, Settings, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Target,
  Building2,
  Zap,
  Briefcase,
  Settings,
  Map,
} as const;

export default function ServicesSection() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-teal font-inter font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mt-2 mb-4">
            Comprehensive Business Architecture Services
          </h2>
          <p className="text-slate font-inter leading-relaxed">
            From strategic planning to operational execution, we bring
            structured clarity to every dimension of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-lightTeal flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-300">
                      <Icon
                        className="text-teal group-hover:text-white transition-colors duration-300"
                        size={22}
                      />
                    </div>
                    <h3 className="font-montserrat font-semibold text-navy text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate text-sm font-inter leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-teal font-inter font-semibold hover:gap-3 transition-all duration-200"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
