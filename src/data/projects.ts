// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "gestion-stock-csharp",
    title: "ERP Gestion de Stock",
    shortDescription: "Application lourde de gestion commerciale complète.",
    fullDescription: "Description détaillée à venir...",
    techStack: ["C#", ".NET", "SQL Server", "WPF"],
    category: "Fullstack",
    image: {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      alt: "Interface logicielle sombre",
    },
    links: { github: "https://github.com" },
    featured: true, // Apparaîtra en grand
    date: "2024",
  },
  {
    id: "2",
    slug: "ecommerce-symfony",
    title: "E-commerce Bio",
    shortDescription: "Plateforme de vente avec back-office admin.",
    fullDescription: "...",
    techStack: ["Symfony", "PHP", "MySQL", "Twig", "Bootstrap"],
    category: "Web",
    image: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      alt: "Dashboard analytics",
    },
    links: { github: "https://github.com", demo: "https://demo.com" },
    featured: false,
    date: "2023",
  },
  {
    id: "3",
    slug: "app-mobile-maui",
    title: "Tracker Fitness",
    shortDescription: "App mobile cross-platform de suivi sportif.",
    fullDescription: "...",
    techStack: [".NET MAUI", "C#", "XAML", "SQLite"],
    category: "Mobile",
    image: {
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      alt: "Application mobile sur smartphone",
    },
    links: { github: "https://github.com" },
    featured: false,
    date: "2024",
  },
  {
    id: "4",
    slug: "portfolio-v1",
    title: "Portfolio",
    shortDescription: "Mon site personnel développé en Next.js.",
    fullDescription: "...",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    category: "Web",
    image: {
      url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      alt: "Code sur un écran mac",
    },
    links: { github: "https://github.com" },
    featured: true, // Apparaîtra en grand aussi
    date: "2024",
  },
];