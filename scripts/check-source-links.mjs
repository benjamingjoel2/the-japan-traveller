// Checks every source URL used on the built site responds (run after build).
import fs from 'node:fs';
import path from 'node:path';
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })('dist');
const urls = new Set();
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const src = html.split('id="sources"')[1] ?? '';
  for (const m of src.matchAll(/href="(https?:[^"]+)"/g)) urls.add(m[1].replace(/&amp;/g, '&'));
}
let bad = 0;
for (const u of urls) {
  try {
    const r = await fetch(u, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (link check)' } });
    const ok = r.status < 400 || r.status === 403; // some government sites block bots with 403
    if (!ok) bad++;
    console.log(`${ok ? '✓' : '✗'} ${r.status} ${u}`);
  } catch (e) { bad++; console.log(`✗ ERR ${u} ${e.message}`); }
}
console.log(`${urls.size} source URLs, ${bad} failing`);
process.exit(bad ? 1 : 0);
