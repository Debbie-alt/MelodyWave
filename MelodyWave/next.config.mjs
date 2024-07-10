/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basepath: "/melodywave-fe",
  output: "export", // Enables static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
