import styles from "./LineSlideButton.module.css";

export interface LineSlideButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Request Appointment, charcoal rect with text slide + line sweep — from buttons.html (.line-appt-btn). */
export default function LineSlideButton({
  label = "Request Appointment",
  href = "#",
  className,
}: LineSlideButtonProps) {
  return (
    <a
      className={`${styles.lineApptBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label="Request appointment"
    >
      <span className={styles.lineApptBtnText}>{label}</span>
      <span className={styles.lineApptBtnLine} aria-hidden="true" />
    </a>
  );
}
