"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function GoogleAIOverviewSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Google AI Overview"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ── Two-column grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text ───────────────────────────────────────── */}
          <div>
            <h2
              className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-6 text-justify lg:text-left"
            >
              Google &lsquo;AI Overview&rsquo;
            </h2>

            <p
              className="text-[#1a1a1a] font-semibold leading-[1.5] mb-5 text-justify lg:text-left"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              Google AI Overviews consolidate information from multiple sources
              into a single AI-generated answer, changing how users discover
              businesses online.
            </p>

            <p className="text-[#444] text-[14px] sm:text-[15px] leading-[1.8] text-justify lg:text-left">
              Google&rsquo;s AI Overviews are changing how customers discover
              businesses online. Instead of browsing multiple links, users are
              increasingly shown a single AI-generated answer drawn from across
              the web. That means your business needs to be a source Google
              trusts and surfaces. Reputation Experts helps keep your business
              visible in AI-driven search by optimising your Google Business
              Profile, improving review signals, and structuring your online
              presence so Google favours you over competitors.
            </p>
          </div>

          {/* ── Right: image ─────────────────────────────────────── */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[580px] rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-[#e8e8e8]">
              <Image
                src="/images/dental-3.png"
                alt="Google AI Overview search result example"
                width={1160}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>

        {/* ── CTA buttons ──────────────────────────────────────────── */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="tel:08006546009"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1a1a1a] text-white text-[15px] font-medium tracking-wide hover:bg-[#333] transition-colors duration-200"
          >
            0800 654 6009
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FF461E] text-white text-[15px] font-medium tracking-wide hover:bg-[#e63b15] transition-colors duration-200"
          >
            Talk To Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
