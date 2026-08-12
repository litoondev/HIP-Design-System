import styles from "./StepSection5.module.css";
import SectionImage from "./SectionImage";
import PressShadowButton from "../buttons/PressShadowButton";

/* Card outlines cycle three DS hues (comp: golden yellow / lucky green / lighter blue
   → accent / tertiary / secondary ramps, per the never-reuse-client-palettes rule). */
const STEPS = [
  { tone: styles.tone1, lines: ["Request", "Free Consult"] },
  { tone: styles.tone2, lines: ["Select Low", "Monthly Payment"] },
  { tone: styles.tone3, lines: ["Sit Back, Relax &", "Get Started"] },
];

/**
 * 03E · Step Section V5 — Figma Master V3 node 12991:55562 ("Step section" / Desk
 * 12989:54988). White ground, serif voice: centered two-line uppercase heading with
 * flanking rules and a Body1 intro; three outlined rounded-30 step cards (serif
 * numeral + tracked label); a wide rounded photo with a rotating play badge on its
 * corner; a split lower heading/copy row; one centered Press Shadow CTA.
 * The comp's Trajan Pro maps onto a system serif — client fonts are never reused.
 */
export default function StepSection5() {
  return (
    <section className={styles.hipSteps5}>
      {/* Centered serif heading with flanking rules */}
      <div className={styles.hipSteps5Heading}>
        <h2 className={styles.hipSteps5H2}>
          <span className={styles.hipSteps5H2Row}>
            <span aria-hidden="true" className={styles.hipSteps5Rules} />
            Upgrade Your Smile
            <span aria-hidden="true" className={styles.hipSteps5Rules} />
          </span>
          <span className={styles.hipSteps5H2Muted}>In 3 Simple Steps</span>
        </h2>
        <p className={styles.hipSteps5Intro}>
          Getting the confident, healthy smile you deserve is simple — our team is here to
          guide you every step of the way.
        </p>
      </div>

      {/* Three outlined step cards */}
      <div className={styles.hipSteps5Cards}>
        {STEPS.map((step, i) => (
          <div key={step.lines[0]} className={`${styles.hipSteps5Card} ${step.tone}`}>
            <span className={styles.hipSteps5Num} aria-hidden="true">
              {i + 1}
            </span>
            <span className={styles.hipSteps5Label}>
              {step.lines[0]}
              <br />
              {step.lines[1]}
            </span>
          </div>
        ))}
      </div>

      {/* Wide photo with the rotating play badge riding its top-left corner */}
      <div className={styles.hipSteps5Media}>
        <SectionImage
          slot="step"
          variant="office"
          label="Step Section Image"
          className={styles.hipSteps5Img}
        />
        <div className={styles.hipSteps5Badge}>
          <svg className={styles.hipSteps5BadgeRing} viewBox="0 0 100 100">
            <path
              id="steps5CircPath"
              fill="none"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
            <text
              style={{ fontFamily: "inherit" }}
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="3"
              fill="var(--color-gray-500)"
            >
              <textPath href="#steps5CircPath">PRACTICE NAME • PRACTICE NAME •</textPath>
            </text>
          </svg>
          <div className={styles.hipSteps5BadgeBtn}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Split lower row: serif heading left, Body1 copy right */}
      <div className={styles.hipSteps5Bottom}>
        <h3 className={styles.hipSteps5H3}>
          <span className={styles.hipSteps5H2Row}>
            No Pressure
            <span aria-hidden="true" className={styles.hipSteps5Rules} />
          </span>
          <span className={styles.hipSteps5H2Muted}>Just Answers</span>
        </h3>
        <p className={styles.hipSteps5Copy}>
          We&rsquo;re happy to offer same day starts when treatment is recommended. Parents
          and patients love the convenience of beginning their treatment while they are
          already in the office.
        </p>
      </div>

      {/* One conversion CTA — pill with the pressed hard shadow, per the comp. */}
      <div className={styles.hipSteps5Buttons}>
        <PressShadowButton label="Request Free Consult" />
      </div>
    </section>
  );
}
