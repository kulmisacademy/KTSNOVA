"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Monitor, BarChart3, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

export default function HeroSection() {
  const { t, locale, dir } = useLanguage();
  const isRtl = dir === "rtl";

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-nova-navy via-[#121f38] to-[#0a1220] puzzle-grid"
      data-dark-section
    >
      <div className="pointer-events-none absolute -end-32 -top-32 hidden h-96 w-96 rounded-full bg-nova-teal/15 blur-3xl md:block" />
      <div className="pointer-events-none absolute -bottom-48 -start-32 hidden h-80 w-80 rounded-full bg-nova-teal/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:flex lg:min-h-[calc(100vh-5rem)] lg:items-center lg:gap-12 lg:px-8 lg:pb-20 lg:pt-32">
        <div
          className={cn(
            "flex-1 text-center lg:text-start",
            isRtl && "lg:text-right"
          )}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-nova-teal/30 bg-nova-teal/10 px-4 py-2 text-xs font-medium text-nova-teal sm:text-sm"
          >
            <Sparkles size={14} />
            KTS NOVA · Knowledge Technology Systems
          </motion.div>

          <h1
            key={locale}
            className={cn(
              "mb-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]",
              locale === "ar" && "locale-ar"
            )}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t.hero.headline}
          </h1>

          <p
            key={`${locale}-sub`}
            className={cn(
              "mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0",
              locale === "ar" && "locale-ar"
            )}
          >
            {t.hero.sub}
          </p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.15}
            className={cn(
              "flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start",
              isRtl && "lg:justify-end"
            )}
          >
            <Link href="/services" data-cursor="cta" className="btn-primary animate-pulse-glow">
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              data-cursor="link"
              className="btn-secondary !border-white/25 !text-white hover:!border-white hover:!bg-white hover:!text-nova-navy"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.25}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/40 lg:justify-start"
          >
            {["Software", "Web Apps", "Mobile", "AI", "Cloud"].map((tag) => (
              <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-3 py-1">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.2}
          className="relative mt-12 w-full flex-1 lg:mt-0 lg:max-w-lg"
        >
          <div className="relative rounded-2xl border border-nova-teal/25 bg-[#152238] p-5 shadow-2xl shadow-black/30 sm:p-6">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-nova-gold" />
              <div className="h-2.5 w-2.5 rounded-full bg-nova-teal" />
              <span className="ms-auto font-mono text-[10px] text-white/40 sm:text-xs">
                dashboard.ktsnova.com
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-nova-teal/20 bg-nova-teal/10 p-4">
                <Monitor className="mb-2 text-nova-teal" size={22} />
                <p className="font-mono text-xl font-bold text-white sm:text-2xl">50+</p>
                <p className="text-[11px] text-white/50">Projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <BarChart3 className="mb-2 text-nova-gold" size={22} />
                <p className="font-mono text-xl font-bold text-white sm:text-2xl">98%</p>
                <p className="text-[11px] text-white/50">Uptime</p>
              </div>
              <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
                <Users className="mb-2 text-nova-teal" size={22} />
                <div className="flex h-14 items-end gap-1 sm:h-16">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-nova-teal/80 to-nova-teal/40"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 start-1/2 -translate-x-1/2">
        <ChevronDown className="scroll-indicator text-nova-teal/80" size={24} />
      </div>
    </section>
  );
}
