import styles from "./OffsetShadowButton.module.css";

export interface OffsetShadowButtonProps {
  label?: string;
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
  label = "Join AOSG",
  href = "#",
  className,
}: OffsetShadowButtonProps) {
  return (
    <div className={`${styles.aosgBtnWrap}${className ? ` ${className}` : ""}`}>
      <a className={styles.aosgBtn} href={href} aria-label="Join AOSG">
        <span className={styles.aosgBtnInner}>
          <span className={styles.aosgBtnText}>{label}</span>
          <span className={styles.aosgBtnIcon} aria-hidden="true" />
        </span>
      </a>
    </div>
  );
}
