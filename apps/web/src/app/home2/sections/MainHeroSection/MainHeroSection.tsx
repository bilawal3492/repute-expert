"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MainHeroSection.module.css";

export interface MainHeroSectionProps {
  headline?: string;
  ctaLabel?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function MainHeroSection({
  headline = "We Protect, Repair, and Grow Dubai Businesses Online Reputations.",
  ctaLabel = "Free Assessment",
  ctaLink = "/contact",
  imageSrc = "/images/home-new.png",
  imageAlt = "Dubai business online reputation management",
}: MainHeroSectionProps) {
  return (
    <section
      className="bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Hero"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
        {/* ── Image with text overlay ───────────────────────── */}
        <div
          className={`${styles.fadeUp} relative w-full rounded-2xl overflow-hidden`}
          style={{ animationDelay: "0.05s" }}
        >
          {/* Responsive height: taller on mobile, wider on desktop */}
          <div className={`${styles.heroFrame} relative w-full`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
            />

            {/* ── Gradient: dark left, fades right ─────────── */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.80) 40%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.25) 85%, transparent 100%)",
              }}
            />

            {/* ── Content ───────────────────────────────────── */}
            <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
              <div className="w-[85%] sm:w-[58%] lg:w-[42%]">

                {/* Heading */}
                <h1
                  className={`${styles.fadeUp} text-white leading-[1.18] tracking-[-0.02em] mb-5 sm:mb-6 lg:mb-8`}
                  style={{
                    fontSize: "clamp(1.25rem, 4.5vw, 2.8rem)",
                    fontWeight: 400,
                    animationDelay: "0.15s",
                  }}
                >
                  We Protect, Repair,{" "}
                  <span style={{ fontWeight: 300 }}>and </span>
                  <strong style={{ fontWeight: 700 }}>
                    Grow Dubai Businesses Online Reputations.
                  </strong>
                </h1>

                {/* CTA Button */}
                <Link
                  href={ctaLink}
                  className={`${styles.fadeUp} inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#FF461E] text-white text-[13px] sm:text-[15px] font-medium hover:bg-[#e63b15] transition-colors`}
                  style={{ animationDelay: "0.25s" }}
                >
                  {ctaLabel}
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
