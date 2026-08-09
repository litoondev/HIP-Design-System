import styles from "./CharcoalLearnMoreButton.module.css";

export interface CharcoalLearnMoreButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Learn More — charcoal square with a rotating arrow (.charcoal-learn-more). */
export default function CharcoalLearnMoreButton({
  label = "LEARN MORE",
  href = "#",
  className,
}: CharcoalLearnMoreButtonProps) {
  return (
    <a
      className={`${styles.charcoalLearnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Learn more"
    >
      <span>{label}</span>
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
