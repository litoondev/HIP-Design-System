import styles from "./TextRollButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface TextRollButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/**
 * Meet Dr. Steven — blue pill with a vertical text roll on hover (.doctor-button).
 * The duplicate label is the incoming line of the roll and is hidden from assistive tech.
 */
export default function TextRollButton({
  label,
  practice,
  href = "#",
  className,
}: TextRollButtonProps) {
  const text = label ?? defaultCta(practice, 24);
  return (
    <a
      className={`${styles.doctorButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.doctorButtonTextWrap}>
        <span className={styles.doctorButtonText}>{text}</span>
        <span
          className={`${styles.doctorButtonText} ${styles.doctorButtonTextDup}`}
          aria-hidden="true"
        >
          {text}
        </span>
      </span>
      <svg className={styles.doctorButtonIcon} viewBox="0 0 25 25" aria-hidden="true">
        <circle cx="12.5" cy="12.5" r="11.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2.3 13h20.4M3.3 16.4c2.2-1.1 4.3-1.1 6.4 0s4.2 1.1 6.3 0 4.1-1.1 5.8-.2M5.1 19.4c1.7-.8 3.4-.8 5.1 0s3.5.8 5.2 0 3.2-.8 4.6-.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 2v7M6.7 4.2l3.4 5.9M18.3 4.2l-3.4 5.9M2.9 8l6.1 3.5M22.1 8L16 11.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M8.5 13a4 4 0 0 1 8 0" fill="currentColor" />
      </svg>
    </a>
  );
}
