import type { ComponentType } from "react";
import HeroBanner from "./HeroBanner";
import HeroPillNav from "./HeroPillNav";
import HeroSlider from "./HeroSlider";
import HeroBoxed from "./HeroBoxed";
import HeroCenteredNav from "./HeroCenteredNav";
import HighlightsGrid from "./HighlightsGrid";
import TrustBadges from "./TrustBadges";
import HighlightsSplit from "./HighlightsSplit";
import HighlightsBand from "./HighlightsBand";
import HighlightsPanel from "./HighlightsPanel";
import StepSection from "./StepSection";
import StepSection2 from "./StepSection2";
import StepSection3 from "./StepSection3";
import StepSection4 from "./StepSection4";
import StepSection5 from "./StepSection5";
import StepSection6 from "./StepSection6";
import StepSection7 from "./StepSection7";
import OurPractice from "./OurPractice";
import OurPractice2 from "./OurPractice2";
import OurPractice3 from "./OurPractice3";
import OurPractice4 from "./OurPractice4";
import OurPractice5 from "./OurPractice5";
import OurPractice6 from "./OurPractice6";
import OurDoctors from "./OurDoctors";
import OurDoctors2 from "./OurDoctors2";
import OurDoctors3 from "./OurDoctors3";
import OurDoctors4 from "./OurDoctors4";
import OurDoctors5 from "./OurDoctors5";
import WhoWeHelp from "./WhoWeHelp";
import WhoWeHelp2 from "./WhoWeHelp2";
import WhoWeHelp3 from "./WhoWeHelp3";
import WhoWeHelp4 from "./WhoWeHelp4";
import WhoWeHelp5 from "./WhoWeHelp5";
import HowWeHelp from "./HowWeHelp";
import HowWeHelp2 from "./HowWeHelp2";
import HowWeHelp3 from "./HowWeHelp3";
import HowWeHelp4 from "./HowWeHelp4";
import HowWeHelp5 from "./HowWeHelp5";
import InstagramSection from "./InstagramSection";
import CtaSection from "./CtaSection";
import CtaSection2 from "./CtaSection2";
import CtaSection3 from "./CtaSection3";
import CtaSection4 from "./CtaSection4";
import CtaSection5 from "./CtaSection5";
import Reviews from "./Reviews";
import Reviews2 from "./Reviews2";
import Reviews3 from "./Reviews3";
import LocationSection from "./LocationSection";
import LocationSection2 from "./LocationSection2";
import LocationSection3 from "./LocationSection3";
import LocationSection4 from "./LocationSection4";
import LocationSection5 from "./LocationSection5";
import FooterSection from "./FooterSection";
import FooterSection2 from "./FooterSection2";
import FooterSection3 from "./FooterSection3";
import FooterSection4 from "./FooterSection4";
import FooterSection5 from "./FooterSection5";

/**
 * SERVER-ONLY slug → component map for the /sections/[slug] pages. Some sections read
 * files at render time (sectionImages uses fs), so this must never be imported from a
 * client component — client code reads sectionMeta.ts instead.
 */
export const sectionComponents: Record<string, ComponentType> = {
  hero: HeroBanner,
  hero2: HeroPillNav,
  hero3: HeroSlider,
  hero4: HeroCenteredNav,
  hero5: HeroBoxed,
  highlights: HighlightsGrid,
  highlights2: TrustBadges,
  highlights3: HighlightsSplit,
  highlights4: HighlightsBand,
  highlights5: HighlightsPanel,
  steps: StepSection,
  steps2: StepSection2,
  steps3: StepSection3,
  steps4: StepSection4,
  steps5: StepSection5,
  steps6: StepSection6,
  steps7: StepSection7,
  practice: OurPractice,
  practice2: OurPractice2,
  practice3: OurPractice3,
  practice4: OurPractice4,
  practice5: OurPractice5,
  practice6: OurPractice6,
  doctors: OurDoctors,
  doctors2: OurDoctors2,
  doctors3: OurDoctors3,
  doctors4: OurDoctors4,
  doctors5: OurDoctors5,
  "who-we-help": WhoWeHelp,
  "who-we-help2": WhoWeHelp2,
  "who-we-help3": WhoWeHelp3,
  "who-we-help4": WhoWeHelp4,
  "who-we-help5": WhoWeHelp5,
  "how-we-help": HowWeHelp,
  "how-we-help2": HowWeHelp2,
  "how-we-help3": HowWeHelp3,
  "how-we-help4": HowWeHelp4,
  "how-we-help5": HowWeHelp5,
  instagram: InstagramSection,
  cta: CtaSection,
  cta2: CtaSection2,
  cta3: CtaSection3,
  cta4: CtaSection4,
  cta5: CtaSection5,
  reviews: Reviews,
  reviews2: Reviews2,
  reviews3: Reviews3,
  locations: LocationSection,
  locations2: LocationSection2,
  locations3: LocationSection3,
  locations4: LocationSection4,
  locations5: LocationSection5,
  footer: FooterSection,
  footer2: FooterSection2,
  footer3: FooterSection3,
  footer4: FooterSection4,
  footer5: FooterSection5,
};
