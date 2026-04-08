"use client";

import React from "react";
import Image from "next/image";

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface DigitalReputationSectionProps {
  heading?: string;
  description?: string;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

/* ─── Defaults ────────────────────────────────────────────────────────── */

const DEFAULT_TAGS = [
  "Harmful Review Removal",
  "Google Review Growth",
  "Trustpilot Review Growth",
  "Authority Content Publishing",
  "National Press Features",
  "Negative Content Suspension",
  "Google Maps Positioning",
  "Ongoing Protection: Removal of New Harmful Reviews",
  "Google AI Overview Optimisation",
  "Chat-GPT Visibility",
];

/* ─── Component ───────────────────────────────────────────────────────── */

export function DigitalReputationSection({
  heading = "Digital reputation management that covers every angle",
  description = "Our approach brings together review management, reputation building, Google AI Overview optimisation, ChatGPT recommendation positioning, and major online media publications - all in one integrated service built specifically for UK dental practices. Every strategy is shaped around how patients actually search for and choose their dentist online.",
  tags = DEFAULT_TAGS,
  imageSrc = "/images/dental-2.png",
  imageAlt = "Reputation management wheel showing all service areas",
}: DigitalReputationSectionProps) {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Digital reputation management"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left column: text + tags ──────────────────────── */}
          <div>
            <h2
              className="text-[#1a1a1a] font-normal leading-[1.15] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)" }}
            >
              {heading}
            </h2>

            <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] mb-8 text-justify lg:text-left">
              {description}
            </p>

            {/* Tags ─ Mobile: short ones 2-per-row, long ones full-width below */}
            {/* Desktop: original natural flex-wrap */}
            <div className="lg:hidden space-y-2">
              {/* 2-col grid for short tags */}
              <div className="grid grid-cols-2 gap-2">
                {tags.filter((t) => t.length <= 24).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 rounded-full border border-[#d8d8d8] text-[#333] text-[12px] font-normal leading-[1.3] bg-white text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Full-width for long tags */}
              {tags.filter((t) => t.length > 24).map((tag) => (
                <span
                  key={tag}
                  className="block px-4 py-2 rounded-full border border-[#d8d8d8] text-[#333] text-[12px] font-normal leading-[1.3] bg-white text-center"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-2 rounded-full border border-[#d8d8d8] text-[#333] text-[13px] font-normal leading-[1.4] bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right column: diagram image ───────────────────── */}
          <div className="flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={2028}
              height={2109}
              className="w-full max-w-[540px] h-auto"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
