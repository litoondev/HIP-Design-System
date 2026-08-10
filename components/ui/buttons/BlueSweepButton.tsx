import Icon from "../icons/Icon";
import styles from "./BlueSweepButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BlueSweepButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — blue rect with a right-to-left white sweep (.blue-learn-more). */
export default function BlueSweepButton({
  label,
  practice,
  href = "#",
  className,
}: BlueSweepButtonProps) {
  const text = label ?? defaultCta(practice, 4);
  return (
    <a
      className={`${styles.blueLearnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.blueLearnMoreText}>{text}</span>
      <span className={styles.blueLearnMoreIcon} aria-hidden="true">
        <Icon name="Arrow 45" />
      </span>
    </a>
  );
}
