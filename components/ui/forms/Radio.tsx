export interface RadioProps {
  label?: string;
  selected?: boolean;
}

/** Radio (unselected/selected) — ported 1:1 from design-system/index.html (#checkbox-radio) */
export default function Radio({ label = "Radio", selected = false }: RadioProps) {
  return (
    <label className="flex items-center gap-2 font-body text-[14px] text-base-black">
      {selected ? (
        <span className="relative inline-block w-4 h-4 rounded-full border border-primary bg-white after:content-[''] after:absolute after:inset-[16%] after:rounded-full after:bg-primary" />
      ) : (
        <span className="relative inline-block w-4 h-4 rounded-full border border-primary bg-white" />
      )}{" "}
      {label}
    </label>
  );
}
