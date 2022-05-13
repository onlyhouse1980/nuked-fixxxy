
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
          destination: 'https://storage.googleapis.com/obcg.org/Erin%20Elizabeth%20copy.mp4',
          permanent: true,
        },
      ]
    },
  }