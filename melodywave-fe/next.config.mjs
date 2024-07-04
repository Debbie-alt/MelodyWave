/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
