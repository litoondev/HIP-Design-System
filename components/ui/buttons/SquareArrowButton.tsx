import styles from "./SquareArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export type SquareArrowTone = "cta" | "secondary" | "primary" | "neutral";

export interface SquareArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  /** Fill/border pairing from the Template 3 comp: cta (white border), secondary
   *  (black border, dark ink), primary (tertiary border), neutral (primary fill,
   *  white border — the hero's secondary action). */
  tone?: SquareArrowTone;
  href?: string;
  className?: string;
}

/** Square 2px-bordered CTA with a trailing arrow — the "hip-Image Template 3" button
 *  (Figma node 1:3315 BTN v1), adapted onto the DS ramps and the shared button base. */
export default function SquareArrowButton({
  label,
  practice,
  tone = "cta",
  href = "#",
  className,
}: SquareArrowButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  return (
    <a
      className={`${styles.sqBtn} ${styles[tone]}${className ? ` ${className}` : ""}`}
      href={href}
    >
      <span>{text}</span>
      <Icon name="arrow-right" size="var(--btn-icon-size)" />
    </a>
  );
}
