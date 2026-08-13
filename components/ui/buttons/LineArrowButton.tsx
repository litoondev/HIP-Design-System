import styles from "./LineArrowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export type LineArrowTone = "cta" | "primary" | "white";

export interface LineArrowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  /** Border/arrow hue: cta (teal), primary, or white (photo/dark grounds). */
  tone?: LineArrowTone;
  /** Flips the label to white for dark or photo grounds while the border/arrow
   *  keeps its tone (comp hero buttons). */
  onDark?: boolean;
  /** Solid white ground behind the outline (comp doctor CTA). */
  filled?: boolean;
  href?: string;
  className?: string;
}

/** Outline button with a leading arrow block behind a vertical rule — the
 *  "hip-Image Template 06" button (Figma node 1:1830 BTN v1), adapted onto the DS
 *  ramps and the shared button base. */
export default function LineArrowButton({
  label,
  practice,
  tone = "cta",
  onDark = false,
  filled = false,
  href = "#",
  className,
}: LineArrowButtonProps) {
  const text = label ?? defaultCta(practice, 0);
  const classes = [
    styles.lnBtn,
    styles[tone],
    onDark ? styles.onDark : "",
    filled ? styles.filled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a className={classes} href={href}>
      <span className={styles.lnBtnIcon}>
        <Icon name="arrow-right" size="var(--btn-icon-size)" />
      </span>
      <span className={styles.lnBtnLabel}>{text}</span>
    </a>
  );
}
