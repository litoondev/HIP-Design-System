import { Fragment } from "react";
import styles from "./HeroPillNav.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import { typographyFontFamilyClass } from "@/lib/design-system/typography";

/* Utility-bar link type comes from the Overline typography token — the same "overline"
   variant the Typography Foundation page documents (Inter 700, 14/20/1.25px, uppercase, at
   every breakpoint) — instead of a one-off font-size/weight/letter-spacing baked into this
   component's CSS Module. Any future Hero Banner reaches for the same variant name and stays
   in step automatically if Overline's definition ever changes. */
const utilLinkClass = typographyClass("overline", styles.w2UtilLink);

/* Main-nav links keep their own bold/uppercase look (a deliberate Hero Banner design choice,
   not part of Menu Item's style) but must pull their *font family* from the Menu Item
   typography token rather than hardcoding one — never write "Figtree"/"Inter" here directly. */
const navLinkClass = `${styles.w2Navlink} ${typographyFontFamilyClass("menuItem")}`;

/* Icons resolve through the centralized icon library (components/ui/icons), sized by
   --menu-icon-size. This variant keeps its own utility-link set (Patient Forms / Español)
   — it is not the Figma Top_Menu — but routes every glyph through the same icon system. */
const SOCIAL_ICONS = [
  { name: "Facebook Round", label: "Facebook" },
  { name: "Instagram", label: "Instagram" },
];

const UTIL_LINKS = [
  { name: "Mobile", label: "Call / Text" },
  { name: "Calculator", label: "Payment Calculator" },
  { name: "User", label: "Patient Forms" },
  { name: "Espanol", label: "Español" },
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
            <div className={styles.w2Brand}>
              HIP<span>.</span>
            </div>
            <nav className={styles.w2Navlinks}>
              {NAV_LINKS.map((label) => (
                <a key={label} className={navLinkClass} href="#">
                  {label}{" "}
                  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              ))}
              <a className={styles.w2Consult} href="#">
                Free Consult
              </a>
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
          <h1 className={styles.w2H1}>
            Live Life <em>Smiling</em>
          </h1>
          <div className={styles.w2HeroBtns}>
            <a className={`${styles.w2Btn} ${styles.primary}`} href="#">
              <span className={styles.w2BtnIcon}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              Request Free Consult
            </a>
            <a className={`${styles.w2Btn} ${styles.secondary}`} href="#">
              <span className={styles.w2BtnIcon}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              What Sets Us Apart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
