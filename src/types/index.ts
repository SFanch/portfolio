export interface Project {
  id: string;
  slug: string; // Pour l'URL de la page de détail (ex: /projets/mon-super-app)
  title: string;
  shortDescription: string; // Pour la carte Bento
  fullDescription: string; // Pour la page détail (support du Markdown plus tard si besoin)
  techStack: string[]; // ex: ["Next.js", "TypeScript", "Tailwind"]
  category: "Web" | "Mobile" | "Design" | "Fullstack"; // Pour filtrer si besoin
  links: {
    github?: string;
    demo?: string;
  };
  image: {
    url: string; // Chemin vers l'image dans /public
    alt: string;
  };
  featured: boolean; // Si true, le projet apparaît en gros ou en premier
  date: string; // "2024" ou une date précise
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Nom de l'icône Lucide
}