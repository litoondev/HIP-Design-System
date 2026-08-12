import styles from "./OurPractice2.module.css";
import SectionImage from "./SectionImage";
import PressShadowButton from "../buttons/PressShadowButton";

/* Strong-1 highlight rows separated by hairlines (comp Highlights List). */
const HIGHLIGHTS = [
  "Award-Winning Orthodontic Care",
  "Games & Free Snacks For All Ages",
  "Proud Hometown Natives",
];

/**
 * 04B · Our Practice V2 — Figma Master V3 node 12994:55984 ("Our Practice" / Desk
 * 12994:55634). Dark ground, serif voice: split header (two-tone uppercase serif
 * heading with a rule, Body1 copy right); a wide rounded-30 team photo with an
 * accent "24+ Years of Experience" stat card overlapping its top-right corner;
 * below, a hairline-divided highlights list with the Press Shadow CTA beside two
 * rounded-top photos. The comp's Trajan Pro maps onto a system serif and its
 * forest-ash/golden-yellow palette onto base-black/accent, per the DS rules.
 */
export default function OurPractice2() {
  return (
    <section className={styles.hipPractice2}>
      {/* Split header + stat card riding the photo's top edge */}
      <div className={styles.hipPractice2Top}>
        <div className={styles.hipPractice2Header}>
          <h2 className={styles.hipPractice2H2}>
            <span className={styles.hipPractice2H2Row}>
              Why Families
              <span aria-hidden="true" className={styles.hipPractice2Rule} />
            </span>
            <span className={styles.hipPractice2H2Accent}>Trust Us</span>
          </h2>
          <p className={styles.hipPractice2Copy}>
            For over 24 years, our practice has provided expert, personalized care,
            creating confident smiles with advanced braces and clear aligner treatments.
          </p>
        </div>
        <div className={styles.hipPractice2Stat}>
          <span className={styles.hipPractice2StatNum}>24+</span>
          <span className={styles.hipPractice2StatLabel}>Years of Experience</span>
        </div>
      </div>

      {/* Wide team photo */}
      <SectionImage
        slot="practice"
        variant="team"
        label="Practice Team Image"
        className={styles.hipPractice2Img}
      />

      {/* Highlights list + CTA beside two rounded-top photos */}
      <div className={styles.hipPractice2Bottom}>
        <div className={styles.hipPractice2List}>
          <ul>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <PressShadowButton label="Discover the Difference" />
        </div>
        <div className={styles.hipPractice2Gallery}>
          <SectionImage
            slot="practice"
            variant="patient"
            label="Patient Image"
            className={styles.hipPractice2GalleryImg}
          />
          <SectionImage
            slot="practice"
            variant="care"
            label="Care Image"
            className={`${styles.hipPractice2GalleryImg} ${styles.wide}`}
          />
        </div>
      </div>
    </section>
  );
}
