import styles from "./HowWeHelp.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import CleanOutlineButton from "../buttons/CleanOutlineButton";

/**
 * Rows alternate sides via .reverse; the image tint cycles through the source's modifiers.
 * `slug` lets each treatment take its own file — how-we-help-braces.jpg and friends — which is
 * what the DS note asks for ("1 image per treatment, match image to treatment").
 */
const ROWS = [
  {
    slug: "braces",
    tag: "Braces",
    title: "Metal & Ceramic Braces",
    body: "The most reliable path to a perfect smile. Our modern braces are smaller, more comfortable, and faster than ever before.",
    reverse: false,
    imgTone: undefined,
  },
  {
    slug: "clear-aligners",
    tag: "Clear Aligners",
    title: "Invisalign / Clear Aligners",
    body: "Nearly invisible, removable, and comfortable. Straighten your teeth without anyone noticing — eat anything, brush normally.",
    reverse: true,
    imgTone: "warm",
  },
  {
    slug: "damon-system",
    tag: "Damon System",
    title: "Damon System Braces",
    body: "Self-ligating brackets that use a slide mechanism — fewer appointments, less discomfort, and outstanding results.",
    reverse: false,
    imgTone: "deep",
  },
  {
    slug: "smile-for-life",
    tag: "Smile For Life",
    title: "Retainers & Whitening",
    body: "Keep your smile for life. Our retainer program and professional whitening ensure your results last — and get brighter.",
    reverse: true,
    imgTone: "soft",
  },
] as const;

/** 04 · How We Help — white bg, centered heading, zig-zag treatment rows. */
export default function HowWeHelp() {
  return (
    <div className={styles.hipHow}>
      {/* Heading block is the shared Text Container (centered, no button) — one copy-block
          rhythm and type ramp for every section heading. */}
      <div className={styles.hipHowHeader}>
        <TextContainer
          align="center"
          preHeader="How We Help"
          header="Explore Our Treatments"
          paragraphs={[
            "From traditional braces to clear aligners, we offer every proven path to a confident smile — tailored to your age, lifestyle, and goals.",
          ]}
          buttons={null}
        />
      </div>

      {ROWS.map((row) => (
        <div
          key={row.tag}
          className={row.reverse ? `${styles.hipHowRow} ${styles.reverse}` : styles.hipHowRow}
        >
          {/* Same nested rhythm as the Text Container: [eyebrow —eyebrow-gap— heading]
              —heading-gap— paragraph, then —content-button-gap— button. */}
          <div className={styles.hipHowText}>
            <div className={styles.hipHowCopy}>
              <div className={styles.hipHowHeading}>
                <span className={styles.hipHowTag}>{row.tag}</span>
                <h3 className={styles.hipHowTitle}>{row.title}</h3>
              </div>
              <p className={styles.hipHowBody}>{row.body}</p>
            </div>
            {/* Global button (Clean — the section's category), labeled per treatment. */}
            <CleanOutlineButton label={`Explore ${row.tag}`} />
          </div>
          <SectionImage
            slot="how-we-help"
            variant={row.slug}
            label="Treatment Image"
            alt={row.title}
            className={
              row.imgTone ? `${styles.hipHowImg} ${styles[row.imgTone]}` : styles.hipHowImg
            }
          />
        </div>
      ))}
    </div>
  );
}
