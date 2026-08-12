import styles from "./OurDoctors2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const itemTitleClass = typographyClass("strong1");
const itemCopyClass = typographyClass("body1", styles.hipDoctors2ItemCopy);

/* Check-led highlight items (comp List Item 1–3). */
const HIGHLIGHTS = [
  { title: "Treatment to Fit Your Lifestyle", copy: "Braces and clear aligners tailored to your schedule." },
  { title: "Advanced, Gentle Technology", copy: "Digital scans and efficient visits — no goopy impressions." },
  { title: "Care That Feels Like Family", copy: "One doctor, one team, with you at every appointment." },
];

/**
 * 05B · Our Doctors V2 — Figma "hip-Image" Template 3 node 1:48413. Gray-50 ground:
 * left, the standard Text Container (eyebrow, H2, Body1) over three check-led
 * highlight items, ending in the square secondary button; right, a tall portrait
 * photo bleeding to the section edge.
 */
export default function OurDoctors2() {
  return (
    <section className={styles.hipDoctors2}>
      <div className={styles.hipDoctors2Left}>
        <TextContainer
          preHeader="Meet Our Orthodontist"
          header="Meet the Doctor"
          paragraphs={[
            "Board-certified care with a personal touch — our doctor builds every treatment plan around your smile, your comfort, and your life.",
          ]}
          buttons={null}
        />
        <ul className={styles.hipDoctors2List}>
          {HIGHLIGHTS.map((item) => (
            <li key={item.title}>
              <span className={styles.hipDoctors2ItemHead}>
                <Icon name="check" size="var(--icon-sm)" />
                <span className={itemTitleClass}>{item.title}</span>
              </span>
              <p className={itemCopyClass}>{item.copy}</p>
            </li>
          ))}
        </ul>
        <SquareArrowButton tone="secondary" label="Meet the Doctor" />
      </div>
      <SectionImage
        slot="doctor"
        variant="portrait"
        label="Doctor Portrait"
        className={styles.hipDoctors2Img}
      />
    </section>
  );
}
