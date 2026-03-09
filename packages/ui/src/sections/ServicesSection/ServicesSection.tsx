"use client";

import React, { useState } from "react";
import type { ImageAsset } from "../../types";

export interface ServiceItem {
  name: string;
  description?: string;
  icon?: ImageAsset;
  bullets?: string[];
  ctaLabel?: string;
  ctaLink?: string;
}

export interface ServicesSectionProps {
  heading?: string;
  services?: ServiceItem[];
}

// Legacy compat
export interface ServiceTab { label: string; services: ServiceItem[]; }
export interface Benefit { icon?: ImageAsset; title: string; description?: string; }

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    name: "Harmful Review Assessment",
    description: "Our team evaluates every negative, fake, or defamatory review targeting your business across all major platforms. We identify content that violates platform policies and build the strongest possible case for removal or dispute.",
    bullets: ["Yelp, Google, Trustpilot analysis", "Policy violation identification", "Removal priority scoring"],
  },
  {
    name: "Review Dispute Assistance",
    description: "We formally dispute illegitimate reviews on your behalf, submitting platform-specific appeals that maximise removal rates. Our dispute writers know exactly what language platforms respond to.",
    bullets: ["Platform-specific dispute letters", "Evidence compilation", "Appeal follow-ups"],
  },
  {
    name: "Business Reputation Protection",
    description: "Proactive strategies to strengthen your online reputation before harmful content can take hold — including review generation programs, brand monitoring, and positive content publishing.",
  },
  {
    name: "Misleading Content Reports",
    description: "We identify and formally report inaccurate, misleading, or defamatory content published on review sites, social media, news outlets, and consumer complaint boards.",
  },
  {
    name: "Reputation Monitoring",
    description: "24/7 automated monitoring of your brand name and key personnel across search results, review platforms, social media, and news sources. Instant alerts on new threats.",
  },
  {
    name: "Reputation Recovery Strategy",
    description: "A complete, long-term roadmap tailored to restore your brand's standing — combining removals, suppression of negative results, and amplification of positive content.",
  },
  {
    name: "Major Global & Regional Media Publications",
    description: "Placement of high-authority positive articles and press mentions in recognised publications to build credibility and push negative results further down in search.",
  },
];

export function ServicesSection({
  heading = "Services",
  services = DEFAULT_SERVICES,
}: ServicesSectionProps) {
  const [active, setActive] = useState(0);
  const activeService = services[active];

  return (
    <section className="services bg-[#f2f2f2] py-6 lg:py-8">
      <div className="services__inner max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* Outer dark rounded card with background image */}
        <div
          className="services__card relative rounded-3xl overflow-hidden bg-[#161616] px-6 pt-10 pb-10 lg:px-12 lg:pt-14 lg:pb-14"
          style={{
            backgroundImage: "url('/images/background-path.webp')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Heading */}
          <h2 className="services__heading text-white font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em] mb-8">
            {heading}
          </h2>

          {/* ── MOBILE: Accordion ───────────────────────────────── */}
          <div className="services__accordion lg:hidden">
            {services.map((service, i) => {
              const isOpen = active === i;
              return (
                <div key={service.name} className="services__accordion-item border-t border-white/[0.1]">
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="services__accordion-trigger w-full flex items-center justify-between py-5 gap-4"
                  >
                    <span className={`services__accordion-label text-left text-[16px] font-medium transition-colors ${isOpen ? "text-white" : "text-white/60"}`}>
                      {service.name}
                    </span>
                    {/* Chevron — up when open, down when closed */}
                    <svg
                      className={`services__accordion-chevron shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                      opacity={isOpen ? "1" : "0.4"}
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="services__accordion-body pb-6">
                      <div className="services__accordion-divider w-full h-px bg-white/10 mb-5" />
                      {service.description && (
                        <p className="services__accordion-description text-white/60 text-[14px] leading-[1.75] mb-4">
                          {service.description}
                        </p>
                      )}
                      {service.bullets && service.bullets.length > 0 && (
                        <ul className="services__accordion-bullets space-y-2">
                          {service.bullets.map((b) => (
                            <li key={b} className="services__accordion-bullet flex items-center gap-2.5 text-white/40 text-[13px]">
                              <span className="services__accordion-bullet-dot w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="border-t border-white/[0.1]" />
          </div>

          {/* ── DESKTOP: Two-column layout ──────────────────────── */}
          <div className="services__grid hidden lg:grid grid-cols-[1fr_1.2fr] gap-0 rounded-2xl overflow-hidden">

            {/* Left — service list */}
            <div className="services__list">
              {services.map((service, i) => (
                <button
                  key={service.name}
                  onClick={() => setActive(i)}
                  className={`services__list-item w-full text-left flex items-center justify-between px-6 py-4 border-b border-white/[0.07] transition-colors duration-150 last:border-b-0 ${
                    active === i ? "services__list-item--active bg-white/[0.07]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className={`services__list-label text-[14px] font-normal transition-colors ${
                    active === i ? "text-white" : "text-white/50"
                  }`}>
                    {service.name}
                  </span>
                  {active === i && (
                    <svg className="services__list-arrow shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Right — detail panel */}
            <div className="services__detail p-8 lg:p-10 flex flex-col min-h-[320px]">
              <div className="services__detail-top flex items-start justify-between gap-4 mb-5">
                <h3 className="services__detail-heading text-white font-semibold text-[clamp(1.1rem,2vw,1.45rem)] leading-[1.3] tracking-[-0.01em]">
                  {activeService?.name}
                </h3>
                <button className="services__detail-link shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Open">
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                  </svg>
                </button>
              </div>

              {activeService?.description && (
                <p className="services__detail-description text-white/50 text-[13px] leading-[1.7] mb-5">
                  {activeService.description}
                </p>
              )}

              {activeService?.bullets && activeService.bullets.length > 0 && (
                <ul className="services__detail-bullets space-y-2">
                  {activeService.bullets.map((b) => (
                    <li key={b} className="services__detail-bullet flex items-center gap-2.5 text-white/40 text-[12px]">
                      <span className="services__detail-bullet-dot w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {activeService?.ctaLink && (
                <a href={activeService.ctaLink} className="services__detail-cta mt-6 inline-flex items-center gap-1.5 text-white text-[12px] font-medium hover:opacity-60 transition-opacity">
                  {activeService.ctaLabel ?? "Learn more"}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
