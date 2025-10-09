/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    loader: "custom",
    domains: ["firebasestorage.googleapis.com"],
    loaderFile: "./akamai-loader.js",
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/home": { page: "/" },
      "/sponsors": { page: "/sponsors" },
      "/speakers": { page: "/speakers" },
      "/campaigns": { page: "/campaigns" },
    };
  },
};

module.exports = nextConfig;
