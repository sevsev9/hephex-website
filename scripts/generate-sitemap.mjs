/**
 * Build-time generator for sitemap.xml and robots.txt.
 *
 * Run after `next build`:
 *   SITE_URL=https://hephex.com node scripts/generate-sitemap.mjs
 *
 * The lists of indexable routes and disallowed paths are kept in sync with
 * lib/seo.ts. Because this script runs as plain ESM (not through Next.js), the
 * canonical values are duplicated here. Keep them aligned with lib/seo.ts.
 */

import fs from "node:fs";
import path from "node:path";
import { SitemapStream, streamToPromise } from "sitemap";

const SITE_URL = (process.env.SITE_URL || "https://hephex.com").replace(
  /\/+$/,
  "",
);
const distDir = path.resolve(process.cwd(), "dist");

// ── Keep in sync with lib/seo.ts ────────────────────────────────────────────
const INDEXABLE_ROUTES = [
  "/",
  "/how-we-work",
  "/team",
  "/work",
  "/contact",
];

const DISALLOW_PATHS = [
  "/api/",
  "/_next/",
];
// ─────────────────────────────────────────────────────────────────────────────

if (!fs.existsSync(distDir)) {
  console.error("dist/ does not exist. Run the build first.");
  process.exit(1);
}

async function main() {
  const lastmod = new Date().toISOString();
  const smStream = new SitemapStream({ hostname: SITE_URL });

  for (const routePath of INDEXABLE_ROUTES) {
    smStream.write({ url: routePath, lastmod });
  }
  smStream.end();

  const rawXml = await streamToPromise(smStream).then((d) => d.toString());

  let sitemapXml = rawXml;

  // Try prettier XML formatting (optional — works without it)
  try {
    const prettier = await import("prettier");
    sitemapXml = await prettier.default.format(rawXml, {
      parser: "xml",
      plugins: ["@prettier/plugin-xml"],
      printWidth: 200,
      tabWidth: 2,
    });
  } catch {
    // prettier or the XML plugin is not installed; use raw XML
  }

  fs.writeFileSync(
    path.join(distDir, "sitemap.xml"),
    sitemapXml.trimEnd() + "\n",
    "utf8",
  );

  const robotsLines = [
    "User-agent: *",
    "Allow: /",
    ...DISALLOW_PATHS.map((p) => `Disallow: ${p}`),
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ];
  fs.writeFileSync(
    path.join(distDir, "robots.txt"),
    robotsLines.join("\n"),
    "utf8",
  );

  console.log(`  Generated sitemap.xml (${INDEXABLE_ROUTES.length} URLs)`);
  console.log(`  Generated robots.txt  (${DISALLOW_PATHS.length} Disallow rules)`);
}

main().catch((err) => {
  console.error("Failed to generate sitemap/robots:", err);
  process.exit(1);
});
