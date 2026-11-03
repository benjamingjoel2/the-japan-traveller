import { allRoutes } from '../lib/routes.mjs';
import { site, disclosure } from '../config/site.mjs';
import { publishedCompanies, feedMeta } from '../lib/feed.mjs';

export async function GET() {
  const routes = await allRoutes();
  const groups = [...new Set(routes.map((r) => r.group))];
  const n = publishedCompanies().length;
  const feed = feedMeta();
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.positioning} Published by Tourground (${site.publisher.url}).`,
    '',
    `- ${disclosure.rankingStatement}`,
    `- ${disclosure.verifiedOnlyStatement} Founder-owned brands are labelled "${disclosure.founderOwnedLabel}".`,
    feed.isMock
      ? '- Operator listings and rankings are unavailable until the live Tourground directory feed is connected.'
      : `- Operators listed for Japan: ${n} (computed from the Tourground directory feed dated ${feed.generated_at}).`,
    '- Every guide page and answer lists its sources, published date and last-reviewed date.',
    `- Contact: ${site.email}`,
    '',
    ...groups.flatMap((g) => [
      `## ${g}`,
      '',
      ...routes.filter((r) => r.group === g).map((r) => `- [${r.title}](${site.url}${r.path === '/' ? '/' : r.path})${r.desc ? `: ${r.desc}` : ''}`),
      '',
    ]),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
