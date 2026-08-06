# Implementation Plan - Auxosure Modern B2B SaaS Landing Page

Build a high-converting, modern, minimalist B2B SaaS landing page for **Auxosure** (Product: **Auxo**), an AI-driven voice partner for insurance brokerages and underwriters. The design combines high-trust B2B aesthetics (inspired by Sierra AI and Vercel) with the brand identity from `Auxosure Logo Deck.dc (1).html` (Midnight Indigo `#2A2550`, Signal Coral `#FF6B57`, Fog `#F1EFFA`).

## User Review Required

> [!NOTE]
> **Branding & Color Scheme**: The landing page utilizes the exact brand identity from `Auxosure Logo Deck.dc (1).html`: Midnight Indigo (`#2A2550`), Signal Coral (`#FF6B57`), Fog (`#F1EFFA`), alongside deep charcoal background accents (`#0D0F12` / `#14121F`) and ultra-clean bento pastel cards.
> 
> **Interactive Hero Visual & Voice AI Player**: An interactive simulated AI Voice partner experience will be embedded directly in the hero section. Visitors can press Play to hear synthesized voice interaction, watch live audio waveforms, and inspect real-time call transcription.

---

## Proposed Changes

### Core Web Application (`web/`)

#### [MODIFY] [index.html](file:///Users/askmeajoke/Desktop/GrowSurel/web/index.html)
- Update page title to `Auxosure | AI Voice Partner for Insurance Brokerages & Underwriters`.
- Load Google Fonts (`Manrope`, `Inter`, `Plus Jakarta Sans`) for display headlines and body copy.

#### [MODIFY] [src/index.css](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/index.css)
- Implement global CSS design tokens:
  - Colors: `#2A2550` (Midnight Indigo), `#FF6B57` (Signal Coral), `#F1EFFA` (Fog), `#0D0F12` (Dark Charcoal), `#FFFFFF`.
  - Bento Tinted Accents:
    - Card 1 (LTV): Soft Muted Green (`#E8F5E9` / `#0F291E` dark gradient)
    - Card 2 (Channels): Soft Muted Blue (`#E3F2FD` / `#0E2338` dark gradient)
    - Card 3 (Operations): Soft Muted Purple (`#F3E5F5` / `#1D142A` dark gradient)
    - Card 4 (Bandwidth): Soft Muted Orange (`#FFF3E0` / `#291A0E` dark gradient)
- Keyframe animations: `@keyframes x-bounce` and `@keyframes skid-s1 / s2 / s3` for the animated Auxosure logo mark.
- Glassmorphic styling for floating oval header navigation, card borders (`border-radius: 16px` to `24px`), backdrop filters, and subtle glow effects.

#### [NEW] [src/components/AnimatedLogo.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/AnimatedLogo.jsx)
- SVG animated logo component based on `Auxosure Logo Deck.dc (1).html`:
  - `a` in Signal Coral (`#FF6B57`).
  - `u` in primary theme text color.
  - `x` as custom bouncing X-arrow SVG (`x-bounce` keyframe).
  - `osure` lettermark.
  - Skid marks SVG element with cascading `skid-s1`, `skid-s2`, `skid-s3` opacity animations.

#### [NEW] [src/components/OvalHeaderNav.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/OvalHeaderNav.jsx)
- Floating oval/pill header nav bar centered at top with glassmorphic backdrop filter.
- Incorporates `AnimatedLogo`, navigation links (`Why Auxosure`, `Bento Value`, `Voice Demo`, `ROI Calculator`, `Integrations`), and primary CTA button (`[Request a Demo]`).

#### [NEW] [src/components/HeroSection.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/HeroSection.jsx)
- Top Pill Tag: `• Meet Auxosure`
- Headline (H1): **Standout insurance experiences. Stronger portfolio growth.**
- Sub-Headline: "Empower your brokerage or underwriting team with intelligent voice AI that handles manual workflows, unifies communication channels, and accommodates more clients at scale."
- Action Buttons: `[Request a Demo]` (Primary) & `[Learn More about Auxo]` (Secondary).
- Interactive Voice Player Mockup: Live Web Audio / synthesized audio player with animated frequency bars, real-time speech transcription, active caller badge, and scenario switcher ("Commercial Renewal", "FNOL Intake", "Quoting Triage").

#### [NEW] [src/components/BentoGrid.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/BentoGrid.jsx)
- Section Tag: `• Why Auxosure`
- 4-box asymmetric layout (Row 1: Full-width Card 1. Row 2: 3 equal-width Cards 2, 3, 4).
- **Card 1 (LTV - Soft Green Accent)**:
  - "Increase the lifetime value of your policyholders."
  - Floating interactive conversation bubble: *"Hi Nicholas! Your commercial policy is up for renewal. I’ve pre-filled the application with your current details. Ready to proceed?"* with interactive choice buttons.
- **Card 2 (Channels - Soft Blue Accent)**:
  - "Unify your communication channels."
  - Central Auxo AI hub connecting to Voice, SMS, Email, and WhatsApp nodes with animated data pulses.
- **Card 3 (Operations - Soft Purple Accent)**:
  - "Automate routine operational tasks."
  - Visual stacked queue of manual tasks (ACORD intake, Loss Runs, Quoting Triage) flowing into automated checkmark processing pipeline.
- **Card 4 (Bandwidth - Soft Orange Accent)**:
  - "Increase bandwidth for more clients."
  - Dynamic interactive SVG chart displaying exponentially growing client capacity while keeping operational overhead flat.

#### [NEW] [src/components/InteractiveVoicePlayground.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/InteractiveVoicePlayground.jsx)
- Interactive voice scenario testing tool allowing visitors to simulate an incoming insurance call with Auxo.

#### [NEW] [src/components/RoiCalculator.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/RoiCalculator.jsx)
- Interactive slider component for brokerage volume & team size, dynamically showing hours saved, capacity expansion %, and estimated bottom-line growth.

#### [NEW] [src/components/DemoModal.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/components/DemoModal.jsx)
- Modern modal for requesting a demo or exploring Auxo documentation with form validation and success confirmation state.

#### [MODIFY] [src/App.jsx](file:///Users/askmeajoke/Desktop/GrowSurel/web/src/App.jsx)
- Integrate floating Oval Nav, Hero Section, Bento Grid, Voice Playground, ROI Calculator, Integration Marquee, and Footer.

---

## Verification Plan

### Automated Tests
- Run `npm run build` inside `web/` directory to ensure clean React/Vite compilation without TypeScript/JSX syntax errors.
- Run `npm run dev` to start dev server and test local execution.

### Manual Verification
- Verify responsiveness across mobile, tablet, and desktop viewports.
- Test interactive elements:
  - Floating oval header sticky scroll transition.
  - Animated Auxosure Logo bounces & skid mark animations.
  - Hero interactive voice player (audio visualizer & scenario toggling).
  - Bento grid card overlays (interactive renewal prompt, channel node hover states, operational task pipeline, SVG capacity chart).
  - Demo Request Modal opening and closing.
