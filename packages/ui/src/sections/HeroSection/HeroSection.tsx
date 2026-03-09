"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ImageAsset, MuxAsset } from "../../types";

export interface HeroSectionProps {
  headline?: string;
  highlightWord?: string;
  quote?: string;
  quoteBold?: string;
  subQuote?: string;
  ctaLabel?: string;
  ctaLink?: string;
  mediaCaption?: string;
  mediaSrc?: string;
  videoSrc?: string;
  backgroundVideo?: MuxAsset;
  backgroundImage?: ImageAsset;
}

export function HeroSection({
  headline = "Protect your Business from Harmful Online Reviews",
  highlightWord = "",
  quote = "Professional assistance with assessing and disputing harmful or policy-violating online reviews and online content.",
  quoteBold = "Fast assessment. Confidential process.",
  subQuote = "Negative reviews can impact customer trust within hours. Understand your options before the damage spreads.",
  ctaLabel = "Free Reputation Case Assessment",
  ctaLink = "/contact",
  mediaCaption = "founder of Reputation Experts – a reputation management firm",
  mediaSrc = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
  videoSrc,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((v) => !v);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
    setMuted((v) => !v);
  };

  return (
    <section className="hero bg-[#f2f2f2] pt-[64px]" aria-label="Hero">
      <div className="hero__inner max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="hero__grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-12 lg:py-20 items-center">

          {/* ── Left: text ─────────────────────────────────────── */}
          <div className="hero__content">
            {/* Heading */}
            <h1
              className="hero__heading text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em] mb-6 lg:mb-8 fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              {highlightWord ? (
                <>
                  {headline}{" "}
                  <mark
                    className="hero__heading-highlight"
                    style={{
                      background: "rgba(180,210,255,0.5)",
                      color: "inherit",
                      borderRadius: "5px",
                      padding: "0 5px",
                    }}
                  >
                    {highlightWord}
                  </mark>
                </>
              ) : (
                headline
              )}
            </h1>

            {/* Quote paragraph + bold line */}
            <div className="hero__quote-block mb-6 lg:mb-7 fade-up" style={{ animationDelay: "0.15s" }}>
              <p className="hero__quote text-[#444] text-[15px] sm:text-[16px] leading-[1.75]">
                {quote}
              </p>
              {quoteBold && (
                <p className="hero__quote-bold text-[#1a1a1a] text-[15px] sm:text-[16px] font-bold leading-[1.75] mt-0.5">
                  {quoteBold}
                </p>
              )}
            </div>

            {/* Sub-quote paragraph */}
            {subQuote && (
              <div className="hero__subquote-block mb-8 lg:mb-10 fade-up" style={{ animationDelay: "0.2s" }}>
                <p className="hero__subquote text-[#444] text-[15px] sm:text-[16px] leading-[1.75]">
                  {subQuote}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="hero__cta-wrap fade-up" style={{ animationDelay: "0.25s" }}>
              <Link
                href={ctaLink}
                className="hero__cta inline-flex items-center rounded-full bg-[#28b44f] text-white text-[14px] sm:text-[15px] font-medium px-6 py-3 hover:bg-[#1d9440] transition-colors"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* ── Right: video / image card ──────────────────────── */}
          <div
            className="hero__media relative rounded-[22px] overflow-hidden aspect-[16/11] lg:aspect-auto lg:h-[500px] bg-[#c8c8c8] fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Video element */}
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={mediaSrc}
                autoPlay
                muted
                loop
                playsInline
                className="hero__video absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={mediaSrc}
                alt="Reputation management"
                fill
                className="hero__image object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}

            {/* Green live dot */}
            <span className="hero__live-dot absolute top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#28b44f] z-10 shadow-sm" />

            {/* Bottom gradient overlay with controls + caption */}
            <div className="hero__overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent pt-20 pb-5 px-5 z-10">
              {/* Controls row */}
              <div className="hero__controls flex items-center gap-2 mb-3">
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="hero__play-btn w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="currentColor">
                      <rect x="0" y="0" width="3.5" height="11" rx="1" />
                      <rect x="6.5" y="0" width="3.5" height="11" rx="1" />
                    </svg>
                  ) : (
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="currentColor">
                      <path d="M0 0l9 5.5L0 11z" />
                    </svg>
                  )}
                </button>

                {/* Mute / Unmute */}
                <button
                  onClick={toggleMute}
                  className="hero__mute-btn w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                      <path d="M1 4.5H3.8L7.5 1.5v10L3.8 8.5H1V4.5z" />
                      <path d="M11.5 3l2 2M13.5 3l-2 2" />
                    </svg>
                  ) : (
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                      <path d="M1 4.5H3.8L7.5 1.5v10L3.8 8.5H1V4.5z" />
                      <path d="M10 4c1.1 1 1.1 4 0 5M12 2c2 2 2 7 0 9" />
                    </svg>
                  )}
                </button>

                {/* Speed badge */}
                <span className="hero__speed-badge h-9 px-3.5 rounded-full bg-white/25 backdrop-blur-sm text-white text-[13px] font-medium flex items-center">
                  1x
                </span>
              </div>

              {/* Caption */}
              <p className="hero__caption text-white text-[13px] sm:text-[14px] font-medium leading-snug">
                {mediaCaption}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
