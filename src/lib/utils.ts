import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function humanizeDate(date: Date, lang = "en") {
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
