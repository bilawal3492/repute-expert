"use client";

import React from "react";
import Link from "next/link";

export function DentalCTASection() {
  return (
    <section
      className="bg-white py-10 lg:py-16 px-5 sm:px-6 lg:px-10"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Contact CTA"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* ── Dark rounded card ─────────────────────────────────── */}
        <div className="rounded-2xl bg-[#141414] px-8 sm:px-12 lg:px-16 py-14 lg:py-16">

          {/* ── Heading ──────────────────────────────────────────── */}
          <h2
            className="text-white font-normal leading-[1.15] tracking-[-0.02em] mb-14 lg:mb-16 max-w-[560px]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Let&apos;s build a reputation your practice deserves.
          </h2>

          {/* ── "Write us on" ─────────────────────────────────────── */}
          <p className="text-white/40 text-[13px] mb-5">Write us on</p>

          {/* ── Two email columns ────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {/* Free Case Assessment */}
            <div>
              <span className="inline-block border border-white/25 text-white/70 text-[13px] rounded-full px-4 py-1.5 mb-3">
                Free Case Assessment
              </span>
              <p>
                <a
                  href="mailto:uk@reputation-experts.co.uk"
                  className="text-white text-[16px] sm:text-[17px] font-normal hover:text-white/70 transition-colors"
                >
                  uk@reputation-experts.co.uk
                </a>
              </p>
            </div>

            {/* General Inquiries */}
            <div>
              <span className="inline-block border border-white/25 text-white/70 text-[13px] rounded-full px-4 py-1.5 mb-3">
                General Inquiries
              </span>
              <p>
                <a
                  href="mailto:info@reputation-experts.co.uk"
                  className="text-white text-[16px] sm:text-[17px] font-normal hover:text-white/70 transition-colors"
                >
                  info@reputation-experts.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* ── Divider ──────────────────────────────────────────── */}
          <div className="border-t border-white/10 mb-8" />

          {/* ── Bottom row ───────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-row items-center gap-3 sm:contents">
              {/* Talk To Expert button — first */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors whitespace-nowrap"
              >
                Talk To Expert
              </Link>

              {/* Phone button */}
              <a
                href="tel:08006546009"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/30 text-white text-[14px] font-medium hover:border-white/60 transition-colors whitespace-nowrap"
              >
                0800 654 6009
              </a>
            </div>

            {/* Tagline */}
            <p className="text-white/35 text-[13px] sm:ml-4 leading-snug">
              Join dental practices across the UK who trust us to protect and grow their online presence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
