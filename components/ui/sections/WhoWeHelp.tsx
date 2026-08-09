import styles from "./WhoWeHelp.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

const SEGMENTS = [
  {
    slug: "kids",
    tag: "Ages 7–11",
    title: "Kids",
    body: "Early evaluation catches problems while the jaw is still growing, which often means shorter treatment later. First visit at age 7, and it's free.",
    tone: undefined,
    photo: "Child Patient Photo",
  },
  {
    slug: "teens",
    tag: "Ages 12–17",
    title: "Teens",
    body: "Clear aligners and low-profile brackets that fit around school photos, sports and instruments. Most teens finish in 12–24 months.",
    tone: "teens",
    photo: "Teen Patient Photo",
  },
  {
    slug: "adults",
    tag: "Ages 18+",
    title: "Adults",
    body: "It is never too late. Discreet options straighten your teeth without announcing it to the room — and payment plans start at $99 a month.",
    tone: "adults",
    photo: "Adult Patient Photo",
  },
] as const;

/** Who We Help — light teal bg, centered heading, one zig-zag row per audience segment. */
export default function WhoWeHelp() {
  return (
    <div className={styles.hipWho}>
      <div className={styles.hipWhoHeader}>
        <p className={styles.hipWhoEyebrow}>Who We Help</p>
        <h2 className={styles.hipWhoH2}>Orthodontics Is For Everyone</h2>
        <p className={styles.hipWhoIntro}>
          Kids, teens and adults each need something different from treatment. Here is what to
          expect at every stage — and where to go next.
        </p>
      </div>

      {SEGMENTS.map((segment, i) => (
        <div
          key={segment.slug}
          className={i % 2 === 1 ? `${styles.hipWhoRow} ${styles.reverse}` : styles.hipWhoRow}
        >
          <div className={styles.hipWhoText}>
            <span className={styles.hipWhoTag}>{segment.tag}</span>
            <h3 className={styles.hipWhoTitle}>{segment.title}</h3>
            <p className={styles.hipWhoBody}>{segment.body}</p>
            <span className={styles.hipWhoLink}>
              Learn More <ArrowRight />
            </span>
          </div>
          <SectionImage
            slot="who-we-help"
            variant={segment.slug}
            label={segment.photo}
            alt={`${segment.title} patient`}
            className={
              segment.tone ? `${styles.hipWhoImg} ${styles[segment.tone]}` : styles.hipWhoImg
            }
          />
        </div>
      ))}
    </div>
  );
}
