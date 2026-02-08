// src/components/Timeline.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    year: "2026",
    title: "Stage",
    organization: "Crédit Agricole",
    description: "À venir...",
    type: "work", 
  },
  {
    year: "2025 - 2026",
    title: "L3 Conception et Développement d'Applications - CDA",
    organization: "Université Occidentale de Brest - UBO",
    description: "Spécialisation en développement Fullstack, architecture logicielle et gestion de projet Agile.",
    type: "education", // ou 'work'
  },
  {
    year: "2025",
    title: "Stage - refonte et optimisation d'une plateforme e-commerce",
    organization: "Dantec Market",
    description: "Au sein d’une équipe de 3 personnes, j'ai participé à la modernisation d'un site vitrine sous Symfony. Ma mission consistait à reprendre une base de code existante pour améliorer ses performances, intégrer le responsive design pour une consultation mobile optimale et développer de nouvelles fonctionnalités métiers pour répondre aux besoins du lycée.",
    type: "work",
  },
  {
    year: "2024",
    title: "Stage - développement logiciel ",
    organization: "Crédit Agricole",
    description: "Conception et réalisation d'un logiciel en Python permettant d'automatiser l'analyse de données semestrielles. L'outil assure l'extraction de données depuis une base SQL vers des formats CSV, leur traitement statistique, et la génération de rapports interactifs en HTML (tableaux et graphiques) pour les présentations de la direction.",
    type: "work",
  },
  {
    year: "2023 - 2025",
    title: "BTS Services Informatique aux Organisations - SIO",
    organization: "Lycée Félix le Dantec - Lannion",
    description: "Option Solutions Logicielles et Applications Métiers - SLAM - Acquisition des bases du développement (Algo, C#, SQL, PHP, Symfony, .NET MAUI) et réseau.",
    type: "education",
  },
];

export function Timeline() {
  return (
    <section id="parcours" className="py-20 md:py-32 relative overflow-hidden">
      <div className="space-y-4 mb-16 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center md:justify-start gap-3">
          <GraduationCap className="w-8 h-8" />
          Mon Parcours
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto md:mx-0">
          De mes débuts académiques à mes premières expériences professionnelles.
        </p>
      </div>

      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-10 space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Point sur la ligne */}
            <span className={cn(
              "absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-zinc-950",
              item.type === "work" ? "bg-amber-500" : "bg-emerald-500"
            )} />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-1">
              <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {item.year}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {item.type === "work" ? "Expérience Pro" : "Formation"}
              </span>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
              {item.title}
            </h3>
            
            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium mb-3">
              {item.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              {item.organization}
            </div>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}