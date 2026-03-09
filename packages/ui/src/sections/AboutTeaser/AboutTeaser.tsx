import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ImageAsset, MuxAsset } from "../../types";

export interface AboutTeaserProps {
  headline?: string;
  body?: string;
  primaryCtaLabel?: string;
  primaryCtaLink?: string;
  secondaryCtaLabel?: string;
  secondaryCtaLink?: string;
  image?: ImageAsset;
  video?: MuxAsset;
}

export function AboutTeaser({
  headline = "We strive to redefine the notion of good products by building great ones.",
  body = "Creating future value by implementing innovations in new and existing products aimed at new behavioural models, markets, and technologies.",
  primaryCtaLabel = "Contact us",
  primaryCtaLink = "/contact-us",
  secondaryCtaLabel = "About us",
  secondaryCtaLink = "/about-us",
  image,
  video,
}: AboutTeaserProps) {
  return (
    <section className="py-16 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-[-0.025em] text-white leading-[1.15] mb-6">
              {headline}
            </h2>
            {body && (
              <p className="text-white/55 text-base lg:text-lg leading-relaxed mb-10">
                {body}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={primaryCtaLink}
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#0A0A0A] font-semibold text-sm px-6 py-3 hover:bg-white/90 transition-all duration-200"
              >
                {primaryCtaLabel}
              </Link>
              {secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors"
                >
                  {secondaryCtaLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Visual */}
          {(video?.playbackId || image) && (
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              {video?.playbackId ? (
                <video
                  src={`https://stream.mux.com/${video.playbackId}/high.mp4`}
                  poster={image?.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
