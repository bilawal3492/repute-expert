# Website Structure & Rebuild Specification
## Project: Reputation Experts
### Reference Site: [alty.co](https://alty.co) | Figma (Layout Reference): [Reputation Experts](https://www.figma.com/design/xNrBCtDPyhZDc1cBgfGD2B/Reputation-Experts?node-id=1-103&t=h83hBY6lQDxD6m61-1)

---

## ⚠️ Design Source Clarification

| Source | Purpose |
|--------|---------|
| **Figma File** | Section layout reference only — defines what sections appear on the new website and their arrangement |
| **alty.co (reference site)** | Visual design source of truth — all colors, typography, spacing, component styles, animations, hover effects, and imagery are taken directly from this live site |

The reference site (alty.co) is built on **Next.js + Builder.io** (confirmed from `cdn.builder.io` image CDN). Our rebuild uses the same design language with a superior multi-site architecture.

---

## 0. Architecture Overview: Multi-Site Component System

### Philosophy
> Build once, deploy many. Every component is standalone, CMS-driven, and reusable across unlimited websites.

### Monorepo Structure (Turborepo + pnpm workspaces)

```
repute-expert/                    ← Root monorepo
├── apps/
│   ├── web/                      ← Reputation Experts website (Next.js)
│   ├── studio/                   ← Sanity CMS admin panel
│   └── site-b/                   ← Future website (reuses same packages)
│
├── packages/
│   ├── ui/                       ← Shared component library (publishable npm pkg)
│   │   ├── src/
│   │   │   ├── atoms/            ← Button, Badge, Icon, Tag, Avatar, Chip
│   │   │   ├── molecules/        ← Card, TestimonialCard, ServiceCard, BlogCard, StatItem
│   │   │   ├── organisms/        ← Header, Footer, HeroSection, etc.
│   │   │   ├── sections/         ← Full page sections (each independently usable)
│   │   │   └── index.ts          ← Barrel export
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── sanity-schemas/           ← CMS schemas shared across all sites
│   │   ├── src/
│   │   │   ├── documents/        ← page, post, caseStudy, testimonial, etc.
│   │   │   ├── objects/          ← hero, section, mediaItem, etc.
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── config/                   ← Shared ESLint, Tailwind, TypeScript configs
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

### Component File Structure (per component)

```
packages/ui/src/organisms/HeroSection/
├── HeroSection.tsx               ← Main component
├── HeroSection.types.ts          ← TypeScript props interface
├── HeroSection.module.css        ← Scoped CSS (animations, complex styles)
├── HeroSection.stories.tsx       ← Storybook story
├── HeroSection.test.tsx          ← Unit tests
└── index.ts                      ← Re-export
```

---

## 1. CMS & Admin Panel Strategy

### Problem
The site contains many videos, text blocks, and media that need to be updated by non-technical admins — across multiple websites — without code changes.

### Solution: Sanity CMS + Mux Video

```
┌─────────────────────────────────────────────────────────────┐
│                   ADMIN PANEL (Sanity Studio)               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Pages       │  │  Media       │  │  Site Settings   │  │
│  │  - Homepage  │  │  - Videos    │  │  - Logo          │  │
│  │  - About     │  │  - Images    │  │  - Nav links     │  │
│  │  - Works     │  │  - Documents │  │  - Footer copy   │  │
│  │  - Blog      │  │              │  │  - Social links  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                    Sanity Content Lake API
                    (GROQ / REST / CDN)
                              │
              ┌───────────────┼───────────────┐
              │               │               │
         Site A (web)     Site B        Site C ...
         (Next.js)        (Next.js)     (Next.js)
```

### Why Sanity CMS

| Feature | Benefit |
|---------|---------|
| **Sanity Studio** | Beautiful, customizable admin panel — non-developers can edit everything |
| **Multi-dataset** | One CMS, separate datasets per site (or shared + overrides) |
| **GROQ queries** | Fetch only what you need, with deep joins |
| **Portable Text** | Rich text that maps to React components |
| **Real-time** | Live preview of content changes before publishing |
| **Image CDN** | Sanity's own CDN with on-the-fly resizing/WebP conversion |
| **Video via Mux** | Native Mux plugin → upload video in admin, get adaptive streaming |
| **TypeScript-first** | Auto-generated TypeScript types from schemas |
| **Free tier** | 3 users, 10GB bandwidth — sufficient for launch |

### Video Management: Mux + Sanity

```
Admin Panel (Sanity Studio)
    └── Upload video file (MP4/MOV)
             │
             ▼
         Mux API (video processing)
         - Transcodes to multiple qualities (480p/720p/1080p/4K)
         - Generates adaptive HLS stream
         - Creates animated GIF thumbnail
         - Provides poster image URL
             │
             ▼
    Stored as Mux Asset ID in Sanity
             │
             ▼
    Next.js Component fetches asset ID
             │
             ▼
    <MuxPlayer> or <video> with Mux URL
    (Adaptive streaming, lazy load, autoplay muted)
```

**Admin can change any video by:**
1. Opening Sanity Studio (`/studio`)
2. Finding the page/section
3. Clicking the video field → uploading a new file
4. Publishing → site auto-updates via ISR (no redeploy needed)

### CMS Document Schemas

```typescript
// Key Sanity document types

siteSettings          ← Logo, nav, footer, social links, contact emails
homepage              ← Ordered array of section blocks
page                  ← Generic page builder (about, services, etc.)
caseStudy             ← Works/portfolio entries
blogPost              ← Blog articles
testimonial           ← Client testimonials (reused across pages)
teamMember            ← Team photos, names, roles
awardBadge            ← Award images + external URLs
clientLogo            ← Client/partner logo + link
jobPosting            ← Open positions (careers page)
faqItem               ← FAQ questions + answers
```

### Section Block Types (for page builder)

```typescript
// Each page = array of these blocks (admin drags to reorder)

