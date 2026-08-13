import { Fragment } from "react";
import styles from "./FooterSection5.module.css";
import Icon from "@/components/ui/icons/Icon";
import CorporateChevronButton from "../buttons/CorporateChevronButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipFooter5ColTitle);
const linkClass = typographyClass("body1", styles.hipFooter5Link);
const legalClass = typographyClass("body2");
const chipClass = typographyClass("body2", styles.hipFooter5Chip);

const QUICK_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

const CONTACTS = [
  { icon: "map-pin-fill", label: "City, ST" },
  { icon: "map-pin-fill", label: "City, ST" },
  { icon: "map-pin-fill", label: "City, ST" },
  { icon: "smartphone", label: "Call / Text" },
];

const SOCIALS = [
  { name: "facebook-circle", label: "Facebook" },
  { name: "instagram", label: "Instagram" },
  { name: "x-twitter", label: "X" },
  { name: "youtube", label: "YouTube" },
  { name: "tiktok", label: "TikTok" },
];

/**
 * 12E · Footer V5 — Figma "hip-Image" footer (node 44:22746). Cta-tinted page
 * ground holding a dark rounded card: brand + Corporate Chevron CTA over a
 * 10%-white hairline; three hairline-divided columns with cta-tinted titles;
 * a second hairline; centered legal text with primary links and the bordered
 * privacy-choices chip pair.
 */
export default function FooterSection5() {
  return (
    <footer className={styles.hipFooter5}>
      <div className={styles.hipFooter5Card}>
        <div className={styles.hipFooter5Top}>
          <a className={styles.hipFooter5Brand} href="#" aria-label="HIP — home">
            <Icon name="hip-logo" size="var(--icon-3xl)" />
          </a>
          <CorporateChevronButton label="Request Free Consult" className={styles.hipFooter5Cta} />
        </div>

        <div className={styles.hipFooter5Cols}>
          <div className={styles.hipFooter5Col}>
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
          <div className={styles.hipFooter5Col}>
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
          <div className={styles.hipFooter5Col}>
            <h3 className={colTitleClass}>Follow Us</h3>
            <div className={styles.hipFooter5Socials}>
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
        </div>

        <div className={styles.hipFooter5Legal}>
          <p className={legalClass}>© Copyright 2026 Practice Name</p>
          <p className={legalClass}>
            <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Accessibility Statement</a> | <a href="#">Notice of Privacy Practices</a>
          </p>
          <p className={legalClass}>
            Orthodontic Marketing &amp; Web Design by <a href="#">HIP</a>
          </p>
          <div className={styles.hipFooter5Chips}>
            <a className={chipClass} href="#">
              Notice at collection
            </a>
            <a className={chipClass} href="#">
              Your privacy choices
              <span className={styles.hipFooter5Toggle} aria-hidden="true">
                <span className={styles.hipFooter5ToggleOn}>
                  <Icon name="check" size="10px" />
                </span>
                <span className={styles.hipFooter5ToggleOff} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
