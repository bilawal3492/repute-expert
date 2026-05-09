"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "../../types";

export interface Benefit {
  icon?: ImageAsset;
  iconEmoji?: string;
  title: string;
  description?: string;
}

export interface KeyBenefitsSectionProps {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  benefits?: Benefit[];
}

const DEFAULT_BENEFITS: Benefit[] = [
  {
    icon: { src: "/images/asset-1.webp", alt: "Reputation Recovery Strategy icon" },
    title: "Reputation Recovery Strategy",
    description: "We help strengthen your online presence so accurate and positive information becomes more visible to potential customers.",
  },
  {
    icon: { src: "/images/asset-2.webp", alt: "Platform Policy Expertise icon" },
    title: "Platform Policy Expertise",
    description: "Our team understands how review platforms handle disputes and helps prepare reports aligned with their guidelines.",
  },
  {
    icon: { src: "/images/asset-3.webp", alt: "Global Platform Coverage icon" },
    title: "Global Platform Coverage",
    description: "Experience working with major review and content platforms worldwide.",
  },
  {
    icon: { src: "/images/asset-4.webp", alt: "Confidential Handling icon" },
    title: "Confidential Handling",
    description: "All cases are handled discreetly to protect your business, brand, and client relationships.",
  },
  {
    icon: { src: "/images/asset-5.webp", alt: "Structured Dispute Process icon" },
    title: "Structured Dispute Process",
    description: "We guide you through a clear process for reporting harmful reviews and misleading content using appropriate channels.",
  },
  {
    icon: { src: "/images/asset-6.webp", alt: "Reputation Monitoring icon" },
    title: "Reputation Monitoring",
    description: "Ongoing monitoring helps identify new reputation risks early so issues can be addressed before they escalate.",
  },
];

export function KeyBenefitsSection({
  heading = "Key Benefits",
  ctaLabel = "Free Assessment",
  ctaHref = "/contact",
  benefits = DEFAULT_BENEFITS,
}: KeyBenefitsSectionProps) {
  return (
    <section className="key-benefits bg-white py-14 lg:py-20" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div className="key-benefits__inner max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* Header row */}
        <div className="flex items-center justify-between mb-10 lg:mb-12">
          <h2 className="key-benefits__heading text-[#1a1a1a] font-normal text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.02em]">
            {heading}
          </h2>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="key-benefits__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="key-benefits__card bg-white rounded-2xl p-6 shadow-[0px_0px_12px_2px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_18px_4px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              {/* Icon */}
              <div className="key-benefits__card-icon w-11 h-11 flex items-center justify-center mb-6 overflow-hidden shrink-0">
                {benefit.icon ? (
                  <Image
                    src={benefit.icon.src}
                    alt={benefit.icon.alt ?? benefit.title}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xl">{benefit.iconEmoji ?? "✦"}</span>
                )}
              </div>

              <h3 className="key-benefits__card-title font-bold text-[#1a1a1a] text-[18px] leading-[1.3] mb-3">
                {benefit.title}
              </h3>

              {benefit.description && (
                <p className="key-benefits__card-description text-[#666] text-[15px] leading-[1.7]">
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

