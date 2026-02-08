import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { MobileDock } from "@/components/MobileDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Portfolio | Développeur CDA",
  description: "Portfolio étudiant L3 CDA - Next.js & Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      {/* suppressHydrationWarning est nécessaire pour le provider de thème plus tard */}
      <body
        className={cn(
          "min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans antialiased transition-colors duration-300",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Navbar />        {/* <--- AJOUT DESKTOP */}
        <main className="relative flex flex-col min-h-screen pt-20 pb-24 md:pb-0 px-4 max-w-7xl mx-auto w-full"> 
          {/* pt-20 : Pour ne pas que le contenu soit caché sous la navbar desktop 
             pb-24 : Pour ne pas que le contenu soit caché sous le dock mobile
             max-w-7xl + mx-auto : Pour centrer le site sur les grands écrans
          */}
          {children}
        </main>
        <MobileDock />    {/* <--- AJOUT MOBILE */}
      </body>
    </html>
  );
}