import styles from "./HowWeHelp5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PillArrowButton from "../buttons/PillArrowButton";

const CARDS = [
  {
    title: "InBrace",
    variant: "inbrace",
    copy: "Hidden behind your teeth, InBrace straightens your smile completely out of sight — no one has to know you're in treatment.",
    button: "Explore InBrace",
    flip: false,
  },
  {
    title: "Clear Aligners",
    variant: "invisalign",
    copy: "Clear, removable aligners straighten your teeth discreetly — no brackets, no wires, and fewer office visits along the way.",
    button: "Explore Aligners",
    flip: true,
  },
  {
    title: "Braces",
    variant: "braces",
    copy: "Time-tested and more comfortable than ever, braces move every kind of smile — with options kids love and adults appreciate.",
    button: "Explore Braces",
    flip: false,
  },
  {
    title: "Other Treatments",
    variant: "patients",
    copy: "From early treatment and retainers to whitening, we offer complete care for every stage of your smile.",
    button: "Explore Treatments",
    flip: true,
  },
];

/**
 * 07E · How We Help V5 — Figma "hip-Image" node 52:23078. White ground with a
 * centered standard Text Container heading, then four alternating rows: a tall
 * edge-bleed photo beside a Text Container (H2 title, Body1, global Pill Arrow
 * button in the secondary tone), with a 15%-black hairline running from the
 * title out to the page edge.
 */
export default function HowWeHelp5() {
  return (
    <section className={styles.hipHow5}>
      <TextContainer
        preHeader="Treatment For Everyone"
        header="How We Help"
        paragraphs={[
          "Every smile is different — that's why we offer a full range of orthodontic treatments and build a plan around yours.",
        ]}
        align="center"
        buttons={null}
        className={styles.hipHow5Head}
      />

      <div className={styles.hipHow5Rows}>
        {CARDS.map((card) => (
          <div
            key={card.title}
            className={`${styles.hipHow5Row}${card.flip ? ` ${styles.flip}` : ""}`}
          >
            <SectionImage
              slot="how-we-help"
              variant={card.variant}
              label={`${card.title} Image`}
              className={styles.hipHow5Img}
            />
            <div className={styles.hipHow5Text}>
              <TextContainer
                header={card.title}
                paragraphs={[card.copy]}
                buttons={<PillArrowButton tone="secondary" label={card.button} />}
              />
            </div>
            <span className={styles.hipHow5Line} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
