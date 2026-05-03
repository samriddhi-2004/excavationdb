# Design Brief — Underground Excavation Systems Reference

**Tone & Purpose**: Technical/industrial reference site for geotechnical engineers. Professional, information-dense, dark mode by default. Zero decoration, maximum clarity.

**Differentiation**: Engineering-grade comparison dashboard with charts, soil parameter tables, and retaining wall system specifications. Teal primary accent for technical credibility. Clean grid foundation.

## Color Palette (OKLCH)

| Role | Light | Dark |
|------|-------|------|
| Background | 0.98 0 0 | 0.11 0.01 200 |
| Foreground | 0.12 0 0 | 0.96 0 0 |
| Primary | 0.55 0.15 200 | 0.65 0.18 195 |
| Accent | 0.58 0.18 45 | 0.68 0.2 48 |
| Card | 0.99 0 0 | 0.14 0.01 200 |
| Border | 0.88 0.01 200 | 0.25 0.02 200 |
| Chart 1–5 | Warm amber, cool teal, purple, mint, coral | Same, adjusted for dark |
| Destructive | 0.56 0.22 25 | 0.65 0.19 22 |

## Typography

- **Display**: Space Grotesk (geometric, tech-forward, 600–700 weight for headlines)
- **Body**: DM Sans (neutral, readable, 400–500 weight)
- **Mono**: JetBrains Mono (technical specifications and parameter values)

## Elevation & Depth

- `shadow-subtle`: 0 1px 3px black/8% (borders, input fields)
- `shadow-tech`: 0 2px 8px black/15% (cards, floating panels)
- `shadow-elevated`: 0 8px 24px black/12% (popovers, modals, comparison sidebar)

## Structural Zones

| Zone | Background | Treatment | Purpose |
|------|------------|-----------|----------|
| Header | Card | Border-bottom (border color, 1px) | Navigation, branding |
| Main Content | Background | None | System pages, parameter tables |
| Comparison Sidebar | Muted/20% | Visible border, elevated shadow | Filters and system selection |
| Footer | Muted/30% | Border-top, subtle grid texture | Links, copyright |
| Data Cards | Card | Border, shadow-tech | Soil parameters, formulas |

## Spacing & Rhythm

- Baseline grid: 4px; Tailwind scale (8, 16, 24, 32, 48)
- Compact: 8px padding (chips, badges)
- Standard: 16px padding (cards, sections)
- Spacious: 24px padding (hero zones)
- Border-radius: 4–8px (sharp, technical)

## Component Patterns

- **Buttons**: Primary (teal bg, white text), Secondary (border, muted), Destructive (red)
- **Tables**: Monospace data columns, header row with sidebar color, alternating row backgrounds
- **Charts**: 5-color palette (chart-1 through chart-5), teal as primary series
- **Data Cards**: Border, shadow-tech, left accent stripe (teal or accent by category)
- **Comparison Filters**: Checkbox groups, system selector chips, parameter sliders

## Motion & Interaction

- Default transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- No decorative animations; focus on functional clarity
- Hover states: primary darkens by 0.05 L, shadows lift
- Active states: text-accent color with underline or box highlight

## Constraints

- No decorative gradients, glows, or ambient effects
- No sans-serif serif mixing; stick to Space Grotesk + DM Sans + JetBrains Mono
- No arbitrary color values; all colors via CSS variables
- Tables and grids prioritized over narrative blocks
- Code/formula blocks in monospace on muted background with subtle border

## Signature Detail

Parameter tables with system-specific color-coded left borders and teal accent header row. Comparison mode toggles reveal/hide columns without page reload. Soil parameter tooltips reference engineering formulas inline.
