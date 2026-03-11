import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const communications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/communications' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).optional(),
    pdfUrl: z.string().optional(),
    coverImage: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

const documents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/documents' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string().optional(),
    pdfUrl: z.string(),
    date: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { communications, documents };
