import styles from "./PlayfulCollapseButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface PlayfulCollapseButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Artemis Ortho pink pill — ported 1:1 from buttons.html (.artemis-button). */
export default function PlayfulCollapseButton({
  label,
  practice,
  href = "#",
  className,
}: PlayfulCollapseButtonProps) {
  const text = label ?? defaultCta(practice, 18);
  return (
    <a
      className={`${styles.artemisButton}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span className={styles.artemisButtonIcon} aria-hidden="true">
        <Icon name="teeth" size="var(--btn-icon-size)" />
      </span>
      <span>{text}</span>
    </a>
  );
}
