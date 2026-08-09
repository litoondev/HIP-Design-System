import styles from "./LearnMoreButton.module.css";

export interface LearnMoreButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Learn More pill button — ported 1:1 from design-system/buttons.html (.learn-more) */
export default function LearnMoreButton({
  label = "LEARN MORE",
  href = "#",
  className,
}: LearnMoreButtonProps) {
  return (
    <a
      className={`${styles.learnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Learn more"
    >
      <span className={styles.learnMoreLabel}>{label}</span>
      <span className={styles.learnMoreIcon} aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M7 24h32M27 10l14 14-14 14" />
        </svg>
      </span>
    </a>
  );
}
