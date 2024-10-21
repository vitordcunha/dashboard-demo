import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS class names using clsx and tailwind-merge.
 *
 * This function takes any number of class name arguments, processes them
 * with clsx to handle conditional classes, and then merges the result
 * using tailwind-merge to resolve any Tailwind CSS conflicts.
 *
 * @param {...ClassValue[]} inputs - Any number of class name arguments.
 *        These can be strings, objects, or arrays as supported by clsx.
 *
 * @returns {string} A string of merged and de-duplicated class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
