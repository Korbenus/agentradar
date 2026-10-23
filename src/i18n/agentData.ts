import type { SupportedLang } from './translations';

export interface LocalizedAgentFields {
  tagline: string;
  badge?: string;
  pricingModel: string;
  pros: string[];
  cons: string[];
  keyFeatures: string[];
  targetAudience: string;
  overviewSummary: string;
  faqs?: { q: string; a: string }[];
}

export const agentTranslations: Record<string, Partial<Record<SupportedLang, LocalizedAgentFields>>> = {
  'devin': {
    fr: {
      tagline: "Le premier ingénieur logiciel IA autonome capable de coder, déboguer et déployer des applications entières de bout en bout.",
      badge: "Pionnier R&D",
      pricingModel: "Payant",
      pros: [
        "Autonomie complète sur un environnement bac à sable (terminal, navigateur, éditeur)",
        "Résout des issues GitHub réelles et crée des pull requests propres",
        "Capable d'apprendre et d'utiliser des bibliothèques inédites en lisant la doc"
      ],
      cons: [
        "Tarification orientée grands comptes et équipes tech à fort budget",
        "Nécessite parfois une relecture humaine sur du code critique de sécurité"
      ],
      keyFeatures: [
        "Machine virtuelle dédiée sécurisée avec accès shell",
        "Résolution autonome de bugs et tests unitaires",
        "Intégration directe Slack, GitHub et GitLab",
        "Rapports en direct pas-à-pas de son raisonnement"
      ],
      targetAudience: "Équipes d'ingénierie, directeurs techniques (CTO) et scale-ups cherchant à démultiplier la vélocité de sprint.",
      overviewSummary: "Devin inaugure une nouvelle ère : celle où l'IA ne se contente plus de compléter une ligne de code, mais prend en charge un ticket Jira complet. Équipé de sa propre machine virtuelle avec terminal et navigateur, il formule un plan d'action, compile le projet, résout les erreurs et soumet une Pull Request prête à merger.",
      faqs: [
        {
          q: "Devin AI propose-t-il un essai gratuit ?",
          a: "Devin fonctionne sur un modèle payant réservé aux professionnels avec abonnement débutant à 500 $ / mois par ingénieur."
        },
        {
          q: "Devin est-il conforme au RGPD et à l'EU AI Act ?",
          a: "Oui, Devin opère dans des bacs à sable étanches et garantit le cloisonnement strict des codes sources sans réentraînement public."
        },
        {
          q: "Quelle est la meilleure alternative à Devin AI ?",
          a: "Cursor Agent et Replit Agent sont d'excellentes alternatives pour le développement assisté à un tarif plus accessible."
        }
      ]
    }
  },
  'cursor-agent': {
    fr: {
      tagline: "L'environnement de code IA nouvelle génération capable de refactoriser des projets multi-fichiers et de résoudre des bugs de manière autonome.",
      badge: "Favori Développeurs",
      pricingModel: "Freemium",
      pros: [
        "Comprend le contexte global de dépôts comptant des milliers de fichiers",
        "Intégration directe au terminal et au compilateur pour un débogage instantané",
        "Transition sans friction depuis VS Code avec support total des extensions"
      ],
      cons: [
        "Consommation importante de mémoire sur les très grands monorepos",
        "Quotas de requêtes rapides nécessitant le forfait Pro pour les power users"
      ],
      keyFeatures: [
        "Indexation vectorielle multi-fichiers de la base de code",
        "Mode Composer pour concevoir des fonctionnalités de bout en bout",
        "Génération directe de diffs git et préparation des branches",
        "Mode confidentialité interdisant l'entraînement sur votre code"
      ],
      targetAudience: "Développeurs logiciels, leads tech et équipes de développement voulant multiplier par deux leur vitesse de livraison.",
      overviewSummary: "Cursor a redéfini le développement logiciel en passant de l'autocomplétion passive à un agent de pair programming actif. Son mode Composer inspecte simultanément vos modèles, contrôleurs et suites de tests pour proposer des diffs atomiques multi-fichiers.",
      faqs: [
        {
          q: "Cursor Agent est-il gratuit ?",
          a: "Oui ! Cursor propose une formule gratuite généreuse avec 2 000 complétions et 50 requêtes rapides par mois, puis un forfait Pro à 20 $ / mois."
        },
        {
          q: "Cursor protège-t-il la confidentialité de mon code ?",
          a: "Absolument. Un mode Privacy garantit qu'aucune ligne de votre code source n'est stockée ni utilisée pour entraîner des modèles d'IA."
        },
        {
          q: "Quelle est la meilleure alternative à Cursor ?",
          a: "Devin pour l'automatisation totale sans IDE, ou Replit Agent pour la création d'applications cloud directement dans le navigateur."
        }
      ]
    }
  },
  'replit-agent': {
    fr: {
      tagline: "L'agent autonome de développement cloud qui conçoit, teste et déploie des applications full-stack complètes à partir d'un simple prompt.",
      badge: "Création Rapide",
      pricingModel: "Payant",
      pros: [
        "Déploie une application full-stack fonctionnelle en moins de 10 minutes",
        "Configure automatiquement la base de données PostgreSQL et l'authentification",
        "Résout les erreurs de compilation et de runtime en direct"
      ],
      cons: [
        "Moins adapté aux architectures distribuées très spécifiques",
        "Nécessite l'abonnement Replit Core pour un accès illimité"
      ],
      keyFeatures: [
        "Génération full-stack (React, Node, Python, Postgres)",
        "Déploiement cloud en 1 clic avec URL publique instantanée",
        "Boucle d'auto-correction autonome en cas d'erreur de serveur",
        "Éditeur collaboratif en temps réel pour collaborer avec l'IA"
      ],
      targetAudience: "Créateurs de startups, chefs de produit et développeurs souhaitant prototyper et lancer des MVP sans passer des jours sur l'infra.",
      overviewSummary: "Replit Agent élimine la friction du déploiement : vous lui décrivez une idée d'application SaaS et il configure l'environnement, écrit le backend, le frontend, les schémas de base de données, installe les dépendances et livre une URL de production sécurisée.",
      faqs: [
        {
          q: "Faut-il savoir coder pour utiliser Replit Agent ?",
          a: "Non. Une simple description en langage naturel permet à Replit Agent de construire l'architecture complète, même si des bases en dev aident à personnaliser le code."
        },
        {
          q: "Quelles technologies Replit Agent utilise-t-il ?",
          a: "Il maîtrise les stacks modernes : TypeScript, React, Next.js, Python, Flask, FastAPI et PostgreSQL."
        },
        {
          q: "Quelle est l'alternative recommandée ?",
          a: "Cursor Agent pour les développeurs travaillant en local ou Devin pour des tâches d'ingénierie avancées."
        }
      ]
    }
  },
  'make-ai-agents': {
    fr: {
      tagline: "Le canevas visuel d'automatisation n°1 permettant de concevoir des agents IA multi-applications avec logique conditionnelle et webhooks.",
      badge: "Leader No-Code",
      pricingModel: "Freemium",
      pros: [
        "Interface visuelle intuitive pour connecter plus de 1 500 applications cloud",
        "Gestion avancée des erreurs, des flux conditionnels et des tableaux de données",
        "Excellente tarification par opération avec forfait gratuit à vie"
      ],
      cons: [
        "Courbe d'apprentissage sur les fonctions de mapping de données avancées",
        "Temps d'exécution plafonné sur les forfaits d'entrée de gamme"
      ],
      keyFeatures: [
        "Canevas visuel glisser-déposer illimité",
        "Modules natifs OpenAI, Anthropic et Google Gemini",
        "Routeurs conditionnels et itérateurs de tableaux",
        "Webhooks entrants et sortants instantanés"
      ],
      targetAudience: "Responsables des opérations (RevOps), agences d'automatisation et solopreneurs voulant automatiser des processus complexes sans coder.",
      overviewSummary: "Make.com transforme n'importe quel processus d'entreprise en agent autonome. Grâce à sa bibliothèque de 1 500+ connecteurs et ses modules IA intégrés, vous pouvez orchestrer l'enrichissement de leads, la génération de devis et la mise à jour de bases de données en continu.",
      faqs: [
        {
          q: "Make.com propose-t-il une formule gratuite ?",
          a: "Oui, Make offre 1 000 opérations par mois gratuites à vie, avec des forfaits payants débutant à 9 $ / mois."
        },
        {
          q: "Quelle est la différence entre Make.com et n8n ?",
          a: "Make est une solution 100% cloud hébergée ultra-accessible, tandis que n8n est open-source et peut être auto-hébergé sur vos propres serveurs."
        },
        {
          q: "Make est-il conforme au RGPD ?",
          a: "Oui, Make héberge des centres de données dans l'Union Européenne et offre des garanties strictes de conformité RGPD."
        }
      ]
    }
  },
  'n8n-ai': {
    fr: {
      tagline: "La plateforme d'orchestration open-source n°1 pour construire des agents IA sur-mesure, souverains et auto-hébergés.",
      badge: "Souveraineté Open-Source",
      pricingModel: "Freemium",
      pros: [
        "Auto-hébergement gratuit sur vos propres serveurs avec contrôle total des données",
        "Connecteurs LangChain natifs pour orchestrer modèles, mémoires et outils",
        "Code source auditable conforme aux exigences strictes de souveraineté européenne"
      ],
      cons: [
        "Nécessite des compétences d'administration serveur pour l'auto-hébergement",
        "Moins de connecteurs SaaS grand public préconfigurés que Make"
      ],
      keyFeatures: [
        "Architecture de nœuds LangChain (agents, chaînes, mémoire vectorielle)",
        "Support complet JavaScript et Python dans chaque nœud",
        "Déploiement Docker en 1 commande",
        "Absence totale de partage de données avec des tiers"
      ],
      targetAudience: "DSI, ingénieurs en données, banques, professionnels de santé et entreprises soumises à de strictes obligations de confidentialité.",
      overviewSummary: "n8n est la référence incontestée des entreprises qui refusent de faire transiter leurs secrets d'affaires sur des clouds propriétaires. Il permet d'assembler des agents d'IA autonomes connectés à vos bases SQL locales, vos ERP internes et vos modèles d'IA open-source privés.",
      faqs: [
        {
          q: "n8n est-il réellement gratuit ?",
          a: "Oui, la version Community est 100% open-source et gratuite sans limitation du nombre d'exécutions lorsque vous l'auto-hébergez."
        },
        {
          q: "n8n est-il prêt pour l'EU AI Act ?",
          a: "Parfaitement. Comme vous maîtrisez l'infrastructure, vous contrôlez la traçabilité intégrale des logs exigée par l'article 50 de l'AI Act."
        },
        {
          q: "Quelle est l'alternative cloud à n8n ?",
          a: "Make.com si vous recherchez une solution clé en main sans gestion de serveur."
        }
      ]
    }
  },
  'sierra-ai': {
    fr: {
      tagline: "La plateforme d'agents d'IA conversationnels d'entreprise capables de résoudre jusqu'à 80% des demandes de support client complexes.",
      badge: "Excellence Entreprise",
      pricingModel: "Sur devis",
      pros: [
        "Résout les problèmes avec exécution d'actions réelles dans vos systèmes (remboursements, modifications)",
        "Garantie zéro hallucination grâce à des garde-fous stricts et auditables",
        "Adopté par de grands leaders mondiaux (Sonos, WeightWatchers, SiriusXM)"
      ],
      cons: [
        "Tarification entreprise sur devis réservée aux gros volumes de tickets",
        "Cycle de déploiement nécessitant une intégration technique initiale"
      ],
      keyFeatures: [
        "Moteur de raisonnement supervisé anti-hallucination",
        "Exécution d'actions transactionnelles sécurisées dans les ERP",
        "Gestion transparente du passage de relais vers les conseillers humains",
        "Analytique avancée de satisfaction client (CSAT)"
      ],
      targetAudience: "Grands comptes du e-commerce, banques et entreprises de services gérant des centaines de milliers d'interactions client mensuelles.",
      overviewSummary: "Co-fondée par Bret Taylor (ex-président d'OpenAI et ex-CTO de Facebook), Sierra réinvente la relation client. Ses agents ne se contentent pas de répéter des articles d'aide : ils s'authentifient sur vos API, vérifient les statuts de commande et résolvent le problème en direct.",
      faqs: [
        {
          q: "Comment Sierra évite-t-il les réponses erronées (hallucinations) ?",
          a: "Sierra utilise un cadre de gouvernance breveté qui contraint l'agent à n'agir que dans les limites vérifiées de votre documentation et de vos règles métier."
        },
        {
          q: "Sierra convient-il aux petites entreprises ?",
          a: "Sierra cible prioritairement les ETI et grands comptes. Pour les PME, Fin AI (Intercom) ou Decagon sont plus accessibles."
        },
        {
          q: "Quelles langues sont supportées ?",
          a: "Sierra prend en charge nativement plus de 50 langues avec détection automatique de la langue du client."
        }
      ]
    }
  },
  'fin-ai-intercom': {
    fr: {
      tagline: "L'agent de support client autonome pour entreprises résolvant jusqu'à 82% des demandes avec une précision irréprochable.",
      badge: "Leader Support",
      pricingModel: "À l'usage",
      pros: [
        "Modèle tarifaire à la performance : vous ne payez que pour les résolutions réussies (0,99 $)",
        "Intégration transparente dans la suite Intercom et vos centres d'aide existants",
        "Capacité à citer précisément les sources utilisées pour chaque réponse"
      ],
      cons: [
        "Nécessite un abonnement de base à la plateforme Intercom",
        "Exige une documentation interne propre pour maximiser le taux de résolution"
      ],
      keyFeatures: [
        "Facturation uniquement à la résolution confirmée",
        "Connexion instantanée à Notion, Zendesk, Salesforce et centres d'aide",
        "Filtrage conversationnel intelligent et détection d'urgence",
        "Rapports détaillés sur les manques de documentation"
      ],
      targetAudience: "Équipes de support client, responsables du succès client (CSM) et SaaS en forte croissance souhaitant un support 24/7 sans embauches massives.",
      overviewSummary: "Fin AI d'Intercom est l'agent de support le plus pragmatique du marché. Il lit instantanément toute votre base de connaissances et traite les questions des utilisateurs avec une voix naturelle. Si le client n'est pas satisfait, la conversation est transférée à un humain sans que l'échange ne vous soit facturé.",
      faqs: [
        {
          q: "Combien coûte Fin AI ?",
          a: "Fin AI coûte 0,99 $ par résolution réussie. Vous ne payez rien si l'agent ne résout pas la demande ou si l'utilisateur demande un agent humain."
        },
        {
          q: "Fin AI invente-t-il des réponses ?",
          a: "Non, Fin applique une règle stricte : s'il ne trouve pas la réponse dans votre base de connaissances, il passe la main au support humain plutôt que de spéculer."
        },
        {
          q: "Quelle est la meilleure alternative ?",
          a: "Sierra AI pour les très grands comptes, ou ElevenLabs pour le support téléphonique vocal."
        }
      ]
    }
  },
  'elevenlabs-agents': {
    fr: {
      tagline: "Les agents vocaux conversationnels à ultra-faible latence offrant des interactions téléphoniques impossibles à distinguer d'une voix humaine.",
      badge: "Pionnier Vocal",
      pricingModel: "Freemium",
      pros: [
        "Latence quasi-instantanée (< 400 ms) pour une fluidité de dialogue naturelle",
        "Rendu émotionnel et intonations vocales ultra-réalistes",
        "Support de plus de 30 langues avec accents régionaux authentiques"
      ],
      cons: [
        "Facturation à la minute pouvant grimper sur les centres d'appels massifs",
        "Nécessite une configuration fine des garde-fous pour les appels complexes"
      ],
      keyFeatures: [
        "Génération vocale IA temps réel la plus avancée au monde",
        "Intégration téléphonique SIP et WebRTC directe",
        "Interruption naturelle : l'utilisateur peut couper la parole à l'agent",
        "Connexion d'API pour consulter des dossiers clients en direct"
      ],
      targetAudience: "Centres de contact, cliniques médicales, services de conciergerie et entreprises recevant un volume élevé d'appels entrants et sortants.",
      overviewSummary: "ElevenLabs a franchi la frontière du réalisme vocal. Ses agents conversationnels gèrent des appels téléphoniques réels, répondent instantanément sans pause artificielle, comprennent les hésitations de l'interlocuteur et accomplissent des tâches concrètes comme la prise de rendez-vous.",
      faqs: [
        {
          q: "Peut-on tester ElevenLabs gratuitement ?",
          a: "Oui, ElevenLabs propose une offre gratuite comprenant des crédits d'utilisation mensuels pour configurer et tester votre premier agent vocal."
        },
        {
          q: "Est-ce compatible avec les standards téléphoniques d'entreprise ?",
          a: "Oui, via les protocoles standards SIP et WebRTC, les agents ElevenLabs se connectent à Twilio, RingCentral ou vos PABX existants."
        },
        {
          q: "Quelle est l'alternative recommandée ?",
          a: "Sierra AI pour les interactions omnicanales écrites et vocales combinées."
        }
      ]
    }
  },
  'apollo-ai': {
    fr: {
      tagline: "La plateforme complète d'intelligence commerciale et de prospection B2B propulsée par une base de données de plus de 275 millions de contacts vérifiés.",
      badge: "Standard Prospection",
      pricingModel: "Freemium",
      pros: [
        "Base de données colossale de 275M+ profils professionnels avec emails et téléphones directs",
        "Séquences de prospection automatisées multicanales (email, LinkedIn, tâches d'appel)",
        "Génération de messages personnalisés en fonction des actualités de l'entreprise ciblée"
      ],
      cons: [
        "Taux de rebond variable sur certains marchés de niche hors États-Unis / Europe",
        "Interface très riche nécessitant un temps de prise en main"
      ],
      keyFeatures: [
        "Moteur de recherche de prospects avec 65+ filtres avancés",
        "Rédaction IA personnalisée de séquences d'emails",
        "Scoring prédictif des comptes les plus enclins à acheter",
        "Synchronisation bidirectionnelle native avec HubSpot et Salesforce"
      ],
      targetAudience: "Commerciaux B2B, fondateurs de startups et équipes marketing cherchant à remplir leur calendrier de rendez-vous qualifiés.",
      overviewSummary: "Apollo.io combine les données de contact mondiales les plus précises et un moteur d'exécution autonome. L'agent identifie vos prospects idéaux, rédige des messages sur-mesure et orchestre les relances jusqu'à la réservation du rendez-vous.",
      faqs: [
        {
          q: "Apollo.io est-il utilisable gratuitement ?",
          a: "Oui ! Apollo propose un plan gratuit avec crédits de recherche d'emails et séquences illimitées, complété par des plans payants à partir de 49 $ / mois."
        },
        {
          q: "Les emails fournis sont-ils vérifiés ?",
          a: "Oui, Apollo effectue une vérification SMTP en temps réel avec un indicateur de délivrabilité pour minimiser les rebonds."
        },
        {
          q: "Quelle est l'alternative à Apollo ?",
          a: "Artisan AI (Ava) pour une délégation 100% autonome sans manipulation de listes, ou 11x.ai."
        }
      ]
    }
  },
  'artisan-ai-ava': {
    fr: {
      tagline: "L'agent autonome de prospection (AI BDR) qui recherche vos prospects, rédige des emails ultra-personnalisés et gère le préchauffage de vos domaines.",
      badge: "AI BDR Autonome",
      pricingModel: "Payant",
      pros: [
        "Véritable commercial virtuel clé en main : recherche, rédaction et envoi sans intervention",
        "Recherche approfondie sur chaque prospect (posts LinkedIn, actualités de l'entreprise)",
        "Infrastructure de délivrabilité complète avec boîtes secondaires et warm-up inclus"
      ],
      cons: [
        "Investissement mensuel supérieur aux outils d'envoi d'emails traditionnels",
        "Nécessite 1 à 2 semaines d'échauffement de domaine pour des performances optimales"
      ],
      keyFeatures: [
        "Agent Ava : recherche autonome de leads qualifiés B2B",
        "Hyper-personnalisation contextuelle basée sur l'activité du prospect",
        "Réchauffement automatique des boîtes d'envoi pour éviter le spam",
        "Tableau de bord de suivi du pipeline et des réponses positives"
      ],
      targetAudience: "Fondateurs de startups, agences et directeurs commerciaux souhaitant générer des opportunités sans recruter une équipe de SDR juniors.",
      overviewSummary: "Artisan a créé Ava, le premier commercial IA de développement des ventes (BDR). Ava ne se contente pas d'envoyer des templates : elle étudie le profil de vos cibles, trouve des accroches uniques, gère les objections par email et vous livre des rendez-vous qualifiés directement dans votre calendrier.",
      faqs: [
        {
          q: "Comment Ava prévient-elle le classement en spam ?",
          a: "Artisan intègre nativement la création de domaines dédiés et un protocole d'échauffement progressif (warm-up) certifié."
        },
        {
          q: "Faut-il valider les emails manuellement ?",
          a: "Vous pouvez choisir le mode semi-autonome au début pour valider les envois, puis basculer en mode 100% autonome une fois en confiance."
        },
        {
          q: "Quelle est l'alternative à Artisan Ava ?",
          a: "Apollo.io pour une approche manuelle plus abordable, ou 11x.ai (Alice)."
        }
      ]
    }
  },
  'agentforce': {
    fr: {
      tagline: "L'écosystème d'agents autonomes natifs de Salesforce pour la vente, le marketing et le service client d'entreprise.",
      badge: "Standard Entreprise",
      pricingModel: "À l'usage",
      pros: [
        "Connexion native profonde à tout l'écosystème CRM de Salesforce",
        "Moteur de confiance Einstein 1 garantissant l'étanchéité absolue des données",
        "Capacité à orchestrer des flux métiers complexes (création d'opportunités, devis)"
      ],
      cons: [
        "Réservé aux organisations utilisant déjà l'environnement Salesforce",
        "Coût de 2 $ par conversation pouvant devenir conséquent à grande échelle"
      ],
      keyFeatures: [
        "Atlas Reasoning Engine : moteur de planification et d'exécution autonome",
        "Accès sécurisé à Data Cloud et aux données unifiées du CRM",
        "Bibliothèque d'actions préconfigurées pour les ventes et le support",
        "Gouvernance stricte et piste d'audit pour la conformité européenne"
      ],
      targetAudience: "Grandes entreprises et ETI déjà équipées de Salesforce souhaitant automatiser leur relation client sans recourir à des outils tiers dispersés.",
      overviewSummary: "Dévoilé par Marc Benioff en 2024 et déployé massivement en 2026, Agentforce marque le virage de Salesforce vers l'autonomie. Ses agents agissent 24/7 directement au cœur de votre CRM pour qualifier des prospects, mettre à jour des opportunités et résoudre des dossiers d'assistance.",
      faqs: [
        {
          q: "Quel est le modèle tarifaire d'Agentforce ?",
          a: "Salesforce applique une tarification à la consommation d'environ 2 $ par conversation résolue par un agent."
        },
        {
          q: "Agentforce est-il conforme à l'EU AI Act ?",
          a: "Oui, la couche de confiance Einstein Trust Layer applique un chiffrement strict, le masquage des données sensibles et une journalisation intégrale."
        },
        {
          q: "Quelle est l'alternative indépendante à Agentforce ?",
          a: "Sierra AI ou Fin AI pour le service client, Artisan Ava pour la prospection."
        }
      ]
    }
  },
  '11x-ai-alice-jordan': {
    fr: {
      tagline: "Les salariés numériques autonomes : Alice pour la prospection multicanale et Jordan pour la qualification téléphonique 24/7.",
      badge: "Employés Virtuels",
      pricingModel: "Payant",
      pros: [
        "Couvre l'ensemble du cycle de prospection (recherche, outreach email, LinkedIn et téléphone)",
        "Fonctionne 24h/24 sans congés avec un volume de prospection équivalent à 3 SDRs",
        "Optimisation continue des accroches grâce à l'analyse des taux de réponse"
      ],
      cons: [
        "Tarification contractuelle annuelle élevée réservée aux entreprises matures",
        "Temps d'onboarding nécessaire pour affiner le ciblage et le ton de marque"
      ],
      keyFeatures: [
        "Alice : prospection autonome multi-sources (LinkedIn, email)",
        "Jordan : appels téléphoniques sortants et entrants ultra-naturels",
        "Qualification intelligente du besoin selon la méthode BANT",
        "Intégration directe dans HubSpot, Salesforce et Pipedrive"
      ],
      targetAudience: "Scale-ups B2B, éditeurs SaaS et entreprises de services cherchant à faire exploser leur volume de démos commerciales sans doubler leurs effectifs.",
      overviewSummary: "11x.ai ne vend pas de simples fonctionnalités logicielles, mais des 'Digital Workers'. Alice prospecte des milliers de comptes cibles pendant que Jordan appelle les prospects ayant montré de l'intérêt pour bloquer des créneaux dans l'agenda de vos commerciaux seniors.",
      faqs: [
        {
          q: "Quelle est la différence entre Alice et Jordan ?",
          a: "Alice est spécialisée dans la prospection écrite (emails et LinkedIn), tandis que Jordan est un agent vocal dédié aux appels téléphoniques."
        },
        {
          q: "Quel est le coût moyen d'un agent 11x.ai ?",
          a: "Les forfaits débutent généralement à partir de 1 500 $ à 2 500 $ / mois sur engagement annuel, ce qui reste très inférieur au coût d'un SDR humain."
        },
        {
          q: "Quelle alternative plus souple envisager ?",
          a: "Artisan AI (Ava) ou Apollo.io avec ses forfaits mensuels sans engagement."
        }
      ]
    }
  },
  'clickup-brain': {
    fr: {
      tagline: "Le cerveau d'entreprise contextuel qui connecte vos tâches, documents et équipes pour orchestrer vos projets en continu.",
      badge: "Productivité Tout-en-Un",
      pricingModel: "Freemium",
      pros: [
        "Tarification ultra-accessible (7 $ / mois par membre en option)",
        "Connaissance contextuelle de l'ensemble des tâches, wikis et chats de l'entreprise",
        "Automatisation de la rédaction de comptes-rendus de sprint et de résumés de réunion"
      ],
      cons: [
        "Nécessite d'utiliser ClickUp comme outil principal de gestion de projet",
        "Recherche sémantique parfois moins performante sur les pièces jointes volumineuses"
      ],
      keyFeatures: [
        "AI Knowledge Manager : répond à toute question sur les projets en cours",
        "AI Project Manager : met à jour automatiquement les statuts et résume les tâches",
        "AI Writer for Work : rédige des spécifications, emails et comptes-rendus",
        "Connexion avec Google Drive, Figma et GitHub"
      ],
      targetAudience: "Équipes produit, agences, startups et managers voulant réduire le temps perdu à chercher des informations internes ou à faire des reportings manuels.",
      overviewSummary: "ClickUp Brain intègre l'IA au cœur même du travail collaboratif. Il sait exactement qui travaille sur quoi, résume l'avancement d'un projet en deux clics et répond instantanément aux questions des collaborateurs en citant les tâches et documents internes pertinents.",
      faqs: [
        {
          q: "Quel est le prix de ClickUp Brain ?",
          a: "ClickUp Brain est proposé sous la forme d'un ajout à seulement 7 $ / utilisateur / mois sur n'importe quel plan ClickUp."
        },
        {
          q: "Mes données internes restent-elles confidentielles ?",
          a: "Oui, ClickUp applique une politique stricte de non-entraînement de modèles IA sur les données des clients et respecte les normes RGPD."
        },
        {
          q: "Quelle est l'alternative recommandée ?",
          a: "Lindy AI pour un assistant personnel transversal ou Make.com pour des flux inter-applications."
        }
      ]
    }
  },
  'lindy-ai': {
    fr: {
      tagline: "L'assistant autonome tout-en-un pour automatiser la gestion d'emails, la prise de rendez-vous et le suivi CRM sans supervision.",
      badge: "Assistant Exécutif",
      pricingModel: "Freemium",
      pros: [
        "Configuration en langage naturel sans compétences techniques",
        "Prise en charge autonome des échanges d'emails pour fixer des réunions",
        "Capacité à créer une flotte d'assistants spécialisés (RH, support, vente)"
      ],
      cons: [
        "Consommation rapide de crédits sur les flux d'emails à très fort trafic",
        "Certaines intégrations CRM nécessitent un paramétrage initial méticuleux"
      ],
      keyFeatures: [
        "Gestion autonome de boîte de réception (tri, brouillons, réponses)",
        "Coordination d'agenda et gestion des fuseaux horaires",
        "Enrichissement automatique des fiches contacts dans votre CRM",
        "Prise de notes et synthèse automatique des réunions vidéo"
      ],
      targetAudience: "Dirigeants d'entreprise, consultants, investisseurs et professionnels débordés cherchant à récupérer 10 heures par semaine.",
      overviewSummary: "Lindy agit comme un véritable assistant de direction virtuel. Elle lit vos emails, rédige les réponses adaptées à votre style, gère les allers-retours pour fixer des rendez-vous et enregistre les comptes-rendus dans vos outils de travail.",
      faqs: [
        {
          q: "Lindy AI dispose-t-il d'un plan gratuit ?",
          a: "Oui, Lindy propose une version gratuite pour tester ses fonctionnalités principales, puis des forfaits payants à partir de 49 $ / mois."
        },
        {
          q: "Lindy a-t-elle accès à mes données privées ?",
          a: "Lindy se connecte de manière sécurisée via OAuth et chiffre l'intégralité des échanges de bout en bout sans conserver vos correspondances sensibles."
        },
        {
          q: "Quelle est la meilleure alternative ?",
          a: "ClickUp Brain pour la gestion d'équipe ou Manus AI pour la recherche web avancée."
        }
      ]
    }
  },
  'manus-ai': {
    fr: {
      tagline: "L'agent autonome généraliste de nouvelle génération capable d'exécuter des tâches complexes de bout en bout dans un navigateur.",
      badge: "Nouvelle Génération",
      pricingModel: "Freemium",
      pros: [
        "Navigation autonome sur le web avec interactions sur des formulaires et sites réels",
        "Capacité de raisonnement multi-étapes pour des études de marché approfondies",
        "Production de rapports structurés téléchargeables au format PDF ou tableur"
      ],
      cons: [
        "File d'attente fréquente pour l'accès aux capacités maximales",
        "Temps d'exécution plus long sur les tâches comportant des dizaines d'étapes"
      ],
      keyFeatures: [
        "Contrôle autonome de navigateur web avec résolution de captchas",
        "Synthèse et extraction de données depuis des dizaines de sources",
        "Génération de livrables professionnels (audits, benchmarks, comparatifs)",
        "Mode d'exécution supervisée avec validation intermédiaire"
      ],
      targetAudience: "Analystes financiers, consultants en stratégie, recruteurs et chercheurs ayant besoin d'automatiser des veilles et des collectes de données complexes.",
      overviewSummary: "Manus AI représente la nouvelle vague des agents autonomes. Vous lui confiez une mission comme 'trouve les 20 plus gros concurrents de cette startup avec leurs levées de fonds et compile un tableau Excel', et Manus navigue, lit, extrait les données et vous livre le document final.",
      faqs: [
        {
          q: "Comment fonctionne Manus AI ?",
          a: "Manus dispose d'un navigateur virtuel dans lequel il clique, fait défiler les pages et extrait l'information exactement comme un être humain le ferait."
        },
        {
          q: "Est-ce sécurisé pour mes recherches d'entreprise ?",
          a: "Oui, chaque session s'exécute dans un conteneur isolé et détruit après la fin de la tâche pour garantir la confidentialité."
        },
        {
          q: "Quelle est l'alternative à Manus ?",
          a: "Cognosys ou Lindy AI pour l'automatisation de flux de travail."
        }
      ]
    }
  },
  'cognosys': {
    fr: {
      tagline: "L'espace de travail d'agents IA pour la recherche d'informations sur le web et l'exécution de processus d'entreprise automatisés.",
      badge: "Recherche Autonome",
      pricingModel: "Freemium",
      pros: [
        "Excellente vitesse d'extraction d'informations sur le web public",
        "Interface collaborative permettant de partager des flux d'agents avec son équipe",
        "Tarif d'entrée très attractif avec formule d'essai gratuite"
      ],
      cons: [
        "Moins d'intégrations natives que les plateformes comme Make ou n8n",
        "Parfois limité sur les sites protégés par des authentifications lourdes"
      ],
      keyFeatures: [
        "Décomposition automatique des objectifs complexes en sous-tâches",
        "Exploration web et vérification de faits en temps réel",
        "Export des résultats sous forme de documents formatés et de tableaux",
        "Bibliothèque de modèles d'agents prêts à l'emploi"
      ],
      targetAudience: "Chercheurs, équipes marketing, cabinets de conseil et professionnels souhaitant accélérer leurs veilles concurrentielles.",
      overviewSummary: "Cognosys transforme des requêtes de haut niveau en plans d'action séquencés. Ses agents parcourent le web, filtrent les informations redondantes et compilent des synthèses vérifiées pour éclairer vos prises de décision stratégiques.",
      faqs: [
        {
          q: "Cognosys est-il gratuit ?",
          a: "Oui, Cognosys propose une formule gratuite avec un quota de crédits mensuels, ainsi qu'un forfait Pro débutant à 19 $ / mois."
        },
        {
          q: "Peut-on automatiser des tâches récurrentes ?",
          a: "Oui, les forfaits avancés permettent de programmer l'exécution d'agents à intervalles réguliers (veille quotidienne, audits hebdomadaires)."
        },
        {
          q: "Quelle est l'alternative recommandée ?",
          a: "Manus AI pour une navigation web plus poussée, ou n8n pour orchestrer des API privées."
        }
      ]
    }
  },
  'decagon': {
    fr: {
      tagline: "L'agent d'IA pour le support client d'entreprise conçu pour résoudre les demandes complexes avec intégration aux systèmes internes.",
      badge: "Spécialiste Support",
      pricingModel: "Sur devis",
      pros: [
        "Résout les demandes nécessitant des actions concrètes (modifications de vol, annulations)",
        "Apprentissage continu à partir des résolutions des conseillers humains",
        "Analytique poussée des motifs d'insatisfaction client"
      ],
      cons: [
        "Tarification entreprise non publique nécessitant un entretien commercial",
        "Ciblé prioritairement sur les entreprises traitant plus de 10 000 tickets par mois"
      ],
      keyFeatures: [
        "Moteur de raisonnement s'adaptant à l'historique et au statut du client",
        "Connexion directe aux CRM, ERP et bases de données transactionnelles",
        "Tableau de bord de gouvernance avec règles de conformité strictes",
        "Support omnicanal (chat, email, formulaires)"
      ],
      targetAudience: "Directeurs de l'expérience client (CX), grandes entreprises du voyage, de la fintech et du commerce électronique.",
      overviewSummary: "Decagon a été conçu pour dépasser les limites des chatbots traditionnels. En se connectant directement à vos systèmes de commande, l'agent prend des décisions éclairées, applique votre politique de retour et résout le litige en autonomie complète.",
      faqs: [
        {
          q: "Comment Decagon gère-t-il les cas litigieux ?",
          a: "Si un cas dépasse les seuils de confiance ou le périmètre de remboursement autorisé, Decagon transfère le dossier avec un résumé complet à un opérateur humain."
        },
        {
          q: "Combien de temps prend l'intégration ?",
          a: "Grâce à ses connecteurs d'API modernes, un premier agent de test peut être déployé en moins de deux semaines."
        },
        {
          q: "Quelle est l'alternative pour les plus petites structures ?",
          a: "Fin AI (Intercom) pour sa facturation à l'usage ou Sierra AI pour les grands comptes."
        }
      ]
    }
  },
  'pennylane-ai': {
    fr: {
      tagline: "L'agent autonome de comptabilité et de rapprochement de factures conçu pour la conformité fiscale et réglementaire européenne.",
      badge: "Leader Finance UE",
      pricingModel: "Payant",
      pros: [
        "Conformité totale avec les normes fiscales françaises et européennes (Facture électronique 2026)",
        "Rapprochement bancaire automatisé avec lecture intelligente des justificatifs",
        "Plateforme partagée en temps réel entre l'entreprise et son expert-comptable"
      ],
      cons: [
        "Optimisé principalement pour le marché français et européen",
        "Tarification par palier de chiffre d'affaires et de volume de factures"
      ],
      keyFeatures: [
        "Collecte et reconnaissance automatique des factures d'achat (OCR IA)",
        "Rapprochement instantané avec les flux bancaires",
        "Génération automatisée des déclarations de TVA et bilans",
        "Gestion intégrée des paiements fournisseurs en un clic"
      ],
      targetAudience: "PME, scale-ups, directeurs financiers (CFO) et cabinets d'expertise comptable cherchant à automatiser la clôture comptable.",
      overviewSummary: "Pennylane révolutionne la gestion financière des entreprises européennes. Ses agents analysent les flux bancaires, associent automatiquement les justificatifs, calculent la TVA et préparent les écritures comptables sans intervention manuelle répétitive.",
      faqs: [
        {
          q: "Pennylane est-il prêt pour la facture électronique obligatoire ?",
          a: "Oui, Pennylane est certifié plateforme de dématérialisation partenaire (PDP) pour la réforme de la facturation électronique 2026."
        },
        {
          q: "Mon expert-comptable peut-il accéder à Pennylane ?",
          a: "Absolument, la plateforme est nativement conçue pour la collaboration directe entre les dirigeants et leur cabinet comptable."
        },
        {
          q: "Quel est le tarif de départ ?",
          a: "Les formules pour entreprises démarrent à partir de 29 € / mois selon la taille de votre structure."
        }
      ]
    }
  },
  'harvey-ai': {
    fr: {
      tagline: "L'agent d'intelligence juridique et contractuelle pour cabinets d'avocats et directions juridiques d'entreprises.",
      badge: "Standard Juridique",
      pricingModel: "Sur devis",
      pros: [
        "Modèles d'IA spécialisés entraînés spécifiquement sur le droit et la jurisprudence",
        "Analyse de contrats volumineux et détection des clauses à risque en quelques secondes",
        "Sécurité de niveau bancaire conforme aux exigences de secret professionnel"
      ],
      cons: [
        "Tarification très sélective orientée grands cabinets et directions juridiques du CAC 40",
        "Nécessite la validation finale d'un avocat pour les avis formels"
      ],
      keyFeatures: [
        "Analyse contractuelle comparative multi-documents",
        "Recherche juridique augmentée avec citations précises des textes de loi",
        "Rédaction automatisée de mémorandums et conclusions",
        "Environnement isolé garantissant la stricte confidentialité des dossiers"
      ],
      targetAudience: "Cabinets d'avocats d'affaires, directeurs juridiques (CLO) et fonds d'investissement réalisant des audits de due diligence.",
      overviewSummary: "Harvey est le partenaire d'intelligence artificielle des plus prestigieux cabinets juridiques mondiaux. Il accélère la revue de contrats, compare les versions et synthétise la jurisprudence tout en garantissant une étanchéité absolue des informations soumises.",
      faqs: [
        {
          q: "Harvey remplace-t-il les avocats ?",
          a: "Non, Harvey est un multiplicateur de force qui décharge les juristes des tâches de revue chronophages pour leur permettre de se concentrer sur le conseil stratégique."
        },
        {
          q: "Mes documents juridiques sont-ils protégés ?",
          a: "Oui, Harvey offre des garanties contractuelles strictes : aucune donnée client n'est utilisée pour entraîner des modèles généraux."
        },
        {
          q: "Quelle alternative juridique envisager ?",
          a: "CoCounsel (Casetext) pour la recherche contentieuse et la préparation de dossiers."
        }
      ]
    }
  },
  'cocounsel-casetext': {
    fr: {
      tagline: "L'assistant juridique IA réalisant la recherche jurisprudentielle vérifiée, la revue de pièces et la préparation des audiences pour avocats.",
      badge: "Recherche Juridique",
      pricingModel: "Payant",
      pros: [
        "Alimenté par la base de données jurisprudentielle Casetext (groupe Thomson Reuters)",
        "Garantit des citations juridiques réelles sans hallucination de jurisprudence",
        "Revue rapide de milliers de pièces lors des phases d'instruction"
      ],
      cons: [
        "Principalement optimisé pour le droit anglo-saxon et américain",
        "Tarification par licence utilisateur orientée professionnels du droit"
      ],
      keyFeatures: [
        "Recherche juridique avec vérification automatique de la validité des textes",
        "Revue critique de documents et détection de contradictions",
        "Préparation de questions pour les interrogatoires et dépositions",
        "Synthèse instantanée de dossiers contentieux complexes"
      ],
      targetAudience: "Avocats plaidoyers, magistrats, cabinets de contentieux et juristes d'entreprise.",
      overviewSummary: "Propulsé par Thomson Reuters, CoCounsel est un assistant juridique fiable conçu pour éliminer le risque d'hallucination. Il analyse les pièces de procédure, vérifie si les arrêts cités font toujours jurisprudence et prépare des synthèses rigoureuses prêtes pour le tribunal.",
      faqs: [
        {
          q: "CoCounsel invente-t-il des arrêts de jurisprudence ?",
          a: "Non, CoCounsel s'appuie sur le moteur de recherche vérifié de Casetext et fournit des liens directs vers les textes officiels pour chaque affirmation."
        },
        {
          q: "Quel est le coût d'utilisation ?",
          a: "Les licences débutent aux alentours de 250 $ à 400 $ / mois par praticien avec accès complet aux bases de données juridiques."
        },
        {
          q: "Quelle est l'alternative pour les contrats d'affaires ?",
          a: "Harvey AI pour la revue contractuelle de droit des affaires."
        }
      ]
    }
  },
  'jasper-ai-campaigns': {
    fr: {
      tagline: "La plateforme marketing d'entreprise autonome qui orchestre des campagnes multicanales alignées sur la voix de votre marque.",
      badge: "Marketing Entreprise",
      pricingModel: "Payant",
      pros: [
        "Apprend et respecte fidèlement la charte éditoriale et le ton de votre marque",
        "Génère une campagne complète (articles, emails, posts réseaux sociaux) en un seul prompt",
        "Intégration d'outils SEO et détection intégrée du plagiat"
      ],
      cons: [
        "Tarification supérieure aux générateurs de texte grand public",
        "Nécessite de bien renseigner la base de connaissances de marque au départ"
      ],
      keyFeatures: [
        "Jasper Brand Voice : mémoire stylistique de votre entreprise",
        "Campagnes multicanales coordonnées en 1 clic",
        "Générateur d'images et d'illustrations marketing intégré",
        "Extension de navigateur pour utiliser Jasper dans tous vos outils SaaS"
      ],
      targetAudience: "Directeurs marketing (CMO), équipes de communication, agences de contenu et scale-ups cherchant à produire 5x plus de contenus de haute qualité.",
      overviewSummary: "Jasper a évolué pour devenir un véritable chef d'orchestre marketing. Il ne produit pas des textes génériques : il s'imprègne de vos fiches produits, de vos guides de style et produit des campagnes cohérentes prêtes à convertir vos prospects.",
      faqs: [
        {
          q: "Peut-on tester Jasper gratuitement ?",
          a: "Oui, Jasper propose un essai gratuit de 7 jours sur l'ensemble de ses fonctionnalités."
        },
        {
          q: "En quoi Jasper est-il différent de ChatGPT ?",
          a: "Jasper est conçu pour les entreprises : il retient le ton exact de votre marque, intègre des workflows collaboratifs d'équipe et des modèles marketing éprouvés."
        },
        {
          q: "Quelle est la meilleure alternative pour le SEO ?",
          a: "Surfer AI pour un positionnement garanti sur Google, ou InVideo AI pour la production de vidéos."
        }
      ]
    }
  },
  'surfer-ai': {
    fr: {
      tagline: "L'agent autonome de recherche SEO et de rédaction longue qui positionne vos articles en première page de Google.",
      badge: "Expert SEO",
      pricingModel: "Payant",
      pros: [
        "Analyse en temps réel les 20 premiers résultats Google pour optimiser la densité sémantique",
        "Rédige des articles complets de 2 500+ mots structurés pour surclasser la concurrence",
        "Comprend un score de contenu (Content Score) prédictif très précis"
      ],
      cons: [
        "Coût par article généré (environ 19 $ à 29 $ par article)",
        "Une relecture humaine reste conseillée pour ajouter des anecdotes ou témoignages exclusifs"
      ],
      keyFeatures: [
        "Audit des SERPs Google et extraction des termes sémantiques clés",
        "Génération d'articles complets avec maillage interne recommandé",
        "Module de détection anti-IA et humanisation du texte",
        "Intégration directe WordPress, Google Docs et Jasper"
      ],
      targetAudience: "Responsables SEO, créateurs de sites de contenu, agences web et entreprises dépendantes du trafic organique pour leurs ventes.",
      overviewSummary: "Surfer AI élimine le hasard du référencement naturel. En analysant ce qui fonctionne actuellement chez vos concurrents les mieux positionnés sur Google, il génère des guides complets optimisés pour satisfaire à la fois les algorithmes et les lecteurs humains.",
      faqs: [
        {
          q: "Les articles Surfer AI se positionnent-ils vraiment sur Google ?",
          a: "Oui, en respectant les critères sémantiques exacts mesurés sur les premiers résultats Google, les articles générés obtiennent d'excellents classements."
        },
        {
          q: "Combien coûte un article Surfer AI ?",
          a: "Le tarif est généralement d'environ 19 $ à 29 $ par article selon votre formule d'abonnement."
        },
        {
          q: "Quelle est l'alternative ?",
          a: "Jasper AI pour des campagnes marketing globales incluant réseaux sociaux et emails."
        }
      ]
    }
  },
  'invideo-ai': {
    fr: {
      tagline: "Le studio de production vidéo autonome qui génère, monte, commente et sous-titre des vidéos complètes à partir d'un simple prompt textuel.",
      badge: "Studio Vidéo",
      pricingModel: "Freemium",
      pros: [
        "Crée une vidéo complète avec voix off, visuels de stock et sous-titres en 3 minutes",
        "Édition interactive par commandes textuelles ('change la voix', 'accélère le rythme')",
        "Bibliothèque de plus de 16 millions de médias libres de droits (iStock, Shutterstock)"
      ],
      cons: [
        "Filigrane sur les vidéos générées avec la formule gratuite",
        "Peut nécessiter quelques ajustements manuels sur les transitions très dynamiques"
      ],
      keyFeatures: [
        "Génération de scénario, voix off humaine et sélection de plans en 1 clic",
        "Sous-titres animés automatiques ultra-dynamiques pour TikTok et YouTube Shorts",
        "Clonage de votre propre voix pour narrer les vidéos",
        "Export en résolution 4K sans filigrane sur les forfaits payants"
      ],
      targetAudience: "Créateurs de contenu, community managers, agences vidéo et entreprises cherchant à alimenter leurs canaux vidéo sans matériel de tournage.",
      overviewSummary: "InVideo AI a rendu la production vidéo aussi simple que la rédaction d'un tweet. Décrivez votre sujet, et l'agent recherche les séquences vidéo pertinentes, synchronise une voix off réaliste, ajoute de la musique de fond et génère les sous-titres animés.",
      faqs: [
        {
          q: "Peut-on utiliser InVideo AI gratuitement ?",
          a: "Oui, la formule gratuite permet de générer jusqu'à 10 minutes de vidéo par semaine avec filigrane, les forfaits payants débutant à 20 $ / mois."
        },
        {
          q: "Les vidéos sont-elles libres de droits commerciaux ?",
          a: "Oui, toutes les vidéos exportées avec un forfait payant peuvent être monétisées sur YouTube, Instagram, TikTok ou utilisées pour des publicités."
        },
        {
          q: "Quelle est l'alternative pour recycler des vidéos existantes ?",
          a: "Klap AI pour transformer de longues vidéos YouTube en clips courts viraux."
        }
      ]
    }
  },
  'klap-ai': {
    fr: {
      tagline: "L'agent autonome de recyclage vidéo qui extrait les meilleurs moments de longues vidéos YouTube pour en faire des shorts viraux avec sous-titres.",
      badge: "Recyclage Viral",
      pricingModel: "Freemium",
      pros: [
        "Transforme un podcast ou webinaire d'une heure en 10 shorts prêts à publier en 5 minutes",
        "Cadrage automatique intelligent (Auto-Reframe) centré sur le visage de la personne qui parle",
        "Génère des sous-titres animés avec emojis dans le style des meilleurs créateurs"
      ],
      cons: [
        "Moins adapté aux vidéos sans prise de parole humaine (tutoriels silencieux)",
        "Nombre d'heures de vidéo analysées plafonné selon le forfait"
      ],
      keyFeatures: [
        "Détection autonome des moments les plus captivants et drôles",
        "Recadrage vertical 9:16 automatique avec suivi du regard",
        "Sous-titrage dynamique avec coloration des mots prononcés",
        "Génération automatique des titres et descriptions optimisés"
      ],
      targetAudience: "Podcasteurs, YouTubeurs, formateurs en ligne et équipes marketing cherchant à maximiser l'audience de leurs vidéos existantes sur TikTok et Reels.",
      overviewSummary: "Klap AI résout le plus grand casse-tête des créateurs : le découpage fastidieux des longs formats. Collez simplement un lien YouTube, et Klap isole les punchlines, recadre la caméra sur l'orateur et exporte des formats courts optimisés pour capter l'attention.",
      faqs: [
        {
          q: "Klap AI propose-t-il un essai gratuit ?",
          a: "Oui, vous pouvez importer une première vidéo gratuitement pour voir le résultat et télécharger des extraits tests."
        },
        {
          q: "Quelles langues sont supportées pour le sous-titrage ?",
          a: "Klap prend en charge plus de 52 langues dont le français, l'anglais, l'espagnol et l'allemand avec une excellente fidélité."
        },
        {
          q: "Quelle est l'alternative pour créer des vidéos de zéro ?",
          a: "InVideo AI pour générer une vidéo complète à partir d'une simple idée textuelle."
        }
      ]
    }
  },
  'typeform-ai': {
    fr: {
      tagline: "L'agent de formulaires et sondages conversationnels qui adapte dynamiquement ses questions pour qualifier vos prospects et maximiser le taux de complétion.",
      badge: "Conversion & Leads",
      pricingModel: "Freemium",
      pros: [
        "Taux de complétion jusqu'à 3x supérieur aux formulaires traditionnels statiques",
        "Génération automatique d'un formulaire complet à partir d'une simple consigne",
        "Branchement conditionnel intelligent selon les réponses apportées par le répondant"
      ],
      cons: [
        "Nombre de réponses mensuelles limité sur les forfaits d'entrée de gamme",
        "Tarification Pro plus élevée que les outils de sondage basiques"
      ],
      keyFeatures: [
        "Création de formulaire par prompt en langage naturel",
        "Expérience conversationnelle interactive une question à la fois",
        "Analyse sémantique et synthèse automatique des réponses ouvertes",
        "Connexion native à HubSpot, Notion, Zapier et Make.com"
      ],
      targetAudience: "Équipes marketing, recruteurs, consultants et agences cherchant à transformer leurs visiteurs en leads hautement qualifiés.",
      overviewSummary: "Typeform AI réinvente la collecte d'informations. Au lieu de confronter vos prospects à une grille de questions austère, il crée un échange fluide et personnalisé qui s'adapte au profil de chaque utilisateur, maximisant ainsi vos conversions.",
      faqs: [
        {
          q: "Typeform est-il gratuit ?",
          a: "Oui, Typeform propose un plan gratuit de base pour tester vos formulaires, complété par des plans payants à partir de 25 $ / mois."
        },
        {
          q: "Peut-on personnaliser les formulaires à ses couleurs ?",
          a: "Absolument. Vous pouvez personnaliser la typographie, les logos, les couleurs et intégrer des vidéos ou visuels de marque."
        },
        {
          q: "Comment Typeform s'intègre-t-il à mon CRM ?",
          a: "Grâce à des intégrations directes et des webhooks, chaque réponse qualifiée est immédiatement envoyée dans HubSpot, Salesforce ou Make."
        }
      ]
    }
  }
};

