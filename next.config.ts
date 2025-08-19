import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/activities",
        destination: "/activities/competition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
