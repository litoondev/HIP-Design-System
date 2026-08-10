import { Typography } from "@/components/ui/typography/Typography";

export interface MegaMenuColumnData {
  head: string;
  items: string[];
}

export interface MegaMenuProps {
  columns?: MegaMenuColumnData[];
}

const defaultColumn: MegaMenuColumnData = {
  head: "Nav Head",
  items: Array.from({ length: 6 }, () => "child Menu"),
};

/** Mega Menu (3 columns) — ported 1:1 from design-system/index.html (#mega-menu) */
export default function MegaMenu({
  columns = [defaultColumn, defaultColumn, defaultColumn],
}: MegaMenuProps) {
  return (
    <div className="flex w-[846px] max-w-full shadow-[0_4px_4px_color-mix(in_srgb,var(--color-black)_10%,transparent)]">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="w-[282px] flex flex-col border-r border-gray-200 last:border-r-0">
          <Typography
            as="div"
            variant="menuItem"
            className="bg-primary-950 text-white capitalize px-[26px] py-[11.5px]"
          >
            {col.head}
          </Typography>
          {col.items.map((item, i) => (
            <Typography
              key={i}
              as="div"
              variant="menuItem"
              /* The first child is the active row; weight is the only thing that differs, so it
                 comes through the escape hatch rather than a second near-identical variant. */
              weight={i === 0 ? "bold" : undefined}
              className="bg-white text-base-black capitalize px-[26px] py-[11.5px] shadow-[0_1px_0_color-mix(in_srgb,var(--color-black)_8%,transparent)]"
            >
              {item}
            </Typography>
          ))}
        </div>
      ))}
    </div>
  );
}
