import { twMerge } from "tailwind-merge";
import { cx, type CxOptions } from "class-variance-authority";

export function cn(...args: CxOptions) {
  return twMerge(cx(args));
}
