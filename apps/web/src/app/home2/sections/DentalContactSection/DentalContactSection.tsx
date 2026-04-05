"use client";

import React, { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  agreed?: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function DentalContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    link: "",
    message: "",
    agreed: false,
  });
  const [linkLen, setLinkLen] = useState(0);
  const [msgLen, setMsgLen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
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

  const err = (field: keyof FormErrors) =>
    touched[field] ? errors[field] : undefined;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true, agreed: true });
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="bg-white py-14 lg:py-20"
      style={{ fontFamily: "'Roboto', sans-serif" }}
      aria-label="Get in touch"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Form ──────────────────────────────────────── */}
          <div>
            <h2
              className="text-[#0f0f0f] font-bold leading-[1.1] tracking-[-0.03em] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}
            >
              Get in touch
            </h2>
            <p className="text-[#444] text-[15px] leading-[1.7] mb-10 max-w-[380px]">
              Tell us what you need and we&apos;ll get back within 24 hours with a tailored plan.
            </p>

            {submitted ? (
              <div className="py-12">
                <p className="text-[#0f0f0f] font-semibold text-lg mb-1">Thank you!</p>
                <p className="text-[#888] text-sm">We&apos;ll review your case and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[#0f0f0f] text-[14px] font-medium mb-3">
                      Band / company name
                    </label>
                    <input
                      type="text"
                      placeholder="John from Apple"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      onBlur={() => touch("name")}
                      className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors ${err("name") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                    />
                    {err("name") && (
                      <p className="text-red-500 text-[11px] mt-1.5">{err("name")}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#0f0f0f] text-[14px] font-medium mb-3">
                      Your email
                    </label>
                    <input
                      type="email"
                      placeholder="john@apple.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      onBlur={() => touch("email")}
                      className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors ${err("email") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                    />
                    {err("email") && (
                      <p className="text-red-500 text-[11px] mt-1.5">{err("email")}</p>
                    )}
                  </div>
                </div>

                {/* Google Maps / Trustpilot Link */}
                <div>
                  <label className="block text-[#0f0f0f] text-[14px] font-medium mb-3">
                    Google Maps / Trustpilot Link
                  </label>
                  <textarea
                    placeholder="Something about your great idea"
                    rows={2}
                    value={form.link}
                    maxLength={500}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, link: e.target.value }));
                      setLinkLen(e.target.value.length);
                    }}
                    className="w-full bg-transparent border-b border-[#d0d0d0] pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none focus:border-[#888] transition-colors resize-none"
                  />
                  <div className="text-right text-[#bbb] text-[11px] mt-1">{linkLen}/500</div>
                </div>

                {/* Tell us more */}
                <div>
                  <label className="block text-[#0f0f0f] text-[14px] font-medium mb-3">
                    Tell us more about your project
                  </label>
                  <textarea
                    placeholder="Something about your great idea"
                    rows={2}
                    value={form.message}
                    maxLength={500}
                    onChange={(e) => {
                      setForm((p) => ({ ...p, message: e.target.value }));
                      setMsgLen(e.target.value.length);
                    }}
                    onBlur={() => touch("message")}
                    className={`w-full bg-transparent border-b pb-2.5 text-[#1a1a1a] text-[14px] placeholder-[#bbb] focus:outline-none transition-colors resize-none ${err("message") ? "border-red-500 focus:border-red-500" : "border-[#d0d0d0] focus:border-[#888]"}`}
                  />
                  <div className="flex items-center justify-between mt-1">
                    {err("message") ? (
                      <p className="text-red-500 text-[11px]">{err("message")}</p>
                    ) : <span />}
                    <span className="text-[#bbb] text-[11px]">{msgLen}/500</span>
                  </div>
                </div>

                {/* Toggle + Privacy + Submit */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 flex-wrap">
                    {/* iOS-style toggle */}
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
                        background: form.agreed ? "#0f0f0f" : err("agreed") ? "#fca5a5" : "#d0d0d0",
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

                    <p className="text-[#888] text-[12px] flex-1 leading-snug min-w-0">
                      I confirm that I have read, consent and agree to our{" "}
                      <a href="#" className="underline text-[#555] hover:text-[#111] transition-colors">
                        Privacy Policy
                      </a>
                    </p>

                    <button
                      type="submit"
                      className="ml-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-[14px] font-medium transition-colors whitespace-nowrap"
                      style={{ background: Object.keys(validate()).length === 0 ? "#FF461E" : "#c0c0c0" }}
                    >
                      Submit
                    </button>
                  </div>

                  {err("agreed") && (
                    <p className="text-red-500 text-[11px]">{err("agreed")}</p>
                  )}
                </div>

              </form>
            )}
          </div>

          {/* ── RIGHT: What happens card ─────────────────────────── */}
          <div className="bg-[#f5f5f3] rounded-2xl px-7 py-8">
            <h3 className="text-[#0f0f0f] font-semibold text-[1.2rem] leading-[1.3] tracking-[-0.01em] mb-6">
              What happens after<br />I submit a request?
            </h3>

            {/* Step 01 */}
            <div className="pb-6 border-b border-[#e0e0de]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0f0f0f] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">01</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">Free Reputation Audit</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    We review your Google, Trustpilot, and social profiles within 24 hours and identify every review that can be challenged.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="py-6 border-b border-[#e0e0de]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0f0f0f] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">02</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">Strategy Call</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    A reputation consultant walks you through the findings, explains your options, and recommends a tailored plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FF461E] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-[12px] font-semibold">03</span>
                </div>
                <div>
                  <p className="text-[#0f0f0f] font-semibold text-[15px] mb-1.5">We Get To Work</p>
                  <p className="text-[#666] text-[13px] leading-[1.65]">
                    We start strengthening your online reputation immediately, from review removal and rating growth to Google AI Overview visibility, search positioning, and major media authority. You begin seeing movement within weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-[#aaa] text-[12px] mt-7 pt-6 border-t border-[#e0e0de]">
              We respect your time - no spam, no endless calls.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
