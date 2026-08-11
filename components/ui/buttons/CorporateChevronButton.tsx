import styles from "./CorporateChevronButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface CorporateChevronButtonProps {
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
export default function CorporateChevronButton({
  label,
  practice,
  onClick,
  className,
}: CorporateChevronButtonProps) {
  const text = label ?? defaultCta(practice, 15);
  return (
    <button
      type="button"
      className={`${styles.navyDiscoverButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.navyDiscoverButtonIcon} aria-hidden="true">
        <Icon name="arrow-right" size="100%" />
      </span>
    </button>
  );
}
