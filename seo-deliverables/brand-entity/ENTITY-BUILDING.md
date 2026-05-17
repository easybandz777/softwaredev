# QUANT LAB USA — Entity / Knowledge Graph Strategy

**The thesis.** Google ranks **entities**, not just pages. An entity is a thing Google has assigned a stable internal ID and connected to other things in its Knowledge Graph. Once QUANT LAB USA is an entity, every page on `quantlabusa.dev` inherits a layer of trust the URL alone could never earn, and we become eligible for: a **Knowledge Panel** in branded-search SERPs, sitelinks under our root domain, **brand-name autocomplete suggestions**, attribution in **AI overviews** (Google's SGE / ChatGPT / Perplexity), and a defensible moat against the well-established `quantlab` (Quantlab Financial, est. 1998) entity that owns the bare-term SERP.

**Honesty up front.** Becoming an entity Google recognizes is **earned over 6–18 months** from a layered set of signals. There is no API, no payment path, and no "submit to Knowledge Graph" form. Anyone selling you Knowledge Panel placement is selling fraud. What follows is the actual signal stack.

---

## The signal stack (in order of leverage)

Google's entity recognition pipeline weighs sources differently. Roughly, from highest to lowest weight:

1. **Wikidata** (machine-readable; Google licenses it directly)
2. **Wikipedia** (highest authority, hardest to qualify for — see "Honest notability" below)
3. **Crunchbase** (long-standing Knowledge Graph source, documented in Google's entity reconciliation papers)
4. **Verified Google Business Profile** (we already have one — `g.page/r/CbkSyF5E2JFtEBM`)
5. **LinkedIn Verified Company Page** (Google reads LinkedIn aggressively for business entities)
6. **GitHub Verified Organization** (for technical brands; verified domain binding is the key)
7. **Bluesky / Mastodon `rel="me"` domain verification** (lightweight but cleanly machine-readable)
8. **OpenCorporates / SEC EDGAR / state SOS records** (auto-derived from our Georgia SOS filing — we already exist here)
9. **Consistent `sameAs` graph across ≥15 owned profiles** (the `SAME_AS` array in `src/lib/constants/business.ts`)
10. **Branded search volume** (covered in `branded-search-strategy.md`)
11. **Co-citation in third-party listicles and roundups** (covered in `co-citation-strategy.md`)
12. **High-quality unstructured press coverage** (covered in `seo-deliverables/digital-pr/`)

Hit signals 3–9 within Q1. Layer 10–12 over Q2–Q3. Re-evaluate Wikidata in Q2 once enough of 3–12 exist that the entry won't get speedy-deleted. Wikipedia is a Q3 conversation at the earliest.

---

## Tactic 1 — Wikidata (most actionable, do this Q1)

Wikidata has a **much lower notability bar** than Wikipedia. The general principle is: a Wikidata entity is acceptable if it can be verified against at least one identifier-grade source. Our **Georgia Secretary of State filing #26086454** is an identifier-grade source. So is a verified Google Business Profile, a Crunchbase profile, and a domain we control.

**Status today.** No Wikidata entity exists for QUANT LAB USA INC.

**Action.** Use the full draft in `wikidata-draft.md` to submit a new Q-item via `wikidata.org/wiki/Special:NewItem`. William must create a Wikidata account first (free, no identity verification). The submission can sit unreviewed for weeks and that is fine — once the Q-item is live, every other property reference points back to it.

**Realism.** Even with the SOS filing as a source, a new business with no third-party press may have its Wikidata Q-item flagged for deletion under "Notability Q1: Q-items must be referenceable to at least one identifiable structure." Mitigation:

- Submit only **after** Crunchbase profile exists (so we can reference both SOS + Crunchbase + GBP).
- Use the minimum necessary properties — don't pad with weak claims.
- If deleted, the deletion is final but **doesn't bar re-creation later** once more sources accumulate.

---

## Tactic 2 — Wikipedia (be honest: probably not Q1, maybe Q3+)

**The honest reality.** Wikipedia's notability guidelines for organizations (WP:NCORP) require **multiple instances of significant, independent, secondary coverage in reliable sources**. Specifically:

- **Significant coverage**: more than passing mentions; full feature articles or sections.
- **Independent**: not press releases, not company-authored, not paid placements, not interviews where the company is the primary source.
- **Secondary**: analysis, not just reporting of facts. A news brief saying "QUANT LAB USA wins contract" doesn't qualify; a feature article analyzing the firm's approach does.
- **Reliable sources**: Wikipedia maintains a list (WP:RS/PS) of sources considered reliable. Local Macon newspapers count if independently editorial; trade press counts; a Medium post does not.

A founder-led firm in year-one almost never qualifies. Recently-founded companies are routinely deleted at AfD (Articles for Deletion) within hours of creation, even with paid PR campaigns supporting them.

**Conservative timeline.**

- **Year 1 (now → Nov 2026)**: do not attempt Wikipedia. Build the underlying coverage base.
- **Year 2 (Nov 2026 → Nov 2027)**: only if we have ≥3 instances of significant independent coverage from reliable sources (e.g., one feature in `Atlanta Business Chronicle`, one in a national trade publication like `The Information` or `Wired`, one in a regional outlet covering Georgia tech).
- **If we attempt**: do **not** create the article from the founder's account. Use the **Articles for Creation** (AfC) review process. AfC reviewers are volunteers who will give an honest pre-publication assessment. Submitting through AfC and getting declined is **not** a black mark; submitting directly and getting deleted at AfD is.

**Do not pay anyone to write a Wikipedia article for us.** Wikipedia's COI (conflict-of-interest) policies make paid editing detectable, and paid-edit articles get deleted on principle even when otherwise sourced well.

**What you can do today.** Edit the existing Wikipedia article on **Macon, Georgia** (specifically the "Economy" or "Technology" sections) to add one sentence about the local software industry if it doesn't already have one — **without naming QUANT LAB USA**. Becoming a productive Wikipedia editor with a clean history makes future article creation (or article-about-related-topics) much more credible. Aim for 10–15 small good-faith edits before you ever try to write about something you have a COI with.

---

## Tactic 3 — Crunchbase profile (do this Q1, week 1)

Crunchbase is one of Google's documented Knowledge Graph data partners. A complete Crunchbase profile is one of the strongest non-Wikipedia entity signals available.

**Steps.**

1. Go to `crunchbase.com/add/organization`.
2. Submit:
   - **Organization name**: `QUANT LAB USA INC`
   - **Operating name**: `QUANT LAB USA`
   - **Founded**: `2024-11-09`
   - **Headquarters**: `Macon, Georgia, United States`
   - **Categories**: `Software Development`, `Web Development`, `Cybersecurity`, `Penetration Testing`, `CRM`
   - **Website**: `https://quantlabusa.dev`
   - **Description**: canonical long bio from `SOCIAL-PROFILES-MASTER.md`
   - **Founders**: `William Beltz` (link to a Crunchbase person profile we create in step 4)
   - **Company type**: `For-Profit`
   - **Legal name**: `QUANT LAB USA INC`
   - **Logo**: 1:1 square, 400×400 minimum
3. Submit + wait. Approval typically takes 5–10 business days for clearly-real organizations with a registered SOS filing.
4. Create a **Crunchbase person profile** for William Beltz and link as founder.
5. Optional **paid Crunchbase Pro listing** ($X/mo) unlocks editor-controlled fields, faster updates, and contact information. **Recommend deferring** until there's measurable inbound from Crunchbase referral traffic (look in GA4 referrer report).

**Linkback step.** Once approved, add `https://www.crunchbase.com/organization/quant-lab-usa` to `SAME_AS` in `src/lib/constants/business.ts` and to `business-info.ts` socials.

---

## Tactic 4 — LinkedIn Verified Company Page (already nominally exists, verify it)

The LinkedIn Company Page at `linkedin.com/company/quantlabusa` is in `SAME_AS` but the verification status is unknown. Verification (the small checkmark) is now the single most important LinkedIn-side signal Google reads.

**Steps.**

1. Confirm the page exists and William has Admin access (Page admin panel → Settings → Admins).
2. Apply for **Verification** via Settings → Verification → Verify your company. LinkedIn supports two methods:
   - **Domain verification**: requires adding a DNS TXT record on `quantlabusa.dev`. Use this — it's the faster method and is independently re-verifiable by Google's crawler.
   - **Microsoft Entra Verified ID**: requires Microsoft Entra tenant. Skip unless we already have one.
3. Add the verification badge to: William's personal Experience entry → the QUANT LAB USA role. Verified roles on verified pages are an additional layered signal.

---

## Tactic 5 — `sameAs` graph (already partially built; finish in Q1)

The `sameAs` schema.org property is the **machine-readable equivalent of "all of these URLs refer to the same entity."** It lives in our Organization JSON-LD (already wired through `src/lib/schemas/organization.ts`).

Today the array contains **4 URLs**:
```ts
SAME_AS = [
  "https://linkedin.com/in/williambeltz",        // PERSONAL — wrong type
  "https://x.com/quantlabusa",
  "https://github.com/williambeltz",             // PERSONAL — wrong type
  "https://g.page/r/CbkSyF5E2JFtEBM",
]
```

**Two problems.** The current Organization `sameAs` includes the founder's *personal* LinkedIn and *personal* GitHub. Those are correct for `Person` JSON-LD but wrong for `Organization` — they bind Google's organization entity to a person URL, which can produce a noisy Knowledge Graph candidate that flips between "company" and "person" interpretations. Once the **company** LinkedIn page is verified and the **company** GitHub org is claimed, swap those in.

The fix is implemented in this package's update to `src/lib/business-info.ts` and `src/lib/constants/business.ts`. After the fix, the company-level `sameAs` should contain:

```
https://linkedin.com/company/quantlabusa
https://github.com/quantlabusa
https://x.com/quantlabusa
https://g.page/r/CbkSyF5E2JFtEBM
https://www.crunchbase.com/organization/quant-lab-usa   // once approved
https://www.wikidata.org/wiki/Q<assigned>                // once approved
https://www.youtube.com/@quantlabusa
https://www.facebook.com/quantlabusa
https://www.instagram.com/quantlabusa
https://bsky.app/profile/quantlabusa.dev                 // after domain verification
https://indieweb.social/@quantlabusa                     // or chosen Mastodon instance
https://dev.to/quantlabusa
https://quantlabusa.medium.com
https://quantlabusa.substack.com
```

The **Person** `sameAs` (in `personSchema()`) stays focused on William's identity:

```
https://linkedin.com/in/williambeltz
https://github.com/williambeltz
https://stackoverflow.com/users/<id>/william-beltz
https://news.ycombinator.com/user?id=williambeltz
https://www.indiehackers.com/williambeltz
https://www.crunchbase.com/person/william-beltz          // once approved
```

Google looks for **bidirectional** sameAs evidence: our JSON-LD says we own those URLs, AND each of those URLs links back to `https://quantlabusa.dev`. Both directions must be in place for the binding to land.

---

## Tactic 6 — Consistent entity naming across all platforms

Google's entity reconciliation pipeline penalizes name fragmentation. If `Crunchbase` says "QUANT LAB USA", `LinkedIn` says "QuantLab USA", `GitHub` says "QuantLab", and our site title says "QuantLab Software Solutions", Google has to decide whether these are all the same entity — and the decision may go against us.

**The audit** is in `src/lib/business-info.ts` already: `name` is `QUANT LAB USA`, `alternateNames` are `["Quant Lab USA", "QuantLab USA", "Quant Lab"]`. Going forward:

- **`QUANT LAB USA`** is the only string used in the `name` field of any third-party profile or schema.
- **`Quant Lab USA`**, **`QuantLab USA`**, **`QuantLab`**, **`Quant Lab`** are acceptable in body copy, headings, and casual mentions — and they go in `alternateName` JSON-LD.
- **The about page currently says "About QuantLab" and "QuantLab Software Solutions"** in several places. This package fixes those (see `src/app/about/page.tsx` updates).
- **The Navbar logo text says "QuantLab"**. This is a display choice (visual brand mark) and is fine to keep visually as `QuantLab` — but the `alt` text on the logo image and the `aria-label` should reference `QUANT LAB USA` so screen readers and crawlers see the canonical form.

---

## Tactic 7 — Domain verification across platforms

Wherever a platform offers domain verification, do it. Each verified-domain binding is a clean machine-readable `sameAs` signal Google's crawler can trust without natural-language parsing.

| Platform | Method | Status |
|---|---|---|
| Google Search Console | File method `/google9b5797777485b03b.html` | Active (per memory) |
| Google Business Profile | Postcard / phone | Verified (per memory) |
| LinkedIn | DNS TXT | TODO Q1 |
| GitHub Org | DNS TXT or HTML meta | TODO Q1 (after org claim) |
| Bluesky | DNS TXT `_atproto.quantlabusa.dev` | TODO Q1 (highest-leverage social) |
| Mastodon | `rel="me"` link from `quantlabusa.dev` → Mastodon profile | TODO Q1 |
| Facebook Business | Business Manager domain verification | TODO Q2 |
| ProductHunt Maker | Email on `@quantlabusa.dev` | Auto on signup |
| Crunchbase | Operator email match | TODO Q1 |

---

## Tactic 8 — Schema layering

Today we publish three JSON-LD blocks site-wide from `src/app/layout.tsx`:
- `Organization` + `LocalBusiness` + `ProfessionalService` (combined `@type` array)
- `Person` (William Beltz)
- `WebSite` (with `SearchAction` potentialAction)

This is already strong. Two upgrades worth doing in Q1:

1. **Add `BreadcrumbList` JSON-LD on every non-root page.** Already partially done — verify with `npm run monitor:schema` or by running pages through `validator.schema.org`.
2. **Add `knowsAbout` and `seeks` arrays to the Organization JSON-LD.** `knowsAbout` is already populated (12 entries). `seeks` would express "kinds of clients" and adds a relational signal. Example:
   ```ts
   seeks: [
     { "@type": "Demand", name: "Custom CRM Development Projects" },
     { "@type": "Demand", name: "Stripe Integration Engagements" },
     { "@type": "Demand", name: "Web Application Penetration Tests" },
   ]
   ```

---

## Measuring entity status

There's no Google API that says "you are an entity now". Practical proxies:

1. **Knowledge Panel candidate test.** Search `QUANT LAB USA` in incognito on `google.com` (US, English). Look for any Knowledge Panel on the right rail. Track this monthly. The first Knowledge Panel appearance is the strongest signal you've made it.
2. **Brand SERP composition.** Search `QUANT LAB USA`. Count: how many of the top 10 results are owned (`quantlabusa.dev/*`, our LinkedIn, our GitHub, our Crunchbase, our X)? Goal: 8+ of 10 by end of Q2.
3. **AI overviews.** Search a generic high-intent query (`who builds custom CRMs in Macon GA?`). Does the AI overview (if shown) mention `QUANT LAB USA`? If yes, we are being treated as a categorical entity, not just a page. The Vertex `WebSearch` / Perplexity / ChatGPT equivalents are all useful here too.
4. **`site:quantlabusa.dev` impressions over time** in Google Search Console — a rising "brand" impression baseline (queries containing "quantlab" or "quant lab") is the leading indicator that the entity is recognized.

Set a monthly cadence in `seo-deliverables/monitoring/` for these checks. The KPI is not rank, it's **entity recognition signal density**.

---

## What this is not

It is not lead-gen. It is **infrastructure**. The entity strategy doesn't generate phone calls in week 4. It compounds. The compounding return appears in months 6–12 when the same blog post we publish today ranks two pages higher than its peers because Google treats `quantlabusa.dev` as a known, trusted entity in the "custom software development" cluster — not just another domain.
