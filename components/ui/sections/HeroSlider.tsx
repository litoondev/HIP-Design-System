import { Fragment } from "react";
import styles from "./HeroSlider.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

/* Utility-bar links use the Overline typography token (same variant the Typography
   Foundation documents), exactly like the other Hero variants — never a one-off font. */
const utilLinkClass = typographyClass("overline", styles.w3UtilLink);

/* Main-nav links use the full Menu Item typography variant (family, weight, responsive
   size/leading/tracking) — only layout & color live in the module. */
const navLinkClass = typographyClass("menuItem", styles.w3Navlink);

/* The square nav CTA uses the Overline variant (14/20 +1.25px, constant across breakpoints). */
const consultClass = typographyClass("overline", styles.w3Consult);

/* Figma Top_Menu (node 12978:55451): socials left, utility links right. All glyphs
   resolve through the centralized icon library, sized by --menu-icon-size. */
const SOCIAL_ICONS = [
  { name: "Facebook Round", label: "Facebook" },
  { name: "Instagram", label: "Instagram" },
  { name: "Youtube Play", label: "YouTube" },
];

const UTIL_LINKS = [
  { name: "Mobile", label: "Call / Text (704) 269-8495" },
  { name: "Calculator", label: "Payment Calculator" },
  { name: "User", label: "Refer a Patient" },
  { name: "Espanol", label: "Español" },
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
        <div className={styles.w3Brand}>
          HIP<span>.</span>
        </div>
        <nav className={styles.w3Navlinks}>
          {NAV_LINKS.map((label) => (
            <a key={label} className={navLinkClass} href="#">
              {label}
              <span className={styles.w3NavCaret}>
                <Icon name="Angle Down" size="var(--icon-sm)" />
              </span>
            </a>
          ))}
          <a className={consultClass} href="#">
            Free Consultation
          </a>
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
            <h1 className={styles.w3H1}>
              Let Our Family
              <br />
              <em>Treat Your</em> <strong>Family</strong>
            </h1>
            {/* CTA — stacked duplicate label slides up on hover (Figma BTN v2) */}
            <a className={styles.w3Cta} href="#">
              <span className={styles.w3CtaLabelClip}>
                <span className={styles.w3CtaLabels}>
                  <span>Free Consultation</span>
                  <span aria-hidden="true">Free Consultation</span>
                </span>
              </span>
              <span className={styles.w3CtaIcon}>
                <Icon name="Arrow Right" size="var(--btn-icon-size)" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
