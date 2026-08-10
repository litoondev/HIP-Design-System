import styles from "./PanelCollapseButton.module.css";
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
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.5 2.2L9.3 7L4.5 11.8"
            stroke="currentColor"
            strokeWidth="3.1"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </a>
  );
}
