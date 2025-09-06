import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://iajfi9upvxogiyfi.public.blob.vercel-storage.com/**"),
    ],
  },
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
