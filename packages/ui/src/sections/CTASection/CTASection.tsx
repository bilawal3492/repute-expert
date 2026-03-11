"use client";

import Image from "next/image";
import React, { useState } from "react";

export interface CTASectionProps {
  headline?: string;
  subheading?: string;
}

export function CTASection({
  headline = "Free Reputation\nCase Assessment",
  subheading = "Get a solution fast. Talk to our experts.",
}: CTASectionProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "", agreed: false });
  const [msgLen, setMsgLen] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#f5f5f3] py-10 lg:py-16 px-5 lg:px-8">
      <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-2xl bg-[#181818]">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/images/background-path.webp"
            alt=""
            fill
            style={{ objectFit: "cover", opacity: 0.6 }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-start px-10 lg:px-16 py-14 lg:py-20">
          {/* Left: heading */}
          <h2 className="text-white font-bold text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.15] tracking-[-0.02em]">
            {headline.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>

          {/* Right: form */}
          <div>
            <p className="text-white/60 text-[14px] mb-7">{subheading}</p>

            {submitted ? (
              <div className="text-center py-8">
                <p className="text-white font-semibold text-lg mb-1">Thank you!</p>
                <p className="text-white/50 text-sm">We&apos;ll review your case and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white text-[13px] mb-3">Name / Company Name</label>
                    <input
                      type="text"
                      placeholder="John from Apple"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/25 pb-2 text-white text-[13px] placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-[13px] mb-3">Your email</label>
                    <input
                      type="email"
                      placeholder="john@apple.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/25 pb-2 text-white text-[13px] placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-[13px] mb-3">Tell us more about your case</label>
                  <textarea
                    placeholder="Link or describe the online content"
                    rows={2}
                    value={form.message}
                    maxLength={500}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, message: e.target.value }));
                      setMsgLen(e.target.value.length);
                    }}
                    className="w-full bg-transparent border-b border-white/25 pb-2 text-white text-[13px] placeholder-white/25 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                  <div className="text-right text-white/30 text-[11px] mt-1">{msgLen}/500</div>
                </div>

                {/* Toggle + privacy text + submit */}
                <div className="flex items-center gap-3 overflow-hidden">
                  {/* iOS-style toggle */}
                  <button
                    type="button"
                    onClick={() => setForm((p) => ({ ...p, agreed: !p.agreed }))}
                    aria-pressed={form.agreed}
                    style={{ position: "relative", flexShrink: 0, width: 44, height: 24, borderRadius: 999, overflow: "hidden", transition: "background 0.2s", background: form.agreed ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)" }}
                  >
                    <span
                      style={{ position: "absolute", top: 3, left: form.agreed ? 23 : 3, width: 18, height: 18, borderRadius: 999, background: "white", transition: "left 0.2s" }}
                    />
                  </button>

                  <p className="text-white/40 text-[12px] flex-1 leading-snug min-w-0">
                    I confirm that I have read, consent and agree to our{" "}
                    <a href="#" className="underline text-white/60 hover:text-white/80 transition-colors">
                      Privacy Policy
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-white/15 hover:bg-white/25 text-white text-[13px] font-medium px-7 py-2.5 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
