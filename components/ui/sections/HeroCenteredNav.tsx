import { Fragment } from "react";
import styles from "./HeroCenteredNav.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import LineSlideButton from "../buttons/LineSlideButton";
import NavBarButton from "../buttons/NavBarButton";

/* Utility-bar links use the Overline typography token (Inter 700, 14/20 +1.25px, uppercase,
   constant across breakpoints) — the same variant every other Hero variant reaches for, so a
   change to Over Line moves all four in step. Only layout & colour live in the module. */
const utilLinkClass = typographyClass("overline", styles.v4UtilLink);

/* Main-nav links use the full Menu Item variant (family, weight, responsive
   size/leading/tracking). Only colour, casing and layout stay in the module. */
const navLinkClass = typographyClass("menuItem", styles.v4NavLink);

/* Hero headline uses the Header 1 token (Figtree 700, 36/44 → 48/56 → 72/72) — the DS token
   closest to the source's 74/80 display line. NOTE: the Figma sets this in a serif (Montaga);
   the HIP system carries no serif, so the two-tone treatment is preserved on the header family
   instead — the same trade HeroSlider documents. */
const heroH1Class = typographyClass("header1", styles.v4H1);

/* Every glyph resolves through the centralized icon library (components/ui/icons), sized by
   --menu-icon-size, matching the Top_Menu iconography in the Figma source. */
const SOCIAL_ICONS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "youtube", label: "YouTube" },
];

/* Left / right split around the centered logo, mirroring the Figma nav layout. */
const NAV_LINKS_LEFT = ["Our Practice", "Services"];
const NAV_LINKS_RIGHT = ["Patient Resources", "Contact Us"];

/** 01D · Hero Banner — Centered Nav (Figma Master V3 node 15914:55342): a dark utility bar,
 *  a transparent centered-logo nav sitting over the photo, and a bottom-left two-tone
 *  headline with a bordered "Request Appointment" CTA. */
export default function HeroCenteredNav() {
  const bg = sectionImage("hero");

  return (
    <div className={styles.v4Header}>
      {/* Top utility bar — solid navy, socials left, phone + CTA right */}
      <div className={styles.v4Topbar}>
        <div className={styles.v4Socials}>
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.label}
              className={styles.v4SocialIcon}
              href="#"
              aria-label={social.label}
            >
              <Icon name={social.name} size="var(--menu-icon-size)" />
            </a>
          ))}
        </div>

        <div className={styles.v4TopRight}>
          <a className={utilLinkClass} href="#">
            <span className={styles.v4UtilLinkIcon}>
              <Icon name="smartphone" size="var(--menu-icon-size)" />
            </span>
            Call / Text (843) 242-0645
          </a>
          {/* Nav-menu CTA (NavBarButton) — dark top bar, so hover flips to a light fill. */}
          <NavBarButton label="Request Appointment" ground="dark" />
        </div>
      </div>

      {/* Stage — the photo, its overlay, the centered-logo nav and the hero content */}
      <div className={styles.v4Stage}>
        <div
          className={styles.v4Bg}
          style={bg ? { backgroundImage: `url(${bg})` } : undefined}
        />
        <div className={styles.v4Overlay} />

        {/* Main nav — transparent over the photo, logo centered between the link groups */}
        <nav className={styles.v4Nav}>
          <div className={styles.v4NavGroup}>
            {NAV_LINKS_LEFT.map((label) => (
              <a key={label} className={navLinkClass} href="#">
                {label}
                <span className={styles.v4NavCaret}>
                  <Icon name="chevron-down-bold" size="var(--icon-sm)" />
                </span>
              </a>
            ))}
          </div>

          {/* HIP wordmark from the icon library; Icon normalises its fill to currentColor, so
              the logo takes the nav's white ink instead of a baked-in colour. */}
          <a className={styles.v4Brand} href="#" aria-label="HIP — home">
            <Icon name="hip-logo" size="var(--icon-3xl)" />
          </a>

          <div className={styles.v4NavGroup}>
            {NAV_LINKS_RIGHT.map((label) => (
              <a key={label} className={navLinkClass} href="#">
                {label}
                <span className={styles.v4NavCaret}>
                  <Icon name="chevron-down-bold" size="var(--icon-sm)" />
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content — bottom-left, two-tone headline + bordered CTA */}
        <div className={styles.v4Content}>
          <h1 className={heroH1Class}>
            Positively Influencing Lives{" "}
            <em>Through Compassionate</em> Dental Care
          </h1>
          {/* Global "Line Slide" appointment button (buttons.html .line-appt-btn) — navy rect,
              white border, with the text-slide + line-sweep hover. Its default palette already
              matches this hero; only the hover is retargeted (v4HeroCta) so it stays legible on
              the dark photo ground. */}
          <LineSlideButton label="Request Appointment" className={styles.v4HeroCta} />
        </div>
      </div>
    </div>
  );
}
