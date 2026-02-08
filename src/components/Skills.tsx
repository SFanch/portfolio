// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Smartphone } from "lucide-react"; // Ajout de l'icône Smartphone
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend & Mobile",
    icon: Smartphone, // Changement d'icône pour refléter le mobile
    skills: [
      "React", 
      "Next.js", 
      "TypeScript", 
      "Tailwind CSS", 
      ".NET MAUI"
    ],
    color: "bg-blue-500 text-blue-500", 
  },
  {
    title: "Backend & Web",
    icon: Database,
    skills: [
      "PHP", 
      "Symfony", 
      "CodeIgniter", 
      "Node.js", 
      "Python", 
      "SQL"
    ],
    color: "bg-emerald-500 text-emerald-500",
  },
  {
    title: "Logiciel & Core",
    icon: Code2,
    skills: [
      "Java", 
      "C#", 
      "C", 
      "Git", 
      "Docker", 
      "VS Code"
    ],
    color: "bg-orange-500 text-orange-500",
  },
];

export function Skills() {
  return (
    <section id="competences" className="py-20 md:py-32">
      <div className="space-y-4 mb-10 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center justify-center md:justify-start gap-3">
          <Terminal className="w-8 h-8" />
          Mes Compétences
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto md:mx-0">
          Un profil hybride entre développement web moderne et ingénierie logicielle.
          Voici la stack technique que je maîtrise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            {/* Petit accent de couleur en haut */}
            <div className={cn("absolute top-0 left-0 w-full h-1 opacity-50 bg-current", category.color.split(" ")[0])} />

            <div className="flex items-center gap-3 mb-6">
              <div className={cn("p-2 rounded-xl bg-opacity-10 bg-current", category.color)}>
                <category.icon size={20} />
              </div>
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}