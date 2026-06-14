import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.guim.co.uk" },
      { protocol: "https", hostname: "i.guim.co.uk" },
      { protocol: "https", hostname: "uploads.guim.co.uk" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
