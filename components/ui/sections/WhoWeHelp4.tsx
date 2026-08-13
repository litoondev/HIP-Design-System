import styles from "./WhoWeHelp4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const titleClass = typographyClass("header3", styles.hipWho4Title);
const copyClass = typographyClass("body1", styles.hipWho4Copy);
const linkPrimaryClass = typographyClass("button", `${styles.hipWho4Link} ${styles.linkPrimary}`);
const linkCtaClass = typographyClass("button", `${styles.hipWho4Link} ${styles.linkCta}`);

const CARDS = [
  {
    title: "Kids",
    copy: "Early visits catch problems while they're easy to fix — and set small smiles up for success.",
  },
  {
    title: "Teens",
    copy: "The classic time for treatment, with options that fit school, sports, and photos.",
  },
  {
    title: "Adults",
    copy: "It's never too late — discreet options fit treatment into busy grown-up lives.",
  },
];

/**
 * 08D · Who We Help V4 — Figma "hip-Image" node 53:23158. Primary-100 tinted
 * ground: centered standard Text Container (cta preheader, two-line H2 with the
 * second line in base-black), a full-width rounded family photo, then three
 * audience columns — H3, Body1, and paired uppercase Braces/Invisalign text
 * links with up-right arrows in the primary and cta hues.
 */
export default function WhoWeHelp4() {
  return (
    <section className={styles.hipWho4}>
      <TextContainer
        preHeader="Orthodontics For Everyone"
        header="Who We Help"
        paragraphs={[
          "Braces and aligners for every age — kids, teens, and adults all smile brighter here.",
        ]}
        align="center"
        buttons={null}
        className={styles.hipWho4Head}
      />

      <SectionImage
        slot="who-we-help"
        variant="family"
        label="Who We Help Image"
        className={styles.hipWho4Img}
      />

      <div className={styles.hipWho4Cards}>
        {CARDS.map((card) => (
          <div key={card.title} className={styles.hipWho4Card}>
            <h3 className={titleClass}>{card.title}</h3>
            <p className={copyClass}>{card.copy}</p>
            <div className={styles.hipWho4Links}>
              <a className={linkPrimaryClass} href="#">
                Braces
                <Icon name="arrow-up-right" size="var(--btn-icon-size)" />
              </a>
              <a className={linkCtaClass} href="#">
                Invisalign
                <Icon name="arrow-up-right" size="var(--btn-icon-size)" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
