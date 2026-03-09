// ─── Types ───────────────────────────────────────────────────────────────────
export type { ImageAsset, MuxAsset, SocialLink, NavItem, CTAButton } from "./types";

// ─── Atoms ───────────────────────────────────────────────────────────────────
export { Button } from "./atoms/Button";
export type { ButtonProps } from "./atoms/Button";

export { Badge } from "./atoms/Badge";
export type { BadgeProps } from "./atoms/Badge";

// ─── Organisms ───────────────────────────────────────────────────────────────
export { Header } from "./organisms/Header";
export type { HeaderProps } from "./organisms/Header";

export { Footer } from "./organisms/Footer";
export type { FooterProps } from "./organisms/Footer";

export { CookieBanner } from "./organisms/CookieBanner";
export type { CookieBannerProps } from "./organisms/CookieBanner";

// ─── Sections ────────────────────────────────────────────────────────────────
export { HeroSection } from "./sections/HeroSection";
export type { HeroSectionProps } from "./sections/HeroSection";

export { WhoWeServeSection } from "./sections/WhoWeServeSection";
export type { WhoWeServeSectionProps, ServeCard } from "./sections/WhoWeServeSection";

export { ServicesSection } from "./sections/ServicesSection";
export type { ServicesSectionProps, ServiceItem } from "./sections/ServicesSection";

export { KeyBenefitsSection } from "./sections/KeyBenefitsSection";
export type { KeyBenefitsSectionProps, Benefit } from "./sections/KeyBenefitsSection";

export { TestimonialsSection } from "./sections/TestimonialsSection";
export type { TestimonialsSectionProps, TestimonialItem } from "./sections/TestimonialsSection";

export { AwardsStrip } from "./sections/AwardsStrip";
export type { AwardsStripProps, Award, RecognitionBadge } from "./sections/AwardsStrip";

export { ProcessSection } from "./sections/ProcessSection";
export type { ProcessSectionProps, ProcessStep } from "./sections/ProcessSection";

export { PrivacySection } from "./sections/PrivacySection";
export type { PrivacySectionProps, PrivacyFeature } from "./sections/PrivacySection";

export { FAQSection } from "./sections/FAQSection";
export type { FAQSectionProps, FAQItem } from "./sections/FAQSection";

export { CTASection } from "./sections/CTASection";
export type { CTASectionProps } from "./sections/CTASection";

// ─── Legacy exports (kept for build compatibility) ────────────────────────────
export { ClientLogosMarquee } from "./sections/ClientLogosMarquee";
export type { ClientLogosMarqueeProps, LogoItem } from "./sections/ClientLogosMarquee";

export { StatsSection } from "./sections/StatsSection";
export type { StatsSectionProps, StatItem } from "./sections/StatsSection";

export { CaseStudiesSection } from "./sections/CaseStudiesSection";
export type { CaseStudiesSectionProps, CaseStudyItem, AwardBadge } from "./sections/CaseStudiesSection";

export { NewsSection } from "./sections/NewsSection";
export type { NewsSectionProps, NewsItem } from "./sections/NewsSection";
