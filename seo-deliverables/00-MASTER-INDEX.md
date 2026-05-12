# QUANT LAB USA — SEO & Lead-Gen Master Playbook

18 deliverables produced in parallel by 18 Opus agents on 2026-05-12. Total ~500 KB of polished, ready-to-act-on markdown.

## Index

| # | File | What's in it |
|---|------|--------------|
| 01 | [01-technical-seo-audit.md](01-technical-seo-audit.md) | Live audit of quantlabusa.dev — found stale Vercel deploy (every inner route 404), missing JSON-LD/phone/geo, 6 broken static assets. Prioritized P0/P1/P2 fix list with concrete code/config changes. |
| 02 | [02-content-gap-keywords.md](02-content-gap-keywords.md) | Current keyword footprint + 10 topic clusters / 70 missing keywords + 25-keyword priority matrix + 90-day rollout. |
| 03 | [03-competitor-analysis.md](03-competitor-analysis.md) | 12 competitor profiles (Atlanta dev shops + cyber firms + national Next.js shops) with exploitable weaknesses and the 5 "money keywords" to attack. |
| 04 | [04-backlink-opportunities.md](04-backlink-opportunities.md) | 42+ backlink opportunities across directories, guest posts, podcasts, HARO platforms — sorted by DA × ease. |
| 05 | [05-city-landing-pages.md](05-city-landing-pages.md) | 14 unique city landing pages (Macon, Atlanta, Augusta, Columbus, Savannah, Miami, Austin, Dallas, Chicago, Seattle, NYC, Charlotte, Nashville, SF) — each 250-350 words with locally-tuned angle. |
| 06 | [06-service-pages.md](06-service-pages.md) | 8 service landing pages (Custom CRM, Pentest, Web App Pentest, Stripe Integration, Trading Bot Dev, Licensing System, Next.js Dev, MITRE ATT&CK) — 400-600 words each with FAQs and internal-link map. |
| 07 | [07-case-studies.md](07-case-studies.md) | 6 case studies (Northcrest, HobbsPeak, Bridgepointe, ProtectWithBri, J5 Sales OS, Wilder Recovery) with situation/challenge/approach/solution/outcomes + draft client quotes. |
| 08 | [08-blog-topics.md](08-blog-topics.md) | 30 blog post ideas (10 TOFU / 10 MOFU / 10 BOFU) with titles, target keywords, outlines, internal links, quarterly sequencing. |
| 09 | [09-faq-content.md](09-faq-content.md) | 30 Q&A pairs across engagement, pricing, tech, security, pentest, differentiation — plus production-ready FAQPage JSON-LD schema. |
| 10 | [10-schema-jsonld.md](10-schema-jsonld.md) | 6 schema blocks (Organization+LocalBusiness, 8 Services, FAQPage, BreadcrumbList, WebSite SearchAction, Person) — production-ready JSON-LD with integration notes. |
| 11 | [11-meta-tags-rewrites.md](11-meta-tags-rewrites.md) | 15-page meta tag audit — current vs recommended titles/descriptions/OG. Found: 27-char homepage title, 97-char pentest title, REPLACE_WITH_VERIFICATION_TOKEN still in source. |
| 12 | [12-internal-linking.md](12-internal-linking.md) | Hub-and-spoke linking architecture across ~30 future pages — per-page link matrix with anchor text + pillar topic clusters. |
| 13 | [13-citations-directories.md](13-citations-directories.md) | 55+ citation sources with submission instructions + canonical NAP template. 10 quick-win free sources for this week. |
| 14 | [14-pr-outreach.md](14-pr-outreach.md) | 35 outlets across software-dev publications, cyber pubs, local Atlanta press, founder podcasts, technical newsletters. Master pitch template + 12-week cadence. |
| 15 | [15-lead-magnets.md](15-lead-magnets.md) | 7 lead-magnet briefs (Build vs Buy, Web App Pentest Checklist, Stripe Cost Calculator, CRM ROI Calculator, MITRE ATT&CK Worksheet, MVP→Prod Playbook, Trading Bot Checklist) with landing copy. |
| 16 | [16-email-drip.md](16-email-drip.md) | 5-email nurture sequence (Day 1, 3, 5, 8, 14) with subject A/Bs, founder-voice copy, and sequence settings. |
| 17 | [17-linkedin-outreach.md](17-linkedin-outreach.md) | 6 ICP sequences (CTO, SaaS founder, ops leader, security lead, quant trader, e-com owner) — connection + 3 follow-ups + Sales Nav filter combos. |
| 18 | [18-review-request.md](18-review-request.md) | Complete review-collection sequence — email + SMS + follow-up + "what to write" prompts + negative-review recovery + tracking schema + cadence rules. |

## Top 10 Highest-Impact Actions (in execution order)

### P0 — This Hour
1. **Redeploy quantlabusa.dev to fix the 404s.** `git push origin master && vercel --prod`. Every inner route currently 404s in production despite being defined in source. *Reference: 01-technical-seo-audit.md.*
2. **Replace `REPLACE_WITH_VERIFICATION_TOKEN` in `src/app/layout.tsx:124`** with the actual Google Search Console verification token. *Reference: 11-meta-tags-rewrites.md.*
3. **Build the missing static assets**: `/manifest.json`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/founder.jpg`, `/og-image.png` (1200×630). Commit `public/` and redeploy. *Reference: 01-technical-seo-audit.md.*

### P0 — This Week
4. **Rewrite homepage `<title>` and meta description** to include "Custom Software Development" + "Atlanta / Macon GA". Current title is 27 chars and contains zero commercial keywords. *Reference: 11-meta-tags-rewrites.md.*
5. **Ship the full Organization + LocalBusiness JSON-LD** with phone (+17706521282), address (Macon GA), geo coordinates, all 14 service-area cities. *Reference: 10-schema-jsonld.md.*
6. **Submit the 10 quick-win citations** — Bing Places, Apple Business, LinkedIn Company Page, Facebook Business, Yelp, BBB, Crunchbase, Yellow Pages, Foursquare, Wellfound. ~15 min each, all free. *Reference: 13-citations-directories.md.*
7. **Request reviews from 3 priority clients**: Northcrest (SMS), ProtectWithBri (personal text), HobbsPeak (SMS). Use the templates in 18-review-request.md.

### P1 — Weeks 2-4
8. **Deploy the 8 service landing pages** (drafts ready in 06-service-pages.md) — and the 6 case studies (07-case-studies.md). Internal-link them per 12-internal-linking.md. This is the biggest single SEO unlock.
9. **Deploy 5 of the 14 city landing pages first**: Macon, Atlanta, Augusta, Charlotte, Columbus — the highest-conversion picks per 05-city-landing-pages.md. Schema-tag each with `areaServed` matching that city.
10. **Stand up the first lead magnet — Stripe Integration Cost Calculator** — plus the 5-email drip in 16-email-drip.md. Drive traffic from Indie Hackers, r/SaaS, X founder network.

## The 5 "Money Keywords" (from competitor analysis)

1. `custom software development atlanta`
2. `atlanta penetration testing services`
3. `hire next.js developer` / `next.js development company`
4. `custom crm development atlanta`
5. `saas development company atlanta`

## The Pillar Page Recommendation

**Custom CRM Development: The Complete Guide** (`/blog/custom-crm-development-guide`)
- Maps to QuantLab's highest-margin service
- Supports 3 case studies (Northcrest, Bridgepointe, J5 Sales OS)
- Cross-links naturally with Stripe and Next.js pillars
- One pillar build immediately strengthens 3 commercial pages

---

*Each deliverable is standalone — open the file, follow the instructions, ship.*
