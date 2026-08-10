import styles from "./TealArrowButton.module.css";

export interface TealArrowButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/** OLV / "Discover the difference" button — ported 1:1 from design-system/buttons.html (.olv-button) */
export default function TealArrowButton({
  label = "Discover the difference",
  onClick,
  className,
}: TealArrowButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.olvButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span className={styles.olvButtonContent}>
        <span>{label}</span>
        <span className={styles.olvButtonIcon} aria-hidden="true">
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
          </svg>
        </span>
      </span>
    </button>
  );
}
