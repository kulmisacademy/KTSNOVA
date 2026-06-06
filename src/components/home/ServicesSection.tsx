"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { getServiceContent } from "@/lib/i18n/content";
import { SERVICES, type ServiceKey } from "@/lib/data/services";
import { fadeUp, stagger } from "@/lib/motion";
import { SERVICE_ICONS } from "@/lib/data/service-icons";
import BrandIcon from "@/components/BrandIcon";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  serviceKey: ServiceKey;
  index: number;
  compact?: boolean;
}

export function ServiceCard({ serviceKey, index, compact = false }: ServiceCardProps) {
  const { locale, dir, t } = useLanguage();
  const meta = SERVICES.find((s) => s.key === serviceKey)!;
  const content = getServiceContent(locale, serviceKey);
  const Icon = SERVICE_ICONS[serviceKey];

  return (
    <motion.div
      className="group rounded-2xl border border-nova-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nova-teal/40 hover:shadow-lg hover:shadow-nova-teal/10"
      initial="hidden"
      animate="show"
      variants={fadeUp}
      custom={0.1 + index * stagger}
    >
      <BrandIcon icon={Icon} variant="service" className="mb-4 transition-transform group-hover:scale-105" />
      <h3 className="mb-2 font-heading text-lg font-semibold text-nova-navy">{content.title}</h3>
      <p className="text-sm leading-relaxed text-nova-navy/65">{content.desc}</p>
      {!compact && (
        <ul className="mt-4 space-y-1.5">
          {content.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-nova-navy/60">
              <CheckCircle2 size={12} className="shrink-0 text-nova-teal" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/services#${serviceKey}`}
        data-cursor="link"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-nova-teal hover:underline"
      >
        {t.servicesPage.request}
        <ArrowRight size={14} className={dir === "rtl" ? "rotate-180" : ""} />
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="section-padding bg-nova-ash">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center sm:mb-12"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-nova-teal">
            {t.nav.services}
          </p>
          <h2 className="font-heading text-3xl font-bold text-nova-navy sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-nova-navy/65">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.key} serviceKey={s.key} index={i} compact />
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.5}
        >
          <Link
            href="/services"
            data-cursor="link"
            className={cn("btn-secondary inline-flex items-center gap-2")}
          >
            {t.services.viewAll}
            <ArrowRight size={16} className={dir === "rtl" ? "rotate-180" : ""} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
