import type { ReactNode } from "react";

/**
 * The 1040px reading-width column every doc page used to get for free from the shared
 * <main> in app/layout.tsx. Pulled out into its own opt-in wrapper so routes that need to
 * render a *live* design at real width — /sections — can skip it instead of being capped to
 * document reading width with a wide dead zone on anything wider than ~1150px.
 *
 * Every other page (Foundations/Components home, Buttons, Homepage reference, Icons) wraps
 * its content in this so nothing about their layout changes from before the split.
 */
export default function DocShell({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1040px] px-14 [@media(max-width:900px)]:px-5">{children}</div>
  );
}
