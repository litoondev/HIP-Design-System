export interface LocationPinProps {
  label?: string;
  colorClassName?: "primary" | "cta";
}

/** Location pin marker — ported 1:1 from design-system/index.html (#location, node 1:2325 / 7:1570) */
export default function LocationPin({ label = "Location name", colorClassName = "primary" }: LocationPinProps) {
  const bg = colorClassName === "cta" ? "bg-cta" : "bg-primary";
  const borderTop = colorClassName === "cta" ? "border-t-cta" : "border-t-primary";
  return (
    <div className="flex justify-center pt-5">
      <div className="flex flex-col items-center gap-[5px] relative">
        <span
          className={`inline-flex items-center gap-2 px-7 py-[14px] font-body font-bold text-[20px] leading-[30px] tracking-[0.5px] text-white whitespace-nowrap shadow-[0_10px_18px_rgba(16,61,81,0.2)] ${bg}`}
        >
          {label} <span className="text-[12px] leading-none text-white opacity-80">&times;</span>
        </span>
        <span
          className={`w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-[8px] ${borderTop}`}
        />
        <span className={`w-[45px] h-[45px] rounded-[50%_50%_50%_0] ${bg} -rotate-45 -mt-5`} />
      </div>
    </div>
  );
}
