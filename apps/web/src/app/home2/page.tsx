import type { Metadata } from "next";
import { MainHeroSection } from "./sections/MainHeroSection";
import { OnlineReputationExpertsSection } from "./sections/OnlineReputationExpertsSection";
import { IndustriesSection } from "./sections/IndustriesSection";
import { DentalHeroSection } from "./sections/DentalHeroSection";
import { ProblemStatementSection } from "./sections/ProblemStatementSection";
import { ReputationManagementSection } from "./sections/ReputationManagementSection";
import { DentalServicesSection } from "./sections/DentalServicesSection";
import { PlatformsAndAISection } from "./sections/PlatformsAndAISection";
import { WhoWeServeSection } from "../../../../../packages/ui/src/sections/WhoWeServeSection";
import { KeyBenefitsSection } from "../../../../../packages/ui/src/sections/KeyBenefitsSection";
import { PartnersSection } from "./sections/PartnersSection/PartnersSection";
import { DigitalReputationSection } from "./sections/DigitalReputationSection";
import { IndustryAuthoritySection } from "./sections/IndustryAuthoritySection";
import { GoogleAIOverviewSection } from "./sections/GoogleAIOverviewSection";
import { PlatformsMediaSection } from "./sections/PlatformsMediaSection";
import { DentalCaseStudiesSection } from "./sections/DentalCaseStudiesSection";
import { DentalFAQSection } from "./sections/DentalFAQSection";
import { InsightsSection } from "./sections/InsightsSection/InsightsSection";
import { DentalCTASection } from "./sections/DentalCTASection";
import { DentalContactSection } from "./sections/DentalContactSection";

export const metadata: Metadata = {
  title: "Dental Clinics — Reputation Management for Dental Practices",
  description:
    "We protect and grow dental clinics' online reputations. Improve bookings, build trust, and increase revenue with professional reputation management.",
};

export default function Home2Page() {
  return (
    <main>
      {/* ── 0. Main Hero ─────────────────────────────────────────── */}
      <MainHeroSection />

      {/* ── 0b. Online Reputation Experts ───────────────────────── */}
      <OnlineReputationExpertsSection />

      {/* ── 0c. Industries ───────────────────────────────────────────── */}
      <IndustriesSection />

      {/* ── 0d. Services ───────────────────────────────────────────── */}
      <DentalServicesSection />

      {/* ── 0e. Platforms + Get Recommended by AI ─────────────────── */}
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

      {/* ── 10. FAQ ────────────────────────────────────────────── */}
      <DentalFAQSection />
      
      {/* ── Insights ────────────────────────────────────────────── */}
      <InsightsSection />
      
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      {/* <DentalHeroSection
        headline="We protect and grow Dental Clinics' online reputations."
        subtitle="Improving online reputation directly affects clinics by helping them gain more bookings, build trust, and increase sales."
        ctaLabel="Free Assessment"
        ctaLink="/contact"
        imageSrc="/images/dental-1.png"
        imageAlt="Dental clinic consultation"
      /> */}

      {/* ── 2. Problem Statement + Platform Cards ────────────────── */}
      {/* <ProblemStatementSection /> */}

      {/* ── 3. Reputation Management Services ────────────────────── */}
      {/* <ReputationManagementSection /> */}

      {/* ── 4. Digital Reputation Management ────────────────────── */}
      {/* <DigitalReputationSection /> */}

      {/* ── 6. Industry Authority Brand in 6 Months ──────────────── */}
      {/* <IndustryAuthoritySection /> */}

      {/* ── 7. Google AI Overview ─────────────────────────────────── */}
      {/* <GoogleAIOverviewSection /> */}

      {/* ── 11. CTA ────────────────────────────────────────────── */}
      <DentalCTASection />

      {/* ── 12. Get in Touch ───────────────────────────────────── */}
      <DentalContactSection />
    </main>
  );
}
