# 47 - Broken-Link Replacement (Ahrefs / SemRush Workflow)

- **Target sites:** Multiple - identified via Ahrefs broken-backlinks tool or SemRush
- **Contact:** Per-page; usually the page owner via contact form or whois
- **DR/DA:** Varies B (DR 60+) to A (DR 80+)
- **Topical fit:** Replace broken pentest / software dev / Stripe / payment-integration related links
- **Achievability:** Medium - high-skill pitch; 1 in 3-5 hit rate when execution is good
- **Time-to-link:** 30-90 days
- **What we want:** 5-10 dofollow link insertions on high-DR resource pages
- **Value to page owner: Free fix for a broken link in their resource (genuine value, not transactional ask)

---

## STEP 1 - Source the targets (manual research, ~3-4 hours)

**Option A - Ahrefs (preferred):**
1. Sign up for Ahrefs trial or use existing seat
2. Open Site Explorer for a defunct competitor or shut-down dev firm domain (suggestions: dev firms that announced acquisitions in 2024-2025, OSS projects abandoned in 2024+, blog domains showing 404 in Wayback)
3. Pull their Backlinks report → filter by DR 50+, "broken" status
4. Export the list

**Option B - Free / Manual:**
1. Use https://search.marginalia.nu or similar low-noise search for "best stripe integration tutorial" or "best pentest report template"
2. Visit each result; identify pages that link out to deprecated / 404 / parking-page tutorials
3. Use httpstatus.io to confirm the linked URL returns 404 or moved
4. Build a manual target list

**Bill should aim for 25-50 high-DR broken-backlink opportunities to start.** Most will not respond. The math works if you pitch in volume with discipline.

---

## STEP 2 - Pitch template

**To:** Page owner / editor
**Subject (pick one):**
- A: Broken link on your [Page Title]
- B: Heads up - broken link on [Page Title]
- C: Quick note: [Page Title] has a 404

---

Hi [First Name],

I was reading your [Page Title] at [URL] - the section on [SPECIFIC SECTION] is genuinely the best summary of [TOPIC] I have found this year.

One small flag: the link you have to [BROKEN URL with anchor text "[Anchor Text]"] returns a 404. Looks like [Original site/firm] [shut down / migrated / restructured] in [YEAR].

If you are open to replacing it, I run QUANT LAB USA (Macon, GA software firm) and we published a similar [resource type] at [QL REPLACEMENT URL] that covers [SPECIFIC THINGS THE ORIGINAL COVERED]:

[2-3 bullet points naming specific things in YOUR resource]

No pressure - if a different resource fits better, I genuinely just wanted to flag the broken link. Either way, your roundup is useful.

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## STEP 3 - Resources QL has that can serve as replacement candidates

To be a credible replacement, QL needs resource pages that match common broken-link patterns. Build these on quantlabusa.dev/resources/ if not already live:

- /resources/stripe-webhook-idempotency-guide
- /resources/postgres-rls-multi-tenant-guide
- /resources/mitre-attack-pentest-template
- /resources/saas-architecture-teardown
- /resources/service-area-map-svg-pattern

Each should be substantive (2,000+ words), well-cited, with downloadable assets where possible.

---

## STEP 4 - Track and harvest

Per the same workflow as rank 41 - max 5 broken-link pitches per week. Each pitch is per-page personalized.

---

## PRE-SEND CHECKLIST (per pitch)
- [ ] Confirm the broken link is actually broken (httpstatus.io check)
- [ ] Page DR is 50+
- [ ] You have a real replacement resource that covers what the original covered
- [ ] Reference a specific section of the target page (not generic compliment)
- [ ] Honest framing - "no pressure if a different resource fits better"
- [ ] Day +14 follow-up if no response
- [ ] Do not bug after Day +30 if still silent