heroBlock             ← headline, subheading, CTA, backgroundVideo, backgroundImage
logoMarqueeBlock      ← title, logos[], speed
statsBlock            ← stats[] { number, suffix, label }
servicesBlock         ← heading, tabs[] { label, services[] }
caseStudiesBlock      ← heading, selectedWorks[], ctaLink
aboutTeaserBlock      ← quote, body, ctaText, ctaLink
testimonialsBlock     ← heading, testimonials[]
awardsBlock           ← heading, awards[], recognitionBadges[]
newsBlock             ← heading, newsItems[] { source, title, url, image }
faqBlock              ← heading, activeTab, items[]
ctaBlock              ← headline, body, ctaText, ctaLink, backgroundVariant
videoBlock            ← muxAsset, caption, autoplay, loop
```

---

## 2. Global Components

### 2.1 `<Header />` Component

**Visual Reference:** alty.co header — sticky top bar, dark/transparent background, white text

#### Desktop Header
```
┌────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                        [Contact us]  [Menu ☰]  │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- **Position:** `position: fixed; top: 0; width: 100%; z-index: 100`
- **Background:** Transparent on top of page → transitions to dark/frosted on scroll (`backdrop-filter: blur(12px)` + dark background)
- **Height:** `~72px` desktop, `~60px` mobile
- **Logo:** SVG, links to `/`, white version always (dark bg)
- **"Contact us" button:** Pill-shaped CTA, outlined style (`border: 1px solid rgba(255,255,255,0.4)`, white text, hover → fill white + dark text)
- **"Menu" label + icon:** Text label "Menu" beside hamburger `☰`, white, click → opens nav overlay
- **Scroll behavior:** `scrollY > 10` → add `backdrop-filter` + `background: rgba(0,0,0,0.8)`
- **Transition:** `200ms ease` on background change

#### Mobile Header (`< 768px`)
```
┌────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                              [Contact us]  [☰]                 │
└────────────────────────────────────────────────────────────────────────┘
```
- Same structure, "Menu" text label hidden on mobile (icon only)
- "Contact us" button scales down to smaller padding

#### Navigation Overlay (Menu Open State)
```
┌────────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                              [✕ Close]         │
│                                                                        │
│  About us                                                              │
│  Works                                                                 │
│  Careers                                                               │
│  Blog                                                                  │
│  More services ▾                                                       │
│    └─ Design                                                           │
│    └─ Engineering                                                      │
│                                                                        │
│  [Facebook] [Dribbble] [LinkedIn] [Instagram]                          │
└────────────────────────────────────────────────────────────────────────┘
```
- **Full-screen dark overlay** or large slide-in drawer
- Animation: `translateY(-100%)` → `translateY(0)` or `opacity: 0` → `opacity: 1`, `400ms ease-out`
- Nav links: Very large font (48–64px on desktop, 32–40px mobile), fade-in stagger per link
- Close button replaces hamburger in same position
- Social icons at bottom of overlay
- "More services" expands inline to show sub-items

#### Header CMS Fields (via `siteSettings` schema)
```typescript
{
  logo: { image, alt, width, height },
  ctaLabel: string,           // "Contact us"
  ctaLink: string,            // "/contact-us"
  navItems: [
    { label: string, href: string, children?: [{ label, href }] }
  ],
  socialLinks: [
    { platform: 'facebook'|'dribbble'|'linkedin'|'instagram', url: string }
  ]
}
```

#### Header Component Props (TypeScript)
```typescript
interface HeaderProps {
  logo: ImageAsset;
  ctaLabel: string;
  ctaLink: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  transparent?: boolean;       // default: true (auto darkens on scroll)
}
```

---

### 2.2 `<Footer />` Component

**Visual Reference:** alty.co footer — dark near-black background, multi-column layout

#### Layout (Desktop)
```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  [LOGO]      About us   Works   Careers   Blog   More services ▾       │
│                                                                        │
│  [Facebook] [Dribbble] [LinkedIn] [Instagram]                          │
│                                                                        │
│  © Company, Inc. 2026 · All rights reserved                            │
│  USA Office: 8th The Green Suite 7737, Dover, DE 19901                 │
│  Portugal Office: Estr. Malveira da Serra 920, 2750-834 Cascais        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

#### Layout (Mobile)
- Logo centered or left
- Nav links stacked vertically
- Social icons row
- Copyright + addresses stacked

**Specs:**
- Background: `#0A0A0A` or same as page background
- Border top: `1px solid rgba(255,255,255,0.08)`
- "More services" expands on click (accordion)
- Address text: small, muted color
- Copyright: same small muted style

#### Footer CMS Fields
```typescript
{
  copyright: string,                    // "© Company, Inc. 2026 · All rights reserved"
  offices: [
    { country: string, flag: string, address: string }
  ],
  navItems: NavItem[],                  // same as header (from siteSettings)
  socialLinks: SocialLink[],
  moreServicesLinks: [{ label, href }]
}
```

---

### 2.3 `<CookieBanner />` Component

**Position:** Fixed bottom bar, `z-index: 200`

```
┌─────────────────────────────────────────────────────────────────────┐
│  🥠 We use cookies · We use cookies to enhance your browsing        │
│  experience. Check Privacy Policy for more information.             │
│                                               [Accept]  [Decline]  │
└─────────────────────────────────────────────────────────────────────┘
```

- Persists via `localStorage` key `cookie_consent`
- Slide-up animation from bottom on first visit
- Privacy Policy link → `/privacy-notice`
- CMS fields: `message`, `privacyPolicyLink`, `acceptLabel`, `declineLabel`

