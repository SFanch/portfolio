import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Fonction magique pour fusionner les classes Tailwind proprement
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}