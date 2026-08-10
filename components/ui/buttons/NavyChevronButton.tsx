import styles from "./NavyChevronButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface NavyChevronButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/**
 * Discover Us — navy pill with a double chevron (.navy-discover-button).
 * The chevron is drawn entirely from the icon span's ::before/::after borders.
 */
export default function NavyChevronButton({
  label,
  practice,
  onClick,
  className,
}: NavyChevronButtonProps) {
  const text = label ?? defaultCta(practice, 15);
  return (
    <button
      type="button"
      className={`${styles.navyDiscoverButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.navyDiscoverButtonIcon} aria-hidden="true" />
    </button>
  );
}
