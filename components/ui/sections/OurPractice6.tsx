import styles from "./OurPractice6.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import LineArrowButton from "../buttons/LineArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const quoteClass = typographyClass("body1", styles.hipPractice6Quote);
const bulletClass = typographyClass("strong1");

const HIGHLIGHTS = [
  "Board-Certified Orthodontic Specialists",
  "Flexible, Interest-Free Payment Plans",
  "Same-Day Starts When You're Ready",
];

/**
 * 04G · Our Practice V6 — Figma "hip-Image" Template 06 node 1:48610. Cream
 * (secondary-50) ground with a white band crossing behind: tall photo left; right,
 * the standard Text Container (H2 + Body1), a white pull-quote bar with a 4px cta
 * rule, an arrow-bullet highlight list, and the Line Arrow primary button.
 */
export default function OurPractice6() {
  return (
    <section className={styles.hipPractice6}>
      <div className={styles.hipPractice6Band} aria-hidden="true" />
      <div className={styles.hipPractice6Row}>
        <SectionImage
          slot="practice"
          variant="tall"
          label="Practice Image"
          className={styles.hipPractice6Img}
        />
        <div className={styles.hipPractice6Text}>
          <TextContainer
            header="What Sets Us Apart"
            paragraphs={[
              "We combine specialist expertise with a warm, unhurried experience — so every visit feels personal.",
            ]}
            buttons={null}
          />
          <div className={styles.hipPractice6Detail}>
            <p className={quoteClass}>
              From your first consult to your final result, one team guides you the
              whole way.
            </p>
            <ul className={styles.hipPractice6List}>
              {HIGHLIGHTS.map((item) => (
                <li key={item} className={bulletClass}>
                  <Icon name="arrow-right" size="var(--icon-sm)" />
                  {item}
                </li>
              ))}
            </ul>
            <LineArrowButton tone="primary" label="Discover Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
