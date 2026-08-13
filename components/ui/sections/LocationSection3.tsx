import styles from "./LocationSection3.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipLoc3ColTitle);
const nameClass = typographyClass("strong1");
const bodyClass = typographyClass("body1");

const LOCATIONS = [
  { name: "Location Name 1", address: "123 Main St, City, ST" },
  { name: "Location Name 2", address: "456 Oak Ave, City, ST" },
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
 * 11C · Location V3 — Figma "hip-Image" Template 06 node 1:48682. White ground with
 * a full-width hairline: left, the standard Text Container (H2 "Come Visit Us" +
 * Body1) over Locations / Call-Text and Contact Hours columns; right, a stylized
 * map above a square-cornered office photo.
 */
export default function LocationSection3() {
  return (
    <section className={styles.hipLoc3}>
      <div className={styles.hipLoc3Left}>
        <TextContainer
          header="Come Visit Us"
          paragraphs={[
            "Convenient locations with easy parking — close to home, school, and work.",
          ]}
          buttons={null}
        />
        <div className={styles.hipLoc3Info}>
          <div className={styles.hipLoc3Col}>
            <h3 className={colTitleClass}>Locations</h3>
            <ul className={styles.hipLoc3List}>
              {LOCATIONS.map((location) => (
                <li key={location.name}>
                  <span className={nameClass}>{location.name}</span>
                  <span className={styles.hipLoc3Row}>
                    <Icon name="map-pin-fill" size="var(--icon-md)" />
                    <span className={bodyClass}>{location.address}</span>
                  </span>
                </li>
              ))}
            </ul>
            <h3 className={colTitleClass}>Call / Text</h3>
            <span className={styles.hipLoc3Row}>
              <Icon name="smartphone" size="var(--icon-md)" />
              <span className={bodyClass}>(XXX) XXX-XXXX</span>
            </span>
          </div>
          <div className={styles.hipLoc3Col}>
            <h3 className={colTitleClass}>Office Hours</h3>
            <table className={styles.hipLoc3Hours}>
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

      <div className={styles.hipLoc3Right}>
        <div className={styles.hipLoc3Map}>
          <span className={styles.hipLoc3Pin}>
            <Icon name="map-pin-fill" size="var(--icon-2xl)" />
          </span>
        </div>
        <SectionImage
          slot="location"
          variant="office"
          label="Location Image"
          className={styles.hipLoc3Img}
        />
      </div>
    </section>
  );
}
