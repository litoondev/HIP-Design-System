import styles from "./BlueRotateButton.module.css";

export interface BlueRotateButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Learn More — blue rect with right-to-left sweep plus a rotating arrow (.blue-rotate-btn). */
export default function BlueRotateButton({
  label = "LEARN MORE",
  href = "#",
  className,
}: BlueRotateButtonProps) {
  return (
    <a
      className={`${styles.blueRotateBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Learn more"
    >
      <span className={styles.blueRotateBtnText}>{label}</span>
      <span className={styles.blueRotateBtnIcon} aria-hidden="true">
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
