import styles from "./NavyChevronButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface NavyChevronButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/**
 * Discover Us — navy pill with a "Next" icon from the global icon library
 * (.navy-discover-button).
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
      <span className={styles.navyDiscoverButtonIcon} aria-hidden="true">
        <Icon name="Next" size="100%" />
      </span>
    </button>
  );
}
