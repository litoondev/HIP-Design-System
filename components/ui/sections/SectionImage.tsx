import { sectionImage, type ImageSlot } from "./sectionImages";
import styles from "./SectionImage.module.css";

interface SectionImageProps {
  slot: ImageSlot;
  /** optional per-instance file, e.g. how-we-help-braces.jpg */
  variant?: string;
  /** the caption the source prints inside the empty box */
  label: string;
  /** the section's own placeholder class(es), e.g. styles.hipStepsImg */
  className: string;
  alt?: string;
}

/**
 * One image slot. With nothing in public/sections/ this renders exactly the gradient box
 * sections.html ships; once a file is there it renders the photo instead.
 */
export default function SectionImage({
  slot,
  variant,
  label,
  className,
  alt,
}: SectionImageProps) {
  const src = sectionImage(slot, variant);

  if (!src) {
    return (
      <div className={className}>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div className={`${className} ${styles.filled}`}>
      {/* Plain <img>: these are fixed-height design references, so next/image's layout and
          optimisation machinery buys nothing here. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.img} src={src} alt={alt ?? label} />
    </div>
  );
}
