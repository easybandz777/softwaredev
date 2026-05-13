# CRO Playbook — QUANT LAB USA

This playbook defines the conversion-rate-optimization (CRO) program layered on top of the Wave-2 SEO traffic. Goal: lift form fills, calculator completions, and consultation bookings without redesigning pages.

The framework is intentionally minimalist:
1. One experiment per surface area at a time.
2. Deterministic, cookie-stable variant assignment (`src/lib/ab.ts`).
3. Every assignment fires a `gtag('event', 'experiment_impression', ...)` event to GA4 so we can join impressions to downstream conversions in BigQuery / Looker Studio.
4. Centralized registry in `src/lib/cro-config.ts` — flipping `status: "winner"` is the production rollout.

## Sample size and statistical guardrails

We use the conventional Optimizely-style sample-size approximation at 80% power, two-sided alpha = 0.05:

```
n_per_variant approx= 16 * p * (1 - p) / delta^2
```

Where `p` is baseline conversion rate and `delta` is the minimum detectable absolute lift.

Examples for our funnel:

| Baseline CVR | MDE (abs) | n per variant |
|--------------|-----------|---------------|
| 2.0% (consultation modal open from page view) | 0.5% (25% rel lift) | approx 5,019 |
| 2.0% | 1.0% (50% rel lift) | approx 1,255 |
| 8.0% (modal open to submit) | 2.0% (25% rel lift) | approx 2,944 |
| 25% (calculator start to complete) | 5.0% (20% rel lift) | approx 1,200 |
| 0.5% (lead form submit from total traffic) | 0.25% (50% rel lift) | approx 12,736 |

For experiments below 1,000 visitors / week, we default to a Sequential Probability Ratio Test (SPRT) with alpha = 0.05, beta = 0.20, so we can peek without inflating false-positive rate. Stop the test when either boundary is crossed. For higher-traffic experiments (>5k/week per variant), use the fixed-horizon test and read at the planned `n`.

## Declaring a winner

A variant is declared a winner when **all** of these hold:

1. Primary-metric p-value < 0.05 (or SPRT boundary crossed on the upper side).
2. Effect direction is consistent across desktop and mobile (no mobile flip, no desktop flip).
3. Secondary metric is not regressing more than 1 absolute percentage point.
4. We have run a full business cycle (7 days, including a weekend).
5. The winning variant has at least n per variant from the table above.

Rollout protocol:

1. Set `status: "winner"` and `winner: "<variant>"` in `src/lib/cro-config.ts`.
2. The `ab.ts` resolver short-circuits — all users get the winning variant.
3. Leave the experiment in `cro-config.ts` for 30 days as documentation.
4. After 30 days, replace `<ABTest>` call sites with the static winning component and set the entry to `status: "archived"`.

## The 10 highest-leverage experiments

### 1. Hero CTA copy — `hero-cta-v1`
**Hypothesis.** Outcome-oriented copy ("Get a Custom Quote") outperforms action copy ("Book a Call") because visitors arrive uncertain about what a call commits them to.
**Variant A.** "Book a Call"
**Variant B.** "Get a Custom Quote"
**Primary metric.** Hero CTA `cta_click` rate (per page view).
**Secondary metric.** Modal `consultation_modal_open` rate after click (drop-off).
**Sample size.** Approx 1,255 per variant if hero CTA CTR is 2% baseline and we want to detect a 50% relative lift.

### 2. Pricing CTA color — `pricing-cta-color-v1`
**Hypothesis.** High-contrast amber CTA on the pricing tier card outperforms the default blue.
**Variant A.** Sky-blue button (current).
**Variant B.** Amber-500 button with same copy.
**Primary metric.** `consultation_modal_open` from /pricing.
**Secondary metric.** Time-on-page (engagement drag).
**Sample size.** Approx 2,944 per variant at p=8%, MDE 2%abs.

### 3. Calculator placement — `calculator-placement-v1`
**Hypothesis.** Surfacing the build-vs-buy calculator above the fold on /calculators (and the home page) lifts completions 30%+.
**Variant A.** Calculator below the fold (current).
**Variant B.** Calculator shown above the fold with a compact intro line.
**Primary metric.** `calculator_complete` per page view.
**Secondary metric.** Bounce rate (the surfacing should not scare off scrollers).
**Sample size.** Approx 1,200 per variant at p=25%, MDE 5%abs.

