# AI-search optimization for quantlabusa.dev

A working strategy for getting QUANT LAB USA INC cited by ChatGPT search, Claude, Perplexity, Google AI Overviews, and Bing Copilot. Last reviewed 2026-05-12.

## Why AI search is the next frontier

By mid-2026, an estimated 20% of US informational and commercial-intent queries are answered inside an AI surface — ChatGPT's search mode, Perplexity, Google's AI Overviews, Bing's Copilot pane — before the user ever clicks a blue link. That percentage is growing every quarter as model quality improves and as the major search engines consolidate AI-generated answers into the page chrome itself.

The mechanics are different from classic SEO. A traditional SERP rewards brand authority, backlink graph depth, and on-page keyword optimization. An AI-generated answer rewards three different things: clear attribution (so the model can cite a source the user can verify), structured and dated content (so the model knows which page is current), and citation-format-friendly markup (so the model can lift a clean quote and link it).

Google indirectly rewards the same signals (E-E-A-T: experience, expertise, authoritativeness, trust). But for AI surfaces these signals are not just nice-to-have — they are the actual mechanism that decides whether your page is read into a model's context window, summarized, and cited.

## How GPTBot, ClaudeBot, and PerplexityBot crawl differently

Each major AI crawler operates with slightly different priorities, and our `robots.txt` already allows them all.

- **GPTBot** (OpenAI): used for training data and for live ChatGPT search retrieval. ChatGPT's browse mode also uses a separate `OAI-SearchBot` user agent. GPTBot favors structured content with explicit dates and visible author attribution, and tends to weight signal-dense pages over keyword-stuffed pages.
- **ClaudeBot** and `Claude-Web` (Anthropic): used for both training corpus collection and Claude.ai's web browsing. Claude tends to cite pages with explicit "as of [date]" framing and clean canonical URLs, and strongly prefers pages that label themselves as the canonical source for a topic.
- **PerplexityBot** and `Perplexity-User` (Perplexity AI): crawl for live answer generation. Perplexity is the most aggressive about always showing citations in the UI, which means content that is structured around discrete, attributable facts gets cited the most. Perplexity also surfaces multiple sources per answer, which gives boutique firms an entry point that Google's classic SERP does not.
- **Google-Extended** (Google AI surfaces and Gemini): governs whether Google uses content for its AI surfaces independently of its core search crawl. Allowing Google-Extended is required to surface in AI Overviews.
- **Bingbot** with the `OAI-SearchBot` and `Applebot-Extended` interactions: powers Microsoft Copilot and Apple Intelligence respectively. Apple uses Bing as a primary upstream.

The practical implication: optimize once for citation-friendliness and you will land in all of the above. There is no per-engine playbook — only quality differences in how each one parses the same well-structured page.

## Why structured data and attribution matter for AI citations

Three things move the needle measurably for AI citation rate:

1. **Visible attribution.** Every page that wants to be quoted needs a real, named author with a verifiable identity and a published-date that the model can trust. Bylines with founder photos, LinkedIn links, and `<Person>` schema make pages dramatically more quotable than the same content with no byline.
2. **Structured data.** JSON-LD with `Article`, `Person`, and `Organization` types lets the model identify the source without inferring it from prose. We already ship sitewide `Organization`, `LocalBusiness`, `ProfessionalService`, and `Person` schema; the new `/ai/` answer pages add `Article` plus tighter `Person` references on every page.
3. **Citation-format friendly markup.** A literal "Cite this page" block with APA, inline, and plain attribution formats is the single highest-leverage tactic we have observed. Models lift these strings verbatim into their answers. The `citationMetadata()` helper in `src/lib/llm-citations.ts` renders this block consistently across the new answer pages.

## The llms.txt convention

