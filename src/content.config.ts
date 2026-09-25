import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/**
 * Content collections, validated at build time.
 */

const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/services' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Icon name from src/components/common/Icon.astro */
      icon: z.string(),
      excerpt: z.string().max(220),
      /** Optional photo; services without one render as a text-only card. */
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      order: z.number().int(),
    }),
});

const reviews = defineCollection({
  loader: file('./src/content/reviews.json'),
  // Real testimonials only. No star ratings or dates are stored because
  // the originals didn't have them — don't invent them.
  schema: z.object({
    author: z.string(),
    city: z.string(),
    text: z.string(),
  }),
});

export const collections = { services, reviews };
