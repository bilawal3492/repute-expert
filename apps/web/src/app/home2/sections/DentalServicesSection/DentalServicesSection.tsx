"use client";

import React, { useState, useMemo } from "react";

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface DentalServiceItem {
  name: string;
  description?: string;
  category: string;
}

export interface DentalServicesSectionProps {
  heading?: string;
  filters?: string[];
  services?: DentalServiceItem[];
}

/* ─── Defaults ────────────────────────────────────────────────────────── */

const DEFAULT_FILTERS = ["All Services", "Reviews", "Search & Content", "PR & Media"];

const DEFAULT_SERVICES: DentalServiceItem[] = [
  {
    name: "Online Reputation Audit",
    description:
      "We start with a comprehensive reputation audit of your business, reviewing your Google rating, Trustpilot score, Instagram and Facebook sentiment, competitor positioning, how Google AI Overviews and ChatGPT present your business, how you rank against competitors across both traditional and AI-driven search, and any reviews that violate platform guidelines. This gives us a clear action plan to improve your online presence within 60–90 days.",
    category: "All Services",
  },
  {
    name: "Review Dispute & Removal",
    description:
      "Damaging reviews can shape how customers see your business before they ever make contact. We help identify high-risk review issues, challenge harmful content where appropriate, and protect your reputation across Google and other key platforms to preserve trust, strengthen profile quality, and limit reputational damage. Our service also includes ongoing protection against harmful reviews as they appear. Unlike many online reputation management companies that treat review issues as a one-off task, we understand that reputation protection is an ongoing process and is included as part of our all-inclusive monthly packages.",
    category: "Reviews",
  },
  {
    name: "Review Generation",
    description:
      "Consistent positive reviews increase trust, strengthen your online reputation, and influence buying decisions before a customer ever contacts your business. We help brands build a healthier review profile across the platforms that matter most — increasing review quality, improving rating strength, and supporting stronger commercial performance over time.",
    category: "Reviews",
  },
  {
    name: "Google Business Optimisation",
    description:
      "A weak Google Business Profile can cost you visibility, trust, and enquiries. We help businesses improve the quality, credibility, and commercial performance of their Google presence so they stand out more effectively in local search, rank more strongly in Google Maps results and recommendations, and convert more potential customers into leads.",
    category: "Search & Content",
  },
  {
    name: "Crisis & Issue Response",
    description:
      "Damaging online content can harm trust long before a customer ever contacts your business. We take down harmful photos, videos, articles, and other negative content that affects how they are perceived online. Where removal is not possible, we focus on reducing its visibility and strengthening the presence of more credible, positive content so harmful results are buried behind positive content and appear at the last pages of the search results.",
    category: "Search & Content",
  },
  {
    name: "Digital PR & Authority Building",
    description:
      "Authority matters. We help businesses strengthen their brand through digital PR and strategic media exposure across major international publications, local news outlets, and industry-specific media. This broader media footprint helps reinforce trust, elevate perceived credibility, and build the kind of authority signals that increasingly influence Google search, Google AI Overviews, and AI platforms such as ChatGPT when presenting businesses to potential customers. Whether through globally recognised names such as BBC, Business Insider, NBC, FOX, CBS, Yahoo Finance, and Digital Journal, Evening Standard, The Sun, Telegraph, or through more targeted local and industry-led coverage, the objective is the same: build a stronger, more trusted, more visible brand.",
    category: "PR & Media",
  },
  {
    name: "AI Overview Optimisation",
    description:
      "Traditional SEO is no longer the full picture. Google AI Overviews are increasingly shaping which businesses get seen, trusted, and chosen first. We help brands strengthen the authority, relevance, and reputation signals that support better visibility within AI-generated search results, helping position the business more competitively in a rapidly changing search landscape.",
    category: "Search & Content",
  },
  {
    name: "Daily Monitoring and Protection",
    description:
      "Negative content, harmful reviews, and new reputation threats can appear at any time. Our monthly service helps businesses challenge damaging content, address harmful reviews where appropriate, and protect how the brand is seen across the platforms that influence customer decisions most. This frequently includes fake competitor reviews, unreasonable customer complaints, and personal revenge-driven attacks from former employees - issues we deal with regularly and effectively take them down. The result is stronger trust, greater credibility, and better long-term reputation protection.",
    category: "All Services",
  },
];

/* ─── Component ───────────────────────────────────────────────────────── */

export function DentalServicesSection({
  heading = "Services",
  filters = DEFAULT_FILTERS,
  services = DEFAULT_SERVICES,
}: DentalServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All Services");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    if (activeFilter === "All Services") return services;
    return services.filter((s) => s.category === activeFilter);
  }, [activeFilter, services]);

  // Reset active index when filter changes
  const safeActive = active >= filtered.length ? 0 : active;
  const activeService = filtered[safeActive];

  return (
    <section
      className="bg-white py-6 lg:py-8"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Outer dark card with background image */}
        <div
          className="relative rounded-3xl overflow-hidden bg-[#161616] px-6 pt-10 pb-10 lg:px-12 lg:pt-14 lg:pb-14"
          style={{
            backgroundImage: "url('/images/background-path.webp')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Heading */}
          <h2 className="text-white font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em] mb-6">
            {heading}
          </h2>

          {/* ── Filter Tabs ─────────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setActive(0);
                }}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors duration-200 ${
                  activeFilter === filter
                    ? "bg-white text-[#161616] border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ── MOBILE: Accordion ───────────────────────────────── */}
          <div className="lg:hidden">
            {filtered.map((service, i) => {
              const isOpen = safeActive === i;
              return (
                <div key={service.name} className="border-t border-white/[0.1]">
                  <button
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-5 gap-4"
                  >
                    <span
                      className={`text-left text-[16px] font-medium transition-colors ${
                        isOpen ? "text-white" : "text-white/60"
                      }`}
                    >
                      {service.name}
                    </span>
                    <svg
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity={isOpen ? "1" : "0.4"}
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="pb-6">
                      <div className="w-full h-px bg-white/10 mb-5" />
                      {service.description && (
                        <p className="text-white/60 text-[14px] leading-[1.75] text-justify">
                          {service.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="border-t border-white/[0.1]" />
          </div>

          {/* ── DESKTOP: Two-column layout ──────────────────────── */}
          <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-0 rounded-2xl overflow-hidden">
            {/* Left — service list */}
            <div>
              {filtered.map((service, i) => (
                <button
                  key={service.name}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center justify-between px-6 py-4 border-b border-white/[0.07] transition-colors duration-150 last:border-b-0 ${
                    safeActive === i
                      ? "bg-white/[0.07]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-[14px] font-normal transition-colors ${
                      safeActive === i ? "text-white" : "text-white/50"
                    }`}
                  >
                    {service.name}
                  </span>
                  {safeActive === i ? (
                    <svg
                      className="shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  ) : (
                    <svg
                      className="shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.25"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Right — detail panel */}
            <div className="p-8 lg:p-10 flex flex-col min-h-[320px]">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="text-white font-semibold text-[clamp(1.1rem,2vw,1.45rem)] leading-[1.3] tracking-[-0.01em]">
                  {activeService?.name}
                </h3>
              </div>

              {activeService?.description && (
                <p className="text-white/80 text-[15px] leading-[1.85] text-justify">
                  {activeService.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
