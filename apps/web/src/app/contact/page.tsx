import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Reputation Experts. Free, confidential consultation on review removal, reputation repair, and online presence management.",
};

export default function ContactPage() {
  return <ContactContent />;
}
