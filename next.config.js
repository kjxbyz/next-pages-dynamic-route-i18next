const { withContentlayer } = require("next-contentlayer");
const { i18n } = require("./next-i18next.config.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["www.kjxbyz.com"],
  },
};

module.exports = withContentlayer(nextConfig);
