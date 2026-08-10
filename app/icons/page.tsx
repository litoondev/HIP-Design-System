import { IconLibrary } from "@/components/ui/icons";
import { DocShell } from "@/components/layout";

export const metadata = {
  title: "Icons — HIP Style Guide",
  description: "150-icon HIP asset library — click any icon to copy its SVG.",
};

/** Icon library — ported 1:1 from design-system/icons.html */
export default function IconsPage() {
  return (
    <DocShell>
      <IconLibrary />
    </DocShell>
  );
}