---

## 3. Homepage: Section-by-Section Component Map

### Homepage Component Order

```
<Header />                          ← Global (same on every page)
<HeroSection />                     ← Homepage
<ClientLogosMarquee />              ← Reusable
<StatsSection />                    ← Homepage
<ServicesSection />                 ← Reusable (Home + Design + Services pages)
<CaseStudiesSection />              ← Reusable (Home + Works pages)
<AboutTeaser />                     ← Homepage (sourced from About page)
<TestimonialsSection />             ← Reusable (all pages)
<AwardsStrip />                     ← Reusable (all pages)
<NewsSection />                     ← Homepage
<FAQSection />                      ← Reusable (Home + Design + Services pages)
<CTASection />                      ← Reusable (every page, pre-footer)
<Footer />                          ← Global (same on every page)
<CookieBanner />                    ← Global
```

---

### Section 1: `<HeroSection />`

**Visual Reference:** alty.co homepage hero
**Used on:** Homepage, Design page, Careers page (variant prop controls layout)

#### Visual Layout (Desktop)
```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   [Small badge/tag: "Award-winning design studio"]                     │
│                                                                        │
│   From value proposition design to UX/UI                              │
│   design and mobile app development, we                               │
│   uncover unique concepts and game-changing              [VIDEO /      │
│   features to guide you through complexities,             VISUAL]      │
│   eliminate uncertainty, and unlock                                    │
│   unstoppable growth.                                                  │
│                                                                        │
│   [Contact us ▸]                                                       │
│                                                                        │
│   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│   [▼ Scroll indicator]                                                 │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- **Height:** `100vh` (full viewport)
- **Background:** Dark (`#0A0A0A`) with optional full-bleed background video (muted, loop, autoplay)
- **Text:** White, very large headline
- **CTA Button:** Pill-shaped, primary style
- **Video/Visual:** Right side on desktop, full-bleed behind text with dark overlay on mobile
- **Animation:** Headline words fade/slide up with stagger, `600ms`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Scroll Indicator:** Animated bouncing arrow at bottom center

#### CMS Fields
```typescript
interface HeroSectionProps {
  badge?: string;                   // "Award-winning design studio"
  headline: string;                 // Main large heading (supports line breaks)
  subheading?: string;              // Optional supporting paragraph
  ctaLabel: string;                 // "Contact us"
  ctaLink: string;                  // "/contact-us"
  backgroundVideo?: MuxAsset;       // Mux video (muted, loop, autoplay) — editable in admin
  backgroundImage?: ImageAsset;     // Fallback image if no video
  backgroundVideoFallback?: ImageAsset; // Poster frame for video
  variant?: 'homepage' | 'page';   // Controls height, layout variant
}
```

---

### Section 2: `<ClientLogosMarquee />`

**Visual Reference:** alty.co home & design pages
**Used on:** Homepage, Design page, About page

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  Clients                                                               │
│  ←──── [Monobank] [Visa] [ABA Bank] [MAIB] [Oschadbank] ────────────→ │
│         [Halyk] [TBC Bank] [Mastercard] [Space.ge] [KapitalBank]       │
│                                                                        │
│  Partners                                                              │
│  ←──── [Partner1] [Partner2] [Partner3] [Partner4] ─────────────────→ │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Infinite CSS marquee (`@keyframes scroll-left`) — no JS required
- Second row optionally runs in reverse direction
- Logo images: `filter: grayscale(1); opacity: 0.6` → full color + `opacity: 1` on hover
- Each logo: `height: 28–36px`, `width: auto`, `margin: 0 32px`
- Logos duplicated in DOM for seamless loop
- `animation-play-state: paused` on `<ul>:hover`
- Speed: `30s linear infinite` (CMS-configurable)

#### CMS Fields
```typescript
interface ClientLogosMarqueeProps {
  clientsLabel?: string;            // "Clients"
  partnersLabel?: string;           // "Partners"
  clientLogos: {
    name: string;
    logo: ImageAsset;
    url?: string;
    ariaLabel: string;
  }[];
  partnerLogos?: { name: string; logo: ImageAsset; url?: string }[];
  speed?: number;                   // Duration in seconds (default: 30)
  showPartners?: boolean;
}
```

---

### Section 3: `<StatsSection />`

**Visual Reference:** alty.co homepage animated counters
**Used on:** Homepage

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│       50+              15+              30M+            100+           │
│    Clients           Years           Users Served      Projects        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Count-up animation on scroll enter (Intersection Observer + requestAnimationFrame)
- Duration: `1500–2000ms`, `ease-out` easing
- Large bold numbers (`font-size: clamp(40px, 5vw, 72px)`)
- Label below: small, muted, regular weight
- Layout: 4-column row on desktop, 2×2 on tablet/mobile

#### CMS Fields
```typescript
interface StatsSectionProps {
  stats: {
    number: number;
    prefix?: string;              // "$"
    suffix?: string;              // "+", "M+", "x"
    label: string;
  }[];
}
```

---

### Section 4: `<ServicesSection />`

