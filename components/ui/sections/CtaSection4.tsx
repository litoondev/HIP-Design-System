import styles from "./CtaSection4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import CapsuleArrowButton from "../buttons/CapsuleArrowButton";

/**
 * 09D · CTA V4 — Figma "hip-Image" node 49:22981. Full-bleed cta-500 band: left,
 * the standard Text Container recolored white (preheader "Request A Free Consult",
 * H2) with the global Capsule Arrow button (white tone, conversion CTA); right, a
 * pill-shaped photo inside a white ring. The comp's contour-line backdrop is drawn
 * as concentric CSS circles instead of the expiring Figma vector.
 */
export default function CtaSection4() {
  return (
    <section className={styles.hipCta4}>
      <span className={styles.hipCta4Contours} aria-hidden="true" />
      <div className={styles.hipCta4Content}>
        <TextContainer
          preHeader="Request A Free Consult"
          header="Get Started Today Right Away"
          buttons={<CapsuleArrowButton tone="white" label="Request Free Consult" />}
        />
      </div>
      <div className={styles.hipCta4Capsule}>
        <SectionImage
          slot="cta"
          variant="patients"
          label="CTA Image"
          className={styles.hipCta4Img}
        />
      </div>
    </section>
  );
}
