import styles from "./BlackSweepButton.module.css";

export interface BlackSweepButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Meet Dr. Franklin — charcoal pill that sweeps away, with inverting circle icon (.franklin-btn). */
export default function BlackSweepButton({
  label = "Meet Dr. Franklin",
  href = "#",
  className,
}: BlackSweepButtonProps) {
  return (
    <a
      className={`${styles.franklinBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={label}
    >
      <span className={styles.franklinBtnWrapper}>
        <span className={styles.franklinBtnIcon} aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.39404 3.33301C5.74165 3.33301 5.1708 3.90385 5.1708 4.55625C5.1708 5.20864 5.74165 5.77949 6.39404 5.77949H12.5103L3.70291 14.5868C3.21361 15.0761 3.21361 15.8101 3.70291 16.2994C4.19221 16.7887 4.92615 16.7887 5.41545 16.2994L14.2228 7.49203V13.6082C14.2228 14.2606 14.7936 14.8315 15.446 14.8315C16.0984 14.8315 16.6693 14.2606 16.6693 13.6082V4.55625C16.6693 3.90385 16.0984 3.33301 15.446 3.33301H6.39404Z"
            />
          </svg>
        </span>
        <span className={styles.franklinBtnText}>{label}</span>
      </span>
    </a>
  );
}
