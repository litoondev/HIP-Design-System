import styles from "./CtaSection.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

/** 05 · CTA Section — orange-tinted bg, image left, one CTA only. */
export default function CtaSection() {
  return (
    <div className={styles.hipCta}>
      <SectionImage slot="cta" label="CTA Section Image" className={styles.hipCtaImg} />
      <div className={styles.hipCtaText}>
        <p className={styles.hipCtaEyebrow}>Request Appointment</p>
        <h2 className={styles.hipCtaH2}>Get Started On Your New Smile Today</h2>
        <p className={styles.hipCtaBody}>
          One free consultation is all it takes. Our team will walk you through every option, every
          payment plan, and every next step — at no cost to you.
        </p>
        <button className={styles.hipCtaBtn}>
          Request Free Consult
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
