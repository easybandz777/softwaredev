# QUANT LAB USA — Social Profiles Master

**Purpose.** A single, authoritative list of every social platform where QUANT LAB USA (and William Beltz personally) should have a verified, consistent presence. Every profile listed here is part of the **`sameAs` graph** that tells Google "all of these URLs refer to the same real-world entity." Inconsistent NAP, conflicting handles, or partially-filled-out profiles fragment that signal.

**Canonical brand name (entity form).** `QUANT LAB USA` — three tokens, all-caps. The legal entity is `QUANT LAB USA INC`. Do not use "QuantLab", "Quant Lab USA", or "QuantLab USA" as the primary display form on a profile. They are allowed only as `alternateName` schema or in body copy.

**Canonical handle.** `@quantlabusa` (lowercase, no separators). Identical across **every** platform where this exact handle is available. If a platform's namespace is already taken by an unrelated user, use the documented fallback (in priority order):

1. `@quantlabusa` (preferred)
2. `@quantlabusainc` (when #1 is taken)
3. `@quant-lab-usa` (when separators are required)
4. `quantlabusa.dev` (only on platforms that accept a fully-qualified domain as a vanity URL, e.g. Bluesky)

**Canonical founder handle.** `@williambeltz` is preferred. Fallbacks: `@beltzwilliam`, `@billbeltz`, `@wbeltz`.

**Canonical NAP block** (copy/paste verbatim into every "About" field that allows it — never re-type):

```
QUANT LAB USA
Custom Software Development & Cybersecurity
Macon, GA 31201 · (770) 652-1282
beltz@quantlabusa.dev
https://quantlabusa.dev
```

**Canonical 160-char bio** (for Twitter/X, Bluesky, Threads, Instagram, TikTok, etc.):

```
Macon, GA custom software firm. Web apps, CRMs, Stripe, trading bots, and pentests aligned to MITRE ATT&CK. Founder-led builds. https://quantlabusa.dev
```

**Canonical long bio** (for LinkedIn, Crunchbase, Facebook About, GitHub Org, dev.to, Medium, etc.):

```
QUANT LAB USA is a Macon, Georgia–based custom software and cybersecurity firm founded in 2024 by William Beltz.

We build production-grade web and SaaS applications, custom CRMs, operations dashboards, Stripe integrations, licensing systems, and algorithmic trading bots — and we harden them with professional penetration testing aligned to MITRE ATT&CK.

Founder-led delivery, fixed-quote engagements, US-wide remote with on-site availability for major builds. Call (770) 652-1282 or email beltz@quantlabusa.dev.
```

**Link-in-bio destination.** Always `https://quantlabusa.dev` — never a link-aggregator (Linktree, Beacons, etc.). Aggregators dilute the `sameAs` signal because Google sees a redirect chain, not a direct reference. If a platform forces a single link slot and we want to send people to a content page, use `https://quantlabusa.dev/?utm_source=<platform>&utm_medium=social&utm_campaign=bio` so analytics can attribute traffic.

---

## Profile photo + banner specs

All platforms use **one** of two profile images, sourced from `public/`:

| Use | File | Size | Notes |
|---|---|---|---|
| Company profile photo (square avatar) | `public/logo-transparent.png` (re-export at 512×512) | 512×512 | Centered on solid dark background `#0a0a0f` (the site's `bg-quant-bg`) so it doesn't read as transparent on light-mode platforms. |
| Founder profile photo (square avatar) | `public/founder.jpg` | 800×800 | Cropped to head-and-shoulders, plain background. |
| Company banner / cover | (to create) `public/social/banner-quantlab.png` | 1500×500 (Twitter); resize per platform | Dark gradient with "QUANT LAB USA — Custom Software & Cybersecurity" and `quantlabusa.dev` in the lower-right safe zone. |
| Founder banner | (to create) `public/social/banner-beltz.png` | 1584×396 (LinkedIn) | "William Beltz · Founder, QUANT LAB USA · Building production-grade software." |

The banner files do not exist yet. **Action: create them once and re-export to every platform's required dimensions** — keep one master PSD/Figma so updates propagate.

---

## Tier-1 platforms (claim and fully complete this week)

These five carry the most entity weight for software-services Google queries and feed directly into Knowledge Graph candidate signals.

### 1. LinkedIn Company Page — `linkedin.com/company/quantlabusa`

| Field | Value |
|---|---|
| **URL handle** | `linkedin.com/company/quantlabusa` (claim if not already) |
| **Status** | Listed in `src/lib/constants/business.ts` SAME_AS — **verify the page actually exists and is claimed.** |
| **Display name** | `QUANT LAB USA` |
| **Tagline** | `Custom Software Development & Cybersecurity` |
| **Industry** | `IT Services and IT Consulting` (primary) + `Computer and Network Security` (secondary, when LinkedIn permits) |
| **Company size** | `2-10 employees` |
| **Headquarters** | `Macon, Georgia, United States` |
| **Year founded** | `2024` |
| **Specialties** | `Custom Software, Next.js Development, CRM Development, Stripe Integration, Penetration Testing, MITRE ATT&CK, Algorithmic Trading Bots, Web Application Security` |
| **About** | Use the canonical long bio above. |
| **Profile photo** | Company avatar (512×512) |
| **Banner** | `banner-quantlab.png` — LinkedIn requires 1128×191. |
| **Website** | `https://quantlabusa.dev` |
| **Phone** | `(770) 652-1282` |
| **Verification** | Verify the page via the LinkedIn admin's work email on the `quantlabusa.dev` domain. Verified pages get a checkmark and rank better in LinkedIn's people-search. |

### 2. LinkedIn — William Beltz (personal) — `linkedin.com/in/williambeltz`

| Field | Value |
|---|---|
| **URL handle** | `linkedin.com/in/williambeltz` (already in `SAME_AS`) |
| **Display name** | `William Beltz` |
| **Headline** | `Founder & Principal Engineer at QUANT LAB USA · Custom software, Stripe, CRMs, pentesting` |
| **Featured section** | Pin: (a) `quantlabusa.dev`, (b) the most recent blog post, (c) a case study, (d) the press kit. |
| **About** | Three short paragraphs: who/what, what we ship, how to engage. End with `(770) 652-1282 · beltz@quantlabusa.dev`. |
| **Experience** | Current role: `Founder & Principal Engineer · QUANT LAB USA · Nov 2024 – Present`. Write the description as one paragraph mirroring the canonical long bio. |
| **Profile photo** | Founder avatar |
| **Banner** | `banner-beltz.png` |
| **Custom URL** | Confirm `linkedin.com/in/williambeltz` — if taken/different, document the canonical here and update `business-info.ts`. |
| **Open to work** | Off. **Creator mode**: On (gives "Follow" as default CTA + dedicated content analytics). |

### 3. GitHub Organization — `github.com/quantlabusa`

| Field | Value |
|---|---|
| **URL handle** | `github.com/quantlabusa` (claim — currently we only have the founder's personal `github.com/williambeltz`) |
| **Display name** | `QUANT LAB USA` |
| **Bio** | `Macon, GA · Custom software, CRMs, Stripe, trading bots, and pentesting. https://quantlabusa.dev` |
| **Location** | `Macon, GA, USA` |
| **Email** | `beltz@quantlabusa.dev` (public on org page is fine) |
| **Profile photo** | Company avatar |
| **README** | Pin an **organization README** repo: `quantlabusa/.github` containing a `profile/README.md`. Include the canonical long bio, a list of public OSS, and a "Hire us" CTA linking to `/contact`. The README is the first thing Google's crawler sees on the org page. |
| **Pinned repos** | When public OSS exists, pin 6: prioritize tools we ship from `quantlabusa.dev/tools/`. |
| **Verified domain** | Verify `quantlabusa.dev` under Org Settings → Verified domains. This binds the GitHub org to the canonical site and is a high-quality entity signal. |

### 4. Twitter / X — `x.com/quantlabusa`

| Field | Value |
|---|---|
| **URL handle** | `x.com/quantlabusa` (already in `SAME_AS`) — verify it's actually claimed by us, not squatted. |
| **Display name** | `QUANT LAB USA` |
| **Bio (160 char)** | Use canonical 160-char bio above. |
| **Location** | `Macon, GA` |
| **Website** | `https://quantlabusa.dev` |
| **Profile photo** | Company avatar |
| **Banner** | 1500×500 banner |
| **Pinned tweet** | "We build production software in Macon, GA. CRMs, Stripe, trading bots, pentests. Founder-led. → quantlabusa.dev" with a link to a case study. |

### 5. Google Business Profile — `g.page/r/CbkSyF5E2JFtEBM` (already verified)

| Field | Value |
|---|---|
| **URL handle** | Already in `SAME_AS` and `business-info.ts`. |
| **Primary category** | `Software Company` (already set per memory). |
| **Secondary categories** | `Custom Software Development`, `Cybersecurity Service`, `Penetration Testing Service`, `Web Developer`, `IT Consultant`, `Mobile App Developer`. |
| **Description** | Canonical long bio. |
| **Services** | Mirror the `hasOfferCatalog` in Organization JSON-LD: Custom CRM Development, Penetration Testing Services, Web Application Pentest, Custom Stripe Integration, Algorithmic Trading Bot Development, Licensing System Development, Next.js Custom Software Development, MITRE ATT&CK Assessment. |
| **Photos** | Logo, founder headshot, three "behind the scenes" interior shots, three product screenshots. |
| **Q&A seeding** | Post 5–8 evergreen questions ("Do you work with non-Macon clients?", "What's your typical engagement timeline?", etc.) and answer them as the owner. |
| **Posts** | One Google Business Post per week minimum (use existing blog content as the source). |

---

## Tier-2 platforms (claim handles now, light bio, develop over Q1–Q2)

These platforms are valuable `sameAs` anchors but don't need active content yet. **The point of claiming today is to lock the handle and add the bio so the URL exists in the entity graph.**

### 6. YouTube — `youtube.com/@quantlabusa`

- Custom URL `@quantlabusa` available only after the channel hits 100 subscribers OR has a verified channel claim via Google account on `quantlabusa.dev` domain.
- Use canonical long bio in **About**. Set `https://quantlabusa.dev` in **Links** (max 14). Add LinkedIn, GitHub, X, GBP review URL.
- Channel art: 2560×1440 (safe area 1546×423).
- **Light cadence**: 1 video / month. Repurpose existing blog posts as "explainer" videos (5–10 min, narrated screen-recordings). Don't over-produce.

### 7. Facebook Business Page — `facebook.com/quantlabusa`

- Category: `Software Company` and `Cybersecurity Service`.
- **Page Username**: `@quantlabusa`.
- Use canonical long bio. Add full NAP (FB will display the address publicly only if you allow it — allow it).
- Banner: 1640×859.
- **Cadence**: 1 post/week (auto-cross-post from LinkedIn via Buffer or manually).

### 8. Instagram Business — `instagram.com/quantlabusa`

- Switch to **Professional → Business** account once claimed; pick category `Software Company`.
- Use canonical 160-char bio.
- Link in bio: `quantlabusa.dev`.
- **Cadence**: 1 post / 2 weeks. Content: screenshot carousels of shipped features + behind-the-scenes (no AI selfies, no engagement-bait reels).

### 9. TikTok Business — `tiktok.com/@quantlabusa`

- Switch to **Business Account**, category `Tech, Internet & Computers`.
- 80-char bio: `Macon, GA software firm. CRMs, Stripe, pentests. quantlabusa.dev`.
- **Cadence**: monthly — only if William wants to. TikTok presence helps the entity graph just by existing; you don't have to be the next dev influencer.

### 10. Threads — `threads.net/@quantlabusa`

- Auto-bridged from Instagram. Once IG is claimed, claim Threads and write a separate bio (Threads bios are independent from IG since 2024).
- **Cadence**: cross-post from X via the Buffer "Threads" channel.

### 11. Bluesky — `quantlabusa.bsky.social` and the **domain-verified handle `@quantlabusa.dev`**

- Bluesky supports domain-as-handle verification by adding a TXT record `_atproto.quantlabusa.dev` → `did=...`. **Do this** — it is one of the cleanest entity-binding signals available (the handle literally is the canonical domain).
- Bio: canonical 160-char.

### 12. Mastodon — `@quantlabusa@indieweb.social` (or self-hosted at `mastodon.quantlabusa.dev`)

- Pick an established instance (`indieweb.social`, `fosstodon.org`, or `mas.to` are good fits for a dev-services brand). Avoid `mastodon.social` (too generic, account drift risk).
- Add the **`rel="me"` link from `quantlabusa.dev` back to the Mastodon profile** — this turns the profile link green (verified) and is a documented entity-binding pattern.
- Bio: canonical 160-char.

### 13. Reddit — `u/quantlabusa` and `u/williambeltz`

- Reddit's link to our entity is weak (subreddits are public, no Org schema), but `u/quantlabusa` is worth claiming so squatters can't impersonate.
- **Do not post promotional content from the brand account.** William posts as `u/williambeltz` in dev/career subs and includes a flair "Founder, QUANT LAB USA" when subreddit rules allow. See `community-strategy.md`.

### 14. Stack Overflow — `stackoverflow.com/users/<id>/william-beltz`

- Stack Overflow doesn't allow a "company" account model. The William Beltz personal profile is the entity-binding object.
- **About me**: include the canonical long bio with a `https://quantlabusa.dev` link and a `mailto:beltz@quantlabusa.dev`.
- Add the **GitHub login linked** to the same email — Stack Overflow shows linked accounts publicly, which becomes a transitive sameAs signal.

### 15. Quora — `quora.com/profile/William-Beltz` (founder) + `quora.com/q/quantlabusa` (Space)

- Personal profile is the active surface. Create a Quora Space `QUANT LAB USA` and pin canonical long bio as the about.
- Answer 1–2 questions / month in the `Software Development`, `Stripe (payment processor)`, `Penetration Testing`, `CRM (Customer Relationship Management)` topics. Always link back to the most-relevant blog post on `quantlabusa.dev` (Quora allows it; don't drop a link on every answer or you'll get the spam flag).

### 16. Medium — `medium.com/@quantlabusa`

- Claim the publication name `QUANT LAB USA`.
- **Use canonical tags.** Every post we syndicate from `quantlabusa.dev` MUST set `rel="canonical"` back to the original — Medium provides a "Tell a story → Import a story" flow that does this automatically. We **never** publish a Medium post that doesn't exist on `quantlabusa.dev` first.

### 17. Substack — `quantlabusa.substack.com`

- Free tier, weekly cadence (when newsletter strategy launches; see `newsletter-strategy/`). For now: claim the URL, set up the publication, configure the canonical to `quantlabusa.dev/newsletter/<slug>` for every issue.

### 18. dev.to — `dev.to/quantlabusa` (org) + `dev.to/williambeltz` (personal)

- dev.to **organizations are the right entity surface** for a software firm. Claim the org, add personal account as admin, syndicate technical posts with `canonical_url: https://quantlabusa.dev/blog/<slug>` in the frontmatter. dev.to honors canonicals.

### 19. Hashnode — `quantlabusa.hashnode.dev` (and consider mapping `engineering.quantlabusa.dev` for a fully-branded blog mirror)

- Same model as dev.to. Hashnode honors canonical URLs and lets you map a custom subdomain — if we ever want an engineering blog separate from the marketing site, this is the cleanest infra.

### 20. ProductHunt — `producthunt.com/@williambeltz` (maker profile)

- Maker profile only — there is no "company" object until we launch a product.
- Link `quantlabusa.dev` in profile.
- **When we launch a free tool from `/tools/` publicly** (e.g. `schema-generator`, `stripe-webhook-tester`, `cron-expression-builder`, `owasp-checklist-app`), submit it as a ProductHunt launch. Each launch is a high-quality co-citation event (PH posts get indexed and ranked, often appearing in "best of" listicles).

### 21. IndieHackers — `indiehackers.com/williambeltz`

- Personal account. Link in profile to `quantlabusa.dev`.
- Set a "product" entry for `QUANT LAB USA` (yes, IH lets services be listed). Add the canonical long bio.
- **Cadence**: post 1 "milestone" / month — revenue, client signed, tool launched. IH milestones rank on the IH homepage and generate consistent referral traffic.

### 22. Hacker News — `news.ycombinator.com/user?id=williambeltz`

- HN doesn't have brand accounts. The personal HN profile becomes the entity-binding object: add `https://quantlabusa.dev` to the **about** field.
- See `community-strategy.md` for posting guidelines (HN is the highest-risk highest-reward platform).

---

## Tier-3 / opportunistic platforms

Claim handle, add minimal bio. Re-evaluate quarterly.

| Platform | Handle | Why |
|---|---|---|
| **Behance** | `behance.net/quantlabusa` | UX/visual portfolio surface; useful if we ever want to ship case-study mocks. |
| **AngelList / Wellfound** | `wellfound.com/company/quant-lab-usa` | Job-market entity signal; even a 0-jobs page lists us in startup directories. |
| **F6S** | `f6s.com/quantlabusa` | Startup directory with strong domain authority; minimum bio + logo. |
| **Crunchbase** | `crunchbase.com/organization/quant-lab-usa` | See `ENTITY-BUILDING.md` — Crunchbase is a documented Knowledge Graph source. |
| **G2** | `g2.com/products/quant-lab-usa` (as a services firm: `Sellers` profile) | Software-buyer search surface; legitimate even with zero reviews. |
| **Clutch.co** | `clutch.co/profile/quant-lab-usa` | Directory leader for B2B service buyers. Free profile, paid reviews (skip the paid; collect organic). |
| **GoodFirms** | `goodfirms.co/company/quant-lab-usa` | Similar to Clutch; second-tier authority. |
| **DesignRush** | `designrush.com/agency/profile/quant-lab-usa` | Directory; free profile. |
| **The Manifest** | `themanifest.com/us/web-developers/profile/quant-lab-usa` | Sister site to Clutch. |
| **Pitchbook** | (request claim) | Auto-listed; claim and correct. |
| **OpenCorporates** | `opencorporates.com/companies/us_ga/26086454` | Authoritative legal-entity source (uses Georgia SOS data). Already exists by virtue of GA SOS filing — find ours and verify it's correct. |
| **Wikidata** | See `wikidata-draft.md` | Most important Tier-3 (treat as Tier-2 actually) — Wikidata is a direct Knowledge Graph source. |

---

## Verification protocol

For each Tier-1 and Tier-2 platform:

1. **Claim** the handle from the founder account using `beltz@quantlabusa.dev`.
2. **Populate** every field per the spec above.
3. **Verify** by whatever method the platform supports (domain TXT, email on `quantlabusa.dev`, phone OTP). Verified profiles outrank unverified ones in their respective platform searches and are weighted higher by Google when forming entity associations.
4. **Cross-link**: add the URL to `src/lib/constants/business.ts` `SAME_AS`. Re-deploy. The Organization JSON-LD now references the new profile.
5. **Inbound link**: from the platform profile, link back to `https://quantlabusa.dev`. (This step makes the `sameAs` bidirectional, which is what Google actually looks for.)

When **all five Tier-1 platforms** are verified + cross-linked, run `npm run monitor:nap` (see `seo-deliverables/monitoring/`) to catch any NAP drift introduced during profile setup.

---

## Naming conventions — non-negotiable

- **Display name on every profile**: `QUANT LAB USA` (exact). No "QuantLab", no "Quant Lab USA", no "QuantLab USA". The other forms are alternates that go in JSON-LD `alternateName`, body copy, and casual social posts — never the entity name field.
- **Handle**: `@quantlabusa` (lowercase, no separators) wherever possible.
- **Email used to claim**: `beltz@quantlabusa.dev` (single point of recovery; configure 2FA app-based, not SMS).
- **Domain in bios**: always `quantlabusa.dev` — not `www.quantlabusa.dev`, not `https://quantlabusa.dev/` (no trailing slash in bio strings; the URL field can have it).

This is the most boring part of brand SEO. It also has the highest leverage. A consistent entity graph across 20+ profiles is what lets Google build a confident Knowledge Panel candidate for QUANT LAB USA — and the Knowledge Panel is what tips us from "ranked page" to "branded entity Google trusts."
