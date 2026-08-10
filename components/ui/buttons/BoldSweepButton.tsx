import Icon from "../icons/Icon";
import styles from "./BoldSweepButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BoldSweepButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Meet Dr. Franklin — charcoal pill that sweeps away, with inverting circle icon (.franklin-btn). */
export default function BoldSweepButton({
  label,
  practice,
  href = "#",
  className,
}: BoldSweepButtonProps) {
  const text = label ?? defaultCta(practice, 3);
  return (
    <a
      className={`${styles.franklinBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.franklinBtnWrapper}>
        <span className={styles.franklinBtnIcon} aria-hidden="true">
          <Icon name="Arrow 45" className={styles.franklinBtnArrow} />
        </span>
        <span className={styles.franklinBtnText}>{text}</span>
      </span>
    </a>
  );
}
