# Editorial workspace

`archive/` preserves the 28 profiles from before the credibility correction. These files contain unverified claims and fabricated referral parameters. They are reference material for rewriting, **not approved profiles**. Nothing in this directory is loaded by Astro, published under `public/`, or included in RSS.

`drafts/` contains research briefs created manually or by the manual GitHub workflow. No workflow commits content or publishes a brief.

## Publish a documentary profile

1. Consult the actual publisher product page and pricing documentation. Record the source URLs and consultation date; do not derive domains from product names.
2. Write a modest summary with capabilities traceable to those pages. Separate proposed evaluation questions from any factual product claim.
3. Do not claim hands-on tests, scores, compliance, user reviews, savings, or measured ROI without evidence. The current schema deliberately has no rating or compliance field.
4. Create a Markdown file in `src/content/agents/` following a current profile. The strict schema requires official sources, a pricing link and valid non-future dates. `lastReviewed` means sources were consulted; never set it merely because a build ran.
5. Review the profile and run `npm run check`, `npm test` and `npm run build`. Check the displayed page and sources before merging.
6. Keep unreviewed or insufficiently sourced profiles here, outside the public collection.

## Affiliate links

Profiles use direct publisher links by default. Never create a referral parameter yourself. Only after the owner has received actual approval and an assigned link may an `affiliate` object be added, containing `status: approved`, `url`, `programUrl` and `approvedAt`. Keep the approval evidence privately; do not commit private account information. The public disclosure and `rel=sponsored` are selected from this object. A listing by itself does not establish a partnership.

## Publisher information still required

The owner chose to supply their public identity and private contact email later. Do not infer consent from Git configuration or publish a personal email found there. Before resubmitting a finalized PartnerStack application, the owner must complete their publisher identity/contact details in `src/components/InfoView.astro` and the matching Network profile. No acceptance or audience figures are guaranteed.
