import {
  RequestFreeConsultButton,
  OlvButton,
  FreeConsultButton,
  BergenButton,
  LearnMoreButton,
} from "@/components/ui/buttons";

export const metadata = {
  title: "Buttons — HIP Style Guide",
};

/** Buttons gallery — ported 1:1 from design-system/buttons.html (#buttons) */
export default function ButtonsPage() {
  return (
    <section id="buttons" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
      <div className="font-body text-[12px] font-bold tracking-[0.5px] uppercase text-cta mb-2">Components</div>
      <h1 className="font-header font-extrabold text-[34px] leading-[1.2] text-base-black mt-0 mb-3">Buttons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col items-center justify-center gap-4 min-h-[160px] p-8 bg-gray-50 border border-gray-200 rounded-xl overflow-x-auto">
          <RequestFreeConsultButton />
          <span className="font-body text-[12px] text-gray-400">Request Free Consult</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 min-h-[160px] p-8 bg-gray-50 border border-gray-200 rounded-xl overflow-x-auto">
          <OlvButton />
          <span className="font-body text-[12px] text-gray-400">OLV Button</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 min-h-[160px] p-8 bg-gray-50 border border-gray-200 rounded-xl overflow-x-auto">
          <FreeConsultButton />
          <span className="font-body text-[12px] text-gray-400">Free Consult (Lucas Orthodontic)</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 min-h-[160px] p-8 bg-gray-50 border border-gray-200 rounded-xl overflow-x-auto">
          <BergenButton />
          <span className="font-body text-[12px] text-gray-400">Bergen Ortho</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 min-h-[160px] p-8 bg-gray-50 border border-gray-200 rounded-xl overflow-x-auto sm:col-span-2">
          <LearnMoreButton />
          <span className="font-body text-[12px] text-gray-400">Learn More (pill)</span>
        </div>
      </div>
    </section>
  );
}
