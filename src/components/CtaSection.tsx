"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { fadeUp } from "@/lib/motion";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-nova-navy py-16 sm:py-20" data-dark-section>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,150,0.15),transparent_70%)]" />

      <motion.div
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0}
      >
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {t.cta.headline}
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">{t.cta.sub}</p>
        <Link
          href="/contact"
          data-cursor="cta"
          className="btn-primary mt-8 animate-pulse-glow"
        >
          {t.cta.button}
        </Link>
      </motion.div>
    </section>
  );
}
