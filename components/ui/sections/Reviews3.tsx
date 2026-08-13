import styles from "./Reviews3.module.css";
import TextContainer from "./TextContainer";
import Icon from "@/components/ui/icons/Icon";
import LineArrowButton from "../buttons/LineArrowButton";
import SliderArrowButton from "../buttons/SliderArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const reviewCopyClass = typographyClass("body1", styles.hipReviews3Text);
const readMoreClass = typographyClass("strong1", styles.hipReviews3ReadMore);
const reviewerClass = typographyClass("subtitle", styles.hipReviews3Name);

const REVIEWS = [
  { name: "John S.", quote: "The whole team made every visit easy — we always knew what was next and never waited long." },
  { name: "Maria G.", quote: "My daughter actually looked forward to her appointments. Her smile turned out perfect." },
  { name: "David R.", quote: "Clear pricing, flexible payments, and a result better than I imagined. Highly recommend." },
  { name: "Aisha K.", quote: "From the free consult to the last retainer check, everything was smooth and friendly." },
];

/**
 * 10C · Reviews V3 — Figma "hip-Image" Template 06 node 1:48669. White ground with a
 * cream block behind the top-left; left-aligned standard Text Container; a row of
 * gray-50 review cards (Google mark + five stars, Body1 quote, cta "Read More",
 * divider, uppercase reviewer) overflowing to the right; footer row of square
 * slider arrows and the Line Arrow cta button.
 */
export default function Reviews3() {
  return (
    <section className={styles.hipReviews3}>
      <div className={styles.hipReviews3Block} aria-hidden="true" />
      <div className={styles.hipReviews3Inner}>
        <TextContainer
          header="Our Patients Love Us"
          paragraphs={[
            "Hundreds of five-star reviews from families across our community.",
          ]}
          buttons={null}
        />

        <div className={styles.hipReviews3Cards}>
          {REVIEWS.map((review) => (
            <figure key={review.name} className={styles.hipReviews3Card}>
              <div className={styles.hipReviews3Rating}>
                <Icon name="google-color" size="var(--icon-2xl)" />
                <span className={styles.hipReviews3Stars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star-fill" size="var(--icon-lg)" />
                  ))}
                </span>
              </div>
              <blockquote className={reviewCopyClass}>&ldquo;{review.quote}&rdquo;</blockquote>
              <a className={readMoreClass} href="#">
                Read More
              </a>
              <span className={styles.hipReviews3Divider} aria-hidden="true" />
              <figcaption className={reviewerClass}>{review.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.hipReviews3Footer}>
          <div className={styles.hipReviews3Arrows}>
            <SliderArrowButton direction="prev" tone="secondary" ariaLabel="Previous reviews" />
            <SliderArrowButton direction="next" tone="secondary" ariaLabel="Next reviews" />
          </div>
          <LineArrowButton tone="cta" label="Read More Reviews" />
        </div>
      </div>
    </section>
  );
}
