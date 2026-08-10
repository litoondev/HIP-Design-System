import styles from "./LineSlideButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface LineSlideButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Request Appointment, charcoal rect with text slide + line sweep — from buttons.html (.line-appt-btn). */
export default function LineSlideButton({
  label,
  practice,
  href = "#",
  className,
}: LineSlideButtonProps) {
  const text = label ?? defaultCta(practice, 12);
  return (
    <a
      className={`${styles.lineApptBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.lineApptBtnText}>{text}</span>
      <span className={styles.lineApptBtnLine} aria-hidden="true" />
    </a>
  );
}
