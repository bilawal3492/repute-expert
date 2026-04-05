"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.types";

const DEFAULT_NAV: import("../../types").NavItem[] = [
  { label: "Main", href: "/" },
  { label: "Solutions", href: "/services" },
  { label: "Knowledge", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header({
  logo,
  brandName = "Reputation Experts",
  ctaLabel = "Talk To Expert",
  ctaLink = "/contact",
  phoneNumber = "0800 654 6009",
  phoneHref = "tel:08006546009",
  navItems = DEFAULT_NAV,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        className={`header fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
          scrolled
            ? "shadow-[0_1px_12px_rgba(0,0,0,0.07)]"
            : "border-b border-[#ebebeb]"
        }`}
      >
        <div className="header__inner max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-[64px] gap-2 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="header__logo flex items-center shrink-0 group focus-visible:outline-none"
            aria-label="Home"
          >
            {logo ? (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width ?? 160}
                height={logo.height ?? 30}
                priority
                className="header__logo-image h-[26px] sm:h-[30px] w-auto"
              />
            ) : (
              <div className="flex items-center gap-2">
                {/* Shield icon fallback */}
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
                <div className="header__logo-text flex flex-col leading-none">
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

          {/* Desktop centre nav */}
          <nav
            className="header__nav hidden lg:flex flex-1 items-center justify-center gap-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header__nav-link text-[#1a1a1a] text-[14px] font-medium hover:text-[#555] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="header__controls flex items-center gap-2 sm:gap-3 ml-auto lg:ml-0">
            {/* Orange CTA — Talk To Expert */}
            <Link
              href={ctaLink}
              className="header__cta hidden sm:inline-flex items-center whitespace-nowrap rounded-full bg-[#FF461E] text-white text-[13px] font-semibold px-5 py-[9px] hover:bg-[#e63b15] transition-colors"
            >
              {ctaLabel}
            </Link>

            {/* Dark phone pill */}
            <a
              href={phoneHref}
              className="header__phone hidden sm:inline-flex items-center whitespace-nowrap rounded-full bg-[#1a1a1a] text-white text-[13px] font-semibold px-5 py-[9px] hover:bg-[#333] transition-colors"
            >
              {phoneNumber}
            </a>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="header__menu-btn lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#d0d0d0] bg-white text-[#1a1a1a] hover:border-[#999] hover:bg-[#f7f7f7] transition-all duration-150 focus-visible:outline-none"
              aria-label="Open menu"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu — floating rounded card ───────────────── */}
      <div
        className={`${styles.navOverlay} fixed inset-0 z-[60] lg:hidden`}
        style={
          menuOpen
            ? {
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                backgroundColor: "rgba(0,0,0,0.18)",
                transform: "translateY(0)",
                opacity: 1,
                pointerEvents: "all",
              }
            : undefined
        }
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`${styles.navOverlay} ${menuOpen ? styles.open : ""}`}
          style={{ position: "relative", height: "100%" }}
        >
          <div
            className="header__mobile-card absolute top-4 left-4 right-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top row: logo + close */}
            <div className="header__mobile-toprow flex items-center justify-between px-6 pt-6 pb-4">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                {logo ? (
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 140}
                    height={logo.height ?? 26}
                    className="h-[24px] w-auto"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <svg
                      width="22"
                      height="26"
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
                      <span className="text-[#1a1a1a] font-bold text-[13px] tracking-[0.12em] uppercase leading-tight">
                        Reputation
                      </span>
                      <span className="text-[#1a1a1a] font-medium text-[8px] tracking-[0.22em] uppercase leading-tight">
                        Experts
                      </span>
                    </div>
                  </div>
                )}
              </Link>
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
            </div>

            {/* Nav items with dividers */}
            <nav className="header__mobile-nav flex flex-col px-6 pb-2">
              {navItems.map((item, i) => (
                <div key={item.href} className={`${styles.navLink} border-t border-[#f0f0f0]`}>
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

            {/* Mobile CTAs */}
            <div className="header__mobile-ctas flex flex-col gap-3 px-6 py-5">
              <Link
                href={ctaLink}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center rounded-full bg-[#FF461E] text-white text-[15px] font-semibold px-5 py-3 hover:bg-[#e63b15] transition-colors"
              >
                {ctaLabel}
              </Link>
              <a
                href={phoneHref}
                className="w-full text-center rounded-full bg-[#1a1a1a] text-white text-[15px] font-semibold px-5 py-3 hover:bg-[#333] transition-colors"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
