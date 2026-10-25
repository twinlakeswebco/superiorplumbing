---
name: Superior Plumbing Services
description: A neighborhood trade sign expressed through real plumbing work and direct contact.
colors:
  navy: "#0b2145"
  red: "#ba1527"
  red-dark: "#97101f"
  paper: "#f4f5f7"
  white: "#fff"
  muted: "#536074"
  line: "#d5dae1"
  ink-soft: "#c9d3e3"
  focus: "#287cce"
  white-hover: "#e4e9f0"
  tab-selected: "#e9edf2"
  tab-hover: "#dce3ec"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(48px, 5.65vw, 80px)"
    fontWeight: 750
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 50px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 650
    lineHeight: 1.6
spacing:
  page-gutter: "clamp(24px, 4.5vw, 72px)"
  mobile-gutter: "22px"
  section-desktop: "100px"
  section-tablet: "64px"
  section-mobile: "56px"
  control-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.red-dark}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    padding: "14px 22px"
  button-white-hover:
    backgroundColor: "{colors.white-hover}"
  text-link:
    textColor: "{colors.navy}"
    typography: "{typography.label}"
  contact-panel:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "32px 36px"
  project-tab:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    padding: "14px 8px"
  project-tab-selected:
    backgroundColor: "{colors.tab-selected}"
    textColor: "{colors.navy}"
---

# Design System: Superior Plumbing Services

## Overview

**Creative North Star: "The Neighborhood Trade Sign"**

The neighborhood trade sign is the visual anchor: white ground, deep navy lettering, true red action areas, and crisp rectangular photographs. The code-led build preserves the supplied logo and actual job assets, giving the business’s own identity and work the strongest visual presence.

Generous spacing separates dense, practical contact information from large headings and installation photographs. Flat color planes and thin rules organize the page; restrained transitions acknowledge interaction without competing with the work.

**Key Characteristics:**

- White, navy, and red drawn from the supplied identity.
- Self-hosted Geist with strong headings and compact practical labels.
- Rectangular photography, flat panels, and thin dividing rules.
- Visible contact routes and accessible native or progressively enhanced controls.

## Colors

The palette couples confident trade-sign colors with cool, quiet supporting neutrals. Frontmatter contains the source values; stylesheet custom properties are the implementation authority.

### Primary

- **Service Red** (`red`): booking buttons, selected heading words, and the closing contact section.
- **Deep Service Red** (`red-dark`): primary-button hover state.
- **Sign Navy** (`navy`): headings, primary text, contact panel, and preview bar.

### Neutral

- **Painted White** (`white`): main page ground, inverted text, photo captions, and the alternate button.
- **Cool Paper** (`paper`): portfolio section, logo backing, and tab strip.
- **Slate Copy** (`muted`): secondary prose, captions, and inactive project tabs.
- **Divider Gray** (`line`): header, footer, and accordion rules.
- **Pale Navy Ink** (`ink-soft`): supporting text on the navy panel.
- **White Hover**, **Selected Tab**, and **Tab Hover**: observed pale interaction surfaces, not additional brand accents.

The blue `focus` color is a keyboard focus affordance. It is not a decorative accent. Sidecar tonal ramps are synthesized preview aids; the shipped CSS uses only its explicit colors, not those ramps.

**The Identity First Rule.** Preserve the supplied logo and the navy/red/white relationship when extending the site.

## Typography

**Display and Body Font:** Geist, self-hosted from `/assets/fonts/geist.woff2`, with Arial and sans-serif fallbacks. The variable face supplies weights 100–900; the interface mainly uses 400, 550, 600, 650, 700, and 750.

The hierarchy uses size, weight, tight headline tracking, and whitespace rather than a second display family. Headings balance text; paragraph text remains looser and quieter.

- **Display:** the homepage heading uses the frontmatter display role; the desktop wide-screen override is 84px. Responsive sizes are described below.
- **Headline:** section headings use the fluid headline role. Contact and FAQ headings have smaller contextual sizes; the closing contact heading grows to 56px.
- **Title:** service titles use the title role; work captions use 21px at desktop with slightly looser tracking (-0.025em).
- **Body:** base text is 16px/1.6. Introductory and about prose often uses 15px/1.8, with 55ch maximums where implemented.
- **Label:** prominent links and buttons use the label role. Navigation uses 14px/550; small supporting descriptions use 11–14px. There is no uppercase eyebrow or monospace type system.

## Layout

A centered container caps at 1320px and subtracts two fluid page gutters from available width. Standard section padding uses the desktop, tablet, and mobile values in frontmatter. Columns share aligned outer edges; the layout does not use a universal boxed-card grid.

