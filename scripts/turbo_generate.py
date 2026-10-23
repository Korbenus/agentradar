#!/usr/bin/env python3
"""
Turbo batch generator for AgentRadar.
Generates 15 high-value AI agent reviews into src/content/agents/.
"""

import os
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
AGENTS_DIR = ROOT_DIR / "src" / "content" / "agents"

AGENTS = [
    {
        "slug": "artisan-ai-ava",
        "name": "Artisan AI (Ava)",
        "tagline": "Autonomous AI BDR executing multi-channel lead research, personalized cold emails, and deliverability warm-up.",
        "category": "Prospection B2B",
        "rating": 4.8,
        "pricingModel": "Payant",
        "priceStartingAt": "$249 / month",
        "websiteUrl": "https://artisan.co",
        "badge": "Top Sales Agent",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Researches prospects across 300M+ B2B profiles automatically",
            "Crafts hyper-personalized email hooks based on recent prospect activity",
            "Manages email deliverability and domain rotation natively"
        ],
        "cons": [
            "Requires established ICP (Ideal Customer Profile) guidelines",
            "Higher entry price geared toward scaling sales teams"
        ],
        "keyFeatures": [
            "B2B Database of 300M+ verified leads",
            "Automated inbox warm-up & spam protection",
            "CRM 2-way sync with HubSpot and Salesforce",
            "Intent signal detection for buying triggers"
        ],
        "targetAudience": "B2B SaaS companies, sales directors, and outbound agencies wanting to 10x pipeline without hiring SDRs.",
        "body": """## Comprehensive Review of Artisan AI (Ava)

Ava by Artisan represents the gold standard of autonomous Business Development Representatives (BDRs). Unlike traditional email blasting tools, Ava conducts human-grade prospect research before typing a single sentence.

### How Ava Works
1. **Target Discovery**: Scans intent data, hiring announcements, and company news to identify ready-to-buy prospects.
2. **Personalized Outreach**: Generates unique, non-templated opening lines connecting your value proposition with the prospect's immediate pain points.
3. **Meeting Booking**: Replies autonomously to prospect queries and sends your calendar booking link.

### Return on Investment (ROI)
At $249/month, Ava replaces a traditional offshore SDR costing $2,500/month or an in-house representative costing $5,000/month, delivering immediate 10x cost efficiency on customer acquisition.
"""
    },
    {
        "slug": "cursor-agent",
        "name": "Cursor Agent",
        "tagline": "Next-generation AI coding environment capable of autonomous multi-file refactoring and bug resolution.",
        "category": "Code & Dev",
        "rating": 4.9,
        "pricingModel": "Freemium",
        "priceStartingAt": "$20 / month",
        "websiteUrl": "https://cursor.com",
        "badge": "Developer Favorite",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Understands complete codebase context across thousands of files",
            "Direct terminal and compiler integration for instant debugging",
            "Frictionless migration from VS Code with full extension support"
        ],
        "cons": [
            "Heavy local resource usage on massive monolithic codebases",
            "Fast-tier token limits require pro tier for power developers"
        ],
        "keyFeatures": [
            "Multi-file codebase indexing with vector search",
            "Composer mode for autonomous end-to-end feature creation",
            "Direct git diff generation and branch staging",
            "Privacy mode with zero code retention for training"
        ],
        "targetAudience": "Software engineers, tech leads, and development teams aiming to multiply their sprint delivery speed.",
        "body": """## Cursor Agent Review: The Evolution of Code Intelligence

Cursor has fundamentally redefined software development by transitioning from passive inline autocompletion to an active pair programming agent.

### Core Architecture
Cursor builds a local semantic index of your entire git repository. When you prompt Composer to "refactor our authentication to OAuth 2.0 PKCE", Cursor inspects your models, controllers, and tests simultaneously, proposing atomic, multi-file diffs.
"""
    },
    {
        "slug": "fin-ai-intercom",
        "name": "Fin AI (Intercom)",
        "tagline": "Enterprise customer service agent resolving up to 82% of complex support requests with verified accuracy.",
        "category": "Support Client",
        "rating": 4.9,
        "pricingModel": "Payant",
        "priceStartingAt": "$0.99 / resolution",
        "websiteUrl": "https://intercom.com/fin",
        "badge": "Enterprise Leader",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Strict zero-hallucination guardrails grounded exclusively in your docs",
            "Pay-per-successful-resolution pricing aligns cost with business value",
            "Seamless live human handoff when complex edge cases arise"
        ],
        "cons": [
            "Requires an active Intercom workspace setup",
            "High resolution volume can accumulate meaningful monthly billing"
        ],
        "keyFeatures": [
            "Multi-source knowledge base ingestion (Zendesk, Notion, web URLs)",
            "Automatic conversation categorization and sentiment tagging",
            "Custom enterprise safety filters and policy rules",
            "45+ language real-time instant translation"
        ],
        "targetAudience": "Customer support leaders, SaaS platforms, and digital brands processing high customer ticket volumes.",
        "body": """## Fin AI by Intercom: The Benchmark in Automated Support

Fin is built on a simple yet revolutionary promise: answer customer inquiries instantly without making things up. By restricting its reasoning to verified help articles and company documentation, Fin achieves an unprecedented trust level in customer care.
"""
    },
    {
        "slug": "pennylane-ai",
        "name": "Pennylane AI",
        "tagline": "Autonomous accounting and invoice reconciliation agent built for European corporate and tax compliance.",
        "category": "Comptabilité & Finance",
        "rating": 4.8,
        "pricingModel": "Payant",
        "priceStartingAt": "€49 / month",
        "websiteUrl": "https://pennylane.com",
        "badge": "Euro Tax Leader",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Automated bank feed reconciliation with 98% OCR accuracy",
            "Native compliance with European electronic invoicing regulations (Factur-X)",
            "Direct collaboration portal with certified public accountants"
        ],
        "cons": [
            "Optimized primarily for European tax and accounting frameworks",
            "Requires initial setup with corporate banking APIs"
        ],
        "keyFeatures": [
            "Automated supplier invoice matching and VAT calculation",
            "Real-time cash flow runway forecasting",
            "Direct SEPA bank transfer execution from dashboard",
            "Instant receipt scanning via mobile application"
        ],
        "targetAudience": "European business owners, CFOs, startup founders, and chartered accountancy firms.",
        "body": """## Pennylane AI: Sovereign Financial Automation

Pennylane combines financial management and bookkeeping into a unified platform powered by predictive AI. It automatically matches bank transactions with corresponding vendor receipts, verifies VAT amounts, and flags discrepancies before accounting close.
"""
    },
    {
        "slug": "clickup-brain",
        "name": "ClickUp Brain",
        "tagline": "The contextual enterprise knowledge and project orchestration agent connecting docs, tasks, and teams.",
        "category": "Productivité & Assistant",
        "rating": 4.7,
        "pricingModel": "Payant",
        "priceStartingAt": "$7 / user / month",
        "websiteUrl": "https://clickup.com",
        "badge": "Best Value",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Answers questions based on your organization's real project history",
            "Generates automatic daily standup recaps and sprint summaries",
            "Extremely competitive pricing at only $7/seat addon"
        ],
        "cons": [
            "ClickUp platform can feel feature-dense for small solo teams",
            "Requires team adoption across tasks to build deep contextual memory"
        ],
        "keyFeatures": [
            "AI Knowledge Manager connecting tasks, docs, and team chats",
            "Automated subtask creation and timeline estimation",
            "Voice clip transcription and action-item extraction",
            "Enterprise role-based security and permissions"
        ],
        "targetAudience": "Project managers, remote teams, agencies, and operations leaders organizing cross-functional work.",
        "body": """## ClickUp Brain: The First Context-Aware Work Agent

ClickUp Brain bridges the gap between static documents and dynamic task execution. Instead of asking teammates 'Where is the Q3 roadmapping doc?', ClickUp Brain retrieves the exact document, outlines pending deliverables, and suggests assignments based on individual workload.
"""
    },
    {
        "slug": "apollo-ai",
        "name": "Apollo.io AI",
        "tagline": "End-to-end B2B sales intelligence and sequence generation powered by a 275M+ contact database.",
        "category": "Prospection B2B",
        "rating": 4.8,
        "pricingModel": "Freemium",
        "priceStartingAt": "$49 / month",
        "websiteUrl": "https://apollo.io",
        "badge": "Top Sales Data",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Unmatched 275M+ verified B2B email and direct-dial phone database",
            "Integrated multi-channel outreach engine (Email, LinkedIn, Dialer)",
            "Generous free tier with monthly credit replenishment"
        ],
        "cons": [
            "Data accuracy requires selective verification on niche local markets",
            "Comprehensive interface with initial onboarding learning curve"
        ],
        "keyFeatures": [
            "AI Sales Assistant crafting personalized email sequences",
            "Real-time buyer intent signals via Bombora integration",
            "Automated dialer with local presence and call recording",
            "Seamless bi-directional sync with HubSpot, Salesforce, and Zapier"
        ],
        "targetAudience": "Sales development teams, growth hackers, founders, and recruitment consultants.",
        "body": """## Apollo.io AI: The Sales Engine Powering 500,000+ Teams

Apollo eliminates the need for separate prospecting databases, email sequencers, and enrichment tools. By combining AI copywriting with verified corporate intelligence, it allows a single sales rep to run outbound campaigns equivalent to a 5-person agency.
"""
    },
    {
        "slug": "make-ai-agents",
        "name": "Make.com AI Workflows",
        "tagline": "Visual automation canvas enabling complex multi-app AI agents with branching logic and webhooks.",
        "category": "Code & Dev",
        "rating": 4.9,
        "pricingModel": "Freemium",
        "priceStartingAt": "$9 / month",
        "websiteUrl": "https://make.com",
        "badge": "No-Code Standard",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Visual drag-and-drop builder with infinite branching possibilities",
            "Over 1,800 native connectors to popular cloud tools and databases",
            "Direct support for OpenAI, Gemini, Claude, and HuggingFace models"
        ],
        "cons": [
            "Complex data transformation formulas can be challenging for beginners",
            "Execution operations require monitoring on heavy data syncs"
        ],
        "keyFeatures": [
            "Real-time visual execution inspector and debugger",
            "JSON parsing, array aggregation, and custom HTTP module",
            "Enterprise compliance with ISO 27001 and GDPR standards",
            "Automated error handling with rollback and retry mechanisms"
        ],
        "targetAudience": "No-Code builders, operations specialists, digital agencies, and marketing automation architects.",
        "body": """## Make.com: The Orchestration Backbone of Modern AI Agents

While standalone AI agents are powerful, Make.com gives them hands and feet. By allowing models to trigger actions across CRMs, Slack, Google Drive, and databases in visual scenarios, Make transforms isolated prompts into production enterprise pipelines.
"""
    },
    {
        "slug": "elevenlabs-agents",
        "name": "ElevenLabs Conversational AI",
        "tagline": "Ultra-low latency conversational voice AI agents delivering human-indistinguishable customer interactions.",
        "category": "Support Client",
        "rating": 4.9,
        "pricingModel": "Freemium",
        "priceStartingAt": "$5 / month",
        "websiteUrl": "https://elevenlabs.io",
        "badge": "Voice Breakthrough",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Sub-400ms end-to-end voice latency for fluid natural dialogue",
            "Emotional inflection, pause management, and realistic breathing cues",
            "Support for 31+ languages with accurate local accents"
        ],
        "cons": [
            "Voice customization requires clean 1-minute audio training samples",
            "High concurrency usage requires enterprise plan scaling"
        ],
        "keyFeatures": [
            "Turnkey SDKs for Web, iOS, Android, and Twilio SIP telephony",
            "Dynamic prompt injection with real-time tool calling",
            "Knowledge base ingestion for live question answering",
            "SOC2 Type II certified voice synthesis infrastructure"
        ],
        "targetAudience": "Call centers, healthcare providers, hospitality brands, and gaming studios building voice interfaces.",
        "body": """## ElevenLabs Conversational AI: The Voice Barrier Shattered

ElevenLabs has solved the uncanny valley of automated voice telephony. With response times under 400 milliseconds, users cannot distinguish whether they are conversing with an onshore human agent or an AI voice model.
"""
    },
    {
        "slug": "surfer-ai",
        "name": "Surfer AI",
        "tagline": "Autonomous SEO research and long-form content generation designed to rank on Google's top positions.",
        "category": "Marketing & Contenu",
        "rating": 4.7,
        "pricingModel": "Payant",
        "priceStartingAt": "$29 / article",
        "websiteUrl": "https://surferseo.com",
        "badge": "SEO Benchmark",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Analyzes live top 10 search results for exact keyword distribution",
            "Generates 3,000+ word structured articles with tables and FAQs",
            "Direct export to WordPress, Google Docs, and Contentful"
        ],
        "cons": [
            "Pricing per article requires budget planning for high-volume sites",
            "Technical topics benefit from editorial fact-checking"
        ],
        "keyFeatures": [
            "Real-time Content Score optimization meter",
            "Competitor header and structural outline breakdown",
            "Anti-AI detection humanization algorithms",
            "Internal link recommendation engine"
        ],
        "targetAudience": "Affiliate publishers, SEO agencies, content marketers, and e-commerce stores wanting organic rankings.",
        "body": """## Surfer AI: Engineering Search Rankings with Precision

Surfer AI blends keyword data with language models to produce content that specifically satisfies Google's ranking factors. Rather than producing generic articles, it calculates exact heading densities, related NLP terms, and structural elements needed to outrank competitors.
"""
    },
    {
        "slug": "invideo-ai",
        "name": "InVideo AI",
        "tagline": "Autonomous text-to-video production studio generating narrated, edited, and captioned videos from prompts.",
        "category": "Marketing & Contenu",
        "rating": 4.8,
        "pricingModel": "Freemium",
        "priceStartingAt": "$25 / month",
        "websiteUrl": "https://invideo.io",
        "badge": "Video Leader",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Generates complete video with voiceover, B-roll, and subtitles in 60s",
            "Access to 16M+ premium iStock and Shutterstock stock media clips",
            "Intuitive text-prompt editing (e.g. 'change voiceover to British male')"
        ],
        "cons": [
            "Complex animation requests require manual timeline adjustments",
            "High-resolution exports consume monthly generation minutes"
        ],
        "keyFeatures": [
            "Multi-format auto-resizing (YouTube 16:9, TikTok/Reels 9:16)",
            "Dynamic animated subtitle styles with keyword highlights",
            "Human-like AI voice cloning and multi-language translation",
            "Collaborative cloud video editor for post-generation tweaking"
        ],
        "targetAudience": "Content creators, social media agencies, educators, and businesses scaling video marketing.",
        "body": """## InVideo AI: The Automated Video Production Factory

Creating video used to demand hours of scriptwriting, footage sourcing, voiceover recording, and timeline editing. InVideo AI condenses that entire pipeline into a single text prompt, outputting polished videos ready for YouTube, TikTok, or LinkedIn.
"""
    },
    {
        "slug": "klap-ai",
        "name": "Klap AI",
        "tagline": "Autonomous video repurposing agent extracting viral short clips with auto-captions from long YouTube videos.",
        "category": "Marketing & Contenu",
        "rating": 4.8,
        "pricingModel": "Freemium",
        "priceStartingAt": "$29 / month",
        "websiteUrl": "https://klap.app",
        "badge": "Viral Growth",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Identifies highest-engagement hooks in long podcasts and webinars",
            "Automated facial tracking keeps speakers centered in 9:16 vertical format",
            "Generates 10 viral TikToks/Shorts from a single YouTube URL in 2 minutes"
        ],
        "cons": [
            "Requires clear source video with good audio quality for best clip selection",
            "Custom branding templates available only on higher tier plans"
        ],
        "keyFeatures": [
            "AI Virality Score prediction for each generated clip",
            "Trendy dynamic auto-captions with emojis and color styling",
            "Smart silence removal and pacing optimization",
            "Direct 4K vertical rendering and scheduling"
        ],
        "targetAudience": "Podcasters, YouTubers, media agencies, coaches, and corporate communication teams.",
        "body": """## Klap AI: Turn 1 Hour of Video into 10 Viral Shorts

Klap analyzes video transcripts and pacing to detect key insights, punchlines, and emotional peaks in long-form recordings. It automatically reframes wide shots to vertical video, tracks speakers, and generates trendy animated captions.
"""
    },
    {
        "slug": "replit-agent",
        "name": "Replit Agent",
        "tagline": "Autonomous cloud software development agent that builds, tests, and deploys full-stack apps from natural language.",
        "category": "Code & Dev",
        "rating": 4.9,
        "pricingModel": "Payant",
        "priceStartingAt": "$25 / month",
        "websiteUrl": "https://replit.com",
        "badge": "Breakthrough Builder",
        "featured": True,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Installs dependencies, provisions databases, and deploys live in 1 click",
            "Creates database schemas (Postgres) and backend routes automatically",
            "Accessible from any browser with zero local machine configuration"
        ],
        "cons": [
            "Best suited for greenfield projects and prototypes rather than legacy apps",
            "Consumes Replit Core compute checkpoints during heavy iterations"
        ],
        "keyFeatures": [
            "End-to-end full-stack app scaffolding (React, Node, Postgres)",
            "Live interactive browser preview with error self-correction",
            "Instant global serverless hosting with custom domain support",
            "Real-time pair-programming and code inspection"
        ],
        "targetAudience": "Founders, product managers, non-technical creators, and developers prototyping new SaaS products.",
        "body": """## Replit Agent: Building Software Without Writing Boilerplate

Replit Agent takes natural language prompts like 'Build a SaaS dashboard for tracking customer churn' and autonomously designs the database schema, installs libraries, codes frontend components, tests endpoints, and deploys the working app to the web.
"""
    },
    {
        "slug": "cocounsel-casetext",
        "name": "CoCounsel (Casetext)",
        "tagline": "AI legal assistant performing verified legal research, document review, and deposition prep for attorneys.",
        "category": "Conformité & Juridique",
        "rating": 4.9,
        "pricingModel": "Payant",
        "priceStartingAt": "Custom Enterprise Quote",
        "websiteUrl": "https://casetext.com/cocounsel",
        "badge": "Legal Standard",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Backed by Thomson Reuters' comprehensive primary legal authority database",
            "Grounded citations ensure every argument references verified jurisprudence",
            "Processes multi-thousand-page discovery document batches in hours"
        ],
        "cons": [
            "Reserved exclusively for licensed legal practitioners and law firms",
            "Enterprise annual commitment pricing model"
        ],
        "keyFeatures": [
            "Autonomous contract compliance audit and risk identification",
            "Deposition preparation with suggested cross-examination questions",
            "Complex legal research queries with case law summaries",
            "Bank-grade security and confidentiality certifications"
        ],
        "targetAudience": "Attorneys, corporate general counsels, litigation departments, and judicial clerks.",
        "body": """## CoCounsel by Casetext: The AI Assistant Legal Teams Trust

Developed specifically for legal practice, CoCounsel connects advanced reasoning models with Thomson Reuters' database of statutes, case law, and regulations. It accelerates document review and legal research while maintaining strict accuracy.
"""
    },
    {
        "slug": "typeform-ai",
        "name": "Typeform AI",
        "tagline": "Conversational form and survey agent that dynamically adapts questions to qualify leads and increase completion.",
        "category": "Marketing & Contenu",
        "rating": 4.7,
        "pricingModel": "Freemium",
        "priceStartingAt": "$25 / month",
        "websiteUrl": "https://typeform.com",
        "badge": "Lead Conversion",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Beautiful interactive experience delivering 3.5x higher completion rates",
            "Generates complete multi-step surveys from a single topic description",
            "Native integrations with Slack, HubSpot, Zapier, and Google Sheets"
        ],
        "cons": [
            "Advanced logic branching requires pro tier subscriptions",
            "Response volume limits on starter plans"
        ],
        "keyFeatures": [
            "AI Form Builder generating optimized questions and options",
            "Smart conditional logic adapting to previous respondent answers",
            "Real-time response sentiment and theme analysis",
            "Embedded video and multimedia support"
        ],
        "targetAudience": "Marketing directors, product researchers, HR specialists, and agency founders collecting customer insights.",
        "body": """## Typeform AI: Transforming Static Forms into High-Converting Conversations

Typeform AI turns traditional boring surveys into engaging one-on-one dialogues. By adapting questions dynamically based on previous inputs, it qualifies inbound sales prospects while dramatically boosting form completion rates.
"""
    },
    {
        "slug": "jasper-ai-campaigns",
        "name": "Jasper AI",
        "tagline": "Autonomous enterprise marketing platform orchestrating multi-channel content aligned with company brand voice.",
        "category": "Marketing & Contenu",
        "rating": 4.7,
        "pricingModel": "Payant",
        "priceStartingAt": "$39 / month",
        "websiteUrl": "https://jasper.ai",
        "badge": "Brand Marketing",
        "featured": False,
        "aiActCompliant": True,
        "dateAdded": "2026-10-23",
        "pros": [
            "Learns company brand guidelines, product positioning, and tone of voice",
            "Campaigns feature produces blog posts, emails, and social ads simultaneously",
            "Robust Chrome extension brings Jasper directly into Google Docs and CMS"
        ],
        "cons": [
            "No free tier (7-day free trial only)",
            "Best value realized by teams producing high content volumes"
        ],
        "keyFeatures": [
            "Brand Voice memory training on company assets",
            "Turnkey marketing campaign generator for multi-asset launches",
            "Built-in SEO mode integration with Surfer",
            "Multi-language output in 30+ languages"
        ],
        "targetAudience": "Enterprise marketing departments, content teams, digital agencies, and growth-stage brands.",
        "body": """## Jasper AI: Scaling Enterprise Marketing Without Losing Brand Identity

Jasper has evolved from a simple copy generator into a coordinated marketing orchestration engine. By training on your company's actual style guides, past press releases, and product specs, Jasper ensures that every piece of generated content sounds authentically on-brand.
"""
    }
]

