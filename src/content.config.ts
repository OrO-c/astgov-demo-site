import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    /** 不填则从子目录名推断（news/001.md → category="news"） */
    category: z.string().optional(),
    author: z.string().optional().default('本站'),
    tags: z.array(z.string()).optional().default([]),
    summary: z.string().optional().default(''),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
  }),
});

const bannerCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/banner' }),
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    link: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    /** 排序序号，数字越小越靠前 */
    order: z.number().optional().default(0),
  }),
});

const headlineCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/headline' }),
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    title: z.string(),
    date: z.string(),
    link: z.string().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    /** 排序序号，数字越小越靠前 */
    order: z.number().optional().default(0),
  }),
});

export const collections = {
  posts: postsCollection,
  banner: bannerCollection,
  headline: headlineCollection,
};
