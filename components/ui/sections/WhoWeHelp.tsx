import styles from "./WhoWeHelp.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PressShadowButton from "../buttons/PressShadowButton";

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
      {/* Heading block is the shared Text Container (centered, no button) — one copy-block
          rhythm and type ramp for every section heading. */}
      <div className={styles.hipWhoHeader}>
        <TextContainer
          align="center"
          preHeader="Who We Help"
          header="Orthodontics Is For Everyone"
          paragraphs={[
            "Kids, teens and adults each need something different from treatment. Here is what to expect at every stage — and where to go next.",
          ]}
          buttons={null}
        />
      </div>

      {SEGMENTS.map((segment, i) => (
        <div
          key={segment.slug}
          className={i % 2 === 1 ? `${styles.hipWhoRow} ${styles.reverse}` : styles.hipWhoRow}
        >
          {/* Same nested rhythm as the Text Container: [eyebrow —eyebrow-gap— heading]
              —heading-gap— paragraph, then —content-button-gap— button. */}
          <div className={styles.hipWhoText}>
            <div className={styles.hipWhoCopy}>
              <div className={styles.hipWhoHeading}>
                <span className={styles.hipWhoTag}>{segment.tag}</span>
                <h3 className={styles.hipWhoTitle}>{segment.title}</h3>
              </div>
              <p className={styles.hipWhoBody}>{segment.body}</p>
            </div>
            {/* Global button (Fun / Playful — the section's category). */}
            <PressShadowButton label={`${segment.title} Orthodontics`} />
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
