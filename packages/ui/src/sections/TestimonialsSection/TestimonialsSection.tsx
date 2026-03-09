"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "../../types";

export interface TestimonialItem {
  quote: string;
  avatar?: ImageAsset;
  name: string;
  title: string;
  linkedinUrl?: string;
}

export interface TestimonialsSectionProps {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  testimonials?: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Reputation Experts helped us restore our online reputation quickly and professionally. Within weeks, the harmful reviews were gone and our ratings improved significantly.",
    avatar: { src: "https://randomuser.me/api/portraits/men/32.jpg", alt: "James Mitchell" },
    name: "James Mitchell",
    title: "CEO, Mitchell & Co.",
  },
  {
    quote: "I was losing customers to fake negative reviews. The team identified the violations, built a strong case, and had the content removed faster than I expected.",
    avatar: { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Sarah Thompson" },
    name: "Sarah Thompson",
    title: "Owner, Thompson Dental Group",
  },
  {
    quote: "Outstanding service from start to finish. They kept us informed at every step and delivered results that directly improved our business performance.",
    avatar: { src: "https://randomuser.me/api/portraits/men/67.jpg", alt: "David Okonkwo" },
    name: "David Okonkwo",
    title: "Founder, Nexus Financial",
  },
];

export function TestimonialsSection({
  heading = "Testimonials",
  ctaLabel = "Contact us",
  ctaHref = "/contact",
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsSectionProps) {
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
    <section className="testimonials bg-white py-14 lg:py-20">
      <div className="testimonials__inner max-w-[1280px] mx-auto px-5 lg:px-8">

        {/* Heading row */}
        <div className="testimonials__header flex items-center justify-between mb-8">
          <h2 className="testimonials__heading text-[#0f0f0f] font-semibold text-[clamp(1.75rem,3.2vw,2.5rem)] tracking-[-0.01em]">
            {heading}
          </h2>
          <Link
            href={ctaHref}
            className="testimonials__cta inline-flex items-center rounded-full bg-[#0f0f0f] text-white text-[13px] font-medium px-5 py-2.5 hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* DESKTOP: expanding cards */}
        <div className="testimonials__cards hidden lg:flex gap-3 items-stretch">
          {testimonials.map((t, i) => {
            const isActive = i === active;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="testimonials__card testimonials__card--active relative bg-[#f4f4f4] rounded-2xl p-8 flex flex-col justify-between min-h-[340px]"
                  style={{
                    flex: "1 1 0%",
                    minWidth: 0,
                    transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <span className="testimonials__card-dot absolute top-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e8502a]" />

                  <div
                    className="testimonials__card-body"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(10px)",
                      transition: "opacity 0.22s ease, transform 0.22s ease",
                    }}
                  >
                    <div className="testimonials__card-quote-mark text-[56px] font-serif leading-none text-[#0f0f0f] mb-3 select-none">&ldquo;</div>
                    <blockquote>
                      <p className="testimonials__card-quote text-[#0f0f0f] text-[clamp(1rem,1.8vw,1.35rem)] font-medium leading-[1.55] tracking-[-0.01em]">
                        {t.quote}
                      </p>
                    </blockquote>
                  </div>

                  <footer
                    className="testimonials__card-author flex items-center gap-3 mt-8"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: "opacity 0.22s ease 0.05s",
                    }}
                  >
                    {t.avatar ? (
                      <Image
                        src={t.avatar.src}
                        alt={t.name}
                        width={44}
                        height={44}
                        className="testimonials__card-avatar w-11 h-11 rounded-xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="testimonials__card-avatar w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm shrink-0">
                        {t.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="testimonials__card-name text-[#0f0f0f] font-semibold text-[14px]">{t.name}</p>
                      <p className="testimonials__card-title text-[#888] text-[12px]">{t.title}</p>
                    </div>
                  </footer>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className="testimonials__card testimonials__card--collapsed bg-[#f7f7f7] rounded-2xl p-5 flex flex-col justify-between min-h-[340px] hover:bg-[#f0f0f0] cursor-pointer overflow-hidden"
                style={{
                  flex: "0 0 150px",
                  width: 150,
                  transition: "flex 0.45s cubic-bezier(0.4,0,0.2,1), background-color 0.2s",
                }}
                aria-label={`View testimonial by ${t.name}`}
              >
                <div className="testimonials__card-quote-mark text-[32px] font-serif leading-none text-[#bbb] select-none">&ldquo;</div>
                <div className="testimonials__card-author mt-auto">
                  {t.avatar ? (
                    <Image
                      src={t.avatar.src}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="testimonials__card-avatar w-11 h-11 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="testimonials__card-avatar w-11 h-11 rounded-xl bg-[#ddd] flex items-center justify-center text-[#1a1a1a] font-bold text-sm">
                      {t.name[0]}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* MOBILE: single card with fade animation */}
        <div className="testimonials__mobile lg:hidden">
          <div className="testimonials__card testimonials__card--mobile relative bg-[#f4f4f4] rounded-2xl p-7 flex flex-col justify-between min-h-[280px]">
            <span className="testimonials__card-dot absolute top-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#e8502a]" />
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <div className="text-[48px] font-serif leading-none text-[#0f0f0f] mb-2 select-none">&ldquo;</div>
              <p className="testimonials__card-quote text-[#0f0f0f] text-[16px] font-medium leading-[1.6]">
                {testimonials[active].quote}
              </p>
            </div>
            <footer
              className="flex items-center gap-3 mt-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.22s ease 0.05s",
              }}
            >
              {testimonials[active].avatar && (
                <Image
                  src={testimonials[active].avatar!.src}
                  alt={testimonials[active].name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
              )}
              <div>
                <p className="text-[#0f0f0f] font-semibold text-[13px]">{testimonials[active].name}</p>
                <p className="text-[#888] text-[12px]">{testimonials[active].title}</p>
              </div>
            </footer>
          </div>

          <div className="testimonials__dots flex items-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`testimonials__dot rounded-full transition-all duration-300 ${
                  i === active ? "w-5 h-1.5 bg-[#0f0f0f]" : "w-1.5 h-1.5 bg-[#ccc]"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
