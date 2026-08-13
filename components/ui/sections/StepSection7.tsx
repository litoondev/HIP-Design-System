import styles from "./StepSection7.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import LineArrowButton from "../buttons/LineArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const numClass = typographyClass("mainHeader", styles.hipSteps7Num);
const labelClass = typographyClass("header5", styles.hipSteps7Label);

/* Full-width color blocks cycling primary / cta / gray (comp Cards). */
const STEPS = [
  { tone: styles.tone1, lines: ["Request Your", "Free Consult"] },
  { tone: styles.tone2, lines: ["Select a Low", "Monthly Payment"] },
  { tone: styles.tone3, lines: ["Sit Back, Relax", "& Get Started!"] },
];

/**
 * 03H · Step Section V7 — Figma "hip-Image" Template 06 node 1:48601. White ground:
 * a hairline-bordered content row (tall photo left; H2 + Body1 + Line Arrow cta
 * button right), then a full-width band of three color blocks (primary-500 /
 * cta-500 / gray-600), each with a big outlined step number over an H5 label.
 */
export default function StepSection7() {
  return (
    <section className={styles.hipSteps7}>
      <div className={styles.hipSteps7Content}>
        <SectionImage
          slot="step"
          variant="tall"
          label="Step Section Image"
          className={styles.hipSteps7Img}
        />
        <div className={styles.hipSteps7Text}>
          <TextContainer
            header="Upgrading Your Smile Is Easy"
            paragraphs={[
              "Getting started takes one visit. We walk you through your options, your timeline, and your payment plan — then handle the rest.",
            ]}
            buttons={<LineArrowButton tone="cta" label="Request Free Consult" />}
          />
        </div>
      </div>

      <div className={styles.hipSteps7Cards}>
        {STEPS.map((step, i) => (
          <div key={step.lines[0]} className={`${styles.hipSteps7Card} ${step.tone}`}>
            <span className={numClass} aria-hidden="true">
              0{i + 1}
            </span>
            <span className={labelClass}>
              {step.lines[0]}
              <br />
              {step.lines[1]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
