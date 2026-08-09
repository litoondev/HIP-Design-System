import styles from "./PressButton.module.css";

export interface PressButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/** Request Free Consult — white pill with a yellow shadow that presses in on hover (.press-button). */
export default function PressButton({
  label = "Request Free Consult",
  onClick,
  className,
}: PressButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.pressButton}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M7 24h32M27 12l12 12-12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
