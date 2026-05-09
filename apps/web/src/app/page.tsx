import type { Metadata } from "next";
import { MainHeroSection } from "./home2/sections/MainHeroSection";
import { OnlineReputationExpertsSection } from "./home2/sections/OnlineReputationExpertsSection";
import { IndustriesSection } from "./home2/sections/IndustriesSection";
import { DentalServicesSection } from "./home2/sections/DentalServicesSection";
import { PlatformsAndAISection } from "./home2/sections/PlatformsAndAISection";
import { WhoWeServeSection } from "../../../../packages/ui/src/sections/WhoWeServeSection";
import { KeyBenefitsSection } from "../../../../packages/ui/src/sections/KeyBenefitsSection";
import { PartnersSection } from "./home2/sections/PartnersSection/PartnersSection";
import { PlatformsMediaSection } from "./home2/sections/PlatformsMediaSection";
import { DentalCaseStudiesSection } from "./home2/sections/DentalCaseStudiesSection";
import { DentalFAQSection } from "./home2/sections/DentalFAQSection";
import { InsightsSection } from "./home2/sections/InsightsSection/InsightsSection";
import { DentalCTASection } from "./home2/sections/DentalCTASection";
import { DentalContactSection } from "./home2/sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Reputation Experts — Protect & Grow Your Online Reputation",
  description:
    "We protect and grow your online reputation. Remove harmful reviews, build trust, and increase revenue with professional reputation management.",
};

export default function HomePage() {
  return (
    <main>
      {/* ── 0. Main Hero ─────────────────────────────────────────── */}
      <MainHeroSection />

      {/* ── 0b. Online Reputation Experts ───────────────────────── */}
      <OnlineReputationExpertsSection />

      {/* ── 0c. Industries ───────────────────────────────────────── */}
      <IndustriesSection />

      {/* ── 0d. Services ─────────────────────────────────────────── */}
      <DentalServicesSection />

      {/* ── 0e. Platforms + Get Recommended by AI ────────────────── */}
      <PlatformsAndAISection />

      <WhoWeServeSection />

      {/* ── 8. Platforms & Media Outlets ──────────────────────────── */}
      <PlatformsMediaSection />

      {/* ── Key Benefits ──────────────────────────────────────────── */}
      <KeyBenefitsSection />

      {/* ── Partners ─────────────────────────────────────────────── */}
      <PartnersSection />

      {/* ── Case Studies ─────────────────────────────────────────── */}
      <DentalCaseStudiesSection />

      {/* ── 10. FAQ ───────────────────────────────────────────────── */}
      <DentalFAQSection />

      {/* ── Insights ─────────────────────────────────────────────── */}
      <InsightsSection />

      {/* ── 11. CTA ───────────────────────────────────────────────── */}
      <DentalCTASection />

      {/* ── 12. Get in Touch ──────────────────────────────────────── */}
      <DentalContactSection />
    </main>
  );
}
