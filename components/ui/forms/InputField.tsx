import { Typography, typographyClass } from "@/components/ui/typography/Typography";

export type InputFieldVariant = "round" | "square" | "circle" | "pill";

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
  variant?: InputFieldVariant;
  className?: string;
}

const radiusClassByVariant: Record<InputFieldVariant, string> = {
  round: "rounded",
  square: "rounded-none",
  circle: "rounded-20",
  pill: "rounded-[36px]",
};

/** Input field — ported 1:1 from design-system/index.html (#inputs). `variant` maps to the four
 * corner-radius treatments shown in the source (default/rounded, "rounded-20", square, pill). */
export default function InputField({
  label = "First Name*",
  placeholder = "Your first name",
  variant = "round",
  className,
}: InputFieldProps) {
  return (
    <div className={`flex flex-col gap-2 w-[320px]${className ? ` ${className}` : ""}`}>
      <Typography variant="body2" as="label" className="text-base-black">
        {label}
      </Typography>
      <div
        className={`flex items-center gap-2 px-3 py-[14px] border border-base-gray ${radiusClassByVariant[variant]} w-full`}
      >
        {/* <input> has no children to wrap, so the variant is applied as a class instead. */}
        <input
          type="text"
          placeholder={placeholder}
          className={typographyClass(
            "body2",
            "border-none outline-none flex-1 text-black/35"
          )}
        />
      </div>
    </div>
  );
}
