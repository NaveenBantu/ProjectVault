import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges and concatenates CSS class names using the twMerge and clsx functions.
 * @param {...ClassValue[]} inputs - An array of CSS class values to be merged and concatenated.
 * @returns {string} A string containing the merged and concatenated CSS class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
