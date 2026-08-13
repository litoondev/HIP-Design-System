import styles from "./WhoWeHelp5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const titleClass = typographyClass("header3", styles.hipWho5Title);
const copyClass = typographyClass("body1", styles.hipWho5Copy);
const introClass = typographyClass("body1", styles.hipWho5Intro);
const linkOneClass = typographyClass("button", `${styles.hipWho5Link} ${styles.linkSecondary}`);
const linkTwoClass = typographyClass("button", `${styles.hipWho5Link} ${styles.linkCta}`);

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
 * 06E · Who We Help V5 — Figma "hip-Image" node 53:23211. Secondary-600 slate
 * ground: split heading (standard Text Container in white left, Body1 intro
 * right), a full-width photo bleeding to the left edge, then a left-inset row
 * of three white cards divided by 1px gray hairlines — each an H3, Body1, and
 * stacked uppercase InBrace/Braces text links with arrows.
 */
export default function WhoWeHelp5() {
  return (
    <section className={styles.hipWho5}>
      <div className={styles.hipWho5Head}>
        <TextContainer
          preHeader="Orthodontics For Everyone"
          header="Who We Help"
          buttons={null}
          className={styles.hipWho5Heading}
        />
        <p className={introClass}>
          Braces and aligners for every age — kids, teens, and adults all smile brighter here.
        </p>
      </div>

      <SectionImage
        slot="who-we-help"
        variant="family"
        label="Who We Help Image"
        className={styles.hipWho5Img}
      />

      <div className={styles.hipWho5CardsWrap}>
        <div className={styles.hipWho5Cards}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.hipWho5Card}>
              <div className={styles.hipWho5CardTop}>
                <h3 className={titleClass}>{card.title}</h3>
                <p className={copyClass}>{card.copy}</p>
              </div>
              <div className={styles.hipWho5Links}>
                <a className={linkOneClass} href="#">
                  InBrace
                  <Icon name="arrow-right" size="var(--btn-icon-size)" />
                </a>
                <a className={linkTwoClass} href="#">
                  Braces
                  <Icon name="arrow-right" size="var(--btn-icon-size)" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
