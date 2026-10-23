export function getAgentDomain(websiteUrl: string): string {
  try {
    const url = new URL(websiteUrl);
    return url.hostname.replace(/^www\./, '');
  } catch {
    return 'agentradar.pages.dev';
  }
}

export function getAgentLogoUrl(websiteUrl: string): string {
  const domain = getAgentDomain(websiteUrl);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export function getAgentMonogram(name: string): string {
  const cleaned = name.replace(/[^a-zA-Z0-9\s]/g, '').trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase() || 'AI';
}

export function getTechnicalScores(rating: number, aiActCompliant?: boolean) {
  const base = Math.min(9.9, Math.max(8.2, rating * 2 - 0.1));
  const autonomy = Number(base.toFixed(1));
  const integration = Number(Math.min(9.8, base - 0.2).toFixed(1));
  const roi = Number(Math.min(9.9, base + 0.1).toFixed(1));
  const security = aiActCompliant ? 9.8 : 8.4;

  return {
    autonomy,
    integration,
    roi,
    security,
  };
}
