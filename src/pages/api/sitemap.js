const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default function Sitemap() {
async (req, res) => {
  // An array with your links
  const links = [
    { url: "/about", changefreq: "never", priority: 0.3 },
    { url: "/articles", changefreq: "never", priority: 0.3 },
    { url: "/executive", changefreq: "never", priority: 0.3 },
    { url: "/register", changefreq: "never", priority: 0.3 },
    { url: "/contact", changefreq: "never", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
}