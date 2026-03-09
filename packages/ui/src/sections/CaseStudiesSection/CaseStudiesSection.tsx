import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ImageAsset, MuxAsset } from "../../types";

export interface AwardBadge {
  image: ImageAsset;
  label: string;
  url?: string;
}

export interface CaseStudyItem {
  client: string;
  clientLogo?: ImageAsset;
  tags?: string[];
  featureImage: ImageAsset;
  featureVideo?: MuxAsset;
  headline: string;
  description: string;
  awards?: AwardBadge[];
  slug: string;
  appStoreRating?: string;
  featured?: boolean;
}

export interface CaseStudiesSectionProps {
  heading?: string;
  works: CaseStudyItem[];
  showViewAllLink?: boolean;
  viewAllLabel?: string;
  viewAllHref?: string;
  limit?: number;
}

export function CaseStudiesSection({
  heading = "Selected Works",
  works,
  showViewAllLink = true,
  viewAllLabel = "See all works",
  viewAllHref = "/works",
  limit = 0,
}: CaseStudiesSectionProps) {
  const displayedWorks = limit > 0 ? works.slice(0, limit) : works;

  return (
    <section className="py-16 lg:py-28 bg-[#0A0A0A]">
      {/* Section heading */}
      <div className="max-w-container mx-auto px-6 lg:px-10 mb-10">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.025em] text-white">
          {heading}
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col">
        {displayedWorks.map((work, i) => (
          <CaseStudyCard key={work.slug} work={work} index={i} />
        ))}
      </div>

      {/* View All */}
      {showViewAllLink && (
        <div className="max-w-container mx-auto px-6 lg:px-10 mt-12">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-white/50 text-sm font-medium hover:text-white transition-colors group"
          >
            {viewAllLabel}
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}

function CaseStudyCard({ work }: { work: CaseStudyItem; index: number }) {
  return (
    <article className="border-t border-white/[0.08] group">
      <Link href={`/works/${work.slug}`} className="block max-w-container mx-auto px-6 lg:px-10 py-8 lg:py-10">
        {/* Top meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Client name */}
          <span className="text-white font-semibold text-sm">{work.client}</span>

          {/* Tags */}
          {work.tags && work.tags.length > 0 && (
            <>
              <span className="text-white/20">·</span>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span key={tag} className="text-white/40 text-xs">
                    #{tag.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* App store rating */}
          {work.appStoreRating && (
            <>
              <span className="text-white/20">·</span>
              <span className="text-white/40 text-xs">{work.appStoreRating} AppStore</span>
            </>
          )}

          {/* Award labels */}
          {work.awards && work.awards.length > 0 && (
            <>
              <span className="text-white/20">·</span>
              <div className="flex gap-1.5">
                {work.awards.map((award) => (
                  <span key={award.label} className="text-white/40 text-xs">
                    {award.label.split(" ").slice(0, 2).join(" ")}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Feature image */}
        <div className="relative overflow-hidden rounded-xl aspect-[16/8] mb-6 bg-white/[0.03]">
          <Image
            src={work.featureImage.src}
            alt={work.featureImage.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Headline + arrow */}
        <div className="flex items-end justify-between gap-6">
          <h3 className="text-white font-semibold text-xl lg:text-2xl leading-snug tracking-[-0.01em] max-w-2xl">
            {work.headline}
          </h3>
          <span className="shrink-0 text-white/30 group-hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}


export interface AwardBadge {
  image: ImageAsset;
  label: string;
  url?: string;
}

export interface CaseStudyItem {
  client: string;
  clientLogo?: ImageAsset;
  tags?: string[];
  featureImage: ImageAsset;
  featureVideo?: MuxAsset;
  headline: string;
  description: string;
  awards?: AwardBadge[];
  slug: string;
  appStoreRating?: string;
  featured?: boolean;
}

export interface CaseStudiesSectionProps {
  heading?: string;
  works: CaseStudyItem[];
  showViewAllLink?: boolean;
  viewAllLabel?: string;
  viewAllHref?: string;
  limit?: number;
}
