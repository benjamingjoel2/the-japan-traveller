// Post-build validation of every HTML page in dist/:
//  - JSON-LD parses, every node has @type, every type and property exists in the
//    schema.org vocabulary (when the vocabulary can be downloaded), and Google's
//    required properties are present for Article, BreadcrumbList, FAQPage,
//    ItemList, Organization/TravelAgency.
//  - exactly one <h1>, a canonical URL, Open Graph tags, the footer line
//  - every <img> has width and height
//  - no example or unpublishable company leaked into the build
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const errors = [];
const warn = [];
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

// --- schema.org vocabulary (optional) ---
let vocab = null;
const VOCAB_CACHE = 'node_modules/.cache/schemaorg.jsonld';
try {
  if (!fs.existsSync(VOCAB_CACHE)) {
    const r = await fetch('https://schema.org/version/latest/schemaorg-current-https.jsonld');
    if (r.ok) { fs.mkdirSync(path.dirname(VOCAB_CACHE), { recursive: true }); fs.writeFileSync(VOCAB_CACHE, await r.text()); }
  }
  if (fs.existsSync(VOCAB_CACHE)) {
    const g = JSON.parse(fs.readFileSync(VOCAB_CACHE, 'utf8'))['@graph'];
    const name = (id) => id.replace('schema:', '');
    vocab = { types: new Set(), props: new Set() };
    for (const n of g) {
      const t = [].concat(n['@type']);
      if (t.includes('rdfs:Class')) vocab.types.add(name(n['@id']));
      if (t.includes('rdf:Property')) vocab.props.add(name(n['@id']));
    }
  }
} catch (e) { warn.push(`schema.org vocabulary not available (${e.message}); type/property names not checked`); }

const REQUIRED = {
  Article: ['headline', 'datePublished', 'dateModified', 'author', 'image'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  ItemList: ['itemListElement'],
  TravelAgency: ['name', 'address'],
  Organization: ['name', 'url'],
  WebSite: ['name', 'url'],
  TouristDestination: ['name'],
};

function checkNode(node, file, trail = '') {
  if (Array.isArray(node)) return node.forEach((n, i) => checkNode(n, file, `${trail}[${i}]`));
  if (!node || typeof node !== 'object') return;
  const types = node['@type'] ? [].concat(node['@type']) : [];
  for (const t of types) {
    if (vocab && !vocab.types.has(t)) errors.push(`${file}: unknown schema.org type "${t}" at ${trail}`);
    for (const req of REQUIRED[t] ?? []) {
      if (node[req] === undefined || node[req] === '' || (Array.isArray(node[req]) && !node[req].length)) {
        // Organization nested as a reference may legitimately be minimal
        if (!(t === 'Organization' && trail !== '' && req === 'url')) errors.push(`${file}: ${t} missing "${req}" at ${trail || 'root'}`);
      }
    }
    if (t === 'BreadcrumbList') node.itemListElement.forEach((li, i) => {
      if (li.position !== i + 1 || !li.name || !li.item) errors.push(`${file}: BreadcrumbList item ${i} incomplete`);
    });
    if (t === 'FAQPage') node.mainEntity.forEach((q, i) => {
      if (q['@type'] !== 'Question' || !q.name || !q.acceptedAnswer?.text) errors.push(`${file}: FAQPage question ${i} incomplete`);
    });
    if (t === 'ItemList') node.itemListElement.forEach((li, i) => {
      if (li.position !== i + 1 || !li.url) errors.push(`${file}: ItemList item ${i} incomplete`);
    });
    if (t === 'Article') for (const k of ['datePublished', 'dateModified']) {
      if (node[k] && !/^\d{4}-\d{2}-\d{2}/.test(node[k])) errors.push(`${file}: Article ${k} not ISO 8601`);
    }
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('@')) continue;
    if (vocab && !vocab.props.has(k)) errors.push(`${file}: unknown schema.org property "${k}" at ${trail || 'root'}`);
    if (v && typeof v === 'object') checkNode(v, file, `${trail}.${k}`);
  }
}

let ldCount = 0;
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const rel = f.replace(/^dist/, '');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: ${h1} <h1> elements (expected 1)`);
  if (!/<link rel="canonical" href="https:\/\/[^"]+"/.test(html)) errors.push(`${rel}: no canonical`);
  for (const p of ['og:title', 'og:description', 'og:image', 'og:url']) if (!html.includes(`property="${p}"`)) errors.push(`${rel}: missing ${p}`);
  if (!html.includes('Published by')) errors.push(`${rel}: footer "Published by Tourground." missing`);
  for (const img of html.match(/<img\b[^>]*>/g) || []) if (!/\bwidth=/.test(img) || !/\bheight=/.test(img)) errors.push(`${rel}: <img> without width/height`);
  if (process.env.INCLUDE_EXAMPLES !== 'true' && /example-operator|Example Operator/.test(html)) errors.push(`${rel}: example record leaked into build`);
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    ldCount++;
    let data;
    try { data = JSON.parse(m[1]); } catch (e) { errors.push(`${rel}: JSON-LD does not parse: ${e.message}`); continue; }
    if (data['@context'] !== 'https://schema.org') errors.push(`${rel}: JSON-LD @context must be https://schema.org`);
    checkNode(data['@graph'] ?? data, rel);
  }
}

// Only publishable companies may have pages
const feedFile = fs.existsSync('data/feed.json') ? 'data/feed.json' : 'data/feed.mock.json';
const feed = JSON.parse(fs.readFileSync(feedFile, 'utf8'));
const opDir = path.join(DIST, 'operators');
if (fs.existsSync(opDir)) {
  for (const f of fs.readdirSync(opDir)) {
    const id = f.replace(/\.html$/, '');
    const c = feed.companies.find((x) => x.id === id);
    const ok = c && !c.removed && (c.verified === true || c.founder_owned === true) && (!c.is_example || process.env.INCLUDE_EXAMPLES === 'true');
    if (!ok) errors.push(`/operators/${f}: page exists for a company that must not be published`);
  }
}

for (const w of warn) console.warn('! ' + w);
if (errors.length) {
  console.error(`\nValidation failed (${errors.length}):\n` + errors.map((e) => '  ✗ ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${files.length} pages validated, ${ldCount} JSON-LD blocks${vocab ? ' checked against the schema.org vocabulary' : ''}.`);
