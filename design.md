---
version: alpha
name: Brex
description: "Simplify expense management with Brex's finance platform. From company cards to banking, Brex helps you drive growth, automate processes, & earn more."
sourceUrl: "https://www.brex.com"

colors:
  primary: "#15191e"
  on-primary: "#ffffff"
  background: "#ffffff"
  surface: "#f3f3f7"
  text: "#000000"
  text-muted: "#15191e"
  accent: "#ff3d00"

typography:
  display:
    fontFamily: "inter, inter Fallback, sans-serif"
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.21
    letterSpacing: -0.48px
  heading:
    fontFamily: "inter, inter Fallback, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.21
    letterSpacing: -0.48px
  body:
    fontFamily: "inter, inter Fallback, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5

spacing:
  base: 8px
  scale: [8, 16, 24, 32, 48, 72, 80]

radius:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 12px

motion:
  duration-fast: 125ms
  duration-base: 125ms
  duration-slow: 125ms
  easing: "ease"

breakpoints: [1024px, 1680px]
---

## Rationale

Brex operates in high-stakes financial services, where trust and clarity are non-negotiable. The design system reflects this through a deliberately restrained palette anchored in near-black (`#15191e`) and pure white, with a single vibrant accent (`#ff5900`) reserved for calls-to-action. This constraint mirrors the precision required in fintech: every color choice carries meaning, nothing is decorative. The typography leans heavily on Inter at modest sizes (16–24px for primary content) with tight, negative letter-spacing that conveys efficiency and modernity without sacrificing legibility. Spacing follows a strict 8px grid with measured jumps (8, 16, 24, 32, 48, 72, 80), enforcing visual rhythm across a platform that must feel both approachable and enterprise-grade. Motion is uniformly brisk (125ms) and linear, reflecting a product philosophy of speed and directness—no flourishes, no delays.

The measured breakpoints (1024px and 1680px) suggest a platform designed primarily for desktop, with responsive considerations for large-format and tablet surfaces. This makes sense for a B2B audience managing expenses, approvals, and accounting across distributed teams. The light color mode and soft surface grays (`#f3f3f7`) prevent eye fatigue during extended periods of data entry and reporting, while the dark primary text ensures content remains scannable. Together, these choices position Brex as modern and efficient, not cold or sterile—the rounded corners (6–12px) and breathing space between elements humanize an otherwise utilitarian foundation.

## 1. Visual Theme & Atmosphere

Brex projects **corporate confidence with approachability**. The near-black primary (`#15191e`) paired with pure white backgrounds creates high contrast and instant readability—essential for financial data. The surface color (`#f3f3f7`, a barely-tinted gray) introduces subtle visual hierarchy without distraction; it's used for cards, panels, and secondary content areas that need to recede slightly. The accent orange (`#ff5900`) is assertive and warm, breaking the formal palette precisely when user action is required—"Get started," "See a demo," "Sign in." This restraint suggests confidence: Brex doesn't need decorative color to stand out.

The overall mood is **precision with pace**. Nothing is soft or playful; rounded corners are modest (6–12px), shadows are absent (measured as empty object), and spacing is mathematical. This aesthetic resonates with CFOs, controllers, and finance teams who value clarity over personality. Yet it avoids the coldness of purely monochromatic fintech—the reserved use of orange and the breathing space around content keep the interface human-scaled and inviting.

## 2. Color System

**Primary & Surface**
- `#15191e` (primary, near-black) serves as the dominant text and semantic color, establishing authority and ensuring every text element reads with force.
- `#ffffff` (background) is the canvas; its purity keeps complex financial layouts from feeling overwhelming.
- `#f3f3f7` (surface) is a micro-tinted gray, just 2–3% darker than white, used to create depth and separate content zones without harsh borders.

**Text Hierarchy**
- `#000000` (text) is pure black for maximum contrast on white; used for body copy and primary content.
- `#15191e` (text-muted) is functionally identical to primary and is likely used for secondary or tertiary information, preserving hierarchy through size and weight rather than color.

**Accent**
- `#ff5900` (accent, vibrant orange) is deployed exclusively on interactive elements (buttons, links, key CTAs). Its saturation and warmth cut through the neutral palette, making every affordance unmissable.

**No semantic colors** (warning red, success green) are defined in the token set, suggesting either:
- They are scoped elsewhere in the system (e.g., data visualization, status badges).
- The platform relies on text labels and iconography to convey status rather than color alone.

This restraint is intentional: fintech requires accessibility and clarity, and semantic meaning via color alone is risky.

## 3. Typography

All text uses **Inter**, a humanist sans-serif optimized for screen readability and narrow letter-spacing. The measured values show aggressive kerning (−0.48px on display and heading levels), which tightens word forms and conveys motion and efficiency. This is a deliberate choice: loosely spaced type feels corporate and slow; tight spacing feels modern and purposeful.

**Three-tier hierarchy:**
- **Display** (24px, 500 weight, 1.21 line-height): Large hero statements like "Finance built for speed and control." Medium weight (not bold) prevents heaviness at scale.
- **Heading** (20px, 600 weight, 1.21 line-height): Section titles and feature callouts. 600 weight is decisive without being aggressive; line-height matches display for visual cohesion.
- **Body** (16px, 400 weight, 1.5 line-height): Primary content, CTAs, labels. 1.5 line-height (24px) provides generous breathing room for prose and reduces cognitive load during extended reading.

