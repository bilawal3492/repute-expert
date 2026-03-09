"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { HeaderProps } from "./Header.types";

const DEFAULT_NAV: import("../../types").NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function Header({
  logo,
  brandName = "Reputation Experts",
  ctaLabel = "Contact us",
  ctaLink = "/contact",
  navItems = DEFAULT_NAV,
  servicesLabel = "Services",
  servicesHref = "/services",
}: HeaderProps & {
  brandName?: string;
  servicesLabel?: string;
  servicesHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Header bar ────────────────────────────────────────── */}
      <header
        className={`header fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
          scrolled
            ? "shadow-[0_1px_12px_rgba(0,0,0,0.07)]"
            : "border-b border-[#ebebeb]"
        }`}
      >
        <div className="header__inner max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-[64px] gap-2 sm:gap-4 lg:gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="header__logo flex items-center gap-2.5 shrink-0 group focus-visible:outline-none"
            aria-label="Home"
          >
            {logo ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 32}
                height={logo.height ?? 32}
                priority
                className="header__logo-image h-8 w-auto"
              />
            ) : (
              <>
                <span className="header__logo-icon w-[30px] h-[30px] rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:opacity-75 transition-opacity">
                  <span className="header__logo-icon-letter text-white font-bold text-[13px] leading-none select-none">
                    R
                  </span>
                </span>
                <span className="header__logo-text text-[#1a1a1a] font-bold text-[13px] sm:text-[15px] tracking-tight truncate max-w-[120px] sm:max-w-none">
                  {brandName}
                </span>
              </>
            )}
          </Link>

          {/* Desktop centre nav */}
          <nav
            className="header__nav hidden md:flex flex-1 items-center justify-center gap-7"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header__nav-link text-[#1a1a1a] text-[13.5px] font-medium hover:text-[#555] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="header__controls flex items-center gap-1.5 sm:gap-2.5 ml-auto md:ml-0">

            {/* Desktop: Services outline pill */}
            <Link
              href={servicesHref}
              className="header__services-btn hidden md:inline-flex items-center gap-[6px] rounded-full border border-[#d0d0d0] bg-white text-[#1a1a1a] text-[13px] font-medium px-4 py-[7px] hover:border-[#999] hover:bg-[#f7f7f7] transition-all duration-150"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="header__services-icon opacity-60">
                <path
                  d="M8 1v14M1 8h14M3.05 3.05l9.9 9.9M12.95 3.05l-9.9 9.9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {servicesLabel}
            </Link>

            {/* Green CTA — all screens */}
            <Link
              href={ctaLink}
              className="header__cta inline-flex items-center whitespace-nowrap rounded-full bg-[#28b44f] text-white text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-5 py-[7px] hover:bg-[#1d9440] transition-colors"
            >
              {ctaLabel}
            </Link>

            {/* Mobile: ⠿ Menu pill */}
            <button
              onClick={() => setMenuOpen(true)}
              className="header__menu-btn md:hidden inline-flex items-center gap-1.5 rounded-full border border-[#d0d0d0] bg-white text-[#1a1a1a] text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-[7px] hover:border-[#999] hover:bg-[#f7f7f7] transition-all duration-150 focus-visible:outline-none"
              aria-label="Open menu"
            >
              <svg width="14" height="11" viewBox="0 0 14 11" fill="currentColor">
                <circle cx="1.5" cy="1.5" r="1.5" />
                <circle cx="7" cy="1.5" r="1.5" />
                <circle cx="12.5" cy="1.5" r="1.5" />
                <circle cx="1.5" cy="9.5" r="1.5" />
                <circle cx="7" cy="9.5" r="1.5" />
                <circle cx="12.5" cy="9.5" r="1.5" />
              </svg>
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu — floating rounded card ───────────────── */}
      {menuOpen && (
        <div
          className="header__mobile-overlay fixed inset-0 z-[60] md:hidden"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            backgroundColor: "rgba(0,0,0,0.18)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="header__mobile-card absolute top-4 left-4 right-4 bg-white rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top row: × close + red dot */}
            <div className="header__mobile-toprow flex items-center justify-between px-7 pt-7 pb-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="header__mobile-close w-9 h-9 rounded-full border border-[#d8d8d8] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none"
                aria-label="Close menu"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1l10 10M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <span className="header__mobile-dot w-3 h-3 rounded-full bg-[#e63027] block" />
            </div>

            {/* Nav items with dividers */}
            <nav className="header__mobile-nav flex flex-col px-7 pb-2">

              {/* Services — expandable with chevron */}
              <div className="header__mobile-nav-divider border-t border-[#f0f0f0]">
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="header__mobile-services-btn w-full flex items-center justify-between py-5 text-[#1a1a1a] text-[17px] font-medium focus-visible:outline-none"
                >
                  {servicesLabel}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-200 opacity-50 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {navItems.map((item) => (
                <div key={item.href} className="header__mobile-nav-divider border-t border-[#f0f0f0]">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="header__mobile-nav-link block py-5 text-[#1a1a1a] text-[17px] font-medium hover:text-[#555] transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="border-t border-[#f0f0f0]" />
            </nav>

            {/* Social icon circles */}
            <div className="header__mobile-socials flex items-center justify-center gap-3 px-7 py-6">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="header__social-link header__social-link--facebook w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] hover:border-[#bbb] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Dribbble */}
              <a
                href="#"
                aria-label="Dribbble"
                className="header__social-link header__social-link--dribbble w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] hover:border-[#bbb] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="header__social-link header__social-link--linkedin w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] hover:border-[#bbb] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="header__social-link header__social-link--instagram w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f5f5f5] hover:border-[#bbb] transition-all duration-150"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
