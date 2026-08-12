import type { ComponentType } from "react";
import HeroBanner from "./HeroBanner";
import HeroPillNav from "./HeroPillNav";
import HeroSlider from "./HeroSlider";
import HeroCentered from "./HeroCentered";
import HighlightsGrid from "./HighlightsGrid";
import TrustBadges from "./TrustBadges";
import StepSection from "./StepSection";
import StepSection2 from "./StepSection2";
import StepSection3 from "./StepSection3";
import StepSection4 from "./StepSection4";
import StepSection5 from "./StepSection5";
import StepSection6 from "./StepSection6";
import OurPractice from "./OurPractice";
import OurPractice2 from "./OurPractice2";
import OurPractice3 from "./OurPractice3";
import OurPractice4 from "./OurPractice4";
import OurPractice5 from "./OurPractice5";
import OurDoctors from "./OurDoctors";
import OurDoctors2 from "./OurDoctors2";
import WhoWeHelp from "./WhoWeHelp";
import WhoWeHelp2 from "./WhoWeHelp2";
import HowWeHelp from "./HowWeHelp";
import HowWeHelp2 from "./HowWeHelp2";
import InstagramSection from "./InstagramSection";
import CtaSection from "./CtaSection";
import CtaSection2 from "./CtaSection2";
import Reviews from "./Reviews";
import Reviews2 from "./Reviews2";
import LocationSection from "./LocationSection";
import LocationSection2 from "./LocationSection2";
import FooterSection from "./FooterSection";
import FooterSection2 from "./FooterSection2";

/**
 * SERVER-ONLY slug → component map for the /sections/[slug] pages. Some sections read
 * files at render time (sectionImages uses fs), so this must never be imported from a
 * client component — client code reads sectionMeta.ts instead.
 */
export const sectionComponents: Record<string, ComponentType> = {
  hero: HeroBanner,
  hero2: HeroPillNav,
  hero3: HeroSlider,
  hero4: HeroCentered,
  highlights: HighlightsGrid,
  highlights2: TrustBadges,
  steps: StepSection,
  steps2: StepSection2,
  steps3: StepSection3,
  steps4: StepSection4,
  steps5: StepSection5,
  steps6: StepSection6,
  practice: OurPractice,
  practice2: OurPractice2,
  practice3: OurPractice3,
  practice4: OurPractice4,
  practice5: OurPractice5,
  doctors: OurDoctors,
  doctors2: OurDoctors2,
  "who-we-help": WhoWeHelp,
  "who-we-help2": WhoWeHelp2,
  "how-we-help": HowWeHelp,
  "how-we-help2": HowWeHelp2,
  instagram: InstagramSection,
  cta: CtaSection,
  cta2: CtaSection2,
  reviews: Reviews,
  reviews2: Reviews2,
  locations: LocationSection,
  locations2: LocationSection2,
  footer: FooterSection,
  footer2: FooterSection2,
};
