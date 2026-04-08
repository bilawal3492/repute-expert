import type { Metadata } from "next";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Reputation Experts. We're a growing team of analysts, strategists, and communicators passionate about helping individuals and businesses manage their digital reputation.",
};

export default function CareersPage() {
  return <CareersContent />;
}
