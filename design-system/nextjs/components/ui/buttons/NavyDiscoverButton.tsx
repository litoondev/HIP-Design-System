import styles from "./NavyDiscoverButton.module.css";

export interface NavyDiscoverButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Discover Us — navy pill with a double chevron (.navy-discover-button).
 * The chevron is drawn entirely from the icon span's ::before/::after borders.
 */
export default function NavyDiscoverButton({
  label = "DISCOVER US",
  onClick,
  className,
}: NavyDiscoverButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.navyDiscoverButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className={styles.navyDiscoverButtonIcon} aria-hidden="true" />
    </button>
  );
}
