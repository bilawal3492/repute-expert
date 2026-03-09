"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface FAQSectionProps {
  sectionLabel?: string;
  heading?: string;
  items?: FAQItem[];
}

const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "What does Reputation Experts do?",
    answer: "Reputation Experts is a professional online reputation management firm. We specialise in identifying, disputing, and removing harmful, fake, or defamatory content about your business or personal brand across review platforms, search engines, and social media.",
  },
  {
    question: "Which platforms do you work with?",
    answer: "We work across all major platforms including Google, Yelp, Trustpilot, Glassdoor, Facebook, BBB, Ripoff Report, PissedConsumer, and 50+ others. Our team has deep expertise in each platform's specific removal and dispute processes.",
  },
  {
    question: "How does the process work?",
    answer: "Our process starts with a free case assessment where we audit all harmful content. We then develop a custom removal strategy, formally dispute policy-violating content, monitor progress, and provide regular updates until resolution.",
  },
  {
    question: "What if the content does not always get removed?",
    answer: "While we achieve a high removal success rate, not all content is guaranteed to be removed as platforms have final authority. In those cases, we deploy suppression strategies — publishing positive, high-authority content to push negatives lower in search results.",
  },
  {
    question: "Do you work with our network of stakeholders?",
    answer: "Yes. We work seamlessly with your legal team, PR agency, marketing department, or any other stakeholders involved. We provide all necessary documentation, case summaries, and evidence packages on request.",
  },
];

export function FAQSection({
  heading = "FAQ",
  items = DEFAULT_ITEMS,
}: FAQSectionProps) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f7f7] py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(1.35rem,2.5vw,1.75rem)] tracking-[-0.02em] mb-6">
          {heading}
        </h2>

        <div className="divide-y divide-[#e8e8e8]">
          {items.map((item, i) => {
            const isOpen = openItem === i;
            return (
              <div key={item.question} className="bg-white first:rounded-t-xl last:rounded-b-xl first:border-t border-x border-[#e8e8e8]">
                <button
                  onClick={() => setOpenItem(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[#1a1a1a] text-[13px] lg:text-[14px] font-medium group-hover:text-[#555] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-5 h-5 rounded-full border border-[#ddd] flex items-center justify-center text-[#666] text-[13px] transition-all duration-200 group-hover:border-[#999] ${
                      isOpen ? "rotate-45 bg-[#1a1a1a] border-[#1a1a1a] text-white" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 pb-4" : "max-h-0"}`}
                >
                  <p className="text-[#666] text-[13px] leading-relaxed px-5 max-w-3xl">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
