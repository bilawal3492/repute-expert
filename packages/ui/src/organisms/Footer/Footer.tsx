"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem, SocialLink } from "../../types";

export interface FooterProps {
  logo?: { src: string; alt: string; width?: number; height?: number };
  brandName?: string;
  tagline?: string;
  phone?: string;
  phoneHref?: string;
  copyright?: string;
  officeAddress?: string;
  companyInfo?: string;
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const DEFAULT_NAV: NavItem[] = [
  { label: "About", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const DEFAULT_SOCIALS: SocialLink[] = [
  { platform: "facebook", url: "https://facebook.com", label: "Facebook" },
  { platform: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
  { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
  { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
];

export function Footer({
  logo,
  brandName = "Reputation Experts",
  tagline = "Helping individuals and businesses take control of their digital reputation.",
  phone = "0800 654 6009",
  phoneHref = "tel:08006546009",
  copyright,
  officeAddress = "167-169 Great Portland Street, 5th Floor, London W1W 5PF",
  companyInfo = "Reputation Experts Ltd - Company No. 16939732 - Registered in England & Wales",
  navItems = DEFAULT_NAV,
  socialLinks = DEFAULT_SOCIALS,
}: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightText = copyright ?? `© ${year} Reputation Experts. All rights reserved.`;

  return (
    <footer className="bg-white border-t border-[#e8e8e8]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-10 lg:py-14">

        {/* ── Top row: logo/tagline/phone left · nav right ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">

          {/* Left: logo + tagline + phone + socials */}
          <div className="shrink-0 max-w-[280px]">
            <Link href="/" aria-label="Home" className="inline-flex items-center shrink-0 mb-3 focus-visible:outline-none">
              {logo ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width ?? 160}
                  height={logo.height ?? 30}
                  className="h-[26px] sm:h-[30px] w-auto"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <svg
                    width="28"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M14 0L0 5.33v10.67C0 24.53 5.97 31.2 14 32c8.03-.8 14-7.47 14-16V5.33L14 0z"
                      fill="#1a1a1a"
                    />
                    <path
                      d="M12.5 20.5l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"
                      fill="white"
                    />
                  </svg>
                  <div className="flex flex-col leading-none">
                    <span className="text-[#1a1a1a] font-bold text-[14px] sm:text-[15px] tracking-[0.12em] uppercase leading-tight">
                      Reputation
                    </span>
                    <span className="text-[#1a1a1a] font-medium text-[9px] sm:text-[10px] tracking-[0.22em] uppercase leading-tight">
                      Experts
                    </span>
                  </div>
                </div>
              )}
            </Link>

            <p className="text-[#888] text-[13px] leading-[1.65] mb-4">
              {tagline}
            </p>

            {phone && (
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-[#1a1a1a] text-[13px] font-medium hover:text-[#444] transition-colors mb-5"
              >
                {/* Phone icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l1.62-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {phone}
              </a>
            )}

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label ?? s.platform}
                  className="w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#888] hover:text-[#1a1a1a] hover:border-[#999] transition-colors"
                >
                  {SOCIAL_ICONS[s.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Right: nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end lg:max-w-[600px]" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#555] text-[13px] hover:text-[#1a1a1a] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[#ebebeb] mb-6" />

        {/* ── Bottom row: copyright + company info left · office right ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <p className="text-[#888] text-[12px] mb-1">{copyrightText}</p>
            <p className="text-[#bbb] text-[11px]">{companyInfo}</p>
          </div>

          {officeAddress && (
            <address className="not-italic text-[12px] text-[#bbb] sm:text-right shrink-0">
              <span className="font-medium text-[#888]">London: </span>
              {officeAddress}
            </address>
          )}
        </div>

      </div>
    </footer>
  );
}

