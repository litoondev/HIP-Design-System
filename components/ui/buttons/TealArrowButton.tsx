import styles from "./TealArrowButton.module.css";
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
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
          </svg>
        </span>
      </span>
    </button>
  );
}
