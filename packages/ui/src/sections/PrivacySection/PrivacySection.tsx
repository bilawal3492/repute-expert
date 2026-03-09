"use client";

import React from "react";

export interface PrivacyFeature {
  iconEmoji?: string;
  title: string;
  description?: string;
}

export interface PrivacySectionProps {
  heading?: string;
  features?: PrivacyFeature[];
}

const DEFAULT_FEATURES: PrivacyFeature[] = [
  {
    iconEmoji: "🔍",
    title: "Initial Deep Web Scan",
    description: "We begin by performing a comprehensive deep web scan to discover every instance of harmful content published about you or your business across all layers of the internet.",
  },
  {
    iconEmoji: "🗑️",
    title: "Personal Data Removal",
    description: "Our specialists remove personally identifiable information from data broker sites, public records aggregators, and people-search platforms to reduce your digital footprint.",
  },
  {
    iconEmoji: "👁️",
    title: "Ongoing Surveillance",
    description: "After cleanup, our monitoring systems actively watch for new threats — alerting you immediately if harmful content resurfaces so we can act fast to suppress it.",
  },
];

export function PrivacySection({
  heading = "How We Safeguard Your Privacy",
  features = DEFAULT_FEATURES,
}: PrivacySectionProps) {
  return (
    <section className="bg-[#f7f7f7] py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(1.35rem,2.5vw,1.75rem)] tracking-[-0.02em] mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#ebebeb]">
              <div className="w-10 h-10 rounded-lg bg-[#f0f0f0] flex items-center justify-center mb-4 text-xl">
                {feature.iconEmoji ?? "🔒"}
              </div>
              <h3 className="text-[#1a1a1a] font-semibold text-[14px] leading-snug mb-2">{feature.title}</h3>
              {feature.description && (
                <p className="text-[#777] text-[13px] leading-relaxed">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
