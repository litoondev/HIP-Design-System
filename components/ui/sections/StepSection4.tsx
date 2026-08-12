import styles from "./StepSection4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PressShadowButton from "../buttons/PressShadowButton";

/* Each card carries its own hue from the DS ramps (comp: fuchsia / lavender / grape —
   mapped onto tertiary / secondary / primary, per the never-reuse-client-palettes rule).
   The numeral tile repeats the card's hue on a light ground. */
const STEPS = [
  { tone: styles.tone1, lines: ["Request your", "appointment"] },
  { tone: styles.tone2, lines: ["Select affordable", "treatment"] },
  { tone: styles.tone3, lines: ["Sit back, relax &", "get started"] },
];

/**
 * 03D · Step Section V4 — Figma Master V3 node 12986:56347 ("Step section" / Desk
 * 12986:55646). White ground; split header (boxed two-tone H2 left, Body1 copy
 * right); one large rounded photo with three colored step cards overlapping its
 * bottom edge, each holding a light numeral tile crossed by a divider band; two
 * global Press Shadow CTAs centered below.
 */
export default function StepSection4() {
  return (
    <section className={styles.hipSteps4}>
      {/* Split header — the boxed second line is this comp's signature, so the left
          heading is local markup; the right column stays on the shared TextContainer. */}
      <div className={styles.hipSteps4Header}>
        <div className={styles.hipSteps4Heading}>
          <p className={styles.hipSteps4Eyebrow}>
            <span aria-hidden="true" className={styles.hipSteps4EyebrowLine} />
            Simple &amp; Affordable
          </p>
          <h2 className={styles.hipSteps4H2}>
            <span className={styles.hipSteps4H2Line}>3 Steps to a</span>
            <span className={styles.hipSteps4H2Box}>Healthy Smile</span>
          </h2>
        </div>
        <TextContainer
          paragraphs={[
            "We make achieving your healthiest smile straightforward and reassuring — with a team that puts your needs and comfort first.",
          ]}
          buttons={null}
          className={styles.hipSteps4Copy}
        />
      </div>

      {/* Photo with the step cards riding its bottom edge */}
      <div className={styles.hipSteps4Media}>
        <SectionImage
          slot="step"
          variant="clinic"
          label="Step Section Image"
          className={styles.hipSteps4Img}
        />
        <div className={styles.hipSteps4Cards}>
          {STEPS.map((step, i) => (
            <div key={step.lines[0]} className={`${styles.hipSteps4Card} ${step.tone}`}>
              <span className={styles.hipSteps4Divider} aria-hidden="true" />
              <span className={styles.hipSteps4Num} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.hipSteps4Label}>
                {step.lines[0]}
                <br />
                {step.lines[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Two CTAs — the comp pairs an ortho and a dental action (multi-specialty). */}
      <div className={styles.hipSteps4Buttons}>
        <PressShadowButton label="Free Ortho Consult" />
        <PressShadowButton label="Dental Appointment" />
      </div>
    </section>
  );
}
