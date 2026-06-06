"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  X,
  CheckCircle2,
  Sparkles,
  Layers,
  Settings2,
  ArrowRight,
} from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import { PROJECT_ICONS } from "@/lib/data/project-icons";
import { getProjectContent } from "@/lib/i18n/content";
import { getProjectFullDetail } from "@/lib/data/project-full-features";
import { getCategoryExtras } from "@/lib/data/project-extras";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectMeta } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

interface ProjectDetailModalProps {
  project: ProjectMeta;
  onClose: () => void;
}

const categoryNeedMap: Record<string, string> = {
  software: "software",
  web: "web",
  mobile: "mobile",
  ai: "ai",
  design: "other",
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { locale, dir, t } = useLanguage();
  const content = getProjectContent(locale, project.id);
  const full = getProjectFullDetail(project.id);
  const extras = getCategoryExtras(locale, project.category);
  const Icon = PROJECT_ICONS[project.id];
  const m = t.portfolioPage.projectModal;
  const isRtl = dir === "rtl";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const contactHref = `/contact?project=${encodeURIComponent(content.title)}&need=${categoryNeedMap[project.category] ?? "other"}`;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
        <button
          type="button"
          className="absolute inset-0 bg-nova-navy/70 backdrop-blur-sm"
          onClick={onClose}
          aria-label={m.close}
        />

        <motion.div
          className={cn(
            "relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden",
            "rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          )}
          initial={{ opacity: 1, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: 24 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className={cn(
              "relative shrink-0 overflow-hidden bg-gradient-to-br px-6 pb-8 pt-6 sm:px-8",
              project.color
            )}
          >
            <div className="absolute inset-0 puzzle-grid opacity-25" aria-hidden />
            <button
              type="button"
              onClick={onClose}
              className={cn(
                "absolute top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full",
                "bg-white/90 text-nova-navy shadow-md transition-colors hover:bg-white",
                isRtl ? "left-4" : "right-4"
              )}
              aria-label={m.close}
            >
              <X size={20} />
            </button>

            <div className="relative flex flex-col items-center gap-4 pt-2 text-center sm:flex-row sm:text-start">
              <BrandIcon icon={Icon} variant="hero" />
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap justify-center gap-1.5 sm:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-nova-navy/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2
                  id="project-modal-title"
                  className="font-heading text-xl font-bold text-nova-navy sm:text-2xl"
                >
                  {content.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-nova-teal">
                  {t.portfolioPage.filters[project.category]} · {full.features.length} {m.featuresLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
            <p className="text-sm leading-relaxed text-nova-navy/70">{content.desc}</p>
            <p className="mt-2 rounded-xl bg-nova-teal/5 px-4 py-3 text-xs leading-relaxed text-nova-navy/60">
              {m.demoNote}
            </p>

            <section className="mt-6">
              <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-nova-navy">
                <Layers size={16} className="text-nova-teal" />
                {m.modules}
                <span className="rounded-full bg-nova-teal/10 px-2 py-0.5 text-xs font-bold normal-case text-nova-teal">
                  {full.features.length}
                </span>
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {full.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 rounded-lg bg-nova-ash/80 px-3 py-2.5 text-sm text-nova-navy/75"
                  >
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-nova-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-nova-navy">
                <Sparkles size={16} className="text-nova-teal" />
                {m.includes}
                <span className="rounded-full bg-nova-gold/15 px-2 py-0.5 text-xs font-bold normal-case text-nova-navy/70">
                  {full.includes.length}
                </span>
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {full.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-nova-navy/5 bg-white px-3 py-2.5 text-sm text-nova-navy/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nova-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6 rounded-2xl border border-nova-teal/20 bg-gradient-to-br from-nova-teal/5 to-transparent p-5">
              <h3 className="mb-1 flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-nova-navy">
                <Settings2 size={16} className="text-nova-teal" />
                {m.customize}
              </h3>
              <p className="mb-4 text-sm text-nova-navy/60">{m.customizeDesc}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {extras.customization.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-nova-navy/5 bg-white px-3 py-2.5 text-sm text-nova-navy/75"
                  >
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-nova-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="flex shrink-0 flex-col gap-3 border-t border-nova-navy/10 bg-nova-ash/40 px-6 py-4 sm:flex-row sm:px-8">
            <Link
              href={contactHref}
              onClick={onClose}
              data-cursor="cta"
              className="btn-primary flex-1 text-center"
            >
              {m.requestQuote}
              <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
            </Link>
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              {m.close}
            </button>
          </div>
        </motion.div>
      </motion.div>
  );
}
