# Founder Personal Brand — William Beltz

**Why this exists.** Google's E-E-A-T evaluation (Experience, Expertise, Authoritativeness, Trustworthiness) reads founder identity as a major component of company trust. A founder with a recognizable presence — a verified Person entity in the Knowledge Graph, a body of public writing, and a stable network of associations — measurably lifts the host firm's entity weight. The founder is the **proof** that the firm is a real thing.

**Constraint.** This is a **sustainable** plan — built for a founder who is also writing code, delivering client engagements, and running the business. The total time investment is **3–5 hours per week**, not a part-time job.

If a section here can't be sustained at 5 hours/week, it gets cut. Sustainability beats peak output every single time.

---

## The bones — 3 hours/week, every week, no exceptions

These three commitments are the minimum viable founder-brand. Everything else in this document is optional layering.

### 1. **One LinkedIn post per week** — 60 minutes

A real, specific, useful technical observation drawn from the week's work. Posts at 8:30am ET on **Tuesday** (LinkedIn's strongest organic-distribution window for technical content in 2026).

**Post format (use this exactly until something better is proven):**
```
[Specific observation in one line — no rhetorical openers.]

[3–6 paragraphs of context. Concrete details, named tools, real numbers
where shareable. Conversational, no jargon padding.]

[One question to the reader, optional.]

#tag1 #tag2 #tag3   (3 max — more reduces reach in 2026)
```

