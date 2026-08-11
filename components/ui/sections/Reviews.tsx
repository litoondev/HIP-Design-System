import styles from "./Reviews.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import ReviewsSlider from "./ReviewsSlider";
import BoldFillButton from "../buttons/BoldFillButton";

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

/**
 * Placeholder review copy. Two entries filled the old 2-up grid exactly, which is why the
 * slider arrows had nothing to do; the strip needs more cards than fit on screen before
 * paging means anything.
 */
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
  {
    quote:
      "“Every visit ran on time and the front desk always knew who we were. That consistency across two years of treatment meant a lot to our family.”",
    name: "Priya R.",
  },
  {
    quote:
      "“I was self-conscious about getting braces as an adult. They walked me through Invisalign and I finished ahead of schedule. Worth every appointment.”",
    name: "Marcus D.",
  },
  {
    quote:
      "“The team explained each stage before it happened, so there were no surprises — and no surprise costs either. Genuinely refreshing.”",
    name: "Elena V.",
  },
  {
    quote:
      "“My son is nervous about dental visits and they were endlessly patient with him. He actually looks forward to his adjustments now.”",
    name: "Tom H.",
  },
  {
    quote:
      "“We moved mid-treatment and they took over the transfer without missing a beat. The handover was completely painless.”",
    name: "Aisha K.",
  },
  {
    quote:
      "“Booking is easy, the reminders are actually useful, and I have never sat in the waiting room more than five minutes.”",
    name: "Daniel O.",
  },
  {
    quote:
      "“The interest-free plan made this possible for us. No pressure, no upselling — just a clear breakdown of what things cost.”",
    name: "Rachel B.",
  },
  {
    quote:
      "“Three kids, three sets of braces, same practice. That should tell you everything about how much we trust this team.”",
    name: "Miguel S.",
  },
];

/** 07 · Reviews — dark bg, 2-col top, card slider bottom. */
export default function Reviews() {
  return (
    <div className={styles.hipReviews}>
      <div className={styles.hipReviewsTop}>
        {/* Copy block is the shared Text Container; the wrapper recolors it for the dark ground. */}
        <div className={styles.hipReviewsText}>
          <TextContainer
            preHeader="Our Reviews"
            header="Experience 5-Star Care"
            paragraphs={[
              "Don't take our word for it. Thousands of patients across our locations have shared their transformations — and we're proud of every single one.",
            ]}
            buttons={null}
          />
        </div>
        <SectionImage
          slot="testimonial"
          label="Reviews Section Image"
          className={styles.hipReviewsImg}
        />
      </div>

      {/* The strip and its arrows are interactive, so they live in ReviewsSlider (a client
          component). The cards and the CTA are still rendered here on the server and handed
          down — SectionImage above reads the filesystem and can't cross that boundary. */}
      <ReviewsSlider
        cards={REVIEWS.map((review) => (
          <div key={review.name} className={styles.hipReviewCard}>
            <div className={styles.hipReviewHeader}>
              <div className={styles.hipGoogleG}>
                <GoogleG />
              </div>
              <div className={styles.hipStars} role="img" aria-label="Rated 5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
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
        // Global button (Bold — the section's category) with the dark-ground hover fix.
        action={<BoldFillButton label="More Reviews" className={styles.hipMoreReviews} />}
      />
    </div>
  );
}
