import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
        {/* Nous ajouterons la Navbar ici plus tard */}
        <main className="relative flex flex-col min-h-screen">
            {children}
        </main>
      </body>
    </html>
  );
}