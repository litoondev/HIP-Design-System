import styles from "./TealArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface TealArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** OLV / "Discover the difference" button — ported 1:1 from design-system/buttons.html (.olv-button) */
export default function TealArrowButton({
  label,
  practice,
  onClick,
  className,
}: TealArrowButtonProps) {
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
          <Icon name="Arrow Right" size="100%" />
        </span>
      </span>
    </button>
  );
}
