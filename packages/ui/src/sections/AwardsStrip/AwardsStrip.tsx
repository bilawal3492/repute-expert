"use client";

import React from "react";
import Image from "next/image";
import styles from "./AwardsStrip.module.css";

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface Mention {
  logo: React.ReactNode;
  name: string;
  linkText?: string;
  url?: string;
}

export interface MediaCard {
  image?: string;
  overlay?: React.ReactNode;
  url?: string;
}

export interface AwardsStripProps {
  heading?: string;
  mentions?: Mention[];
  middleCards?: MediaCard[];
  rightCards?: MediaCard[];
}

/* ─── SVG Logos (inline – zero external deps) ─────────────────────────── */

const CBSLogo = () => (
  <svg width="68" height="24" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" stroke="#1a1a1a" strokeWidth="2.2" fill="none"/>
    <ellipse cx="20" cy="20" rx="7" ry="11" fill="#1a1a1a"/>
    <text x="46" y="29" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="26" fill="#1a1a1a">CBS</text>
  </svg>
);

const BBCLogo = () => (
  <div className="flex gap-[2px]">
    {["B", "B", "C"].map((l, i) => (
      <span key={i} className="w-[24px] h-[24px] bg-[#1a1a1a] text-white text-[14px] font-bold flex items-center justify-center rounded-[1px]">{l}</span>
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
  <div className="flex items-center gap-1.5">
    <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
      <ellipse cx="16" cy="10" rx="4.5" ry="9" fill="#e4002b" transform="rotate(-30 16 10)"/>
      <ellipse cx="10" cy="20" rx="4.5" ry="9" fill="#ff6600" transform="rotate(-75 10 20)"/>
      <ellipse cx="16" cy="34" rx="4.5" ry="9" fill="#009639" transform="rotate(30 16 34)"/>
      <ellipse cx="32" cy="34" rx="4.5" ry="9" fill="#0089d0" transform="rotate(-30 32 34)"/>
      <ellipse cx="38" cy="20" rx="4.5" ry="9" fill="#6460aa" transform="rotate(75 38 20)"/>
      <ellipse cx="32" cy="10" rx="4.5" ry="9" fill="#ffb612" transform="rotate(30 32 10)"/>
    </svg>
    <span className="text-[15px] font-bold text-[#1a1a1a]" style={{ fontFamily: "Arial, sans-serif" }}>NBC</span>
  </div>
);

const DigitalJournalLogo = () => (
  <div className="flex items-center gap-[2px]">
    <span className="bg-[#c8102e] text-white text-[7.5px] font-bold px-[3px] py-[2px] leading-none rounded-[1px]">DIGITAL</span>
    <span className="bg-[#c8102e] text-white text-[7.5px] font-bold px-[3px] py-[2px] leading-none rounded-[1px]">JOURNAL</span>
  </div>
);

/* ─── Overlay logos for media cards ───────────────────────────────────── */

const ReddotOverlay = () => (
  <div className="flex items-center gap-3">
    <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2"/>
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={i} cx="40" cy={18 + i * 10} rx={28 - i * 3.5} ry="3" stroke="white" strokeWidth="1.5" fill="none"/>
      ))}
    </svg>
    <span className="text-white text-[22px] font-medium tracking-[-0.01em]">reddot</span>
  </div>
);

const JEOverlay = () => (
  <div className="w-[90px] h-[90px] rounded-full bg-[#1a1a1a] flex items-center justify-center">
    <span className="text-white text-[32px]" style={{ fontFamily: "Georgia, serif" }}>JE</span>
  </div>
);

const ForbesOverlay = () => (
  <span className="text-white text-[40px] font-bold italic tracking-[-0.02em] drop-shadow-lg" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Forbes</span>
);

