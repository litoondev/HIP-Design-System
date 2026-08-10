import styles from "./Reviews.module.css";
import { ArrowRight } from "./SectionIcons";
import SectionImage from "./SectionImage";

const STAR_PATH =
  "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path
        fill="var(--color-primary-500)"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="var(--color-tertiary-500)"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="var(--color-accent-200)"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="var(--color-accent-500)"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

const REVIEWS = [
  {
    quote:
      "“Best orthodontist experience I've ever had. The team was incredibly kind and my results came faster than expected. Absolutely recommend!”",
    name: "Sarah M.",
  },
  {
    quote:
      "“The free consult was genuinely no-pressure. They explained everything clearly and the payment plan made it so easy. My daughter loves her new smile!”",
    name: "John T.",
  },
];

/** 07 · Reviews — dark bg, 2-col top, card slider bottom. */
export default function Reviews() {
  return (
    <div className={styles.hipReviews}>
      <div className={styles.hipReviewsTop}>
        <div className={styles.hipReviewsText}>
          <p className={styles.hipReviewsEyebrow}>Our Reviews</p>
          <h2 className={styles.hipReviewsH2}>Experience 5-Star Care</h2>
          <p className={styles.hipReviewsBody}>
            Don&apos;t take our word for it. Thousands of patients across our locations have shared
            their transformations — and we&apos;re proud of every single one.
          </p>
        </div>
        <SectionImage
          slot="testimonial"
          label="Reviews Section Image"
          className={styles.hipReviewsImg}
        />
      </div>

      <div className={styles.hipReviewCards}>
        {REVIEWS.map((review) => (
          <div key={review.name} className={styles.hipReviewCard}>
            <div className={styles.hipReviewHeader}>
              <div className={styles.hipGoogleG}>
                <GoogleG />
              </div>
              <div className={styles.hipStars}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d={STAR_PATH} />
                  </svg>
                ))}
              </div>
            </div>
            <p className={styles.hipReviewText}>{review.quote}</p>
            <div className={styles.hipReviewFooter}>
              <span className={styles.hipReviewer}>{review.name}</span>
              <span className={styles.hipReadMore}>Read More</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.hipReviewsControls}>
        <div className={styles.hipSliderArrows}>
          <div className={styles.hipArrow}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </div>
          <div className={styles.hipArrow}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
        <div className={styles.hipMoreReviews}>
          More Reviews
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
