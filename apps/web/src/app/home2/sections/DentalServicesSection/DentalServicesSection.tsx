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
      "We legally remove harmful, fake, malicious, and policy-violating reviews from online platforms like Google Maps that are damaging your reputation, on an ongoing basis. Our dispute team knows exactly what language platforms respond to, and we follow up until reviews are taken down.",
    category: "Reviews",
  },
  {
    name: "Review Generation Strategy",
    description:
      "We help your business generate a steady stream of positive reviews that builds trust, strengthens your Google rating, and drives more customers to choose you over competitors. Our system makes it effortless for happy patients to leave feedback right after their appointment.",
    category: "Reviews",
  },
  {
    name: "Google Business Optimisation",
    description:
      "We optimise your Google Business Profile to rank higher in local search and Google Maps. From category selection and service descriptions to photos, Q&A, and post scheduling — we make sure your profile converts browsers into booked patients.",
    category: "Search & Content",
  },
  {
    name: "Negative Content Suspension",
    description:
      "We suppress damaging search results and replace them with authoritative, trust-building content that presents your business properly on page one. Negative articles, complaint-board listings, and outdated press are pushed out of sight.",
    category: "Search & Content",
  },
  {
    name: "Digital PR & Authority Building",
    description:
      "We help businesses build brand authority through strategic features and articles across major, niche, and local media outlets, strengthening visibility in Google AI Overviews and recommendations in ChatGPT.",
    category: "PR & Media",
  },
  {
    name: "AI Overview Optimisation",
    description:
      "We keep your business visible in AI-driven search by optimising your Google Business Profile, driving consistent client reviews, and structuring your online presence so Google surfaces you, not your competitors.",
    category: "Search & Content",
  },
  {
    name: "Daily Monitoring and Protection",
    description:
      "Real-time alerts whenever your practice is mentioned online. New review? We notify you. Negative article? We flag it. So you're never caught off guard again. We monitor Google, Trustpilot, Facebook, Instagram, and major news outlets 24/7.",
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
                        <p className="text-white/60 text-[14px] leading-[1.75]">
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
