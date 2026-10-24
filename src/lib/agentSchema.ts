import { z } from 'astro/zod';
const httpsUrl = z.string().url().refine(value => new URL(value).protocol === 'https:', 'Use an HTTPS URL');
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value && value <= new Date().toISOString().slice(0, 10);
}, 'Use a valid, non-future date');
export const agentSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  category: z.enum(['Code & Dev', 'Support Client', 'Prospection B2B', 'Comptabilité & Finance', 'Productivité & Assistant', 'Marketing & Contenu', 'Conformité & Juridique']),
  websiteUrl: httpsUrl,
  pricingUrl: httpsUrl,
  dateAdded: date,
  lastReviewed: date,
  reviewType: z.literal('documentary'),
  sources: z.array(z.object({ title: z.string().min(1), url: httpsUrl }).strict()).min(1),
  keyFeatures: z.array(z.string().min(1)).min(1),
  considerations: z.array(z.string().min(1)).min(1),
  targetAudience: z.string().min(1),
  affiliate: z.object({
    status: z.literal('approved'),
    url: httpsUrl,
    programUrl: httpsUrl,
    approvedAt: date,
  }).strict().optional(),
}).strict();
