import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "vercel.com",
      },
      {
        hostname: "thesvg.org",
      },
    ],
  },
};

export default nextConfig;
