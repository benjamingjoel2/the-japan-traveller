import { allRoutes } from '../lib/routes.mjs';
import { site } from '../config/site.mjs';

export async function GET() {
  const routes = await allRoutes();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${site.url}${r.path === '/' ? '/' : r.path}</loc><lastmod>${r.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