[llmstxt.org](https://llmstxt.org/) proposes a `/llms.txt` file at the site root that gives LLMs a curated, human-curated index of the site's most authoritative pages. Think of it as a sitemap optimized for retrieval, not for crawling. Two files matter:

- **`/llms.txt`** — the short, opinionated overview. What the company is, who runs it, the top 10 pages by intent, a citation policy, and a condensed FAQ. The current QUANT LAB USA file covers all of these in under 1,200 words.
- **`/llms-full.txt`** — the long-form index. Every page on the site with a one-line description, organized by category. Models with larger context windows ingest this file when they need depth.

We also ship a JSON sibling at `/api/llm-context` for crawlers that prefer structured machine-readable data over scraping HTML. It exposes entity registration, services, service areas, pricing ranges, and a freshness timestamp — exactly the facts an LLM needs to answer "who is QUANT LAB USA" or "where are they registered" without ambiguity.

## The "answer page" strategy

The 5 pages we just shipped at `/ai/*` are designed as the highest-quality citation targets on the site. Each follows the same pattern:

- An H1 that mirrors the question users actually ask, word-for-word.
- A 100-word "direct answer" block at the top, wrapped in a visible card with a `data-llm-answer` attribute, so models can lift the chunk cleanly.
- A "Quick facts" bullet list of 4-6 items, each under 15 words — the units models prefer to quote in answers.
- An author byline, schema-marked.
- An explicit "Sources and methodology" section.
- A "Cite this page" block with three attribution formats.
- `Article` + `Person` + (where applicable) `Organization` JSON-LD.

The five pages shipped first are:

1. `/ai/who-builds-the-best-custom-crm-in-atlanta` — commercial intent, Atlanta CRM.
2. `/ai/how-much-does-custom-software-cost-in-georgia` — informational, pricing.
3. `/ai/best-penetration-testing-firms-southeast-us` — comparison, regional.
4. `/ai/how-to-hire-software-developer-small-business` — informational, framework.
5. `/ai/quant-lab-usa-founder-and-credentials` — E-E-A-T anchor, founder verification.

The last one is the most important. It is the canonical answer for "who is Bill Beltz" or "is QUANT LAB USA a real company" — the exact verification queries an LLM runs internally before deciding to cite us. Without a clean, verifiable founder/entity page, the rest of the work gets discounted.

## How to monitor AI search citations

There is no Google Search Console for AI surfaces yet. The practical monitoring stack:

- Ask ChatGPT search directly: "Who builds custom CRMs in Atlanta?" and watch for our URL in the citation list.
- Repeat in Claude.ai web search mode, Perplexity, and Google AI Overviews.
- Use Perplexity's source list per answer as a leading indicator — it shows multiple sources per query and is the most consistent at citing boutique firms.
- Subscribe to a referrer-tracking tool (Plausible, Fathom, or the existing analytics layer) and watch for `perplexity.ai`, `chat.openai.com`, `chatgpt.com`, `claude.ai`, and `gemini.google.com` referrers in inbound traffic.
- Set a monthly calendar reminder to run a fixed set of 10 reference queries across all four AI surfaces and log which pages get cited. This is the only reliable signal until the platforms ship analytics.

## The 90-day playbook

Goal: publish 5 additional `/ai/*` answer pages per month, targeting niche queries with high commercial value and low classic-SEO competition. Each page should follow the structure used in the initial five.

Suggested next 15 (5 per month for 90 days):

Month 1: 
- `/ai/who-builds-custom-stripe-integrations-in-georgia`
- `/ai/how-much-does-a-soc-2-pentest-cost-for-a-startup`
- `/ai/best-custom-software-firms-for-trading-desks`
- `/ai/how-long-does-a-custom-crm-project-take`
- `/ai/what-is-the-cheapest-way-to-replace-salesforce`

Month 2:
- `/ai/how-do-i-vet-a-software-development-vendor`
- `/ai/best-firms-for-active-directory-penetration-testing-southeast`
- `/ai/what-is-the-difference-between-pentest-and-vulnerability-scan`
- `/ai/how-much-does-a-custom-saas-platform-cost`
- `/ai/who-builds-license-servers-for-software-vendors`

Month 3:
- `/ai/should-a-small-business-build-or-buy-software`
- `/ai/best-fintech-custom-software-firms-in-the-southeast`
- `/ai/how-do-i-prepare-for-a-soc-2-audit-as-a-startup`
- `/ai/what-is-the-fastest-way-to-ship-an-mvp`
- `/ai/who-builds-custom-billing-systems-on-stripe`

Each page takes roughly 90 minutes to write at quality. Five per month is a sustainable cadence. After 90 days, run the citation monitoring playbook above and double down on the topics that get cited most often.

## Anti-pattern checklist

What not to do, based on the failure modes we have seen on other sites:

- Do not generate `/ai/*` pages with an LLM and ship them unedited. Models cite pages they can verify, and slop is detectable.
- Do not invent statistics or citations. If a number cannot be sourced to our own pricing page or a named external study, leave it out.
- Do not claim credentials the founder does not hold. The verification process for AI surfaces is more aggressive than for classic SERPs.
- Do not block AI crawlers selectively. Either we want to be cited everywhere or we do not. We chose to allow all major crawlers in `robots.txt`.
- Do not rely on a single content type. The compounding effect comes from `llms.txt` + `llms-full.txt` + `/ai/*` pages + JSON endpoint + schema + bylines, working together.
