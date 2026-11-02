// Refresh the company feed from the Tourground directory export.
//   FEED_URL=https://.../export.json npm run feed:refresh
// Writes data/feed.json (used in preference to data/feed.mock.json).
// Company facts are never hand-edited in this repo: change them in the directory.
import fs from 'node:fs';

const url = process.env.FEED_URL;
if (!url) {
  console.error('Set FEED_URL to the Tourground directory export URL. Until it exists, the build uses data/feed.mock.json.');
  process.exit(1);
}
const headers = process.env.FEED_TOKEN ? { Authorization: `Bearer ${process.env.FEED_TOKEN}` } : {};
const res = await fetch(url, { headers });
if (!res.ok) { console.error(`Feed request failed: ${res.status}`); process.exit(1); }
const feed = await res.json();
if (!Array.isArray(feed.companies) || !Array.isArray(feed.destinations)) {
  console.error('Feed must contain destinations[] and companies[]'); process.exit(1);
}
const before = fs.existsSync('data/feed.json') ? JSON.parse(fs.readFileSync('data/feed.json', 'utf8')) : { companies: [] };
const ids = (f) => new Set(f.companies.map((c) => c.id));
const removed = [...ids(before)].filter((id) => !ids(feed).has(id));
fs.writeFileSync('data/feed.json', JSON.stringify(feed, null, 2) + '\n');
const pub = feed.companies.filter((c) => (c.verified === true || c.founder_owned === true) && !c.removed && !c.is_example);
console.log(`Wrote data/feed.json: ${feed.companies.length} companies, ${pub.length} publishable.`);
if (removed.length) console.log(`Removed since last refresh (their pages unpublish on next build): ${removed.join(', ')}`);
