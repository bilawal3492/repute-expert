import React from "react";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Remote-First",
    description:
      "Work from anywhere in the UK. We believe great work happens where you're most productive.",
  },
  {
    title: "Flexible Hours",
    description:
      "We care about output, not hours. Structure your day in the way that works best for you.",
  },
  {
    title: "Growth Budget",
    description:
      "Annual learning and development budget for courses, conferences, and certifications.",
  },
  {
    title: "Team Retreats",
    description:
      "Regular in-person meetups in London to connect, collaborate, and celebrate.",
  },
];

const POSITIONS = [
  {
    title: "Reputation Analyst",
    description:
      "Conduct reputation audits, monitor client brands, and develop strategic recommendations for improving online presence.",
    tags: ["Client Services", "Full-time", "Remote (UK)"],
  },
  {
    title: "Content Strategist",
    description:
      "Create and place high-quality content across authoritative publications to build client credibility and improve search visibility.",
    tags: ["Digital PR", "Full-time", "Remote (UK)"],
  },
  {
    title: "Client Success Manager",
    description:
      "Own the end-to-end client relationship — from onboarding through strategy execution to ongoing reporting and renewal.",
    tags: ["Client Services", "Full-time", "London / Remote"],
  },
];

export function CareersContent() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <p className="text-[#FF461E] text-[11px] font-semibold tracking-[0.12em] uppercase mb-5">
            Careers
          </p>
          <h1 className="text-[#1a1a1a] font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] mb-6 max-w-[620px]">
            Help people take control of their online story
          </h1>
          <p className="text-[#555] text-[15px] leading-[1.75] max-w-[480px]">
            We&apos;re a growing team of analysts, strategists, and communicators who are
            passionate about helping individuals and businesses manage their digital
            reputation. If that sounds like you, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Why Work With Us ──────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10">
            Why Work With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="bg-[#f7f7f7] rounded-xl px-6 py-6 border border-[#ebebeb]"
              >
                <p className="text-[#1a1a1a] text-[14px] font-semibold mb-3">{b.title}</p>
                <p className="text-[#666] text-[13px] leading-[1.65]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-10">
            Open Positions
          </h2>

          <div className="space-y-4 mb-10">
            {POSITIONS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-xl px-6 py-6 border border-[#ebebeb] flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1.5">{p.title}</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">{p.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end shrink-0">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0f0f0] text-[#555] text-[11px] font-medium whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Don't see the right role CTA card ─────────────── */}
          <div className="rounded-2xl bg-[#0f0f0f] px-8 sm:px-12 lg:px-16 py-14 text-center">
            <h3 className="text-white font-medium text-[clamp(1.2rem,2.5vw,1.6rem)] tracking-[-0.02em] mb-3">
              Don&apos;t see the right role?
            </h3>
            <p className="text-[#888] text-[14px] leading-[1.7] mb-8 max-w-[400px] mx-auto">
              We&apos;re always looking for talented people. Send us your CV and a short
              note about what you&apos;re interested in.
            </p>
            <Link
              href="mailto:careers@reputation-experts.co.uk"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#0f0f0f] text-[14px] font-medium hover:bg-[#f0f0f0] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
