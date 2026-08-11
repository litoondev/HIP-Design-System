import styles from "./CorporateArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface CorporateArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** OLV / "Discover the difference" button — ported 1:1 from design-system/buttons.html (.olv-button) */
export default function CorporateArrowButton({
  label,
  practice,
  onClick,
  className,
}: CorporateArrowButtonProps) {
  const text = label ?? defaultCta(practice, 22);
  return (
    <button
      type="button"
      className={`${styles.olvButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span className={styles.olvButtonContent}>
        <span>{text}</span>
        <span className={styles.olvButtonIcon} aria-hidden="true">
          <Icon name="arrow-right" size="100%" />
        </span>
      </span>
    </button>
  );
}
