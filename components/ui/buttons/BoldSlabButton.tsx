import styles from "./BoldSlabButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BoldSlabButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Free Consultation — teal rect whose inner slab expands while the button shrinks (.hudson-btn). */
export default function BoldSlabButton({
  label,
  practice,
  href = "#",
  className,
}: BoldSlabButtonProps) {
  const text = label ?? defaultCta(practice, 23);
  return (
    <a
      className={`${styles.hudsonBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.hudsonBtnWrapper}>
        <span className={styles.hudsonBtnIcon} aria-hidden="true">
          <Icon name="arrow-up-right" className={styles.hudsonBtnGlyph} />
        </span>
        <span className={styles.hudsonBtnText}>{text}</span>
      </span>
    </a>
  );
}
