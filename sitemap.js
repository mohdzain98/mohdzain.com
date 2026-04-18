const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/experience", changefreq: "monthly", priority: 0.8 },
  { url: "/industry", changefreq: "monthly", priority: 0.8 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/projects/gnost", changefreq: "monthly", priority: 0.7 },
  {
    url: "/projects/axis-spending-openclaw",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/projects/axis-spending-openclaw/setup",
    changefreq: "monthly",
    priority: 0.6,
  },
  {
    url: "/achievements/landingai-financial-ai-hackathon",
    changefreq: "monthly",
    priority: 0.7,
  },
  { url: "/blogs", changefreq: "weekly", priority: 0.9 },
  {
    url: "/blogs/automated-spending-tracker-openclaw",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    url: "/blogs/color-images-cryptosystem",
    changefreq: "monthly",
    priority: 0.8,
  },
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
