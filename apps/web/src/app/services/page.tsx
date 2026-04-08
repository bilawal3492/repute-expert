import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive reputation management solutions for individuals and businesses. Review removal, content management, digital PR, brand monitoring, and more.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
