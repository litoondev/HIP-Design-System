import styles from "./HighlightsSplit.module.css";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const titleClass = typographyClass("subtitle", styles.hipHl3Title);
const copyClass = typographyClass("body2", styles.hipHl3Copy);

const CARDS = [
  {
    icon: "smile",
    title: "Joy in Practice",
    copy: "Visits that feel less like appointments and more like catching up with friends.",
  },
  {
    icon: "check",
    title: "Compassionate Care",
    copy: "Every treatment plan starts with listening — to your goals, worries, and schedule.",
  },
  {
    icon: "arrow-up-right",
    title: "Growth Mindset",
    copy: "We keep learning and improving so your care keeps getting better.",
  },
  {
    icon: "user-fill",
    title: "Team Unity",
    copy: "One team, one goal: a smile you love and an experience you'll recommend.",
  },
  {
    icon: "star-fill",
    title: "Innovation and Responsibility",
    copy: "Modern tools and techniques, used thoughtfully and only where they help you.",
  },
];

/**
 * 02C · Highlights V3 — Figma "hip-Image" node 53:23534. Accent-100 tinted
 * ground: a two-line H2 from the standard Text Container on the left, and a
 * stack of five white cards on the right — 2px accent-200 borders, 20px radius,
 * each a primary icon beside an uppercase Subtitle title and Body2 copy. The
 * comp's mascot illustration is decorative and omitted.
 */
export default function HighlightsSplit() {
  return (
    <section className={styles.hipHl3}>
      <TextContainer
        header="Experience Amazing!"
        buttons={null}
        className={styles.hipHl3Head}
      />

      <div className={styles.hipHl3Cards}>
        {CARDS.map((card) => (
          <div key={card.title} className={styles.hipHl3Card}>
            <Icon name={card.icon} size="var(--icon-2xl)" className={styles.hipHl3Icon} />
            <div className={styles.hipHl3Text}>
              <h3 className={titleClass}>{card.title}</h3>
              <p className={copyClass}>{card.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
