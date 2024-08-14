/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lottie.host",
      },
    ],
  },
};

export default nextConfig;
