import styles from "./LocationSection4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const colTitleClass = typographyClass("subtitle", styles.hipLoc4ColTitle);
const bodyClass = typographyClass("body1");
const pinLabelClass = typographyClass("strong1", styles.hipLoc4PinLabel);

const HOURS = [
  ["Monday", "9:00am - 5:00pm"],
  ["Tuesday", "9:00am - 5:00pm"],
  ["Wednesday", "9:00am - 5:00pm"],
  ["Thursday", "9:00am - 5:00pm"],
  ["Friday", "9:00am - 5:00pm"],
  ["Saturday", "9:00am - 5:00pm"],
];

/**
 * 11D · Location V4 — Figma "hip-Image" node 46:22841. Gray-50 ground. Top row:
 * pill-shaped photo capsule (white inset ring inside a 4px gray-200 border) beside
 * the standard Text Container. Bottom row: Locations / Contact Us / Contact Hours
 * column beside a pill-shaped stylized map with a popup pin (primary bubble).
 */
export default function LocationSection4() {
  return (
    <section className={styles.hipLoc4}>
      <div className={styles.hipLoc4Top}>
        <div className={styles.hipLoc4Capsule}>
          <SectionImage
            slot="location"
            variant="office"
            label="Location Image"
            className={styles.hipLoc4Img}
          />
        </div>
        <TextContainer
          preHeader="Come Visit Us"
          header="Our Location"
          paragraphs={[
            "Convenient locations with easy parking — close to home, school, and work.",
          ]}
          buttons={null}
          className={styles.hipLoc4Text}
        />
      </div>

      <div className={styles.hipLoc4Bottom}>
        <div className={styles.hipLoc4Info}>
          <div className={styles.hipLoc4Col}>
            <h3 className={colTitleClass}>Locations</h3>
            <span className={styles.hipLoc4Row}>
              <Icon name="map-pin-fill" size="var(--icon-md)" />
              <span className={bodyClass}>123 Main St, City, ST</span>
            </span>
          </div>
          <div className={styles.hipLoc4Col}>
            <h3 className={colTitleClass}>Contact Us</h3>
            <span className={styles.hipLoc4Row}>
              <Icon name="smartphone" size="var(--icon-md)" />
              <span className={bodyClass}>(XXX) XXX-XXXX</span>
            </span>
          </div>
          <div className={styles.hipLoc4Col}>
            <h3 className={colTitleClass}>Contact Hours</h3>
            <table className={styles.hipLoc4Hours}>
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

        <div className={styles.hipLoc4MapCapsule}>
          <div className={styles.hipLoc4Map}>
            <span className={styles.hipLoc4Pin}>
              <span className={styles.hipLoc4PinBubble}>
                <span className={pinLabelClass}>Location Name</span>
                <span className={styles.hipLoc4PinTail} aria-hidden="true" />
              </span>
              <Icon name="map-pin-fill" size="var(--icon-2xl)" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