**Visual Reference:** alty.co homepage + design page "Services" tabs
**Used on:** Homepage, Design page, Services page

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  Services                                                              │
│                                                                        │
│  [Alty General]  [Design]  [Engineering]                               │
│  ─────────────                                                         │
│                                                                        │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │
│  │  [Icon]          │  │  [Icon]          │  │  [Icon]          │     │
│  │  Innovation      │  │  Digital Trans.  │  │  R&D             │     │
│  │  Services        │  │                  │  │                  │     │
│  │  Description     │  │  Description     │  │  Description     │     │
│  │  • Point 1       │  │  • Point 1       │  │  • Point 1       │     │
│  │  • Point 2       │  │  • Point 2       │  │  • Point 2       │     │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘     │
│                                                                        │
│  ─── Key Benefits ──────────────────────────────────────────────────  │
│  Innovative Solutions · Behavioral Science · Scalability · Security   │
└────────────────────────────────────────────────────────────────────────┘
```

**Tab 1 — Alty General:** Innovation Services, Digital Transformation, Research & Development, Product Design (→ `/design`), Engineering Services, Solution Architecture, Services Integration

**Tab 2 — Design:** Design Discovery, Design Audit, Behavioural Science Analysis, Value Proposition Design, Concept Creation, Wireframing & UX Architecture, UX/UI Design, CX Design, Visual Design, Design Documentation & Support

**Tab 3 — Engineering:** Mobile App Development, Web Development, Backend Development, Deployment Services (Cloud, DevOps), Solution Architecture, Services Integration

**Key Benefits:** Innovative Solutions, Behavioral Science, Scalability, Security, Technical Support, Risk Management, Custom Digital Products

**Specs:**
- Tab active state: underline or pill highlight
- Animated: cards fade-in on tab switch (100ms stagger)
- On mobile: tabs become horizontal scroll, cards stack to 1 column

#### CMS Fields
```typescript
interface ServicesSectionProps {
  heading?: string;
  tabs: {
    label: string;
    services: {
      icon: ImageAsset;
      name: string;
      description: string;
      bullets?: string[];
      ctaLabel?: string;
      ctaLink?: string;
    }[];
  }[];
  keyBenefits?: { icon?: ImageAsset; title: string; description?: string }[];
}
```

---

### Section 5: `<CaseStudiesSection />`

**Visual Reference:** alty.co works page — full-width case cards
**Used on:** Homepage (3–4 featured), Works page (all 15), Design page (3 spotlight)

#### Visual Layout (Full-width feature cards)
```
┌────────────────────────────────────────────────────────────────────────┐
│  Selected Works                                                        │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  [GTBank Logo]  [RedDot badge] [iF badge]                      │    │
│  │                                                                │    │
│  │  [CASE IMAGE / SCREENSHOT — full width]                        │    │
│  │                                                                │    │
│  │  How we revolutionized banking in Nigeria                      │    │
│  │  GTBank has been a key player in the African financial...      │    │
│  │  [See full case study →]                                       │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  (Oschadbank card)                                             │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                        │
│                          [See all works →]                             │
└────────────────────────────────────────────────────────────────────────┘
```

**All 15 Case Studies:**
| # | Client | Headline | Slug |
|---|--------|----------|------|
| 1 | GTBank (GT World) | How we revolutionized banking in Nigeria | `/works/gt-world` |
| 2 | Oschadbank | How we reshaped the meaning of legacy with Oschadbank | `/works/oschadbank` |
| 3 | Monobank | How we built Ukraine's leading neobank | `/works/monobank` |
| 4 | CBH Swiss Private Bank | How we transformed Swiss Private Bank | `/works/swiss-private-bank` |
| 5 | PrivatBank | How we collaborated with PrivatBank | `/works/privatbank` |
| 6 | Beak | How we streamlined shopping management with Beak | `/works/beak` |
| 7 | Shuggah | How we revolutionized diabetes care with Shuggah | `/works/shuggah` |
| 8 | PayWay | How we enhanced payment solutions with PayWay | `/works/payway` |
| 9 | Weld | How we pioneered crypto payments with Weld | `/works/weld` |
| 10 | Kashable | How we enhanced user engagement for Kashable | `/works/kashable` |
| 11 | Recharge | How we simplified power bank rentals with Recharge | `/works/recharge` |
| 12 | ABA Business Bank | How we supported SMEs with ABA Bank | `/works/aba-business-bank` |
| 13 | GT Pensions | How we digitized pensions for GT Bank | `/works/gt-pensions` |
| 14 | Halyk Bank | How we partnered with Halyk Bank | `/works/halybank` |
| 15 | Zakaz.ua | Elevating Zakaz.ua's Mobile Presence | `/works/zakazua` |

**Specs:**
- Feature image: `aspect-ratio: 16/9` or `16/7`, `object-fit: cover`
- Optional `featureVideo` (Mux): autoplay, muted, loop — replaces image on hover or always
- Hover: image scales `scale(1.02)`, card lifts with shadow
- `limit` prop: on homepage show 3–4, on works page show all

#### CMS Fields
```typescript
interface CaseStudyCardProps {
  client: string;
  clientLogo: ImageAsset;
  tags?: string[];
  featureImage: ImageAsset;
  featureVideo?: MuxAsset;      // Editable in admin panel
  headline: string;
  description: string;
  awards?: { image: ImageAsset; label: string; url: string }[];
  slug: string;
  appStoreRating?: string;
  featured?: boolean;           // Pin to homepage
}

interface CaseStudiesSectionProps {
  heading?: string;
  works: CaseStudyCardProps[];
  showViewAllLink?: boolean;
  viewAllLabel?: string;
  viewAllHref?: string;
  limit?: number;               // 0 = show all
}
```

---

### Section 6: `<AboutTeaser />`

**Visual Reference:** alty.co About Us hero section — pulled into homepage
**Used on:** Homepage only

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  We strive to redefine the notion of                                   │
│  good products by building great ones.                                 │
│                                                                        │
│  Creating future value by implementing innovations in                  │
│  new and existing products aimed at new behavioural                    │
│  models, markets, and technologies.                                    │
│                                                                        │
│  [Contact us]        [About us →]                                      │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────┐          │
│  │   [Company / team photo or video]                        │          │
│  └──────────────────────────────────────────────────────────┘          │
└────────────────────────────────────────────────────────────────────────┘
```

