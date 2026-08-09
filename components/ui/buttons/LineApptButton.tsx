import styles from "./LineApptButton.module.css";

export interface LineApptButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Request Appointment, charcoal rect with text slide + line sweep — from buttons.html (.line-appt-btn). */
export default function LineApptButton({
  label = "Request Appointment",
  href = "#",
  className,
}: LineApptButtonProps) {
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
