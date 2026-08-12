import styles from "./OurPractice5.module.css";
import SectionImage from "./SectionImage";
import TextContainer from "./TextContainer";
import SquareArrowButton from "../buttons/SquareArrowButton";
import { logos } from "@/components/ui/logos";

/* Credibility band under the section (comp Template 3 logo strip) — white variants
   from the shared logo library on the primary ground. */
const CREDENTIAL_SLUGS = ["aao", "abo", "ada", "itero", "invisalign", "3m-clarity-aligners"];

const CREDENTIALS = CREDENTIAL_SLUGS.flatMap((slug) => {
  const entry = logos.find((logo) => logo.slug === slug);
  return entry ? [{ name: entry.name, src: entry.files.white ?? entry.files.default }] : [];
});

/**
 * 04E · Our Practice V5 — Figma "hip-Image" Template 3 node 36:22665. Editorial
 * split on primary-50: left, an H2 block and an indented copy column ending in the
 * square secondary button; right, a tall square-cornered photo. A primary-500 logo
 * band with white credibility marks closes the section.
 */
export default function OurPractice5() {
  return (
    <section className={styles.hipPractice5}>
      <div className={styles.hipPractice5Main}>
        <div className={styles.hipPractice5Left}>
          <TextContainer
            preHeader="Our Practice"
            header="We care about making you smile"
            buttons={null}
          />
          <div className={styles.hipPractice5Offset}>
            <TextContainer
              paragraphs={[
                "Every visit is built around you — comfortable, unhurried, and personal. From your first consult to your final result, our team makes sure you always know what's next.",
              ]}
              buttons={<SquareArrowButton tone="secondary" label="Learn More" />}
            />
          </div>
        </div>
        <SectionImage
          slot="practice"
          variant="editorial"
          label="Practice Image"
          className={styles.hipPractice5Img}
        />
      </div>

      {/* Credibility logo band */}
      <div className={styles.hipPractice5Logos}>
        {CREDENTIALS.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={logo.name} src={logo.src} alt={logo.name} />
        ))}
      </div>
    </section>
  );
}
