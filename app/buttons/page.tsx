import { ButtonsShowcase } from "@/components/ui/docs";
import { DocShell } from "@/components/layout";

export const metadata = {
  title: "Buttons — HIP Style Guide",
  description: "All 28 HIP button treatments, filterable by Design Category.",
};

/** Buttons gallery — the 25 buttons from design-system/buttons.html, filtered via category chips. */
export default function ButtonsPage() {
  return (
    <DocShell>
      <section id="buttons" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
        <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">
          Components
        </div>
        <h1 className="font-header font-extrabold text-[34px] leading-[1.2] text-base-black mt-0 mb-8">
          Buttons
        </h1>
        <ButtonsShowcase />
      </section>
    </DocShell>
  );
}
