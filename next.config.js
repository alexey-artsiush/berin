/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // whatever port your backend runs on
  }
}
module.exports = nextConfig
