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
    <div className="flex w-[846px] max-w-full shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="w-[282px] flex flex-col border-r border-gray-200 last:border-r-0">
          <div className="bg-primary-950 text-white font-body text-[18px] leading-[26px] tracking-[0.5px] capitalize px-[26px] py-[11.5px]">
            {col.head}
          </div>
          {col.items.map((item, i) => (
            <div
              key={i}
              className={`bg-white text-base-black font-body ${
                i === 0 ? "font-bold" : ""
              } text-[18px] leading-[26px] tracking-[0.5px] capitalize px-[26px] py-[11.5px] shadow-[0_1px_0_rgba(37,37,37,0.08)]`}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
