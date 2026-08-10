import styles from "./PanelCollapseButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface PanelCollapseButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Request Free Consult — blue rect whose white panel collapses on hover (.hulme-button). */
export default function PanelCollapseButton({
  label,
  practice,
  href = "#",
  className,
}: PanelCollapseButtonProps) {
  const text = label ?? defaultCta(practice, 17);
  return (
    <a
      className={`${styles.hulmeButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.hulmeButtonText}>{text}</span>
      <span className={styles.hulmeButtonIcon} aria-hidden="true">
        <Icon name="Arrow Right" size="54%" />
      </span>
    </a>
  );
}
