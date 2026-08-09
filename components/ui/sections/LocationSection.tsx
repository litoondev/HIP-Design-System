import styles from "./LocationSection.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

function PhoneIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
  );
}

const OFFICES = [
  { name: "Location Name", address: "123 Main St, City, ST 00000" },
  { name: "Location Name", address: "456 Oak Ave, City, ST 00000" },
];

const HOURS = [
  { days: "Mon – Fri", time: "8:00am – 6:00pm" },
  { days: "Saturday", time: "9:00am – 3:00pm" },
  { days: "Sunday", time: "Closed" },
];

/** Location Section — white bg, 2-col intro, then the office list beside an interactive map. */
export default function LocationSection() {
  return (
    <div className={styles.hipLoc}>
      <div className={styles.hipLocTop}>
        <SectionImage
          slot="location"
          label="Office Exterior / Interior Photo"
          className={styles.hipLocImg}
        />
        <div className={styles.hipLocText}>
          <p className={styles.hipLocEyebrow}>Our Locations</p>
          <h2 className={styles.hipLocH2}>Come Visit Us</h2>
          <p className={styles.hipLocBody}>
            Thirteen offices across the region, so there is almost certainly one near your home,
            school or work. Same team, same technology, same free consult at every single one.
          </p>
        </div>
      </div>

      <div className={styles.hipLocGrid}>
        <div className={styles.hipLocPanels}>
          <div className={styles.hipLocPanel}>
            <p className={styles.hipLocPanelLabel}>Locations</p>
            {OFFICES.map((office, i) => (
              <p key={i} className={styles.hipLocItem}>
                <strong>{office.name}</strong> · {office.address}
              </p>
            ))}
            <span className={styles.hipLocMore}>
              + 11 more locations <ArrowRight />
            </span>
          </div>

          <div className={styles.hipLocPanel}>
            <p className={styles.hipLocPanelLabel}>Contact Us</p>
            <span className={styles.hipLocPhone}>
              <PhoneIcon />
              (XXX) XXX-XXXX
            </span>
            <p className={styles.hipLocItem}>Call or text — we answer both.</p>
          </div>

          <div className={styles.hipLocPanel}>
            <p className={styles.hipLocPanelLabel}>Contact Hours</p>
            {HOURS.map((row) => (
              <p key={row.days} className={styles.hipLocItem}>
                <strong>{row.days}</strong> · {row.time}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.hipLocMap}>
          <span className={`${styles.hipLocPin} ${styles.one}`} />
          <span className={`${styles.hipLocPin} ${styles.two}`} />
          <span className={`${styles.hipLocPin} ${styles.three}`} />
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <p className={styles.hipLocMapLabel}>
            Interactive map
            <br />
            Location pins + pop-up cards
          </p>
        </div>
      </div>
    </div>
  );
}
