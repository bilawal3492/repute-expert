import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@repute/ui";
import { Footer } from "@repute/ui";
import { CookieBanner } from "@repute/ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Reputation Experts — Protect Your Business from Harmful Online Reviews",
    template: "%s | Reputation Experts",
  },
  description:
    "Professional online reputation management. We remove harmful, fake, and defamatory reviews from Google, Yelp, Trustpilot, Glassdoor, and 50+ platforms.",
  metadataBase: new URL("https://getreputationpros.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reputation Experts",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable} suppressHydrationWarning>
        <Header
          logo={{
            src: "/images/repute-expert-logo.png",
            alt: "Reputation Experts",
            width: 547,
            height: 100,
          }}
          brandName="Reputation Experts"
          ctaLabel="Talk To Expert"
          ctaLink="/contact"
          phoneNumber="0800 654 6009"
          phoneHref="tel:08006546009"
          navItems={[
            { label: "Main", href: "/" },
            { label: "Solutions", href: "/services" },
            { label: "Knowledge", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

