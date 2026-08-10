import styles from "./OffsetShadowButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface OffsetShadowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/**
 * Join AOSG — yellow rect whose offset gray shadow collapses on hover.
 * Ported 1:1 from buttons.html (.aosg-btn-wrap / .aosg-btn). The wrapper is part of the
 * component because the shadow is drawn by .aosg-btn-wrap::before; leave room around it
 * in the layout so the 10px offset isn't clipped.
 */
export default function OffsetShadowButton({
  label,
  practice,
  href = "#",
  className,
}: OffsetShadowButtonProps) {
  const text = label ?? defaultCta(practice, 16);
  return (
    <div className={`${styles.aosgBtnWrap}${className ? ` ${className}` : ""}`}>
      <a className={styles.aosgBtn} href={href} aria-label={text}>
        <span className={styles.aosgBtnInner}>
          <span className={styles.aosgBtnText}>{text}</span>
          <span className={styles.aosgBtnIcon} aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
