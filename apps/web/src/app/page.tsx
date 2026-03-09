import {
  HeroSection,
  WhoWeServeSection,
  ServicesSection,
  KeyBenefitsSection,
  TestimonialsSection,
  AwardsStrip,
  ProcessSection,
  PrivacySection,
  FAQSection,
  CTASection,
} from "@repute/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Experts — Protect Your Business from Harmful Online Reviews",
  description:
    "Reputation Experts helps businesses remove harmful, fake, and defamatory online reviews. Professional reputation management across Google, Yelp, Trustpilot, Glassdoor and 50+ platforms.",
};

export default function HomePage() {
  return (
    <main>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <HeroSection
        headline="Protect your Business from Harmful Online Reviews"
        highlightWord=""
        quote="Professional assistance with assessing and disputing harmful or policy-violating online reviews and online content."
        quoteBold="Fast assessment. Confidential process."
        subQuote="Negative reviews can impact customer trust within hours. Understand your options before the damage spreads."
        ctaLabel="Free Reputation Case Assessment"
        ctaLink="/contact"
        mediaCaption="founder of Reputation Experts – a reputation management firm"
        mediaSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      />

      {/* ── 2. Who We Serve ──────────────────────────────────────── */}
      <WhoWeServeSection
        heading="Who We Serve"
        ctaLabel="Free Assessment"
        ctaHref="/contact"
      />

      {/* ── 3. Services ──────────────────────────────────────────── */}
      <ServicesSection heading="Services" />

      {/* ── 4. Key Benefits ──────────────────────────────────────── */}
      <KeyBenefitsSection heading="Key Benefits" />

      {/* ── 5. Testimonials ──────────────────────────────────────── */}
      <TestimonialsSection
        heading="Testimonials"
        ctaLabel="Contact us"
        ctaHref="/contact"
      />

      {/* ── 6. Awards and Mentions ───────────────────────────────── */}
      <AwardsStrip
        heading="Awards and Mentions"
        recognitionsLabel="Recognitions"
      />

      {/* ── 7. Our Process ───────────────────────────────────────── */}
      <ProcessSection heading="Our Process" />

      {/* ── 8. Privacy ───────────────────────────────────────────── */}
      <PrivacySection heading="How We Safeguard Your Privacy" />

      {/* ── 9. FAQ ───────────────────────────────────────────────── */}
      <FAQSection heading="FAQ" />

      {/* ── 10. CTA (Assessment Form) ────────────────────────────── */}
      <CTASection headline="Free Reputation Case Assessment" />
    </main>
  );
}
