import { Fragment } from "react";
import styles from "./FooterSection3.module.css";
import Icon from "@/components/ui/icons/Icon";
import LineArrowButton from "../buttons/LineArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipFooter3ColTitle);
const linkClass = typographyClass("body1", styles.hipFooter3Link);
const legalClass = typographyClass("body2");

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
 * 12C · Footer V3 — Figma "hip-Image" Template 06 footer (node 1:48698). Black
 * ground: brand + Line Arrow cta button; three boxed columns (5%-white panels with
 * 10%-white borders, 40px padding) for Quick Links / Contact Us / Follow Us; a
 * 15%-white hairline; centered legal text with primary-tinted links.
 */
export default function FooterSection3() {
  return (
    <footer className={styles.hipFooter3}>
      <div className={styles.hipFooter3Top}>
        <a className={styles.hipFooter3Brand} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        <LineArrowButton tone="cta" label="Request Free Consult" />
      </div>

      <div className={styles.hipFooter3Cols}>
        <div className={styles.hipFooter3Col}>
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
        <div className={styles.hipFooter3Col}>
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
        <div className={styles.hipFooter3Col}>
          <h3 className={colTitleClass}>Follow Us</h3>
          <div className={styles.hipFooter3Socials}>
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

      <div className={styles.hipFooter3Legal}>
        <p className={legalClass}>© Copyright 2026 Practice Name</p>
        <p className={legalClass}>
          <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Accessibility Statement</a> | <a href="#">Notice of Privacy Practices</a>
        </p>
        <p className={legalClass}>
          Orthodontic Marketing &amp; Web Design by <a href="#">HIP</a>
        </p>
      </div>
    </footer>
  );
}
