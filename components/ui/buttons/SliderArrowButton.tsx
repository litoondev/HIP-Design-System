"use client";

import styles from "./SliderArrowButton.module.css";
import Icon from "../icons/Icon";

export type SliderArrowTone = "primary" | "secondary" | "cta" | "outline" | "ghost";

export interface SliderArrowButtonProps {
  /** Which way the control points; also picks the default aria-label. */
  direction?: "prev" | "next";
  /** Fill/ink pairing on the DS ramps: primary (Reviews V2), secondary (cream,
   *  Reviews V3), cta (teal), outline (2px primary outline square, fills on
   *  hover — Instagram strip), ghost (circular 20%-white ring for dark grounds
   *  — Reviews V1). */
  tone?: SliderArrowTone;
  ariaLabel?: string;
  /** id of the strip this control scrolls (aria-controls). */
  ariaControls?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/** Square icon-only slider/carousel control used by the review rails. Sized by the
 *  shared --btn-slider-pad and --btn-icon-size tokens. */
export default function SliderArrowButton({
  direction = "next",
  tone = "primary",
  ariaLabel,
  ariaControls,
  disabled,
  onClick,
  className,
}: SliderArrowButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.sliderBtn} ${styles[tone]}${className ? ` ${className}` : ""}`}
      aria-label={ariaLabel ?? (direction === "prev" ? "Previous" : "Next")}
      aria-controls={ariaControls}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon name={direction === "prev" ? "arrow-left" : "arrow-right"} size="var(--btn-icon-size)" />
    </button>
  );
}
