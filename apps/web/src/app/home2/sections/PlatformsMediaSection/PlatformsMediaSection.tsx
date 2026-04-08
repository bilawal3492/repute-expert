"use client";

import React from "react";
import styles from "./PlatformsMediaSection.module.css";

/* ─── SVG Logos ───────────────────────────────────────────────────────── */

const CBSLogo = () => (
  <svg width="68" height="24" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" stroke="#1a1a1a" strokeWidth="2.2" fill="none" />
    <ellipse cx="20" cy="20" rx="7" ry="11" fill="#1a1a1a" />
    <text x="46" y="29" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#1a1a1a">CBS</text>
  </svg>
);

const BBCLogo = () => (
  <div className="flex gap-[2px] flex-shrink-0">
    {["B", "B", "C"].map((l, i) => (
      <span key={i} className="w-[20px] h-[20px] bg-[#1a1a1a] text-white text-[11px] font-bold flex items-center justify-center rounded-[1px]">{l}</span>
    ))}
  </div>
);

const FOXNewsLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <span className="text-[17px] font-black italic text-[#003366] tracking-[-0.03em] leading-none" style={{ fontFamily: "Arial Black, sans-serif" }}>FOX</span>
    <span className="text-[8px] font-bold text-[#c8102e] tracking-[0.08em] uppercase leading-none mt-[1px]" style={{ fontFamily: "Arial, sans-serif" }}>NEWS</span>
    <span className="text-[5.5px] text-[#c8102e] italic leading-none mt-[1px]" style={{ fontFamily: "Arial, sans-serif" }}>channel</span>
  </div>
);

const BusinessInsiderLogo = () => (
  <div className="flex flex-col leading-none">
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>BUSINESS</span>
    <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#1a1a1a] leading-tight" style={{ fontFamily: "Arial, sans-serif" }}>INSIDER</span>
  </div>
);

const NBCLogo = () => (
  <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
    <ellipse cx="16" cy="10" rx="4.5" ry="9" fill="#e4002b" transform="rotate(-30 16 10)" />
    <ellipse cx="10" cy="20" rx="4.5" ry="9" fill="#ff6600" transform="rotate(-75 10 20)" />
    <ellipse cx="16" cy="34" rx="4.5" ry="9" fill="#009639" transform="rotate(30 16 34)" />
    <ellipse cx="32" cy="34" rx="4.5" ry="9" fill="#0089d0" transform="rotate(-30 32 34)" />
    <ellipse cx="38" cy="20" rx="4.5" ry="9" fill="#6460aa" transform="rotate(75 38 20)" />
    <ellipse cx="32" cy="10" rx="4.5" ry="9" fill="#ffb612" transform="rotate(30 32 10)" />
  </svg>
);

const DigitalJournalLogo = () => (
  <div className="flex items-center gap-[2px]">
    <span className="bg-[#c8102e] text-white text-[7.5px] font-bold px-[3px] py-[2px] leading-none rounded-[1px]">DIGITAL</span>
    <span className="bg-[#c8102e] text-white text-[7.5px] font-bold px-[3px] py-[2px] leading-none rounded-[1px]">JOURNAL</span>
  </div>
);

const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

/* ─── Card overlay content (same as AwardsStrip homepage) ────────────── */

const ReddotOverlay = () => (
  <div className="flex items-center gap-3">
    <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={i} cx="40" cy={18 + i * 10} rx={28 - i * 3.5} ry="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      ))}
    </svg>
    <span className="text-[22px] font-medium tracking-[-0.01em]">reddot</span>
  </div>
);

const JEOverlay = () => (
  <div className="w-[90px] h-[90px] rounded-full bg-[#1a1a1a] flex items-center justify-center">
    <span className="text-white text-[32px]" style={{ fontFamily: "Georgia, serif" }}>JE</span>
  </div>
);

const ForbesOverlay = () => (
  <span className="text-[40px] font-bold italic tracking-[-0.02em]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Forbes</span>
);

const FintechTimesOverlay = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-[15px] tracking-[0.02em]" style={{ fontFamily: "Georgia, serif" }}>THE</span>
    <span className="text-[15px] px-2 py-0.5 font-bold border border-current" style={{ fontFamily: "Georgia, serif" }}>FINTECH</span>
    <span className="text-[15px] tracking-[0.02em]" style={{ fontFamily: "Georgia, serif" }}>TIMES</span>
  </div>
);

