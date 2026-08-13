import styles from "./HowWeHelp3.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import LineArrowButton from "../buttons/LineArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const introClass = typographyClass("body1", styles.hipHow3Intro);
const titleCtaClass = typographyClass("header2", styles.titleCta);
const titlePrimaryClass = typographyClass("header2", styles.titlePrimary);
const rowCopyClass = typographyClass("body1", styles.hipHow3Copy);

/**
 * 07C · How We Help V3 — Figma "hip-Image" Template 06 node 1:48645. Gray-50 ground:
 * split heading (two-line H2 left, Body1 right); two hairline-bordered rows
 * alternating text/photo — Invisalign (cta hue, tertiary border) then Braces
 * (primary hue, cream border) — each ending in its Line Arrow button.
 */
export default function HowWeHelp3() {
  return (
    <section className={styles.hipHow3}>
      <div className={styles.hipHow3Head}>
        <TextContainer header="How We Help" buttons={null} />
        <p className={introClass}>
          Two proven paths to a straighter smile — clear aligners you can barely see,
          or modern braces that work fast. We&rsquo;ll help you pick the right one at
          your free consult.
        </p>
      </div>

      {/* Invisalign row — text left, photo right, tertiary border */}
      <div className={`${styles.hipHow3Row} ${styles.rowCta}`}>
        <div className={styles.hipHow3Text}>
          <h3 className={titleCtaClass}>Invisalign</h3>
          <p className={rowCopyClass}>
            Nearly invisible aligners that fit your life — removable for meals,
            photos, and game day, with fewer office visits along the way.
          </p>
          <LineArrowButton tone="cta" label="Explore Invisalign" />
        </div>
        <SectionImage
          slot="how-we-help"
          variant="aligners"
          label="Invisalign Image"
          className={styles.hipHow3Img}
        />
      </div>

      {/* Braces row — photo left, text right, cream border */}
      <div className={`${styles.hipHow3Row} ${styles.rowPrimary}`}>
        <SectionImage
          slot="how-we-help"
          variant="braces"
          label="Braces Image"
          className={styles.hipHow3Img}
        />
        <div className={styles.hipHow3Text}>
          <h3 className={titlePrimaryClass}>Braces</h3>
          <p className={rowCopyClass}>
            Smaller, more comfortable, and more effective than ever — modern braces
            for every age, with flexible payment plans.
          </p>
          <LineArrowButton tone="primary" label="Explore Braces" />
        </div>
      </div>
    </section>
  );
}
