import styles from "./GreenOutlineButton.module.css";
import Icon from "../icons/Icon";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface GreenOutlineButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult, green rectangular — ported 1:1 from buttons.html (.rfcb-button). */
export default function GreenOutlineButton({
  label,
  practice,
  onClick,
  className,
}: GreenOutlineButtonProps) {
  const text = label ?? defaultCta(practice, 10);
  return (
    <button
      type="button"
      className={`${styles.rfcbButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      <Icon name="Arrow Right" />
    </button>
  );
}