#### CMS Fields
```typescript
interface AboutTeaserProps {
  headline: string;
  body: string;
  primaryCtaLabel: string;
  primaryCtaLink: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  image?: ImageAsset;
  video?: MuxAsset;             // Editable in admin
}
```

---

### Section 7: `<TestimonialsSection />`

**Visual Reference:** alty.co testimonials carousel (home, about, design pages)
**Used on:** Homepage, About, Design, Services pages

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  Testimonials                                                          │
│                                                                        │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │  "Alty's designs helped grow the app's active users and        │    │
│  │  improve its rating on app stores. We were very pleased with   │    │
│  │  the work done."                                               │    │
│  │                                                                │    │
│  │  [Avatar]  Zakir Khanmammadov                                  │    │
│  │            KapitalBank / Birbank Tribe Leader                  │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                        │
│                  ● ○ ○   [← Prev]   [Next →]                          │
└────────────────────────────────────────────────────────────────────────┘
```

**Testimonials (from reference site):**
- Zakir Khanmammadov — KapitalBank / Birbank Tribe Leader
- Zokhir Rasulov — ABA Bank / Chief Digital Officer
- Askar Mailyubayev — Halyk Bank / Team Lead
- Ololade Okobi — GTBank (E-Commerce Development & Marketing)

**Specs:**
- Carousel: slide or fade, `500ms ease-in-out`
- Auto-play: `5000ms` interval, pause on hover
- Swipe gesture on touch devices (Embla Carousel)
- Dot indicators + arrow buttons
- Avatar: circular, `48–64px`

#### CMS Fields
```typescript
interface TestimonialsSectionProps {
  heading?: string;
  testimonials: {
    quote: string;
    avatar: ImageAsset;
    name: string;
    title: string;
    linkedinUrl?: string;
  }[];
  autoPlayInterval?: number;
}
```

---

### Section 8: `<AwardsStrip />`

**Visual Reference:** alty.co awards section (home, about, design pages)
**Used on:** Homepage, About, Design pages

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  Awards and Mentions                                                   │
│                                                                        │
│  [iF Award]  [RedDot GTBank]  [Indigo Oschad]  [Indigo Ukr.net]       │
│  [RedDot CardBlanch]  [RedDot Monobank]  [RedDot Halyk Travel]         │
│                                                                        │
│  ← [TOP Software Dev] [TOP Company] [TOP Fintech] [TOP UX] → (scroll) │
└────────────────────────────────────────────────────────────────────────┘
```

**Awards (from reference site):**
- iF Award for GTBank 2024
- RedDot for GTBank 2023
- Indigo for Oschadbank 2023
- Indigo for Ukr.net 2023
- RedDot for CardBlanch 2022
- RedDot for Monobank 2022
- RedDot for Halyk Travel 2020

**Recognition Badges (infinite marquee):**
- TOP Software Development Company, TOP Company, TOP Fintech Development Company, TOP User Experience Company, TOP Mobile App Development Company, TOP iOS App Developers, TOP Managed Providers Company, TOP Web Developers, TOP Mobile App Dev. Company, TOP App Development Company

#### CMS Fields
```typescript
interface AwardsStripProps {
  heading?: string;
  awards: { image: ImageAsset; label: string; url: string; year?: string }[];
  recognitionBadges: { image: ImageAsset; label: string }[];
  mediaMentions?: { background: ImageAsset; label: string; url: string }[];
}
```

---

### Section 9: `<NewsSection />`

**Visual Reference:** alty.co home page "News" section
**Used on:** Homepage

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  [FB] [Dribbble] [LinkedIn] [Instagram]                                │
│                                                                        │
│  ┌──────────────┐  ┌──────────────────────────────┐  ┌─────────────┐  │
│  │  [Image]     │  │  [Image]                     │  │  [Image]    │  │
│  │  quikly.com  │  │  Blog                        │  │  External   │  │
│  │  How to      │  │  Alty Recognized Among Top   │  │  Banking    │  │
│  │  gamify a    │  │  iOS App Developers in 2024  │  │  CIO Outlook│  │
│  │  mobile app  │  │                              │  │             │  │
│  └──────────────┘  └──────────────────────────────┘  └─────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Social icons row at top (links to social profiles)
- 3 news card items in a row
- Each card: background image + source label + title
- Click → external link (new tab)
- On mobile: horizontal scroll

#### CMS Fields
```typescript
interface NewsSectionProps {
  socialLinks: SocialLink[];
  newsItems: {
    image: ImageAsset;
    source: string;
    title: string;
    url: string;
  }[];
}
```

---

### Section 10: `<FAQSection />`

**Visual Reference:** alty.co home + design + services pages FAQ
**Used on:** Homepage, Design page, Services page

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│  Services                                                              │
│  [Alty General]  [Design]  [Engineering]                               │
│                                                                        │
│  FAQ                                                                   │
│  ───────────────────────────────────────────────────────────────────  │
│  How do you ensure timely project delivery?                    [+]     │
│  ───────────────────────────────────────────────────────────────────  │
│  Can you explain how behavioral science enhances...            [+]     │
│  ───────────────────────────────────────────────────────────────────  │
│  How reliable are your engineering capabilities?               [+]     │
│  ───────────────────────────────────────────────────────────────────  │
│  Do you have experience with international clients?            [+]     │
│  ───────────────────────────────────────────────────────────────────  │
│  Why should I choose Alty over other IT consultancies?         [+]     │
│  ───────────────────────────────────────────────────────────────────  │
└────────────────────────────────────────────────────────────────────────┘
```

**Specs:**
- Optional tab switcher (same 3 tabs as ServicesSection) to filter by service
- `[+]` icon rotates to `[×]` when open (`transform: rotate(45deg)`, `300ms`)
- Answer: smooth `max-height` expand, `300ms ease-in-out`
- Min touch target: `56px` height on mobile

#### CMS Fields
```typescript
interface FAQSectionProps {
  sectionLabel?: string;
  heading?: string;
  tabs?: { label: string; filterKey: string }[];
  items: {
    question: string;
    answer: string;             // Portable Text
    category?: string;
  }[];
  multiOpen?: boolean;
}
```

---

### Section 11: `<CTASection />`

**Visual Reference:** alty.co "Got a project?" pre-footer block (every page)
**Used on:** Every page — always just before Footer

#### Visual Layout
```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│         Got a project?                                                 │
│                                                                        │
│         Let's create something better together.                        │
│                                                                        │
│                    [Contact us]                                        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

