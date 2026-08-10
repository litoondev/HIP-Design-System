import styles from "./MagentaInvertButton.module.css";
import Icon from "../icons/Icon";
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
        <Icon name="Arrow Right" />
      </span>
    </a>
  );
}
