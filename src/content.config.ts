import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const source = z.object({
  url: z.string().url(),
  label: z.string().min(3),
  accessed: z.coerce.date().optional(),
});

const base = {
  title: z.string(),
  description: z.string().max(200),
  sources: z.array(source).default([]),
  published: z.coerce.date(),
  reviewed: z.coerce.date(),
  status: z.enum(['draft', 'reviewed']),
  order: z.number().default(100),
  // key in src/data/photos.mjs (licensed photos only)
  image: z.string().optional(),
};

const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    ...base,
    nav: z.string().optional(),
    embed: z.enum(['rail-table', 'season-wheel']).optional(),
  }),
});

const qa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/qa' }),
  schema: z.object({
    ...base,
    question: z.string(),
    answer: z.string().max(400), // the short answer, shown first
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { guide, qa };
