import styles from "./GoldOverhangButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface GoldOverhangButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult — gold pill with a floating circle icon (.gold-consult-button). */
export default function GoldOverhangButton({
  label,
  practice,
  onClick,
  className,
}: GoldOverhangButtonProps) {
  const text = label ?? defaultCta(practice, 9);
  return (
    <button
      type="button"
      className={`${styles.goldConsultButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.goldConsultButtonIcon} aria-hidden="true">
        <svg viewBox="0 0 320 512">
          <path d="M96 480c-8.2 0-16.4-3.1-22.6-9.4-12.5-12.5-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192C112.4 476.9 104.2 480 96 480z" />
        </svg>
      </span>
    </button>
  );
}
