"use client";

import React, { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "Online Reputation Audit",
    description:
      "A comprehensive analysis of your current digital footprint. We examine search results, review platforms, social media, news mentions, and data broker sites to give you a complete picture of how you appear online — and where the risks and opportunities lie.",
    includes: [
      "Search engine results analysis",
      "Review platform presence audit",
      "Social media footprint review",
      "Detailed written report with recommendations",
    ],
  },
  {
    number: "02",
    title: "Content & Search Management",
    description:
      "We help shape what people see when they search for you or your business. Our team develops and executes strategies to promote positive, accurate content while addressing problematic results through ethical, platform-compliant methods.",
    includes: [
      "Search result optimisation",
      "Positive content creation and promotion",
      "Problematic content assessment",
      "Ongoing search monitoring",
    ],
  },
  {
    number: "03",
    title: "Brand Monitoring & Alerts",
    description:
      "Continuous, automated monitoring of your brand, key personnel, and competitors across search engines, review platforms, social media, and news outlets. Get notified the moment something new appears.",
    includes: [
      "Real-time alert notifications",
      "Custom keyword tracking",
      "Competitive intelligence",
      "Monthly reputation health reports",
    ],
  },
  {
    number: "04",
    title: "Crisis & Issue Response",
    description:
      "When a reputation issue arises — whether from negative press, viral social media, or an internal incident — our team provides rapid assessment, strategic guidance, and hands-on support to minimise impact and restore confidence.",
    includes: [
      "Rapid situation assessment",
      "Response strategy development",
      "Stakeholder communication support",
      "Post-crisis reputation recovery",
    ],
  },
  {
    number: "05",
    title: "Review Management",
    description:
      "A holistic approach to your review presence across all major platforms. We help you build authentic positive reviews, respond strategically to feedback, and address policy-violating content through proper channels.",
    includes: [
      "Review generation strategy",
      "Response templates and guidance",
      "Policy-violation identification",
      "Platform-specific dispute management",
    ],
  },
  {
    number: "06",
    title: "Digital PR & Authority Building",
    description:
      "Strategic placement of thought leadership articles, press features, and authoritative content in recognised publications to strengthen your credibility, improve search visibility, and build long-term digital equity.",
    includes: [
      "Publication outreach and placement",
      "Thought leadership content creation",
      "Press feature coordination",
      "SEO-optimised content strategy",
    ],
  },
  {
    number: "07",
    title: "Personal Reputation Management",
    description:
      "Tailored solutions for executives, professionals, and public figures who need to manage their personal digital footprint, protect their privacy, and curate the narrative that appears when people search their name.",
    includes: [
      "Personal brand audit",
      "Privacy protection measures",
      "Executive profiling and content",
      "Ongoing personal monitoring",
    ],
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  agreed?: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ServicesContent() {
  const [form, setForm] = useState({ name: "", email: "", message: "", agreed: false });
  const [msgLen, setMsgLen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  const validate = (f = form): FormErrors => {
    const e: FormErrors = {};
    if (!f.name.trim()) e.name = "Name is required.";
    if (!f.email.trim()) {
      e.email = "Email is required.";
    } else if (!isValidEmail(f.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!f.message.trim()) {
      e.message = "Please tell us a bit about your project.";
    } else if (f.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }
    if (!f.agreed) e.agreed = "You must accept the Privacy Policy to continue.";
    return e;
  };

  const touch = (field: keyof FormErrors) => {
    setTouched((p) => ({ ...p, [field]: true }));
    setErrors(validate());
  };

  const err = (field: keyof FormErrors) => (touched[field] ? errors[field] : undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true, agreed: true });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          source: "Services Page",
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setSubmitError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-32 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <p className="text-[#FF461E] text-[11px] font-semibold tracking-[0.12em] uppercase mb-5">
            Our Solutions
          </p>
          <h1 className="text-[#1a1a1a] font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] mb-6 max-w-[640px]">
            Reputation Management Services
          </h1>
          <p className="text-[#555] text-[15px] leading-[1.75] max-w-[520px]">
            Comprehensive solutions for individuals and businesses who want to take control
            of their online presence. Every engagement is tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* ── Services list ──────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 space-y-4">
          {SERVICES.map((s) => (
            <div
              key={s.number}
              className="bg-white rounded-2xl border border-[#ebebeb] px-8 sm:px-10 py-8 sm:py-10"
            >
              {/* Number + Title */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-[#ccc] text-[12px] font-medium tracking-[0.06em] mt-[3px] shrink-0">
                  {s.number}
                </span>
                <h2 className="text-[#1a1a1a] font-semibold text-[clamp(1rem,1.8vw,1.2rem)] tracking-[-0.01em]">
                  {s.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-[#555] text-[13px] leading-[1.75] mb-7 max-w-[720px] pl-6">
                {s.description}
              </p>

              {/* Includes */}
              <div className="pl-6">
                <p className="text-[#aaa] text-[10px] font-semibold tracking-[0.1em] uppercase mb-4">
                  Includes
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[#1a1a1a] shrink-0" />
                      <span className="text-[#444] text-[13px] leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact form ───────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="rounded-2xl bg-[#0f0f0f] px-8 sm:px-12 lg:px-16 py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

              {/* Left */}
              <div>
                <p className="text-[#888] text-[13px] mb-4">
                  Every engagement begins with a free, confidential consultation.
                </p>
                <h2 className="text-white font-medium text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.02em]">
                  Ready to Get<br />Started?
                </h2>
              </div>

              {/* Right: form */}
              <div>
                {submitted ? (
                  <div className="py-12">
                    <p className="text-white font-semibold text-lg mb-1">Thank you!</p>
                    <p className="text-[#888] text-sm">
                      We&apos;ll review your case and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[#999] text-[13px] font-medium mb-3">
                          Name / Company Name
                        </label>
                        <input
                          type="text"
                          placeholder="John from Apple"
                          value={form.name}
                          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                          onBlur={() => touch("name")}
                          className={`w-full bg-transparent border-b pb-2.5 text-white text-[14px] placeholder-[#555] focus:outline-none transition-colors ${
                            err("name") ? "border-red-400 focus:border-red-400" : "border-[#333] focus:border-[#666]"
                          }`}
                        />
                        {err("name") && <p className="text-red-400 text-[11px] mt-1.5">{err("name")}</p>}
                      </div>
                      <div>
                        <label className="block text-[#999] text-[13px] font-medium mb-3">
                          Your email
                        </label>
                        <input
                          type="email"
                          placeholder="john@apple.com"
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                          onBlur={() => touch("email")}
                          className={`w-full bg-transparent border-b pb-2.5 text-white text-[14px] placeholder-[#555] focus:outline-none transition-colors ${
                            err("email") ? "border-red-400 focus:border-red-400" : "border-[#333] focus:border-[#666]"
                          }`}
                        />
                        {err("email") && <p className="text-red-400 text-[11px] mt-1.5">{err("email")}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[#999] text-[13px] font-medium mb-3">
                        Tell us more about your case
                      </label>
                      <textarea
                        placeholder="Link or describe the online content"
                        rows={3}
                        value={form.message}
                        maxLength={500}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, message: e.target.value }));
                          setMsgLen(e.target.value.length);
                        }}
                        onBlur={() => touch("message")}
                        className={`w-full bg-transparent border-b pb-2.5 text-white text-[14px] placeholder-[#555] focus:outline-none transition-colors resize-none ${
                          err("message") ? "border-red-400 focus:border-red-400" : "border-[#333] focus:border-[#666]"
                        }`}
                      />
                      <div className="flex items-center justify-between mt-1">
                        {err("message") ? (
                          <p className="text-red-400 text-[11px]">{err("message")}</p>
                        ) : <span />}
                        <span className="text-[#555] text-[11px]">{msgLen}/500</span>
                      </div>
                    </div>

                    {/* Toggle + Privacy + Submit */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 flex-wrap">
                        <button
                          type="button"
                          onClick={() => {
                            setForm((p) => ({ ...p, agreed: !p.agreed }));
                            setTouched((p) => ({ ...p, agreed: true }));
                            setTimeout(() => setErrors(validate()), 0);
                          }}
                          aria-pressed={form.agreed}
                          style={{
                            position: "relative",
                            flexShrink: 0,
                            width: 44,
                            height: 24,
                            borderRadius: 999,
                            overflow: "hidden",
                            transition: "background 0.2s",
                            background: form.agreed ? "#FF461E" : err("agreed") ? "#7f1d1d" : "#333",
                            outline: err("agreed") ? "2px solid #ef4444" : "none",
                            outlineOffset: 2,
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              top: 3,
                              left: form.agreed ? 23 : 3,
                              width: 18,
                              height: 18,
                              borderRadius: 999,
                              background: "white",
                              transition: "left 0.2s",
                            }}
                          />
                        </button>

                        <p className="text-[#777] text-[12px] flex-1 leading-snug min-w-0">
                          I confirm that I have read, consent and agree to our{" "}
                          <Link href="/privacy-policy" className="underline text-[#aaa] hover:text-white transition-colors">
                            Privacy Policy
                          </Link>
                        </p>

                        <button
                          type="submit"
                          disabled={loading}
                          className="ml-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-[14px] font-medium transition-colors whitespace-nowrap disabled:opacity-60"
                          style={{ background: Object.keys(validate()).length === 0 ? "#FF461E" : "#2a2a2a" }}
                        >
                          {loading ? "Sending…" : "Submit"}
                        </button>
                      </div>

                      {err("agreed") && (
                        <p className="text-red-400 text-[11px]">{err("agreed")}</p>
                      )}
                      {submitError && (
                        <p className="text-red-400 text-[12px] mt-2">{submitError}</p>
                      )}
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
