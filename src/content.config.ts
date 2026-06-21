import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/pages/**/[^_]*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    /** 不填则从目录名推断（news/001.md → category="news"） */
    category: z.string().optional(),
    author: z.string().optional().default('本站'),
    tags: z.array(z.string()).optional().default([]),
    summary: z.string().optional().default(''),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { pages: pagesCollection };
