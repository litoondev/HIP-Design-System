import styles from "./InstagramSection.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import Icon from "../icons/Icon";

/** The post themes the homepage reference calls for. */
const POSTS = [
  { slug: "1", label: "Smile Reveal" },
  { slug: "2", label: "Team Culture" },
  { slug: "3", label: "Care Tip" },
  { slug: "4", label: "Event" },
  { slug: "5", label: "Before / After" },
];

/** Social platforms in the Figma comp order — all glyphs from the global icon library. */
const SOCIALS = [
  { icon: "Facebook Round", label: "Facebook" },
  { icon: "Instagram", label: "Instagram" },
  { icon: "X", label: "X" },
  { icon: "Tiktok", label: "TikTok" },
];

/**
 * Instagram Section — Figma "Instagram Section" node 12975:54038.
 * Accent-50 ground · shared Text Container (eyebrow / H2 / @username in H4 Alt) ·
 * 310×414 bordered post slider · Subtitle "Follow Us" + social icon row · square
 * primary-bordered slider arrows. All colors, type, and gaps are global tokens.
 */
export default function InstagramSection() {
  return (
    <div className={styles.hipIg}>
      {/* The @username paragraph is restyled to the H4 Alt tokens by the wrapper. */}
      <TextContainer
        preHeader="We're Social"
        header="Connect With Us"
        paragraphs={["@InstagramUsername"]}
        buttons={null}
        className={styles.hipIgHead}
      />

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

      <div className={styles.hipIgFooter}>
        <div className={styles.hipIgFollow}>
          <p className={styles.hipIgFollowLabel}>Follow Us</p>
          <div className={styles.hipIgSocials}>
            {SOCIALS.map((social, i) => (
              <span key={social.label} className={styles.hipIgSocialPair}>
                {i > 0 && <span className={styles.hipIgSocialLine} aria-hidden="true" />}
                <a className={styles.hipIgSocial} href="#" aria-label={social.label}>
                  <Icon name={social.icon} size="24px" />
                </a>
              </span>
            ))}
          </div>
        </div>

        <div className={styles.hipIgArrows}>
          <button type="button" className={styles.hipIgArrow} aria-label="Previous posts">
            <Icon name="Arrow Left" size="20px" />
          </button>
          <button type="button" className={styles.hipIgArrow} aria-label="Next posts">
            <Icon name="Arrow Right" size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}
