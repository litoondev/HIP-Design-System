import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  fontWeights,
  getTypographyDefinition,
  letterSpacingOverride,
  lineHeightOverride,
  typographyVariants,
  type FontWeightToken,
  type LetterSpacingToken,
  type LineHeightToken,
  type TypographyVariant,
} from "@/lib/design-system/typography";

/**
 * <Typography> — the single entry point for text in the HIP design system.
 *
 * A variant is a complete type style: family, weight, size, line-height, letter-spacing,
 * casing, and the mobile/tablet/desktop steps of each. `variant` alone reproduces the Figma
 * design, so nothing downstream needs to restate type values.
 *
 *   <Typography variant="header1">Heading</Typography>
 *
 * Appearance and semantics are separate choices — `variant` picks the look, `as` picks the
 * tag. That is what lets a section heading look like Header 1 while staying an <h2> in the
 * document outline:
 *
 *   <Typography variant="header1" as="h2">Our Services</Typography>
 *   <Typography variant="label" as="label" htmlFor="email">Email address</Typography>
 *
 * Color is not part of a variant — pass it through `className`:
 *
 *   <Typography variant="header3" className="text-textcolor-h3">Heading</Typography>
 *
 * No "use client": this renders markup and nothing else, so it stays usable from Server
 * Components. Responsive behaviour is pure CSS via Tailwind's md:/lg: prefixes; there is no
 * viewport measurement anywhere in the system.
 */

/**
 * `as` is typed as the generic itself, not as a bare ElementType — that is what lets TS infer
 * T from the call site and admit that element's own props, so `as="label" htmlFor=…` and
 * `as="a" href=…` type-check while `as="p" href=…` does not.
 */
interface TypographyOwnProps<T extends ElementType> {
  /** Type style to render. Defaults to `body1`. */
  variant?: TypographyVariant;
  /** Element to render. Defaults to the variant's semantic tag. */
  as?: T;
  /** Escape hatch — overrides the variant's weight at every breakpoint. */
  weight?: FontWeightToken;
  /** Escape hatch — overrides the variant's line height at every breakpoint. */
  lineHeight?: LineHeightToken;
  /** Escape hatch — overrides the variant's letter spacing at every breakpoint. */
  letterSpacing?: LetterSpacingToken;
  className?: string;
  children?: ReactNode;
}

export type TypographyProps<T extends ElementType = "p"> = TypographyOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps<T>>;

/**
 * The class string for a variant, for the cases a component can't be used — styling an
 * element owned by a third-party library, or a slot that only accepts a className.
 */
export function typographyClass(variant: TypographyVariant, className?: string): string {
  return cn(typographyVariants[variant], className);
}

export function Typography<T extends ElementType = "p">({
  variant = "body1",
  as,
  weight,
  lineHeight,
  letterSpacing,
  className,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = (as ?? getTypographyDefinition(variant).defaultTag) as ElementType;

  return (
    <Component
      className={cn(
        typographyVariants[variant],
        // Overrides sit between the variant and `className` so an explicit class still wins.
        weight && fontWeights[weight],
        lineHeight && lineHeightOverride(lineHeight),
        letterSpacing && letterSpacingOverride(letterSpacing),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Typography;
