import styles from "./PressShadowButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface PressShadowButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult — white pill with a yellow shadow that presses in on hover (.press-button). */
export default function PressShadowButton({
  label,
  practice,
  onClick,
  className,
}: PressShadowButtonProps) {
  const text = label ?? defaultCta(practice, 19);
  return (
    <button
      type="button"
      className={`${styles.pressButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <Icon name="arrow-right" className={styles.pressButtonIcon} />
    </button>
  );
}
