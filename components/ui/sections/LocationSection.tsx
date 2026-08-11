import styles from "./LocationSection.module.css";
import SectionImage from "./SectionImage";
import Icon from "../icons/Icon";
import TextContainer from "./TextContainer";
import CorporateArrowButton from "../buttons/CorporateArrowButton";

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
        {/* Copy block is the shared Text Container (light ground, standard colors). */}
        <TextContainer
          preHeader="Our Locations"
          header="Come Visit Us"
          paragraphs={[
            "Thirteen offices across the region, so there is almost certainly one near your home, school or work. Same team, same technology, same free consult at every single one.",
          ]}
          buttons={null}
        />
      </div>

      <div className={styles.hipLocGrid}>
        <div className={styles.hipLocPanels}>
          <div className={`${styles.hipLocPanel} ${styles.hipLocHoursPanel}`}>
            <p className={styles.hipLocPanelLabel}>Locations</p>
            <div className={styles.hipLocHours}>
              {OFFICES.map((office, i) => (
                <p key={i} className={styles.hipLocItem}>
                  <strong>{office.name}</strong> · {office.address}
                </p>
              ))}
            </div>
            {/* Global button (Professional / Corporate — the section's category). */}
            <CorporateArrowButton label="View All Locations" className={styles.hipLocMore} />
          </div>

          {/* Figma "Call / Text" node 12969:53750: Subtitle title, then a call row and a
              text row — 20px icon + Body1 number, icon↔text on --link-icon-gap. */}
          <div className={`${styles.hipLocPanel} ${styles.hipLocHoursPanel}`}>
            <p className={styles.hipLocPanelLabel}>Contact Us</p>
            <div className={styles.hipLocContactRows}>
              {/* Icons from the global library; call and text are live links with hover. */}
              <a className={styles.hipLocContactRow} href="tel:+10000000000" aria-label="Call us">
                <Icon name="Mobile" size="20px" />
                (XXX) XXX-XXXX
              </a>
              <a className={styles.hipLocContactRow} href="sms:+10000000000" aria-label="Text us">
                <Icon name="Chat Circle Border" size="20px" />
                (XXX) XXX-XXXX
              </a>
            </div>
          </div>

          {/* Rhythm from the Figma Contact Hours table: title→hours 16/16/10,
              row→row 10, days↔time center gap 20/20/10 — via the global --hours-* tokens. */}
          <div className={`${styles.hipLocPanel} ${styles.hipLocHoursPanel}`}>
            <p className={styles.hipLocPanelLabel}>Contact Hours</p>
            <div className={styles.hipLocHours}>
              {HOURS.map((row) => (
                <p key={row.days} className={styles.hipLocHoursRow}>
                  <strong>{row.days}</strong>
                  <span>{row.time}</span>
                </p>
              ))}
            </div>
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
