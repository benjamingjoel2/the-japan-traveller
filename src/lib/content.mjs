import { getCollection } from 'astro:content';

// Only status: reviewed AND at least one source is published. Everything else
// is dropped at build time (scripts/check-content.mjs reports what was skipped).
export const isPublished = (entry) =>
  entry.data.status === 'reviewed' && Array.isArray(entry.data.sources) && entry.data.sources.length > 0;

export async function publishedGuide() {
  return (await getCollection('guide', isPublished)).sort((a, b) => a.data.order - b.data.order);
}
export async function publishedQA() {
  return (await getCollection('qa', isPublished)).sort((a, b) => a.data.order - b.data.order);
}

export { isoDate, humanDate } from './dates.mjs';
