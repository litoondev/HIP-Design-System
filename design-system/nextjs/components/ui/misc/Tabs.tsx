"use client";

import { useState } from "react";

export interface TabsProps {
  labels?: string[];
  defaultActiveIndex?: number;
}

/** Interactive pill Tabs — ported 1:1 from design-system/index.html (#tabs) with useState for the active tab. */
export default function Tabs({ labels = ["Location 1", "Location 2"], defaultActiveIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultActiveIndex);

  return (
    <div className="inline-flex bg-gray-100 p-1">
      {labels.map((label, i) => (
        <button
          key={label + i}
          type="button"
          onClick={() => setActive(i)}
          className={`border-none cursor-pointer px-12 py-6 rounded-full font-body font-bold text-[20px] leading-[30px] tracking-[1.25px] uppercase ${
            active === i ? "bg-primary text-white" : "bg-transparent text-base-gray"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
