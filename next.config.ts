/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", // 
  images: {
    unoptimized: true, // ✅ Fix image errors when using GitHub Pages
  },
  trailingSlash: true, // ✅ Helps GitHub Pages find static routes correctly
};

module.exports = nextConfig;
