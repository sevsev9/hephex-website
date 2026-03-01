/**
 * Centralized SEO configuration.
 *
 * Both the build-time sitemap generator (`scripts/generate-sitemap.mjs`) and
 * the Next.js metadata in each route reference this file as the single source
 * of truth for which pages are indexable.
 */

export const SITE_URL = "https://hephex.com";

/**
 * Routes that should appear in the sitemap and carry
 * `<meta name="robots" content="index, follow">`.
 */
export const INDEXABLE_ROUTES: string[] = [
  "/",
  "/how-we-work",
  "/team",
  "/work",
  "/contact",
];

/**
 * Path prefixes that robots.txt should Disallow.
 * These are non-public, funnel, or session routes that should never be crawled
 * or indexed. Add entries here when new non-public routes are created.
 */
export const DISALLOW_PATHS: string[] = [
  "/api/",
  "/_next/",
];
