import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert analysis and practical guides on online reputation management, digital PR, and brand protection.",
};

export default function BlogPage() {
  return <BlogContent />;
}
