import Icon from "../icons/Icon";
import styles from "./AmberFillButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface AmberFillButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult button — ported 1:1 from design-system/buttons.html (.consult-button, node 15810:54779) */
export default function AmberFillButton({
  label,
  practice,
  onClick,
  className,
}: AmberFillButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  return (
    <button
      type="button"
      className={`${styles.consultButton}${className ? ` ${className}` : ""}`}
      aria-label={text}
      onClick={onClick}
    >
      <span className={styles.consultButtonContent}>
        <span className={styles.consultButtonIcon} aria-hidden="true">
          <Icon name="Arrow 45" className={styles.consultButtonArrow} />
        </span>
        <span className={styles.consultButtonText}>{text}</span>
      </span>
    </button>
  );
}
