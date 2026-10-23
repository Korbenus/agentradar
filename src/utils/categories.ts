export const categorySlugMap: Record<string, string> = {
  'Code & Dev': 'code-dev',
  'Support Client': 'support-client',
  'Prospection B2B': 'prospection-b2b',
  'Productivité & Assistant': 'productivite-assistant',
  'Comptabilité & Finance': 'comptabilite-finance',
  'Conformité & Juridique': 'conformite-juridique',
  'Marketing & Contenu': 'marketing-contenu'
};

export function getCategorySlug(category: string): string {
  if (categorySlugMap[category]) {
    return categorySlugMap[category];
  }
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/\s+/g, '-');
}
