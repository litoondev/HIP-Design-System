import styles from "./HulmeButton.module.css";

export interface HulmeButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Request Free Consult — blue rect whose white panel collapses on hover (.hulme-button). */
export default function HulmeButton({
  label = "Request Free Consult",
  href = "#",
  className,
}: HulmeButtonProps) {
  return (
    <a
      className={`${styles.hulmeButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={label}
    >
      <span className={styles.hulmeButtonText}>{label}</span>
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
