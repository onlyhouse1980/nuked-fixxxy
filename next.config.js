
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
          destination: 'https://storage.googleapis.com/obcg.org/erin23.mp4',
          permanent: true,
        },
      ]
    },
  }
module.exports = {
    async redirects() {
      return [
        {
          source: '/over/annualusage',
          destination: 'https://docs.google.com/spreadsheets/d/1OhxihK26J9XkgRTpVDEzDpdGlxoeQO8mbJZ0vCDykKI/edit?usp=sharing',
          permanent: true,
        },
      ]
    },   
  }
  





  
