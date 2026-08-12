import styles from "./LocationSection2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipLoc2ColTitle);
const nameClass = typographyClass("strong1");
const bodyClass = typographyClass("body1");

const LOCATIONS = [
  { name: "Location Name 1", address: "123 Main St, City, ST" },
  { name: "Location Name 2", address: "456 Oak Ave, City, ST" },
  { name: "Location Name 3", address: "789 Elm Dr, City, ST" },
  { name: "Location Name 4", address: "321 Pine Rd, City, ST" },
];

const HOURS = [
  ["Monday", "9:00am - 5:00pm"],
  ["Tuesday", "9:00am - 5:00pm"],
  ["Wednesday", "9:00am - 5:00pm"],
  ["Thursday", "9:00am - 5:00pm"],
  ["Friday", "9:00am - 5:00pm"],
  ["Saturday", "9:00am - 5:00pm"],
];

/**
 * 11B · Location V2 — Figma "hip-Image" Template 3 node 1:48533. Primary-50 intro
 * (standard Text Container) over a hairline-bordered block: a stylized map with
 * teardrop pins and a location tooltip, then a bottom row — photo left, white panel
 * right holding the Locations list, a divider, and Contact Us / Contact Hours. The
 * lower half sits on a navy band, per the comp.
 */
export default function LocationSection2() {
  return (
    <section className={styles.hipLoc2}>
      <TextContainer
        preHeader="Our Locations"
        header="Come Visit Us"
        paragraphs={[
          "Convenient offices close to home, school, and work — same great team at every one.",
        ]}
        buttons={null}
        className={styles.hipLoc2Head}
      />

      <div className={styles.hipLoc2Block}>
        {/* Stylized map with pins */}
        <div className={styles.hipLoc2Map}>
          <div className={styles.hipLoc2Popup}>
            <span className={typographyClass("strong1")}>Location name</span>
          </div>
          <span className={`${styles.hipLoc2Pin} ${styles.pinPrimary}`}>
            <Icon name="map-pin-fill" size="var(--icon-2xl)" />
          </span>
          <span className={`${styles.hipLoc2Pin} ${styles.pinSecondary}`}>
            <Icon name="map-pin-fill" size="var(--icon-2xl)" />
          </span>
        </div>

        {/* Photo + info panel */}
        <div className={styles.hipLoc2Bottom}>
          <SectionImage
            slot="location"
            variant="office"
            label="Location Image"
            className={styles.hipLoc2Img}
          />
          <div className={styles.hipLoc2Panel}>
            <div className={styles.hipLoc2Col}>
              <h3 className={colTitleClass}>Locations</h3>
              <ul className={styles.hipLoc2List}>
                {LOCATIONS.map((location) => (
                  <li key={location.name}>
                    <span className={nameClass}>{location.name}</span>
                    <span className={styles.hipLoc2Address}>
                      <Icon name="map-pin-fill" size="var(--icon-md)" />
                      <span className={bodyClass}>{location.address}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <span className={styles.hipLoc2Divider} aria-hidden="true" />
            <div className={styles.hipLoc2Col}>
              <h3 className={colTitleClass}>Contact Us</h3>
              <span className={styles.hipLoc2Address}>
                <Icon name="smartphone" size="var(--icon-md)" />
                <span className={bodyClass}>(XXX) XXX-XXXX</span>
              </span>
              <h3 className={colTitleClass}>Contact Hours</h3>
              <table className={styles.hipLoc2Hours}>
                <tbody>
                  {HOURS.map(([day, hours]) => (
                    <tr key={day}>
                      <td className={bodyClass}>{day}</td>
                      <td className={bodyClass}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
