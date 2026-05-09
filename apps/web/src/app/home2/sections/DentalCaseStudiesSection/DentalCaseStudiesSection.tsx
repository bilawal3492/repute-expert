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
    avatar: { src: "/images/asthetic-clinic.png", alt: "Aesthetics Clinic" },
    name: "Aesthetics Clinic",
    title: "Jumeirah, Dubai",
  },
  {
    quote:
      "Car Rental Office in Business Bay struggled to get online booking with 3.4 score, increased the score to 4.7 in 4 months, online bookings doubled.",
    avatar: { src: "/images/luxury-car.png", alt: "Luxury Car Rental Company" },
    name: "Luxury Car Rental Company",
    title: "Business Bay, Dubai",
  },
  {
    quote:
      "Pool fit-out contractor tripled revenue after 5 months working with us, now recommended by Google AI Overview and ChatGPT for swimming pool contractor in Dubai.",
    avatar: { src: "/images/swiming-pool.png", alt: "Swimming Pool Contractor" },
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
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-label="Case Studies"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* Heading row */}
        <div className="flex items-center justify-between mb-10 lg:mb-14">
          <h2
            className="text-[#1a1a1a] leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", fontWeight: 400 }}
          >
            Case <strong style={{ fontWeight: 700 }}>Studies</strong>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0f0f0f] text-white text-[13px] px-5 py-2.5 hover:bg-[#333] transition-colors whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            Talk To Expert
          </Link>
        </div>

        {/* DESKTOP: expanding cards */}
        <div className="hidden lg:flex gap-4 items-stretch">
          {CASE_STUDIES.map((t, i) => {
            const isActive = i === active;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="rounded-2xl p-10 flex flex-col justify-between"
                  style={{
                    flex: "1 1 0%",
                    minWidth: 0,
                    minHeight: 360,
                    backgroundColor: "#F6F6F8",
                    transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                    }}
                  >
                    <blockquote className="flex items-start gap-3">
                      <span
                        className="select-none shrink-0 leading-none text-[#1a1a1a]"
                        style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "2px" }}
                      >
                        &ldquo;
                      </span>
                      <p
                        className="text-[#1a1a1a] leading-[1.65]"
                        style={{ fontSize: "26px", fontWeight: 300, fontFamily: "'Inter', sans-serif" }}
                      >
                        {t.quote}
                      </p>
                    </blockquote>
                  </div>

                  <footer
                    className="flex items-center gap-3 mt-10"
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
                      <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] text-sm shrink-0" style={{ fontWeight: 700 }}>
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-[#1a1a1a] text-[14px]" style={{ fontWeight: 500 }}>{t.name}</p>
                      <p className="text-[#888] text-[13px]" style={{ fontWeight: 400 }}>{t.title}</p>
                    </div>
                  </footer>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="rounded-2xl p-6 flex flex-col items-center justify-between cursor-pointer overflow-hidden"
                style={{
                  flex: "0 0 140px",
                  width: 140,
                  minHeight: 360,
                  backgroundColor: "#F6F6F8",
                  transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1), background-color 0.2s",
                }}
                aria-label={`View case study: ${t.name}`}
              >
                <div
                  className="select-none leading-none text-[#bbb] w-full text-center"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
                >
                  &ldquo;
                </div>
                <div>
                  {t.avatar ? (
                    <Image
                      src={t.avatar.src}
                      alt={t.avatar.alt}
                      width={52}
                      height={52}
                      className="w-13 h-13 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] text-sm" style={{ fontWeight: 700 }}>
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
          <div className="rounded-2xl p-7 flex flex-col justify-between" style={{ minHeight: 320, backgroundColor: "#F6F6F8" }}>
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <blockquote className="flex items-start gap-3">
                <span
                  className="select-none shrink-0 leading-none text-[#1a1a1a]"
                  style={{ fontSize: "1.6rem", fontWeight: 700, marginTop: "2px" }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#1a1a1a] leading-[1.65]"
                  style={{ fontSize: "18px", fontWeight: 300, fontFamily: "'Inter', sans-serif" }}
                >
                  {CASE_STUDIES[active].quote}
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
                <p className="text-[#1a1a1a] text-[14px]" style={{ fontWeight: 500 }}>{CASE_STUDIES[active].name}</p>
                <p className="text-[#888] text-[13px]" style={{ fontWeight: 400 }}>{CASE_STUDIES[active].title}</p>
              </div>
            </footer>
          </div>

          <div className="flex items-center justify-center gap-2.5 mt-5">
            {CASE_STUDIES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-[#1a1a1a]" : "w-2 h-2 bg-[#ccc]"
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
