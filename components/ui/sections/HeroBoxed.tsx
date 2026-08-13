import { Fragment } from "react";
import styles from "./HeroBoxed.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import LineArrowButton from "../buttons/LineArrowButton";
import NavBarButton from "../buttons/NavBarButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const utilLinkClass = typographyClass("overline", styles.w5UtilLink);
const navLinkClass = typographyClass("menuItem", styles.w5Navlink);
const heroH1Class = typographyClass("mainHeader", styles.w5H1);

const SOCIAL_ICONS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
];

const UTIL_LINKS = [
  { name: "smartphone", label: "Call / Text" },
  { name: "calculator", label: "Payment Calculator" },
  { name: "user-fill", label: "Portal" },
];

const NAV_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/**
 * 01E · Hero Banner — Boxed Nav (Figma "hip-Image" Template 06 node 41:22665).
 * A boxed, hairline-bordered nav: cream utility bar (socials, utility links, two
 * solid nav CTAs) over a bordered menu row (centered logo + links); below, a
 * photo hero inset in the gutter with a centered uppercase Main Header headline
 * and two Line Arrow buttons (cta / primary tones, white labels).
 */
export default function HeroBoxed() {
  const bg = sectionImage("hero", "boxed") ?? sectionImage("hero");

  return (
    <div className={styles.w5Header}>
      {/* Boxed nav — cream utility bar + bordered menu row */}
      <div className={styles.w5Nav}>
        <div className={styles.w5Topbar}>
          <div className={styles.w5Socials}>
            {SOCIAL_ICONS.map((social, i) => (
              <Fragment key={social.label}>
                <a href="#" aria-label={social.label}>
                  <Icon name={social.name} size="var(--menu-icon-size)" />
                </a>
                {i < SOCIAL_ICONS.length - 1 && <span aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
          <div className={styles.w5Utils}>
            {UTIL_LINKS.map((link) => (
              <a key={link.label} className={utilLinkClass} href="#">
                <Icon name={link.name} size="var(--menu-icon-size)" />
                {link.label}
              </a>
            ))}
            <NavBarButton label="In-Office Consult" ground="light" />
            <NavBarButton label="Virtual Consult" ground="light" className={styles.w5NavBtnAlt} />
          </div>
        </div>
        <div className={styles.w5Menubar}>
          <a className={styles.w5Brand} href="#" aria-label="HIP — home">
            <Icon name="hip-logo" size="var(--icon-2xl)" />
          </a>
          <nav className={styles.w5Navlinks}>
            {NAV_LINKS.map((label) => (
              <a key={label} className={navLinkClass} href="#">
                {label}
                <Icon name="chevron-down-bold" size="var(--icon-sm)" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Photo hero inset in the gutter, centered content */}
      <div className={styles.w5HeroWrap}>
        <div
          className={styles.w5Hero}
          style={bg ? { backgroundImage: `url(${bg})` } : undefined}
        >
          <div className={styles.w5Overlay} />
          <div className={styles.w5Content}>
            <h1 className={heroH1Class}>
              We Make
              <br />
              You Smile!
            </h1>
            <div className={styles.w5Btns}>
              <LineArrowButton tone="cta" onDark label="Virtual Consult" />
              <LineArrowButton tone="primary" onDark label="In-Office Consult" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
