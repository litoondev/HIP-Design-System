import styles from "./NavBarPillOutlineButton.module.css";
import { typographyClass } from "@/components/ui/typography/Typography";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface NavBarPillOutlineButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
  /**
   * Which nav background the button sits on — drives the hover so it never matches the ground.
   * `dark` → cta-50 fill + dark ink; `light` → cta-600 fill + light ink. Defaults to `light`.
   */
  ground?: "dark" | "light";
}

/* Over Line design-system type via typographyClass — same token the Figma button references. */
const labelClass = typographyClass("overline");

/**
 * Nav Bar Pill Outline Button — pill-cornered nav-menu CTA (Figma "HIP Master V3"
 * node 15916:55735, row 2). Navy fill by default; on hover it inverts to a transparent fill
 * with a navy border and navy label, with fully rounded corners.
 */
export default function NavBarPillOutlineButton({
  label,
  practice,
  href = "#",
  className,
  ground = "light",
}: NavBarPillOutlineButtonProps) {
  const text = label ?? defaultCta(practice, 4); // "Request Appointment"
  const groundClass = ground === "dark" ? styles.onDark : styles.onLight;
  return (
    <a
      className={`${styles.navBtn} ${groundClass} ${labelClass}${className ? ` ${className}` : ""}`}
      href={href}
      aria-label={text}
    >
      {text}
    </a>
  );
}
