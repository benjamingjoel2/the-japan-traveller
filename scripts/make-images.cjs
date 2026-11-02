// Generates the owned OG image and icons from site typography (run once; output committed).
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  const font = (f) => 'file://' + path.resolve('node_modules/@fontsource', f);
  const html = `<html><head><style>
  @font-face{font-family:S;src:url(${font('shippori-mincho/files/shippori-mincho-latin-600-normal.woff2')})}
  @font-face{font-family:M;src:url(${font('ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2')})}
  body{margin:0;width:1200px;height:630px;background:#f5f1e6;color:#1b1b1a;font-family:M}
  .strip{background:#1b1b1a;color:#f5f1e6;padding:14px 56px;font-size:20px;letter-spacing:.1em;text-transform:uppercase;display:flex;justify-content:space-between}
  .main{padding:70px 56px 0;border-bottom:6px double #1b1b1a;height:330px}
  h1{font-family:S;font-weight:600;font-size:96px;margin:0;line-height:1}
  p{font-size:26px;margin:28px 0 0;color:#454540;max-width:1000px;line-height:1.4}
  .grid{display:grid;grid-template-columns:repeat(5,1fr);border-top:0;margin:0 56px}
  .grid div{border-right:1px solid #1b1b1a;border-bottom:1px solid #1b1b1a;padding:16px;font-size:18px;letter-spacing:.08em;text-transform:uppercase}
  .grid div:first-child{border-left:1px solid #1b1b1a}
  .grid b{display:block;font-weight:400;color:#1e3557;font-size:28px;margin-top:4px;letter-spacing:0}
  </style></head><body>
  <div class="strip"><span>Reference edition · Japan</span><span>Published by Tourground</span></div>
  <div class="main"><h1>The Japan Traveller</h1><p>Regions, seasons, rail, ryokan etiquette, and which verified local operators deliver which kind of trip.</p></div>
  <div class="grid"><div>Guide<b>Regions</b></div><div>Season<b>Wheel</b></div><div>Rail<b>Routes</b></div><div>Ranked<b>By merit</b></div><div>Q&amp;A<b>Answers</b></div></div>
  </body></html>`;
  await p.setContent(html); await p.waitForTimeout(300);
  await p.screenshot({ path: 'public/og/default.png' });
  for (const s of [180, 512, 32]) {
    await p.setViewportSize({ width: s, height: s });
    await p.setContent(`<html><body style="margin:0">${fs.readFileSync('public/favicon.svg', 'utf8').replace('<svg ', `<svg width="${s}" height="${s}" `)}</body></html>`);
    await p.screenshot({ path: s === 32 ? 'public/favicon-32.png' : `public/icon-${s}.png` });
  }
  await b.close();
})();
