import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getRelatedPosts, ALL_POSTS } from "../posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── Hero banner ───────────────────────────────────────── */}
      <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: post.imageBg }}
          aria-hidden="true"
        >
          <div
            className="w-full h-full opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[1200px] mx-auto px-5 lg:px-8 pb-10">
          <span className="text-[#FF461E] text-[10px] font-semibold tracking-[0.14em] uppercase mb-4 block">
            {post.category}
          </span>
          <h1 className="text-white font-bold text-[clamp(1.4rem,3.5vw,2.4rem)] leading-[1.2] tracking-[-0.02em] max-w-[640px] mb-4">
            {post.title}
          </h1>
          <p className="text-white/50 text-[13px]">
            {post.date}&nbsp;&nbsp;•&nbsp;&nbsp;{post.readTime}
          </p>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[680px] mx-auto px-5 lg:px-8">
          <div className="space-y-6">
            {post.paragraphs.map((para, i) => (
              <p key={i} className="text-[#333] text-[16px] leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-16 lg:py-20 text-center">
        <div className="max-w-[480px] mx-auto px-5">
          <h2 className="text-[#1a1a1a] font-semibold text-[clamp(1.2rem,2.5vw,1.6rem)] tracking-[-0.02em] mb-3">
            Need help with your reputation?
          </h2>
          <p className="text-[#777] text-[14px] leading-[1.7] mb-8">
            Get a free, confidential consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FF461E] text-white text-[14px] font-medium hover:bg-[#e63b15] transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </section>

      {/* ── More Articles ─────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pb-14 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <h2 className="text-[#1a1a1a] font-medium text-[clamp(1.4rem,2.5vw,1.8rem)] tracking-[-0.02em] mb-8">
            More Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:border-[#d0d0d0] transition-colors h-full flex flex-col">
                  {/* Image placeholder */}
                  <div
                    className="h-[160px] shrink-0"
                    style={{ background: p.imageBg }}
                    aria-hidden="true"
                  >
                    <div
                      className="w-full h-full opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>
                  <div className="px-5 py-5 flex flex-col flex-1">
                    <span className="text-[#FF461E] text-[10px] font-semibold tracking-[0.12em] uppercase mb-2 block">
                      {p.category}
                    </span>
                    <h3 className="text-[#1a1a1a] font-semibold text-[14px] leading-[1.4] tracking-[-0.01em] mb-3 group-hover:text-[#333] transition-colors flex-1">
                      {p.title}
                    </h3>
                    <p className="text-[#aaa] text-[11px]">
                      {p.date}&nbsp;&nbsp;•&nbsp;&nbsp;{p.readTime}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
