import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { agentSchema } from './lib/agentSchema';
const agents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agents' }),
  schema: agentSchema,
});
export const collections = { agents };
