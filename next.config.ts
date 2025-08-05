import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/garage",
        destination: "/garage/vehicle-types",
        permanent: true,
      },
      {
        source: "/activities",
        destination: "/activities/competition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
