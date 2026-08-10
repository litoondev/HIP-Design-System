import styles from "./BronzeFillButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BronzeFillButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/**
 * Bergen Ortho button — ported 1:1 from design-system/buttons.html (.bergen-button).
 * Needs a dark backdrop to read well in its default (non-hover) state, matching the source markup.
 */
export default function BronzeFillButton({
  label,
  practice,
  onClick,
  className,
}: BronzeFillButtonProps) {
  const text = label ?? defaultCta(practice, 6);
  return (
    <button
      type="button"
      className={`${styles.bergenButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.bergenButtonIcon} aria-hidden="true">
        <svg
          className={styles.bergenButtonArrow}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L16 4M7 4H16V13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </button>
  );
}
