
  const withFonts = require('next-fonts');
  const withImages = require('next-images');
  const withPlugins = require('next-compose-plugins');
  module.exports = withPlugins([withFonts, withImages]);  
  
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
  
  module.exports = withBundleAnalyzer({});

  module.exports = {
    async redirects() {
      return [
        {
          source: '/erin',
          destination: 'https://drive.google.com/file/d/10Y7Tm8f8d0csnq7EXWw6hForRgQroQ-D/view?usp=sharing',
          permanent: true,
        },
      ]
    },
  }