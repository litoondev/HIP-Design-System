import styles from "./TanSweepButton.module.css";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface TanSweepButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
}

/** Inline arrow glyph from buttons.html — kept as a data URI so the component stays self-contained. */
const ARROW_SRC =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARxJREFUeAGtlMFRw0AMRSXZ3KECUoJhhrvTAWcOMdwZIBVAB0mAAsyFOrhnINABdJACWAnJHidMxom1Sf7BXu+sn79XXwuwZ6Fn0WwyuGWUnEJydTIs5zsBFVYwQmljFvhMmfqboNQFZILeYjFCFohnH88Xx7CtQ9P0sRgRyF3zLALflPzmp9evPxDr0HR28zLUTz8sXCD0OKRvbU5dDhu9Pw3uQZbgNqdRQA+0AtaxwMxNBTnXy2EbNLUJjcVYp2FbVXvKSanDvqsoHmlGj+xeOSSCS7WZu19e+eUg8nXASW7j+KJMtCj/ItTAmu6Ji00HLArogZlSD2w6LkaAy9ZbB3MBa2c+mKkzNkIw98JMrj2s2w0zCth5wO5df4FJnOB1fc+GAAAAAElFTkSuQmCC";

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
        {/* Fixed-size decorative data-URI glyph — next/image adds no value here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ARROW_SRC} alt="" />
      </span>
      <span className={styles.discoverUsButtonLabel}>{text}</span>
    </a>
  );
}
