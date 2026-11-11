import { SitemapStream, streamToPromise } from "sitemap";
import fs from "node:fs";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const today = new Date().toISOString().slice(0, 10);

// Blog posts are read from the registry so new posts are never forgotten.
const registry = fs.readFileSync(
  path.join(root, "src/features/blogs/blogRegistry.ts"),
  "utf8",
);
const blogSlugs = [...registry.matchAll(/^ {2}"([a-z0-9-]+)": \{/gm)].map(
  (m) => m[1],
);
// Registry entries that also have an /example page.
const withExample = new Set(
  [...registry.matchAll(/^ {2}"([a-z0-9-]+)": \{[\s\S]*?example: (\w+),/gm)]
    .filter((m) => m[2] !== "null")
    .map((m) => m[1]),
);

const routes = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
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
  ...blogSlugs.map((slug) => ({
    url: `/blogs/${slug}`,
    changefreq: "monthly",
    priority: 0.8,
  })),
  ...[...withExample].map((slug) => ({
    url: `/blogs/${slug}/example`,
    changefreq: "monthly",
    priority: 0.6,
  })),
].map((r) => ({ ...r, lastmod: today }));

const sitemap = new SitemapStream({ hostname: "https://mohdzain.com" });
routes.forEach((route) => sitemap.write(route));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync(path.join(root, "public", "sitemap.xml"), data);
    console.log(`Sitemap generated: ${routes.length} URLs (lastmod ${today})`);
  })
  .catch((err) => console.error("Error generating sitemap:", err));
