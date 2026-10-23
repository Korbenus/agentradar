import { useTranslations, type SupportedLang } from '../i18n/translations';

export function getLocalizedCategoryName(category: string, lang: SupportedLang): string {
  const t = useTranslations(lang);
  const map: Record<string, string> = {
    'Code & Dev': 'cat.codeDev',
    'Support Client': 'cat.supportClient',
    'Prospection B2B': 'cat.prospectionB2B',
    'Productivité & Assistant': 'cat.productiviteAssistant',
    'Comptabilité & Finance': 'cat.comptabiliteFinance',
    'Conformité & Juridique': 'cat.conformiteJuridique',
    'Marketing & Contenu': 'cat.marketingContenu'
  };

  const key = map[category];
  if (key) return t(key);
  return category;
}
