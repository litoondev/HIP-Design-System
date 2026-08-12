import styles from "./BoldTabButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface BoldTabButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Solid right arrow from the Figma button (exact vector, colored via currentColor). */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 17.9521 17.5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M7.61788 1.15263L8.49995 0.270619C8.9009 -0.0902062 9.50231 -0.0902062 9.86315 0.270619L17.6815 8.0484C18.0424 8.44931 18.0424 9.05069 17.6815 9.41151L9.86315 17.2294C9.50231 17.5902 8.9009 17.5902 8.49995 17.2294L7.61788 16.3474C7.25704 15.9464 7.25704 15.3451 7.61788 14.9442L12.4693 10.3336H0.962259C0.400941 10.3336 0 9.9327 0 9.37142V8.08849C0 7.5673 0.400941 7.12629 0.962259 7.12629H12.4693L7.61788 2.55584C7.25704 2.15493 7.21694 1.55355 7.61788 1.15263Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Request CTA — squared cta block with a white arrow tab flush right (Figma Button, HIP Master V3). */
export default function BoldTabButton({
  label,
  practice,
  href = "#",
  className,
}: BoldTabButtonProps) {
  const text = label ?? defaultCta(practice, 4);
  return (
    <a
      className={`${styles.tabBtn}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      <span>{text}</span>
      <span className={styles.tabBtnIcon} aria-hidden="true">
        <ArrowIcon />
      </span>
    </a>
  );
}
