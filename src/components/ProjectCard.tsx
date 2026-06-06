"use client";

import { getProjectContent } from "@/lib/i18n/content";
import type { ProjectMeta } from "@/lib/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PROJECT_ICONS } from "@/lib/data/project-icons";
import BrandIcon from "@/components/BrandIcon";
import { useProjectModal } from "@/lib/i18n/ProjectModalProvider";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectMeta;
  variant?: "grid" | "scroll";
  showDescription?: boolean;
}

export default function ProjectCard({
  project,
  variant = "grid",
  showDescription = true,
}: ProjectCardProps) {
  const { locale, dir, t } = useLanguage();
  const { openProject } = useProjectModal();
  const data = getProjectContent(locale, project.id);
  const featureCount = project.featureCount;
  const previewFeatures = data.features.slice(0, 3);
  const Icon = PROJECT_ICONS[project.id];

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-nova-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-nova-teal/30 hover:shadow-lg hover:shadow-nova-teal/10",
        variant === "scroll" && "min-w-[280px] flex-shrink-0 snap-start sm:min-w-[300px]",
        variant === "grid" && "h-full"
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
          project.color,
          variant === "scroll" ? "h-36" : "h-44"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,39,68,0.12),transparent_55%)]" />
        <div className="absolute inset-0 puzzle-grid opacity-30" aria-hidden />
        <BrandIcon icon={Icon} variant={variant === "scroll" ? "service" : "card"} />
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-nova-ash px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-nova-navy/55 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-heading text-lg font-semibold text-nova-navy">{data.title}</h3>
        {showDescription && (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-nova-navy/60">{data.desc}</p>
        )}
        <p className="mt-2 text-xs font-medium text-nova-teal">
          ⭐ {featureCount} {t.portfolioPage.features}
        </p>
        <ul className="mt-3 space-y-1.5">
          {previewFeatures.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-nova-navy/65">
              <CheckCircle2 size={13} className="shrink-0 text-nova-teal" />
              {feature}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => openProject(project)}
          data-cursor="link"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-nova-teal hover:underline"
        >
          {t.projects.demo}
          <ArrowRight size={14} className={dir === "rtl" ? "rotate-180" : ""} />
        </button>
      </div>
    </article>
  );
}
