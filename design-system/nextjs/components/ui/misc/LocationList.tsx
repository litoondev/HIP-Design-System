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
      <div className="font-header font-bold text-[24px] leading-9 tracking-[0.75px] text-primary uppercase">{heading}</div>
      <div className="flex flex-col gap-[6px]">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col gap-[6px]">
            <div className="font-body font-bold text-[20px] leading-[30px] tracking-[0.5px] text-base-black">{item.name}</div>
            <div className="flex items-center gap-[10px] font-body text-[20px] leading-[30px] text-base-black">
              <span className="text-cta text-[10px]">&#9679;</span> {item.address}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
