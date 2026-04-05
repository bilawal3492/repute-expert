"use client";

import React, { useState } from "react";

const DENTAL_FAQ = [
  {
    question: "How can Reputation Experts protect your business from harmful new reviews?",
    answer:
      "We monitor your online presence 24/7 across all major platforms. When a harmful, fake, or policy-violating review appears, we act fast — assessing whether it breaches platform guidelines, filing formal disputes on your behalf, and escalating where necessary. At the same time, we help build a consistent flow of genuine positive reviews that strengthen your overall rating and reduce the impact of any future negative content.",
  },
  {
    question: "How long does it take to see results for my dental practice?",
    answer:
      "Most dental clients begin seeing measurable improvements within 6 to 12 weeks. Review removal timelines depend on the platform and the strength of the violation case, but our clients typically see rating improvements and increased patient enquiries within the first three months. Authority-building and AI Overview positioning deliver stronger results over a 4–6 month period.",
  },
  {
    question: "How does Google's AI Overview affect my dental practice?",
    answer:
      "Google's AI Overviews now appear above traditional search results and consolidate information from multiple trusted sources into a single AI-generated answer. If your practice isn't being cited as a trusted source, you're invisible to a growing share of patients. We optimise your Google Business Profile, review signals, and online presence so Google surfaces your practice — not your competitors — in these AI-driven results.",
  },
  {
    question: "How does Reputation Experts build a strong online reputation for my practice?",
    answer:
      "We take a comprehensive approach: removing harmful reviews, generating a steady stream of genuine 5-star feedback, publishing authoritative content across trusted media outlets, and optimising your presence across every platform patients use to research dentists. The result is a reputation that builds trust at every touchpoint — from Google Maps to AI Overviews to direct searches.",
  },
  {
    question: "How does Reputation Experts help clinics boost their bookings and increase sales?",
    answer:
      "A stronger online reputation directly drives more bookings. When patients see a high rating backed by genuine reviews, they choose your clinic with confidence. Our clients typically see a 30–50% increase in new patient enquiries within the first three months, driven by improved ratings, better visibility in search, and a trusted online presence that converts browsers into booked appointments.",
  },
];

export function DentalFAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section
      className="bg-white pt-6 pb-14 lg:pt-8 lg:pb-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(2.5rem,5vw,3.5rem)] tracking-[-0.03em] mb-10 lg:mb-12">
          FAQ
        </h2>

        <div>
          {DENTAL_FAQ.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={i} className="border-t border-[#e0e0e0] last:border-b">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 lg:py-7 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[15px] lg:text-[16px] font-normal leading-snug group-hover:text-[#444] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-[#e8502a] text-[22px] leading-none font-light transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-6" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
