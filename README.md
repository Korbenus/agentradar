# 🛰️ AgentRadar — Observatoire Autonome des Agents IA (2026)

> Projet clé-en-main 100 % autonome, développé sur mesure en **Astro 5 + Tailwind CSS + Python + GitHub Actions**, hébergé gratuitement à vie sur **Cloudflare Pages**.

---

## 💡 Présentation du Projet

**AgentRadar** est un média et comparateur de référence spécialisé dans les **Agents IA Autonomes B2B** (prospection commerciale, support client, code, finance, conformité EU AI Act).

### Pourquoi ce projet génère des revenus passifs :
1. **Commissions d'affiliation récurrentes** : Les logiciels d'agents B2B coûtent entre 50 € et 500 €/mois. Leurs programmes d'affiliation reversent **20 % à 30 % chaque mois** par client converti.
2. **Audits payants Fast-Track (49 €)** : La page `/submit` permet aux éditeurs de SaaS de payer pour être audités et mis en avant en 24h.
3. **SEO de niche à fort trafic qualifié** : Les décideurs recherchent des solutions concrètes pour remplacer ou automatiser des tâches d'entreprise.

---

## ⚡ La boucle 100 % autonome (Comment ça tourne sans toi)

```
[Chaque nuit à 03:00 UTC]
       │
       ▼
GitHub Actions (Serveur gratuit dans le cloud)
       │
       ▼
Script Python (`scripts/radar.py`)
  ↳ Détecte un nouvel agent IA tendance
  ↳ Interroge l'API gratuite Gemini 3.8 Flash (Google AI Studio)
  ↳ Rédige l'article complet, points forts, points faibles et métadonnées SEO
  ↳ Crée la nouvelle fiche dans `src/content/agents/`
       │
       ▼
Git Commit & Push automatique
       │
       ▼
Cloudflare Pages détecte le commit et redéploie le site en 20 secondes !
```

---

## 🚀 Tester le site en local tout de suite

Dans ton terminal, dans ce dossier :

```powershell
# 1. Lancer le site en mode développement
npm run dev

# 2. Ouvrir le navigateur sur http://localhost:4321
```

Pour tester manuellement le robot d'ajout d'agents :
```powershell
python -u scripts/radar.py
```

---

## 🌐 Déploiement en ligne en 3 étapes (Coût total : 0,00 €)

### Étape 1 : Créer ton dépôt GitHub (Gratuit)
1. Va sur [github.com/new](https://github.com/new) et crée un nouveau dépôt (ex. `agentradar`).
2. Dans ce dossier, initialise et pousse ton code :
```powershell
git init
git add .
git commit -m "feat: premier lancement AgentRadar"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/agentradar.git
git push -u origin main
```

### Étape 2 : Brancher Cloudflare Pages (Hébergement 0 € à vie)
1. Crée un compte gratuit sur [cloudflare.com](https://dash.cloudflare.com).
2. Va dans **Workers & Pages** $\to$ **Create application** $\to$ **Pages** $\to$ **Connect to Git**.
3. Sélectionne ton dépôt `agentradar`.
4. Dans les paramètres de build :
   * **Framework preset** : `Astro`
   * **Build command** : `npm run build`
   * **Build output directory** : `dist`
5. Clique sur **Save and Deploy**. En 1 minute, ton site est en ligne avec une adresse gratuite en `https://agentradar.pages.dev` (et HTTPS mondial sécurisé inclus).

*(Optionnel plus tard)* : Tu pourras y brancher ton propre nom de domaine personnalisé (ex. `agentradar.fr` ou `.com`) en 1 clic dans Cloudflare.

### Étape 3 : Activer la clé Gemini gratuite pour le robot
1. Récupère ta clé gratuite en 30 secondes sur [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) (bouton « Create API key »).
2. Sur ton dépôt GitHub, va dans **Settings** $\to$ **Secrets and variables** $\to$ **Actions**.
3. Clique sur **New repository secret** :
   * **Name** : `GEMINI_API_KEY`
   * **Secret** : colle ta clé commençant par `AIzaSy...`
4. Va dans l'onglet **Settings** $\to$ **Actions** $\to$ **General** $\to$ section **Workflow permissions** : sélectionne **Read and write permissions** (pour autoriser le robot à publier).

**C'est terminé !** Dès cette nuit (ou dès que tu cliques sur « Run workflow » dans l'onglet Actions), le robot enrichira ton site tout seul.

---

## 💰 Personnaliser tes liens d'affiliation

Tous les agents sont stockés sous forme de fichiers Markdown dans `src/content/agents/` :
* `devin.md`
* `lindy-ai.md`
* `n8n-ai.md`
* `sierra-ai.md`
* etc.

Pour remplacer un lien d'affiliation, ouvre simplement le fichier et modifie la ligne :
```yaml
affiliateUrl: "https://ton-lien-partenaire.com"
```
Quand tu t'inscris sur des réseaux d'affiliation comme [PartnerStack](https://partnerstack.com), [Impact.com](https://impact.com) ou directement sur le site des SaaS, tu remplaces cette ligne et tes commissions s'activent.

---

## 📁 Architecture des fichiers

```text
├── .github/workflows/
│   └── daily-radar.yml        # Tâche cron quotidienne 100% autonome
├── scripts/
│   └── radar.py               # Le cerveau Python (scraping + Gemini AI)
├── src/
│   ├── content/
│   │   └── agents/            # Fiches comparatives (Markdown + Frontmatter)
│   ├── components/            # Header, Footer, Cartes d'agents, Filtres
│   ├── layouts/               # Structure HTML, SEO, OpenGraph, Schema.org
│   └── pages/
│       ├── index.astro        # Page d'accueil avec recherche instantanée
│       ├── submit.astro       # Page de soumission / Fast-track 49€
│       ├── rss.xml.ts         # Flux RSS pour syndication et Google
│       ├── agents/[slug].astro# Fiches détaillées avec notes & boutons d'action
│       └── categories/        # Pages catégories (SEO)
├── astro.config.mjs           # Configuration Astro
├── tailwind.config.mjs        # Design System Tailwind (dark mode)
└── package.json
```
