interface Swatch {
  hex: string;
  name: string;
  bgClassName: string;
  textClassName: string;
}

const swatches: Swatch[] = [
  { hex: "#3196A9", name: "Primary", bgClassName: "bg-primary", textClassName: "text-white" },
  { hex: "#06B6D4", name: "Secondary", bgClassName: "bg-secondary", textClassName: "text-white" },
  { hex: "#8D8DC7", name: "Tertiary", bgClassName: "bg-tertiary", textClassName: "text-white" },
  { hex: "#EAB308", name: "Accent", bgClassName: "bg-accent", textClassName: "text-[#111827]" },
  { hex: "#F97316", name: "CTA", bgClassName: "bg-cta", textClassName: "text-white" },
  { hex: "#FFFFFF", name: "Base White", bgClassName: "bg-base-white", textClassName: "text-[#111827]" },
  { hex: "#E7E7E7", name: "Base Light Gray", bgClassName: "bg-base-lightgray", textClassName: "text-[#111827]" },
  { hex: "#737373", name: "Base Gray", bgClassName: "bg-base-gray", textClassName: "text-white" },
  { hex: "#030712", name: "Base Black", bgClassName: "bg-base-black", textClassName: "text-white" },
];

/** Base brand color palette — ported 1:1 from design-system/index.html (#colors section) */
export default function ColorPalette() {
  return (
    <div className="flex flex-col gap-0">
      {swatches.map((s, i) => (
        <div
          key={s.name}
          className={`h-[78px] flex flex-col items-center justify-center font-body text-[11px] leading-[1.4] text-center border ${
            i === 0 ? "" : "border-t-0"
          } border-[#e0e0e0] ${s.bgClassName} ${s.textClassName}`}
        >
          <span className="font-bold">{s.hex}</span>
          <span>{s.name}</span>
          <span>Name</span>
        </div>
      ))}
    </div>
  );
}
