import styles from "./OurDoctors.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import CleanOutlineButton from "../buttons/CleanOutlineButton";

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
      {/* Heading block is the shared Text Container (centered, no button) — one copy-block
          rhythm and type ramp for every section heading. */}
      <div className={styles.hipDocsHeader}>
        <TextContainer
          align="center"
          preHeader="Our Orthodontists"
          header="We Love Serving Smiles"
          paragraphs={[
            "Board-certified, locally rooted, and genuinely glad to see you. Meet the people who will be looking after your smile from the first consult to the last retainer check.",
          ]}
          buttons={null}
        />
      </div>

      {DOCTORS.map((doctor, i) => (
        <div
          key={doctor.slug}
          className={i % 2 === 1 ? `${styles.hipDocRow} ${styles.reverse}` : styles.hipDocRow}
        >
          {/* Same nested rhythm as the Text Container: [eyebrow —eyebrow-gap— heading]
              —heading-gap— paragraph, then —content-button-gap— button. */}
          <div className={styles.hipDocText}>
            <div className={styles.hipDocCopy}>
              <div className={styles.hipDocHeading}>
                <span className={styles.hipDocCred}>{doctor.credential}</span>
                <h3 className={styles.hipDocName}>{doctor.name}</h3>
              </div>
              <p className={styles.hipDocBody}>{doctor.body}</p>
            </div>
            {/* Global button (Clean — the section's category), labeled "Meet Dr. <last name>". */}
            <CleanOutlineButton label={`Meet Dr. ${doctor.name.split(" ").pop()}`} />
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
