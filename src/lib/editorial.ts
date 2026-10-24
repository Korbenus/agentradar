import type { CollectionEntry } from 'astro:content';
import type { SupportedLang } from '../i18n/translations';
export function outbound(data: CollectionEntry<'agents'>['data']) {
  return data.affiliate?.status === 'approved'
    ? { url: data.affiliate.url, rel: 'sponsored noopener noreferrer', affiliate: true }
    : { url: data.websiteUrl, rel: 'noopener noreferrer', affiliate: false };
}
export function editorialCopy(lang: SupportedLang) {
  return lang === 'fr' ? {
    profile: 'Voir la fiche', visit: 'Site de l’éditeur', pricing: 'Tarifs chez l’éditeur',
    documentary: 'Synthèse documentaire', reviewed: 'Sources consultées le', added: 'Fiche publiée le',
    notice: 'Synthèse des informations publiées par l’éditeur. Aucun test pratique, score de performance ou audit de conformité réalisé par AgentRadar.',
    capabilities: 'Fonctionnalités annoncées', considerations: 'Points à vérifier avant de choisir', target: 'Pour quel besoin ?',
    scenario: 'Scénario d’évaluation proposé', scenarioNotice: 'Ce scénario est une proposition pour votre essai, pas un test réalisé par AgentRadar.',
    sources: 'Sources officielles', methodology: 'Méthode éditoriale', about: 'À propos et contact',
    compliance: 'Conformité : consulter les garanties de l’éditeur pour votre usage. AgentRadar ne délivre aucune certification.',
    noAffiliate: 'Lien direct vers l’éditeur, sans affiliation déclarée pour cette fiche.',
    affiliate: 'Lien affilié : AgentRadar peut percevoir une commission selon les conditions du programme.',
    related: 'Autres fiches de la même catégorie', overview: 'Présentation', compare: 'Comparer deux outils',
  } : {
    profile: 'Read profile', visit: 'Publisher website', pricing: 'Publisher pricing',
    documentary: 'Documentary overview', reviewed: 'Sources consulted on', added: 'Profile published on',
    notice: 'Summary of information published by the vendor. AgentRadar has not performed hands-on testing, performance benchmarking or a compliance audit.',
    capabilities: 'Publisher-listed capabilities', considerations: 'What to check before choosing', target: 'Who might consider it?',
    scenario: 'Suggested evaluation scenario', scenarioNotice: 'This is a proposed trial scenario, not a test carried out by AgentRadar.',
    sources: 'Official sources', methodology: 'Editorial methodology', about: 'About and contact',
    compliance: 'Compliance: check the publisher’s guarantees for your use case. AgentRadar does not issue certifications.',
    noAffiliate: 'Direct publisher link. No affiliate relationship declared for this profile.',
    affiliate: 'Affiliate link: AgentRadar may earn a commission under the program’s terms.',
    related: 'Other profiles in this category', overview: 'Overview', compare: 'Compare two tools',
  };
}
