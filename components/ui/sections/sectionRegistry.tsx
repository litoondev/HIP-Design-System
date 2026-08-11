import type { ComponentType } from "react";
import HeroBanner from "./HeroBanner";
import HeroPillNav from "./HeroPillNav";
import HeroSlider from "./HeroSlider";
import HighlightsGrid from "./HighlightsGrid";
import TrustBadges from "./TrustBadges";
import StepSection from "./StepSection";
import OurPractice from "./OurPractice";
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
  practice: OurPractice,
  doctors: OurDoctors,
  "who-we-help": WhoWeHelp,
  "how-we-help": HowWeHelp,
  instagram: InstagramSection,
  cta: CtaSection,
  reviews: Reviews,
  locations: LocationSection,
  footer: FooterSection,
};
