// Loads the Tourground directory export and applies the publishing rules.
// Single source of truth for company facts. Never hand-edit company facts here.
//
// Feed resolution order:
//   1. FEED_PATH env var (a local JSON file)
//   2. data/feed.json (written by `npm run feed:refresh`)
//   3. data/feed.mock.json (development mock)
//
// Publishing rules (strict):
//   - publish only if verified === true OR founder_owned === true
//   - never publish removed === true, or records missing from the feed
//     (pages are generated from the feed, so a removal unpublishes on next build)
//   - never publish is_example === true unless INCLUDE_EXAMPLES=true (local only)
//   - rank comes only from rank[COUNTRY]; never reordered by anything else
import fs from 'node:fs';
import path from 'node:path';
import { site } from '../config/site.mjs';

const ROOT = process.cwd();
const REQUIRED = [
  'id', 'name', 'kind', 'country_base', 'delivers_in', 'sells_from', 'niches', 'tier',
  'verified', 'founder_owned', 'rank', 'summary', 'website', 'profile_url', 'sources', 'last_checked',
];
const TIERS = ['verified', 'black', 'platinum', 'founder'];
const KINDS = ['dmc', 'agency'];

function resolveFeedPath() {
  if (process.env.FEED_PATH) return path.resolve(ROOT, process.env.FEED_PATH);
  const real = path.join(ROOT, 'data', 'feed.json');
  if (fs.existsSync(real)) return real;
  return path.join(ROOT, 'data', 'feed.mock.json');
}

let cache;
export function loadFeed() {
  if (cache) return cache;
  const file = resolveFeedPath();
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(raw.companies) || !Array.isArray(raw.destinations)) {
    throw new Error(`Feed ${file} must contain destinations[] and companies[]`);
  }
  const errors = [];
  for (const c of raw.companies) {
    for (const f of REQUIRED) if (!(f in c)) errors.push(`${c.id ?? '?'}: missing field "${f}"`);
    if (c.tier && !TIERS.includes(c.tier)) errors.push(`${c.id}: unknown tier "${c.tier}"`);
    if (c.kind && !KINDS.includes(c.kind)) errors.push(`${c.id}: unknown kind "${c.kind}"`);
    if (c.id && !/^[a-z0-9-]+$/.test(c.id)) errors.push(`${c.id}: id must be a lowercase slug`);
  }
  if (errors.length) throw new Error('Feed validation failed:\n' + errors.join('\n'));
  cache = { file: path.relative(ROOT, file), ...raw };
  return cache;
}

const includeExamples = process.env.INCLUDE_EXAMPLES === 'true';

export function isPublishable(c) {
  if (c.removed === true) return false;
  if (c.is_example === true && !includeExamples) return false;
  return c.verified === true || c.founder_owned === true;
}

const COUNTRY = site.destination.country;

/** Published companies that deliver in this destination, ordered by feed rank only. */
export function publishedCompanies() {
  const { companies } = loadFeed();
  return companies
    .filter(isPublishable)
    .filter((c) => c.delivers_in.includes(COUNTRY))
    .sort((a, b) => rankOf(a) - rankOf(b));
}

/** Feed rank for this destination; companies without one sort last, unranked. */
export function rankOf(c) {
  const r = c.rank?.[COUNTRY];
  return Number.isFinite(r) ? r : Number.POSITIVE_INFINITY;
}

export function hasRank(c) {
  return Number.isFinite(c.rank?.[COUNTRY]);
}

export function companyById(id) {
  return publishedCompanies().find((c) => c.id === id);
}

export function feedMeta() {
  const f = loadFeed();
  return { generated_at: f.generated_at ?? null, source: f.source ?? f.file, file: f.file };
}

/**
 * Outbound link for a company. Platinum: own website, marked sponsored.
 * Everyone else (including founder-owned): Tourground profile only.
 */
export function companyLink(c) {
  if (c.tier === 'platinum' && c.website) {
    return { href: c.website, rel: 'sponsored nofollow', label: 'Company website', sponsored: true };
  }
  return { href: c.profile_url, rel: undefined, label: 'Tourground profile', sponsored: false };
}

export const TIER_LABEL = {
  verified: 'Verified',
  black: 'Black',
  platinum: 'Platinum',
  founder: 'Founder-owned',
};
export const KIND_LABEL = { dmc: 'Destination management company (DMC)', agency: 'Travel agency' };
export const KIND_SHORT = { dmc: 'DMC', agency: 'Agency' };

const COUNTRY_NAMES = { JP: 'Japan', GB: 'United Kingdom', US: 'United States', AU: 'Australia', FR: 'France', DE: 'Germany', BR: 'Brazil', CA: 'Canada' };
export function countryName(code) {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code;
  } catch {
    return COUNTRY_NAMES[code] ?? code;
  }
}