**Topic pool** (rotate; never post the same kind twice in a row):
- Something that broke and how it was fixed
- A tradeoff between two approaches with a verdict
- A pattern noticed across several clients
- A short tutorial extracted from real code
- A take on a recently-trending tool (be specific about when it does / doesn't fit)

**What we don't post:**
- Inspirational quotes
- "Hot takes" without specific evidence
- AI-generated text
- Anything that wouldn't be useful to read

**Measurement.** After 12 weeks, the top 25% of posts by engagement reveal the format and topic that resonate. Double down. Cut the bottom 25%. Repeat at 24 weeks.

### 2. **One blog post per month on `quantlabusa.dev/blog/`** — 90 minutes

The monthly post is the **canonical** version of one of the four weekly LinkedIn posts that got the strongest engagement. Expanded to 1,500–3,000 words. Republished verbatim (with canonical) to dev.to, Hashnode, and Medium per `content-distribution.md`.

Author byline is **William Beltz**, linked to `/about` and to LinkedIn. The byline IS the Person entity binding signal.

### 3. **One thoughtful comment on someone else's post per workday** — 5 minutes × 5 days = 25 minutes/week

Specifically:
- One comment per weekday, on a post by someone you genuinely respect and would want to know.
- "Thoughtful" = adds context, asks a real question, or shares one specific counter-example. Not "great post!" not emoji.
- Targets: 5 LinkedIn connections you want to deepen + the day's top trending posts in the `Software Development` / `Cybersecurity` topics.

**Why this matters more than another post.** Comments compound. A thoughtful comment on a high-traffic post puts your name in front of strangers in their highest-trust context (someone they already follow). Over 12 months at 5 comments/week, that's 260 thoughtful comments = roughly 2,000–8,000 net-new profile views.

---

## The layers — pick 2 of 4, drop the rest

### Layer A: **One podcast appearance per quarter** — 4 hours per appearance

See `branded-search-strategy.md` Tactic 3 for target list. Roughly:
- 30 min researching the host + their listener.
- 60 min pre-call prep.
- 60 min recording.
- 30 min cross-promotion at release.
- Buffer for inbound follow-ups.

Total: ~4 hours per appearance, 4 per year = 16 hours / year = **0.3 hours/week amortized**.

### Layer B: **One meetup talk per quarter** — 12 hours per talk

See `branded-search-strategy.md` Tactic 2. Roughly:
- 4 hours building the talk (real time, not in-flow time).
- 6 hours practicing.
- 2 hours travel + delivery.

Total: ~12 hours per talk, 4 per year = 48 hours / year = **~1 hour/week amortized**.

This is the highest-ROI layer if William enjoys it. Skip it if presenting drains him; the goal is sustainability.

### Layer C: **A personal site at `williambeltz.com` (or subdomain `william.quantlabusa.dev`)** — 8 hours setup, 30 min/month maintenance

Why: a personal site creates a Person entity surface independent of the company. If we ever want to launch a second product or write outside the QUANT LAB USA umbrella, the surface already exists.

**Minimum viable**:
- Single page.
- Headshot, one-paragraph bio, link to QUANT LAB USA, link to current writing, links to social.
- Person JSON-LD with `sameAs` to LinkedIn, GitHub, X, etc.
- `rel="me"` link to Mastodon for cross-verification.

**Don't** build a full personal blog — duplicates the company blog and dilutes signal. Use the personal site purely as a Person-entity anchor and a CV-equivalent.

**Defer** to Q2. Until then, `quantlabusa.dev/about` serves the Person-entity role adequately.

### Layer D: **Open source one tool we built internally** — variable, scope to ~20 hours total

Pick **one** small internal utility (a deduplication script, a Stripe webhook tester, a cron expression validator) and open-source it under `github.com/quantlabusa/<tool>` with a clean README, good tests, and a `LICENSE` (MIT).

**Why**: a public GitHub repo with stars is a Person entity signal (`schema.org/Person` has an `award`-like property `subjectOf` for code, and GitHub's structured data binds the repo to the maintainer). Stars are also social proof on LinkedIn, in pitches, and in branded SERPs.

**Defer** if no internal utility is meaningfully shippable. Don't build an OSS project FOR personal-brand purposes — the audience will smell it.

---

## What we don't do

- **Daily LinkedIn posts.** Diminishing returns past 2/week, exhausting past 3.
- **Twitter as the primary surface.** Twitter / X organic reach for technical content collapsed in 2024 and hasn't recovered. We post there because of entity-graph reasons (`SAME_AS`), not because it generates a meaningful audience.
- **Personal newsletter.** The company `Friday Shipping Notes` (see `branded-search-strategy.md` Tactic 5) is the one weekly cadence we sustain. A second personal newsletter doubles the workload for half the audience.
- **YouTube long-form.** Production cost is brutal for a founder. The monthly company-channel video covered in `SOCIAL-PROFILES-MASTER.md` is the limit.
- **Speaking at every conference that asks.** Pick the 4 / year that align with the target buyer's existing attention; decline the rest with a polite "next year" template.

---

## The Person JSON-LD already deployed

Per `src/lib/schemas/person.ts`, the sitewide Person schema asserts:

```json
{
  "@type": "Person",
  "@id": "https://quantlabusa.dev/#william-beltz",
  "name": "William Beltz",
  "givenName": "William",
  "familyName": "Beltz",
  "jobTitle": "Founder & Principal Engineer",
  "worksFor": { "@id": "https://quantlabusa.dev/#organization" },
  "sameAs": [
    "https://linkedin.com/in/williambeltz",
    "https://github.com/williambeltz",
    ...
  ]
}
```

**Action**: as new Person-surface platforms are claimed (Stack Overflow, Hacker News profile, IndieHackers, Quora, Crunchbase Person), add each URL to the Person `sameAs` array — NOT the Organization `sameAs`. The distinction matters: a Person URL in Organization sameAs is a noisy cross-type signal Google may discount.

---

## Cadence summary

| Day | Activity | Time |
|---|---|---|
| Mon | 1 thoughtful comment | 5 min |
| Tue | Post the weekly LinkedIn | 60 min |
| Tue | 1 thoughtful comment | 5 min |
| Wed | 1 thoughtful comment | 5 min |
| Thu | 1 thoughtful comment | 5 min |
| Fri | 1 thoughtful comment + draft Friday Shipping Notes | 30 min |
| Wknd | — | 0 min |

Plus 90 min on one weekend day per month for the monthly blog post.

**Total**: ~2.5 hours/week steady-state. Layer A (podcasts) and B (talks) add ~1.5 hours/week amortized. Cap: **5 hours/week**.

If a given week is impossible (client deadline, illness, vacation), skip and resume. Don't double up the following week — that's the road to abandonment. The compounding effect is from consistency over 12+ months, not from any single week's output.

---

## Measuring founder brand growth

Monthly check, recorded in `seo-deliverables/monitoring/founder-brand-tracker.md` (file to create):

1. LinkedIn followers (current vs prior month).
2. LinkedIn profile views (last 90 days, available in Creator Hub).
3. Top 3 LinkedIn posts by impressions, with content type tagged.
4. GitHub followers + star count on any public repos.
5. Branded search for `william beltz` (Search Console branded queries with `beltz`).
6. Inbound messages to `beltz@quantlabusa.dev` that reference a specific public artifact (post, talk, podcast) — qualitative count.

The goal: 6-month moving average growth in all six. If three months running show flat growth across all metrics, the plan isn't working — re-evaluate the topic pool and posting format rather than increasing volume.
