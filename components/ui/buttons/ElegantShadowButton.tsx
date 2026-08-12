import styles from "./ElegantShadowButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface ElegantShadowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — primary pill with a hard drop shadow that presses flat on hover (Figma Btn, HIP Master V3). */
export default function ElegantShadowButton({
  label,
  practice,
  href = "#",
  className,
}: ElegantShadowButtonProps) {
  const text = label ?? defaultCta(practice, 1);
  return (
    <a
      className={`${styles.shadowBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      {text}
    </a>
  );
}
