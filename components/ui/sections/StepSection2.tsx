import styles from "./StepSection2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import MinimalOutlineButton from "../buttons/MinimalOutlineButton";

/* Figma card annotations: each step card links to its page/anchor in production. */
const STEPS = [
  { variant: "arch-1", lines: ["Schedule Your", "Visit Today"], tall: false, label: "Step 1 Image" },
  { variant: "arch-2", lines: ["Select Low", "Monthly Payment"], tall: true, label: "Step 2 Image" },
  { variant: "arch-3", lines: ["Sit Back, Relax &", "Get Started"], tall: false, label: "Step 3 Image" },
];

/**
 * 03B · Step Section V2 — light variation, Figma reference node 12983:54203.
 * White ground with a primary-100 band behind the cards; left Text Container
 * (eyebrow + H2), right Body1 paragraph with a cta + secondary pill pair; three
 * arch-top photo cards (middle raised) each with a clickable Strong-1 label card.
 * Everything resolves through the global tokens.
 */
export default function StepSection2() {
  return (
    <div className={styles.hipSteps2}>
      <div className={styles.hipSteps2Band} aria-hidden="true" />

      <div className={styles.hipSteps2Top}>
        <TextContainer
          preHeader="Modern Care Made Accessible"
          header="Creating Confident Smiles"
          buttons={null}
        />
        {/* Copy-only Text Container (no header) — global Minimal buttons (the section's
            category), retargeted to the cta and secondary ramps per the comp. */}
        <TextContainer
          paragraphs={[
            "With advanced technology and flexible options, we make achieving a radiant, healthy smile simple, comfortable, and affordable for every stage of life.",
          ]}
          buttons={
            <>
              <MinimalOutlineButton label="Free Ortho Consult" className={styles.hipSteps2Cta} />
              <MinimalOutlineButton label="Dental Appointment" className={styles.hipSteps2Alt} />
            </>
          }
        />
      </div>

      <div className={styles.hipSteps2Cards}>
        {STEPS.map((step) => (
          <a key={step.variant} className={styles.hipSteps2Card} href="#">
            <SectionImage
              slot="step"
              variant={step.variant}
              label={step.label}
              className={`${styles.hipSteps2Arch}${step.tall ? ` ${styles.tall}` : ""}`}
            />
            <span className={styles.hipSteps2Label}>
              {step.lines[0]}
              <br />
              {step.lines[1]}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
