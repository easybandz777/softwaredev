# Community Strategy — QUANT LAB USA

**Premise.** Community participation builds the kind of trust that converts into branded search, inbound referrals, and high-quality co-citations — but **only** when the participation is genuine. Spam-style "drop a link, leave the thread" tactics damage the brand and trigger platform-level bans that are hard to reverse.

**The non-negotiable rule.** Read the rules of every community before posting. **Every single one.** The bans that hurt most are the ones for rules-violation, not for low-quality content. They are also the ones the founder will most regret. A 2026 ban from `r/startups` or Hacker News is essentially permanent — neither platform has a real appeal mechanism.

**This document covers** posting guidelines per platform that **build trust** rather than violate rules. Each platform has its own social norms; ignore them and you spend trust faster than you accumulate it. Don't treat any of these as a content distribution channel — treat them as places where you are a participating member who occasionally has something useful to share.

---

## Platform-by-platform guide

### Reddit — `r/startups`, `r/SaaS`, `r/Entrepreneur`, `r/cscareerquestions`, `r/webdev`, `r/devops`, `r/cybersecurity`, `r/AskNetsec`

**Account.** Post from `u/williambeltz` (founder, not brand). Reddit penalizes brand-named accounts at the user-flair level.

**Karma floor before posting.** 100+ comment karma minimum in each subreddit you intend to post in. Sub-100 accounts are filtered out by mods on most active dev subs.

**Self-promotion rule (the "9:1 rule").** For every promotional post or comment that references QUANT LAB USA, you must have made **at least 9 prior comments** in that subreddit that are purely helpful with no self-reference. Most active subreddits enforce a stricter ratio (`r/startups` is 10:1; `r/SaaS` is effectively no-promotion at the top level — only weekly threads).

**Per-subreddit policy.**

| Subreddit | What's allowed | What's banned |
|---|---|---|
| `r/startups` | Top-level posts about real founder problems (no link to your site). Comments about your experience. Sunday "Share Your Startup" weekly thread is the ONLY place to post a brand link. | Top-level posts with brand links. Plug-and-go comments. |
| `r/SaaS` | Helpful comments on others' posts. Monthly "Share Your Project" thread for brand links. | Any link in a top-level post. |
| `r/Entrepreneur` | Long-form posts about lessons learned. | Promotional content, "hire us" content, AMA threads about your service. |
| `r/cscareerquestions` | Helpful comments about hiring, interviewing, career moves. Sharing your firm in `Service Title` field (flair) when asked. | Linking to your services page in the body of any post or comment. |
| `r/webdev` | Posts about technical work you've shipped. Code snippets from real projects. The "Show Off" thread (weekly) is the right place to link a public project. | Top-level posts with brand-page links. |
| `r/devops` | Same as webdev — technical contributions only. | Same as webdev. |
| `r/cybersecurity` | Technical writeups, methodology posts, OSS releases. | Vendor pitches. Highly strict mod team. |
| `r/AskNetsec` | Answering questions with technical specificity. | Mentioning your firm in any answer unless explicitly asked. |

**The right Reddit comment pattern**:
1. Read the post fully.
2. Add a specific observation or correction backed by real experience.
3. Reference QUANT LAB USA **only** if it directly answers the user's question and only **once** per thread.
4. Include a `Disclosure: I run quantlabusa.dev` line at the end of any comment that references our work. This is the **single most respected pattern on Reddit** — full disclosure earns more trust than slick anonymity ever has.

**Avoid.** Reddit "competition mentions" — never comment on a thread asking "should I hire X or Y?" with "actually consider us." That pattern is universally hated and gets you reported within minutes.

---

### Hacker News — `news.ycombinator.com`

**Account.** `williambeltz`. Single account, never a "shill" alt.

**The risk.** Hacker News has the lowest-tolerance moderator team of any platform we participate in. A single self-promotional pattern can get an account "shadow-banned" (your posts still appear to you but no one else sees them). This state is detectable via `news.ycombinator.com/showdead` from an incognito window. There is no formal appeal — your only path back is to email `hn@ycombinator.com` with a polite, specific apology and a commitment.

**What's allowed.**

1. **Submit your own blog posts** under "Show HN" — but only if the post is genuinely about a thing built, not a marketing piece. "Show HN: I built an OAuth-debugging CLI" is fine. "Show HN: Our agency offers OAuth integration services" is not.
2. **Comment on threads** in your area of expertise (Stripe integration, Next.js, pentest methodology, AI agent UX). Specific, helpful, no link to your site.
3. **Reply to questions in others' Show HN posts** where you have direct experience.

