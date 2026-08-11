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

const SOCIALS: { name: string; path: string }[] = [
  {
    name: "Facebook",
    path: "M15 8.0426C15 11.5639 12.4315 14.4888 9.07258 15V10.0872H10.7097L11.0202 8.0426H9.07258V6.73631C9.07258 6.16836 9.35484 5.6288 10.2298 5.6288H11.1048V3.89655C11.1048 3.89655 10.3145 3.75456 9.52419 3.75456C7.94355 3.75456 6.89919 4.74848 6.89919 6.50913V8.0426H5.12097V10.0872H6.89919V15C3.54032 14.4888 1 11.5639 1 8.0426C1 4.15213 4.13306 1 8 1C11.8669 1 15 4.15213 15 8.0426Z",
  },
  {
    name: "Instagram",
    path: "M8 6.34375C8.90625 6.34375 9.65625 7.09375 9.65625 8C9.65625 8.9375 8.90625 9.6875 8 9.6875C7.0625 9.6875 6.3125 8.9375 6.3125 8C6.3125 7.09375 7.0625 6.34375 8 6.34375ZM11.875 5.0625C12.1562 5.71875 12.0938 7.28125 12.0938 8C12.0938 8.75 12.1562 10.3125 11.875 10.9688C11.7188 11.4062 11.375 11.75 10.9375 11.9062C10.2812 12.1875 8.71875 12.125 8 12.125C7.25 12.125 5.6875 12.1875 5.03125 11.9062C4.59375 11.75 4.25 11.4062 4.09375 10.9688C3.84375 10.3125 3.875 8.75 3.875 8C3.875 7.28125 3.84375 5.71875 4.09375 5.0625C4.25 4.625 4.59375 4.28125 5.03125 4.125C5.6875 3.84375 7.25 3.90625 8 3.90625C8.71875 3.90625 10.2812 3.84375 10.9375 4.125C11.375 4.28125 11.7188 4.625 11.875 5.0625ZM8 10.5625C9.40625 10.5938 10.5625 9.4375 10.5625 8.03125V8C10.5625 6.59375 9.40625 5.4375 8 5.4375C6.5625 5.4375 5.4375 6.59375 5.4375 8C5.4375 9.4375 6.5625 10.5625 8 10.5625ZM10.6562 5.9375C10.9688 5.9375 11.25 5.6875 11.25 5.34375C11.25 5 10.9688 4.75 10.6562 4.75C10.3125 4.75 10.0625 5 10.0625 5.34375C10.0625 5.6875 10.3125 5.9375 10.6562 5.9375ZM13.5 1C14.3125 1 15 1.6875 15 2.5V13.5C15 14.3438 14.3125 15 13.5 15H2.5C1.65625 15 1 14.3438 1 13.5V2.5C1 1.6875 1.65625 1 2.5 1H13.5ZM12.9375 10.0625C13 9.25 13 6.78125 12.9375 5.96875C12.9062 5.15625 12.7188 4.4375 12.1562 3.875C11.5625 3.28125 10.8438 3.09375 10.0625 3.0625C9.21875 3 6.75 3 5.9375 3.0625C5.125 3.09375 4.40625 3.28125 3.84375 3.84375C3.25 4.4375 3.0625 5.15625 3.03125 5.9375C2.96875 6.78125 2.96875 9.25 3.03125 10.0625C3.0625 10.875 3.25 11.5938 3.84375 12.1562C4.40625 12.75 5.125 12.9375 5.9375 12.9688C6.75 13.0312 9.21875 13.0312 10.0625 12.9688C10.8438 12.9375 11.5625 12.75 12.1562 12.1562C12.7188 11.5938 12.9062 10.875 12.9375 10.0625Z",
  },
  {
    name: "YouTube",
    path: "M6.8125 6.34375L9.8125 8.03125L6.8125 9.71875V6.34375ZM15 2.5V13.5C15 14.3438 14.3125 15 13.5 15H2.5C1.65625 15 1 14.3438 1 13.5V2.5C1 1.6875 1.65625 1 2.5 1H13.5C14.3125 1 15 1.6875 15 2.5ZM13.6875 8.03125C13.6875 8.03125 13.6875 6.15625 13.4375 5.28125C13.3125 4.78125 12.9062 4.375 12.4375 4.25C11.5312 4 8 4 8 4C8 4 4.4375 4 3.53125 4.25C3.0625 4.375 2.65625 4.78125 2.53125 5.28125C2.3125 6.15625 2.3125 8.03125 2.3125 8.03125C2.3125 8.03125 2.3125 9.875 2.53125 10.7812C2.65625 11.2812 3.0625 11.6562 3.53125 11.7812C4.4375 12 8 12 8 12C8 12 11.5312 12 12.4375 11.7812C12.9062 11.6562 13.3125 11.2812 13.4375 10.7812C13.6875 9.875 13.6875 8.03125 13.6875 8.03125Z",
  },
  {
    name: "TikTok",
    path: "M14 6.74219H13.9732C12.7411 6.74219 11.6161 6.35938 10.7054 5.67578V10.5703C10.7054 13.0312 8.75 15 6.33929 15C3.92857 15 2 13.0312 2 10.5703C2 8.10938 3.92857 6.11328 6.33929 6.11328C6.55357 6.11328 6.74107 6.14062 6.95536 6.16797V8.62891C6.74107 8.54688 6.55357 8.51953 6.33929 8.51953C5.24107 8.51953 4.33036 9.44922 4.33036 10.5703C4.33036 11.6914 5.24107 12.6211 6.33929 12.6211C7.4375 12.6211 8.34821 11.6914 8.34821 10.5703V1H10.7054C10.7054 1.02734 10.7054 1.02734 10.7054 1.05469C10.7054 1.24609 10.7054 1.4375 10.7589 1.62891C10.9196 2.53125 11.4554 3.32422 12.2054 3.81641C12.7143 4.17188 13.3304 4.36328 13.9732 4.36328C13.9732 4.36328 13.9732 4.36328 14 4.36328V6.74219Z",
  },
];

/** Footer Section — navy bg, repeat CTA, 3 columns, legal bar with the floating widgets. */
export default function FooterSection() {
  return (
    <div className={styles.hipFoot}>
      <div className={styles.hipFootTop}>
        <span className={styles.hipFootLogo}>
          HIP<span>.</span>
        </span>
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
              <Icon name="Place Bold" size="20px" className={styles.hipFootContactIcon} />
              City, ST
            </a>
            <a className={styles.hipFootContactRow} href="#">
              <Icon name="Place Bold" size="20px" className={styles.hipFootContactIcon} />
              City, ST
            </a>
            <a className={styles.hipFootContactRow} href="tel:+10000000000">
              <Icon name="Mobile" size="20px" className={styles.hipFootContactIcon} />
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
                <svg viewBox="0 0 16 16" fill="currentColor">
                  <path d={social.path} />
                </svg>
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
