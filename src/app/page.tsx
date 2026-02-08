// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Skills />
      <Projects />

      {/* SECTION SUIVANTE (PARCOURS) */}
      <section id="parcours" className="min-h-screen pt-20">
        <h2 className="text-3xl font-bold mb-10">Mon Parcours (À venir)</h2>
      </section>
    </div>
  );
}