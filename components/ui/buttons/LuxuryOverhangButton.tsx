import styles from "./LuxuryOverhangButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface LuxuryOverhangButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult — gold pill with a floating circle icon (.gold-consult-button). */
export default function LuxuryOverhangButton({
  label,
  practice,
  onClick,
  className,
}: LuxuryOverhangButtonProps) {
  const text = label ?? defaultCta(practice, 9);
  return (
    <button
      type="button"
      className={`${styles.goldConsultButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.goldConsultButtonIcon} aria-hidden="true">
        <Icon name="Arrow Right" size="40%" />
      </span>
    </button>
  );
}
