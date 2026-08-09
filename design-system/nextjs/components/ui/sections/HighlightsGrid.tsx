import type { ReactNode } from "react";
import styles from "./HighlightsGrid.module.css";

/** Every icon in this grid shares the same stroke treatment. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

const CARDS: { title: string; sub: string; icon: ReactNode }[] = [
  {
    title: "Local",
    sub: "Owned & Operated",
    icon: (
      <Icon>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </Icon>
    ),
  },
  {
    title: "13 Locations",
    sub: "For Your Convenience",
    icon: (
      <Icon>
        <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />
      </Icon>
    ),
  },
  {
    title: "For Life",
    sub: "Treatment, Whitening & Retainer Scans",
    icon: (
      <Icon>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </Icon>
    ),
  },
  {
    title: "0% Financing",
    sub: "Payments As Low As $99/Month",
    icon: (
      <Icon>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </Icon>
    ),
  },
  {
    title: "Flexible Hours",
    sub: "Available Evenings & Weekends",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </Icon>
    ),
  },
  {
    title: "20,000+ People",
    sub: "Helped Since 1978",
    icon: (
      <Icon>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </Icon>
    ),
  },
  {
    title: "Same-Day",
    sub: "Consults & Braces",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </Icon>
    ),
  },
  {
    title: "24-Hour",
    sub: "Call Doctors for Emergencies",
    icon: (
      <Icon>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </Icon>
    ),
  },
];

/** 06 · Highlights — gray bg, 4-col × 2-row trust badge grid. */
export default function HighlightsGrid() {
  return (
    <div className={styles.hipHighlights}>
      <div className={styles.hipHighlightsHeader}>
        <p className={styles.hipHighlightsEyebrow}>Why Choose Us</p>
        <h2 className={styles.hipHighlightsH2}>Everything You Need, All in One Place</h2>
      </div>
      <div className={styles.hipHighlightsGrid}>
        {CARDS.map((card) => (
          <div key={card.title} className={styles.hipHiCard}>
            <div className={styles.hipHiIcon}>{card.icon}</div>
            <div className={styles.hipHiCopy}>
              <p className={styles.hipHiTitle}>{card.title}</p>
              <p className={styles.hipHiSub}>{card.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
