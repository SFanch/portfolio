// src/components/MobileDock.tsx
"use client"; // Nécessaire car on utilise des animations côté client

import Link from "next/link";
import { Home, FolderGit2, User, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const dockItems = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Projets", href: "#projets", icon: FolderGit2 },
  { name: "Parcours", href: "#parcours", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function MobileDock() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <nav className="flex items-center gap-4 px-6 py-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg shadow-zinc-200/50 dark:shadow-zinc-950/50">
        {dockItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              )}
            >
              <Icon size={24} strokeWidth={2} />
              {/* Le label est caché visuellement sur très petits écrans si besoin, mais ici on garde juste l'icône propre */}
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}