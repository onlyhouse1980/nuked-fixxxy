
  const withFonts = require('next-fonts');
  const withImages = require('next-images');
  const withPlugins = require('next-compose-plugins');
  module.exports = withPlugins([withFonts, withImages]);  
  
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  
  module.exports = withBundleAnalyzer({});

  