#### CMS Fields
```typescript
interface CTASectionProps {
  headline: string;
  body?: string;
  ctaLabel: string;
  ctaLink: string;
  backgroundVariant?: 'default' | 'dark' | 'gradient';
}
```

---

## 4. Homepage Assembly (Code Reference)

```tsx
// apps/web/app/page.tsx

import { sanity } from '@/lib/sanity'
import {
  Header, HeroSection, ClientLogosMarquee, StatsSection,
  ServicesSection, CaseStudiesSection, AboutTeaser,
  TestimonialsSection, AwardsStrip, NewsSection,
  FAQSection, CTASection, Footer, CookieBanner,
} from '@repute/ui'

export const revalidate = 60  // ISR: rebuild from CMS every 60 seconds

export default async function HomePage() {
  const [siteSettings, homepage] = await Promise.all([
    sanity.fetch(SITE_SETTINGS_QUERY),
    sanity.fetch(HOMEPAGE_QUERY),
  ])

  return (
    <>
      <Header {...siteSettings.header} />
      <main>
        <HeroSection {...homepage.hero} />
        <ClientLogosMarquee {...homepage.logos} />
        <StatsSection {...homepage.stats} />
        <ServicesSection {...homepage.services} />
        <CaseStudiesSection {...homepage.featuredWorks} limit={4} />
        <AboutTeaser {...homepage.aboutTeaser} />
        <TestimonialsSection {...homepage.testimonials} />
        <AwardsStrip {...homepage.awards} />
        <NewsSection {...homepage.news} />
        <FAQSection {...homepage.faq} />
        <CTASection {...homepage.cta} />
      </main>
      <Footer {...siteSettings.footer} />
      <CookieBanner {...siteSettings.cookies} />
    </>
  )
}
```

> **ISR note:** `revalidate = 60` means pages rebuild from CMS every 60 seconds automatically — no redeployment needed when admin updates content.

---

## 5. Full Page → Component Map

| Page | Route | Components Used |
|------|-------|----------------|
| **Home** | `/` | HeroSection, ClientLogosMarquee, StatsSection, ServicesSection, CaseStudiesSection, AboutTeaser, TestimonialsSection, AwardsStrip, NewsSection, FAQSection, CTASection |
| **About Us** | `/about-us` | HeroSection (variant), AwardsStrip, WhatWeDoGrid, MissionBlock, ClientLogosMarquee, TimelineSection, TeamLeadershipGrid, TeamFullGrid, CTASection |
| **Works** | `/works` | PageHero, CaseStudiesSection (all 15, no limit), WorldMapSection, CTASection |
| **Case Study** | `/works/[slug]` | CaseHero, MetricsRow, ChallengesSection, SolutionsSection, TechStackSection, ResultsSection, TestimonialCard (single), CTASection |
| **Design** | `/design` | HeroSection (variant), ClientLogosMarquee, ContentBlock, CaseStudiesSection (3), ServicesSection (Design tab), CapabilitiesGrid, ApproachSection, AwardsStrip, TestimonialsSection, ContactForm, FAQSection |
| **Careers** | `/careers` | HeroSection (variant), CultureBlock, BenefitsBlock, OpenPositionsList, PhotoGallery |
| **Contact Us** | `/contact-us` | ContactForm, WhatHappensBlock, ContactDetailsGrid, OfficeAddressBlock |
| **Blog** | `/blog` | PageHero, BlogGrid, PaginationControls |
| **Blog Post** | `/blog/[slug]` | BlogHero, BlogContent, CTASection |
| **Privacy Notice** | `/privacy-notice` | LegalPageLayout, LegalContent |
| **Cookies Policy** | `/cookies-policy` | LegalPageLayout, LegalContent |

---

## 6. Additional Page-Specific Components

### `<PageHero />` — Short inner-page hero
- `height: 50vh` instead of full `100vh`
- Title only (no CTA or video by default, configurable)
- Used on: Works, Blog, Contact, Privacy pages

### `<WhatWeDoGrid />` — About page
- 8 cards: small icon + title + description
- Responsive: 4 columns → 2 columns → 1 column

### `<TimelineSection />` — About page
- 4 eras: 2008–2015, 2015–2019, 2019–2023, 2023
- Each: date range badge + photo + headline + copy
- Horizontal scroll snap on mobile

### `<TeamLeadershipGrid />` — About page
- Named photo cards: portrait + name + role
- 4 per row → 2 per row → 2 per row
- Hover: overlay with LinkedIn link

### `<TeamFullGrid />` — About page
- Unnamed photo mosaic (magazine/collage style)
- CSS grid with mixed aspect ratios
- Animate in on scroll (stagger)

### `<WorldMapSection />` — Works page
- SVG world map with animated country dots
- Country labels: 🇺🇦 Ukraine, 🇦🇺 Australia, 🇰🇭 Cambodia, 🇬🇪 Georgia, 🇰🇿 Kazakhstan, 🇲🇩 Moldova, 🇳🇬 Nigeria, 🇲🇰 North Macedonia, 🇵🇭 Philippines, 🇨🇭 Switzerland, 🇺🇸 USA

