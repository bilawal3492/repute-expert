import React from "react";
import Link from "next/link";
import { ALL_POSTS } from "./posts";

const FEATURED = ALL_POSTS[0];
const POSTS = ALL_POSTS.slice(1);

function CategoryLabel({ label }: { label: string }) {
  return (
    <span className="text-[#FF461E] text-[10px] font-semibold tracking-[0.12em] uppercase">
      {label}
    </span>
  );
}

export function BlogContent() {
  return (
    <main style={{ fontFamily: "\'Inter\', sans-serif" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pt-32 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <p className="text-[#FF461E] text-[11px] font-semibold tracking-[0.12em] uppercase mb-5">
            Blog
          </p>
          <h1 className="text-[#1a1a1a] font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] mb-5 max-w-[560px]">
            Insights &amp; Resources
          </h1>
          <p className="text-[#555] text-[15px] leading-[1.75] max-w-[440px]">
            Expert analysis and practical guides on online reputation management, digital PR, and brand protection.
          </p>
        </div>
      </section>

      {/* ── Featured post ─────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] pb-4">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <Link href={`/blog/${FEATURED.slug}`} className="group block">
            <div className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[320px] lg:min-h-[380px] border border-[#ebebeb]">
              {/* Image placeholder */}
              <div
                className="min-h-[200px] lg:min-h-full"
                style={{ background: FEATURED.imageBg }}
                aria-hidden="true"
              >
                <div
                  className="w-full h-full opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
              {/* Content */}
              <div className="bg-[#0f0f0f] px-8 sm:px-10 lg:px-12 py-10 flex flex-col justify-center">
                <CategoryLabel label={FEATURED.category} />
                <h2 className="text-white font-semibold text-[clamp(1.3rem,2.5vw,1.8rem)] leading-[1.25] tracking-[-0.02em] mt-4 mb-4 group-hover:text-[#ddd] transition-colors">
                  {FEATURED.title}
                </h2>
                <p className="text-[#888] text-[13px] leading-[1.7] mb-8">
                  {FEATURED.excerpt}
                </p>
                <p className="text-[#555] text-[12px]">
                  {FEATURED.date}&nbsp;&nbsp;•&nbsp;&nbsp;{FEATURED.readTime}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Post grid ─────────────────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-4 pb-14 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] h-full flex flex-col hover:border-[#d0d0d0] transition-colors">
                  {/* Image placeholder */}
                  <div
                    className="h-[180px] shrink-0"
                    style={{ background: post.imageBg }}
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
                  {/* Content */}
                  <div className="px-6 py-6 flex flex-col flex-1">
                    <CategoryLabel label={post.category} />
                    <h3 className="text-[#1a1a1a] font-semibold text-[15px] leading-[1.4] tracking-[-0.01em] mt-3 mb-3 group-hover:text-[#333] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#777] text-[13px] leading-[1.65] flex-1 mb-5">
                      {post.excerpt}
                    </p>
                    <p className="text-[#aaa] text-[11px]">
                      {post.date}&nbsp;&nbsp;•&nbsp;&nbsp;{post.readTime}
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
