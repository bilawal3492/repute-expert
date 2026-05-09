"use client";

import React from "react";
import Image from "next/image";

const PARTNERS = [
  { src: "/images/partner-1.png", alt: "Virgin Active" },
  { src: "/images/partner-2.png", alt: "Hertz" },
  { src: "/images/partner-3.png", alt: "Radisson Hotels & Resorts" },
  { src: "/images/partner-4.png", alt: "Auto Z" },
  { src: "/images/partner-5.png", alt: "Jumeirah Hotels & Resorts" },
  { src: "/images/partner-6.png", alt: "Ali Bin Ali Hospitality" },
];

export function PartnersSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Partners"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* Heading */}
        <h2
          className="text-[#1a1a1a] font-normal tracking-[-0.02em] mb-10 lg:mb-12"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
        >
          Partners
        </h2>

        {/* 3-col grid, 2 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {PARTNERS.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center rounded-2xl py-10 px-8 bg-white shadow-[0px_0px_12px_2px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_18px_4px_rgba(0,0,0,0.08)] transition-all duration-200"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={180}
                height={70}
                className="object-contain max-h-[60px] w-auto"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
