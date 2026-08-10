import styles from "./PressShadowButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface PressShadowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult — white pill with a yellow shadow that presses in on hover (.press-button). */
export default function PressShadowButton({
  label,
  practice,
  onClick,
  className,
}: PressShadowButtonProps) {
  const text = label ?? defaultCta(practice, 19);
  return (
    <button
      type="button"
      className={`${styles.pressButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M7 24h32M27 12l12 12-12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
