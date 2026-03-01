# SEO Foundations

## Indexable routes

All pages listed in `lib/seo.ts → INDEXABLE_ROUTES` appear in the sitemap and
receive `<meta name="robots" content="index, follow">` (set via the root layout
metadata default).

Current list:

| Path           | Page         |
| -------------- | ------------ |
| `/`            | Home         |
| `/how-we-work` | How We Work  |
| `/team`        | Team         |
| `/work`        | Work         |
| `/contact`     | Contact      |

## How to add a new public page

1. Create the route under `app/`.
2. Add the path to **both**:
   - `lib/seo.ts → INDEXABLE_ROUTES`
   - `scripts/generate-sitemap.mjs → INDEXABLE_ROUTES`
3. Export metadata with `robots: { index: true, follow: true }` (or omit —
   the root layout default is `index, follow`).
4. Rebuild: `npm run build`.

## How to add a non-public page

1. Create the route under `app/`.
2. Add the path prefix to **both**:
   - `lib/seo.ts → DISALLOW_PATHS`
   - `scripts/generate-sitemap.mjs → DISALLOW_PATHS`
3. Export metadata in the page's server component:
   ```ts
   export const metadata: Metadata = {
     robots: { index: false, follow: true },
   };
   ```
4. **Do not** add the path to `INDEXABLE_ROUTES`.
5. Rebuild: `npm run build`.

## Build artefacts

`npm run build` runs `next build` then `node scripts/generate-sitemap.mjs`,
which writes:

- `dist/sitemap.xml` — XML sitemap with all indexable URLs.
- `dist/robots.txt` — allows crawling, disallows non-public prefixes, and
  includes a `Sitemap:` directive.

## Local verification

```bash
rm -rf dist && npm run build

# Check files exist
ls -lah dist/sitemap.xml dist/robots.txt

# Inspect contents
cat dist/robots.txt
head -30 dist/sitemap.xml
```

## Google Search Console workflow

1. Add the `hephex.com` property (domain verification preferred).
2. Go to **Sitemaps** and submit `https://hephex.com/sitemap.xml`.
3. Use **URL Inspection** on key pages and request indexing.
4. Monitor **Indexing → Pages** — only the routes above should appear.
5. If unwanted pages are indexed, ensure their metadata has
   `robots: { index: false, follow: true }`, then wait for a recrawl.
   Optionally use the **Removals** tool for immediate (temporary) removal.

## Hosting notes

If serving via Nginx, ensure `/robots.txt` and `/sitemap.xml` are not
rewritten to the SPA fallback:

```nginx
location = /robots.txt  { default_type text/plain;      try_files /robots.txt  =404; }
location = /sitemap.xml { default_type application/xml;  try_files /sitemap.xml =404; }
location / { try_files $uri $uri/ /index.html; }
```

Remove any global `add_header X-Robots-Tag "noindex, nofollow" always;` — it
blocks SEO site-wide.
