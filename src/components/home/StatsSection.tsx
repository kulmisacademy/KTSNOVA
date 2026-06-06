"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stats = [
  { value: "50+", key: "projects" as const },
  { value: "100+", key: "clients" as const },
  { value: "5+", key: "experience" as const },
  { value: "24/7", key: "support" as const },
];

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-nova-navy/5 bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="rounded-2xl border border-nova-navy/8 bg-nova-ash/50 px-4 py-6 text-center sm:px-6"
            >
              <span className="font-heading text-3xl font-bold text-nova-teal sm:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-xs font-medium text-nova-navy/65 sm:text-sm">
                {t.stats[stat.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
