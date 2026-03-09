"use client";

import React from "react";
import Image from "next/image";
import type { ImageAsset } from "../../types";

export interface Award {
  image?: ImageAsset;
  label: string;
  url?: string;
  year?: string;
  description?: string;
}

export interface RecognitionBadge {
  image: ImageAsset;
  label: string;
}

export interface AwardsStripProps {
  heading?: string;
  awards?: Award[];
  recognitionBadges?: RecognitionBadge[];
  recognitionsLabel?: string;
}

const DEFAULT_AWARDS: Award[] = [
  { image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/320px-BBC_World_News_2022_%28Boxed%29.svg.png", alt: "BBC" }, label: "BBC", description: "Reputation Pros", url: "#" },
  { image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Inc._logo.svg/320px-Inc._logo.svg.png", alt: "Inc." }, label: "Inc.", description: "Reputation Pros", url: "#" },
  { image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/320px-Forbes_logo.svg.png", alt: "Forbes" }, label: "Forbes", description: "Reputation Pros", url: "#" },
  { image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Business_Insider_Logo.svg/320px-Business_Insider_Logo.svg.png", alt: "Business Insider" }, label: "Business Insider", description: "Reputation Pros", url: "#" },
  { label: "TylerPryor", description: "Reputation Pros", url: "#" },
];

const DEFAULT_BADGES: RecognitionBadge[] = [
  { image: { src: "", alt: "" }, label: "Top Software" },
  { image: { src: "", alt: "" }, label: "Top Company" },
  { image: { src: "", alt: "" }, label: "Top Fintech" },
  { image: { src: "", alt: "" }, label: "Top UX" },
  { image: { src: "", alt: "" }, label: "Top Mobile" },
  { image: { src: "", alt: "" }, label: "Top iOS" },
  { image: { src: "", alt: "" }, label: "Top Managed" },
  { image: { src: "", alt: "" }, label: "Top Agency" },
];

export function AwardsStrip({
  heading = "Awards and Mentions",
  awards = DEFAULT_AWARDS,
  recognitionBadges = DEFAULT_BADGES,
  recognitionsLabel = "Recognitions",
}: AwardsStripProps) {
  const doubled = [...recognitionBadges, ...recognitionBadges];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(1.35rem,2.5vw,1.75rem)] tracking-[-0.02em] mb-6">
          {heading}
        </h2>

        <div className="divide-y divide-[#f0f0f0] mb-10">
          {awards.map((award, i) => (
            <a
              key={`${award.label}-${i}`}
              href={award.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 py-4 group hover:bg-[#fafafa] -mx-2 px-2 rounded-lg transition-colors"
            >
              <div className="w-[100px] shrink-0 flex items-center">
                {award.image ? (
                  <Image
                    src={award.image.src}
                    alt={award.image.alt ?? award.label}
                    width={100}
                    height={32}
                    className="h-6 w-auto object-contain grayscale opacity-60 group-hover:opacity-90 transition-opacity"
                  />
                ) : (
                  <span className="text-[#888] font-bold text-[13px]">{award.label}</span>
                )}
              </div>
              <span className="text-[#ccc] text-lg">•</span>
              <span className="text-[#999] text-[13px] group-hover:text-[#555] transition-colors">
                {award.description ?? award.label}
              </span>
              <svg className="ml-auto w-3.5 h-3.5 text-[#ccc] group-hover:text-[#555] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>

        {recognitionBadges.length > 0 && (
          <>
            <p className="text-[#1a1a1a] font-semibold text-[14px] mb-4">{recognitionsLabel}</p>
            <div className="overflow-hidden border-t border-[#f0f0f0] pt-5">
              <div className="flex animate-marquee gap-8" aria-hidden="true" style={{ width: "max-content" }}>
                {doubled.map((badge, i) => (
                  <div key={`${badge.label}-${i}`} className="shrink-0 flex flex-col items-center justify-center gap-1.5">
                    <span className="w-12 h-12 rounded-full bg-[#ebebeb] flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z"/>
                      </svg>
                    </span>
                    <span className="text-[11px] text-[#888] font-medium whitespace-nowrap">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
