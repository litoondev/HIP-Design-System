import styles from "./Reviews2.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import SquareArrowButton from "../buttons/SquareArrowButton";
import SliderArrowButton from "../buttons/SliderArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const reviewCopyClass = typographyClass("body1", styles.hipReviews2Text);
const readMoreClass = typographyClass("strong1", styles.hipReviews2ReadMore);
const reviewerClass = typographyClass("subtitle", styles.hipReviews2Name);

/**
 * 10B · Reviews V2 — Figma "hip-Image" Template 3 testimonials (node 1:48508). White
 * ground: tall photo left; a hairline column with the quote glyph; right, eyebrow +
 * H2, one framed review card (primary-50 ground, primary-200 border, Google mark +
 * five stars, Body1 quote, tertiary "Read More", divider, reviewer subtitle), then a
 * footer row of square slider arrows and the square primary "Read More" button.
 */
export default function Reviews2() {
  return (
    <section className={styles.hipReviews2}>
      <SectionImage
        slot="testimonial"
        variant="portrait"
        label="Testimonial Image"
        className={styles.hipReviews2Img}
      />

      {/* Hairline column with the quote glyph */}
      <div className={styles.hipReviews2Quote} aria-hidden="true">
        <span className={styles.hipReviews2QuoteLine} />
        <Icon name="quote" size="var(--icon-3xl)" />
        <span className={styles.hipReviews2QuoteLine} />
      </div>

      <div className={styles.hipReviews2Right}>
        <TextContainer preHeader="Testimonials" header="Our 5-star experience" buttons={null} />

        <figure className={styles.hipReviews2Card}>
          <div className={styles.hipReviews2Rating}>
            <Icon name="google-color" size="var(--icon-2xl)" />
            <span className={styles.hipReviews2Stars}>
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star-fill" size="var(--icon-lg)" />
              ))}
            </span>
          </div>
          <blockquote className={reviewCopyClass}>
            &ldquo;From the first consult to the day the braces came off, every visit was
            easy — the whole team knew our names and made my daughter feel completely at
            home&hellip;&rdquo;
          </blockquote>
          <a className={readMoreClass} href="#">
            Read More
          </a>
          <span className={styles.hipReviews2Divider} aria-hidden="true" />
          <figcaption className={reviewerClass}>John S.</figcaption>
        </figure>

        <div className={styles.hipReviews2Footer}>
          <div className={styles.hipReviews2Arrows}>
            <SliderArrowButton direction="prev" tone="primary" ariaLabel="Previous review" />
            <SliderArrowButton direction="next" tone="primary" ariaLabel="Next review" />
          </div>
          <SquareArrowButton tone="primary" label="Read More" />
        </div>
      </div>
    </section>
  );
}
