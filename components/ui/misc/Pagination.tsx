"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/typography/Typography";

export type PaginationVariant = "primary" | "accent" | "disabled";

export interface PaginationProps {
  totalPages?: number;
  variant?: PaginationVariant;
  defaultPage?: number;
}

/** Interactive pagination — ported 1:1 from design-system/index.html (#pagination) with useState for the active page. */
export default function Pagination({ totalPages = 5, variant = "primary", defaultPage = 3 }: PaginationProps) {
  const disabled = variant === "disabled";
  const [page, setPage] = useState(defaultPage);

  const activeBg = variant === "accent" ? "bg-accent text-base-black" : "bg-primary text-white";
  const prevNextClass = disabled
    ? "bg-transparent text-gray-400 cursor-not-allowed"
    : `${activeBg} cursor-pointer`;

  return (
    <div className="flex items-center justify-between w-[688px] max-w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className={`inline-flex items-center gap-2 px-8 py-[15px] uppercase border-none ${prevNextClass}`}
      >
        <Typography variant="button" as="span">
          &#8592; Prev
        </Typography>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
        const isActive = !disabled && n === page;
        return (
          <button
            key={n}
            type="button"
            disabled={disabled}
            onClick={() => setPage(n)}
            className={`w-[60px] h-[60px] uppercase border-none ${
              disabled
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : isActive
                ? `cursor-pointer ${activeBg}`
                : "cursor-pointer bg-transparent text-base-black"
            }`}
          >
            <Typography variant="button" as="span">
              {n}
            </Typography>
          </button>
        );
      })}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        className={`inline-flex items-center gap-2 px-8 py-[15px] uppercase border-none ${prevNextClass}`}
      >
        <Typography variant="button" as="span">
          Next &#8594;
        </Typography>
      </button>
    </div>
  );
}
