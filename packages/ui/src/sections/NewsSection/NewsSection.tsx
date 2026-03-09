import React from "react";
import Image from "next/image";
import type { ImageAsset, SocialLink } from "../../types";

export interface NewsItem {
  image: ImageAsset;
  source: string;
  title: string;
  url: string;
}

export interface NewsSectionProps {
  socialLinks?: SocialLink[];
  newsItems?: NewsItem[];
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  dribbble: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" /><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" /><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const DEFAULT_SOCIAL: SocialLink[] = [
  { platform: "facebook", url: "https://facebook.com" },
  { platform: "dribbble", url: "https://dribbble.com" },
  { platform: "linkedin", url: "https://linkedin.com" },
  { platform: "instagram", url: "https://instagram.com" },
];

const DEFAULT_NEWS: NewsItem[] = [
  {
    image: { src: "/news/gamify.jpg", alt: "How to gamify a mobile app" },
    source: "quikly.com",
    title: "How to gamify a mobile app",
    url: "https://www.quikly.com",
  },
  {
    image: { src: "/news/top-ios.jpg", alt: "Top iOS App Developers" },
    source: "Blog",
    title: "Alty Recognized Among Top iOS App Developers in 2024",
    url: "/blog/top-ios-app-developers",
  },
  {
    image: { src: "/news/banking-cio.jpg", alt: "Banking CIO Outlook" },
    source: "Banking CIO Outlook",
    title: "Banking CIO Outlook — Featured Company",
    url: "https://banking.cioreview.com",
  },
];

export function NewsSection({
  socialLinks = DEFAULT_SOCIAL,
  newsItems = DEFAULT_NEWS,
}: NewsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Social icons row */}
        <div className="flex items-center gap-5 mb-10">
          {socialLinks.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label ?? s.platform}
              className="text-white/40 hover:text-white transition-colors"
            >
              {SOCIAL_ICONS[s.platform]}
            </a>
          ))}
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target={item.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-smooth"
                />
              </div>
              {/* Text */}
              <div className="p-5">
                <p className="text-white/40 text-xs font-medium tracking-wide uppercase mb-2">{item.source}</p>
                <p className="text-white text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
