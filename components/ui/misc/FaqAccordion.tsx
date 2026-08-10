"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography/Typography";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items?: FaqItem[];
  defaultOpenIndex?: number | null;
}

const defaultItems: FaqItem[] = [
  {
    question: "Sample Accordion",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, aliquet sed aliquam libero convallis Euismod lectus ut eget scele dolor amet, consectetur.",
  },
  {
    question: "Sample Accordion",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis, aliquet sed aliquam libero convallis Euismod lectus ut eget scele dolor amet, consectetur.",
  },
];

/**
 * Interactive FAQ / Accordion — behavior modeled on design-system/index.html (#faq), which showed
 * static "closed" and "open" example states. Here every item toggles open/closed via useState.
 */
export default function FaqAccordion({ items = defaultItems, defaultOpenIndex = 1 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="flex flex-col gap-[2px] w-[570px] max-w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : index)}
            aria-expanded={isOpen}
            className={`flex ${
              isOpen ? "flex-col items-start justify-center gap-4" : "items-center justify-between gap-6"
            } p-[30px] ${isOpen ? "bg-primary" : "bg-primary-50"} border-none cursor-pointer text-left w-full`}
          >
            {isOpen ? (
              <>
                <div className="flex items-center justify-between w-full gap-6 border-b border-white/20 pb-5">
                  <Typography variant="strong1" as="span" className="text-white">
                    {item.question}
                  </Typography>
                  {/* Toggle glyph — an icon drawn with a character, sized to its 32px disc. */}
                  <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center text-[16px] shrink-0">
                    &#8722;
                  </span>
                </div>
                <Typography variant="body1" className="text-white m-0 text-left">
                  {item.answer}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="strong1" as="span" className="text-primary">
                  {item.question}
                </Typography>
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[16px] shrink-0">
                  +
                </span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}
