/**
 * CTA language defaults. The user-supplied `label` prop always wins; when no
 * label is given, buttons fall back to a phrase from the practice-type list.
 */
export const CTA_LANGUAGE = {
  orthodontics: [
    "Free Consult",
    "Free Exam",
    "Complimentary Consult",
    "Complimentary Exam",
    "Request Appointment",
  ],
  /** Multi-Specialty or Dental / Pediatric practices. */
  "multi-specialty": [
    "Free Ortho Consult",
    "Kids Dental Appointment",
    "Dental Appointment",
    "Pediatric Appointment",
  ],
} as const;

export type PracticeType = keyof typeof CTA_LANGUAGE;

/**
 * Default CTA phrase for a practice type. `slot` lets each button variant pull
 * a different phrase from the list (wraps around when the list is shorter).
 */
export function defaultCta(practice: PracticeType = "orthodontics", slot = 0): string {
  const list = CTA_LANGUAGE[practice];
  return list[slot % list.length];
}
