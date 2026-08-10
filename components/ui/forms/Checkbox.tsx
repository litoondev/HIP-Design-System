import { Typography } from "@/components/ui/typography/Typography";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
}

/** Checkbox (unchecked/checked) — ported 1:1 from design-system/index.html (#checkbox-radio) */
export default function Checkbox({ label = "Checkbox", checked = false }: CheckboxProps) {
  return (
    <Typography
      variant="label"
      as="label"
      className="flex items-center gap-2 text-base-black"
    >
      {checked ? (
        <span className="relative inline-block w-4 h-4 rounded border border-primary bg-primary after:content-[''] after:block after:absolute after:left-1 after:top-[1px] after:w-[5px] after:h-[9px] after:border-white after:border-solid after:border-r-2 after:border-b-2 after:rotate-45" />
      ) : (
        <span className="inline-block w-4 h-4 rounded border border-primary bg-white" />
      )}{" "}
      {label}
    </Typography>
  );
}
