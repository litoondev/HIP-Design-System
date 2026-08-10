import styles from "./SoftBlueFadeButton.module.css";

export interface SoftBlueFadeButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Free Consult (Lucas Orthodontic) button — ported 1:1 from design-system/buttons.html (.free-consult).
 * The source's @font-face for "proxima-nova" points at a Typekit URL that requires an active
 * Typekit subscription; it is intentionally not reproduced here. The font stack falls back to Arial.
 */
export default function SoftBlueFadeButton({
  label = "Free Consult",
  onClick,
  className,
}: SoftBlueFadeButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.freeConsult}${className ? ` ${className}` : ""}`}
      aria-label="Free Consult"
      onClick={onClick}
    >
      <span className={styles.freeConsultContent}>
        <span className={styles.freeConsultIcon} aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12.025 8.53-6.223 6.254c-.32.288-.801.288-1.09 0l-.738-.738c-.288-.289-.288-.77 0-1.09l4.94-4.972-4.94-4.94c-.288-.32-.288-.801 0-1.09l.738-.738c.289-.288.77-.288 1.09 0l6.223 6.255a.755.755 0 0 1 0 1.058"
              fill="#9DCEE1"
            />
          </svg>
        </span>
        <span>{label}</span>
      </span>
    </button>
  );
}
