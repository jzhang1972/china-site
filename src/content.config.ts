import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ===== 原有的 stories 集合（保持不变）=====
const stories = defineCollection({
  loader: async () => {
    const globResult = await import.meta.glob('./content/stories/*.md');
    const stories = [];
    for (const path in globResult) {
      const mod = await globResult[path]();
      const { data, body } = mod;
      stories.push({
        id: path.split('/').pop().replace(/\.md$/, ''),
        ...data,
        body,
      });
    }
    return stories;
  },
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

// ===== 使用官方 glob() loader =====
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    category: z.enum(["practical", "stories", "culture"]),
    image: z.string().optional(),
   featured: z.boolean().optional(),


  }),
});

export const collections = {
  stories,
  blog,
};