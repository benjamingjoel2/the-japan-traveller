# Data fields

Company facts come only from the Tourground directory export. This file lists every field the site reads, including the ones **assumed** because the export does not exist yet. When the real export lands, confirm each assumed field (or map it in `src/lib/feed.mjs`).

The build fails if a required field is missing (`src/lib/feed.mjs`, `REQUIRED`).

## Top level

| Field | Type | Status | Used for |
|---|---|---|---|
| `destinations[]` | array | from brief | Destination list (must contain `japan`) |
| `companies[]` | array | from brief | All company pages and lists |
| `generated_at` | ISO date | **assumed** | "Feed dated …" on rankings, compare, sitemap lastmod |
| `source` | string | **assumed** | Shown in the sources note of company and ranking pages |
| `_comment` | string | mock only | Ignored |

## destinations[]

| Field | Status | Notes |
|---|---|---|
| `slug` | from brief | `japan` |
| `name` | from brief | |
| `type` | from brief | e.g. `country` |
| `content_dir` | from brief | Where guide and Q&A markdown lives (`src/content`) |
| `country` | **assumed** | ISO code (`JP`) used to read `rank` and `delivers_in` |

## companies[]

| Field | Type | Status | Required | Used for |
|---|---|---|---|---|
| `id` | slug | from brief | yes | URL `/operators/{id}` |
| `name` | string | from brief | yes | |
| `kind` | `dmc` \| `agency` | from brief | yes | "What it does" |
| `country_base` | ISO code | from brief | yes | "Based in" |
| `delivers_in[]` | ISO codes | from brief | yes | Company appears only if it includes `JP` |
| `sells_from[]` | ISO codes | from brief | yes | "Sells from" |
| `niches[]` | slugs | from brief | yes | Niche lists. Slugs assumed: `culture-and-craft`, `food-and-sake`, `hiking`, `honeymoon`, `family`, `winter-and-ski` |
| `tier` | `verified` \| `black` \| `platinum` \| `founder` | from brief | yes | Tier label; `platinum` enables the sponsored website link |
| `verified` | boolean | from brief | yes | Publishing rule |
| `founder_owned` | boolean | from brief | yes | Publishing rule + "Founder-owned (Tourground Geotrax)" label |
| `rank` | `{ "JP": n }` | from brief | yes | The only ordering used anywhere |
| `summary` | string | from brief | yes | "What it does" text |
| `website` | URL | from brief | yes | Linked only for Platinum, `rel="sponsored nofollow"` |
| `profile_url` | URL | from brief | yes | Default link for everyone else |
| `sources[]` | `{url,label}` | from brief | yes | Sources on company pages |
| `last_checked` | ISO date | from brief | yes | "Last checked", published/reviewed dates of the fact page |
| `base_city` | string | **assumed** | no | "Based in" city |
| `regions[]` | region slugs | **assumed** | no | Region column on the departure board and compare table. Slugs: `hokkaido`, `tohoku`, `kanto`, `chubu`, `kansai`, `chugoku`, `shikoku`, `kyushu`, `okinawa` |
| `trip_months[]` | 1–12 | **assumed** | no | Season wheel: "Operators who run trips in {month}" |
| `memberships[]` | strings | **assumed** | no | "Memberships" |
| `removed` | boolean | **assumed** | no | `true` unpublishes (as does disappearing from the feed) |
| `is_example` | boolean | **assumed** | no | Mock-only fake records; never published unless `INCLUDE_EXAMPLES=true` |

## Publishing rule (code: `isPublishable` in `src/lib/feed.mjs`)

```
publish = (verified === true || founder_owned === true)
          && removed !== true
          && (is_example !== true || INCLUDE_EXAMPLES === 'true')
          && delivers_in includes 'JP'
order   = rank.JP ascending (companies without rank.JP sort last, shown as "–")
```

Production additionally requires a real `data/feed.json` (or an explicit `FEED_PATH`).
If only `data/feed.mock.json` is available, production publishes no operator records or
ranks and displays a notice. The mock remains available for local layout development.

## Mock contents (`data/feed.mock.json`)

- **Komorebi**: founder-owned (`verified: false`, `founder_owned: true`, `tier: founder`). Facts taken from komorebi.tourground.com on 2026-11-02. `rank.JP = 1` is a **mock value**, not a directory rank; it is never published in production. Niches and months derived from its Journeys page; `winter-and-ski` reflects a winter snow-and-onsen journey, not skiing.
- **Example Operator One**: fake, `is_example: true`, verified, Platinum (tests sponsored link and multi-row board).
- **Example Operator Two**: fake, `is_example: true`, unverified (tests that unverified companies never publish).
