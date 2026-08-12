import styles from "./OurPractice3.module.css";
import SectionImage from "./SectionImage";
import Icon from "@/components/ui/icons/Icon";
import { logos } from "@/components/ui/logos";
import { typographyClass } from "@/components/ui/typography/Typography";

/* All type resolves through the global typography variants — the modules keep only
   layout and color. Casing/tracking that the comp adds beyond a variant's own style
   (capitalize on the H2, uppercase on the statement) stays in the module. */
const eyebrowClass = typographyClass("preHeader", styles.hipPractice3Eyebrow);
const h2Class = typographyClass("header2", styles.hipPractice3H2);
const cardH3Class = typographyClass("header3", styles.hipPractice3CardH3);
const cardCopyClass = typographyClass("body1", styles.hipPractice3CardCopy);
const bulletClass = typographyClass("strong1");
const statementClass = typographyClass("header5", styles.hipPractice3StatementTxt);

/* Extrabold bullets with the braces glyph, divided by 10%-white hairlines (comp
   List_Item_Master). */
const HIGHLIGHTS = [
  "Board-Certified Specialists",
  "Family-Friendly Atmosphere",
  "Flexible, Interest-Free Plans",
];

/* Credibility marks resolve through the Recognition & Affiliation logo library
   (components/ui/logos → public/logos). The comp shows AAO / ABO / ADA / iTero /
   Opalescence; Opalescence isn't in the library, so Invisalign (products) stands in.
   Black variants, dimmed in CSS like the comp's grayscale strip. */
const CREDENTIAL_SLUGS = ["aao", "abo", "ada", "itero", "invisalign"];

const CREDENTIALS = CREDENTIAL_SLUGS.flatMap((slug) => {
  const entry = logos.find((logo) => logo.slug === slug);
  return entry ? [{ name: entry.name, src: entry.files.black ?? entry.files.default }] : [];
});

/**
 * 04C · Our Practice V3 — Figma Master V3 node 12998:56855 ("Section 1" / Desk
 * 12998:56155). White ground: header row pairs a left heading (smile glyph,
 * tracked eyebrow, semibold two-line H2) with a dark "Why Us?" card (asymmetric
 * 50/5 corners, white border, Body1 copy, three extrabold brace-icon bullets)
 * that overlaps a full-bleed photo below. Then an uppercase H5 statement beside
 * a "Learn More" button with mirrored 40px corners, and a hairline-bounded
 * credibility strip. The comp's maroons map onto the tertiary ramp.
 */
export default function OurPractice3() {
  return (
    <section className={styles.hipPractice3}>
      {/* Heading + overlapping card */}
      <div className={styles.hipPractice3Head}>
        <div className={styles.hipPractice3Heading}>
          <span className={styles.hipPractice3Glyph}>
            <Icon name="smile" size="var(--icon-xl)" />
          </span>
          <p className={eyebrowClass}>Our Practice</p>
          <h2 className={h2Class}>
            What Sets Us
            <br />
            Apart from the Rest
          </h2>
        </div>

        <div className={styles.hipPractice3Card}>
          <h3 className={cardH3Class}>Why Us?</h3>
          <p className={cardCopyClass}>
            From your first visit to your final result, our team treats you like family —
            with care plans built around you.
          </p>
          <ul className={styles.hipPractice3CardList}>
            {HIGHLIGHTS.map((item) => (
              <li key={item} className={bulletClass}>
                <Icon name="braces" size="var(--icon-lg)" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-bleed photo the card rides on */}
      <SectionImage
        slot="practice"
        variant="office"
        label="Practice Office Image"
        className={styles.hipPractice3Img}
      />

      {/* Uppercase statement + asymmetric-corner button */}
      <div className={styles.hipPractice3Statement}>
        <p className={statementClass}>
          Modern orthodontic care with a hometown feel — advanced technology, flexible
          financing, and a team that knows your name.
        </p>
        <a className={styles.hipPractice3Btn} href="#">
          Learn More
          <Icon name="arrow-right" size="var(--icon-sm)" />
        </a>
      </div>

      {/* Credibility strip between hairlines — logos from the shared library */}
      <div className={styles.hipPractice3Creds}>
        {CREDENTIALS.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={logo.name}
            className={styles.hipPractice3Cred}
            src={logo.src}
            alt={logo.name}
          />
        ))}
      </div>
    </section>
  );
}