The homepage hero pairs a headline with a 300px description column, then a 34% contact panel with 66% photography. Within the photographic strip, the selected image and companion photo split 57%/43%. Services use a two-column 1fr/1.12fr layout; about and FAQ use 1fr/1.1fr. The work gallery uses 1.15fr/1fr/1fr, a 28px gap, and staggered vertical offsets of 42px and 84px. These are current surface compositions, not compulsory templates for every future page.

| Breakpoint | Observed behavior |
| --- | --- |
| At least 1500px | Hero heading becomes 84px; description column becomes 330px; hero image height becomes 446px. |
| At most 1100px | Navigation and booking control tighten; major content-column gaps become 7%; gallery images become 300px tall. |
| At most 800px | Menu toggle appears and header booking control hides. Hero introduction stacks, contact/photo split becomes 42%/58%, and companion photo hides. Services and FAQ become single-column. Gallery retains three columns with 240px images. About remains two-column. |
| At most 540px | Gutters become 22px. Contact panel and photography stack; project images are 355px tall. Gallery and about become single-column, gallery staggering clears, and footer/contact actions stack. |

The hero heading uses 5.5vw below 1100px, `clamp(44px, 7.4vw, 60px)` below 800px, and `clamp(36px, 9.35vw, 49px)` below 540px. The 404 view shares the same header, footer, buttons, and tokens; its two-column content becomes one column below 540px.

## Elevation & Depth

The implementation uses no box shadows. White, paper, navy, and red planes establish hierarchy, with thin rules and image overlap supplying local separation. Photo captions sit directly on imagery as opaque white rectangles. Do not reinterpret these flat surfaces as floating cards.

## Shapes

Panels, photographs, buttons, and captions have square corners. The only rounded shapes are small circular service-list separators and native circular geometry within SVG icons. Use thin one-pixel dividers; selected tabs use a three-pixel bottom border. Icons are inline outline SVGs, normally 22px with a 1.7px stroke and rounded stroke ends.

## Components

### Buttons and text links

Buttons are solid rectangular anchors with a minimum height of 52px, the frontmatter padding, and a 24px gap before an outline arrow. Red buttons invert to white text and darken on hover; white buttons use navy text and a pale hover surface. Background and color transition over 0.2s. The closing-section white button has a contextual minimum height of 60px. Text links remain unboxed with a 16px icon gap and turn red on hover.

Interactive links, buttons, summaries, and focusable panels use a three-pixel blue focus outline offset by six pixels. The skip link becomes visible when focused.

### Navigation

Desktop links use medium-weight compact text and no default underline. Hover turns them red; the current page is red with a two-pixel underline. At the tablet breakpoint, the Menu button controls a wrapping navigation row with `aria-expanded`. Escape closes the open menu and returns focus; following a navigation link closes it. Without JavaScript, the navigation links remain visible.

### Contact panel

A navy rectangle contains the service area, short heading, supporting copy, large phone link, and text/booking links. Supporting text uses pale navy ink. The desktop panel uses generous internal spacing; its contact link is pushed toward the lower edge with automatic top margin. At the smallest breakpoint, the panel spans the container above the selected project.

### Project selector

Three project tabs control paired photographs and captions using tab/tabpanel semantics. The selected tab receives a red bottom rule, navy text, and a pale filled background; inactive labels are muted. Arrow keys cycle, and Home/End select endpoints. Only the selected tab is in the sequential tab order. A 0.45s clipped image reveal uses `cubic-bezier(.16,1,.3,1)` when motion is permitted.

### Services and FAQ

Native details/summary rows provide disclosure behavior, separated by thin rules with a navy top rule on the group. The summary turns red on hover. A CSS-drawn plus changes to a minus through a 0.2s rotation when expanded. Service rows use larger title text; FAQ rows use 16px medium-weight text. Their paragraphs sit below the summary without nested cards.

### Work figures

Actual installation photographs use rectangular `object-fit: cover` crops, followed by a short title and smaller description. The desktop gallery is staggered; mobile clears the offsets and restores a simple reading sequence. Preserve meaningful alt text and project-specific captions when reusing this pattern.

### Motion and absent primitives

Reduced-motion preference disables transitions and animation and restores automatic scrolling. The site has no text fields, form validation, chip/tag controls, modals, or standalone card primitive; these have not been invented for this record.

## Do's and Don'ts

### Do:

- Do preserve the supplied logo and actual job photographs.
- Do use navy for primary text and red for action areas and deliberate emphasis.
- Do keep rectangular media and panels, thin rules, and generous section spacing.
- Do retain visible keyboard focus, semantic controls, and reduced-motion support.

### Don't:

- Don’t replace the actual installation photography with generic trade imagery.
- Don’t introduce rounded cards, floating shadows, or gradient surfaces into this established system.
- Don’t remove image descriptions or obscure contact actions when layouts stack.
- Don’t treat preview notices, project-caption labels, or the 404 numeral as a general decorative label system.