const FintechTimesOverlay = () => (
  <div className="flex items-center gap-1.5">
    <span className="text-white text-[15px] tracking-[0.02em] drop-shadow-lg" style={{ fontFamily: "Georgia, serif" }}>THE</span>
    <span className="bg-white text-[#1a1a1a] text-[15px] px-2 py-0.5 font-bold" style={{ fontFamily: "Georgia, serif" }}>FINTECH</span>
    <span className="text-white text-[15px] tracking-[0.02em] drop-shadow-lg" style={{ fontFamily: "Georgia, serif" }}>TIMES</span>
  </div>
);

/* ─── Arrow Icon ──────────────────────────────────────────────────────── */

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

/* ─── Defaults ────────────────────────────────────────────────────────── */

const DEFAULT_MENTIONS: Mention[] = [
  { logo: <CBSLogo />, name: "CBS", linkText: "Read Full Article", url: "#" },
  { logo: <BBCLogo />, name: "BBC", linkText: "Read Full Article", url: "#" },
  { logo: <FOXNewsLogo />, name: "FOX News", linkText: "Read Full Article", url: "#" },
  { logo: <BusinessInsiderLogo />, name: "Business Insider", linkText: "Read Full Article", url: "#" },
  { logo: <NBCLogo />, name: "NBC", linkText: "Read Full Article", url: "#" },
  { logo: <DigitalJournalLogo />, name: "Digital Journal", linkText: "Read Full Article", url: "#" },
];

const DEFAULT_MIDDLE_CARDS: MediaCard[] = [
  { image: "/images/image-1.webp", overlay: <ReddotOverlay />, url: "#" },
  { image: "/images/image-2.webp", overlay: <JEOverlay />, url: "#" },
];

const DEFAULT_RIGHT_CARDS: MediaCard[] = [
  { image: "/images/image-3.webp", overlay: <ForbesOverlay />, url: "#" },
  { image: "/images/image-4.webp", overlay: <FintechTimesOverlay />, url: "#" },
];

/* ─── Component ───────────────────────────────────────────────────────── */

export function AwardsStrip({
  heading = "Awards and Mentions",
  mentions = DEFAULT_MENTIONS,
  middleCards = DEFAULT_MIDDLE_CARDS,
  rightCards = DEFAULT_RIGHT_CARDS,
}: AwardsStripProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Heading */}
        <h2 className="text-[#1a1a1a] font-normal text-[clamp(1.5rem,3vw,2.25rem)] tracking-[-0.02em] mb-8 lg:mb-10">
          {heading}
        </h2>

        {/* 3-column grid */}
        <div className={styles.grid}>
          {/* ─── Left Column: Mentions ─── */}
          <div className={styles.mentionsCol}>
            {mentions.map((mention, i) => (
              <a
                key={`mention-${i}`}
                href={mention.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mentionRow}
              >
                <div className={styles.mentionLogo}>{mention.logo}</div>
                <span className={styles.mentionName}>{mention.name}</span>
                <span className={styles.mentionLink}>{mention.linkText ?? "Read Full Article"}</span>
                <ArrowUpRight className={styles.mentionArrow} />
              </a>
            ))}
          </div>

          {/* ─── Middle Column: 2 stacked cards ─── */}
          <div className={styles.cardsCol}>
            {middleCards.map((card, i) => (
              <a
                key={`mid-${i}`}
                href={card.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaCard}
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className={styles.mediaCardOverlay} />
                <div className={styles.mediaCardContent}>{card.overlay}</div>
                <div className={styles.mediaCardArrowBadge}>
                  <ArrowUpRight />
                </div>
              </a>
            ))}
          </div>

          {/* ─── Right Column: 2 stacked cards ─── */}
          <div className={styles.cardsCol}>
            {rightCards.map((card, i) => (
              <a
                key={`right-${i}`}
                href={card.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mediaCard}
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
                <div className={styles.mediaCardOverlay} />
                <div className={styles.mediaCardContent}>{card.overlay}</div>
                <div className={styles.mediaCardArrowBadge}>
                  <ArrowUpRight />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
