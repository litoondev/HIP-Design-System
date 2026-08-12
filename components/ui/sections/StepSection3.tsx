import styles from "./StepSection3.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import ElegantFillButton from "../buttons/ElegantFillButton";

/* Card grounds step through the warm token ramps (comp: light maroon → maroon → charcoal). */
const STEPS = [
  { variant: "leaf-1", tone: styles.tone1, lines: ["Complimentary", "Consult"], label: "Step 1 Image" },
  { variant: "leaf-2", tone: styles.tone2, lines: ["Select Low", "Monthly Payment"], label: "Step 2 Image" },
  { variant: "leaf-3", tone: styles.tone3, lines: ["Sit Back, Relax &", "Get Started"], label: "Step 3 Image" },
];

/**
 * 03C · Step Section V3 — "leaf card" variation, Figma reference node 12985:55117.
 * A side band in accent behind a white panel with a 150px rounded corner; Text
 * Container + Body1 paragraph and a leaf-shaped CTA up top; three leaf cards
 * (tl/br 150px, tr/bl radius-md) with outlined serif numerals and Button-scale
 * labels. Everything resolves through the global tokens; the comp's client
 * palette maps onto the tertiary/accent/cta ramps.
 */
export default function StepSection3() {
  return (
    <div className={styles.hipSteps3}>
      <div className={styles.hipSteps3Panel}>
        <div className={styles.hipSteps3Top}>
          <TextContainer
            preHeader="Simple & Affordable"
            header="Upgrade Your Smile"
            buttons={null}
          />
          {/* Copy-only Text Container (no header) — global Elegant Fill button
              (the section's category) on its native ramp. */}
          <TextContainer
            paragraphs={[
              "Getting started is easier than you think. One free consult, flexible monthly payments, and a team that walks you through every step.",
            ]}
            buttons={<ElegantFillButton label="Complimentary Consult" />}
          />
        </div>

        <div className={styles.hipSteps3Cards}>
          {STEPS.map((step, i) => (
            <div key={step.variant} className={`${styles.hipSteps3Card} ${step.tone}`}>
              <SectionImage
                slot="step"
                variant={step.variant}
                label={step.label}
                className={styles.hipSteps3Img}
              />
              <div className={styles.hipSteps3Foot}>
                <span className={styles.hipSteps3Num} aria-hidden="true">
                  {i + 1}
                </span>
                <span className={styles.hipSteps3Label}>
                  {step.lines[0]}
                  <br />
                  {step.lines[1]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
