import styles from "./HowWeHelp4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PillArrowButton from "../buttons/PillArrowButton";

const CARDS = [
  {
    title: "Braces",
    tone: "primary" as const,
    toneClass: styles.tonePrimary,
    slot: "how-we-help" as const,
    variant: "braces",
    copy: "Time-tested and more comfortable than ever, braces move every kind of smile — with color options kids love and low-profile brackets adults appreciate.",
    button: "Explore Braces",
    flip: false,
  },
  {
    title: "Invisalign",
    tone: "cta" as const,
    toneClass: styles.toneCta,
    slot: "how-we-help" as const,
    variant: "invisalign",
    copy: "Clear, removable aligners straighten your teeth discreetly — no brackets, no wires, and fewer office visits along the way.",
    button: "Explore Invisalign",
    flip: true,
  },
  {
    title: "Other Treatments",
    tone: "dark" as const,
    toneClass: styles.toneDark,
    slot: "how-we-help" as const,
    variant: "patients",
    copy: "From early treatment and retainers to whitening, we offer complete care for every stage of your smile.",
    button: "Explore Treatments",
    flip: false,
  },
];

/**
 * 07D · How We Help V4 — Figma "hip-Image" node 51:23018. Gray-50 ground with a
 * centered standard Text Container heading, then three alternating full-width
 * rows: a white card (rounded outer corners) holding a Text Container with an
 * H3 in the row's hue and the global Pill Arrow button (rounded, up-right arrow),
 * a tall photo, and a 120px color slab bleeding to the page edge.
 */
export default function HowWeHelp4() {
  return (
    <section className={styles.hipHow4}>
      <TextContainer
        preHeader="Our Treatments"
        header="How We Help"
        paragraphs={[
          "Every smile is different — that's why we offer a full range of orthodontic treatments and build a plan around yours.",
        ]}
        align="center"
        buttons={null}
        className={styles.hipHow4Head}
      />

      <div className={styles.hipHow4Rows}>
        {CARDS.map((card) => (
          <div
            key={card.title}
            className={`${styles.hipHow4Row} ${card.toneClass}${card.flip ? ` ${styles.flip}` : ""}`}
          >
            <span className={styles.hipHow4Slab} aria-hidden="true" />
            <div className={styles.hipHow4Card}>
              <TextContainer
                header={card.title}
                headerAs="h3"
                paragraphs={[card.copy]}
                buttons={
                  <PillArrowButton
                    tone={card.tone}
                    shape="rounded"
                    arrow="up-right"
                    label={card.button}
                  />
                }
              />
            </div>
            <SectionImage
              slot={card.slot}
              variant={card.variant}
              label={`${card.title} Image`}
              className={styles.hipHow4Img}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