/* ─── Data ────────────────────────────────────────────────────────────── */

const MENTIONS = [
  { logo: <CBSLogo />, name: "CBS", url: "#" },
  { logo: <BBCLogo />, name: "BBC", url: "#" },
  { logo: <FOXNewsLogo />, name: "FOX News", url: "#" },
  { logo: <BusinessInsiderLogo />, name: "Business Insider", url: "#" },
  { logo: <NBCLogo />, name: "NBC", url: "#" },
  { logo: <DigitalJournalLogo />, name: "Digital Journal", url: "#" },
];

// Correct extensions per actual files in /public/images/
const MEDIA_IMAGES = [
  { src: "/images/media-1.webp", alt: "Media partner 1" },
  { src: "/images/media-2.png",  alt: "Media partner 2" },
  { src: "/images/media-3.png",  alt: "Media partner 3" },
  { src: "/images/media-4.svg",  alt: "Media partner 4" },
  { src: "/images/media-5.svg",  alt: "Media partner 5" },
  { src: "/images/media-6.svg",  alt: "Media partner 6" },
  { src: "/images/media-7.svg",  alt: "Media partner 7" },
  { src: "/images/media-8.webp", alt: "Media partner 8" },
  { src: "/images/media-9.png",  alt: "Media partner 9" },
  { src: "/images/media-10.png", alt: "Media partner 10" },
  { src: "/images/media-11.png", alt: "Media partner 11" },
];

/* ─── Media card — white bg + dark overlay by default, image + white overlay on hover ── */

function MediaCardItem({ image, overlay, url }: { image: string; overlay: React.ReactNode; url: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mediaCard}
      style={
        hovered && image
          ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${styles.mediaCardOverlay} ${hovered ? styles.overlayVisible : ""}`} />
      <div className={`${styles.mediaCardContent} ${hovered ? styles.contentOnHover : styles.contentDefault}`}>
        {overlay}
      </div>
      <div className={`${styles.arrowBadge} ${hovered ? styles.arrowOnHover : styles.arrowDefault}`}>
        <ArrowUpRight />
      </div>
    </a>
  );
}

/* ─── Component ───────────────────────────────────────────────────────── */

export function PlatformsMediaSection() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Platforms and Media Outlets"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* ── Heading ─────────────────────────────────────────────── */}
        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-10"
        >
          Platforms &amp; Media Outlets
        </h2>

        {/* ── 3-column grid (mentions + 2 card cols) ─────────────── */}
        <div className={styles.grid}>

          {/* Left: mention list */}
          <div className={styles.mentionsCol}>
            {MENTIONS.map((m, i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" className={styles.mentionRow}>
                <div className={styles.mentionLogo}>{m.logo}</div>
                <span className={styles.mentionName}>{m.name}</span>
                <span className={styles.mentionArrow}><ArrowUpRight /></span>
              </a>
            ))}
          </div>

          {/* Middle col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-1.webp" overlay={<ReddotOverlay />} url="#" />
            <MediaCardItem image="/images/image-2.webp" overlay={<JEOverlay />} url="#" />
          </div>

          {/* Right col: 2 media cards */}
          <div className={styles.cardsCol}>
            <MediaCardItem image="/images/image-3.webp" overlay={<ForbesOverlay />} url="#" />
            <MediaCardItem image="/images/image-4.webp" overlay={<FintechTimesOverlay />} url="#" />
          </div>
        </div>

        {/* ── Media Partners carousel ──────────────────────────────── */}
        <div className="mt-14 lg:mt-16">
          <h3 className="text-[#1a1a1a] text-[clamp(1.75rem,3.2vw,2.5rem)] font-medium tracking-[-0.02em] mb-6">
            Media Partners
          </h3>

          {/* Outer mask for fade edges */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeTrack}>
              {/* Duplicate for seamless loop */}
              {[...MEDIA_IMAGES, ...MEDIA_IMAGES].map((img, i) => (
                <div key={i} className={styles.marqueeItem}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.marqueeImg}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
