"use client";

import { ComponentShowcase } from "./ComponentShowcase";
import TextContainer from "../sections/TextContainer";
import TextContainerV2 from "../sections/TextContainerV2";

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
        "text-container-v2-demo": (align) => (
          <TextContainerV2
            align={align}
            preHeader="Pre Header"
            header="Title Here"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim lorem ipsum dolor sit amet, consectetur adipiscing."
          />
        ),
      }}
    />
  );
}
