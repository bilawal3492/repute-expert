"use client";

import React, { useState } from "react";

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface PlatformCard {
  name: string;
  hoverImage?: string;
}

export interface ProblemStatementSectionProps {
  heading?: React.ReactNode;
  bodyLeft?: string;
  bodyRight?: string;
  platforms?: PlatformCard[];
}

/* ─── Arrow Icon ──────────────────────────────────────────────────────── */

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-3.5 h-3.5 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

/* ─── Platform Card with hover background (same pattern as AwardsStrip) ─ */

function PlatformCardItem({ card }: { card: PlatformCard }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl flex cursor-pointer",
        "bg-[#f5f5f5] border transition-all duration-300",
        "[aspect-ratio:4/3] md:[aspect-ratio:5/2]",
        hovered
          ? "border-transparent -translate-y-0.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)]"
          : "border-[#e4e4e4]",
      ].join(" ")}
      style={
        hovered && card.hoverImage
          ? {
              backgroundImage: `url(${card.hoverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dark overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl bg-black/50 pointer-events-none z-10 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      />
      {/* Card content — text anchored to bottom */}
      <div
        className="relative z-20 flex items-end w-full p-[18px_20px] md:p-[26px_30px] transition-colors duration-300"
        style={{ color: hovered ? "#ffffff" : "#1a1a1a" }}
      >
        <span
          className="font-medium leading-tight tracking-tight"
          style={{ fontSize: "clamp(0.875rem, 3.8vw, 1.65rem)" }}
        >
          {card.name}
        </span>
      </div>
      {/* Arrow badge */}
      <div
        className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center w-[26px] h-[26px] rounded-full transition-all duration-300"
        style={{
          background: hovered ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.07)",
          color: hovered ? "#ffffff" : "#999999",
          transform: hovered ? "translate(2px,-2px)" : "none",
        }}
      >
        <ArrowUpRight />
      </div>
    </div>
  );
}

/* ─── Defaults ────────────────────────────────────────────────────────── */

const DEFAULT_PLATFORMS: PlatformCard[] = [
  { name: "Google Maps", hoverImage: "/images/image-1.webp" },
  { name: "Trust Pilot", hoverImage: "/images/image-2.webp" },
  { name: "Google AI Overview", hoverImage: "/images/image-3.webp" },
  { name: "Facebook", hoverImage: "/images/image-4.webp" },
];

/* ─── Component ───────────────────────────────────────────────────────── */

export function ProblemStatementSection({
  heading,
  bodyLeft = "In 2026, 89% of patients read online reviews before booking a dentist. Reputation directly drives revenue. A practice with a poor online reputation loses patients to competitors every single day, even when the clinical care is identical. We close that gap by removing damaging reviews that drag your rating down and generating a consistent flow of new 5-star reviews that strengthen trust and push your rating up.",
  bodyRight = "We also help ensure your practice appears prominently when potential patients search on Google, ask ChatGPT, or browse AI Overviews. The result is more visibility, more clicks, more calls, and more booked appointments. Clients typically see a 30\u201350% increase in new patient enquiries within the first three months.",
  platforms = DEFAULT_PLATFORMS,
}: ProblemStatementSectionProps) {
  return (
    <section
      className="problem-statement bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Problem statement"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ── Heading ─────────────────────────────────────────── */}
        <h2 className="text-[#1a1a1a] font-normal leading-[1.2] tracking-[-0.02em] mb-8 lg:mb-10"
          style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)" }}
        >
          {heading ?? (
            <>
              For many UK dental practices,{" "}
              <strong className="font-bold">
                poor reviews mean losing £60,000 to £180,000+ per year
              </strong>{" "}
              in lost revenue.
            </>
          )}
        </h2>

        {/* ── Two-column body text ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12 lg:mb-16">
          <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
            {bodyLeft}
          </p>
          <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
            {bodyRight}
          </p>
        </div>

        {/* ── Platform cards (2×2 grid with hover bg) ─────────── */}
        <div className="grid grid-cols-2 gap-2.5">
          {platforms.map((platform, i) => (
            <PlatformCardItem key={`platform-${i}`} card={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
