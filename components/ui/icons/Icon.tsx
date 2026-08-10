import type { CSSProperties } from "react";
import { icons } from "./iconData";

/**
 * Renders an icon from the global icon library by name (see /icons for the
 * gallery). The stored markup is normalized so the glyph inherits `currentColor`
 * and fills its box — size it with the `size` prop (defaults to the global
 * --btn-icon-size token) or via a className.
 */
export default function Icon({
  name,
  size,
  className,
}: {
  /** Exact icon name as listed in the icon library. */
  name: string;
  /** CSS size (both dimensions), e.g. "20px" or "var(--btn-icon-size)". */
  size?: string;
  className?: string;
}) {
  const entry = icons.find((icon) => icon.name === name);
  if (!entry) {
    throw new Error(`Unknown icon in global library: "${name}"`);
  }

  const svg = entry.svg
    .replace(/<svg /, '<svg style="display:block;width:100%;height:100%" ')
    .replace(/\s(width|height)="\d+"/g, "")
    .replace(/(fill|stroke)="#[0-9a-fA-F]{3,8}"/g, '$1="currentColor"')
    .replace(/(fill|stroke)="(?:white|black)"/g, '$1="currentColor"');

  const style: CSSProperties = {
    display: "inline-block",
    width: size ?? "var(--btn-icon-size)",
    height: size ?? "var(--btn-icon-size)",
    flexShrink: 0,
  };

  return (
    <span
      className={className}
      style={style}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
