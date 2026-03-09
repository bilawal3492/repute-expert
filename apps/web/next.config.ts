import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repute/ui"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "stream.mux.com" },
      { protocol: "https", hostname: "image.mux.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.builder.io" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "**.cloudinary.com" },
    ],
  },

};

export default nextConfig;
