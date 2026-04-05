# Homepage 2 — Dental Clinics Page: Development Plan

## Page Overview

| Field | Value |
|-------|-------|
| **Page Name** | Homepage 2 — Dental Clinics |
| **Route** | `/dental-clinics` |
| **Design Reference** | [alty.co/design](https://alty.co/design) (visual styling) |
| **Content Reference** | PDF: "www.reputation-experts.co.uk Dental Clinics" |
| **Architecture** | Clone existing section components into page-specific folder — **DO NOT modify existing codebase** |

---

## ⚠️ Key Principle

> **DO NOT modify any existing files.** All section components must be **cloned/copied** from the existing `packages/ui/src/sections/` into a new page-specific folder structure. This ensures Homepage 1 remains untouched while Homepage 2 gets its own independently customizable sections.

---

## Proposed File Structure

```
apps/web/src/app/dental-clinics/
├── page.tsx                          ← Main page assembling all sections
├── layout.tsx                        ← (optional) If dental page needs different header/footer variant
│
├── sections/                         ← All section components for this page (cloned + adapted)
│   ├── DentalHeroSection/
│   │   ├── DentalHeroSection.tsx
│   │   ├── DentalHeroSection.module.css
│   │   └── index.ts
│   │
│   ├── ProblemStatementSection/      ← ❌ NEW — does not exist in current codebase
│   │   ├── ProblemStatementSection.tsx
│   │   ├── ProblemStatementSection.module.css
│   │   └── index.ts
│   │
│   ├── DentalBenefitsGrid/           ← Cloned from KeyBenefitsSection
│   │   ├── DentalBenefitsGrid.tsx
│   │   └── index.ts
│   │
│   ├── DentalServicesSection/        ← Cloned from ServicesSection
│   │   ├── DentalServicesSection.tsx
│   │   └── index.ts
│   │
│   ├── DentalProcessSection/         ← Cloned from ProcessSection
│   │   ├── DentalProcessSection.tsx
│   │   ├── DentalProcessSection.module.css
│   │   └── index.ts
│   │
│   ├── IndustryAuthoritySection/     ← ❌ NEW — line graph/chart section
│   │   ├── IndustryAuthoritySection.tsx
│   │   ├── IndustryAuthoritySection.module.css
│   │   └── index.ts
│   │
│   ├── GoogleAIOverviewSection/      ← ❌ NEW — does not exist in current codebase
│   │   ├── GoogleAIOverviewSection.tsx
│   │   └── index.ts
│   │
│   ├── PlatformsMediaSection/        ← Cloned/adapted from AwardsStrip + ClientLogosMarquee
│   │   ├── PlatformsMediaSection.tsx
│   │   ├── PlatformsMediaSection.module.css
│   │   └── index.ts
│   │
│   ├── DentalCaseStudiesSection/     ← Cloned from CaseStudiesSection
│   │   ├── DentalCaseStudiesSection.tsx
│   │   └── index.ts
│   │
│   ├── DentalFAQSection/             ← Cloned from FAQSection
│   │   ├── DentalFAQSection.tsx
│   │   └── index.ts
│   │
│   └── DentalCTASection/             ← Cloned from CTASection
│       ├── DentalCTASection.tsx
│       └── index.ts
```

---

## Section-by-Section Breakdown

### Section Order (Top → Bottom from PDF)

| # | Section Name | Source | Status |
|---|-------------|--------|--------|
| 1 | Header | `organisms/Header` (already in layout) | ✅ Exists — may need nav item props update |
| 2 | Hero Section | Clone from `sections/HeroSection` | 🔄 Clone & Adapt |
| 3 | Problem Statement + Platform Pills | — | ❌ **BUILD NEW** |
| 4 | Benefits Grid — "Reputation Management for Dental Clinics" | Clone from `sections/KeyBenefitsSection` | 🔄 Clone & Adapt |
| 5 | Services — Dental services + Online Reputation Audit panel | Clone from `sections/ServicesSection` | 🔄 Clone & Adapt |
| 6 | Process — "Digital reputation management that covers every angle" | Clone from `sections/ProcessSection` | 🔄 Clone & Adapt |
| 7 | Industry Authority Graph | — | ❌ **BUILD NEW** |
| 8 | Google AI Overview | — | ❌ **BUILD NEW** |
| 9 | Platforms & Media Outlets | Clone from `sections/AwardsStrip` + `sections/ClientLogosMarquee` | 🔄 Clone & Merge & Adapt |
| 10 | Case Studies | Clone from `sections/CaseStudiesSection` | 🔄 Clone & Adapt |
| 11 | FAQ | Clone from `sections/FAQSection` | 🔄 Clone & Adapt |
| 12 | CTA — "Let's build a reputation your practice deserves." | Clone from `sections/CTASection` | 🔄 Clone & Adapt |
| 13 | Footer | `organisms/Footer` (already in layout) | ✅ Exists — may need content props |

---

## Detailed Section Specifications

---

### 1. Header (Already exists — no changes needed)

**Source:** `packages/ui/src/organisms/Header/Header.tsx`
**Status:** ✅ Already in `apps/web/src/app/layout.tsx`

The header is rendered globally in the layout. For the dental page, we may pass different nav items if the layout supports it. Based on the PDF screenshot, the header shows:
- Logo: "Reputation Experts" (same)
- Nav: Home, Services, Resources, Cases
- CTA: "Book a Call" (orange-red pill)

**Action:** If the dental page needs different nav items, create a `dental-clinics/layout.tsx` wrapper. Otherwise, the existing layout header works.

---

### 2. Dental Hero Section 🔄

**Clone from:** `packages/ui/src/sections/HeroSection/HeroSection.tsx` + `.module.css`

#### What's the same:
- Two-column layout (text left, media right)
- Light gray background (`#f2f2f2`)
- Headline + subtext + CTA button
- Rounded media card on right side

#### What changes:
- **Headline:** "We protect and grow Dental Clinics' online reputations."
- **Subtext:** Updated tagline about dental reputation management
- **CTA:** "Get Started" or equivalent dental-specific label
- **Image:** Dental clinic/practice photo (replace generic business image)
- **Video:** Optional dental-focused video (or keep image only)
- Minor copy tweaks (quote, subQuote, mediaCaption)

#### Content from PDF:
```
Headline: "We protect and grow Dental Clinics' online reputations."
Subtext: "Professional online reputation management built specifically for dental practices..."
CTA: "Get Started" / "Free Assessment"
Image: Dental clinic team/office photo
```

---

### 3. Problem Statement Section ❌ NEW

**Status:** Must be built from scratch — no equivalent in current codebase.

The closest existing component is `AboutTeaser`, but that is a **dark, two-column** layout with video. This section is a **light, centered** layout with platform pill badges. Different enough to warrant a new component.

#### Visual Layout (from PDF):
```
┌────────────────────────────────────────────────────────────────────────┐
│  (Light/white background)                                              │
│                                                                        │
│   For many UK dental practices, **poor reviews mean losing             │
│   £60,000 to £180,000+ per year** in lost revenue.                    │
│                                                                        │
│   [Paragraph of explanatory text about the impact of poor              │
│    online reviews on dental practices, how patients search             │
│    and make decisions based on reviews, etc.]                          │
│                                                                        │
│   ┌──────────────┐  ┌──────────────┐                                  │
│   │ Google Maps   │  │ Trust Pilot  │                                  │
│   └──────────────┘  └──────────────┘                                  │
│   ┌──────────────────┐  ┌──────────────┐                              │
│   │ Google AI Overview│  │  Facebook    │                              │
│   └──────────────────┘  └──────────────┘                              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

#### Content from PDF:
```
Heading: "For many UK dental practices, poor reviews mean losing £60,000 to £180,000+ per year in lost revenue."
- "poor reviews mean losing" and "£60,000 to £180,000+ per year" should be bold/highlighted
Body: Long paragraph explaining how reviews impact dental practices, patient trust, etc.
Platform Pills: Google Maps, Trust Pilot, Google AI Overview, Facebook
```

#### Component Props:
```typescript
interface ProblemStatementSectionProps {
  heading: string;          // Main statement with bold highlights
  body: string;             // Explanatory paragraph
  platforms: {
    name: string;
    icon?: string;          // Optional platform icon
  }[];
}
```

#### Design Specs:
- Background: White or very light gray (`#fafafa` / `#f5f5f3`)
- Centered text alignment
- Heading: Large serif or bold sans-serif, with bold/colored highlight on key stats
- Platform pills: Rounded bordered badges in a 2×2 grid or flex-wrap
- Section padding: Consistent with rest of design system (`py-20 lg:py-28`)

---

### 4. Dental Benefits Grid 🔄

**Clone from:** `packages/ui/src/sections/KeyBenefitsSection/KeyBenefitsSection.tsx`

#### What's the same:
- Light gray background (`#f2f2f2`)
- Grid of white cards with icon, title, description
- Responsive: 3-col → 2-col → 1-col

#### What changes:
- **Heading:** "Reputation Management for Dental Clinics"
- **Cards:** 6 dental-specific benefit cards (instead of current 7 generic ones)
- Card content is entirely dental-focused

#### Content from PDF (6 cards):
```
Row 1:
1. Review Monitoring & Alerts    - "Monitor all reviews across Google, NHS, Trust Pilot..."
2. Patient Engagement            - "Respond to patient feedback professionally..."
3. Google My Business            - "Optimise and manage your Google Business Profile..."

Row 2:
4. Search Result Management      - "Control what appears when patients search for your practice..."
5. Social Media Monitoring       - "Track and manage your practice's social media presence..."
6. Reputation Protection         - "Proactive measures to protect against fake reviews..."
```

#### Component Props (same interface as existing):
```typescript
interface DentalBenefitsGridProps {
  heading?: string;
  benefits: {
    icon?: string;
    title: string;
    description: string;
  }[];
}
```

---

### 5. Dental Services Section 🔄

**Clone from:** `packages/ui/src/sections/ServicesSection/ServicesSection.tsx`

#### What's the same:
- Dark inner card on light background
- Desktop: Left = clickable service list, Right = detail panel
- Mobile: Accordion layout
- Active service highlighted with description + bullets

#### What changes:
- **Heading:** "Services" (same label, but dental-specific service list)
- **Services:** Replace 7 generic services with dental-specific ones
- **Detail panel:** Shows "Online Reputation Audit" style content with dental focus

#### Content from PDF:
```
Services list (left side):
1. Dental Practice Reputation Audit
2. Review Response Management
3. Google Business Profile Optimisation
4. Patient Review Generation
5. Crisis & Complaint Management
6. Search Result Management
7. Social Media Reputation Monitoring

Detail panel (right side) shows for each:
- Service name
- Description paragraph
- Bullet points of what's included
- Optional CTA
```

---

### 6. Dental Process Section 🔄

**Clone from:** `packages/ui/src/sections/ProcessSection/ProcessSection.tsx` + `.module.css`

#### What's the same:
- Scroll-driven sticky section
- 3-column card grid with step badges
- Active step tracking based on scroll progress
- Same animation behavior (opacity, grayscale transitions)

#### What changes:
- **Heading:** "Digital reputation management that covers every angle"
- **Steps:** 3 dental-specific process steps (may keep similar structure)
- **Images:** Dental-themed step images

#### Content from PDF:
```
Step 1: "Comprehensive Practice Audit"
- Description about auditing the dental practice's online presence

Step 2: "Custom Strategy Development"
- Description about creating a tailored reputation plan for the practice

Step 3: "Implementation & Monitoring"
- Description about executing the plan and ongoing tracking
```

---

### 7. Industry Authority Graph Section ❌ NEW

**Status:** Must be built from scratch.

The existing `StatsSection` is a count-up number animation section (4 large numbers). This section is a **full line graph/chart** showing reputation metrics over 6 months — completely different component.

#### Visual Layout (from PDF):
```
┌────────────────────────────────────────────────────────────────────────┐
│  (Dark background #0A0A0A or #161616)                                  │
│                                                                        │
│   Industry Authority                                                   │
│   Based on 6 Months                                                    │
│                                                                        │
│   ┌──────────────────────────────────────────────────────────────┐    │
│   │                                                              │    │
│   │    ╱──────────╲                                              │    │
│   │   ╱            ╲──────╱╲                                     │    │
│   │  ╱                      ╲───────╱                            │    │
│   │ ╱                                                            │    │
│   │                                                              │    │
│   │  Jan    Feb    Mar    Apr    May    Jun                       │    │
│   │                                                              │    │
│   │  ● SEO Rankings    ● Comparisons                             │    │
│   │  ● Satisfaction    ● Conversion                              │    │
│   └──────────────────────────────────────────────────────────────┘    │
│                                                                        │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│   │ Local SEO │  │ Patient  │  │ Patient  │  │ Revenue  │            │
│   │ Rankings  │  │ Compar.  │  │ Satisf.  │  │ Conver.  │            │
│   │           │  │          │  │          │  │          │            │
│   │ Brief     │  │ Brief    │  │ Brief    │  │ Brief    │            │
│   │ desc.     │  │ desc.    │  │ desc.    │  │ desc.    │            │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
└────────────────────────────────────────────────────────────────────────┘
```

#### Component Complexity: **HIGH**
- Requires a charting solution (SVG-based recommended for design control)
- Options: Custom SVG paths, `recharts`, or `chart.js` (lightweight)
- Recommendation: **Custom SVG** for full design control matching alty.co aesthetic, OR `recharts` with custom styling
- Line chart with 4 data series, monthly X-axis, animated on scroll entry
- Below the chart: 4 metric summary cards

#### Component Props:
```typescript
interface IndustryAuthoritySectionProps {
  heading?: string;           // "Industry Authority"
  subheading?: string;        // "Based on 6 Months"
  chartData: {
    month: string;
    seoRankings: number;
    comparisons: number;
    satisfaction: number;
    conversion: number;
  }[];
  metrics: {
    title: string;
    description: string;
    color: string;            // Line color for the chart legend
  }[];
}
```

#### Design Specs:
- Background: Dark (`#0A0A0A` or `#161616`)
- Chart: Light/white grid lines at low opacity, colored lines for each metric
- Chart animation: Lines draw in from left on scroll enter (SVG `stroke-dashoffset` animation)
- Metric cards below: Dark cards with subtle border, matching design system cards
- Responsive: Chart scales down, cards go to 2×2 grid on mobile

---

### 8. Google AI Overview Section ❌ NEW

**Status:** Must be built from scratch — no equivalent exists.

#### Visual Layout (from PDF):
```
┌────────────────────────────────────────────────────────────────────────┐
│  (Light background)                                                    │
│                                                                        │
│   Google 'AI Overview'                                                 │
│                                                                        │
│   ┌──────────────────┐                                                │
│   │                   │    Google's AI Overview is changing how         │
│   │  [Illustration    │    patients find dental practices. When        │
│   │   or screenshot   │    someone searches for a dentist, Google      │
│   │   of Google AI    │    now shows AI-generated summaries that       │
│   │   Overview in     │    include review sentiment, star ratings,     │
│   │   action]         │    and practice details.                       │
│   │                   │                                                │
│   └──────────────────┘    This means your online reputation directly   │
│                            influences whether you appear in these      │
│                            AI-powered results — and how favourably     │
│                            you're presented to potential patients.     │
│                                                                        │
│   ── Platforms & Media Outlets ──                                      │
│   [Logo grid of platforms: Google, NHS, TrustPilot, etc.]              │
│                                                                        │
│   ── Media Partners ──                                                 │
│   [Logo strip: BBC, ITV, Sky News, etc.]                              │
└────────────────────────────────────────────────────────────────────────┘
```

**Note:** From the PDF, it appears the Google AI Overview section and the Platforms & Media section may flow together as one visual block, or be two closely connected sections. Screenshots will clarify exact boundaries.

#### Component Props:
```typescript
interface GoogleAIOverviewSectionProps {
  heading?: string;           // "Google 'AI Overview'"
  body: string;               // Explanatory paragraph
  image?: {
    src: string;
    alt: string;
  };
  // Optional sub-section for platforms
  platformsHeading?: string;
  platforms?: {
    name: string;
    logo: string;
  }[];
}
```

#### Design Specs:
- Background: Light (`#f5f5f3` or white)
- Two-column: Image/illustration left, text right (or vice-versa)
- Clean typography, body text at readable size
- Responsive: Stacks on mobile

---

### 9. Platforms & Media Outlets Section 🔄

**Clone from:** `packages/ui/src/sections/AwardsStrip/AwardsStrip.tsx` + `packages/ui/src/sections/ClientLogosMarquee/ClientLogosMarquee.tsx`

This is a **merged/combined** adaptation of two existing components.

#### What's the same from AwardsStrip:
- Grid layout for logos/badges
- Hover effects on media cards

#### What's the same from ClientLogosMarquee:
- Infinite horizontal scroll for media logos
- Grayscale → color on hover

#### What changes:
- **Sub-section 1: "Platforms & Media Outlets"** — Static grid of platform logos (Google, NHS, TrustPilot, Facebook, etc.)
- **Sub-section 2: "Media Partners"** — Scrolling strip of media TV logos (BBC, ITV, Sky News, etc.)

#### Content from PDF:
```
Platforms: Google, NHS Choices, TrustPilot, Facebook, Yelp, Doctify, etc.
Media: BBC, ITV, Sky News, The Guardian, Daily Mail, Forbes, etc.
```

---

### 10. Dental Case Studies Section 🔄

**Clone from:** `packages/ui/src/sections/CaseStudiesSection/CaseStudiesSection.tsx`

#### What's the same:
- Dark background (`#0A0A0A`)
- Stacked full-width case study cards
- Feature image with hover scale
- Headline + description + CTA link

#### What changes:
- **Content:** Dental clinic case studies instead of fintech ones
- **Tags:** Dental-specific tags (#dental, #reviews, #reputation)
- **Limit:** Show 2-3 featured dental case studies

#### Content from PDF:
```
Case Study 1: "How we transformed a London dental practice's online reputation"
Case Study 2: "How we helped a multi-site dental group manage reviews at scale"
(exact content TBD — screenshots needed)
```

---

### 11. Dental FAQ Section 🔄

**Clone from:** `packages/ui/src/sections/FAQSection/FAQSection.tsx`

#### What's the same:
- Light background (`#f5f5f3`)
- Accordion layout with `+` / `×` toggle
- Smooth max-height expand animation
- Border-top separators

#### What changes:
- **Questions:** Dental-specific FAQ items

#### Content from PDF:
```
Q1: How can Reputation Experts help protect my dental practice from negative online reviews?
Q2: Which review sites do you monitor for dental practices?
Q3: How long does it typically take to see results with your reputation management services?
Q4: Can you help if my practice has already received several negative reviews?
Q5: How does Reputation Experts help attract new patients through reputation management?
(exact Q&A content TBD — screenshots will clarify full answers)
```

---

### 12. Dental CTA Section 🔄

**Clone from:** `packages/ui/src/sections/CTASection/CTASection.tsx`

#### What's the same:
- Dark rounded card with background pattern
- Two-column: Headline left, form right
- Form: Name, Email, Message (500 char), privacy consent toggle, submit button
- Success state animation

#### What changes:
- **Headline:** "Let's build a reputation your practice deserves."
- **Form fields:** May add practice-specific fields (practice name, number of locations, etc.)
- Minor copy adjustments

---

### 13. Footer (Already exists — no changes needed)

**Source:** `packages/ui/src/organisms/Footer/Footer.tsx`
**Status:** ✅ Already in `apps/web/src/app/layout.tsx`

From the PDF, the footer shows:
- "Get in touch" heading
- Contact: Phone (0800 654 6009), Email
- London office address: 167-169 Great Portland Street, 5th Floor, London W1W 5PF
- Google Maps embed showing office location
- Nav links, social links, copyright

**Action:** The existing Footer should work. If dental page needs different contact details, use props or create a layout wrapper.

---

## Summary: Build Status

### ✅ Already Built — Use As-Is (2 sections)
| Section | Component | Notes |
|---------|-----------|-------|
| Header | `organisms/Header` | In layout.tsx, adjust nav props if needed |
| Footer | `organisms/Footer` | In layout.tsx, adjust content props if needed |

### 🔄 Clone & Adapt (8 sections)
| Section | Clone From | Key Changes |
|---------|-----------|-------------|
| Hero | `HeroSection` | Dental headline, image, CTA copy |
| Benefits Grid | `KeyBenefitsSection` | 6 dental cards, new heading |
| Services | `ServicesSection` | Dental service list + descriptions |
| Process | `ProcessSection` | Dental process steps, heading |
| Platforms & Media | `AwardsStrip` + `ClientLogosMarquee` | Dental platforms, media logos |
| Case Studies | `CaseStudiesSection` | Dental case studies content |
| FAQ | `FAQSection` | Dental-specific Q&A |
| CTA | `CTASection` | "Let's build a reputation your practice deserves." |

### ❌ Build New (3 sections)
| Section | Complexity | Notes |
|---------|-----------|-------|
| Problem Statement + Platform Pills | **Medium** | Centered text block + platform badge pills |
| Industry Authority Graph | **High** | Line chart with 4 data series, animated, dark bg — needs chart library or custom SVG |
| Google AI Overview | **Medium** | Two-column info section with illustration |

---

## Development Phases

### Phase 1 — Setup & Quick Wins (Est. 2-3 hours)
- [ ] Create `apps/web/src/app/dental-clinics/` route folder
- [ ] Create `page.tsx` with all section imports
- [ ] Clone `HeroSection` → `DentalHeroSection` with dental content
- [ ] Clone `KeyBenefitsSection` → `DentalBenefitsGrid` with 6 dental cards
- [ ] Clone `FAQSection` → `DentalFAQSection` with dental Q&A
- [ ] Clone `CTASection` → `DentalCTASection` with dental headline

### Phase 2 — Clone Complex Sections (Est. 3-4 hours)
- [ ] Clone `ServicesSection` → `DentalServicesSection` with dental services
- [ ] Clone `ProcessSection` → `DentalProcessSection` with dental steps
- [ ] Clone `CaseStudiesSection` → `DentalCaseStudiesSection` with dental case studies
- [ ] Clone & merge `AwardsStrip` + `ClientLogosMarquee` → `PlatformsMediaSection`

### Phase 3 — Build New Sections (Est. 4-6 hours)
- [ ] Build `ProblemStatementSection` from scratch
- [ ] Build `GoogleAIOverviewSection` from scratch
- [ ] Build `IndustryAuthoritySection` from scratch (incl. chart implementation)

### Phase 4 — Polish & QA (Est. 2-3 hours)
- [ ] Add dental-specific images to `public/images/dental/`
- [ ] Responsive testing across all breakpoints
- [ ] Animation/transition polish
- [ ] Verify section spacing and visual consistency
- [ ] Cross-browser testing

---

## Total Estimated Effort

| Category | Sections | Est. Hours |
|----------|----------|-----------|
| Clone & Adapt | 8 sections | 5-7 hours |
| Build New | 3 sections | 4-6 hours |
| Setup, Polish, QA | — | 3-4 hours |
| **Total** | **13 sections** | **12-17 hours** |

---

## Dependencies & Assets Needed

### Images (need from client/designer)
- [ ] Dental clinic hero image (team or modern dental office)
- [ ] Dental process step images (3 images)
- [ ] Dental case study feature images (2-3 images)
- [ ] Platform logos (Google, NHS, TrustPilot, Facebook, Yelp, Doctify, etc.)
- [ ] Media logos (BBC, ITV, Sky News, The Guardian, etc.)
- [ ] Google AI Overview illustration or screenshot
- [ ] Benefits section icons (6 icons for dental benefits)

### Content (need from client/copywriter)
- [ ] Full text for Problem Statement paragraph
- [ ] Full dental service descriptions and bullet points
- [ ] Full FAQ answers (5+ Q&A pairs)
- [ ] Case study details (client name, headline, description, results)
- [ ] Google AI Overview explanation text

### Libraries (may need to install)
- [ ] `recharts` or custom SVG for Industry Authority graph (evaluate during Phase 3)

---

## Screenshots Needed from Client

To finalize exact content and layout details, the following screenshots from the PDF need to be provided separately for clarity:

1. **Hero section** — Full width at high resolution
2. **Problem Statement** — Text content + platform pills
3. **Benefits Grid** — All 6 card titles and descriptions
4. **Services section** — Full service list + detail panel content
5. **Process section** — All 3 step cards with text
6. **Industry Authority Graph** — Chart details, legends, metric descriptions
7. **Google AI Overview** — Full text + illustration
8. **Platforms & Media** — All platform and media logos
9. **Case Studies** — Card content and images
10. **FAQ** — All questions and full answers
11. **CTA section** — Headline + form details
12. **Footer** — Contact details and layout

---

*Created: 5 April 2026*
*Last updated: 5 April 2026*