**What's banned (formally or de facto).**

1. **Submitting your own services-page URL.** Will be flagged within minutes; downvoted to invisibility; potentially gets the account shadow-banned.
2. **"Voting rings"** — having team members or friends upvote your posts. HN's anti-ring detection is sophisticated; rings are detected within hours.
3. **Replying with a brand mention more than ~1 time per multi-week period.** Even when context-appropriate, repeated brand mentions get flagged.

**The cadence.** Aim for 1 Show HN submission per quarter at most. Aim for 3–10 thoughtful comments per week. Almost no submissions are needed for HN to be valuable — the comment graph is what builds the founder reputation and feeds the Person entity signal.

---

### IndieHackers — `indiehackers.com`

**Account.** `williambeltz`.

**The right pattern.** Post a **monthly milestone** for the QUANT LAB USA "product" entry. Milestones are short (1–3 sentences) and report a real number: revenue, customers, launches, hires. IH's algorithm rewards consistency more than virality — a 12-month run of monthly milestones builds far more reputation than two viral posts and silence.

**What works:**
- "Reached $X MRR for the first time. The unlock was Y."
- "Launched our 5th free tool. It's been downloaded N times in 7 days."
- "Hired our first contractor. Here's the contract template I used (link to a public Gist)."

**What doesn't:**
- Inspirational quotes
- "Looking for advice on X" without context
- Generic "we shipped a thing" with no specifics
- AI-generated text (IH editors will pull it from rotation)

**Cadence.** 1 milestone / month. 5–10 thoughtful comments / week on other founders' posts.

**Bonus.** Post a short founder-interview-style "How I started X" essay every 4–6 months. These have unusually long shelf life on IH and feed Google's `Person` entity association for William.

---

### GoRails community — `gorails.com/forum` (if a Rails project ever happens)

We aren't a Rails shop, so this is **only** relevant if/when a client project requires Rails. **Skip until then.** Listed because the user asked.

If a Rails project does come up, GoRails community has the highest signal-to-noise ratio of any Rails-specific community as of 2026. Pattern: ask actual technical questions, answer others' questions, never promote services. Brand mentions in answers tolerated only when directly answering "who do you recommend for X build" questions.

---

### Vercel Discord (`vercel.com/discord`)

**The right pattern.** Vercel's community Discord has channels for specific use cases: `#nextjs-help`, `#deployment`, `#performance`, `#serverless`, `#showcase`.

- **Help others** in `#nextjs-help` and `#deployment` — these are firehose channels where being consistently useful (even with 5-minute, off-the-cuff answers) is highly visible to the dedicated regulars.
- **Post launches** in `#showcase` only for genuinely new projects. Don't re-post the same site monthly.
- **Add the QUANT LAB USA flair** to your Discord profile (Vercel allows custom roles for active members).

**What doesn't work.** Direct messaging Vercel staff about partnerships, support escalation, or any pitch. There is a formal partner program at `vercel.com/partners` — go through that channel.

**Cadence.** Be active in 1 channel consistently for 8+ weeks. Don't sprinkle activity across 10 channels.

---

### Next.js Discord (`nextjs.org/discord`)

Functionally the same as Vercel Discord but with a stronger contributor population. Same pattern. Same disclosure norm (mention your firm only in answers where it's directly relevant + always with a disclosure).

---

### dev.to community

dev.to is **both** a content syndication channel and a community. The community side:

- **Comment on others' posts** — thoughtful comments on dev.to are surprisingly impactful because the comment graph is much smaller than HN's.
- **Use the `#discuss` tag** for prompt questions when launching something new — e.g. "What's your favorite pentest reporting tool?" — and engage with every answer.
- **Tag your own posts** with up to 4 relevant tags (`#nextjs`, `#stripe`, `#security`, `#webdev`). 3–4 strong tags > 8 weak ones.
- **Set `canonical_url`** in every post frontmatter pointing back to `quantlabusa.dev/blog/<slug>`. dev.to honors this.

**Cadence.** 1 syndicated post / month (mirror from the main blog). 5 comments / week on other posts.

---

### Stack Overflow

**Account.** `stackoverflow.com/users/<id>/william-beltz` once claimed.

**The right pattern.** Answer questions. That is the only respected pattern on Stack Overflow. Posting your own questions just to answer them ("self-answer") is allowed in spirit (the platform explicitly endorses it for canonical Q&As) but feels promotional unless the question is genuinely novel.

**What works:**
- Answer questions in tags you have deep expertise in: `next.js`, `stripe-payments`, `stripe-connect`, `web-scraping`, `penetration-testing`, `mitre-att-ck`, `crm`, `nextjs-app-router`.
- Include a one-line bio link to `quantlabusa.dev` in your About Me — that's the entity binding.
- Edit other users' answers to fix typos or add updated information — this builds reputation faster than asking new questions.

**What doesn't work:**
- Linking to your services pages from inside answers.
- Mentioning your firm in answer bodies.

**Cadence.** No required volume. 1 thoughtful answer per month is fine. The goal is presence + bio link, not virality.

---

### LinkedIn (covered in `founder-personal-brand.md`)

Cross-reference: LinkedIn is the strongest community for B2B founder presence in 2026. See that doc for cadence.

The one community-specific note: **engage in LinkedIn comments**, not just posts. Comments on others' posts are 5–10× more visible than new posts (LinkedIn's algorithm pushes the post + your comment into your second-degree network).

