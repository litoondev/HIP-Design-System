import styles from "./ArrowLoopButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface ArrowLoopButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/**
 * Request Free Consult — white pill with blue sweep and a CSS-keyframed
 * arrow-through-circle on hover. Ported 1:1 from buttons.html (.gibson-btn).
 * See ArrowLoopJsButton for the Web Animations API variant.
 */
export default function ArrowLoopButton({
  label,
  practice,
  href = "#",
  className,
}: ArrowLoopButtonProps) {
  const text = label ?? defaultCta(practice, 1);
  return (
    <a
      className={`${styles.gibsonBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.gibsonBtnIcon} aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.5 10H16.5M12.5 6L16.5 10L12.5 14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.gibsonBtnText}>{text}</span>
    </a>
  );
}
