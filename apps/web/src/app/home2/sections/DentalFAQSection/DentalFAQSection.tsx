"use client";

import React, { useState } from "react";

const DENTAL_FAQ = [
  {
    question: "How can Reputation Experts protect your business from harmful new reviews?",
    answer:
      "We monitor your Google Business Profile and other platforms around the clock. The moment a new harmful review appears, our team is alerted and processes the removal, if the review can not be taken down, we craft professional responses on your behalf that show prospective patients your practice takes feedback seriously. You're never caught off guard by a review again.",
  },
  {
    question: "How long does it take to see results for my dental practice?",
    answer:
      "Most practices see measurable improvement within 30 to 60 days. Review removal cases typically resolve in 1–3 weeks, depending on the platform, and our review generation system starts delivering new 5-star reviews within the first fortnight. By month three, you'll typically see a noticeable rating increase and a stronger first page on Google. Full reputation transformation - including AI Overview positioning and authority building - is a 4–6 month process.",
  },
  {
    question: "How does Google's AI Overview affect my dental practice?",
    answer:
      "Google's AI Overviews now pull together information from reviews, your website, and third-party sources into a single AI-generated answer at the top of the search results. When someone searches for terms like \"best dentist near me\", Google no longer just shows a list of websites; it increasingly highlights and recommends specific practices. Reputation Experts strengthens your entire digital presence so your practice is in a far better position to be trusted and recommended by Google's AI. This includes improving your review profile, increasing rating strength and review volume, optimising trust signals across your web presence, and building authority through high-quality third-party coverage. When your dental practice is featured in trusted media and reputable publications — something we specialise in — it creates the kind of authority signals that naturally improve how your practice is understood and recommended by Google AI Overviews, ChatGPT, and other AI-driven discovery platforms.",
  },
  {
    question: "How does Reputation Experts build a strong online reputation for my practice?",
    answer:
      "We work across three phases. First, we clean up, removing policy-violating reviews, suppressing negative search results, and fixing gaps in your Google Business Profile. Second, we strengthen, building a steady flow of genuine 5-star reviews from your existing patients using follow-up systems timed around appointments, and publishing authoritative content that positions your practice as a trusted name online. Third, we establish long-term authority, securing press coverage, optimising for Google AI Overviews and ChatGPT recommendations, and providing ongoing monitoring so your reputation stays protected month after month.",
  },
  {
    question: "How does Reputation Experts help clinics boost their bookings and increase sales?",
    answer:
      "Reputation directly drives revenue. 87% of customers check online reviews before making an appointment (unless existing clients). A practice sitting at lower score stars loses patients to a competitor at a higher score every single day, even if the clinical care is identical. We close that gap by removing unfair reviews that drag your rating down, generating a consistent stream of new 5-star reviews that push it up, and ensuring your practice appears prominently when potential patients search on Google, ask ChatGPT, or browse AI Overviews. The result is more clicks, more calls, and more booked appointments, clients typically see a 30–50% increase in new patient enquiries within the first three months.",
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
        <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10 lg:mb-12">
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
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] pb-6" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[14px] leading-relaxed max-w-3xl text-justify lg:text-left">
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
