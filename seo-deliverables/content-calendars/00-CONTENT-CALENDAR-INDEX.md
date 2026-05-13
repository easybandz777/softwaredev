# Content Calendar — Master Index

QUANT LAB USA INC (quantlabusa.dev). 90-day organic social + community content plan.

This file is the tracker. The five sibling files contain the actual drafts.

---

## File map

| File | What's in it | Drafts |
|---|---|---|
| `00-CONTENT-CALENDAR-INDEX.md` | This file. Cadence, time-budget, KPIs, GA4 events. | — |
| `x-twitter-90-day-calendar.md` | 40 X / Twitter posts across 90 days (15 hot takes, 10 threads, 10 case studies, 5 polls). | 40 |
| `linkedin-90-day-calendar.md` | 25 LinkedIn posts across 90 days (10 founder reflections, 8 blog rewrites, 5 case studies, 2 industry hot takes). | 25 |
| `reddit-soft-launch-plan.md` | 10 Reddit drafts across 6 subreddits (r/SaaS, r/Entrepreneur, r/IndieHackers, r/CybersecurityAdvice, r/devops, r/Stripe). | 10 |
| `hacker-news-and-dev-to-plan.md` | 3 Show HN drafts + 5 dev.to cross-post candidates with rewrite plans. | 8 |
| `quora-strategy.md` | 30 question topics + 4-paragraph answer template + 5 fully-written 300-400 word answers. | 5 written, 30 mapped |

Total drafts ready for review: **88** across all channels.

---

## Weekly cadence summary

| Channel | Per week | Time-on-channel | Best windows (ET) |
|---|---|---|---|
| X / Twitter | 3.1 posts + 5-10 replies/day | 4-6 hrs | Tue/Thu 8:30am + 6:30pm; Sun 7pm |
| LinkedIn | 2 posts + 5-10 comments/day | 3-4 hrs | Tue/Thu 7:45am; Sun 7pm (every other week) |
| Reddit | 0.8 posts (1 every 8 days) + active replies | 2-3 hrs | Tue/Thu 8am-12pm; Sat 9am |
| Hacker News | 0.3 submissions (1 every 4 weeks) | 1-2 hrs around launch | Tue/Wed/Thu 7-9am |
| dev.to | 0.6 posts (1 every 11 days) | 4-6 hrs per long-form post | Tue/Wed/Thu 8-10am or 1-3pm |
| Quora | 2 answers + reply maintenance | 2-3 hrs | Tue/Thu 9am |
| **Total** | **~9 net new posts per week** | **~18-22 hrs/week** | — |

This is Bill's solo founder time budget. If LinkedIn / X reply volume scales past plan, hire a part-time community manager at week 8.

---

## Time-budget per channel — detailed

**X / Twitter — ~5 hrs/week.**
- Drafting: 1.5 hrs (Sunday batch)
- Posting + monitoring: 1 hr (spread Mon-Fri)
- Replying + quote-tweets: 2.5 hrs (15-20 min daily)

**LinkedIn — ~3.5 hrs/week.**
- Drafting: 1.5 hrs (Sunday batch)
- Posting + monitoring: 0.5 hr
- Commenting on ICP posts: 1.5 hrs (15 min daily Mon-Fri)

**Reddit — ~2.5 hrs/week.**
- Drafting per post: 30-45 min
- Reply window first 6 hours after post: 1.5 hrs
- Daily comment building: 30 min/day (karma maintenance)

**Hacker News — ~2 hrs total per submission.**
- Draft + research: 45 min
- Launch window monitoring: 1 hr (first 60 minutes silent, then engage)
- Follow-up: 15 min

**dev.to — ~5 hrs per long-form.**
- Outline: 30 min
- Drafting: 3 hrs
- Code samples + edits: 1 hr
- Cross-comment promotion: 30 min

**Quora — ~2.5 hrs/week.**
- Drafting 2 answers: 1.5 hrs
- Reply window 4-hour SLA: 1 hr

---

## KPIs to track

**Acquisition KPIs (per channel, weekly).**
- Impressions / views per post
- Clicks to quantlabusa.dev (UTM-tracked)
- New email-list signups attributed to channel
- New direct DMs / calendar bookings attributed to channel
- Cost: $0 (organic only), so all metrics roll into ROI without divisor noise

**Engagement KPIs (per channel, weekly).**
- Engagement rate (likes + comments + shares ÷ impressions)
- Reply rate to comments within 4-hour SLA (target: 95%)
- Repeat-viewer rate (return engagement from same handle over 30d)
- Quote-tweet / cross-platform mention count

