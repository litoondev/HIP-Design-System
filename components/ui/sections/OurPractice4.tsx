import styles from "./OurPractice4.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import PressShadowButton from "../buttons/PressShadowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

/* Card copy on the Subtitle Alt variant (bold 24/36 +0.75px) — layout/color in the module. */
const cardCopyClass = typographyClass("subtitleAlt", styles.hipPractice4CardCopy);

/**
 * 04D · Our Practice V4 — Figma "hip-Image" node 1:49780 (Template 11). Light playful
 * variation on primary-50: centered standard Text Container (H2 + Body1, no button);
 * a wide rounded-30 photo; then a bottom row pairing an accent rounded-30 copy card
 * (Subtitle Alt bold, two paragraphs) with a right column holding a second rounded-30
 * photo and the category-fit Press Shadow CTA. The comp's decorative doodles
 * (starburst / cloud) rode expiring asset URLs and are omitted.
 */
export default function OurPractice4() {
  return (
    <section className={styles.hipPractice4}>
      <TextContainer
        header="What Sets Us Apart"
        paragraphs={[
          "From the moment you walk in, you'll feel the difference — a warm, welcoming team and care built around your family.",
        ]}
        buttons={null}
        align="center"
      />

      {/* Wide feature photo */}
      <SectionImage
        slot="practice"
        variant="kids"
        label="Practice Feature Image"
        className={styles.hipPractice4Img}
      />

      {/* Accent copy card + photo/CTA column */}
      <div className={styles.hipPractice4Row}>
        <div className={styles.hipPractice4Card}>
          <p className={cardCopyClass}>
            We believe great orthodontic care starts with getting to know you. Every
            smile plan is personal, every visit is comfortable.
          </p>
          <p className={cardCopyClass}>
            With flexible scheduling, transparent pricing, and a team that treats you
            like family, getting started has never been easier.
          </p>
        </div>
        <div className={styles.hipPractice4Col}>
          <SectionImage
            slot="practice"
            variant="patients"
            label="Happy Patients Image"
            className={styles.hipPractice4ColImg}
          />
          <PressShadowButton label="Discover the Difference" />
        </div>
      </div>
    </section>
  );
}