### 4. Contact form labels — `form-labels-v1`
**Hypothesis.** Outcome-focused labels lift form completion rate by reducing cognitive load.
**Variant A.** "Project description"
**Variant B.** "What do you want to build?"
**Primary metric.** `lead_form_submit` / form-view ratio.
**Secondary metric.** Median field-fill time (recorded via Clarity tags).
**Sample size.** Approx 1,255 per variant if form CVR is 8% baseline.

### 5. Navbar CTA label — `navbar-cta-label-v1`
**Hypothesis.** "Talk to Bill" outperforms "Book a Consultation" because it personalizes — Bill is the founder, signaled across the site.
**Variant A.** "Book a Consultation"
**Variant B.** "Talk to Bill"
**Primary metric.** Navbar CTA `cta_click` per session.
**Secondary metric.** Bounce rate on pages with the navbar visible.
**Sample size.** Approx 1,255 per variant at p=2%, MDE 1%abs.

### 6. Footer trust badges — `footer-trust-badges-v1`
**Hypothesis.** Adding the GA SOS registration (#26086454) + verified Google review badge to the footer lifts late-funnel modal opens from footer-initiated sessions.
**Variant A.** Footer without trust badges (current).
**Variant B.** Footer with two small badges, linked to /certifications-credentials and /reviews.
**Primary metric.** `consultation_modal_open` from footer CTA `cta_click` source.
**Secondary metric.** Scroll depth to footer.
**Sample size.** Approx 2,944 per variant.

### 7. Exit-intent resource on city pages — `exit-intent-resource-v1`
**Hypothesis.** Offering the build-vs-buy playbook on exit intent outperforms offering the case-study pack, because city-page visitors are mid-funnel rather than late-funnel.
**Variant A.** Build-vs-buy playbook.
**Variant B.** 14 case studies PDF.
**Primary metric.** `lead_form_submit` rate (modal-open to submit).
**Secondary metric.** Modal close-without-submit rate.
**Sample size.** Approx 2,944 per variant.

### 8. Scroll CTA on services pages — `scroll-cta-v1`
**Hypothesis.** A floating scroll-triggered CTA at 60% scroll depth on /services pages lifts modal opens versus baseline.
**Variant A.** No floating CTA (current).
**Variant B.** ScrollTriggeredCTA component enabled.
**Primary metric.** `consultation_modal_open` per service-page view.
**Secondary metric.** Bounce rate (the floating CTA should not interfere).
**Sample size.** Approx 1,255 per variant.

### 9. Mobile CTA position — `sticky-cta-mobile-v1`
**Hypothesis.** Persistent bottom sticky CTA on mobile lifts tel: clicks and modal opens on city and service pages.
**Variant A.** No sticky CTA (current).
**Variant B.** StickyMobileCTA component with Call + Book buttons.
**Primary metric.** `cta_click` (source = sticky_mobile_*) per mobile session.
**Secondary metric.** Time-on-page (sticky bars sometimes shorten sessions if they look intrusive).
**Sample size.** Approx 1,255 per variant.

### 10. Social proof bar — `social-proof-bar-v1`
**Hypothesis.** A rotating trust bar with verified GBP review and SOS registration lifts modal opens 5%+, especially on first-time visits.
**Variant A.** No social proof bar (current).
**Variant B.** SocialProofBar component above the navbar.
**Primary metric.** `consultation_modal_open` per session (first-time only).
**Secondary metric.** Bar dismissal rate (signal of annoyance).
**Sample size.** Approx 2,944 per variant.

## Measurement plumbing

Every experiment automatically emits a GA4 `experiment_impression` event with `experiment_id` and `variant_id`. To attribute conversions:

1. In GA4, create a Custom Dimension (event-scoped) called `experiment_id` and another called `variant_id`.
2. Filter the conversion event (`lead_form_submit`, `calculator_complete`, etc.) by experiment id + variant id.
3. Optional: pipe to BigQuery, then a Looker Studio dashboard with a per-variant CVR chart.

The impression is fired once per session per experiment to avoid inflating exposure counts.

## Anti-patterns to avoid

- **Do not interleave experiments on the same surface.** If `navbar-cta-label-v1` and `hero-cta-v1` both touch the navbar, run them in series.
- **Do not call winners before the sample size threshold** even if p < 0.05 — peeking inflates false-positive rate.
- **Do not run more than three experiments concurrently** if total weekly traffic is below 10,000 sessions.
- **Always check for Simpson's paradox** — split desktop vs mobile and verify the winner is consistent in both. A site-wide win that flips on mobile usually means the mobile experience needs its own variant.
