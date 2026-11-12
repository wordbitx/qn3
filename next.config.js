/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Realistic stock photos are hotlinked from the Pexels CDN (binary
    // images cannot be pushed through the GitHub connector). Only this
    // host is allowed for remote images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
