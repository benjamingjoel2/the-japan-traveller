// Pre-build content gate. Reports which markdown files will be published.
// - Only status: reviewed with at least one source is published.
// - status: reviewed WITHOUT sources fails the build (never publish unsourced text).
import fs from 'node:fs';
import path from 'node:path';

const dirs = ['src/content/guide', 'src/content/qa'];
let failed = false;
for (const dir of dirs) {
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const fm = txt.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) { console.error(`✗ ${dir}/${f}: no front matter`); failed = true; continue; }
    const status = (fm[1].match(/^status:\s*(\w+)/m) || [])[1];
    const hasSources = /^sources:\s*\n\s+- url:/m.test(fm[1]);
    for (const key of ['title', 'published', 'reviewed', 'status']) {
      if (!new RegExp(`^${key}:`, 'm').test(fm[1])) { console.error(`✗ ${dir}/${f}: missing ${key}`); failed = true; }
    }
    if (status === 'reviewed' && !hasSources) { console.error(`✗ ${dir}/${f}: status reviewed but no sources. Not allowed.`); failed = true; }
    else if (status === 'reviewed') console.log(`✓ publish  ${dir}/${f}`);
    else console.log(`· skip (${status}) ${dir}/${f}`);
  }
}
if (failed) process.exit(1);
