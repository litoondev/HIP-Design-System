import styles from "./VibrantSweepButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface VibrantSweepButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Schedule Appointment — teal pill with a cyan sweep and circle icon (.schedule-btn). */
export default function VibrantSweepButton({
  label,
  practice,
  href = "#",
  className,
}: VibrantSweepButtonProps) {
  const text = label ?? defaultCta(practice, 8);
  return (
    <a
      className={`${styles.scheduleBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.scheduleBtnInner}>
        <span className={styles.scheduleBtnText}>{text}</span>
        <span className={styles.scheduleBtnIcon} aria-hidden="true">
          <Icon name="teeth" />
        </span>
      </span>
    </a>
  );
}
