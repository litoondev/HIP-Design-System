import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * clsx for conditionals, tailwind-merge for last-one-wins conflict resolution.
 *
 * The typography system composes arbitrary-value classes (`text-[36px]`, `md:leading-[56px]`),
 * which tailwind-merge already understands, so no custom class groups are needed. Conflicts
 * resolve per modifier: a `className` of `text-[50px]` replaces the variant's base size and
 * leaves its `md:`/`lg:` steps alone.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
