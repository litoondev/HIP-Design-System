import { Fragment } from "react";
import styles from "./FooterSection2.module.css";
import Icon from "@/components/ui/icons/Icon";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipFooter2ColTitle);
const linkClass = typographyClass("body1", styles.hipFooter2Link);
const legalClass = typographyClass("body2", styles.hipFooter2Legal);

const QUICK_LINKS = [
  "Our Practice",
  "Services",
  "Patient Resources",
  "Contact Us",
];

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
 * 12B · Footer V2 — Figma "hip-Image" Template 3 footer (node 1:48549). Navy ground:
 * brand + square cta button over a hairline; three hairline-divided columns (Quick
 * Links, Contact Us with icons, Follow Us socials); a second hairline; then centered
 * legal text with primary-tinted links and the HIPAA/privacy items.
 */
export default function FooterSection2() {
  return (
    <footer className={styles.hipFooter2}>
      <div className={styles.hipFooter2Top}>
        <a className={styles.hipFooter2Brand} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        <SquareArrowButton tone="cta" label="Request Free Consult" />
      </div>

      <div className={styles.hipFooter2Cols}>
        <div className={styles.hipFooter2Col}>
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
        <div className={styles.hipFooter2Col}>
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
        <div className={styles.hipFooter2Col}>
          <h3 className={colTitleClass}>Follow Us</h3>
          <div className={styles.hipFooter2Socials}>
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

      <div className={styles.hipFooter2Legal}>
        <p className="flex items-center gap-[var(--legal-gap)] flex-wrap">
          © Copyright 2026 Practice Name
          <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Accessibility Statement</a> |{" "}
          <a href="#">Notice of Privacy Practices</a>
        </p>
        <p className={legalClass}>
          Orthodontic Marketing &amp; Web Design by <a href="#">HIP</a>
        </p>
      </div>
    </footer>
  );
}
