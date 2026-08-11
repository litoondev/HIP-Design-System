import Icon from "../icons/Icon";
import styles from "./ElegantFillButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface ElegantFillButtonProps {
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
export default function ElegantFillButton({
  label,
  practice,
  onClick,
  className,
}: ElegantFillButtonProps) {
  const text = label ?? defaultCta(practice, 6);
  return (
    <button
      type="button"
      className={`${styles.bergenButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <span className={styles.bergenButtonIcon} aria-hidden="true">
        <Icon name="arrow-up-right" className={styles.bergenButtonArrow} />
      </span>
    </button>
  );
}
