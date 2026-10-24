import type { CollectionEntry } from 'astro:content';
import type { SupportedLang } from './translations';
const french: Record<string, {tagline: string; keyFeatures: string[]; considerations: string[]; targetAudience: string; evaluationScenario: string}> = {
  "make-ai-agents": {
    "tagline": "Automatisation visuelle reliant applications et agents IA.",
    "keyFeatures": [
      "Éditeur visuel de workflows",
      "Agents IA dans les scénarios automatisés",
      "Connexion aux applications et aux outils"
    ],
    "considerations": [
      "Estimer les crédits consommés par chaque étape, y compris les nouvelles tentatives.",
      "Définir les actions à valider avant de connecter les comptes de production."
    ],
    "targetAudience": "Équipes reliant leurs applications métier avec des workflows visuels.",
    "evaluationScenario": "Pour une demande client entrante, cartographier les étapes prévisibles et réserver les décisions de l’agent aux cas ambigus. Commencer avec un accès en lecture, enregistrer l’action proposée puis vérifier le résultat avant d’autoriser les modifications."
  },
  "n8n-ai": {
    "tagline": "Automatisation combinant étapes définies et décisions d’agents IA.",
    "keyFeatures": [
      "Journaux d’exécution des workflows",
      "Options cloud et auto-hébergées",
      "Agents IA et intégrations applicatives"
    ],
    "considerations": [
      "Comparer les quotas d’exécution au volume prévu.",
      "Pour l’auto-hébergement, prévoir les mises à jour, les sauvegardes et un responsable technique."
    ],
    "targetAudience": "Équipes techniques souhaitant maîtriser les workflows et leur hébergement.",
    "evaluationScenario": "Pour comparer n8n et Make, dessiner le même workflow et compter séparément les exécutions, les branches et les appels aux modèles externes. Un essai devrait inclure un échec d’API et un événement en double : la reprise après erreur apporte plus d’informations qu’une seule démonstration réussie."
  },
  "cursor-agent": {
    "tagline": "Environnement de programmation assisté par IA pour déléguer des tâches de développement.",
    "keyFeatures": [
      "Agent de programmation",
      "Utilisation sur ordinateur et en ligne de commande",
      "Relecture des modifications de code"
    ],
    "considerations": [
      "Relire les modifications générées et exécuter les vérifications du projet.",
      "Vérifier les quotas actuels et les conditions de traitement du code avant adoption."
    ],
    "targetAudience": "Développeurs évaluant l’assistance IA sur un projet existant.",
    "evaluationScenario": "Utiliser un petit défaut reproductible comme tâche d’essai. Noter le cas d’échec initial, inspecter les modifications proposées puis relancer les vérifications. Mesurer aussi le temps de relecture : une proposition rapide ne suffit pas à démontrer un gain de productivité."
  },
  "elevenlabs-agents": {
    "tagline": "Agents conversationnels pour les échanges vocaux et textuels.",
    "keyFeatures": [
      "Agents conversationnels vocaux",
      "Configuration et suivi des agents",
      "Plusieurs canaux de communication"
    ],
    "considerations": [
      "Tester la reconnaissance et le transfert humain avec vos langues et votre vocabulaire.",
      "Vérifier la tarification propre aux agents plutôt que celle de la génération vocale."
    ],
    "targetAudience": "Équipes évaluant des interfaces conversationnelles pour leurs échanges clients.",
    "evaluationScenario": "Préparer un court script avec une demande normale, une interruption et une question hors périmètre. Vérifier l’accès à une personne et la fidélité de la transcription. Une latence annoncée par l’éditeur ne préjuge pas du résultat sur votre installation téléphonique."
  },
  "invideo-ai": {
    "tagline": "Création et montage vidéo assistés par IA à partir de consignes et de séquences.",
    "keyFeatures": [
      "Montage vidéo assisté par agent",
      "Édition sur une timeline",
      "Export vidéo"
    ],
    "considerations": [
      "Vérifier les crédits, les conditions d’export et les modèles inclus dans l’offre.",
      "Vérifier les droits des séquences, musiques et contenus générés avant publication."
    ],
    "targetAudience": "Équipes de contenu préparant des vidéos avec un processus de montage.",
    "evaluationScenario": "Essayer l’outil avec un brief précis et des séquences dont vous détenez les droits. Vérifier les sous-titres, le format et la qualité d’export pour la plateforme visée. Inclure les corrections dans le coût estimé, pas seulement la première génération."
  },
  "klap-ai": {
    "tagline": "Outil de réutilisation vidéo transformant des enregistrements longs en clips courts.",
    "keyFeatures": [
      "Extraction de clips courts",
      "Recadrage automatique",
      "Génération de sous-titres"
    ],
    "considerations": [
      "Relire les passages retenus pour préserver le contexte et corriger la transcription.",
      "Vérifier les limites d’import, de durée et d’export avant de souscrire."
    ],
    "targetAudience": "Créateurs et équipes marketing réutilisant des vidéos longues existantes.",
    "evaluationScenario": "Choisir un enregistrement au sujet clair puis comparer les clips retenus à la discussion d’origine. Chaque extrait doit rester compréhensible seul. Un score de viralité annoncé par l’outil constitue une fonctionnalité de l’éditeur, pas une prévision de croissance réelle de l’audience."
  },
  "apollo-ai": {
    "tagline": "Plateforme commerciale réunissant données de prospects, enrichissement et outils de prospection.",
    "keyFeatures": [
      "Données de prospects et enrichissement",
      "Outils d’engagement commercial",
      "Intégrations aux applications métier"
    ],
    "considerations": [
      "Évaluer la couverture des données sur un échantillon de votre marché cible.",
      "Examiner les limites d’export, les permissions et les règles de prospection avant utilisation."
    ],
    "targetAudience": "Équipes commerciales et opérationnelles évaluant un processus de prospection.",
    "evaluationScenario": "Utiliser un petit échantillon d’entreprises correspondant à votre cible. Vérifier la présence et l’actualité des fonctions et coordonnées utiles avant de concevoir une campagne. La taille globale d’une base ne démontre pas la qualité de votre propre liste."
  },
  "fin-ai-intercom": {
    "tagline": "Agent IA destiné aux échanges clients, connecté aux workflows de support et aux données métier.",
    "keyFeatures": [
      "Conversations de service client",
      "Connexion aux outils de support",
      "Outils de préparation et d’analyse"
    ],
    "considerations": [
      "Clarifier la définition des résultats facturables dans votre contrat.",
      "Tester l’escalade humaine et les réponses avec une base de connaissances à jour."
    ],
    "targetAudience": "Équipes de support évaluant un agent IA avec leur outil de gestion des demandes.",
    "evaluationScenario": "Constituer un jeu d’évaluation avec des demandes courantes, des questions ambiguës et des cas exigeant une intervention humaine. Relever les réponses non étayées et les transferts manqués. Comparer la définition du résultat facturé à celle d’une demande réellement résolue pour votre équipe."
  }
};
export function getLocalizedAgent(agent: CollectionEntry<'agents'>, lang: SupportedLang) {
  return { ...agent.data, ...(lang === 'fr' ? french[agent.id.replace(/\.md$/, '')] : {}), slug: agent.id.replace(/\.md$/, '') };
}
