import styles from "./BergenButton.module.css";

export interface BergenButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Bergen Ortho button — ported 1:1 from design-system/buttons.html (.bergen-button).
 * Needs a dark backdrop to read well in its default (non-hover) state, matching the source markup.
 */
export default function BergenButton({
  label = "Discover the Difference",
  onClick,
  className,
}: BergenButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.bergenButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className={styles.bergenButtonIcon} aria-hidden="true">
        <svg
          className={styles.bergenButtonArrow}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L16 4M7 4H16V13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </button>
  );
}
