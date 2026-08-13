import styles from "./PillArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export type PillArrowTone = "primary" | "cta" | "white";

export interface PillArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  /** Fill hue: primary (footer V5 comp), cta, or white (dark ink, for colored grounds). */
  tone?: PillArrowTone;
  /** pill (default) or rounded — soft 8px corners (CTA V5 comp). */
  shape?: "pill" | "rounded";
  /** Trailing arrow direction: right (default) or up-right diagonal (CTA V5 comp). */
  arrow?: "right" | "up-right";
  href?: string;
  className?: string;
}

/** Filled pill with a trailing arrow — the "hip-Image" footer CTA (Figma node
 *  44:22751 BTN v1), adapted onto the DS ramps and the shared button base. */
export default function PillArrowButton({
  label,
  practice,
  tone = "primary",
  shape = "pill",
  arrow = "right",
  href = "#",
  className,
}: PillArrowButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  const shapeClass = shape === "rounded" ? ` ${styles.rounded}` : "";
  return (
    <a
      className={`${styles.pillArrowBtn} ${styles[tone]}${shapeClass}${className ? ` ${className}` : ""}`}
      href={href}
    >
      <span>{text}</span>
      <Icon name={arrow === "up-right" ? "arrow-up-right" : "arrow-right"} size="var(--btn-icon-size)" />
    </a>
  );
}
