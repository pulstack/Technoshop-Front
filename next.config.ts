import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        hostname: "technoshop.uz",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", 
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
