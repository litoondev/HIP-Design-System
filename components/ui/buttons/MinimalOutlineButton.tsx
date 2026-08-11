import Icon from "../icons/Icon";
import styles from "./MinimalOutlineButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface MinimalOutlineButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Learn More — charcoal square with a rotating arrow (.charcoal-learn-more). */
export default function MinimalOutlineButton({
  label,
  practice,
  href = "#",
  className,
}: MinimalOutlineButtonProps) {
  const text = label ?? defaultCta(practice, 7);
  return (
    <a
      className={`${styles.charcoalLearnMore}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.charcoalLearnMoreIcon} aria-hidden="true">
        <Icon
          name="arrow-right"
          size="56%"
          className={styles.charcoalLearnMoreArrow}
        />
      </span>
    </a>
  );
}
