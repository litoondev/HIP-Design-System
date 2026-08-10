import styles from "./BlueSweepButton.module.css";

export interface BlueSweepButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Learn More — blue rect with a right-to-left white sweep (.blue-learn-more). */
export default function BlueSweepButton({
  label = "LEARN MORE",
  href = "#",
  className,
}: BlueSweepButtonProps) {
  return (
    <a
      className={`${styles.blueLearnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Learn more"
    >
      <span className={styles.blueLearnMoreText}>{label}</span>
      <span className={styles.blueLearnMoreIcon} aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 15L15 5M7 5H15V13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </a>
  );
}
