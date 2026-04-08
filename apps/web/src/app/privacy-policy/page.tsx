import type { Metadata } from "next";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Reputation Experts Ltd. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
