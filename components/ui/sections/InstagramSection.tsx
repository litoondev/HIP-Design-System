import styles from "./InstagramSection.module.css";
import SectionImage from "./SectionImage";

/** The post themes the homepage reference calls for. */
const POSTS = [
  { slug: "1", label: "Smile Reveal" },
  { slug: "2", label: "Team Culture" },
  { slug: "3", label: "Care Tip" },
  { slug: "4", label: "Event" },
  { slug: "5", label: "Before / After" },
];

/** Instagram Section — white bg, account header, horizontally scrolling square posts. */
export default function InstagramSection() {
  return (
    <div className={styles.hipIg}>
      <div className={styles.hipIgHeader}>
        <div className={styles.hipIgHeading}>
          <p className={styles.hipIgEyebrow}>Follow Along</p>
          <h2 className={styles.hipIgH2}>Smiles In The Wild</h2>
          <div className={styles.hipIgAccount}>
            <span className={styles.hipIgAvatar}>
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </span>
            <span className={styles.hipIgHandle}>@practicehandle</span>
          </div>
        </div>

        <button className={styles.hipIgFollow}>
          Follow Us
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      <div className={styles.hipIgStrip}>
        {POSTS.map((post) => (
          <SectionImage
            key={post.slug}
            slot="instagram"
            variant={post.slug}
            label={post.label}
            className={styles.hipIgTile}
          />
        ))}
      </div>
    </div>
  );
}
