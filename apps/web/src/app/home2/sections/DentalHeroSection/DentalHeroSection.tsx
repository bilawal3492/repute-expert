"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./DentalHeroSection.module.css";

export interface DentalHeroSectionProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function DentalHeroSection({
  headline = "We protect and grow Dental Clinics\u2019 online reputations.",
  subtitle = "Improving online reputation directly affects clinics by helping them gain more bookings, build trust, and increase sales.",
  ctaLabel = "Free Assessment",
  ctaLink = "/contact",
  imageSrc = "/images/dental-1.png",
  imageAlt = "Dental clinic consultation",
}: DentalHeroSectionProps) {
  return (
    <section
      className="dental-hero bg-white pt-[64px]"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Hero"
    >
      <div className="dental-hero__inner max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ── Text block ─────────────────────────────────────── */}
        <div className="dental-hero__text pt-10 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 max-w-[720px]">
          <h1
            className={`${styles.fadeUp} dental-hero__heading text-[#0f0f0f] font-semibold leading-[1.12] tracking-[-0.02em] mb-5 lg:mb-6`}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              animationDelay: "0.05s",
            }}
          >
            {headline}
          </h1>

          <p
            className={`${styles.fadeUp} dental-hero__subtitle text-[#555] text-[15px] sm:text-[16px] leading-[1.7] mb-6 lg:mb-8 max-w-[580px]`}
            style={{ animationDelay: "0.15s" }}
          >
            {subtitle}
          </p>

          <Link
            href={ctaLink}
            className={`${styles.fadeUp} dental-hero__cta inline-flex items-center gap-2 text-[#0f0f0f] text-[14px] sm:text-[15px] font-medium underline underline-offset-4 decoration-[#0f0f0f] hover:decoration-[#555] hover:text-[#555] transition-colors`}
            style={{ animationDelay: "0.25s" }}
          >
            {ctaLabel}
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-[1px]"
            >
              <path
                d="M3 8.5h9m0 0L8.5 5M12 8.5L8.5 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Image block ────────────────────────────────────── */}
        <div
          className={`${styles.fadeUp} dental-hero__image-wrapper relative w-full`}
          style={{ animationDelay: "0.35s" }}
        >
          <div className="dental-hero__image-frame relative w-full rounded-2xl overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: "16 / 8" }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover grayscale"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
