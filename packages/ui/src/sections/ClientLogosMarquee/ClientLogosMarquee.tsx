import React from "react";
import Image from "next/image";
import styles from "./ClientLogosMarquee.module.css";
import type { ImageAsset } from "../../types";

export interface LogoItem {
  name: string;
  logo: ImageAsset;
  url?: string;
}

export interface ClientLogosMarqueeProps {
  clientsLabel?: string;
  partnersLabel?: string;
  clientLogos: LogoItem[];
  partnerLogos?: LogoItem[];
  showPartners?: boolean;
}

function LogoTrack({
  logos,
  reverse = false,
}: {
  logos: LogoItem[];
  reverse?: boolean;
}) {
  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full py-2" aria-hidden="true">
      <div className={`${styles.track} ${reverse ? styles.trackReverse : ""}`}>
        {doubled.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="shrink-0 flex items-center justify-center h-8"
          >
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                className="opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.logo.src}
                  alt={logo.name}
                  width={logo.logo.width ?? 100}
                  height={logo.logo.height ?? 32}
                  className="h-7 w-auto object-contain"
                />
              </a>
            ) : (
              <Image
                src={logo.logo.src}
                alt={logo.name}
                width={logo.logo.width ?? 100}
                height={logo.logo.height ?? 32}
                className="h-7 w-auto object-contain opacity-50 grayscale"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientLogosMarquee({
  clientsLabel = "Clients",
  partnersLabel = "Partners",
  clientLogos,
  partnerLogos,
  showPartners = true,
}: ClientLogosMarqueeProps) {
  return (
    <section className="py-14 lg:py-20 border-y border-white/[0.06] bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-10 mb-8">
        <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
          {clientsLabel}
        </p>
      </div>

      <LogoTrack logos={clientLogos} />

      {showPartners && partnerLogos && partnerLogos.length > 0 && (
        <>
          <div className="max-w-container mx-auto px-6 lg:px-10 mt-10 mb-8">
            <p className="text-white/30 text-xs font-medium tracking-widest uppercase">
              {partnersLabel}
            </p>
          </div>
          <LogoTrack logos={partnerLogos} reverse />
        </>
      )}
    </section>
  );
}
