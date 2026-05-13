# Video Strategy — QUANT LAB USA INC

## Why we are investing in video now

The site has crossed 100+ indexed pages, 21 long-form blog posts, 14 real case studies, and a deep services tree. Text has done the heavy lifting. The next bottleneck is trust. Buyers commissioning a custom CRM or a $25k pentest do not hand over money to a domain they have only read. They need to see the founder, hear the voice, and watch the work happen. That is what video does, and nothing else can substitute for it.

Three separate distribution channels reward video right now:

1. **Google search.** Universal results increasingly fold YouTube clips into the top-of-page carousel for high-intent commercial queries ("stripe webhook tutorial," "soc 2 audit checklist," "penetration testing cost"). A 10-minute video ranked on YouTube is a second crack at the SERP we already have a blog post on.
2. **YouTube as its own search engine.** YouTube is the world's second-largest search engine. We have already done the keyword research for the blog. Repurposing it into video earns a parallel audience for almost zero additional research cost.
3. **LLM citation.** ChatGPT, Perplexity, Claude, and Google AI Overviews quote transcripts. A long-form video with a published transcript becomes a citable source, often outranking shallower text-only competitors because the transcript reads like an expert speaking — exactly what the models prefer.

The downstream KPI we actually care about — qualified leads on `/contact` — is moved by trust. Video is the highest trust-per-minute medium that exists.

## Production constraints

Bill Beltz self-records. There is no studio, no editor on payroll, no production budget for paid talent. Everything ships under the following constraints:

- **One-shot recording where possible.** No multi-camera, no re-takes that require splicing.
- **Screen-share heavy.** Code, terminal, dashboards on screen — face camera in a corner overlay. Lower bar to "looking professional" because the eye is on the screen, not the founder.
- **Sub-$500 equipment.** Mic, ring light, basic webcam. Already-owned monitor and laptop.
- **One recording session per week.** Realistic cadence for a working founder. 1 hour of capture, batched.
- **Transcripts published with every video.** Both for SEO and so partial-attention viewers can scan.

Total time per video, end-to-end (Bill solo): 4–6 hours for tutorial-style (script + record + light edit + transcript + thumbnail + upload); 2–3 hours for vlog-style talking-head; 6–8 hours for code-walkthrough where takes need to be re-recorded for bugs.

## Distribution

- **Primary host: YouTube** (channel: QUANT LAB USA). Public, embedded on the site.
- **Embedded on key pages.** Each video is placed on the most contextually relevant page — service pages, case studies, the homepage hero, the about page. See `embed-integration-plan.md` for the exact list and JSX snippets.
- **Transcripts published.** As collapsible `<details>` blocks inside each `<VideoEmbed />` and as standalone transcript pages where the content warrants it (8+ minute videos, technical tutorials).
- **Repurposed.** Long-form gets cut into 60-second vertical shorts for LinkedIn, X, and YouTube Shorts. Same audio, vertical crop, captions burned in.
- **Cross-promoted on podcasts.** Bill guest-appears on relevant founder, sysadmin, and trader podcasts. The `podcast-appearance-kit.md` is the prep packet for these.

## KPIs

We track three layers of metrics, in order of importance:

1. **Lead quality.** Did a `/contact` form submission, a call, or an email come in mentioning a specific video? This is the only metric that pays the bills. Each video should include a soft "if this was useful, here is how to reach me" line at the end. Track inbound mentions in CRM.
2. **Watch time and retention.** Total watch hours, average view duration, retention curve at the 30-second and 2-minute marks. YouTube's algorithm rewards watch time more than view count.
3. **SERP capture.** Track ranking position for the target query of each video, both on Google (universal search) and on YouTube search. Use a manual rank-check spreadsheet — no need for a paid tool yet.

We do **not** chase subscriber count or like ratio. Both are vanity metrics for our business model. We sell $20k–$100k engagements. We need 2 conversions a month. The funnel does not need to be wide.

## Document map

- `youtube-channel-plan.md` — channel setup, bio, playlist structure, first 30 videos, SEO conventions, equipment list.
- `scripts/script-01..05.md` — five fully-written scripts, ready to record.
- `podcast-appearance-kit.md` — Bill's guest-appearance packet (bio, topics, talking points, Q&A prep).
- `embed-integration-plan.md` — exact pages and JSX snippets for placing videos on the site.
- `transcripts-template.md` — standard transcript file format plus auto-transcribe instructions (AssemblyAI / Whisper).
