import styles from "./TextRollButton.module.css";
import Icon from "../icons/Icon";
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
      <span className={styles.doctorButtonIcon} aria-hidden="true">
        <Icon name="Doctor" size="100%" />
      </span>
    </a>
  );
}
