import styles from "./CtaSection5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PillArrowButton from "../buttons/PillArrowButton";

/**
 * 09E · CTA V5 — Figma "hip-Image" node 49:22998. Orange cta-500 band inset
 * between white page gutters: left, a full-height doctor photo flush with the
 * band's edges; right, the standard Text Container recolored for the ground
 * (black preheader, white H2/body) with the global Pill Arrow button (white
 * tone, rounded corners, diagonal arrow) as the single conversion CTA.
 */
export default function CtaSection5() {
  return (
    <section className={styles.hipCta5}>
      <div className={styles.hipCta5Band}>
        <SectionImage
          slot="cta"
          variant="doctor"
          label="Doctor Image"
          className={styles.hipCta5Img}
        />
        <div className={styles.hipCta5Content}>
          <TextContainer
            preHeader="Request Free Consult"
            header="Get Started On Treatments"
            paragraphs={[
              "Schedule a free consultation and find out which treatment fits your smile, your schedule, and your budget.",
            ]}
            buttons={
              <PillArrowButton
                tone="white"
                shape="rounded"
                arrow="up-right"
                label="Request Free Consult"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
