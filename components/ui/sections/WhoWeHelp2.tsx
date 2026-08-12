import styles from "./WhoWeHelp2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const cardTitleClass = typographyClass("header3", styles.hipWho2Title);
const cardCopyClass = typographyClass("body1", styles.hipWho2Copy);
const linkClass = typographyClass("button");

/* Middle card flips image-first (comp cards 2). */
const AUDIENCES = [
  { title: "Kids", variant: "kids", flip: false },
  { title: "Teens", variant: "teens", flip: true },
  { title: "Adults", variant: "adults", flip: false },
];

/**
 * 06B · Who We Help V2 — Figma "hip-Image" Template 3 node 1:48460. White ground:
 * split header (eyebrow + two-line H2 left, Body1 right) over a full-width hairline;
 * three columns divided by hairlines — each an H3 audience title, Body1 copy, two
 * text links with arrows (Braces in secondary, Clear Aligners in cta), and a tall
 * photo; the middle column runs image-first.
 */
export default function WhoWeHelp2() {
  return (
    <section className={styles.hipWho2}>
      <div className={styles.hipWho2Head}>
        <div className={styles.hipWho2HeadRow}>
          <TextContainer
            preHeader="Who We Help"
            header="Orthodontics for everyone"
            buttons={null}
          />
          <TextContainer
            paragraphs={[
              "From a child's first visit to adult clear aligners, we build treatment around every stage of life — flexible plans, gentle technology, and a team that makes it easy.",
            ]}
            buttons={null}
          />
        </div>
        <span className={styles.hipWho2Rule} aria-hidden="true" />
      </div>

      <div className={styles.hipWho2Cards}>
        {AUDIENCES.map((audience) => {
          const content = (
            <div className={styles.hipWho2Content} key="content">
              <h3 className={cardTitleClass}>{audience.title}</h3>
              <p className={cardCopyClass}>
                Personalized {audience.title.toLowerCase()} treatment with braces or
                clear aligners — built around comfort, schedules, and real results.
              </p>
              <div className={styles.hipWho2Links}>
                <a className={`${linkClass} ${styles.hipWho2Link} ${styles.linkBraces}`} href="#">
                  Braces
                  <Icon name="arrow-right" size="var(--icon-lg)" />
                </a>
                <a className={`${linkClass} ${styles.hipWho2Link} ${styles.linkAligners}`} href="#">
                  Clear Aligners
                  <Icon name="arrow-right" size="var(--icon-lg)" />
                </a>
              </div>
            </div>
          );
          const img = (
            <SectionImage
              key="img"
              slot="who-we-help"
              variant={audience.variant}
              label={`${audience.title} Image`}
              className={styles.hipWho2Img}
            />
          );
          return (
            <div key={audience.title} className={styles.hipWho2Card}>
              {audience.flip ? [img, content] : [content, img]}
            </div>
          );
        })}
      </div>
    </section>
  );
}