**Conversion KPIs (site-side, monthly).**
- Sessions from social/community sources (GA4)
- Pages per session (target: >2.5 for social, >3 for technical communities)
- Form completions on `/contact`, `/sales`, `/services/*`
- Lead-magnet PDF downloads
- Calendar bookings from social-sourced sessions

**Pipeline KPIs (CRM-side, monthly).**
- Qualified discovery calls originated from social
- Win rate of social-originated deals
- Average deal size by acquisition channel
- Time to close

**Authority KPIs (quarterly).**
- Backlinks earned from social content (Ahrefs / equivalent)
- Quora answer views (cumulative)
- LinkedIn profile views per week
- "Brand search" volume (`quantlab usa`, `bill beltz`) in GSC

---

## GA4 events to fire

Set up the following custom events in GA4 before launch.

### Event: `social_click`
Fired when a user lands from any social/community channel.
**Parameters:**
- `utm_source` (x, linkedin, reddit, hn, devto, quora)
- `utm_campaign` (e.g. `2026-q2-cal`, `soft-launch`)
- `utm_content` (post identifier, e.g. `tweet-12`, `post-LI-04`, `qa-09`)
- `landing_path` (the page URL)

### Event: `lead_magnet_download`
Fired when a visitor downloads the gated PDF / lead magnet.
**Parameters:**
- `magnet_slug` (e.g. `custom-software-buying-guide`)
- `referrer_source` (mapped from session source)

### Event: `discovery_call_request`
Fired on successful submission of any consultation form.
**Parameters:**
- `service_interest` (e.g. `custom-software`, `pentest`, `stripe`)
- `referrer_source`
- `page_path` (which page they submitted from)

### Event: `case_study_complete`
Fired when a visitor scrolls past 75% of any `/work/[slug]` page.
**Parameters:**
- `case_slug` (e.g. `northcrest-fence`, `j5-sales-os`)
- `referrer_source`

### Event: `social_outbound_click`
Fired when a site visitor clicks an outbound social link (LinkedIn, X, GitHub, etc.).
**Parameters:**
- `destination` (linkedin, twitter, github, etc.)
- `placement` (header, footer, post-author-bio, case-study-share)

---

## Attribution and reporting

**Weekly review (Sunday, 30 min).**
- Pull social-source sessions from GA4
- Tag top 3 highest-converting posts by channel
- Note any post >5K impressions (X) or >2K views (LinkedIn) for repurposing

**Monthly review (1st Monday, 90 min).**
- Compare cohort metrics: leads-per-100-impressions by channel
- Recalibrate budget: shift 1 weekly slot from lowest-ROI channel to highest
- Identify 2 case studies that pulled the most traffic and double down with derivative content

**Quarterly review (end of Q2, 3 hrs).**
- Backlinks earned
- Brand-search volume in GSC
- Pipeline impact: $ revenue attributable to social vs. baseline

---

## Risk / kill criteria

If any of the following happens, pause that channel and reassess:
- A platform account gets warned or suspended (Reddit, Quora especially)
- A specific post draws sustained negative engagement that risks brand
- Cost-per-discovery-call from a channel exceeds $200 (this is organic, so the cost is time — convert time to opportunity-cost dollars)
- A client objects publicly to a case-study mention (immediate kill + apology)

---

## Compliance / brand rules

- No fabricated stats. Only real outcomes from the case studies in `src/lib/case-studies.ts`.
- No client names without permission. Anonymized case studies stay anonymized.
- No fear-based marketing for the insurance / pentest verticals — both have ethics codes that punish this.
- No competitor name-shaming on any channel.
- No emojis. Anywhere. (Brand voice rule.)
- Hashtags on LinkedIn: max 3 per post. None on X. Quora doesn't use them.

---

## Launch sequence (week 1)

Day 1 (Tuesday): X post #1 (hot take), LinkedIn post #1 (founder reflection), set up UTM tracking in GA4.
Day 2 (Wednesday): no posts — engage on community comments only.
Day 3 (Thursday): X post #2 (case study), LinkedIn post #2 (case study).
Day 4 (Friday): X post #3 (hot take with link), Reddit post #1 (r/SaaS).
Day 5 (Saturday): light engagement, no new posts.
Day 6 (Sunday): X thread starter, weekly review.
Day 7 (Monday): adjust based on week-1 metrics.

Hacker News submission and first dev.to cross-post both wait until week 4 (Day 25) so the back-channel volume is established first.
