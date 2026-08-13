import { Fragment } from "react";
import styles from "./FooterSection4.module.css";
import Icon from "@/components/ui/icons/Icon";
import PressShadowButton from "../buttons/PressShadowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipFooter4ColTitle);
const linkClass = typographyClass("body1", styles.hipFooter4Link);
const legalClass = typographyClass("body2");
const chipClass = typographyClass("body2", styles.hipFooter4Chip);

const QUICK_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

const CONTACTS = [
  { icon: "map-pin-fill", label: "City, ST" },
  { icon: "map-pin-fill", label: "City, ST" },
  { icon: "smartphone", label: "Call / Text" },
];

const SOCIALS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "x-twitter", label: "X" },
  { name: "tiktok", label: "TikTok" },
];

/**
 * 12D · Footer V4 — Figma "hip-Image" footer (node 43:22666). Black ground; white
 * card with rounded bottom corners holding four hairline-divided columns (Quick
 * Links / Contact Us / Follow Us / brand + Press Shadow cta pill); centered legal
 * block with accent-tinted links and the bordered privacy-choices chip pair.
 */
export default function FooterSection4() {
  return (
    <footer className={styles.hipFooter4}>
      <div className={styles.hipFooter4Card}>
        <div className={styles.hipFooter4Col}>
          <h3 className={colTitleClass}>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((label) => (
              <li key={label}>
                <a className={linkClass} href="#">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.hipFooter4Col}>
          <h3 className={colTitleClass}>Contact Us</h3>
          <ul>
            {CONTACTS.map((contact, i) => (
              <li key={`${contact.label}-${i}`}>
                <a className={linkClass} href="#">
                  <Icon name={contact.icon} size="var(--icon-md)" />
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.hipFooter4Col}>
          <h3 className={colTitleClass}>Follow Us</h3>
          <div className={styles.hipFooter4Socials}>
            {SOCIALS.map((social, i) => (
              <Fragment key={social.label}>
                <a href="#" aria-label={social.label}>
                  <Icon name={social.name} size="var(--menu-icon-size)" />
                </a>
                {i < SOCIALS.length - 1 && <span aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>

        <div className={styles.hipFooter4Brand}>
          <a href="#" aria-label="HIP — home">
            <Icon name="hip-logo" size="var(--icon-3xl)" />
          </a>
          <PressShadowButton tone="cta" label="Request Free Consult" />
        </div>
      </div>

      <div className={styles.hipFooter4Legal}>
        <p className={legalClass}>© Copyright 2026 Practice Name</p>
        <p className={legalClass}>
          <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Accessibility Statement</a> | <a href="#">Notice of Privacy Practices</a>
        </p>
        <p className={legalClass}>
          Orthodontic Marketing &amp; Web Design by <a href="#">HIP</a>
        </p>
        <div className={styles.hipFooter4Chips}>
          <a className={chipClass} href="#">
            Notice at collection
          </a>
          <a className={chipClass} href="#">
            Your privacy choices
            <span className={styles.hipFooter4Toggle} aria-hidden="true">
              <span className={styles.hipFooter4ToggleOn}>
                <Icon name="check" size="10px" />
              </span>
              <span className={styles.hipFooter4ToggleOff} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
