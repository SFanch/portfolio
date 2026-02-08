// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Skills /> {/* <--- Ajout */}
      
      <section id="projets" className="min-h-screen pt-20">
          <h2 className="text-3xl font-bold mb-10">Mes Projets (À venir)</h2>
      </section>
    </div>
  );
}