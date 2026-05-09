"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CaseStudyItem {
  quote: string;
  avatar?: { src: string; alt: string };
  name: string;
  title: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    quote:
      "New aesthetics clinic in Jumeirah, suffered from low review count - no trust signals. Managed to build strong reputation bringing the overall score to over 4.9",
    avatar: { src: "/images/dental-case-study-1.png", alt: "Aesthetics Clinic" },
    name: "Aesthetics Clinic",
    title: "Jumeirah, Dubai",
  },
  {
    quote:
      "Car Rental Office in Business Bay struggled to get online booking with 3.4 score, increased the score to 4.7 in 4 months, online bookings doubled.",
    avatar: { src: "/images/dental-case-study-2.png", alt: "Luxury Car Rental Company" },
    name: "Luxury Car Rental Company",
    title: "Business Bay, Dubai",
  },
  {
    quote:
      "Pool fit-out contractor tripled revenue after 5 months working with us, now recommended by Google AI Overview and ChatGPT for swimming pool contractor in Dubai.",
    avatar: { src: "/images/dental-case-study-3.png", alt: "Swimming Pool Contractor" },
    name: "Swimming Pool Contractor",
    title: "Dubai Investment Park, Dubai",
  },
];

export function DentalCaseStudiesSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevActive = useRef(active);

  const handleSelect = (i: number) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      prevActive.current = i;
      setVisible(true);
    }, 180);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Case Studies"
    >
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">

        {/* Heading row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em]">
            Case Studies
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0f0f0f] text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            Talk To Expert
          </Link>
        </div>

        {/* DESKTOP: expanding cards */}
        <div className="hidden lg:flex gap-3 items-stretch">
          {CASE_STUDIES.map((t, i) => {
            const isActive = i === active;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="relative bg-[#f4f4f4] rounded-2xl p-8 flex flex-col justify-between min-h-[340px]"
                  style={{
                    flex: "1 1 0%",
                    minWidth: 0,
                    transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e8502a]" />

                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                    }}
                  >
                    <div className="text-[56px] font-serif leading-none text-[#0f0f0f] mb-3 select-none">&ldquo;</div>
                    <blockquote>
                      <p className="text-[#0f0f0f] text-[clamp(0.9rem,1.4vw,1.05rem)] font-medium leading-[1.7] tracking-[-0.01em]">
                        {t.quote}
                      </p>
                    </blockquote>
                  </div>

                  <footer
                    className="flex items-center gap-3 mt-8"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: "opacity 0.22s ease 0.05s",
                    }}
                  >
                    {t.avatar ? (
                      <Image
                        src={t.avatar.src}
                        alt={t.avatar.alt}
                        width={44}
                        height={44}
                        className="w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0">
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-[#0f0f0f] font-semibold text-[14px]">{t.name}</p>
                      <p className="text-[#888] text-[12px]">{t.title}</p>
                    </div>
                  </footer>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="bg-[#f7f7f7] rounded-2xl p-5 flex flex-col justify-between min-h-[340px] hover:bg-[#f0f0f0] cursor-pointer overflow-hidden"
                style={{
                  flex: "0 0 150px",
                  width: 150,
                  transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1), background-color 0.2s",
                }}
                aria-label={`View case study: ${t.title}`}
              >
                <div className="text-[32px] font-serif leading-none text-[#bbb] select-none">&ldquo;</div>
                <div className="mt-auto">
                  {t.avatar ? (
                    <Image
                      src={t.avatar.src}
                      alt={t.avatar.alt}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
                      {t.name[0]}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* MOBILE: single card with fade + dots */}
        <div className="lg:hidden">
          <div className="relative bg-[#f4f4f4] rounded-2xl p-7 flex flex-col justify-between min-h-[320px]">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <div className="text-[48px] font-serif leading-none text-[#0f0f0f] mb-2 select-none">&ldquo;</div>
              <p className="text-[#0f0f0f] text-[15px] font-medium leading-[1.7] text-justify">
                {CASE_STUDIES[active].quote}
              </p>
            </div>
            <footer
              className="flex items-center gap-3 mt-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.22s ease 0.05s",
              }}
            >
              {CASE_STUDIES[active].avatar && (
                <Image
                  src={CASE_STUDIES[active].avatar!.src}
                  alt={CASE_STUDIES[active].avatar!.alt}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
              )}
              <div>
                <p className="text-[#0f0f0f] font-semibold text-[13px]">{CASE_STUDIES[active].name}</p>
                <p className="text-[#888] text-[12px]">{CASE_STUDIES[active].title}</p>
              </div>
            </footer>
          </div>

          <div className="flex items-center justify-center gap-2.5 mt-5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-[#0f0f0f]" : "w-2 h-2 bg-[#ccc]"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
