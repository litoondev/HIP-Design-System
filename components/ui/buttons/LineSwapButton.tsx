import styles from "./LineSwapButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface LineSwapButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/**
 * Request Appointment (alt) — same charcoal rect as LineSlideButton, but the trailing line is
 * swapped for a leading one via clip-path rather than sliding (.line-appt-alt).
 */
export default function LineSwapButton({
  label,
  practice,
  href = "#",
  className,
}: LineSwapButtonProps) {
  const text = label ?? defaultCta(practice, 13);
  return (
    <a
      className={`${styles.lineApptAlt}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.lineApptAltText}>{text}</span>
      <span
        className={`${styles.lineApptAltLine} ${styles.lineApptAltLineDefault}`}
        aria-hidden="true"
      />
      <span
        className={`${styles.lineApptAltLine} ${styles.lineApptAltLineHover}`}
        aria-hidden="true"
      />
    </a>
  );
}
