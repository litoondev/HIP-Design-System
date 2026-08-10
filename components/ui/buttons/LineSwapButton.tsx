import styles from "./LineSwapButton.module.css";

export interface LineSwapButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/**
 * Request Appointment (alt) — same charcoal rect as LineSlideButton, but the trailing line is
 * swapped for a leading one via clip-path rather than sliding (.line-appt-alt).
 */
export default function LineSwapButton({
  label = "Request Appointment",
  href = "#",
  className,
}: LineSwapButtonProps) {
  return (
    <a
      className={`${styles.lineApptAlt}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Request appointment"
    >
      <span className={styles.lineApptAltText}>{label}</span>
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
