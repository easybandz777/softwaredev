# Video Embed Integration Plan

This document specifies which pages each video belongs on and provides the exact JSX to drop into each page when the video is published. The `VideoEmbed` component lives at `src/components/VideoEmbed.tsx`. The VideoObject JSON-LD emits automatically.

## Component import (use everywhere)

```tsx
import { VideoEmbed } from "@/components/VideoEmbed";
```

## Placement matrix

| Video | Primary Page | Secondary Pages |
| ----- | ------------ | --------------- |
| Script 01 — Custom CRM vs SaaS | `/services/custom-crm-development` | `/blog/<crm-decision-post>`, `/work/northcrest-fence` |
| Script 02 — Stripe Webhooks Production | `/services/stripe-integration` | `/services/subscription-billing`, `/services/payments-invoicing-licensing` |
| Script 03 — Pentest Cost Explained | `/services/penetration-testing` | `/services/web-app-pentest`, `/services/network-pentest`, `/pricing` |
| Script 04 — SOC 2 Prep | `/services/penetration-testing` | `/blog/<soc2-related-post>`, `/methodology` |
| Script 05 — Founder Story | `/` (homepage) | `/about`, `/methodology` |
| Behind-the-scenes process (future) | `/methodology` | `/pricing` |
| Case study highlight clips (future, one per case study) | `/work/<slug>` for each | none |

## Page 1: Homepage — `src/app/page.tsx`

**What:** Founder story (Script 05) in the hero section. This is the highest-impact single placement on the site.

**Where to insert:** Inside the `Hero` block or immediately after it, before the `Services` section. The video provides the visceral "who am I dealing with" answer that the hero copy currently has to do alone.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-12 md:py-16" aria-labelledby="founder-story-heading">
  <h2 id="founder-story-heading" className="sr-only">
    Founder story: who you are dealing with
  </h2>
  <div className="max-w-4xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="The QUANT LAB USA Founder Story"
      description="Bill Beltz on why he started a one-person custom software and cybersecurity firm in Macon, GA — and how that structure makes sense for the kind of work small and mid-sized businesses actually need."
      uploadDate="2026-05-20"
      duration="PT6M30S"
      keywords={["quant lab usa", "founder story", "custom software firm", "macon georgia"]}
    />
  </div>
</section>
```

## Page 2: `/about` — `src/app/about/page.tsx`

**What:** Same founder story video. Reuse improves engagement metrics across the site without duplicating production work.

**Where:** After the existing founder bio section. The video deepens the narrative the page text already establishes.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-16">
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="The QUANT LAB USA Founder Story"
      description="Bill Beltz on starting QUANT LAB USA — the missing tier between SaaS and agencies."
      uploadDate="2026-05-20"
      duration="PT6M30S"
    />
  </div>
</section>
```

## Page 3: `/services/custom-crm-development`

**What:** Script 01 — Custom CRM vs SaaS: The Honest Answer.

**Where:** Near the top of the page, between the hero / intro section and the "What we build" section. Buyers landing on this page from a "custom CRM development" search are precisely the audience for this video.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-12" aria-labelledby="crm-video-heading">
  <h2 id="crm-video-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    Custom CRM vs SaaS — The Honest Answer
  </h2>
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="Custom CRM vs SaaS: The Honest Answer"
      description="When custom CRM development genuinely beats Salesforce or HubSpot, when it does not, and the hybrid pattern most mid-market companies miss."
      uploadDate="2026-05-27"
      duration="PT7M15S"
      keywords={["custom CRM vs SaaS", "Salesforce alternatives", "custom CRM development"]}
    />
  </div>
</section>
```

## Page 4: `/services/stripe-integration`

**What:** Script 02 — Stripe Webhooks That Survive Production.

**Where:** Below the service description, before the case study / testimonials section. Tutorial-style content reinforces technical credibility.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-12" aria-labelledby="stripe-webhook-video-heading">
  <h2 id="stripe-webhook-video-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    Stripe Webhooks That Survive Production
  </h2>
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="Stripe Webhooks That Survive Production"
      description="The four rules that separate a Stripe webhook handler that survives production from one that quietly drops events. Real Next.js App Router code."
      uploadDate="2026-06-03"
      duration="PT14M30S"
      keywords={["stripe webhooks production", "stripe webhook idempotency", "stripe integration tutorial"]}
    />
  </div>
</section>
```

## Page 5: `/services/penetration-testing`

**What:** Script 03 — Pentest Cost Actually Explained. The single most common pre-sale question.

