import styles from "./ModernPillButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface ModernPillButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Chevron-in-pill glyph from the Figma button (exact vector, colors tokenized). */
function CircleArrowIcon() {
  return (
    <svg viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="30" height="26" rx="13" fill="var(--color-base-white)" />
      <path
        d="M19.0252 13.5292L12.803 19.7835C12.4822 20.0722 12.0011 20.0722 11.7125 19.7835L10.9748 19.0458C10.6861 18.7572 10.6861 18.2761 10.9748 17.9553L15.9141 12.984L10.9748 8.04467C10.6861 7.72394 10.6861 7.24284 10.9748 6.95418L11.7125 6.21649C12.0011 5.92784 12.4822 5.92784 12.803 6.21649L19.0252 12.4708C19.3139 12.7595 19.3139 13.2405 19.0252 13.5292Z"
        fill="var(--color-primary-base)"
      />
    </svg>
  );
}

/** Learn More — primary pill with a white circle-chevron (Figma BTN_Mst, Master V3). */
export default function ModernPillButton({
  label,
  practice,
  href = "#",
  className,
}: ModernPillButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  return (
    <a
      className={`${styles.pillBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.pillBtnIcon} aria-hidden="true">
        <CircleArrowIcon />
      </span>
    </a>
  );
}
