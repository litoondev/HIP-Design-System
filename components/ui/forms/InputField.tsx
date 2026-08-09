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
      <label className="font-body text-[18px] leading-[28px] text-base-black">{label}</label>
      <div
        className={`flex items-center gap-2 px-3 py-[14px] border border-base-gray ${radiusClassByVariant[variant]} w-full`}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="border-none outline-none flex-1 font-body text-[18px] leading-[28px] text-[rgba(3,7,18,0.35)]"
        />
      </div>
    </div>
  );
}
