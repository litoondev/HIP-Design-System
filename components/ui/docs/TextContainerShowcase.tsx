"use client";

import { ComponentShowcase } from "./ComponentShowcase";
import TextContainer from "../sections/TextContainer";
import TextContainerV2 from "../sections/TextContainerV2";
import TextContainerV3 from "../sections/TextContainerV3";
import TextContainerV4 from "../sections/TextContainerV4";
import TextContainerV5 from "../sections/TextContainerV5";
import TextContainerV6 from "../sections/TextContainerV6";

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
        "text-container-v3-demo": (align) => (
          <TextContainerV3
            align={align}
            preHeader="Pre Header"
            header="Title Here"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum."
          />
        ),
        "text-container-v4-demo": (align) => (
          <TextContainerV4
            align={align}
            preHeader="Pre Header"
            header="Title"
            headerHighlight="Here"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum."
          />
        ),
        "text-container-v5-demo": (align) => (
          <TextContainerV5
            align={align}
            preHeader="Simple & Affordable"
            header="3 Steps to a"
            headerHighlight="Healthy Smile"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum."
            buttonLabel="Request Free Ortho Consult"
          />
        ),
        "text-container-v6-demo": (align) => (
          <TextContainerV6
            align={align}
            header="Upgrade Your Smile"
            headerLine2="in 3 Simple Steps"
            paragraph="Getting the confident, healthy smile you deserve is simple — our team is here to guide you every step of the way."
          />
        ),
      }}
    />
  );
}
