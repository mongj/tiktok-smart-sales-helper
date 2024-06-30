import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToASCII(str: string) {
  // remove any non ascii characters
  const asciiString = str.replace(/[^\x00x-\x7F]/g, "");
  return asciiString;
}
