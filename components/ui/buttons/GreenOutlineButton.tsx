import styles from "./GreenOutlineButton.module.css";

export interface GreenOutlineButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult, green rectangular — ported 1:1 from buttons.html (.rfcb-button). */
export default function GreenOutlineButton({
  label = "Request Free Consult",
  onClick,
  className,
}: GreenOutlineButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.rfcbButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M5 20h27M22 9l11 11-11 11" />
      </svg>
    </button>
  );
}
