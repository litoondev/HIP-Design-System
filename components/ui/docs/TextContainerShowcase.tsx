"use client";

import { ComponentShowcase } from "./ComponentShowcase";
import TextContainer from "../sections/TextContainer";

/** Text Container demos wired into the category-chip showcase shell. */
export default function TextContainerShowcase() {
  return (
    <ComponentShowcase
      demos={{
        "text-container-demo": (align) => (
          <TextContainer
            align={align}
            preHeader="Simple & Affordable"
            header="Upgrade Your Smile"
            paragraphs={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum.",
            ]}
            bullets={[
              "Highlight Bullet Point",
              "Highlight Bullet Point",
              "Highlight Bullet Point",
            ]}
          />
        ),
        "text-container-statement-demo": (align) => (
          <TextContainer
            align={align}
            preHeader="Trusted Local Care"
            header="Dentistry Without the Stress"
            paragraphs={[
              "One visit is all it takes to see the difference. Clear pricing, gentle care, and a plan built around you.",
            ]}
          />
        ),
      }}
    />
  );
}
