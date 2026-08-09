import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";

// 600 is required by the section designs (hero H1 is Figtree 600; 8 Inter 600 rules) and by
// Tailwind's font-semibold utilities used across the shell. Without it the browser synthesises
// a fake semibold, which reads visibly heavier and wider than the real cut.
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIP — Web Style Guide",
  description: "HIP web design system component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${figtree.variable} ${inter.variable}`}>
      <body className="m-0 bg-white text-base-black font-body">
        <TopBar />
        <div className="shell flex pt-16 min-h-screen bg-white">
          <Sidebar />
          <main className="content ml-60 [@media(max-width:900px)]:ml-0 flex-1 max-w-[1040px] px-14 [@media(max-width:900px)]:px-5 pt-12 [@media(max-width:900px)]:pt-8 pb-[120px] [@media(max-width:900px)]:pb-[100px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
