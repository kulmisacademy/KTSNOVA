"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function PageHero({ label, title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-nova-navy via-[#121f38] to-[#0a1220] puzzle-grid py-16 sm:py-20",
        className
      )}
      data-dark-section
    >
      <div className="pointer-events-none absolute -end-24 -top-24 hidden h-72 w-72 rounded-full bg-nova-teal/10 blur-3xl md:block" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {label && (
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-nova-teal"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.05}
          className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.1}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
