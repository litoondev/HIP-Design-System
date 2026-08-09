import styles from "./StepSection.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

const STEPS = [
  {
    num: "1",
    title: "Request Free Consult",
    body: "Book online or call us — your first visit is completely free, no strings attached.",
  },
  {
    num: "2",
    title: "Select Low Monthly Payment",
    body: "Choose a plan that fits your budget. Payments start at $99/month with 0% financing.",
  },
  {
    num: "3",
    title: "Sit Back, Relax & Get Started",
    body: "Your journey begins the same day. We handle everything — you just show up and smile.",
  },
];

/** 02 · Step Section — dark bg, 2-col top + 3 numbered cards. */
export default function StepSection() {
  return (
    <div className={styles.hipSteps}>
      <div className={styles.hipStepsTop}>
        <div className={styles.hipStepsText}>
          <p className={styles.hipStepsEyebrow}>Simple &amp; Affordable</p>
          <h2 className={styles.hipStepsH2}>Upgrade Your Smile</h2>
          <p className={styles.hipStepsBody}>
            Getting started is easier than you think. One free consult, flexible monthly payments,
            and a team that walks you through every step.
          </p>
          <button className={styles.hipStepsCta}>
            Request Free Consult
            <ArrowRight />
          </button>
        </div>
        <SectionImage slot="step" label="Step Section Image" className={styles.hipStepsImg} />
      </div>

      <div className={styles.hipStepsCards}>
        {STEPS.map((step) => (
          <div key={step.num} className={styles.hipStepCard}>
            <div className={styles.hipStepNum}>{step.num}</div>
            <div className={styles.hipStepTitle}>{step.title}</div>
            <p className={styles.hipStepBody}>{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
