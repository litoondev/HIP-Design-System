import styles from "./PinkIconCollapseButton.module.css";

export interface PinkIconCollapseButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Artemis Ortho pink pill — ported 1:1 from buttons.html (.artemis-button). */
export default function PinkIconCollapseButton({
  label = "REQUEST FREE CONSULT",
  href = "#",
  className,
}: PinkIconCollapseButtonProps) {
  return (
    <a
      className={`${styles.artemisButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Request free consult"
    >
      <span className={styles.artemisButtonIcon} aria-hidden="true">
        <svg viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 1.7c1.35 0 2.35-.7 3.68-.7C14.1 1 15 2.7 15 4.62c0 1.34-.48 2.58-.9 3.79-.28.8-.5 1.61-.6 2.47-.2 1.66-.28 4.92-1.96 5.12-1.25.15-1.48-1.36-1.72-2.87-.25-1.55-.5-3.1-1.82-3.1s-1.57 1.55-1.82 3.1C5.94 14.64 5.71 16.15 4.46 16c-1.68-.2-1.76-3.46-1.96-5.12-.1-.86-.32-1.67-.6-2.47C1.48 7.2 1 5.96 1 4.62 1 2.7 1.9 1 4.32 1 5.65 1 6.65 1.7 8 1.7Z" />
        </svg>
      </span>
      <span>{label}</span>
    </a>
  );
}
