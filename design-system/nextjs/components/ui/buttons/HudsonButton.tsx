import styles from "./HudsonButton.module.css";

export interface HudsonButtonProps {
  label?: string;
  href?: string;
  className?: string;
}

/** Free Consultation — teal rect whose inner slab expands while the button shrinks (.hudson-btn). */
export default function HudsonButton({
  label = "Free Consultation",
  href = "#",
  className,
}: HudsonButtonProps) {
  return (
    <a
      className={`${styles.hudsonBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={label}
    >
      <span className={styles.hudsonBtnWrapper}>
        <span className={styles.hudsonBtnIcon} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.39404 3.33398C5.74165 3.33398 5.1708 3.90483 5.1708 4.55723C5.1708 5.20962 5.74165 5.78047 6.39404 5.78047H12.5103L3.70291 14.5878C3.21361 15.0771 3.21361 15.811 3.70291 16.3003C4.19221 16.7896 4.92615 16.7896 5.41545 16.3003L14.2228 7.49301V13.6092C14.2228 14.2616 14.7936 14.8325 15.446 14.8325C16.0984 14.8325 16.6693 14.2616 16.6693 13.6092V4.55723C16.6693 3.90483 16.0984 3.33398 15.446 3.33398L6.39404 3.33398Z"
              fill="white"
            />
          </svg>
        </span>
        <span className={styles.hudsonBtnText}>{label}</span>
      </span>
    </a>
  );
}