def main():
    AGENTS_DIR.mkdir(parents=True, exist_ok=True)
    created_count = 0

    for a in AGENTS:
        filename = f"{a['slug']}.md"
        filepath = AGENTS_DIR / filename

        pros_yaml = "\n".join([f'  - "{p}"' for p in a["pros"]])
        cons_yaml = "\n".join([f'  - "{c}"' for c in a["cons"]])
        feats_yaml = "\n".join([f'  - "{f}"' for f in a["keyFeatures"]])

        content = f"""---
name: "{a['name']}"
tagline: "{a['tagline']}"
category: "{a['category']}"
rating: {a['rating']}
pricingModel: "{a['pricingModel']}"
priceStartingAt: "{a['priceStartingAt']}"
websiteUrl: "{a['websiteUrl']}"
affiliateUrl: "{a['websiteUrl']}?ref=agentradar"
badge: "{a['badge']}"
featured: {str(a['featured']).lower()}
aiActCompliant: {str(a['aiActCompliant']).lower()}
dateAdded: "{a['dateAdded']}"
pros:
{pros_yaml}
cons:
{cons_yaml}
keyFeatures:
{feats_yaml}
targetAudience: "{a['targetAudience']}"
---

{a['body'].strip()}
"""
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        created_count += 1
        print(f"[OK] {a['name']} -> {filename}")

    print(f"\n[SUCCESS] Total {created_count} agents generated into {AGENTS_DIR}")

if __name__ == "__main__":
    main()
