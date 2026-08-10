import styles from "./CharcoalOutlineButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface CharcoalOutlineButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — charcoal square with a rotating arrow (.charcoal-learn-more). */
export default function CharcoalOutlineButton({
  label,
  practice,
  href = "#",
  className,
}: CharcoalOutlineButtonProps) {
  const text = label ?? defaultCta(practice, 7);
  return (
    <a
      className={`${styles.charcoalLearnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.charcoalLearnMoreIcon} aria-hidden="true">
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 15H25M17 7L25 15L17 23"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
