import type { ReactNode } from "react";
import Link from "next/link";
import FullPageButton from "./FullPageButton";
import styles from "./SectionCard.module.css";

interface SectionCardProps {
  /** anchor id — matches the sidebar links in sections.html (#hero, #steps, …) */
  id: string;
  num: string;
  name: ReactNode;
  tags: string[];
  note: ReactNode;
  children: ReactNode;
}

/**
 * The chrome around each rendered section design — ported from the repeated
 * .sec-card / .sec-label-strip / .sec-render / .sec-note markup in sections.html.
 */
export default function SectionCard({ id, num, name, tags, note, children }: SectionCardProps) {
  const renderId = `${id}-render`;

  return (
    <div className={styles.secCard} id={id}>
      <div className={styles.secLabelStrip}>
        <div className="flex items-center gap-3">
          <span className={styles.secNum}>{num}</span>
          {/* The card id doubles as the single-page slug — the name links to that page. */}
          <Link href={`/sections/${id}`} className={`${styles.secName} hover:underline`}>
            {name}
          </Link>
        </div>

        {/* Source wraps the tags in a flex row only when a card carries more than one. */}
        {tags.length > 1 ? (
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className={styles.secTag}>
                {tag}
              </span>
            ))}
          </div>
        ) : (
          tags.map((tag) => (
            <span key={tag} className={styles.secTag}>
              {tag}
            </span>
          ))
        )}

        <FullPageButton targetId={renderId} num={num} name={typeof name === "string" ? name : ""} />
      </div>

      <div className={styles.secRender} id={renderId}>
        {children}
      </div>

      <div className={styles.secNote}>{note}</div>
    </div>
  );
}
