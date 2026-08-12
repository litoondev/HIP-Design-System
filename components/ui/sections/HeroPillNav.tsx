import { Fragment } from "react";
import styles from "./HeroPillNav.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import ModernPillButton from "../buttons/ModernPillButton";
import NavBarPillButton from "../buttons/NavBarPillButton";

/* Utility-bar link type comes from the Overline typography token — the same "overline"
   variant the Typography Foundation page documents (Inter 700, 14/20/1.25px, uppercase, at
   every breakpoint) — instead of a one-off font-size/weight/letter-spacing baked into this
   component's CSS Module. Any future Hero Banner reaches for the same variant name and stays
   in step automatically if Overline's definition ever changes. */
const utilLinkClass = typographyClass("overline", styles.w2UtilLink);

/* Main-nav links use the FULL Menu Item typography variant — family, weight, and the
   responsive size/leading/tracking ladder — not just its font family. Previously this pulled
   only the family and restated size/weight/tracking in the module, which meant a change to
   Menu Item moved the font but left this nav's metrics behind. Only layout, color and case
   live in the module now. Matches HeroSlider, which already used the whole token. */
const navLinkClass = typographyClass("menuItem", styles.w2Navlink);

/* The hero headline is the Main Header token (Figtree 700, 40/40 → 56/68 → 100/100),
   replacing a `clamp(52px,5.5vw,80px)` this file invented for itself. Only color, margin,
   alignment and casing stay in the module. */
const heroH1Class = typographyClass("mainHeader", styles.w2H1);

/* Icons resolve through the centralized icon library (components/ui/icons), sized by
   --menu-icon-size. This variant keeps its own utility-link set (Patient Forms / Español)
   — it is not the Figma Top_Menu — but routes every glyph through the same icon system. */
const SOCIAL_ICONS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
];

const UTIL_LINKS = [
  { name: "smartphone", label: "Call / Text" },
  { name: "calculator", label: "Payment Calculator" },
  { name: "user-fill", label: "Patient Forms" },
  { name: "espanol", label: "Español" },
];

const NAV_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/** 01B · Hero Banner — pill nav, full-bleed, centered text (Ward-style adapted to HIP DS). */
export default function HeroPillNav() {
  // .w2Hero already declares background-size:cover / background-position:center — the source
  // clearly expected a photo here, so this only supplies the image itself.
  const bg = sectionImage("hero");

  return (
    <div className={styles.w2Header}>
      {/* Navigation (absolutely over hero) */}
      <nav className={styles.w2Nav}>
        {/* Topbar */}
        <div className={styles.w2Topbar}>
          <div className={styles.w2Socials}>
            {SOCIAL_ICONS.map((social, i) => (
              <Fragment key={social.label}>
                <a className={styles.w2SocialIcon} href="#" aria-label={social.label}>
                  <Icon name={social.name} size="var(--menu-icon-size)" />
                </a>
                {i < SOCIAL_ICONS.length - 1 && (
                  <span aria-hidden="true" className={styles.w2SocDiv} />
                )}
              </Fragment>
            ))}
          </div>

          <div className={styles.w2UtilLinks}>
            {UTIL_LINKS.map((link) => (
              <a key={link.label} className={utilLinkClass} href="#">
                <span className={styles.w2UtilLinkIcon}>
                  <Icon name={link.name} size="var(--menu-icon-size)" />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Pill mainbar — floats over hero */}
        <div className={styles.w2MainbarWrap}>
          <div className={styles.w2Mainbar}>
            {/* HIP wordmark from the icon library; inherits the pill nav's navy ink. */}
            <a className={styles.w2Brand} href="#" aria-label="HIP — home">
              <Icon name="hip-logo" size="var(--icon-3xl)" />
            </a>
            <nav className={styles.w2Navlinks}>
              {NAV_LINKS.map((label) => (
                <a key={label} className={navLinkClass} href="#">
                  {label}
                  <span className={styles.w2NavCaret}>
                    <Icon name="chevron-down-bold" size="var(--icon-sm)" />
                  </span>
                </a>
              ))}
              {/* Nav CTA — on the white pill (light ground), so hover flips to a dark fill. */}
              <NavBarPillButton label="Free Consult" ground="light" className={styles.w2Consult} />
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero: full-bleed, sits under nav */}
      <div
        className={styles.w2Hero}
        style={bg ? { backgroundImage: `url(${bg})` } : undefined}
      >
        <div className={styles.w2HeroPattern} />
        <div className={styles.w2HeroContent}>
          <h1 className={heroH1Class}>
            Live Life <em>Smiling</em>
          </h1>
          {/* Global Modern Pill buttons (the section's category) — the conversion CTA is
              retargeted to the cta ramp; the secondary keeps the native primary pill. */}
          <div className={styles.w2HeroBtns}>
            <ModernPillButton label="Request Free Consult" className={styles.w2BtnCta} />
            <ModernPillButton label="What Sets Us Apart" />
          </div>
        </div>
      </div>
    </div>
  );
}
