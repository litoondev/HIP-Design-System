import styles from "./BlueSweepRotateButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BlueSweepRotateButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — blue rect with right-to-left sweep plus a rotating arrow (.blue-rotate-btn). */
export default function BlueSweepRotateButton({
  label,
  practice,
  href = "#",
  className,
}: BlueSweepRotateButtonProps) {
  const text = label ?? defaultCta(practice, 5);
  return (
    <a
      className={`${styles.blueRotateBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.blueRotateBtnText}>{text}</span>
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
