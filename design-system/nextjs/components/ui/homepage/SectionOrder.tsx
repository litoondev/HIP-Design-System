import { WfLabel } from "./Wireframe";

type ChipTone = "core" | "optional" | "primary" | "secondary";

const CHIP_CLASS: Record<ChipTone, string> = {
  core: "bg-gray-100 text-gray-700",
  optional: "bg-yellow-100 text-yellow-800",
  primary: "bg-primary-50 text-primary-700",
  secondary: "bg-secondary-50 text-secondary-700",
};

/** Full section order — mirrors the numbered sections below. † = optional, ★ = reference only. */
const ORDER: { label: string; tone: ChipTone }[] = [
  { label: "01 · Top Bar", tone: "core" },
  { label: "02 · Navigation", tone: "core" },
  { label: "03 · Hero", tone: "core" },
  { label: "04 · Highlights †", tone: "optional" },
  { label: "05 · Steps", tone: "core" },
  { label: "06 · Our Practice", tone: "core" },
  { label: "07 · Brand Logos †", tone: "optional" },
  { label: "08 · Our Doctors", tone: "core" },
  { label: "09 · Who We Help", tone: "core" },
  { label: "10 · Treatments", tone: "core" },
  { label: "11 · News & Media †", tone: "optional" },
  { label: "12 · Instagram", tone: "core" },
  { label: "13 · CTA Section", tone: "core" },
  { label: "14 · Reviews", tone: "core" },
  { label: "15 · Locations", tone: "core" },
  { label: "16 · Footer", tone: "core" },
  { label: "17 · Success Formula ★", tone: "primary" },
  { label: "18 · Designer Reminder ★", tone: "primary" },
  { label: "19 · Image Sourcing ★", tone: "secondary" },
  { label: "20 · Icon Usage ★", tone: "secondary" },
];

/** Quick-reference chip row above the wireframes. */
export default function SectionOrder() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-10">
      <WfLabel className="text-gray-500 block mb-3">Full section order</WfLabel>
      <div className="flex flex-wrap gap-2">
        {ORDER.map((item) => (
          <span
            key={item.label}
            className={`font-body text-xs rounded px-2 py-1 ${CHIP_CLASS[item.tone]}`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <p className="font-body text-[11px] text-gray-400 mt-3">
        † Optional — add only when content exists or explicitly requested. &nbsp;★ Reference only —
        not a rendered page section.
      </p>
    </div>
  );
}