export function getLocalizedAgent(agent: any, lang: SupportedLang) {
  const slug = (agent.id || agent.slug || '').replace(/\.md$/, '');
  const agentTrans = agentTranslations[slug]?.[lang];

  // Helper to translate pricing model to French if lang is fr
  function translatePricingModel(model: string): string {
    if (lang !== 'fr') return model;
    const m = (model || '').toLowerCase();
    if (m.includes('freemium')) return 'Freemium';
    if (m.includes('free') || m.includes('gratuit')) return 'Gratuit';
    if (m.includes('usage')) return 'À l\'usage';
    if (m.includes('quote') || m.includes('devis') || m.includes('custom') || m.includes('enterprise')) return 'Sur devis';
    if (m.includes('paid') || m.includes('subscription') || m.includes('payant')) return 'Payant';
    return model;
  }

  return {
    ...agent.data,
    slug,
    name: agent.data.name,
    category: agent.data.category,
    rating: agent.data.rating,
    priceStartingAt: agent.data.priceStartingAt,
    websiteUrl: agent.data.websiteUrl,
    affiliateUrl: agent.data.affiliateUrl,
    featured: agent.data.featured,
    aiActCompliant: agent.data.aiActCompliant,
    dateAdded: agent.data.dateAdded,
    // Localized fields:
    tagline: (lang === 'fr' && agentTrans?.tagline) ? agentTrans.tagline : agent.data.tagline,
    badge: (lang === 'fr' && agentTrans?.badge) ? agentTrans.badge : agent.data.badge,
    pricingModel: (lang === 'fr' && agentTrans?.pricingModel) ? agentTrans.pricingModel : translatePricingModel(agent.data.pricingModel),
    pros: (lang === 'fr' && agentTrans?.pros) ? agentTrans.pros : agent.data.pros,
    cons: (lang === 'fr' && agentTrans?.cons) ? agentTrans.cons : agent.data.cons,
    keyFeatures: (lang === 'fr' && agentTrans?.keyFeatures) ? agentTrans.keyFeatures : agent.data.keyFeatures,
    targetAudience: (lang === 'fr' && agentTrans?.targetAudience) ? agentTrans.targetAudience : agent.data.targetAudience,
    overviewSummary: (lang === 'fr' && agentTrans?.overviewSummary) ? agentTrans.overviewSummary : null,
    faqs: (lang === 'fr' && agentTrans?.faqs) ? agentTrans.faqs : null,
  };
}
