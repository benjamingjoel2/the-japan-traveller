// The list of every public page, used by sitemap.xml and llms.txt.
import { publishedGuide, publishedQA, publishedArticles, isoDate } from './content.mjs';
import { publishedCompanies, feedMeta } from './feed.mjs';
import { NICHES, MONTHS, RAIL_CHECKED } from '../data/reference.mjs';
import { site } from '../config/site.mjs';

export async function allRoutes() {
  const guide = await publishedGuide();
  const qa = await publishedQA();
  const articles = await publishedArticles();
  const companies = publishedCompanies();
  const feedDate = feedMeta().generated_at ?? '2026-11-02';
  const base = '2026-11-02';
  return [
    { path: '/', title: site.name, lastmod: feedDate, group: 'Key pages' },
    { path: '/guide', title: 'Japan destination guide', lastmod: base, group: 'Guide' },
    ...guide.map((g) => ({ path: `/guide/${g.id}`, title: g.data.title, desc: g.data.description, lastmod: isoDate(g.data.reviewed), group: 'Guide' })),
    { path: '/rail-routes', title: 'Rail-route table: journey times and JR Pass coverage', lastmod: RAIL_CHECKED, group: 'Guide' },
    { path: '/seasons', title: 'Japan month by month', lastmod: base, group: 'Seasons' },
    ...MONTHS.map((m) => ({ path: `/seasons/${m.slug}`, title: `Japan in ${m.name}`, lastmod: base, group: 'Seasons' })),
    { path: '/rankings', title: 'Ranked lists', lastmod: feedDate, group: 'Rankings' },
    ...NICHES.map((n) => ({ path: `/rankings/${n.slug}`, title: n.title, lastmod: feedDate, group: 'Rankings' })),
    { path: '/operators', title: 'Operators in Japan', lastmod: feedDate, group: 'Operators' },
    ...companies.map((c) => ({ path: `/operators/${c.id}`, title: `${c.name} (operator fact page)`, lastmod: c.last_checked, group: 'Operators' })),
    { path: '/compare', title: 'Compare operators', lastmod: feedDate, group: 'Operators' },
    { path: '/articles', title: 'Articles', lastmod: base, group: 'Articles' },
    ...articles.map((a) => ({ path: `/articles/${a.id}`, title: a.data.title, desc: a.data.description, lastmod: isoDate(a.data.reviewed), group: 'Articles' })),
    { path: '/questions', title: 'Traveller questions', lastmod: base, group: 'Questions' },
    ...qa.map((q) => ({ path: `/questions/${q.id}`, title: q.data.question, desc: q.data.answer, lastmod: isoDate(q.data.reviewed), group: 'Questions' })),
    { path: '/about', title: 'About', lastmod: base, group: 'About and policies' },
    { path: '/how-we-rank', title: 'How we rank', lastmod: base, group: 'About and policies' },
    { path: '/disclosure', title: 'Publisher disclosure', lastmod: base, group: 'About and policies' },
    { path: '/corrections', title: 'Corrections and removal', lastmod: base, group: 'About and policies' },
    { path: '/privacy', title: 'Privacy Policy', lastmod: site.legalEffectiveDate, group: 'About and policies' },
    { path: '/terms', title: 'Terms of Use', lastmod: site.legalEffectiveDate, group: 'About and policies' },
    { path: '/cookies', title: 'Cookie Policy', lastmod: site.legalEffectiveDate, group: 'About and policies' },
  ];
}
