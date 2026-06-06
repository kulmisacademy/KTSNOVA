"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CtaSection from "@/components/CtaSection";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  PROJECTS,
  FILTER_KEYS,
  getProjectsByCategory,
  type FilterKey,
} from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const filtered = getProjectsByCategory(activeFilter);

  return (
    <div className="pt-20">
      <PageHero
        label={t.nav.portfolio}
        title={t.portfolioPage.title}
        subtitle={t.portfolioPage.subtitle}
      />

      <section className="section-padding bg-nova-ash">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                data-cursor="link"
                className={cn(
                  "rounded-full px-4 py-2.5 text-sm font-medium transition-all min-h-[44px]",
                  activeFilter === key
                    ? "bg-nova-teal text-white shadow-md shadow-nova-teal/25"
                    : "border border-nova-navy/10 bg-white text-nova-navy/70 hover:border-nova-teal/30 hover:text-nova-teal"
                )}
              >
                {t.portfolioPage.filters[key]}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} variant="grid" />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-nova-navy/50">No projects in this category yet.</p>
          )}

          <p className="mt-10 text-center text-sm font-medium text-nova-navy/50">
            {filtered.length} / {PROJECTS.length} {t.portfolioPage.title.toLowerCase()}
          </p>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
