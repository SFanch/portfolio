// src/components/ProjectCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Si le projet est "featured", il prend 2 colonnes (sur desktop), sinon 1.
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
        isFeatured ? "md:col-span-2 md:row-span-2 min-h-[400px]" : "md:col-span-1 min-h-[300px]"
      )}
    >
      <Link href={`/projets/${project.slug}`} className="block h-full w-full">
        
        {/* Image de fond avec effet de zoom au survol */}
        <div className="absolute inset-0 h-full w-full">
            <Image
            src={project.image.url}
            alt={project.image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay sombre pour la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        </div>

        {/* Contenu textuel */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-start mb-2">
            <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1 block">
                    {project.category}
                </span>
                <h3 className={cn("font-bold", isFeatured ? "text-3xl" : "text-xl")}>
                    {project.title}
                </h3>
            </div>
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <p className="text-zinc-300 text-sm line-clamp-2 mb-4 max-w-[90%]">
            {project.shortDescription}
          </p>

          {/* Tags Tech */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md border border-white/10">
                    +{project.techStack.length - 3}
                </span>
            )}
          </div>
        </div>

      </Link>
    </motion.div>
  );
}