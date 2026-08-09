interface Swatch {
  hex: string;
  name: string;
  bgClassName: string;
  textClassName: string;
}

const swatches: (Swatch & { title: string })[] = [
  { hex: "#320270", name: "Primary", title: "Royal Amethyst", bgClassName: "bg-primary", textClassName: "text-white" },
  { hex: "#1FC3DF", name: "Secondary", title: "Aqua Pulse", bgClassName: "bg-secondary", textClassName: "text-[#111827]" },
  { hex: "#1895A7", name: "Tertiary", title: "Pacific Glass", bgClassName: "bg-tertiary", textClassName: "text-[#111827]" },
  { hex: "#FFCF18", name: "Accent", title: "Solar Flare", bgClassName: "bg-accent", textClassName: "text-[#111827]" },
  { hex: "#320270", name: "CTA", title: "Royal Amethyst", bgClassName: "bg-cta", textClassName: "text-white" },
  { hex: "#FFFFFF", name: "Base White", title: "Pure White", bgClassName: "bg-base-white", textClassName: "text-[#111827]" },
  { hex: "#CED0D3", name: "Base Light Gray", title: "Lunar Fog", bgClassName: "bg-base-lightgray", textClassName: "text-[#111827]" },
  { hex: "#717680", name: "Base Gray", title: "Slate Horizon", bgClassName: "bg-base-gray", textClassName: "text-white" },
  { hex: "#000000", name: "Base Black", title: "Pure Black", bgClassName: "bg-base-black", textClassName: "text-white" },
];

/** Base brand color palette — ported 1:1 from design-system/index.html (#colors section) */
export default function ColorPalette() {
  return (
    <div className="flex flex-col gap-0">
      {swatches.map((s, i) => (
        <div
          key={`${s.name}-${i}`}
          className={`h-[78px] flex flex-col items-center justify-center font-body text-[11px] leading-[1.4] text-center border ${
            i === 0 ? "" : "border-t-0"
          } border-[#e0e0e0] ${s.bgClassName} ${s.textClassName}`}
        >
          <span className="font-bold">{s.hex}</span>
          <span>{s.name}</span>
          <span>{s.title}</span>
        </div>
      ))}
    </div>
  );
}
