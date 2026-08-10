import styles from "./RequestFreeConsultButton.module.css";

export interface RequestFreeConsultButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult button — ported 1:1 from design-system/buttons.html (.consult-button, node 15810:54779) */
export default function RequestFreeConsultButton({
  label = "Request Free Consult",
  onClick,
  className,
}: RequestFreeConsultButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.consultButton}${className ? ` ${className}` : ""}`}
      aria-label={label}
      onClick={onClick}
    >
      <span className={styles.consultButtonContent}>
        <span className={styles.consultButtonIcon} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
            <path
              d="M3.67044 6.08707L3.67048 4.83967C3.69885 4.30102 4.12411 3.87576 4.63441 3.87574L15.6625 3.84705C16.2012 3.87538 16.6264 4.30062 16.6264 4.81092L16.6261 15.8674C16.6261 16.3777 16.2008 16.803 15.6621 16.8313L14.4147 16.8314C13.8761 16.803 13.4509 16.3778 13.4225 15.8391L13.5928 9.14856L5.45614 17.2852C5.05923 17.6822 4.49223 17.6822 4.09534 17.2853L3.18817 16.3781C2.81964 16.0096 2.79131 15.4142 3.18822 15.0173L11.3249 6.88063L4.66266 7.07929C4.12401 7.05095 3.67043 6.65407 3.67044 6.08707Z"
              fill="var(--color-accent-200)"
            />
          </svg>
        </span>
        <span className={styles.consultButtonText}>{label}</span>
      </span>
    </button>
  );
}
