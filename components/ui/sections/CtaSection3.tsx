import styles from "./CtaSection3.module.css";
import { sectionImage } from "./sectionImages";
import TextContainer from "./TextContainer";
import LineArrowButton from "../buttons/LineArrowButton";

/**
 * 09C · CTA V3 — Figma "hip-Image" Template 06 node 1:48663. Full-bleed photo under
 * a near-opaque cta-500 overlay; centered standard Text Container recolored white
 * (H2 + Body1) ending in the white Line Arrow button. Exactly one CTA.
 */
export default function CtaSection3() {
  const bg = sectionImage("cta", "band") ?? sectionImage("cta");

  return (
    <section
      className={styles.hipCta3}
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className={styles.hipCta3Overlay} aria-hidden="true" />
      {/* Shared Text Container; the wrapper recolors it white for the cta ground
          (StepSection V1 precedent). */}
      <div className={styles.hipCta3Content}>
        <TextContainer
          header="Get Started Today!"
          paragraphs={[
            "Your best smile is one free consult away — book in minutes, online or in office.",
          ]}
          buttons={<LineArrowButton tone="white" label="Request Free Consult" />}
          align="center"
        />
      </div>
    </section>
  );
}
