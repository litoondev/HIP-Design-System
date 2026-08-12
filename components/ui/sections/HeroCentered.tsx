import styles from "./HeroCentered.module.css";
import { sectionImage } from "./sectionImages";
import Icon from "@/components/ui/icons/Icon";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { typographyClass } from "@/components/ui/typography/Typography";

const navLinkClass = typographyClass("menuItem", styles.w4Navlink);

/* Headline on the Main Header token (same precedent as Hero V3) — the module keeps
   only color and the shouted first word's block/hue treatment. */
const heroH1Class = typographyClass("mainHeader", styles.w4H1);

const NAV_LINKS = ["Our Practice", "Orthodontics", "Patient Resources", "Contact Us"];

/**
 * 01D · Hero Banner — Centered (Figma "hip-Image" Template 3 node 1:48380). White nav;
 * the hero photo is inset from the left gutter and sits over a primary band; content is
 * centered on the photo: a stacked three-line headline whose first word shouts in the
 * tertiary hue, above the two square Template 3 buttons.
 */
export default function HeroCentered() {
  const bg = sectionImage("hero", "centered") ?? sectionImage("hero");

  return (
    <div className={styles.w4Header}>
      {/* White nav */}
      <div className={styles.w4Nav}>
        <a className={styles.w4Brand} href="#" aria-label="HIP — home">
          <Icon name="hip-logo" size="var(--icon-3xl)" />
        </a>
        <nav className={styles.w4Navlinks}>
          {NAV_LINKS.map((label) => (
            <a key={label} className={navLinkClass} href="#">
              {label}
              <Icon name="chevron-down-bold" size="var(--icon-sm)" />
            </a>
          ))}
        </nav>
      </div>

      {/* Hero photo inset from the left, riding a primary band */}
      <div className={styles.w4HeroWrap}>
        <div className={styles.w4Band} aria-hidden="true" />
        <div
          className={styles.w4Hero}
          style={bg ? { backgroundImage: `url(${bg})` } : undefined}
        >
          <div className={styles.w4Overlay} />
          <div className={styles.w4Content}>
            <h1 className={heroH1Class}>
              <em>Smile,</em>
              We Make Your Town&rsquo;s
              <br />
              Orthodontics Simple
            </h1>
            <div className={styles.w4Btns}>
              <SquareArrowButton tone="cta" label="Request Free Consult" />
              <SquareArrowButton tone="neutral" label="What Sets Us Apart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
