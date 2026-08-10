import Link from "next/link";
import SiteSearch from "./SiteSearch";
import TopBarNav from "./TopBarNav";
import { Typography } from "@/components/ui/typography/Typography";

/** Fixed top bar — ported 1:1 from design-system/index.html */
export default function TopBar() {
  return (
    <header className="topbar fixed top-0 left-0 right-0 h-16 flex items-center gap-6 px-6 bg-white border-b border-gray-200 z-[100]">
      <Link href="/" className="flex items-center gap-[10px] no-underline">
        {/* Wordmark — Figtree 800 at a fixed optical size, outside the type scale. */}
        <span className="font-header font-extrabold text-[20px] text-base-black">HIP</span>
        <Typography variant="caption" as="span" className="text-gray-500">
          Style Guide
        </Typography>
      </Link>
      <SiteSearch />
      <TopBarNav />
    </header>
  );
}
