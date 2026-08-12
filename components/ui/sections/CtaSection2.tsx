import styles from "./CtaSection2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import SquareArrowButton from "../buttons/SquareArrowButton";

/**
 * 09B · CTA V2 — Figma "hip-Image" Template 3 node 1:48525. A cta-500 panel fills
 * most of the width with white eyebrow + H2 and the white-bordered square cta button;
 * a portrait photo overlaps the panel's right edge, offset vertically. One conversion
 * CTA, per the DS rule.
 */
export default function CtaSection2() {
  return (
    <section className={styles.hipCta2}>
      <div className={styles.hipCta2Panel}>
        {/* Shared Text Container; the wrapper recolors it white for the cta ground
            (same precedent as StepSection V1's dark-ground recolor). */}
        <div className={styles.hipCta2Content}>
          <TextContainer
            preHeader="Request Free Consult"
            header="Are you ready to transform your smile?"
            buttons={<SquareArrowButton tone="cta" label="Request Free Consult" />}
          />
        </div>
      </div>
      <SectionImage
        slot="cta"
        variant="portrait"
        label="CTA Image"
        className={styles.hipCta2Img}
      />
    </section>
  );
}
