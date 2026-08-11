import styles from "./CtaSection.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import VibrantSweepButton from "../buttons/VibrantSweepButton";

/** 05 · CTA Section — orange-tinted bg, image left, one CTA only. */
export default function CtaSection() {
  return (
    <div className={styles.hipCta}>
      <SectionImage slot="cta" label="CTA Section Image" className={styles.hipCtaImg} />
      {/* Copy block is the shared Text Container. The button is the Vibrant Sweep (the
          section's category) retargeted to the CTA ramp — the page's one conversion
          CTA stays Ember Orange. */}
      <TextContainer
        preHeader="Request Appointment"
        header="Get Started On Your New Smile Today"
        paragraphs={[
          "One free consultation is all it takes. Our team will walk you through every option, every payment plan, and every next step — at no cost to you.",
        ]}
        buttons={<VibrantSweepButton label="Request Free Consult" className={styles.hipCtaBtn} />}
      />
    </div>
  );
}
