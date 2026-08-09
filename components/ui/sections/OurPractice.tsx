import styles from "./OurPractice.module.css";
import { ArrowRight } from "./SectionIcons";
import { sectionImage } from "./sectionImages";
import imageStyles from "./SectionImage.module.css";

/** 03 · Our Practice — light teal bg, 2-col, rotating play badge. */
export default function OurPractice() {
  const still = sectionImage("practice");

  return (
    <div className={styles.hipPractice}>
      <div className={styles.hipPracticeVideo}>
        {/* Sits behind the play badge — .hipPracticeVideo is already relative + overflow:hidden. */}
        {still && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={imageStyles.img} src={still} alt="Practice video still" />
        )}
        <div className={styles.hipPlayBadge}>
          {/* Rotating text ring (SVG) */}
          <svg className={styles.hipPlayRing} viewBox="0 0 100 100">
            <path
              id="circPath"
              fill="none"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
            {/* The source set font-family="Figtree,sans-serif" here. Under next/font that literal
                never resolves, so the family goes through the CSS variable instead. */}
            <text
              style={{
                fontFamily: "var(--font-figtree), Figtree, sans-serif",
                textTransform: "uppercase",
              }}
              fontSize="8.5"
              fontWeight="700"
              letterSpacing="3"
              fill="rgba(249,115,22,0.7)"
            >
              <textPath href="#circPath">PRACTICE NAME • PRACTICE NAME •</textPath>
            </text>
          </svg>
          <div className={styles.hipPlayBtn}>
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.hipPracticeText}>
        <p className={styles.hipPracticeEyebrow}>Our Practice</p>
        <h2 className={styles.hipPracticeH2}>What Sets Us Apart</h2>
        <p className={styles.hipPracticeBody}>
          We combine cutting-edge technology with a warm, family-friendly environment. Our
          board-certified orthodontists have helped thousands of patients achieve the smile
          they&apos;ve always wanted — affordably, comfortably, and close to home.
        </p>
        <button className={styles.hipPracticeCta}>
          Learn More
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
