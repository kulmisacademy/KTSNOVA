"use client";

import { motion } from "framer-motion";
import { CheckCircle, Puzzle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function WhyUsSection() {
  const { t, dir } = useLanguage();
  const isRtl = dir === "rtl";

  return (
    <section className="section-padding bg-gradient-to-b from-nova-ash to-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className={cn(isRtl && "lg:order-2")}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-nova-teal">
              KTS NOVA
            </p>
            <h2 className="font-heading text-3xl font-bold text-nova-navy sm:text-4xl">
              {t.whyUs.title}
            </h2>
            <p className="mt-3 mb-8 text-nova-navy/65">{t.whyUs.subtitle}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.whyUs.items.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-nova-navy/8 bg-white p-3 shadow-sm"
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0.1 + i * stagger}
                >
                  <CheckCircle className="mt-0.5 shrink-0 text-nova-teal" size={18} />
                  <span className="text-sm font-medium text-nova-navy">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={cn("relative flex items-center justify-center", isRtl && "lg:order-1")}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.15}
          >
            <div className="relative h-64 w-64 sm:h-72 sm:w-72">
              <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center justify-center rounded-2xl shadow-lg",
                      i % 2 === 0 ? "bg-nova-teal" : "bg-nova-navy"
                    )}
                  >
                    <Puzzle className="text-white/85" size={28} />
                  </div>
                ))}
              </div>
              <div className="absolute -top-3 end-6 rounded-full bg-nova-teal p-3.5 shadow-lg shadow-nova-teal/30">
                <Lightbulb className="text-white" size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
