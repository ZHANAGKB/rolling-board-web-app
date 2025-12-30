import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export const mergeTWClasses = (...classes: string[]): string => {
  return twMerge(clsx(classes));
};
