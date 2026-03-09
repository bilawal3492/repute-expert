"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export interface CookieBannerProps {
  message?: string;
  privacyPolicyLink?: string;
  acceptLabel?: string;
  declineLabel?: string;
}

const STORAGE_KEY = "cookie_consent";

export function CookieBanner({
  message = "We use cookies to enhance your browsing experience.",
  privacyPolicyLink = "/privacy-notice",
  acceptLabel = "Accept",
  declineLabel = "Decline",
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay for better UX
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className={`fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-auto lg:right-6 lg:max-w-md z-[200] transition-all duration-500 ease-smooth ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#111] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl shadow-black/50 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Cookie emoji + text */}
        <div className="flex items-start gap-3 flex-1">
          <span className="text-xl mt-0.5" aria-hidden="true">🥠</span>
          <p className="text-white/70 text-sm leading-relaxed">
            {message}{" "}
            <Link
              href={privacyPolicyLink}
              className="text-white underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleDecline}
            className="rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-sm font-medium px-4 py-2 transition-all duration-200"
          >
            {declineLabel}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-full bg-white text-[#0A0A0A] text-sm font-medium px-4 py-2 hover:bg-white/90 transition-all duration-200"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
