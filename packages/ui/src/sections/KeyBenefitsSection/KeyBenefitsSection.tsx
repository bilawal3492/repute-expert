"use client";

import React from "react";
import Image from "next/image";
import type { ImageAsset } from "../../types";

export interface Benefit {
  icon?: ImageAsset;
  iconEmoji?: string;
  title: string;
  description?: string;
}

export interface KeyBenefitsSectionProps {
  heading?: string;
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
  {
    icon: { src: "/images/asset-7.webp", alt: "Fast Case Assessment icon" },
    title: "Fast Case Assessment",
    description: "We quickly review harmful online content and determine whether it may violate platform policies.",
  },
];

export function KeyBenefitsSection({
  heading = "Key Benefits",
  benefits = DEFAULT_BENEFITS,
}: KeyBenefitsSectionProps) {
  return (
    <section className="key-benefits bg-[#f2f2f2] py-14 lg:py-20">
      <div className="key-benefits__inner max-w-[1280px] mx-auto px-5 lg:px-8">

        <h2 className="key-benefits__heading text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em] mb-10">
          {heading}
        </h2>

        <div className="key-benefits__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="key-benefits__card bg-white rounded-2xl p-6 hover:shadow-sm transition-all duration-200"
            >
              {/* Icon */}
              <div className="key-benefits__card-icon w-11 h-11 flex items-center justify-center mb-5 overflow-hidden shrink-0">
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

              <h3 className="key-benefits__card-title font-bold text-[#0f0f0f] text-[18px] leading-[1.3] mb-2">
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
