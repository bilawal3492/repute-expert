"use client";

import React from "react";
import Link from "next/link";

/* ─── Platform logo components — all monochrome black ─────────────────── */

function GoogleMapsLogo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Black map pin */}
      <svg width="20" height="24" viewBox="0 0 20 26" fill="none">
        <path
          d="M10 0C4.48 0 0 4.48 0 10c0 7.5 10 16 10 16s10-8.5 10-16C20 4.48 15.52 0 10 0z"
          fill="#1a1a1a"
        />
        <circle cx="10" cy="10" r="3.5" fill="white" />
      </svg>
      {/* Text: "Google" normal + "Maps" normal — matching the wordmark weight */}
      <span style={{ fontSize: "17px", fontFamily: "Arial, sans-serif", color: "#1a1a1a", letterSpacing: "-0.01em" }}>
        <span style={{ fontWeight: 400 }}>Google </span>
        <span style={{ fontWeight: 500 }}>Maps</span>
      </span>
    </div>
  );
}

function TrustpilotLogo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Solid black star */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#1a1a1a">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
      <span style={{ fontSize: "17px", fontFamily: "Arial, sans-serif", fontWeight: 400, color: "#1a1a1a" }}>
        Trustpilot
      </span>
    </div>
  );
}

function FacebookLogo() {
  return (
    /* Facebook wordmark — bold lowercase, no icon */
    <span style={{
      fontSize: "22px",
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontWeight: 700,
      color: "#1a1a1a",
      letterSpacing: "-0.02em",
    }}>
      facebook
    </span>
  );
}

function GoogleAIOverviewLogo() {
  return (
    <div className="flex items-center gap-[5px]">
      {/* Google "G" — exact path from Google's brand mark, monochrome */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="22"
        height="22"
        fill="#1a1a1a"
      >
        <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.87 0 112.2-22.48 151.37-63.2 41.13-42.81 63.82-103 63.82-168.18 0-17.89-1.16-36.37-8.16-27.14z" />
      </svg>
      {/* 4-pointed sparkle */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1a1a">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
      </svg>
      <span style={{ fontSize: "15px", fontFamily: "Arial, sans-serif", fontWeight: 400, color: "#1a1a1a" }}>
        AI Overview
      </span>
    </div>
  );
}

/* ─── Component ───────────────────────────────────────────────────────── */

export function PlatformsAndAISection() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — Platforms
      ════════════════════════════════════════════════════════════ */}
      <section
        className="bg-white py-14 lg:py-20"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        aria-label="Platforms"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

          {/* Header */}
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <h2
              className="text-[#1a1a1a] leading-[1.15] tracking-[-0.02em]"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 400 }}
            >
              Platforms
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
            >
              Free Assessment
            </Link>
          </div>

          {/* Platform cards — 4 cols desktop, 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {[
              <GoogleMapsLogo key="gm" />,
              <TrustpilotLogo key="tp" />,
              <FacebookLogo key="fb" />,
              <GoogleAIOverviewLogo key="ai" />,
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-2xl py-8 sm:py-10 px-4 bg-white shadow-[0px_0px_12px_2px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_18px_4px_rgba(0,0,0,0.08)] transition-all duration-200"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — Get Recommended by AI
      ════════════════════════════════════════════════════════════ */}
      <section
        className="bg-white pb-14 lg:pb-20"
        style={{ fontFamily: "'Roboto', sans-serif" }}
        aria-label="Get Recommended by AI"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

          {/* Heading */}
          <h2
            className="text-[#1a1a1a] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-14"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 400 }}
          >
            Get Recommended by AI
          </h2>

          {/* Row 1 — Google AI Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pb-10 lg:pb-14 border-b border-[#efefef]">
            <div>
              <h3
                className="text-[#1a1a1a] leading-[1.2] tracking-[-0.01em]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", fontWeight: 400 }}
              >
                Google AI Overview
              </h3>
            </div>
            <p className="text-[#555] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
              Search is changing. A growing share of traffic now comes from Google&apos;s AI
              Overviews, which deliver a single AI-generated answer instead of a list of links. To be
              recommended, your business needs the signals AI trusts most: a high volume of
              positive reviews, minimal negative content, and authoritative coverage from global
              publishers. Reputation Experts engineers all three. We grow your positive reviews,
              suppress damaging results, and secure editorial placements in the publications
              Google&apos;s AI treats as authoritative, so when AI recommends a business in your
              space, it recommends yours.
            </p>
          </div>

          {/* Row 2 — AI Assistants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pt-10 lg:pt-14">
            <div>
              <h3
                className="text-[#1a1a1a] leading-[1.2] tracking-[-0.01em] mb-3"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", fontWeight: 400 }}
              >
                AI Assistants
              </h3>
              <p className="text-[#888] text-[14px] leading-[1.65]">
                ChatGPT, Claude, Grok, Meta AI Assistant,<br className="hidden sm:block" />
                Apple Siri, Amazon Alexa
              </p>
            </div>
            <p className="text-[#555] text-[14px] sm:text-[15px] leading-[1.8] text-justify">
              AI assistants are now the first place customers ask for recommendations, and their
              answers are shaped by what&apos;s published about you across the open web. ChatGPT,
              Claude and Grok pull from reviews, news coverage, Wikipedia, and trusted directories
              to decide which businesses to surface. Reputation Experts ensures every signal
              these models read is working in your favour: strong review profiles, suppressed
              negative content, and verified coverage in global publications. The result is
              consistent, positive recommendations across every major AI platform, turning AI
              conversations into qualified inbound leads.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
