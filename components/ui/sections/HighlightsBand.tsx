import styles from "./HighlightsBand.module.css";
import Icon from "@/components/ui/icons/Icon";
import { typographyClass } from "@/components/ui/typography/Typography";

const labelClass = typographyClass("overline", styles.hipHl4Label);

const ITEMS = [
  { icon: "smile", label: "Free Shuttle Service To & From Schools" },
  { icon: "braces", label: "Board-Certified Orthodontist" },
  { icon: "map-pin-fill", label: "Two Convenient Locations" },
  { icon: "check", label: "Same-Day Consultations" },
  { icon: "calculator", label: "0% Financing & Low Down Payments" },
  { icon: "star-fill", label: "All Digital Upgrades (No Impressions)" },
];

/**
 * 02D · Highlights V4 — Figma "hip-Image" node 53:23644. Base-black ground
 * holding a rounded 3×2 band of cloud-gray cells separated by 1px white rules:
 * each cell pairs a 64px primary icon from the icon library with a small
 * uppercase Over Line label in the dark heading ink.
 */
export default function HighlightsBand() {
  return (
    <section className={styles.hipHl4}>
      <div className={styles.hipHl4Grid}>
        {ITEMS.map((item) => (
          <div key={item.label} className={styles.hipHl4Cell}>
            <Icon name={item.icon} size="var(--icon-3xl)" className={styles.hipHl4Icon} />
            <span className={labelClass}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
