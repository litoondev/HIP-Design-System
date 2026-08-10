import { Typography } from "@/components/ui/typography/Typography";

export interface LocationListItem {
  name: string;
  address: string;
}

export interface LocationListProps {
  heading?: string;
  items?: LocationListItem[];
}

const defaultItems: LocationListItem[] = [
  { name: "Location Name 1", address: "Address1" },
  { name: "Location Name 2", address: "Address2" },
];

/** Locations list — ported 1:1 from design-system/index.html (#location, node 7:14829) */
export default function LocationList({ heading = "Locations", items = defaultItems }: LocationListProps) {
  return (
    <div className="flex flex-col gap-4 w-[209px]">
      {/* Stays a <div>: the component is dropped into pages whose heading level it can't know,
          and promoting it to an h3 here would skip a level under the section's own h1. */}
      <Typography variant="subtitle" as="div" className="text-primary">
        {heading}
      </Typography>
      <div className="flex flex-col gap-[6px]">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-[6px]">
            <Typography as="div" variant="strong1" className="text-base-black">
              {item.name}
            </Typography>
            <Typography as="div" variant="body1" className="flex items-center gap-[10px] text-base-black">
              <span className="text-cta text-[10px]">&#9679;</span> {item.address}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
