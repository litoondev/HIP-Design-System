import styles from "./WhoWeHelp3.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const cardTitleClass = typographyClass("header3", styles.hipWho3Title);
const cardCopyClass = typographyClass("body1", styles.hipWho3Copy);
const linkClass = typographyClass("button", styles.hipWho3Link);

/* Colored audience cards cycling primary / cta / gray (comp Cards). */
const AUDIENCES = [
  { title: "Kids", tone: styles.tone1 },
  { title: "Teens", tone: styles.tone2 },
  { title: "Adults", tone: styles.tone3 },
];

/**
 * 06C · Who We Help V3 — Figma "hip-Image" Template 06 node 1:48633. Cream ground:
 * left, a full-bleed photo mosaic (two portraits over one wide image, hairline
 * gaps); right, an H2 over three colored audience cards (primary / cta / gray-600),
 * each an H3 title beside Body1 copy and two white text links with arrows.
 */
export default function WhoWeHelp3() {
  return (
    <section className={styles.hipWho3}>
      <div className={styles.hipWho3Mosaic}>
        <div className={styles.hipWho3MosaicTop}>
          <SectionImage slot="who-we-help" variant="kids" label="Kids Image" className={styles.hipWho3Img} />
          <SectionImage slot="who-we-help" variant="teens" label="Teens Image" className={styles.hipWho3Img} />
        </div>
        <SectionImage slot="who-we-help" variant="adults" label="Adults Image" className={styles.hipWho3Img} />
      </div>

      <div className={styles.hipWho3Content}>
        <TextContainer header="Orthodontics for everyone" buttons={null} />
        <div className={styles.hipWho3Cards}>
          {AUDIENCES.map((audience) => (
            <div key={audience.title} className={`${styles.hipWho3Card} ${audience.tone}`}>
              <h3 className={cardTitleClass}>{audience.title}</h3>
              <div className={styles.hipWho3CardBody}>
                <p className={cardCopyClass}>
                  Treatment built around {audience.title.toLowerCase()} — comfortable,
                  flexible, and effective.
                </p>
                <div className={styles.hipWho3Links}>
                  <a className={linkClass} href="#">
                    Braces
                    <Icon name="arrow-right" size="var(--icon-lg)" />
                  </a>
                  <a className={linkClass} href="#">
                    Invisalign
                    <Icon name="arrow-right" size="var(--icon-lg)" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
