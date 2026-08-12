import styles from "./HowWeHelp2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const rowTitleClass = typographyClass("header3", styles.hipHow2Title);
const rowCopyClass = typographyClass("body1", styles.hipHow2Copy);

const TREATMENTS = [
  { title: "Braces", variant: "braces", flip: false },
  { title: "Clear Aligners", variant: "aligners", flip: true },
  { title: "Early Treatment", variant: "early", flip: false },
];

/**
 * 07B · How We Help V2 — Figma "hip-Image" Template 3 node 1:48493. White ground:
 * centered standard Text Container, then three full-bleed alternating rows — half
 * photo, half text panel (primary H3, Body1, square primary button), no gaps.
 */
export default function HowWeHelp2() {
  return (
    <section className={styles.hipHow2}>
      <TextContainer
        preHeader="How We Help"
        header="Treatment for every smile"
        paragraphs={[
          "Whatever your smile needs, we have a treatment to match — and a team to walk you through it.",
        ]}
        buttons={null}
        align="center"
        className={styles.hipHow2Head}
      />
      <div className={styles.hipHow2Rows}>
        {TREATMENTS.map((treatment) => {
          const img = (
            <SectionImage
              key="img"
              slot="how-we-help"
              variant={treatment.variant}
              label={`${treatment.title} Image`}
              className={styles.hipHow2Img}
            />
          );
          const content = (
            <div key="content" className={styles.hipHow2Panel}>
              <div className={styles.hipHow2PanelInner}>
                <h3 className={rowTitleClass}>{treatment.title}</h3>
                <p className={rowCopyClass}>
                  Modern {treatment.title.toLowerCase()} designed around comfort and
                  results — with flexible payments and appointment times that fit your
                  family&apos;s schedule.
                </p>
                <SquareArrowButton tone="primary" label={`Explore ${treatment.title}`} />
              </div>
            </div>
          );
          return (
            <div key={treatment.title} className={styles.hipHow2Row}>
              {treatment.flip ? [content, img] : [img, content]}
            </div>
          );
        })}
      </div>
    </section>
  );
}
