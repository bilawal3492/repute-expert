"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  agreed?: string;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    agreed: false,
  });
  const [msgLen, setMsgLen] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormErrors, boolean>>
  >({});

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
          source: "Contact Page",
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

      {/* ── Top: Get in Touch info cards ──────────────────────── */}
      <section className="bg-[#f7f7f7] pt-24 pb-10">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h1 className="text-[#1a1a1a] font-medium text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.15] tracking-[-0.02em] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#555] text-[15px] leading-[1.7] mb-12 max-w-[480px]">
            Ready to take control of your online reputation? Reach out for a free, confidential consultation.
            We&apos;ll review your situation and provide honest, expert guidance on your options.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone */}
            <div className="bg-white rounded-xl px-6 py-6 border border-[#ebebeb]">
              <p className="text-[#aaa] text-[11px] font-medium tracking-[0.1em] uppercase mb-3">Phone</p>
              <a
                href="tel:08006546009"
                className="text-[#1a1a1a] text-[15px] font-medium hover:text-[#FF461E] transition-colors"
              >
                0800 654 6009
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl px-6 py-6 border border-[#ebebeb]">
              <p className="text-[#aaa] text-[11px] font-medium tracking-[0.1em] uppercase mb-3">Email</p>
              <a
                href="mailto:info@reputation-experts.co.uk"
                className="text-[#1a1a1a] text-[15px] font-medium hover:text-[#FF461E] transition-colors"
              >
                info@reputation-experts.co.uk
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-xl px-6 py-6 border border-[#ebebeb]">
              <p className="text-[#aaa] text-[11px] font-medium tracking-[0.1em] uppercase mb-3">Office</p>
              <p className="text-[#1a1a1a] text-[15px] font-medium leading-[1.5]">
                167-169 Great Portland Street<br />
                5th Floor, London W1W 5PF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom: Form section ────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          {/* Dark rounded card — same pattern as homepage CTA */}
          <div className="rounded-2xl bg-[#0f0f0f] px-8 sm:px-12 lg:px-16 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left: heading */}
            <div>
              <p className="text-[#888] text-[13px] mb-4">
                Get a solution fast. Talk to our experts.
              </p>
              <h2 className="text-white font-medium text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.2] tracking-[-0.02em]">
                Free Reputation<br />Consultation
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
                          err("name")
                            ? "border-red-400 focus:border-red-400"
                            : "border-[#333] focus:border-[#666]"
                        }`}
                      />
                      {err("name") && (
                        <p className="text-red-400 text-[11px] mt-1.5">{err("name")}</p>
                      )}
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
                          err("email")
                            ? "border-red-400 focus:border-red-400"
                            : "border-[#333] focus:border-[#666]"
                        }`}
                      />
                      {err("email") && (
                        <p className="text-red-400 text-[11px] mt-1.5">{err("email")}</p>
                      )}
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
                        err("message")
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#333] focus:border-[#666]"
                      }`}
                    />
                    <div className="flex items-center justify-between mt-1">
                      {err("message") ? (
                        <p className="text-red-400 text-[11px]">{err("message")}</p>
                      ) : (
                        <span />
                      )}
                      <span className="text-[#555] text-[11px]">{msgLen}/500</span>
                    </div>
                  </div>

                  {/* Toggle + Privacy + Submit */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* Toggle */}
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
                          background: form.agreed
                            ? "#FF461E"
                            : err("agreed")
                            ? "#7f1d1d"
                            : "#333",
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
                        <Link
                          href="/privacy-policy"
                          className="underline text-[#aaa] hover:text-white transition-colors"
                        >
                          Privacy Policy
                        </Link>
                      </p>

                      <button
                        type="submit"
                        disabled={loading}
                        className="ml-auto inline-flex items-center justify-center px-8 py-3 rounded-full text-white text-[14px] font-medium transition-colors whitespace-nowrap disabled:opacity-60"
                        style={{
                          background:
                            Object.keys(validate()).length === 0 ? "#FF461E" : "#2a2a2a",
                        }}
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
