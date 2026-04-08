import type { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Reputation Experts Ltd. Read our legally binding agreement covering services, fees, confidentiality, and your rights.",
};

export default function TermsOfServicePage() {
  return <TermsContent />;
}
