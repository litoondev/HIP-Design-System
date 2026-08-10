import styles from "./MagentaInvertButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface MagentaInvertButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Request Appointment — pink pill with a white circle icon (.appt-button). */
export default function MagentaInvertButton({
  label,
  practice,
  href = "#",
  className,
}: MagentaInvertButtonProps) {
  const text = label ?? defaultCta(practice, 14);
  return (
    <a
      className={`${styles.apptButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.apptButtonIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 12H18M13 7L18 12L13 17"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </a>
  );
}