### `<TechStackSection />` — Case study page
- Category labels + chip/badge rows
- Categories: Back-end, Database, Message Queue, Infrastructure, Deployment, Legacy Support

### `<MetricsRow />` — Case study page
- 3–4 large stat callouts
- e.g.: `3.4 → 4.7` (App Store rating), `4M` (User base), `1` (Awards)

### `<OpenPositionsList />` — Careers page
- Job listing cards: role title + location/type + team
- Empty state with `mailto:team@alty.co` fallback

### `<PhotoGallery />` — Careers page
- Masonry/CSS grid of 10 office photos
- Lightbox on click (optional)

### `<BlogGrid />` — Blog page
- Paginated card grid (4 per page)
- Card: thumbnail + date + title + excerpt + "Read more →"
- Pagination: "1 out of 6" style

---

## 7. Forms & Backend Requirements

### `<ContactForm />` Component

**Locations:** `/contact-us`, `/design` (embedded)

#### Visual Layout
```
┌─────────────────────────────────────┬──────────────────────────────────┐
│  Book a meeting with one of our     │  What happens after I submit?    │
│  advisors.                          │                                  │
│                                     │  We respect your time — no spam, │
│  I'm interested in...               │  no endless calls. One of our    │
│  ☐ Product Audit                    │  advisors will simply reach out. │
│  ☐ Technical Audit                  │                                  │
│  ☐ Create Concept                   │  ─────────────────────────────── │
│  ☐ Experience Design                │  Write us on:                    │
│  ☐ UX/UI Design                     │  New Business: new@co            │
│  ☐ Develop Web or/and Mobile App    │  Partnership: partner@co         │
│  ☐ General Enquiry                  │  Career: careers@co              │
│  ☐ Test Business Idea               │  Other: hello@co                 │
│                                     │                                  │
│  [Your and company name         ]   │  ─────────────────────────────── │
│  [Your email                    ]   │  Our Offices:                    │
│  [Tell us about your project    ]   │  🇺🇸 USA: ...                    │
│  0/500                              │  🇵🇹 Portugal: ...               │
│                                     │  🇺🇦 Ukraine: ...                │
│  ☐ I agree to Privacy Policy        │                                  │
│                                     │                                  │
│  [Submit]                           │                                  │
└─────────────────────────────────────┴──────────────────────────────────┘
```

**Fields & Validation:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Interests | Checkbox group | No | Any subset |
| Name & Company | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid format |
| Message | Textarea | No | Max 500 chars, live counter |
| Consent | Checkbox | Yes | Must be checked |
| Honeypot | Hidden text | — | Must be empty |

**Backend:** `POST /api/contact`
- Verify honeypot empty
- Verify Cloudflare Turnstile token
- Send notification email via Resend API
- Send auto-reply to submitter
- Log submission to Sanity or Postgres
- Return `{ success: true }` or `{ error: string }`

---

## 8. Design System Reference

### Colors (approximate — confirm exact values from Figma + reference site)

| Token | Usage | Value |
|-------|-------|-------|
| `--bg-primary` | Main page background | `#0A0A0A` |
| `--bg-secondary` | Card / section alternates | `#111111` |
| `--bg-surface` | Input, card fill | `rgba(255,255,255,0.04)` |
| `--text-primary` | Headings, body | `#FFFFFF` |
| `--text-secondary` | Muted labels, captions | `rgba(255,255,255,0.5)` |
| `--text-tertiary` | Placeholder, disabled | `rgba(255,255,255,0.3)` |
| `--border` | Cards, dividers | `rgba(255,255,255,0.08)` |
| `--accent` | Buttons, links, active | Confirm from Figma |

### Typography (confirm font names from Figma)

| Role | Desktop Size | Mobile Size | Weight |
|------|-------------|-------------|--------|
| Display / H1 | `clamp(48px, 6vw, 96px)` | `clamp(32px, 8vw, 48px)` | 700–900 |
| H2 | `clamp(32px, 4vw, 56px)` | `clamp(24px, 6vw, 36px)` | 600–700 |
| H3 | `clamp(20px, 2.5vw, 32px)` | `clamp(18px, 4vw, 24px)` | 500–600 |
| Body | `16–18px` | `14–16px` | 400 |
| Caption | `12–14px` | `12px` | 400 |
| Stat Number | `clamp(40px, 5vw, 72px)` | `clamp(32px, 8vw, 48px)` | 700–900 |

### Spacing & Grid

```
Section Y padding:  80–120px desktop  |  48–64px mobile
Container max-width: 1280px (confirm from Figma)
Container X padding: 24px desktop     |  16px mobile
Grid: 12 columns, 24px gutters
```

### Animations

| Element | Type | Duration | Easing |
|---------|------|----------|--------|
| Hero headline | Stagger word fade-up | `600–800ms` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| Scroll-triggered sections | Fade-up (opacity + translateY 24px) | `500–700ms` | `ease-out` |
| Stats counter | Count-up | `1500–2000ms` | `ease-out` |
| Logo marquee | CSS infinite scroll | `30s` | `linear` |
| FAQ accordion | max-height expand | `300ms` | `ease-in-out` |
| Testimonial carousel | Slide/fade | `500ms` | `ease-in-out` |
| CTA button hover | Background + scale(1.02) | `200–300ms` | `ease` |
| Card hover | translateY(-4px) + shadow | `200ms` | `ease` |
| Menu overlay | Fade / slide | `400ms` | `ease-out` |
| Header bg on scroll | Background transition | `200ms` | `ease` |

---

