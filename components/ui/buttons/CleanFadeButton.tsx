import styles from "./CleanFadeButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface CleanFadeButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/**
 * Free Consult (Lucas Orthodontic) button — ported 1:1 from design-system/buttons.html (.free-consult).
 * The source's @font-face for "proxima-nova" points at a Typekit URL that requires an active
 * Typekit subscription; it is intentionally not reproduced here. The font stack falls back to Arial.
 */
export default function CleanFadeButton({
  label,
  practice,
  onClick,
  className,
}: CleanFadeButtonProps) {
  const text = label ?? defaultCta(practice, 20);
  return (
    <button
      type="button"
      className={`${styles.freeConsult}${className ? ` ${className}` : ""}`}
      aria-label={text}
      onClick={onClick}
    >
      <span className={styles.freeConsultContent}>
        <span className={styles.freeConsultIcon} aria-hidden="true">
          <Icon name="arrow-right" size="44%" />
        </span>
        <span>{text}</span>
      </span>
    </button>
  );
}
