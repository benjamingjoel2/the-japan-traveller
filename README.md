# The Japan Traveller

An independent reference for planning Japan with a local operator: regions, seasons, rail, ryokan etiquette and which verified operators deliver which kind of trip. Published by Tourground at **https://thejapantraveller.tourground.com**.

Static site built with [Astro](https://astro.build) and hosted on Vercel. No client-side JavaScript except Vercel Web Analytics (cookieless).

## Run it

Requires Node 20+ (tested on Node 22).

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # content gate → astro build → JSON-LD / page validation
npm run preview    # serve dist/
npm run check:links  # check every source URL on the built site
```

To see the layout with the fake example operators during local development (never in production):

```bash
INCLUDE_EXAMPLES=true npm run dev
```

`npm run build` fails if: reviewed content has no sources; the feed is missing a required field; any page has zero or several `<h1>`, no canonical or no Open Graph tags; any JSON-LD block does not parse, uses an unknown schema.org type or property, or misses a required property; an `<img>` lacks width/height; or a page exists for a company that must not be published.

## Where things live

| What | Where |
|---|---|
| Name, domain, email, editor line, accent colour, address, links, **all disclosure, paid-label and legal wording** | `src/config/site.mjs` (the one config file) |
| Company data (single source of truth) | `data/feed.json` (real export) or `data/feed.mock.json` |
| Feed loading and publishing rules | `src/lib/feed.mjs` |
| Guide pages (markdown) | `src/content/guide/*.md` |
| Q&A pages (markdown) | `src/content/qa/*.md` |
| Season wheel, rail routes, regions, niches (sourced reference data) | `src/data/reference.mjs` |
| Styles (TIMETABLE theme) | `src/styles/global.css` |
| Field list and assumptions | `DATA-FIELDS.md` |
| Facts and placeholders to check before launch | `FACTS-TO-VERIFY.md` |

## Add reviewed content

1. Create `src/content/guide/<slug>.md` (URL `/guide/<slug>`) or `src/content/qa/<slug>.md` (URL `/questions/<slug>`).
2. Front matter:

   ```yaml
   ---
   title: "Is Japan expensive?"
   description: "Under 200 characters; used for meta description."
   # Q&A only:
   question: "Is Japan expensive to visit?"
   answer: "The short answer, shown first (max 400 characters)."
   related: [is-the-jr-pass-still-worth-it]
   # both:
   order: 5
   published: 2026-11-02
   reviewed: 2026-11-02
   status: draft          # draft | reviewed
   sources:
     - url: https://example.org/official-page
       label: "Publisher: page title"
       accessed: 2026-11-02
   ---
   ```

3. Write plain, factual, reference-style text. No marketing copy, no invented statistics, reviews, quotes or counts.
4. Only `status: reviewed` **with at least one source** is published. A reviewed file without sources fails the build. Drafts never appear.
5. When you re-check a page, update `reviewed` (and `accessed` on sources). Add any changeable figure to `FACTS-TO-VERIFY.md`.

Guide pages can embed the rail table or the season wheel with `embed: rail-table` or `embed: season-wheel`.

## Refresh the feed

Company facts come only from the Tourground directory export. **Never hand-edit company facts in this repo.**

```bash
FEED_URL=https://<directory-export-url> FEED_TOKEN=<optional> npm run feed:refresh
npm run build
```

This writes `data/feed.json`, which takes precedence over the mock. Commit it and push; Vercel rebuilds. You can also point a build at any file with `FEED_PATH=path/to/feed.json`. Production builds never publish operator data from `data/feed.mock.json`; until a live feed is supplied, operator pages and rankings remain empty and show a feed-unavailable notice.

Rules enforced in `src/lib/feed.mjs`:

- Published only if `verified: true` or `founder_owned: true`, and the company delivers in `JP`.
- A company removed from the feed (or with `removed: true`) loses its page, its ranking rows and its sitemap entry on the next build.
- Order everywhere is `rank.JP` from the feed. Nothing reorders it.
- Platinum companies link to their own site with `rel="sponsored nofollow"`; everyone else links to `profile_url`.
- Founder-owned brands always show "Founder-owned (Tourground Geotrax)".

## Paid placement

Not built yet. `src/components/AdSlot.astro` renders the labelled, visually separate "Advertisement feature" box. It renders nothing until it is given an `ad` (it sits at the top of ranking pages, outside the ranking). A specimen is shown on `/how-we-rank`.

## SEO and AI discovery

- `sitemap.xml`, `robots.txt` (allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others) and `llms.txt` are generated from the same route list (`src/lib/routes.mjs`).
- JSON-LD: WebSite and Organization (all pages), BreadcrumbList, Article (datePublished/dateModified), TouristDestination/Place, TravelAgency (company pages), ItemList (rankings), FAQPage (Q&A).
- Clean URLs (`/guide/regions`), canonical on every page, Open Graph image at `public/og/default.png` (generated in-house by `scripts/make-images.cjs`).

## Images

The site ships no photographs. Any image added must be owned or licensed and recorded in `site.images` in the config (Unsplash allowed; no credit line on the site). No scraped images, no photos of identifiable people. Always set `width` and `height`, and `loading="lazy"` below the fold.

## Deploy

Vercel project imported from GitHub `benjamingjoel2/the-japan-traveller` (`main`). `vercel.json` sets the build command, output folder (`dist`) and clean URLs. Enable **Web Analytics** in the Vercel project settings; the script is already on every page.

## Before launch

Work through `FACTS-TO-VERIFY.md`, in particular the placeholder address, the corrections URL, the legal entity and governing law, and legal sign-off for the US, UK, EU and Brazil on the Privacy Policy, Terms, Cookie Policy and the disclosure wording in `src/config/site.mjs`.
