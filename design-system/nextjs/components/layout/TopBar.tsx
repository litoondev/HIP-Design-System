import Link from "next/link";
import SiteSearch from "./SiteSearch";
import TopBarNav from "./TopBarNav";

/** Fixed top bar — ported 1:1 from design-system/index.html */
export default function TopBar() {
  return (
    <header className="topbar fixed top-0 left-0 right-0 h-16 flex items-center gap-6 px-6 bg-white border-b border-gray-200 z-[100]">
      <Link href="/" className="flex items-center gap-[10px] no-underline">
        <span className="font-header font-extrabold text-[20px] text-base-black">HIP</span>
        <span className="font-body text-[13px] text-gray-500">Style Guide</span>
      </Link>
      <SiteSearch />
      <TopBarNav />
    </header>
  );
}
