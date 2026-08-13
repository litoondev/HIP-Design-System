import styles from "./OurDoctors4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const nameClass = typographyClass("header3", styles.hipDoctors4Name);
const credClass = typographyClass("strong1", styles.hipDoctors4Cred);
const copyClass = typographyClass("body1", styles.hipDoctors4Copy);

const DOCTORS = [
  {
    name: "Dr. Bridget Powers",
    credentials: "DDS, MS",
    copy: "An orthodontic specialist with decades of experience, Dr. Powers transforms smiles for children, teens, and adults with exceptional care and expertise.",
    button: "Meet Dr. Powers",
    variant: "doctor1",
    flip: false,
  },
  {
    name: "Dr. Jeff Roseth",
    credentials: "DMD, MS",
    copy: "Dr. Roseth pairs advanced orthodontic training with a warm chairside manner, building treatment plans around each patient's goals and lifestyle.",
    button: "Meet Dr. Roseth",
    variant: "doctor2",
    flip: true,
  },
];

/**
 * 05D · Our Doctors V4 — Figma "hip-Image" node 53:23342. White ground with a
 * centered standard Text Container heading, then two full-width gray-100 cards
 * alternating copy/portrait: an accent rule with a dot above each capitalized
 * H3 name, Strong-1 credentials, Body1 bio, and the global Square Arrow button
 * (secondary tone) "Meet Dr. …".
 */
export default function OurDoctors4() {
  return (
    <section className={styles.hipDoctors4}>
      <TextContainer
        header="Meet Your Smile Experts"
        paragraphs={[
          "Get to know our doctors, passionate experts dedicated to transforming smiles.",
        ]}
        align="center"
        buttons={null}
        className={styles.hipDoctors4Head}
      />

      <div className={styles.hipDoctors4Cards}>
        {DOCTORS.map((doctor) => (
          <div
            key={doctor.name}
            className={`${styles.hipDoctors4Card}${doctor.flip ? ` ${styles.flip}` : ""}`}
          >
            <div className={styles.hipDoctors4Text}>
              <span className={styles.hipDoctors4Rule} aria-hidden="true" />
              <h3 className={nameClass}>{doctor.name}</h3>
              <p className={credClass}>{doctor.credentials}</p>
              <p className={copyClass}>{doctor.copy}</p>
              <SquareArrowButton tone="secondary" label={doctor.button} />
            </div>
            <SectionImage
              slot="doctor"
              variant={doctor.variant}
              label={`${doctor.name} Portrait`}
              className={styles.hipDoctors4Img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
