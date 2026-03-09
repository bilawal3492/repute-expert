"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem, SocialLink } from "../../types";

export interface FooterProps {
  logo?: { src: string; alt: string; width?: number; height?: number };
  brandName?: string;
  copyright?: string;
  offices?: { city: string; address: string }[];
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
  moreServicesLinks?: { label: string; href: string }[];
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

const DEFAULT_OFFICES = [
  { city: "USA", address: "8th The Green Suite 7737, Dover, DE 19901" },
  { city: "UK", address: "1 Canada Square, Canary Wharf, London E14 5AB" },
];

const DEFAULT_NAV: NavItem[] = [
  { label: "News", href: "/news" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
  copyright,
  offices = DEFAULT_OFFICES,
  navItems = DEFAULT_NAV,
  socialLinks = DEFAULT_SOCIALS,
}: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightText = copyright ?? `© ${year} Reputation Experts. All rights reserved.`;

  return (
    <footer className="bg-white border-t border-[#e8e8e8]" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-10 lg:py-12">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="shrink-0">
            <Link href="/" aria-label="Home">
              {logo ? (
                <Image src={logo.src} alt={logo.alt} width={logo.width ?? 160} height={logo.height ?? 32} className="h-7 w-auto mb-2" />
              ) : (
                <span className="text-[#1a1a1a] font-bold text-[15px] tracking-tight block mb-2">{brandName}</span>
              )}
            </Link>
            <p className="text-[#999] text-[12px] max-w-[220px] leading-relaxed">
              Professional online reputation management for businesses worldwide.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#666] text-[13px] hover:text-[#1a1a1a] transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
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

        {/* Divider */}
        <div className="border-t border-[#f0f0f0] mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[#aaa] text-[12px]">{copyrightText}</p>

          <div className="flex flex-wrap gap-4 lg:gap-8">
            {offices.map((office) => (
              <address key={office.city} className="not-italic text-[12px] text-[#bbb]">
                <span className="font-medium text-[#888] mr-1">{office.city}:</span>
                {office.address}
              </address>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

