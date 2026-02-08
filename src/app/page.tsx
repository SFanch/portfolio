// src/app/page.tsx
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-20"> {/* Espace vertical entre les sections */}
      <Hero />
      
      {/* Nous ajouterons les autres sections ici :
          - <Skills />
          - <Projects />
          - <Experience />
          - <Contact />
      */}
      <section id="projets" className="min-h-screen">
          {/* Placeholder pour le scroll */}
          <h2 className="text-3xl font-bold mb-10">Mes Projets (À venir)</h2>
      </section>
    </div>
  );
}