"use client";

import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { fadeUp, stagger } from "@/lib/motion";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const featured = getFeaturedProjects(8);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 sm:mb-12"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-nova-teal">
            {t.nav.portfolio}
          </p>
          <h2 className="font-heading text-3xl font-bold text-nova-navy sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-2xl text-nova-navy/65">{t.projects.subtitle}</p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0.1 + i * stagger}
            >
              <ProjectCard project={project} variant="scroll" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
