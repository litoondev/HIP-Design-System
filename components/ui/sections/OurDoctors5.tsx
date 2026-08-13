import styles from "./OurDoctors5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import ModernPillButton from "../buttons/ModernPillButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const nameClass = typographyClass("header3", styles.hipDoctors5Name);
const credClass = typographyClass("header5", styles.hipDoctors5Cred);
const copyClass = typographyClass("body1", styles.hipDoctors5Copy);

const DOCTORS = [
  {
    name: "Dr. Justin Silvestre",
    credentials: "DMD",
    copy: "A passionate, board-certified orthodontist, Dr. Silvestre combines his love for creating beautiful, functional smiles with a dedication to his community — in and out of the office.",
    button: "Meet Dr. Silvestre",
    variant: "doctor1",
  },
  {
    name: "Dr. Gregory Gittleman",
    credentials: "DMD",
    copy: "A dedicated orthodontist with a background in leadership and service, Dr. Gittleman brings humor, warmth, and an empathetic approach to every patient interaction.",
    button: "Meet Dr. Gittleman",
    variant: "doctor2",
  },
];

/**
 * 05E · Our Doctors V5 — Figma "hip-Image" node 53:23475. Soft gray-50 ground:
 * a wide inset team photo up top, centered standard Text Container heading, then
 * two doctor columns — tall portrait, short cta divider, H3 name in the primary
 * hue with an inline credential, Body1 bio, and the global Modern Pill button
 * retargeted to the gray ramp "Meet Dr. …".
 */
export default function OurDoctors5() {
  return (
    <section className={styles.hipDoctors5}>
      <SectionImage
        slot="doctor"
        variant="team"
        label="Team Photo"
        className={styles.hipDoctors5Banner}
      />

      <div className={styles.hipDoctors5Inner}>
        <TextContainer
          header="Specialists Focusing On Orthodontics"
          paragraphs={[
            "Our doctors and dedicated team are passionate about creating exceptional experiences where patients enjoy great oral health and overall well-being.",
          ]}
          align="center"
          buttons={null}
          className={styles.hipDoctors5Head}
        />

        <div className={styles.hipDoctors5Cols}>
          {DOCTORS.map((doctor) => (
            <div key={doctor.name} className={styles.hipDoctors5Col}>
              <SectionImage
                slot="doctor"
                variant={doctor.variant}
                label={`${doctor.name} Portrait`}
                className={styles.hipDoctors5Img}
              />
              <div className={styles.hipDoctors5Text}>
                <span className={styles.hipDoctors5Divider} aria-hidden="true" />
                <h3 className={nameClass}>
                  {doctor.name} <span className={credClass}>{doctor.credentials}</span>
                </h3>
                <p className={copyClass}>{doctor.copy}</p>
                <ModernPillButton label={doctor.button} className={styles.hipDoctors5Btn} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
