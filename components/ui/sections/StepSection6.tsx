import styles from "./StepSection6.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const stepLabelClass = typographyClass("strong1");
const stepTitleClass = typographyClass("h4Alt", styles.hipSteps6Title);

/* STEP labels cycle the cta / secondary / tertiary hues (comp Steps Container). */
const STEPS = [
  { tone: styles.tone1, title: "Request free consult" },
  { tone: styles.tone2, title: "Select low monthly payment" },
  { tone: styles.tone3, title: "Sit back, relax & get started!" },
];

/**
 * 03F · Step Section V6 — Figma "hip-Image" Template 3 node 1:48391. White ground:
 * centered eyebrow + H2 over a full-width hairline; then a tall photo beside a Body1
 * intro, the square cta button, and a ruled step list — thick rules between rows of
 * "STEP 0N:" (Strong 1, cycling hues) + capitalized H4 Alt titles.
 */
export default function StepSection6() {
  return (
    <section className={styles.hipSteps6}>
      <div className={styles.hipSteps6Head}>
        <TextContainer
          preHeader="Simple & Affordable"
          header="Upgrading Your Smile Is Easy"
          buttons={null}
          align="center"
        />
        <span className={styles.hipSteps6Rule} aria-hidden="true" />
      </div>

      <div className={styles.hipSteps6Content}>
        <SectionImage
          slot="step"
          variant="portrait"
          label="Step Section Image"
          className={styles.hipSteps6Img}
        />
        <div className={styles.hipSteps6Right}>
          <p className={typographyClass("body1", styles.hipSteps6Copy)}>
            We believe healthy, confident smiles can change lives. That&rsquo;s why we
            take a highly personalised approach and consider every detail to give you a
            smile you&rsquo;ll cherish — and deepen the positive impact orthodontic
            treatment has on our community.
          </p>
          <SquareArrowButton tone="cta" label="Request Free Consult" />

          <ol className={styles.hipSteps6List}>
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <span className={`${stepLabelClass} ${step.tone}`}>
                  STEP 0{i + 1}:
                </span>
                <span className={stepTitleClass}>{step.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
