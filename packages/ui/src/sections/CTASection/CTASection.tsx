"use client";

import React, { useState } from "react";

export interface CTASectionProps {
  headline?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaLink?: string;
}

export function CTASection({
  headline = "Free Reputation Case Assessment",
}: CTASectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
    captcha: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#161616] py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div>
            <h2 className="text-white font-bold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.02em]">
              {headline}
            </h2>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="bg-white/[0.06] rounded-xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#3a8a3a] flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg mb-1">Thank you!</p>
                <p className="text-white/50 text-sm">We&apos;ll review your case and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row: Name + Company */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="bg-white/[0.06] border border-white/[0.10] rounded-lg px-4 py-3 text-white text-[13px] placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData((p) => ({ ...p, companyName: e.target.value }))}
                    className="bg-white/[0.06] border border-white/[0.10] rounded-lg px-4 py-3 text-white text-[13px] placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full bg-white/[0.06] border border-white/[0.10] rounded-lg px-4 py-3 text-white text-[13px] placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                />

                {/* Message */}
                <textarea
                  placeholder="Tell us about your case"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  rows={4}
                  className="w-full bg-white/[0.06] border border-white/[0.10] rounded-lg px-4 py-3 text-white text-[13px] placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />

                {/* reCAPTCHA mock */}
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3">
                  <input
                    id="captcha"
                    type="checkbox"
                    checked={formData.captcha}
                    onChange={(e) => setFormData((p) => ({ ...p, captcha: e.target.checked }))}
                    className="w-4 h-4 accent-[#3a8a3a] cursor-pointer"
                  />
                  <label htmlFor="captcha" className="text-white/50 text-[12px] cursor-pointer select-none">
                    I&apos;m not a robot
                  </label>
                  {/* reCAPTCHA logo placeholder */}
                  <div className="ml-auto flex flex-col items-center">
                    <svg width="32" height="32" viewBox="0 0 50 50" fill="none" opacity="0.3">
                      <circle cx="25" cy="25" r="22" stroke="white" strokeWidth="3" />
                      <path d="M25 12 L38 35 L12 35 Z" fill="white" />
                    </svg>
                    <span className="text-white/20 text-[8px] mt-0.5">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-white text-[#1a1a1a] text-[13px] font-semibold py-3 hover:bg-[#e8e8e8] transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

