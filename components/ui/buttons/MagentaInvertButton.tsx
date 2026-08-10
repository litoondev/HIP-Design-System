import styles from "./MagentaInvertButton.module.css";

export interface MagentaInvertButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Request Appointment — pink pill with a white circle icon (.appt-button). */
export default function MagentaInvertButton({
  label = "REQUEST APPOINTMENT",
  href = "#",
  className,
}: MagentaInvertButtonProps) {
  return (
    <a
      className={`${styles.apptButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Request appointment"
    >
      <span>{label}</span>
      <span className={styles.apptButtonIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 12H18M13 7L18 12L13 17"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </span>
    </a>
  );
}
