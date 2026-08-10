import styles from "./GreenOutlineButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface GreenOutlineButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult, green rectangular — ported 1:1 from buttons.html (.rfcb-button). */
export default function GreenOutlineButton({
  label,
  practice,
  onClick,
  className,
}: GreenOutlineButtonProps) {
  const text = label ?? defaultCta(practice, 10);
  return (
    <button
      type="button"
      className={`${styles.rfcbButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M5 20h27M22 9l11 11-11 11" />
      </svg>
    </button>
  );
}
