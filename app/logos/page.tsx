import { LogoLibrary } from "@/components/ui/logos";
import { DocShell } from "@/components/layout";

export const metadata = {
  title: "Logos — HIP Style Guide",
  description:
    "Recognition & affiliation logo library exported from Figma — click any logo to copy its SVG.",
};

/** Recognition / Affiliation logo library — exported from the Figma logo source file. */
export default function LogosPage() {
  return (
    <DocShell>
      <LogoLibrary />
    </DocShell>
  );
}
