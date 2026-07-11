import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  loader: async () => {
    // 使用 glob 加载所有 story 的 .md 文件
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

export const collections = {
  stories,
};