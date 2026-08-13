import styles from "./HighlightsPanel.module.css";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const labelClass = typographyClass("strong1", styles.hipHl5Label);

const ITEMS = [
  { icon: "map-pin-fill", label: "Family Owned & Community Focused" },
  { icon: "map-pin-fill", label: "2 Convenient Locations" },
  { icon: "user-fill", label: "Free Shuttle Service To & From Local Schools" },
  { icon: "calculator", label: "0% Financing & Most Insurances Accepted" },
  { icon: "check", label: "Charity Cafe Serving Free Coffee" },
  { icon: "smile", label: "More Than 20,000 Smiles Created" },
  { icon: "braces", label: "Same-Day Consults & Starts" },
  { icon: "star-fill", label: "50+ Years Serving Our Community" },
];

/**
 * 02E · Highlights V5 — Figma "hip-Image" node 55:23675. White ground holding a
 * primary-100 tinted panel (8px radius, 60px padding) with a 4×2 grid of
 * outlined cards — 1px primary-400 borders, 4px radius — each a centered 56px
 * primary icon over a centered Strong-1 label in the deep primary ink.
 */
export default function HighlightsPanel() {
  return (
    <section className={styles.hipHl5}>
      <div className={styles.hipHl5Panel}>
        {ITEMS.map((item, i) => (
          <div key={`${item.label}-${i}`} className={styles.hipHl5Card}>
            <Icon name={item.icon} size="var(--icon-2xl)" className={styles.hipHl5Icon} />
            <span className={labelClass}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
