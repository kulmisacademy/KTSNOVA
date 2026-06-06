"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { getServiceContent, getProjectContent } from "@/lib/i18n/content";
import { SERVICES } from "@/lib/data/services";
import { PROJECTS } from "@/lib/data/projects";
import { fadeUp, stagger } from "@/lib/motion";
import { SERVICE_ICONS } from "@/lib/data/service-icons";
import BrandIcon from "@/components/BrandIcon";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const { t, locale, dir } = useLanguage();
  const isRtl = dir === "rtl";

  return (
    <div className="pt-20">
      <PageHero
        label={t.nav.services}
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
      />

      <section className="section-padding bg-nova-ash">
        <div className="mx-auto max-w-7xl">
          <div
            className={cn(
              "grid gap-8",
              isRtl ? "lg:grid-cols-[1fr_260px]" : "lg:grid-cols-[260px_1fr]"
            )}
          >
            <nav className={cn("hidden lg:block", isRtl ? "order-2" : "order-1")}>
              <div className="sticky top-28 space-y-1 rounded-2xl border border-nova-navy/10 bg-white p-3 shadow-sm">
                <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-nova-navy/45">
                  {t.nav.services}
                </p>
                {SERVICES.map(({ key }) => {
                  const content = getServiceContent(locale, key);
                  const Icon = SERVICE_ICONS[key];
                  return (
                    <a
                      key={key}
                      href={`#${key}`}
                      data-cursor="link"
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-nova-navy/70 transition-colors hover:bg-nova-teal/10 hover:text-nova-teal"
                    >
                      <BrandIcon icon={Icon} variant="inline" className="shrink-0" />
                      <span className="line-clamp-1">{content.title}</span>
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className={cn("space-y-8", isRtl ? "order-1" : "order-2")}>
                {SERVICES.map(({ key, relatedProjects }, i) => {
                const content = getServiceContent(locale, key);
                const Icon = SERVICE_ICONS[key];
                return (
                  <motion.article
                    key={key}
                    id={key}
                    className="scroll-mt-28 overflow-hidden rounded-2xl border border-nova-navy/10 bg-white shadow-sm"
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    custom={0.05 + i * stagger}
                  >
                    <div className="border-b border-nova-navy/5 bg-gradient-to-r from-nova-teal/5 to-transparent p-6 sm:p-8">
                      <BrandIcon icon={Icon} variant="service" className="mb-4" />
                      <h2 className="font-heading text-2xl font-bold text-nova-navy sm:text-3xl">
                        {content.title}
                      </h2>
                      <p className="mt-3 max-w-2xl leading-relaxed text-nova-navy/65">
                        {content.longDesc}
                      </p>
                    </div>

                    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-nova-teal">
                          Features
                        </h3>
                        <ul className="space-y-2.5">
                          {content.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2.5 text-sm text-nova-navy/70"
                            >
                              <CheckCircle2 size={16} className="shrink-0 text-nova-teal" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-nova-teal">
                          {t.servicesPage.process}
                        </h3>
                        <ol className="space-y-2.5">
                          {t.servicesPage.processSteps.map((step, idx) => (
                            <li
                              key={step}
                              className="flex items-center gap-3 text-sm text-nova-navy/70"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nova-teal text-xs font-bold text-white">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    {relatedProjects.length > 0 && (
                      <div className="border-t border-nova-navy/5 bg-nova-ash/50 px-6 py-4 sm:px-8">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-nova-navy/45">
                          {t.nav.portfolio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {relatedProjects.map((pid) => {
                            const proj = PROJECTS.find((p) => p.id === pid);
                            if (!proj) return null;
                            const pContent = getProjectContent(locale, pid);
                            return (
                              <Link
                                key={pid}
                                href="/portfolio"
                                className="rounded-full border border-nova-navy/10 bg-white px-3 py-1 text-xs font-medium text-nova-navy/70 hover:border-nova-teal/30 hover:text-nova-teal"
                              >
                                {pContent.title}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="border-t border-nova-navy/5 p-6 sm:p-8">
                      <Link href="/contact" data-cursor="cta" className="btn-primary inline-flex items-center gap-2">
                        {t.servicesPage.request}
                        <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
