import { Fragment } from "react";
import styles from "./HeroSlider.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import NavBarButton from "../buttons/NavBarButton";
import CorporateArrowButton from "../buttons/CorporateArrowButton";

/* Utility-bar links use the Overline typography token (same variant the Typography
   Foundation documents), exactly like the other Hero variants — never a one-off font. */
const utilLinkClass = typographyClass("overline", styles.w3UtilLink);

/* Main-nav links use the full Menu Item typography variant (family, weight, responsive
   size/leading/tracking) — only layout & color live in the module. */
const navLinkClass = typographyClass("menuItem", styles.w3Navlink);

/* The hero headline is the Main Header token (Figtree 700, 40/40 → 56/68 → 100/100).
   NOTE: this replaces a hand-rolled Georgia serif at clamp(44px,7vw,100px). The two-tone
   em/strong colour treatment is preserved, but the serif voice is not — Main Header is on the
   header family. See the module comment if that serif needs to come back. */
const heroH1Class = typographyClass("mainHeader", styles.w3H1);

/* Figma Top_Menu (node 12978:55451): socials left, utility links right. All glyphs
   resolve through the centralized icon library, sized by --menu-icon-size. */
const SOCIAL_ICONS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "youtube", label: "YouTube" },
];

const UTIL_LINKS = [
  { name: "smartphone", label: "Call / Text (704) 269-8495" },
  { name: "calculator", label: "Payment Calculator" },
  { name: "user-fill", label: "Refer a Patient" },
  { name: "espanol", label: "Español" },
];

const NAV_LINKS = ["Our Practice", "Orthodontics", "Patient Resources", "Contact Us"];

/** 01C · Hero Banner — Slider (Figma Master V3 node 12978:55076): cyan utility bar,
 *  white square nav, inset photo hero with a serif two-tone headline and a
 *  sliding-label arrow CTA. */
export default function HeroSlider() {
  const bg = sectionImage("hero", "slider") ?? sectionImage("hero");

  return (
    <div className={styles.w3Header}>
      {/* Top utility bar — secondary (cyan) ground, black ink */}
      <div className={styles.w3Topbar}>
        <div className={styles.w3Socials}>
          {SOCIAL_ICONS.map((social) => (
            <a key={social.label} className={styles.w3SocialIcon} href="#" aria-label={social.label}>
              <Icon name={social.name} size="var(--menu-icon-size)" />
            </a>
          ))}
        </div>
        <div className={styles.w3UtilLinks}>
          {UTIL_LINKS.map((link) => (
            <a key={link.label} className={utilLinkClass} href="#">
              <span className={styles.w3UtilLinkIcon}>
                <Icon name={link.name} size="var(--menu-icon-size)" />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav — white, square corners, square accent button */}
      <div className={styles.w3Mainbar}>
        {/* HIP wordmark from the icon library; inherits the white nav bar's black ink. */}
        <a className={styles.w3Brand} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        <nav className={styles.w3Navlinks}>
          {NAV_LINKS.map((label) => (
            <a key={label} className={navLinkClass} href="#">
              {label}
              <span className={styles.w3NavCaret}>
                <Icon name="chevron-down-bold" size="var(--icon-sm)" />
              </span>
            </a>
          ))}
          {/* Nav CTA — on the white nav bar (light ground), so hover flips to a dark fill. */}
          <NavBarButton label="Free Consultation" ground="light" className={styles.w3Consult} />
        </nav>
      </div>

      {/* Slider hero — photo inset inside the page gutter, content bottom-left */}
      <div className={styles.w3SliderWrap}>
        <div
          className={styles.w3Slider}
          style={bg ? { backgroundImage: `url(${bg})` } : undefined}
        >
          <div className={styles.w3Overlay} />
          <div className={styles.w3Content}>
            <h1 className={heroH1Class}>
              Let Our Family
              <br />
              <em>Treat Your</em> <strong>Family</strong>
            </h1>
            {/* Hero CTA — shared CorporateArrowButton from the button library, retargeted to the
                accessible gold treatment (gold default → gold hover, black ink); the arrow
                animates on hover. Replaces the old inline slider CTA whose cta-700 fill blended
                into the dark ground (2.16:1). */}
            <CorporateArrowButton label="Free Consultation" className={styles.w3HeroBtnCta} />
          </div>
        </div>
      </div>
    </div>
  );
}
