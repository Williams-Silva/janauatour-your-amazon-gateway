/**
 * Utilitários da aplicação.
 * Função cn() combina classes CSS do Tailwind de forma inteligente,
 * resolvendo conflitos entre classes automaticamente.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
