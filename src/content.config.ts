import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const agents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/agents' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.enum([
      'Code & Dev',
      'Support Client',
      'Prospection B2B',
      'Comptabilité & Finance',
      'Productivité & Assistant',
      'Marketing & Contenu',
      'Conformité & Juridique'
    ]),
    rating: z.number().min(1).max(5),
    pricingModel: z.enum(['Freemium', 'Payant', 'Gratuit / Open-Source', 'Sur Devis']),
    priceStartingAt: z.string(),
    websiteUrl: z.string().url(),
    affiliateUrl: z.string().url().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    aiActCompliant: z.boolean().default(true),
    dateAdded: z.string(),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    keyFeatures: z.array(z.string()),
    targetAudience: z.string(),
  }),
});

export const collections = { agents };