---

### Twitter / X — `x.com/quantlabusa` (brand) + `x.com/williambeltz` (founder, if claimed)

**The reality in 2026.** Organic reach for technical content on X has collapsed compared to 2022. We participate primarily for entity-graph reasons (`sameAs` binding), not for community building.

**Light cadence.** Repost the weekly LinkedIn post (manually, not auto-cross-posted — the formatting will be wrong otherwise). Reply to 1–2 high-traffic dev community posts per week. Don't optimize.

**What we don't do:** thread-bait, engagement farming, ghostwriter-style content, AI-generated posts.

---

### Bluesky — `quantlabusa.dev` (after domain handle verification)

Bluesky's dev community is smaller than X's was in 2018 but high-signal in 2026. Use it the same way the early Twitter dev community worked — share specific technical observations, reply to other dev posts, follow ~200 accounts you actually want to read.

**Cadence.** Mirror the LinkedIn / X weekly post. Add 1 reply-style comment per workday.

---

### Mastodon — `@quantlabusa@indieweb.social` (or chosen instance)

Smaller still than Bluesky. Worth being on because the `rel="me"` verification is a clean entity signal and a non-trivial fraction of the InfoSec community lives there.

**Cadence.** Light. Cross-post from LinkedIn; reply if engaged.

---

## What we never do, anywhere

- **Buy engagement.** Detectable. Long-term damaging.
- **Use ghost-writing services that imitate the founder's voice.** Same.
- **Engagement pods** (groups that mutually like/comment to game algorithms). Detectable on LinkedIn and X.
- **Astroturfing** — creating fake accounts to recommend our services. Detectable, illegal in some jurisdictions, brand-killing if uncovered.
- **Pay for an "influencer" to "casually mention" us** without disclosure. Disclosure-free paid endorsement is an FTC violation. Don't.
- **Run drip-DM campaigns** on LinkedIn / Twitter / Reddit. Universally hated. Sometimes a TOS violation.

---

## Time budget

The community plan totals approximately:

| Activity | Frequency | Time |
|---|---|---|
| LinkedIn (1 post + 5 comments / week) | Weekly | 90 min |
| Friday Shipping Notes newsletter | Weekly | 30 min |
| Reddit (5–10 helpful comments / week) | Weekly | 60 min |
| Hacker News (3–10 comments / week, 0–1 Show HN / quarter) | Weekly | 30 min |
| IndieHackers (1 milestone / month, 5 comments / week) | Monthly + weekly | 30 min |
| Vercel + Next.js Discords (active in 1 channel) | Weekly | 30 min |
| dev.to (1 syndication post / month + 5 comments / week) | Weekly | 30 min |
| Stack Overflow (1 answer / month) | Monthly | 15 min |
| Bluesky + Mastodon + X cross-post | Weekly | 15 min |

**Total**: ~5 hours / week, fully consistent with the `founder-personal-brand.md` cap.

When a given week is impossible, skip and resume the following week. **Do not double up.**

---

## Measurement

Monthly check, recorded in `seo-deliverables/monitoring/community-tracker.md` (file to create):

1. Net karma growth on Reddit (`u/williambeltz` karma delta).
2. HN average comment score in the last 30 days.
3. IH milestone-rotation appearances (front page tracking, manual count).
4. dev.to follower count + post performance.
5. Source-attribution in GA4 referral report for each platform (raw click count).
6. Branded-search impressions from Search Console (cross-reference; community work is upstream of this metric).

Cut platforms that consistently fail to generate either (a) measurable referral traffic or (b) qualitative inbound (someone messaging the founder saying "saw your comment on X"). Doubling down on 2 working platforms beats sprawling across 8.
