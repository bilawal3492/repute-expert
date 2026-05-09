"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import styles from "./OnlineReputationExpertsSection.module.css";

/* ─── Data ────────────────────────────────────────────────────────────── */

const CARDS = [
  {
    title: "Review Dispute & Removal",
    description:
      "We legally remove harmful, fake, malicious, and policy-violating reviews from online platforms like Google Maps that are damaging your reputation, on ongoing bases.",
  },
  {
    title: "Review Generation",
    description:
      "We help your business generate a steady stream of positive reviews that builds trust, strengthens your Google rating, and drives more customers to choose you over competitors.",
  },
  {
    title: "Google 'AI Overview'",
    description:
      "Reputation Experts keeps your business visible in AI-driven search by optimising your Google Business Profile, driving consistent clients' reviews, and structuring your online presence so Google surfaces you, not your competitors.",
  },
  {
    title: "Digital PR & Authority",
    description:
      "We help businesses build brand authority through strategic features and articles across major, niche, and local media outlets, strengthening visibility in Google AI Overviews and recommendations in ChatGPT.",
  },
  {
    title: "Search Result Management",
    description:
      "We suppress damaging search results and replace them with authoritative, trust-building content that presents your business properly on page one.",
  },
  {
    title: "Reputation Protection",
    description:
      "Real-time alerts whenever your business is mentioned online. New review? We notify you. Negative article? We flag it — so you're never caught off guard again.",
  },
];

/* ─── Helpers ─────────────────────────────────────────────────────────── */

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

/* ─── Component ───────────────────────────────────────────────────────── */

export function OnlineReputationExpertsSection() {
  const [index, setIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = CARDS.length - visibleCount;
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const GAP = 16;

  const getTranslateX = useCallback((i: number) => {
    const vp = viewportRef.current;
    if (!vp) return 0;
    const cardWidth = (vp.offsetWidth - GAP * (visibleCount - 1)) / visibleCount;
    return i * (cardWidth + GAP);
  }, [visibleCount]);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${getTranslateX(clamped)}px)`;
    }
  }, [maxIndex, getTranslateX]);

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Re-apply transform on resize
  useEffect(() => {
    const clamped = Math.min(index, Math.max(0, CARDS.length - visibleCount));
    if (clamped !== index) setIndex(clamped);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${getTranslateX(clamped)}px)`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  // Touch swipe
  const touchStartX = useRef<number | null>(null);

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Online Reputation Experts"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* ── Heading ──────────────────────────────────────── */}
        <h2
          className="text-[#1a1a1a] leading-[1.15] tracking-[-0.02em] mb-5"
          style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 400 }}
        >
          Online{" "}
          <strong style={{ fontWeight: 700 }}>Reputation Experts</strong>
        </h2>

        {/* ── Description + arrows ─────────────────────────── */}
        <div className="mb-6 lg:mb-8">
          <div className="flex items-start justify-between gap-4">
            <p className="text-[#555] text-[15px] leading-[1.7] max-w-[680px]">
              We help individuals and businesses manage, protect, and improve how they appear online — across search results, review platforms, and social media.
              Your online reputation shapes first impressions, whether you&apos;re addressing unwanted content or building a stronger digital presence, we can help.
            </p>
            <div className="hidden sm:flex items-start gap-2 flex-shrink-0 pt-1">
              <button onClick={prev} disabled={index === 0} className={styles.navBtn} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5.5 8 10 13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={next} disabled={index >= maxIndex} className={styles.navBtn} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l4.5 5L6 13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Carousel ─────────────────────────────────────── */}
        <div className={styles.clipWrapper}>
          <div ref={viewportRef} className={styles.viewport}>
            <div
              ref={trackRef}
              className={styles.track}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const delta = touchStartX.current - e.changedTouches[0].clientX;
                if (delta > 40) next();
                else if (delta < -40) prev();
                touchStartX.current = null;
              }}
            >
              {CARDS.map((card, i) => (
                <div key={i} className={styles.card}>
                  <h3
                    className="text-[#1a1a1a] leading-[1.3] tracking-[-0.01em] mb-3"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)", fontWeight: 700 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#555] text-[14px] leading-[1.7]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Arrows below cards — mobile only ─────────────── */}
        <div className="flex sm:hidden items-center gap-2 mt-6">
          <button onClick={prev} disabled={index === 0} className={styles.navBtn} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5.5 8 10 13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button onClick={next} disabled={index >= maxIndex} className={styles.navBtn} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l4.5 5L6 13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
