"use client";

import React, { useEffect, useRef, useState } from "react";

export interface StatItem {
  number: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface StatsSectionProps {
  stats?: StatItem[];
  clientsLabel?: string;
}

function useCountUp(target: number, duration = 1600, enabled = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, enabled]);

  return count;
}

function StatItem({ stat, active }: { stat: StatItem; active: boolean }) {
  const count = useCountUp(stat.number, 1600, active);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] text-white leading-none">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{count}</span>
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <p className="text-white/40 text-sm font-medium">{stat.label}</p>
    </div>
  );
}

const DEFAULT_STATS: StatItem[] = [
  { number: 50, suffix: "+", label: "Clients" },
  { number: 15, suffix: "+", label: "Years of Experience" },
  { number: 30, suffix: "M+", label: "Users Served" },
  { number: 6, label: "Design Awards" },
];

export function StatsSection({ stats = DEFAULT_STATS }: StatsSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={i > 0 ? "lg:pl-10 xl:pl-14" : ""}
            >
              <StatItem stat={stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

