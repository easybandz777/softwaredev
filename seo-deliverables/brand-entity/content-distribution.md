# Content Distribution Checklist — QUANT LAB USA

**Purpose.** For every new blog post we publish on `quantlabusa.dev/blog/<slug>`, this is the **exact** distribution + syndication sequence with proper canonical handling. Run through every step; do not skip canonical declarations or you'll fragment the entity graph for that post and dilute the host page's authority.

**Single canonical rule.** The version on `quantlabusa.dev/blog/<slug>` is **always** the canonical. Every syndicated copy on a third-party platform MUST declare that canonical URL in its native canonical field. If a platform does not support canonical declarations, **do not syndicate to that platform** — the duplicate-content cost outweighs the reach gain.

**Cadence assumption.** We publish ~1 new long-form post per week (matches existing `seo-deliverables/content-calendars/`). Distribution per post runs over the following 14 days from publish.

---

## Pre-publish checklist (T-1 day before publish)

Run these the day before publish, when you can still make corrections without invalidating syndication timestamps.

- [ ] **Schema validation.** Open the post in dev. Validate Article JSON-LD at `validator.schema.org/`. Required fields: `headline`, `author.@type=Person`, `author.name`, `author.url`, `datePublished`, `dateModified`, `publisher.@type=Organization`, `publisher.@id` matching the global Organization `@id`.
- [ ] **Canonical URL self-reference.** `<link rel="canonical" href="https://quantlabusa.dev/blog/<slug>"/>` is present and matches the URL exactly (trailing slash, case).
- [ ] **OpenGraph image** is set, 1200×630, includes the post title overlay.
- [ ] **Twitter card** is `summary_large_image`.
- [ ] **Author byline** uses `<AuthorByline />` with William Beltz as author.
- [ ] **3 internal links** to related posts or service pages, anchor text descriptive.
- [ ] **1 outbound link** to an authoritative source (a relevant docs page, a referenced study, etc.). Posts with zero outbound links underperform — Google reads outbound linking as a quality signal.
- [ ] **Reading time** appears (4-min, 7-min, etc.).
- [ ] **FAQ section** at the bottom with 3–6 questions, marked up with FAQ JSON-LD.
- [ ] **Spell-check + grammar-check** with at least one human pass. (Don't ship grammarly-shaped AI prose.)

---

## Day 0 — publish

### Step 1 — Publish on `quantlabusa.dev/blog/<slug>`

- Push to `master`; Vercel deploys; verify the page is live and the structured data is valid.

### Step 2 — Add to internal sitemap

- `src/app/sitemap.ts` should auto-include via the blog index — verify the post slug appears in the sitemap.xml.

### Step 3 — RSS / `feed.xml`

- `src/app/feed.xml` auto-regenerates — verify the post appears in the RSS feed at `https://quantlabusa.dev/feed.xml`.

### Step 4 — Search Console: request indexing

- Open `search.google.com/search-console`, navigate to URL Inspection, paste `https://quantlabusa.dev/blog/<slug>`, click **Request Indexing**.
- This doesn't guarantee fast indexing but it does **enqueue** the URL for the next index batch (typically 1–24 hours).

### Step 5 — Email the newsletter

- Send the post (or an excerpt) to the QUANT LAB USA newsletter list via the Friday Shipping Notes weekly digest. Set `utm_source=newsletter&utm_medium=email&utm_campaign=blog-<slug>`.

---

## Day 0 — same-day syndication (canonical-respecting platforms only)

### Step 6 — LinkedIn personal post (William's account)

**Format.**
```
[Sharp opener — the most surprising sentence from the post, no clickbait.]

[2–3 paragraphs that summarize the thesis WITHOUT repeating the post verbatim.
Native LinkedIn content underperforms reposts; treat this as a teaser.]

Full version on the QUANT LAB USA blog:
https://quantlabusa.dev/blog/<slug>?utm_source=linkedin&utm_medium=social&utm_campaign=blog-<slug>

#tag1 #tag2 #tag3
```

- Post time: **Tuesday 8:30am ET** if publish day is Tuesday. Otherwise as close to that slot as possible.
- Pin the post to the William Beltz profile **Featured** section for the next 7 days.

### Step 7 — LinkedIn Company Page post (QUANT LAB USA page)

- Re-share the William Beltz post with a one-line company comment ("From William"). This is the company page's primary content cadence — don't write a separate post.

### Step 8 — X / Twitter — `x.com/quantlabusa`

**Format.** Single tweet, not a thread (threads have collapsed in 2026 algorithmically).
```
New: [one-sentence summary, ≤200 chars].

https://quantlabusa.dev/blog/<slug>?utm_source=twitter&utm_medium=social&utm_campaign=blog-<slug>
```

- Post immediately after LinkedIn.

### Step 9 — Bluesky — `quantlabusa.dev`

- Same text as X; rephrase the opener so it doesn't look auto-cross-posted.
- `?utm_source=bluesky&utm_medium=social&utm_campaign=blog-<slug>`.

### Step 10 — Mastodon — `@quantlabusa@indieweb.social`

- Same text; same UTM with `utm_source=mastodon`.

### Step 11 — Threads — `@quantlabusa`

- Same text; same UTM with `utm_source=threads`.

### Step 12 — Discord posts (Vercel + Next.js community Discords)

- ONLY if the post is technically substantive (a Next.js pattern, a Stripe integration, a pentest methodology). Don't post marketing-heavy content.
- Post in `#showcase` or the equivalent — **never** in `#help` channels.
- Honest framing: "Wrote up our approach to X — would love any pushback."

---

## Day 1 — community surfaces (cautious; rule-aware)

### Step 13 — Reddit weekly threads

- ONLY in the weekly "Share Your Project" / "Show Off" / "Self-Promotion Saturday" threads where rules explicitly allow brand links.
- Target subs depending on post topic:
  - Technical posts: `r/webdev` (weekly showoff), `r/devops` (monthly).
  - Founder posts: `r/startups` Sunday "Share Your Startup", `r/SaaS` monthly.
  - Security posts: `r/cybersecurity` weekly Friday discussion only.
- Format: 2-sentence summary + link. Engage with every reply.

### Step 14 — IndieHackers post (if a milestone)

- Post a related milestone, not the blog post itself.
- e.g., "Wrote our deepest piece yet on Stripe Connect onboarding — first day pulled in 12 inbound leads. Lesson: depth > breadth on the blog."

### Step 15 — Hacker News

- ONLY for posts where the title would honestly fit the HN audience.
- Submit under "Show HN" format if the post is about a thing we built. Otherwise standard submission.
- Submit between 7–9am ET on a weekday (peak HN front-page algorithm time).
- ONLY submit posts that genuinely earned it. **Maximum 1 HN submission per month**, even if multiple posts seem to qualify.

---

## Day 2–3 — full-canonical syndication

These platforms honor `canonical_url` in frontmatter. Republishing here gives us a second SERP listing for the same content (the third-party platform's authority + ours), with **zero duplicate-content cost** as long as canonical is set.

### Step 16 — dev.to — `dev.to/quantlabusa`

- Copy the full post body into dev.to's editor (or use their "Import from URL" tool).
- **Frontmatter requirement** (set in the editor, not the post body):
  ```yaml
  ---
  title: <exact post title>
  canonical_url: https://quantlabusa.dev/blog/<slug>
  tags: [tag1, tag2, tag3, tag4]
  cover_image: https://quantlabusa.dev/blog/<slug>/og.png
  ---
  ```
- Wait 24+ hours after the original publish before posting on dev.to — gives Google time to index the canonical first.
- Add a top-of-post note: "Originally published on the [QUANT LAB USA blog](<canonical>)" — soft but visible attribution.

### Step 17 — Hashnode — `quantlabusa.hashnode.dev`

- Same pattern; Hashnode honors canonical URLs via the post editor's "Original article URL" field.
- 24+ hour delay from publish.

### Step 18 — Medium — `medium.com/@quantlabusa`

- Use Medium's **"Import a story"** flow (Stories → Import a story → paste canonical URL). This automatically sets the canonical correctly.
- Do **not** copy-paste manually; manual copies don't set canonical and create duplicate-content drift.
- 48+ hour delay from publish.

---

## Day 7 — second wave

### Step 19 — LinkedIn re-share with a comment

- One week post-publish, comment on your own post with a one-sentence "the most-interesting reply this got was X." This bumps the post back into followers' feeds via LinkedIn's "trending in your network" surface.

### Step 20 — Update with one new data point

- Edit the post to add a "Update [date]: X" note at the top with new information learned in the week. Re-deploy. Modified date now reflects update; Google re-crawls and often re-evaluates ranking.

---

## Day 14 — second-wave syndication (rare)

### Step 21 — Email outreach to anyone quoted or referenced

- If the post quotes a specific person or tool, email the person/team with a "we mentioned you here, happy to take feedback." Soft, not asking for a link. ~10% reply with a share or follow-up; ~3% link from their own site.

### Step 22 — Substack newsletter excerpt (if Substack live)

- Post the excerpt to `quantlabusa.substack.com` with full canonical to `quantlabusa.dev/blog/<slug>`. Light commentary; ~300-word excerpt.

---

## What we don't do

- **Auto-syndicate to platforms that don't support `canonical_url`.** No Wattpad, no Tumblr, no auto-tweet-thread services that scrape into Medium.
- **Re-post the same content with different titles to game indexing.** Detectable; gets pages de-indexed.
- **Use IFTTT / Zapier to bulk-cross-post.** Formatting breaks; platform-native tone is lost.
- **Share the same post to LinkedIn more than twice.** Algorithm penalizes repeat content from the same author.
- **Spam Slack workspaces with the link.** Different platform, same anti-pattern as Reddit.
- **Submit the post to listicle-style "best of" newsletters as paid placement.** Wait for organic inclusion via the co-citation strategy in `co-citation-strategy.md`.

---

## UTM convention

Every external link to a blog post should carry UTMs so we can attribute incoming traffic accurately in GA4.

```
?utm_source=<platform>&utm_medium=<medium>&utm_campaign=blog-<slug>
```

| Platform | utm_source | utm_medium |
|---|---|---|
| LinkedIn personal | `linkedin` | `social` |
| LinkedIn Company | `linkedin-company` | `social` |
| X / Twitter | `twitter` | `social` |
| Bluesky | `bluesky` | `social` |
| Mastodon | `mastodon` | `social` |
| Threads | `threads` | `social` |
| Reddit | `reddit` | `social` |
| Hacker News | `hackernews` | `social` |
| IndieHackers | `indiehackers` | `social` |
| dev.to | `devto` | `syndication` |
| Hashnode | `hashnode` | `syndication` |
| Medium | `medium` | `syndication` |
| Newsletter | `newsletter` | `email` |
| Substack | `substack` | `email` |
| Discord (Vercel/Next.js) | `discord-vercel` / `discord-nextjs` | `community` |

---

## Per-post tracking sheet

For each post, fill in `seo-deliverables/content-calendars/distribution-log-<yyyy-mm>.md` with:

- Post slug, publish date, primary keyword.
- Date + URL for each syndication.
- Day-14 click count (GA4) by source.
- Day-30 indexed status for each syndicated copy (check via `site:dev.to <slug>` etc.).
- Day-30 backlink count (`ahrefs.com/backlink-checker` for the canonical URL).
- Day-90 Google rank for the primary keyword (Search Console position).

A post is "successful" by the 90-day mark when:
- Indexed on at least 3 platforms (canonical + 2 syndications).
- At least 3 referring domains via earned links.
- Top-20 position in Search Console for the target keyword.

Posts that miss all three by day 90 get a retrospective: was the topic wrong, was the angle wrong, was the distribution wrong? Update the calendar accordingly.
