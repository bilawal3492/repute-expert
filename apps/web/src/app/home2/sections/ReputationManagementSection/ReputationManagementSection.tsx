"use client";

import React from "react";
import styles from "./ReputationManagementSection.module.css";

/* ─── Types ───────────────────────────────────────────────────────────── */

export interface ServiceCard {
  title: string;
  description: string;
}

export interface ReputationManagementSectionProps {
  heading?: string;
  services?: ServiceCard[];
}

/* ─── Defaults ────────────────────────────────────────────────────────── */

const DEFAULT_SERVICES: ServiceCard[] = [
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
      "We keep your business visible in AI-driven search by optimising your Google Business Profile, driving consistent clients\u2019 reviews, and structuring your online presence so Google surfaces you, not your competitors.",
  },
  {
    title: "Search Result Management",
    description:
      "We suppress damaging search results and replace them with authoritative, trust-building content that presents your business properly on page one.",
  },
  {
    title: "Digital PR & Authority",
    description:
      "We help businesses build brand authority through strategic features and articles across major, niche, and local media outlets, strengthening visibility in Google AI Overviews and recommendations in ChatGPT.",
  },
  {
    title: "Reputation Protection",
    description:
      "Real-time alerts whenever your practice is mentioned online. New review? We notify you. Negative article? We flag it. So you\u2019re never caught off guard again.",
  },
];

/* ─── Component ───────────────────────────────────────────────────────── */

export function ReputationManagementSection({
  heading = "Reputation Management for Dental Clinics",
  services = DEFAULT_SERVICES,
}: ReputationManagementSectionProps) {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Reputation management services"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* ── Heading ─────────────────────────────────────────── */}
        <h2
          className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-8 lg:mb-12"
        >
          {heading}
        </h2>

        {/* ── Cards Grid (3×2) ────────────────────────────────── */}
        <div className={styles.servicesGrid}>
          {services.map((service, i) => (
            <div key={`service-${i}`} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
