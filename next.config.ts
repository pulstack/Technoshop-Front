import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // domains: ["localhost"]
   images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "technoshop.uz",   // sizning domeningiz
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
