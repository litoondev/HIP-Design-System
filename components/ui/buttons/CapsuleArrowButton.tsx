import styles from "./CapsuleArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export type CapsuleArrowTone = "white" | "cta" | "primary";

export interface CapsuleArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  /** Pill fill: white (black capsule — colored-ground comp), cta, or primary
   *  (both with white ink and a darker capsule one ramp step down). */
  tone?: CapsuleArrowTone;
  href?: string;
  className?: string;
}

/** Pill button with a hairline divider and a round-ended arrow capsule — the
 *  "hip-Image" CTA button (Figma node 1:1830 BTN v1), adapted onto the DS ramps
 *  and the shared button base. */
export default function CapsuleArrowButton({
  label,
  practice,
  tone = "white",
  href = "#",
  className,
}: CapsuleArrowButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  return (
    <a
      className={`${styles.capBtn} ${styles[tone]}${className ? ` ${className}` : ""}`}
      href={href}
    >
      <span className={styles.capBtnLabel}>{text}</span>
      <span className={styles.capBtnIcon}>
        <Icon name="arrow-right" size="var(--btn-icon-size)" />
      </span>
    </a>
  );
}
