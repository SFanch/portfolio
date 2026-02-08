// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Skills />
      <Projects />
      <Timeline />

      {/* SECTION FINALE (CONTACT) */}
      <section id="contact" className="min-h-[50vh] flex flex-col justify-center pt-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact (Dernière étape)</h2>
      </section>
    </div>
  );
}