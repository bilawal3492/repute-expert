import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@repute/ui";
import { Footer } from "@repute/ui";
import { CookieBanner } from "@repute/ui";

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
      <body>
        <Header
          brandName="Reputation Experts"
          ctaLabel="Contact us"
          ctaLink="/contact"
          servicesLabel="Services"
          servicesHref="/services"
        />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

