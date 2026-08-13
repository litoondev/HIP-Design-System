import styles from "./LocationSection5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipLoc5ColTitle);
const nameClass = typographyClass("strong1", styles.hipLoc5Name);
const bodyClass = typographyClass("body1");

const LOCATIONS = [
  { name: "Location Name 1", address: "123 Main St, City, ST" },
  { name: "Location Name 2", address: "456 Oak Ave, City, ST" },
  { name: "Location Name 3", address: "789 Elm Dr, City, ST" },
  { name: "Location Name 4", address: "321 Pine Rd, City, ST" },
];

/* Pin spots echo the comp's four-office spread (percent of the map box). */
const PINS = [
  { left: "14%", top: "38%" },
  { left: "47%", top: "65%" },
  { left: "24%", top: "72%" },
  { left: "78%", top: "39%" },
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
 * 11E · Location V5 — Figma "hip-Image" node 48:22851. Gray-50 ground. Top row:
 * the standard Text Container beside a square-cornered office photo. Bottom row:
 * a full-width stylized map (rounded left corners, four pins, white zoom control)
 * with a primary-tinted info panel — Locations / Contact Us / Contact Hours —
 * flush against its right edge.
 */
export default function LocationSection5() {
  return (
    <section className={styles.hipLoc5}>
      <div className={styles.hipLoc5Top}>
        <TextContainer
          preHeader="Our Locations"
          header="Come Visit Us"
          paragraphs={[
            "Convenient locations with easy parking — close to home, school, and work.",
          ]}
          buttons={null}
          className={styles.hipLoc5Text}
        />
        <SectionImage
          slot="location"
          variant="office"
          label="Location Image"
          className={styles.hipLoc5Img}
        />
      </div>

      <div className={styles.hipLoc5Bottom}>
        <div className={styles.hipLoc5Map}>
          {PINS.map((pin, i) => (
            <span key={i} className={styles.hipLoc5Pin} style={{ left: pin.left, top: pin.top }}>
              <Icon name="map-pin-fill" size="var(--icon-2xl)" />
            </span>
          ))}
          <span className={styles.hipLoc5Zoom} aria-hidden="true">
            <span>+</span>
            <span>−</span>
          </span>
        </div>

        <div className={styles.hipLoc5Panel}>
          <div className={styles.hipLoc5Col}>
            <h3 className={colTitleClass}>Locations</h3>
            <ul className={styles.hipLoc5List}>
              {LOCATIONS.map((location) => (
                <li key={location.name}>
                  <span className={nameClass}>{location.name}</span>
                  <span className={styles.hipLoc5Row}>
                    <Icon name="map-pin-fill" size="var(--icon-md)" />
                    <span className={bodyClass}>{location.address}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.hipLoc5Col}>
            <h3 className={colTitleClass}>Contact Us</h3>
            <span className={styles.hipLoc5Row}>
              <Icon name="smartphone" size="var(--icon-md)" />
              <span className={bodyClass}>(XXX) XXX-XXXX</span>
            </span>
          </div>
          <div className={styles.hipLoc5Col}>
            <h3 className={colTitleClass}>Contact Hours</h3>
            <table className={styles.hipLoc5Hours}>
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
    </section>
  );
}
