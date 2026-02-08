// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10 md:py-20">
      
      {/* Colonne Texte */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <div className="space-y-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
          >
            👋 Salut, moi c'est [Siner François]
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Concepteur <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
              Développeur d'App.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0"
          >
            Étudiant en L3, je construis des expériences web modernes et performantes. Actuellement focalisé sur l'écosystème React & Next.js.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
          <Link
            href="#projets"
            className={cn(
              "flex items-center gap-2 px-6 py-3 font-medium text-white bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 rounded-full hover:opacity-90 transition-opacity"
            )}
          >
            Voir mes projets <ArrowRight size={18} />
          </Link>
          <Link
            href="/cv.pdf" // Assure-toi de mettre ton CV dans public/ plus tard
            target="_blank"
            className={cn(
              "flex items-center gap-2 px-6 py-3 font-medium text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            )}
          >
            Télécharger CV <Download size={18} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Colonne Image (Memoji) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Effet de fond "Glow" */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse" />
            
            <Image
              src="/images/me.png" // Chemin vers ton image
              alt="Portrait Memoji"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
        </div>
      </motion.div>

    </section>
  );
}