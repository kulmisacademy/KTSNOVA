"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Rocket, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { aboutContent } from "@/lib/i18n/content";
import { fadeUp, stagger } from "@/lib/motion";

const valueIcons = [Rocket, Shield, Award, Users];

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const about = aboutContent[locale];

  return (
    <div className="pt-20">
      <PageHero
        label="KTS NOVA"
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="rounded-2xl border border-nova-teal/20 bg-gradient-to-br from-nova-teal/5 to-white p-8 sm:p-10"
          >
            <h2 className="mb-4 font-heading text-2xl font-bold text-nova-navy">
              {about.storyTitle}
            </h2>
            <p className="text-base leading-relaxed text-nova-navy/70">{about.story}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-nova-ash">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-nova-navy/10 bg-white p-8 shadow-sm"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.05}
          >
            <Target className="mb-4 text-nova-teal" size={32} />
            <h2 className="mb-3 font-heading text-xl font-bold text-nova-navy">
              {about.missionTitle}
            </h2>
            <p className="leading-relaxed text-nova-navy/70">{t.about.mission}</p>
          </motion.div>
          <motion.div
            className="rounded-2xl border border-nova-navy/10 bg-white p-8 shadow-sm"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.1}
          >
            <Eye className="mb-4 text-nova-teal" size={32} />
            <h2 className="mb-3 font-heading text-xl font-bold text-nova-navy">
              {about.visionTitle}
            </h2>
            <p className="leading-relaxed text-nova-navy/70">{t.about.vision}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="mb-8 text-center font-heading text-2xl font-bold text-nova-navy sm:text-3xl"
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
          >
            {about.valuesTitle}
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i] ?? Award;
              return (
                <motion.div
                  key={value}
                  className="rounded-xl border border-nova-teal/20 bg-nova-teal/5 p-5 text-center"
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0.05 + i * stagger}
                >
                  <Icon className="mx-auto mb-3 text-nova-teal" size={26} />
                  <p className="text-sm font-semibold text-nova-navy">{value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-nova-navy/5 bg-nova-ash py-12">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
            <Users className="mx-auto mb-4 text-nova-teal" size={40} />
            <h2 className="font-heading text-2xl font-bold text-nova-navy">{about.teamTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-nova-navy/65">{about.teamDesc}</p>
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
