// src/components/Projects.tsx
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { FolderGit2 } from "lucide-react";

export function Projects() {
  return (
    <section id="projets" className="py-20">
      <div className="space-y-4 mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center md:justify-start gap-3">
          <FolderGit2 className="w-8 h-8" />
          Projets Récents
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto md:mx-0">
          Une sélection de mes travaux académiques et personnels.
          Du développement web fullstack aux applications mobiles natives.
        </p>
      </div>

      {/* Grille Bento : Grid auto avec ajustement responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}