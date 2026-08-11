import styles from "./FooterSection.module.css";
import CorporateArrowButton from "../buttons/CorporateArrowButton";
import Icon from "../icons/Icon";

const QUICK_LINKS = ["Our Practice", "Services", "Patient Resources", "Contact Us"];

/** HIPAA-related links are not optional on an orthodontic site. */
const LEGAL = [
  "Sitemap",
  "Privacy Policy",
  "Accessibility Statement",
  "Notice of Privacy Practices",
];

/**
 * Social glyphs resolve through the global icon library, same as the contact icons below and
 * the three hero utility bars. They used to be four raw SVG path strings pasted into this
 * file — the same marks the library already carried, on a second, unmaintained copy that no
 * rename or redraw in components/ui/icons would ever have reached.
 */
const SOCIALS: { name: string; icon: string }[] = [
  { name: "Facebook", icon: "facebook-circle" },
  { name: "Instagram", icon: "instagram" },
  { name: "YouTube", icon: "youtube" },
  { name: "TikTok", icon: "tiktok" },
];

/** Footer Section — navy bg, repeat CTA, 3 columns, legal bar with the floating widgets. */
export default function FooterSection() {
  return (
    <div className={styles.hipFoot}>
      <div className={styles.hipFootTop}>
        {/* Same wordmark and same icon-3xl token the three hero navs use, so the logo can
            never be one size in the header and another in the footer. Icon normalises the
            fill to currentColor, so it takes the footer's white ink off .hipFootLogo. */}
        <a className={styles.hipFootLogo} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        {/* Global button (Professional / Corporate — the section's category) retargeted to
            the CTA ramp: the footer's repeat CTA is last-chance conversion, so it stays orange. */}
        <CorporateArrowButton label="Request Free Consult" className={styles.hipFootCta} />
      </div>

      <div className={styles.hipFootCols}>
        <div>
          <p className={styles.hipFootColLabel}>Quick Links</p>
          <div className={styles.hipFootLinks}>
            {QUICK_LINKS.map((link) => (
              <a key={link} className={styles.hipFootLink} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.hipFootColLabel}>Contact Us</p>
          {/* Figma "Item" node 12973:53811: pin + City rows, then Mobile + Call / Text —
              Body1 white text, global-library icons in cta, 10px gaps, live links. */}
          <div className={styles.hipFootContact}>
            <a className={styles.hipFootContactRow} href="#">
              <Icon name="map-pin-fill" size="var(--icon-md)" className={styles.hipFootContactIcon} />
              City, ST
            </a>
            <a className={styles.hipFootContactRow} href="#">
              <Icon name="map-pin-fill" size="var(--icon-md)" className={styles.hipFootContactIcon} />
              City, ST
            </a>
            <a className={styles.hipFootContactRow} href="tel:+10000000000">
              <Icon name="smartphone" size="var(--icon-md)" className={styles.hipFootContactIcon} />
              Call / Text
            </a>
          </div>
        </div>

        <div>
          <p className={styles.hipFootColLabel}>Follow Us</p>
          <div className={styles.hipFootSocials}>
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                className={styles.hipFootSocial}
                href="#"
                aria-label={social.name}
              >
                <Icon name={social.icon} size="var(--icon-lg)" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.hipFootBar}>
        <div className={styles.hipFootLegal}>
          <span>© 2026 Practice Name</span>
          {LEGAL.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </div>

        {/* Live these are fixed to the viewport corners; shown inline so they stay in the card. */}
        <div className={styles.hipFootFloats}>
          <span className={`${styles.hipFootFloat} ${styles.access}`} aria-hidden="true">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
              <path d="M7 10.5h10M12 10.5V16M12 16l-2.5 3M12 16l2.5 3" />
            </svg>
          </span>
          <span className={`${styles.hipFootFloat} ${styles.chat}`} aria-hidden="true">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
