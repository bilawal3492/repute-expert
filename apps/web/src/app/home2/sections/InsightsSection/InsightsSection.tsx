"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const INSIGHTS = [
  {
    image: "/images/blog-1.png",
    category: "INSIGHTS - CONSUMER STUDY",
    title: "70% Of Consumers Read Online Reviews Before Booking A Restaurant Or Hotel",
    href: "/blog/online-reputation-most-valuable-business-asset",
  },
  {
    image: "/images/blog-2.png",
    category: "INSIGHTS - HEALTHCARE INDUSTRY",
    title: "About 94% Of Patients Today Use Online Reviews To Evaluate A Provider (Healthcare, Clinic, Dental)",
    href: "/blog/how-search-results-shape-perception",
  },
  {
    image: "/images/blog-3.png",
    category: "INSIGHTS - AUTOMOTIVE INDUSTRY",
    title: "92–93% Of Consumers Read Online Reviews Before Making Initial Enquiry WHI",
    href: "/blog/respond-when-reputation-under-attack",
  },
  {
    image: "/images/blog-4.png",
    category: "INSIGHTS - AI IS REDEFINING SEARCH",
    title: 'University Of Virginia - "Nearly 60% Of Consumers Say They\'ve Used AI To Help Them Shop."',
    href: "/blog/building-authority-strategic-content-placement",
  },
];

export function InsightsSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Insights"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 lg:mb-12">
          <h2
            className="text-[#1a1a1a] font-normal tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
          >
            Insights
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
          >
            All Posts
          </Link>
        </div>

        {/* Cards grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {INSIGHTS.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group flex flex-col gap-4"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-xl aspect-[3/2]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Category */}
              <p className="text-[#1a1a1a] text-[11px] font-semibold tracking-[0.08em] uppercase leading-none">
                {post.category}
              </p>

              {/* Title */}
              <h3 className="text-[#1a1a1a] text-[16px] font-normal leading-[1.45] tracking-[-0.01em] group-hover:text-[#FF461E] transition-colors duration-200">
                {post.title}
              </h3>

              {/* Read More */}
              <div className="flex items-center gap-2 text-[#1a1a1a] text-[12px] font-semibold tracking-[0.06em] uppercase mt-auto">
                <span>READ MORE</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8l4 4-4 4M8 12h8" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
