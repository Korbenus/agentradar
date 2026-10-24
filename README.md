# AgentRadar

Independent directory of AI tools for freelancers and small business teams, built with Astro and Tailwind and hosted on Cloudflare Pages.

## Editorial scope

The current selection contains eight documentary profiles based on linked official publisher pages, consulted on 24 October 2026. English and French profile text is provided; the other language navigation surfaces explicitly point to English/French profile coverage. These are not hands-on reviews, performance benchmarks or compliance certifications.

The previous 28 profiles are retained in `editorial/archive/`, outside the published collection. They require rewriting and verification before reuse. No current profile declares an active affiliate relationship, audience size or measured ROI.

## Develop and verify

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run test:site
npm run preview
```

## Editorial intake

```sh
python scripts/radar.py --name "Product to research" --source-url "https://publisher.example/product"
```

This creates an unpublished research brief in `editorial/drafts/`. The workflow is manual, has read-only repository permissions and uploads the brief for review. It does not call a model, invent a domain, create a referral link or publish anything. The legacy bulk-generation entry point uses the same safe intake.

See [the editorial process](editorial/README.md) before adding or modifying profiles or affiliate links. Public methodology, about, site information and privacy pages are available from the footer.

## Before submitting an affiliate application

The public publisher identity and private contact email remain to be provided by the owner. Complete those details and accurately describe the actual audience and acquisition channels. A working directory and complete profile do not guarantee approval by any affiliate program.

## Deployment

Cloudflare Pages builds with `npm run build`, with `dist` as the output directory. No API key is required for the public site. Proposed content should be reviewed on a branch before merging to the production branch.