## 9. Mobile Responsiveness

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header | Logo + CTA + ☰ | Logo + CTA + ☰ | Logo + CTA + Menu☰ |
| HeroSection | Stacked, video full-bleed | Stacked | Two-column |
| StatsSection | 2×2 grid | 2×2 or row | 4-col row |
| ServicesSection | 1 col, scrollable tabs | 2 col | 3 col |
| CaseStudiesSection | Full-width stacked | Full-width | Full-width (larger) |
| TestimonialsSection | Swipeable | Swipeable | Arrow nav |
| ClientLogosMarquee | Slower scroll | Same | Same |
| Footer | 1 col stacked | 2 col | Multi-col |
| ContactForm | Full-width stacked | Full-width | 2-col |

**Breakpoints:**

| Name | Width | Tailwind |
|------|-------|---------|
| Mobile | `< 640px` | (none) |
| `sm` | `≥ 640px` | `sm:` |
| `md` | `≥ 768px` | `md:` |
| `lg` | `≥ 1024px` | `lg:` |
| `xl` | `≥ 1280px` | `xl:` |
| `2xl` | `≥ 1536px` | `2xl:` |

---

## 10. Assets Checklist

### Logos
- [ ] Brand logo — SVG (dark + light variants)
- [ ] Client logos (20+): Monobank, Visa, Mastercard, ABA Bank, MAIB, Oschadbank, Halyk Bank, TBC Bank, KapitalBank, PayMe, GTBank/GTCO, Forte Bank, PUMB, PrivatBank, Space.ge, CBH, Weld, Beak, Shuggah, PayWay, Kashable, Recharge, Involvio, Currency.com, ABB, EasyPay, KredoBank, OTP Bank, Vivi
- [ ] Award logos: iF Design Award, Red Dot, Indigo Award, Forbes
- [ ] Recognition badges: Clutch, Techreviewer (all variants)
- [ ] Social icons: Facebook, Dribbble, LinkedIn, Instagram

### Photography & Videos
- [ ] Hero background video (MP4, to be uploaded in Sanity/Mux)
- [ ] Case study feature images (15 projects)
- [ ] Case study feature videos (optional, per project — via Mux)
- [ ] Team leadership portraits (8 named + 20+ unnamed)
- [ ] Company/office photos (About: 2, Careers: 10)
- [ ] History timeline images (4 eras)
- [ ] World map illustration
- [ ] Design approach chart/illustration
- [ ] Testimonial avatars (4+ named)

---

## 11. Development Stack

```
Monorepo:        Turborepo + pnpm workspaces
Framework:       Next.js 14+ (App Router, TypeScript)
Styling:         Tailwind CSS v3 + CSS Modules (complex animations)
CMS:             Sanity v3 — admin panel at /studio
Video:           Mux (uploaded via Sanity, streamed as HLS)
Images:          next/image + Sanity image CDN (WebP/AVIF on-the-fly)
Animations:      Framer Motion + GSAP ScrollTrigger
Carousel:        Embla Carousel (testimonials, blog)
Forms:           React Hook Form + Zod
Email:           Resend API (transactional email)
Spam:            Cloudflare Turnstile (GDPR-friendly)
Fonts:           next/font (zero layout shift)
Icons:           Lucide React
Component Dev:   Storybook (all shared components documented here)
Testing:         Vitest + Testing Library + Playwright (E2E)
Deployment:      Vercel (web + studio preview deployments)
Analytics:       Vercel Analytics (GDPR-friendly, no cookies)
CI/CD:           GitHub Actions + Turborepo remote cache
```

---

## 12. Admin Panel — What's Editable (Non-Technical)

Access: `https://[domain]/studio`

| Section | What the Admin Can Change |
|---------|--------------------------|
| **Hero** | Headline, subheading, CTA text/link, **background video** (upload MP4), fallback image |
| **Client Logos** | Add/remove/reorder logos, toggle partner row on/off |
| **Stats** | Any number, label, prefix/suffix ("50+" → "75+") |
| **Services** | All tab content — add/edit/delete services, icons, bullets, links |
| **Case Studies** | Feature image/video per project, headline, description, awards, featured flag |
| **About Teaser** | Quote, body copy, CTA labels and links, team photo or **video** |
| **Testimonials** | Add/edit/delete testimonials, swap avatars, update names/titles |
| **Awards** | Add/remove award badges, images, external URLs |
| **News** | Add/edit news items, thumbnail images, source labels, URLs |
| **FAQ** | Full CRUD on all Q&A items, reorder |
| **CTA Section** | Headline, body, button label and link |
| **Header** | Logo, CTA button text/link, navigation items, sub-menu links |
| **Footer** | Copyright year/text, office addresses, social links |
| **Cookies Banner** | Message text, Privacy Policy link |

### Video Workflow for Admins
1. Open Sanity Studio → go to the page/section with a video field
2. Click **Upload video** (Mux plugin field)
3. Drag and drop MP4/MOV file — Mux processes it in the background
4. Once ready, click **Publish**
5. Site updates automatically within 60 seconds (ISR) — no developer needed

---

## Appendix: Key URLs

| Resource | URL |
|----------|-----|
| Reference Website | https://alty.co |
| Figma (Layout Reference) | https://www.figma.com/design/xNrBCtDPyhZDc1cBgfGD2B/Reputation-Experts?node-id=1-103 |
| Sanity CMS | https://www.sanity.io |
| Mux Video | https://www.mux.com |
| Turborepo | https://turbo.build |
| iF Award (GTBank) | https://ifdesign.com/en/winner-ranking/project/gt-nigerias-first-innovative-online-bank/621226 |
| Red Dot (Monobank) | https://www.red-dot.org/project/monobank-49241 |

---

*Last updated: March 7, 2026*
*Design tokens (exact hex values, font names) must be extracted from Figma before implementation. All other content is confirmed from the alty.co reference site.*
