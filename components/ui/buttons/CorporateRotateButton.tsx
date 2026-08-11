import Icon from "../icons/Icon";
import styles from "./CorporateRotateButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface CorporateRotateButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — blue rect with right-to-left sweep plus a rotating arrow (.blue-rotate-btn). */
export default function CorporateRotateButton({
  label,
  practice,
  href = "#",
  className,
}: CorporateRotateButtonProps) {
  const text = label ?? defaultCta(practice, 5);
  return (
    <a
      className={`${styles.blueRotateBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.blueRotateBtnText}>{text}</span>
      <span className={styles.blueRotateBtnIcon} aria-hidden="true">
        <Icon name="arrow-up-right" className={styles.blueRotateBtnArrow} />
      </span>
    </a>
  );
}
