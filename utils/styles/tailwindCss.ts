import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// new
export const mergeTWClasses = (...classes: string[]): string => {
  return twMerge(clsx(classes));
};
