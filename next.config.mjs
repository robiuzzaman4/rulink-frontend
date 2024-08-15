/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lottie.host",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