**Rationale:** The tight line-height on headings (1.21) pairs with tight letter-spacing to create compact, scannable chunks; the looser body line-height (1.5) makes paragraph text approachable and reduces reader fatigue. 16px is deliberate—large enough to read without strain on mobile, but not so large that it reads as informal or oversized.

## 4. Components & Patterns

### Buttons & CTAs
Primary CTAs use the accent orange (`#ff5900`) on a transparent or white background, with text in the accent color itself. This ensures they dominate the visual hierarchy. Secondary or tertiary actions likely use the primary color (`#15191e`) on the surface background (`#f3f3f7`).

**Button corners:** Rounded at 8–12px (md–xl radius), striking a balance between modern and approachable. Not tight (like 2–4px), not loose (like 16px+).

### Cards & Surfaces
Content is organized into card-like regions using the surface color (`#f3f3f7`). Corners are rounded at 8–12px; no drop shadows are defined, so separation relies on color contrast and spacing.

### Navigation & Structure
Given two measured breakpoints (1024px and 1680px), the layout likely shifts from a mobile-first single column to a multi-column desktop view. The primary color serves as the background for nav headers or dark-mode sections; the accent orange highlights active states or important links.

### Forms & Data Entry
Input fields likely inherit the surface background with a 6–8px border radius and a subtle border in the primary color. Focus states should use the accent orange for visibility.

## 5. Spacing & Layout

The 8px base grid is enforced throughout:
- **Scale:** [8, 16, 24, 32, 48, 72, 80] — each a multiple or meaningful jump from 8px.
- **Padding/Margins:** Content typically breathes with 24px (3 units) or 32px (4 units) on desktop, reducing to 16px (2 units) on tablet/mobile.
- **Gap between elements:** 16px (2 units) for related items, 32px (4 units) for section breaks, 48px+ (6–10 units) for major layout divisions.

**Rationale:** This constraint prevents the layout from feeling scattered or ad-hoc. A strict grid makes it easier to scan financial dashboards, align tables, and maintain visual rhythm across complex data. The larger jumps (48, 72, 80) are reserved for major breaks, ensuring there's clear hierarchy even in dense layouts.

### Breakpoints
- **1024px:** Likely a tablet / small desktop threshold; layout may shift from single-column to two-column or switch to a sidebar nav.
- **1680px:** Large desktop or external monitor; may unlock a three-column layout or expand content areas to use available screen real estate.

No mobile breakpoint is explicitly measured, but responsive design is almost certainly present below 1024px using the same 8px grid and spacing scale.

## 6. Motion & Interaction

All motion uses a uniform duration (**125ms**) and **ease** easing function, creating a fast, predictable interaction model.

- **Hover states:** Buttons and links likely shift color (e.g., orange → darker orange) or opacity (e.g., 100% → 90%) within 125ms.
- **Focus states:** Following accessibility standards, focus indicators should be 2px solid in the accent color with a 2px offset from the element edge (not defined in tokens but required for WCAG compliance).
- **Transitions:** Modals, dropdowns, and slide-outs enter/exit briskly without easing curves; this reinforces the "speed" positioning. No bounce, no delay, no delight—just direct and fast.
- **Loading states:** Likely use a simple spinner or progress bar, tinted in the accent orange.

The absence of a dedicated "slow" or "fast" duration variant suggests motion is not heavily used; interactions are snappy and transactional rather than cinematic. This aligns with a B2B product where efficiency is valued over delight.

## Accessibility

### Contrast Ratios

**Primary text (#000000) on white background (#ffffff):**
- Contrast ratio: **21:1** (pure black on pure white)
- **WCAG AA:** ✓ Exceeds 4.5:1 requirement with massive margin
- **WCAG AAA:** ✓ Exceeds 7:1 requirement

**Primary text (#000000) on surface (#f3f3f7):**
- Estimated contrast ratio: **18:1** (near-pure black on near-white)
- **WCAG AA:** ✓ Well above 4.5:1
- **WCAG AAA:** ✓ Well above 7:1

**Accent orange (#ff5900) on white background (#ffffff):**
- Estimated contrast ratio: **6:1**
- **WCAG AA:** ✓ Meets 4.5:1 for normal text; adequate for UI components
- **WCAG AAA:** ✗ Falls short of 7:1; acceptable for large text or UI controls only

**Recommendation:** Ensure orange text is used only for buttons, links, and UI elements, never for body text. If orange is used for small text, validate against actual pixel measurements to confirm it meets AA.

### Minimum Requirements

- **Touch target size:** 44×44px minimum for any interactive element (buttons, links, icon buttons). Given the 16px body text and likely padding of 16–24px, buttons should naturally exceed this.
- **Focus indicator:** 2px solid outline in the accent orange (`#ff5900`), positioned 2px outside the element boundary. This ensures keyboard navigation is always visible.
- **Color-only affordance:** Never rely on orange alone to convey meaning (e.g., a red error state must also include an icon or text label). Support users with color blindness.
- **Semantic HTML & ARIA:** Use proper heading hierarchy (h1–h6 in sequence), label form inputs explicitly, and mark interactive regions with `role="button"` or `role="link"` as needed.
- **Motion:** The 125ms transition duration is accessible; no motion is slower than 200ms (which can trigger vestibular issues in some users).