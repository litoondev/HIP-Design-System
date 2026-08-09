import styles from "./OurDoctors.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

/** Two rows shown; the master design runs four, alternating the image side each time. */
const DOCTORS = [
  {
    slug: "one",
    credential: "DDS, MS · Board Certified",
    name: "Dr. First Lastname",
    body: "Two short sentences on training and approach. Keep it warm and human — the full biography lives on the doctor's own profile page, not here.",
    tone: undefined,
  },
  {
    slug: "two",
    credential: "DMD, MS · Board Certified",
    name: "Dr. Second Lastname",
    body: "Same length as the row above so the two balance. Mention one thing patients consistently say about them, and one thing they do outside the practice.",
    tone: "warm",
  },
] as const;

/** Our Doctors — white bg, centered heading, alternating zig-zag rows. */
export default function OurDoctors() {
  return (
    <div className={styles.hipDocs}>
      <div className={styles.hipDocsHeader}>
        <p className={styles.hipDocsEyebrow}>Our Orthodontists</p>
        <h2 className={styles.hipDocsH2}>We Love Serving Smiles</h2>
        <p className={styles.hipDocsIntro}>
          Board-certified, locally rooted, and genuinely glad to see you. Meet the people who will
          be looking after your smile from the first consult to the last retainer check.
        </p>
      </div>

      {DOCTORS.map((doctor, i) => (
        <div
          key={doctor.slug}
          className={i % 2 === 1 ? `${styles.hipDocRow} ${styles.reverse}` : styles.hipDocRow}
        >
          <div className={styles.hipDocText}>
            <span className={styles.hipDocCred}>{doctor.credential}</span>
            <h3 className={styles.hipDocName}>{doctor.name}</h3>
            <p className={styles.hipDocBody}>{doctor.body}</p>
            <span className={styles.hipDocLink}>
              Read Full Bio <ArrowRight />
            </span>
          </div>
          <SectionImage
            slot="doctor"
            variant={doctor.slug}
            label="Doctor Photo"
            alt={doctor.name}
            className={
              doctor.tone ? `${styles.hipDocPhoto} ${styles[doctor.tone]}` : styles.hipDocPhoto
            }
          />
        </div>
      ))}

      <p className={styles.hipDocRepeat}>
        ↕ Pattern repeats for each doctor — 4 in the master design. Alternate the image side every
        row.
      </p>
    </div>
  );
}
