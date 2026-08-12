# Hero Banner CTA Guidelines

Rules for the **two CTA buttons** that appear in every hero banner variant (V1 `HeroBanner`,
V2 `HeroPillNav`, V3 `HeroSlider`, V4 `HeroCenteredNav`):

1. **Nav-section CTA** — the button in the top utility bar / main nav
   ("Free Consult" / "Request Appointment").
2. **Hero CTA** — the primary conversion button inside the hero content.

These rules exist so the CTAs stay on-brand, legible, and never blend into the hero background.

---

## The rules

### 1. Always use a button from the library
Never hand-build a CTA inline in a hero. Pull one from `components/ui/buttons`:

| Slot | Component(s) | Notes |
| --- | --- | --- |
| Nav-section CTA | `NavBarButton` (square) / `NavBarPillButton` (pill) | Match the nav's corner style. |
| Hero CTA | `CorporateArrowButton`, `LineSlideButton`, `ModernPillButton`, … | Any conversion button, retargeted to the CTA colour below. |

Retarget colour with a **doubled class** in the hero's CSS module
(`.xHeroBtnCta.xHeroBtnCta { … }`) so it beats the button module — never edit the shared
button component for a one-off.

### 2. Default **and** hover must not match the background
Hero grounds are dark (navy → primary/secondary gradients, often under a dark overlay) or, for
the pill navs, a white pill. The CTA must stay visually distinct from its ground **in both
states** — target **≥ 3:1** non-text contrast against the ground.

- ❌ Never use `navy` / `base-black` as a CTA fill on a dark ground (it disappears).
- ❌ Never use `base-white` as a CTA fill on a white pill.
- ❌ Never darken the gold past `cta-400` for a hover — `cta-500`/`600`/`700` are muddy and
  collapse toward the dark ground (e.g. `cta-700` on navy is only 2.16:1).

### 3. Use the CTA ramp; the default is always CTA gold
The conversion colour is the **`cta`** ramp. Both CTA slots share a **CTA-gold default fill with
black ink**; the hover differs by slot and, for the nav CTA, by background.

The hover background is driven by the **background theme**, not by the button:

| Background theme | Hover fill | Hover ink |
| --- | --- | --- |
| **Dark** hero / nav | `--color-cta-50` (light) | `--color-base-black` — 19.53:1 |
| **Light** hero / nav | `--color-cta-600` (dark) | `--color-base-white` — 5.10:1 |

This applies to the Primary, Secondary and Tertiary buttons alike — on a dark surface every
button hovers to `cta-50`; on a light surface every button hovers to `cta-600`.

**Hero CTA** — all four heroes sit on dark grounds, so: `cta-base` default → `cta-50` hover,
black ink throughout.

**Nav-section CTA** — hover is **ground-aware** via the `ground` prop on
`NavBarButton` / `NavBarPillButton`:

| Nav ground | Default | Hover |
| --- | --- | --- |
| **Dark** (`ground="dark"`) | CTA-gold fill + black ink | `cta-50` fill + black ink |
| **Light** (`ground="light"`) | CTA-gold fill + black ink | `cta-600` fill + white ink |

This is the reversible pattern: on dark surfaces the hover goes light, on light surfaces it goes
dark — both directions keep a strong, on-brand colour shift and stay off the background colour.

### 3b. Navigation text & icons follow the theme
- **Dark nav** → light text and icons (`base-white`).
- **Light nav** → dark text and icons from the **`-600` scale** (`primary-600`, 5.44:1 AA on
  white). Do **not** use a `-600` ink on a saturated brand bar — on V3's `secondary-500` cyan
  topbar every `-600` value lands near 1.5:1, so that bar keeps `base-black` (5.64:1).

### 4. Label ink is **black**, never white
The cta gold is light, so white text fails:

| On | White label | Black label |
| --- | --- | --- |
| `cta-base` | 1.79:1 ❌ | **11.25:1** ✅ AAA |
| `cta-400` | — | **8.06:1** ✅ AA |

The nav CTA label uses the **Over Line** typography token; the hero CTA uses the library
button's default (**Button** token). Both applied via `typographyClass` / the component — never a
hard-coded font.

### 5. Hover must actually work
Every CTA needs a visible `:hover` **and** `:focus-visible` change, and any motion (arrow slide,
line sweep) must still run after retargeting colour. Test both pointer and keyboard focus.

### 6. Everything is a token
No literal hex or px in a hero CTA — colours from the `--color-*` ramp, spacing from
`--spacing-*` / the semantic button tokens.

---

## Verified values (WCAG AA)

Checked with `lib/colors` `contrastRatio` against every ground actually behind a hero CTA
(navy, primary-700/800/900, secondary-700, and the dark overlays):

| Check | Target | Result |
| --- | --- | --- |
| Black label on `cta-base` | ≥ 4.5 | 11.25 (AAA) |
| Black label on `cta-400` | ≥ 4.5 | 8.06 (AA) |
| `cta-base` vs grounds | ≥ 3.0 | 3.04 – 11.3 |
| `cta-400` vs grounds | ≥ 3.0 | 3.00 – 8.06 |

> One edge: bare `primary-600` (the bottom-right corner of some gradients) drops `cta-400` to
> 2.18:1. Keep CTAs off that shade — every current hero already sits the button over
> primary-700/800 or a dark overlay.

## Current state (all four heroes conform)

| Hero | Nav ground | Nav CTA | Hero CTA |
| --- | --- | --- | --- |
| V1 `HeroBanner` | dark | `NavBarPillButton ground="dark"` | `CorporateArrowButton` (cta-base → cta-400) |
| V2 `HeroPillNav` | light (white pill) | `NavBarPillButton ground="light"` | `ModernPillButton` (cta-base → cta-400) |
| V3 `HeroSlider` | light (white bar) | `NavBarButton ground="light"` | `CorporateArrowButton` (cta-base → cta-400) |
| V4 `HeroCenteredNav` | dark | `NavBarButton ground="dark"` | `LineSlideButton` (cta-base → cta-400) |

Nav text, links, and icons are white / near-white on the dark grounds (≥ 14:1); eyebrows use
`cta-500` gold, which clears AA on the dark/overlaid grounds.
