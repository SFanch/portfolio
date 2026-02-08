// src/components/Navbar.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Projets", href: "#projets" },
  { name: "Parcours", href: "#parcours" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-4">
      <nav className="flex items-center gap-1 px-4 py-2 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
            )}
          >
            {item.name}
          </Link>
        ))}
        {/* Nous ajouterons le bouton Dark Mode ici plus tard */}
      </nav>
    </header>
  );
}