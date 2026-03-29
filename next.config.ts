import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn-images.vtv.vn",
      },
      {
        protocol: "https",
        hostname: "cdn-media.sforum.vn",
      },
      {
        protocol: "https",
        hostname: "photo-resize-zmp3.zadn.vn",
      },
      {
        protocol: "https",
        hostname: "photo-resize-zmp3.zmdcdn.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
