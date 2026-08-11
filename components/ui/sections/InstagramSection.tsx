import styles from "./InstagramSection.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import InstagramSlider from "./InstagramSlider";
import Icon from "../icons/Icon";

/**
 * The post themes. The first five are the ones the homepage reference calls for; the rest
 * extend the same rotation so the strip has something to actually scroll through — with only
 * five tiles roughly four were visible at desktop and the slider had barely one page of travel.
 *
 * `slug` is the image lookup key: sectionImage("instagram", slug) resolves
 * public/sections/instagram-{slug}.(jpg|png|webp) and falls back to the labelled placeholder
 * when the file isn't there yet, so adding entries here never breaks the build.
 */
const POSTS = [
  { slug: "1", label: "Smile Reveal" },
  { slug: "2", label: "Team Culture" },
  { slug: "3", label: "Care Tip" },
  { slug: "4", label: "Event" },
  { slug: "5", label: "Before / After" },
  { slug: "6", label: "Patient Story" },
  { slug: "7", label: "Braces Journey" },
  { slug: "8", label: "Invisalign" },
  { slug: "9", label: "Office Tour" },
  { slug: "10", label: "Community" },
  { slug: "11", label: "Meet The Team" },
  { slug: "12", label: "Retainer Care" },
];

/** Social platforms in the Figma comp order — all glyphs from the global icon library. */
const SOCIALS = [
  { icon: "facebook-circle", label: "Facebook" },
  { icon: "instagram", label: "Instagram" },
  { icon: "x-twitter", label: "X" },
  { icon: "tiktok", label: "TikTok" },
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

      {/* The strip and its arrows are interactive, so they live in InstagramSlider (a client
          component). The tiles and the Follow Us block are still rendered here on the server
          and handed down — SectionImage reads the filesystem and cannot cross that boundary. */}
      <InstagramSlider
        tiles={POSTS.map((post) => (
          <SectionImage
            key={post.slug}
            slot="instagram"
            variant={post.slug}
            label={post.label}
            className={styles.hipIgTile}
          />
        ))}
        follow={
          <div className={styles.hipIgFollow}>
            <p className={styles.hipIgFollowLabel}>Follow Us</p>
            <div className={styles.hipIgSocials}>
              {SOCIALS.map((social, i) => (
                <span key={social.label} className={styles.hipIgSocialPair}>
                  {i > 0 && <span className={styles.hipIgSocialLine} aria-hidden="true" />}
                  <a className={styles.hipIgSocial} href="#" aria-label={social.label}>
                    <Icon name={social.icon} size="var(--icon-lg)" />
                  </a>
                </span>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
