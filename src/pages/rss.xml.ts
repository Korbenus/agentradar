import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const agents = await getCollection('agents');
  
  const sorted = agents.sort((a, b) => 
    new Date(b.data.dateAdded).getTime() - new Date(a.data.dateAdded).getTime()
  );

  return rss({
    title: 'AgentRadar | Observatoire des Agents IA Autonomes',
    description: 'Synthèses documentaires d’outils IA pour entreprises, avec sources officielles.',
    site: context.site || 'https://agentradar.pages.dev',
    items: sorted.map((agent) => ({
      title: `${agent.data.name} (${agent.data.category}) - Fiche documentaire`,
      pubDate: new Date(agent.data.dateAdded),
      description: agent.data.tagline,
      link: `/agents/${agent.id.replace(/\.md$/, '')}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
