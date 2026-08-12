import type { ComponentType } from "react";
import HeroBanner from "./HeroBanner";
import HeroPillNav from "./HeroPillNav";
import HeroSlider from "./HeroSlider";
import HighlightsGrid from "./HighlightsGrid";
import TrustBadges from "./TrustBadges";
import StepSection from "./StepSection";
import StepSection2 from "./StepSection2";
import StepSection3 from "./StepSection3";
import StepSection4 from "./StepSection4";
import StepSection5 from "./StepSection5";
import OurPractice from "./OurPractice";
import OurPractice2 from "./OurPractice2";
import OurPractice3 from "./OurPractice3";
import OurPractice4 from "./OurPractice4";
import OurDoctors from "./OurDoctors";
import WhoWeHelp from "./WhoWeHelp";
import HowWeHelp from "./HowWeHelp";
import InstagramSection from "./InstagramSection";
import CtaSection from "./CtaSection";
import Reviews from "./Reviews";
import LocationSection from "./LocationSection";
import FooterSection from "./FooterSection";

/**
 * SERVER-ONLY slug → component map for the /sections/[slug] pages. Some sections read
 * files at render time (sectionImages uses fs), so this must never be imported from a
 * client component — client code reads sectionMeta.ts instead.
 */
export const sectionComponents: Record<string, ComponentType> = {
  hero: HeroBanner,
  hero2: HeroPillNav,
  hero3: HeroSlider,
  highlights: HighlightsGrid,
  highlights2: TrustBadges,
  steps: StepSection,
  steps2: StepSection2,
  steps3: StepSection3,
  steps4: StepSection4,
  steps5: StepSection5,
  practice: OurPractice,
  practice2: OurPractice2,
  practice3: OurPractice3,
  practice4: OurPractice4,
  doctors: OurDoctors,
  "who-we-help": WhoWeHelp,
  "how-we-help": HowWeHelp,
  instagram: InstagramSection,
  cta: CtaSection,
  reviews: Reviews,
  locations: LocationSection,
  footer: FooterSection,
};
