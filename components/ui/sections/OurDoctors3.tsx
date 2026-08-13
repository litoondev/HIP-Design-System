import styles from "./OurDoctors3.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import LineArrowButton from "../buttons/LineArrowButton";
import { logos } from "@/components/ui/logos";

/* Dimmed credibility strip above the doctor card (comp Logo row) — black variants
   from the shared logo library. */
const CREDENTIAL_SLUGS = ["aao", "abo", "ada", "itero", "invisalign"];

const CREDENTIALS = CREDENTIAL_SLUGS.flatMap((slug) => {
  const entry = logos.find((logo) => logo.slug === slug);
  return entry ? [{ name: entry.name, src: entry.files.black ?? entry.files.default }] : [];
});

/**
 * 05C · Our Doctors V3 — Figma "hip-Image" Template 06 node 1:48621. White ground:
 * a dimmed credibility logo row, then a cream-bordered card on 70% white — the
 * standard Text Container (H2 doctor name, two Body1 paragraphs) ending in the
 * filled Line Arrow primary button, beside a tall portrait photo.
 */
export default function OurDoctors3() {
  return (
    <section className={styles.hipDoctors3}>
      <div className={styles.hipDoctors3Logos}>
        {CREDENTIALS.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.name} src={logo.src} alt={logo.name} />
        ))}
      </div>

      <div className={styles.hipDoctors3Card}>
        <div className={styles.hipDoctors3Text}>
          <TextContainer
            preHeader="Meet Our Team"
            header="Meet the Doctor"
            paragraphs={[
              "A board-certified orthodontist who treats every patient like family — and builds every smile plan around your comfort, your goals, and your schedule.",
              "With years of specialist training and thousands of smiles transformed, you're in experienced hands from day one.",
            ]}
            buttons={<LineArrowButton tone="primary" filled label="Meet the Doctor" />}
          />
        </div>
        <SectionImage
          slot="doctor"
          variant="tall"
          label="Doctor Portrait"
          className={styles.hipDoctors3Img}
        />
      </div>
    </section>
  );
}
