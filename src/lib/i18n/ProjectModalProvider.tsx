"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import type { ProjectMeta } from "@/lib/data/projects";

const ProjectDetailModal = dynamic(() => import("@/components/ProjectDetailModal"), {
  ssr: false,
});

interface ProjectModalContextValue {
  openProject: (project: ProjectMeta) => void;
  closeProject: () => void;
}

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<ProjectMeta | null>(null);

  const openProject = useCallback((p: ProjectMeta) => setProject(p), []);
  const closeProject = useCallback(() => setProject(null), []);

  return (
    <ProjectModalContext.Provider value={{ openProject, closeProject }}>
      {children}
      <AnimatePresence>
        {project && (
          <ProjectDetailModal key={project.id} project={project} onClose={closeProject} />
        )}
      </AnimatePresence>
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) {
    throw new Error("useProjectModal must be used within ProjectModalProvider");
  }
  return ctx;
}
