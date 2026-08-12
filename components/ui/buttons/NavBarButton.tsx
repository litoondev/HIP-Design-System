import styles from "./NavBarButton.module.css";
import { typographyClass } from "@/components/ui/typography/Typography";
import { defaultCta, type PracticeType } from "./ctaLanguage";

export interface NavBarButtonProps {
  label?: string;
  /** Practice type used for the default CTA label when no label is given. */
  practice?: PracticeType;
  href?: string;
  className?: string;
  /**
   * Which nav background the button sits on — drives the hover treatment so it never matches
   * the ground. Both grounds share the CTA-gold default; on hover a `dark` nav flips to a light
   * fill with dark ink, a `light` nav flips to a dark fill with CTA-gold ink. Defaults to
   * `light` (the button gallery renders on a light card).
   */
  ground?: "dark" | "light";
}

/* Label type is the design-system Over Line variant (Inter 700, 14/20 +1.25px, uppercase,
   constant across breakpoints) — the same token the Figma button references — applied via
   typographyClass rather than the Button type scale, so this compact nav CTA does not inherit
   the larger primary-button type. Colour comes from the module, not the variant. */
const labelClass = typographyClass("overline");

/**
 * Nav Bar Button — the compact nav-menu CTA from Figma "HIP Master V3" node 15916:55711 (BTN,
 * button/nav-ber tokens). A solid block with an Over Line label; navy by default, filling the
 * CTA ramp on hover (the nav menu's conversion colour).
 */
export default function NavBarButton({
  label,
  practice,
  href = "#",
  className,
  ground = "light",
}: NavBarButtonProps) {
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
