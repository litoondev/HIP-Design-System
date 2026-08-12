import styles from "./NavBarPillButton.module.css";
import { typographyClass } from "@/components/ui/typography/Typography";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface NavBarPillButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
  /**
   * Which nav background the button sits on — drives the hover so it never matches the ground.
   * `dark` → light fill + dark ink on hover; `light` → dark fill + CTA-gold ink. Defaults to
   * `light`. See NavBarButton for the ratios.
   */
  ground?: "dark" | "light";
}

/* Over Line design-system type via typographyClass — same token the Figma button references. */
const labelClass = typographyClass("overline");

/**
 * Nav Bar Pill Button — pill-cornered nav-menu CTA (Figma "HIP Master V3" node 15916:55735,
 * row 4). Navy by default, filling the CTA ramp on hover; fully rounded corners.
 */
export default function NavBarPillButton({
  label,
  practice,
  href = "#",
  className,
  ground = "light",
}: NavBarPillButtonProps) {
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
