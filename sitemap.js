const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/projects/gnost", changefreq: "monthly", priority: 0.8 },
  { url: "/blogs", changefreq: "monthly", priority: 0.8 },
  {
    url: "/blogs/color-images-cryptosystem",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/gitrepos", changefreq: "monthly", priority: 0.8 },
];
// Generate the sitemap
const sitemap = new SitemapStream({ hostname: "https://mohdzain.com" });

routes.forEach((route) => {
  sitemap.write(route);
});

sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), data);
    console.log("✅ Sitemap generated successfully!");
  })
  .catch((err) => console.error("Error generating sitemap:", err));
