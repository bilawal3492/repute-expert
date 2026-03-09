"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ImageAsset } from "../../types";

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description?: string;
  image?: ImageAsset;
  ctaLabel?: string;
  ctaLink?: string;
}

export interface ProcessSectionProps {
  heading?: string;
  steps?: ProcessStep[];
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Identify the Online Concern",
    description: "We conduct a thorough analysis of your online presence to identify all harmful, defamatory, or misleading content that is affecting your reputation across the web.",
    image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80", alt: "Research and analysis" },
    ctaLabel: "More",
    ctaLink: "/process/identify",
  },
  {
    stepNumber: "02",
    title: "Create a Custom Solution",
    description: "Our specialists develop a tailored removal and suppression strategy specific to your case, platform, and the type of content — maximising success rates.",
    image: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80", alt: "Strategy planning" },
    ctaLabel: "More",
    ctaLink: "/process/strategy",
  },
  {
    stepNumber: "03",
    title: "Implement the Reputation Program",
    description: "We execute the full strategy — submitting disputes, monitoring responses, publishing positive content, and reporting progress to you at every step.",
    image: { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", alt: "Implementation" },
    ctaLabel: "More",
    ctaLink: "/process/implement",
  },
];

export function ProcessSection({
  heading = "Our Process",
  steps = DEFAULT_STEPS,
}: ProcessSectionProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <h2 className="text-[#1a1a1a] font-bold text-[clamp(1.35rem,2.5vw,1.75rem)] tracking-[-0.02em] mb-8">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.stepNumber}
              className="bg-[#f7f7f7] rounded-xl overflow-hidden border border-[#ebebeb] hover:border-[#d0d0d0] hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              {step.image && (
                <div className="relative h-[160px] overflow-hidden">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt ?? step.title}
                    fill
                    className={`object-cover grayscale transition-all duration-500 ${hovered === i ? "scale-105 grayscale-0" : ""}`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {/* Step number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="text-[#1a1a1a] text-[11px] font-bold">{step.stepNumber}</span>
                  </div>
                </div>
              )}

              <div className="p-5">
                <h3 className="text-[#1a1a1a] font-semibold text-[14px] leading-snug mb-2">{step.title}</h3>
                {step.description && (
                  <p className="text-[#777] text-[12px] leading-relaxed mb-4">{step.description}</p>
                )}
                {step.ctaLink && (
                  <Link
                    href={step.ctaLink}
                    className="inline-flex items-center gap-1 rounded-full bg-[#1a1a1a] text-white text-[11px] font-semibold px-4 py-1.5 hover:bg-[#333] transition-colors"
                  >
                    {step.ctaLabel ?? "More"}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