**Where:** Immediately after the hero / overview section. Buyers landing here from "penetration testing cost" or "how much does a pentest cost" are exactly this video's audience.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-12" aria-labelledby="pentest-cost-video-heading">
  <h2 id="pentest-cost-video-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    Pentest Cost Actually Explained
  </h2>
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="Pentest Cost Actually Explained ($1k–$250k Tiers)"
      description="The four tiers of penetration test products, what each one actually delivers, and how to pick the right one for your business in three questions."
      uploadDate="2026-06-10"
      duration="PT11M00S"
      keywords={["penetration testing cost", "pentest pricing", "web application pentest", "MITRE ATT&CK"]}
    />
  </div>
</section>
```

## Page 6: `/services/penetration-testing` (second placement) OR `/methodology`

**What:** Script 04 — SOC 2 Prep Week by Week.

**Where (option A — preferred):** A new SOC 2 section on the pentest service page, since pentest engagements are usually adjacent to SOC 2 prep. **Where (option B):** `/methodology` for a longer-form behind-the-scenes placement. Pick one; do not double-embed on the same page.

**JSX:**

```tsx
<section className="container mx-auto px-6 py-12" aria-labelledby="soc2-prep-video-heading">
  <h2 id="soc2-prep-video-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    SOC 2 Prep, Week by Week
  </h2>
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="SOC 2 Prep Week-by-Week (12-Week Plan)"
      description="A practical 12-week SOC 2 Type II preparation plan for a 10–25 person SaaS company, without paying Vanta or Drata $25k a year for compliance theater."
      uploadDate="2026-06-17"
      duration="PT12M30S"
      keywords={["SOC 2 prep", "SOC 2 Type II preparation", "SOC 2 timeline", "SaaS compliance"]}
    />
  </div>
</section>
```

## Page 7: `/pricing` or `/methodology` — Behind-the-scenes process (future production)

**What:** A short (3–4 minute) video walking a viewer through how a project goes from inquiry → scope → build → ship at QUANT LAB. Not yet scripted; placeholder slot reserved.

**Where:** On `/pricing` near the engagement-tier breakdown, or on `/methodology` as the hero asset.

**JSX skeleton (when ready to record):**

```tsx
<section className="container mx-auto px-6 py-12" aria-labelledby="process-video-heading">
  <h2 id="process-video-heading" className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
    How a QUANT LAB Engagement Actually Works
  </h2>
  <div className="max-w-3xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="How a QUANT LAB Engagement Actually Works"
      description="From inquiry through scope, build, and ship — the actual workflow at QUANT LAB USA."
      uploadDate="2026-07-01"
      duration="PT4M00S"
    />
  </div>
</section>
```

## Page 8: `/work/<slug>` — Case Study Highlight Clips (future production)

**What:** 60–90 second highlight clips per case study. One per case study, repurposed into vertical for LinkedIn shorts. Not yet recorded; placeholder slots reserved.

**Where:** Below the case study hero, before the technical details / outcomes section.

**Pattern (repeat per case study):**

```tsx
<section className="container mx-auto px-6 py-8" aria-labelledby="case-study-clip-heading">
  <h2 id="case-study-clip-heading" className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
    Project Walkthrough
  </h2>
  <div className="max-w-2xl mx-auto">
    <VideoEmbed
      youtubeId="REPLACE_WITH_YT_ID"
      title="<Case Study Name> — Project Walkthrough"
      description="Bill walks through the <case study name> build — what the client needed, what we shipped, and what we learned."
      uploadDate="2026-XX-XX"
      duration="PT1M30S"
    />
  </div>
</section>
```

## Production sequencing recommendation

Record in this order to maximize early site impact:

1. **Script 05 — Founder story.** Highest reuse — homepage + about. Easiest production. Record first.
2. **Script 03 — Pentest cost.** Most-asked question, highest commercial intent. Drives the highest-margin service.
3. **Script 01 — Custom CRM vs SaaS.** Drives the highest-volume service.
4. **Script 02 — Stripe webhooks.** Technical credibility builder. Slower production (code on screen) but highly repurposable.
5. **Script 04 — SOC 2 prep.** Most production effort due to slide-heavy structure. Save for last.

Total production budget for all five: approximately 20–28 hours of Bill's solo time, spread across 4–6 weeks at one recording session per week.

## A11y notes for embeds

- The `VideoEmbed` component already renders an `<iframe>` with a `title` attribute (a11y baseline for embedded content).
- Always include a `<details>` transcript when a video is captioned. The component supports this via the `transcript` prop.
- Sections wrapping the embed should have `aria-labelledby` referencing the section heading.
- Captions on the video itself: when uploading to YouTube, always upload a human-reviewed `.srt` file. Auto-captions are a violation of WCAG 1.2.2 if the video is the only source of the information.
