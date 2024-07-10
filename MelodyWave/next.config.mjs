/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basepath: "/MelodyWave",
  output: "export", // Enables static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
