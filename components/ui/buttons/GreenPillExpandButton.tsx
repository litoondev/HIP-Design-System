import styles from "./GreenPillExpandButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface GreenPillExpandButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More pill button — ported 1:1 from design-system/buttons.html (.learn-more) */
export default function GreenPillExpandButton({
  label,
  practice,
  href = "#",
  className,
}: GreenPillExpandButtonProps) {
  const text = label ?? defaultCta(practice, 11);
  return (
    <a
      className={`${styles.learnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.learnMoreLabel}>{text}</span>
      <span className={styles.learnMoreIcon} aria-hidden="true">
        <Icon name="Arrow Right" />
      </span>
    </a>
  );
}
