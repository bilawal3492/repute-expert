"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ImageAsset } from "../../types";

export interface ServeCard {
  title: string;
  image: ImageAsset;
  href?: string;
}

export interface WhoWeServeSectionProps {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  cards?: ServeCard[];
}

const DEFAULT_CARDS: ServeCard[] = [
  {
    title: "Solutions for Individuals and Executives",
    image: { src: "/images/card-executives.png", alt: "Two business executives in conversation" },
    href: "/solutions/individuals",
  },
  {
    title: "Solutions for Small and Medium Businesses",
    image: { src: "/images/card-smb.png", alt: "Commercial service vehicle" },
    href: "/solutions/small-medium-business",
  },
  {
    title: "Solutions for Large Companies",
    image: { src: "/images/card-enterprise.png", alt: "Large open plan office" },
    href: "/solutions/enterprise",
  },
];

export function WhoWeServeSection({
  heading = "Who We Serve",
  ctaLabel = "Free Assessment",
  ctaHref = "/contact",
  cards = DEFAULT_CARDS,
}: WhoWeServeSectionProps) {
  return (
    <section className="who-we-serve bg-[#f2f2f2] py-14 lg:py-20">
      <div className="who-we-serve__inner max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Header row */}
        <div className="who-we-serve__header flex items-center justify-between mb-10">
          <h2 className="who-we-serve__heading text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em]">
            {heading}
          </h2>
          <Link
            href={ctaHref}
            className="who-we-serve__cta inline-flex items-center rounded-full text-white text-[13px] sm:text-[14px] font-medium px-5 py-2.5 transition-colors whitespace-nowrap"
            style={{ backgroundColor: '#e8502a' }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Cards */}
        <div className="who-we-serve__grid grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href ?? "#"}
              className="who-we-serve__card group relative rounded-2xl overflow-hidden aspect-[3/2] block"
            >
              <Image
                src={card.image.src}
                alt={card.image.alt ?? card.title}
                fill
                className="who-we-serve__card-image object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Dark overlay — gradient so top text and bottom text both readable */}
              <div className="who-we-serve__card-overlay absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
              {/* Title at top-left */}
              <div className="who-we-serve__card-title-wrap absolute top-0 left-0 right-0 px-5 pt-6">
                <p className="who-we-serve__card-title text-white font-medium text-[16px] leading-[1.4]">{card.title}</p>
              </div>
              {/* Explore Solutions at bottom with arrow */}
              <div className="who-we-serve__card-explore-wrap absolute bottom-0 left-0 right-0 px-5 py-5">
                <span className="who-we-serve__card-explore inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-[12px] font-normal rounded-full px-3.5 py-1.5">
                  Explore Solutions
                  <svg className="who-we-serve__card-explore-arrow" width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
