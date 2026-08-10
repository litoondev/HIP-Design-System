import { Fragment } from "react";
import styles from "./HeroBanner.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";
import { typographyFontFamilyClass } from "@/lib/design-system/typography";

/* Utility-bar link type comes from the Overline typography token — the same "overline"
   variant the Typography Foundation page documents (Inter 700, 14/20/1.25px, uppercase, at
   every breakpoint) — instead of a one-off font-size/weight/letter-spacing baked into this
   component's CSS Module. Any future Hero Banner reaches for the same variant name and stays
   in step automatically if Overline's definition ever changes. */
const utilityLinkClass = typographyClass("overline", styles.hipUtilityLink);

/* Main-nav links keep their own bold/uppercase look (that's a deliberate Hero Banner design
   choice, not part of Menu Item's style) but must pull their *font family* from the Menu Item
   typography token rather than hardcoding one — never write "Figtree"/"Inter" here directly. */
const navLinkClass = `${styles.hipNavLink} ${typographyFontFamilyClass("menuItem")}`;

/* Social + utility icons resolve through the centralized icon library
   (components/ui/icons) — the same glyphs Figma's Top_Menu uses — instead of inline SVG
   paths. They inherit `currentColor` (base white here) and size from --menu-icon-size. */
const SOCIAL_ICONS = [
  { name: "Facebook Round", label: "Facebook" },
  { name: "Instagram", label: "Instagram" },
  { name: "X", label: "X" },
  { name: "Youtube Play", label: "YouTube" },
  { name: "Tiktok", label: "TikTok" },
];

const UTILITY_LINKS = [
  { name: "Mobile", label: "Call / Text" },
  { name: "Calculator", label: "Payment Calculator" },
  // NOTE: Figma's "referral" glyph (a person + share/network) has no equivalent in the icon
  // library yet, and the sandbox can't reach figma.com to import the exact vector. Interim:
  // the closest existing glyph. TODO: add a real "Referral" icon to components/ui/icons and
  // swap the name here.
  { name: "User Circle", label: "Referral" },
  { name: "User", label: "Portal" },
  { name: "Face Time", label: "Virtual Consult" },
];

/** Chevron used by every main-nav link. */
function NavChevron() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const NAV_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/** 01 · Hero Banner — full-bleed, dark overlay, utility bar + main nav + 2 buttons. */
export default function HeroBanner() {
  // The .hipHeroBg gradient stays as the fallback; a real photo overrides it when one exists.
  const bg = sectionImage("hero");

  return (
    <div className={styles.hipHero}>
      <div
        className={styles.hipHeroBg}
        style={
          bg
            ? {
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />
      <div className={styles.hipHeroShade} />

      {/* Utility bar — icons come from the centralized icon library (components/ui/icons),
          sized/spaced by the Figma "Utilities/Menu/*" tokens in globals.css. */}
      <div className={styles.hipUtilityBar}>
        <div className={styles.hipSocials}>
          {SOCIAL_ICONS.map((social, i) => (
            <Fragment key={social.label}>
              <a className={styles.hipSocialIcon} href="#" aria-label={social.label}>
                <Icon name={social.name} size="var(--menu-icon-size)" />
              </a>
              {i < SOCIAL_ICONS.length - 1 && (
                <span aria-hidden="true" className={styles.hipSocDiv} />
              )}
            </Fragment>
          ))}
        </div>

        <div className={styles.hipUtilityLinks}>
          {UTILITY_LINKS.map((link) => (
            <a key={link.label} className={utilityLinkClass} href="#">
              <span className={styles.hipUtilityLinkIcon}>
                <Icon name={link.name} size="var(--menu-icon-size)" />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className={styles.hipMainNav}>
        <a className={styles.hipLogo} href="#">
          HIP<span>.</span>
        </a>
        <nav className={styles.hipNavLinks}>
          {NAV_LINKS.map((label) => (
            <a key={label} className={navLinkClass} href="#">
              {label} <NavChevron />
            </a>
          ))}
        </nav>
        <a className={styles.hipNavCta} href="#">
          Free Consult
        </a>
      </div>

      {/* Hero content */}
      <div className={styles.hipHeroContent}>
        <p className={styles.hipHeroEyebrow}>Orthodontic Excellence</p>
        <h1 className={styles.hipHeroH1}>
          Live Life <em>Smiling</em>
        </h1>
        <div className={styles.hipHeroActions}>
          <button className={`${styles.hipHeroBtn} ${styles.primary}`}>
            Free Consult
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
          </button>
          <button className={`${styles.hipHeroBtn} ${styles.secondary}`}>
            What Sets Us Apart
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
