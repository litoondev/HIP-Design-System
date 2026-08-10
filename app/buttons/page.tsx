import type { ReactNode } from "react";
import {
  RequestFreeConsultButton,
  OlvButton,
  FreeConsultButton,
  BergenButton,
  GreenConsultButton,
  ArtemisButton,
  LineApptButton,
  AosgButton,
  FranklinButton,
  HudsonButton,
  GibsonJsButton,
  GibsonButton,
  HulmeButton,
  DoctorButton,
  LineApptAltButton,
  BlueRotateButton,
  BlueLearnMoreButton,
  ScheduleButton,
  CharcoalLearnMoreButton,
  GoldConsultButton,
  NavyDiscoverButton,
  ApptButton,
  PressButton,
  DiscoverUsButton,
  LearnMoreButton,
} from "@/components/ui/buttons";
import { Typography } from "@/components/ui/typography/Typography";

export const metadata = {
  title: "Buttons — HIP Style Guide",
  description: "All 25 HIP button treatments, with their hover and responsive behavior.",
};

/** One gallery row: caption above the specimen, matching buttons.html's demo wrapper. */
function Demo({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 border-b border-gray-100">
      <Typography variant="tooltip" as="span" className="text-gray-400">
        {label}
      </Typography>
      {children}
    </div>
  );
}

/** Buttons gallery — ported 1:1 from design-system/buttons.html (#buttons), same order as the source. */
export default function ButtonsPage() {
  return (
    <section id="buttons" className="doc-section pb-16 border-b border-gray-100 mb-16 last:border-b-0">
      <Typography variant="preHeader" as="div" className="text-cta mb-2">
        Components
      </Typography>
      <Typography variant="header4" as="h1" className="text-base-black mt-0 mb-3">
        Buttons
      </Typography>
      <div className="flex flex-col mb-8">
        <Demo label="Request Free Consult">
          <RequestFreeConsultButton />
        </Demo>

        <Demo label="OLV Button">
          <OlvButton />
        </Demo>

        <Demo label="Free Consult (Lucas Orthodontic)">
          <FreeConsultButton />
        </Demo>

        <Demo label="Bergen Ortho">
          <BergenButton />
        </Demo>

        <Demo label="Request Free Consult (Green Rectangular)">
          <GreenConsultButton />
        </Demo>

        <Demo label="Artemis Ortho">
          <ArtemisButton />
        </Demo>

        <Demo label="Request Appointment (Line slide)">
          <LineApptButton />
        </Demo>

        <Demo label="Join AOSG (yellow rect + offset shadow collapse)">
          {/* Extra padding gives the 10px offset shadow room to show */}
          <div className="pt-1 pr-[14px] pb-[14px] pl-1">
            <AosgButton />
          </div>
        </Demo>

        <Demo label="Meet Dr. Franklin (charcoal sweep-away + inverting circle icon)">
          <FranklinButton />
        </Demo>

        <Demo label="Free Consultation (teal slab sweep + button shrink)">
          <HudsonButton />
        </Demo>

        <Demo label="Request Free Consult (white pill + bidirectional arrow via JS)">
          <GibsonJsButton />
        </Demo>

        <Demo label="Request Free Consult (white pill + arrow-through-circle)">
          <GibsonButton />
        </Demo>

        <Demo label="Request Free Consult (white panel collapse)">
          <HulmeButton />
        </Demo>

        <Demo label="Meet Dr. Steven (vertical text roll)">
          <DoctorButton />
        </Demo>

        <Demo label="Request Appointment (Line clip-path swap)">
          <LineApptAltButton />
        </Demo>

        <Demo label="Learn More (Blue — sweep + rotate)">
          <BlueRotateButton />
        </Demo>

        <Demo label="Learn More (Blue — sweep)">
          <BlueLearnMoreButton />
        </Demo>

        <Demo label="Schedule Appointment">
          <ScheduleButton />
        </Demo>

        <Demo label="Learn More (Charcoal — rotating arrow)">
          <CharcoalLearnMoreButton />
        </Demo>

        <Demo label="Request Free Consult (Gold)">
          <GoldConsultButton />
        </Demo>

        <Demo label="Discover Us (Navy)">
          <NavyDiscoverButton />
        </Demo>

        <Demo label="Request Appointment">
          <ApptButton />
        </Demo>

        <Demo label="Request Free Consult (3D Press)">
          <PressButton />
        </Demo>

        <Demo label="Discover Us">
          <DiscoverUsButton />
        </Demo>

        <Demo label="Learn More (pill)">
          <LearnMoreButton />
        </Demo>
      </div>
    </section>
  );
}
