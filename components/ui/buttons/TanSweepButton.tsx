import styles from "./TanSweepButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface TanSweepButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Discover Us — bordered rect whose fill sweeps in from the icon divider (.discover-us-button). */
export default function TanSweepButton({
  label,
  practice,
  href = "#",
  className,
}: TanSweepButtonProps) {
  const text = label ?? defaultCta(practice, 21);
  return (
    <a
      className={`${styles.discoverUsButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.discoverUsButtonFill} aria-hidden="true" />
      <span className={styles.discoverUsButtonDivider} aria-hidden="true" />
      <span className={styles.discoverUsButtonIcon} aria-hidden="true">
        <Icon name="Arrow Right" />
      </span>
      <span className={styles.discoverUsButtonLabel}>{text}</span>
    </a>
  );
}
