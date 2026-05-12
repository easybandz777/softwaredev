# Audit 09 — Conversion Path Audit (quantlabusa.dev)

**Date:** 2026-05-12
**Auditor:** SEO conversion-funnel audit (Opus)
**Scope:** Trace 8 critical SEO funnels from entry → lead capture, score each, identify leaks, prioritize fixes.

---

## Executive Summary (TL;DR)

**The biggest finding:** Of the 8 funnels audited, **7 do not exist yet** as routable pages on the live site. The codebase contains only the homepage (`/`) plus internal sales/admin/training portals. There is one and only one conversion path on the entire production surface area: **Hero or Contact section → `ConsultationModal` (3-step) → `POST /api/consultations`**.

Inferred for the planned pages (per `05-city-landing-pages.md`, `06-service-pages.md`, etc.), every funnel re-uses the same `ConsultationModal`. **No funnel pre-fills context**, **no calendar booking is wired**, **no lead magnet has a backend**, and **no analytics events fire on form submission** (only `PageTracker` for page views).

**Forms that POST to nowhere right now: 7 of 8 funnels (only `/api/consultations` is wired).**

**Highest-leakage funnel: lead magnet `/calculators/stripe-cost`** — page doesn't exist; if built per `15-lead-magnets.md` spec, the spec describes a form-on-page-and-show-result UX with no backend wiring described.

**3 highest-impact fixes** (in order):
1. Wire `POST /api/leads` with email + Slack notification + Resend → 5-email drip enrollment.
2. Embed Calendly (or Cal.com) directly in `ConsultationModal` success state and add it as a secondary CTA on every page.
3. Pre-populate `ConsultationModal` with `service`, `city`, and `source` query/context so a visitor from `/services/penetration-testing/atlanta-ga` lands with service + city pre-selected.

---

## Step 1 — Funnel-by-Funnel Trace (8 funnels)

### Funnel 1 — City page: `/software-development-atlanta-ga`

**Current state:** Page does not exist (404 in prod, no route in source).
**Planned (per `05-city-landing-pages.md`):** 250-350 word city page with CTA to "Book a Consultation."

**Inferred CTA path (if shipped today using the existing pattern):**

```
/software-development-atlanta-ga
   └─► [CTA "Book Consultation"]
           └─► Likely scrolls to homepage #contact (since no /contact page exists)
                   └─► Click again → ConsultationModal opens
                           └─► 3-step form → POST /api/consultations
                                   └─► DB insert + Resend email to beltz@quantlabusa.dev
                                           └─► Success state ("we'll be in touch within 1 business day")
```

**Clicks from entry → conversion: 3+** (CTA → scroll → CTA → modal step 1 → step 2 → step 3 → submit). Effective: **6 clicks** counting modal steps.

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **6** (target ≤2) — FAIL |
| Contact form vs phone | Form (good) + email mailto (Contact.tsx:140) |
| Calendar booking | **None** — FAIL |
| Pre-filled context | **None** — service/city not passed through — FAIL |
| Lead-capture API | `/api/consultations` works (good) |
| Secondary CTAs | **None on planned page** — FAIL |
| "What happens next" | Yes — `WHAT_HAPPENS` array in `Contact.tsx:18-22` & success state — GOOD |
| Social proof on path | None on page; modal has none — FAIL |

---

### Funnel 2 — Service page: `/services/penetration-testing`

**Current state:** Does not exist. Penetration testing exists only as a card inside the `Services` component (`Services.tsx:101-108`).
**Planned (`06-service-pages.md`):** 400-600 word service page with FAQs.

**Inferred CTA path:**

```
/services/penetration-testing
   └─► [CTA "Book Free Consultation"]
           └─► ConsultationModal opens
                   └─► User must MANUALLY select "Penetration Testing / Red Team Ops"
                           (it's not in SERVICES array; SERVICES has 8 entries — see ConsultationModal.tsx:9-18)
                                   └─► 3-step form → POST /api/consultations
                                           └─► Success
```

**CRITICAL BUG:** `ConsultationModal.tsx:9-18` SERVICES array does NOT include "Penetration Testing." A visitor from the pen-test page can't tell the form they want pen-test (they'd pick "Other / Not Sure Yet"). Mismatch with `Services.tsx:103` which clearly offers it as a service.

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **5** (CTA → modal → step1→2→3→submit) |
| Contact form vs phone | Form only (no phone CTA on planned page) |
| Calendar booking | **None** — FAIL |
| Pre-filled context | **None** — pen-test isn't even an option in dropdown — CRITICAL FAIL |
| Lead-capture API | Works |
| Secondary CTAs | None planned (no "Download MITRE worksheet" CTA per `15-lead-magnets.md` cross-link) — FAIL |
| "What happens next" | Inside modal only — partial |
| Social proof on path | Service card claims "11 attack modules. MITRE ATT&CK-mapped" — minimal — WEAK |

---

### Funnel 3 — City × Service combo: `/services/penetration-testing/atlanta-ga`

**Current state:** Does not exist.
**Planned:** Highest commercial intent page — local + specific service.

**Inferred CTA path:** Same as funnel 2, with same pen-test gap in dropdown. **No mechanism to pass `city=atlanta-ga` or `service=penetration-testing` into the modal.**

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **5** |
| Pre-filled context | **NONE** — visitor on `/services/penetration-testing/atlanta-ga` will see a generic modal — CRITICAL FAIL |
| Calendar booking | **None** |
| Lead-capture API | Works generically |
| Secondary CTAs | None — FAIL |
| "What happens next" | Inside modal only |
| Social proof | None — FAIL |

**This is the highest-commercial-intent funnel and it has the weakest context personalization.**

---

### Funnel 4 — Case study: `/work/hobbspeak`

**Current state:** Does not exist.
**Planned (`07-case-studies.md`):** Situation/Challenge/Approach/Solution/Outcomes structure.

**Inferred CTA path:**

```
/work/hobbspeak
   └─► [CTA "Build something like this"]
           └─► ConsultationModal opens with NO project context
                   └─► User retypes "I'd like something like the HobbsPeak portal..."
                           └─► POST /api/consultations
```

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **5** |
| Calendar booking | None |
| Pre-filled context | None ("inspired by HobbsPeak" not passed through) — FAIL |
| Social proof on path | Excellent — case study IS social proof — GOOD |
| Secondary CTAs | None planned — FAIL |
| Lead-capture API | Works |

---

### Funnel 5 — Industry: `/industries/fintech`

**Current state:** Does not exist.
**Planned:** Not in current deliverables — implicit roadmap item.

**Inferred CTA path:** Same generic modal, no industry context, no fintech-specific case study cross-link in form.

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **5** |
| Pre-filled context | None — FAIL |
| Industry-specific social proof | None — FAIL |
| Calendar booking | None — FAIL |

---

### Funnel 6 — VS comparison: `/vs/salesforce`

**Current state:** Does not exist.
**Planned:** Implicit roadmap item.

**Inferred CTA path:** Generic modal. Worst-case funnel: a comparison-shopper who clicks through with high intent gets dumped into a 3-step modal with no "free migration assessment" CTA or comparison-specific lead magnet.

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **5** |
| Pre-filled context | None — FAIL |
| Calendar booking | None — FAIL |
| Comparison-specific CTAs (migration audit, ROI calc) | None — FAIL |

---

### Funnel 7 — Lead magnet: `/calculators/stripe-cost`

**Current state:** Does not exist. No `StripeCalculator.tsx` exists in the repo. No `/calculators/*` route.
**Planned (`15-lead-magnets.md`):** Stripe Integration Cost Calculator.

**Inferred CTA path (per planned spec — typical lead-magnet UX):**

```
/calculators/stripe-cost
   └─► [Input form: # transactions, avg ticket, processing model]
           └─► [Show calculated cost on screen]
                   └─► [Gate "Get the full PDF report" behind email]
                           └─► POST to ??? (no /api/leads endpoint exists)
                                   └─► Email NOT sent (no Resend wiring planned)
                                           └─► Drip NOT enrolled (no list/segment)
```

**This is the single biggest leak in the entire funnel inventory.** The lead magnet is designed to collect emails but there is no `/api/leads` route, no Resend template for delivering the PDF, no integration with the `16-email-drip.md` 5-email sequence, and no list-segment plumbing. A lead capture form here today would **black-hole the email**.

| Score Dimension | Result |
|---|---|
| Clicks to conversion | 2 (calculate → enter email) — GOOD on paper |
| Lead-capture API | **DOES NOT EXIST** — CRITICAL FAIL |
| Email delivery of magnet | Not wired — FAIL |
| Drip enrollment | Not wired — FAIL |
| Calendar booking | None — FAIL |
| Secondary CTA ("Book a strategy call") | Not in spec — FAIL |

---

### Funnel 8 — Homepage: `/`

**Current state:** Live. This is the only funnel that fully exists.

**Above-the-fold CTA inventory (Hero.tsx):**
1. **Primary CTA:** "Book a Consultation" button (Hero.tsx:98)
2. **Secondary CTA:** "Explore Services" scroll indicator (Hero.tsx:122-146)
3. **Tertiary in navbar:** "Initiate Contact" (Navbar.tsx:47) — scrolls to #contact
4. **Navbar links:** Services / About / Contact (Navbar.tsx:41-43)
5. **Discreet:** "admin" link (Navbar.tsx:53) — internal use

**Effective above-the-fold CTAs visible to a new visitor: 2 active CTAs** ("Book a Consultation" big button + "Initiate Contact" navbar). Primary CTA is obvious — large glass button, centered, high contrast.

**Funnel:**

```
/
   └─► [Hero "Book a Consultation"]
           └─► ConsultationModal (3-step) → POST /api/consultations → Resend email to beltz@quantlabusa.dev → DB insert
```

Alternative path:

```
/
   └─► Scroll to #contact (Contact.tsx)
           └─► [Card CTA "Start Your Project"] → ConsultationModal → POST
```

| Score Dimension | Result |
|---|---|
| Clicks to conversion | **4** (button → modal step1→2→3→submit) — close to target |
| Contact form vs phone | Form + mailto only — **no phone number CTA anywhere on homepage** — surprising gap |
| Calendar booking | None — FAIL |
| Pre-filled context | None |
| Lead-capture API | Works (`POST /api/consultations`) |
| Secondary CTAs | "Explore Services" scroll arrow, email mailto, navbar links — multiple — GOOD |
| "What happens next" | Yes (Contact section has "How it works" 3-step explainer) — GOOD |
| Social proof on path | Uptime + latency stats in Hero (Hero.tsx:110-117), 20+ projects in About.tsx:8 — minimal logo wall / no testimonials — WEAK |

---

## Step 3 — Specific Page-Level Issues

### `/calculators/stripe-cost`
- **`StripeCalculator.tsx` does not exist.**
- Per `15-lead-magnets.md`, calculator outputs cost-savings then asks for email to deliver PDF report.
- **No `/api/leads` endpoint exists.** Form POST would 404.
- **No PDF generation.** The "send me the report" delivery is undefined.
- **No email drip enrollment.** `16-email-drip.md` describes a 5-email sequence but there's no list-management infrastructure.
- **Recommendation:** This page is the #1 priority to ship correctly because it is the test case for the entire lead-capture stack.

### `/contact`
- **Does not exist as a dedicated route.** Contact is a section on `/` (`#contact`) rendered by `src/components/Contact.tsx`.
- Form structure: `Contact.tsx` itself contains no inputs — it's a CTA card that opens the same `ConsultationModal`.
- The actual form lives in `src/components/ConsultationModal.tsx` (3-step: About You → Your Project → Details).
- **Strength:** 4 trust items (Contact.tsx:11-16), 3-step "what happens next" explainer (lines 18-22), email mailto fallback.
- **Weakness:** No phone number, no calendar embed, no proof statistics inline.

### `ConsultationCTA` component
- **Does not exist.** No file named `ConsultationCTA.tsx` in `src/components/`.
- The CTA pattern is implemented inline in both `Hero.tsx` (line 98) and `Contact.tsx` (line 91-103) — both open `ConsultationModal`.
- **Recommendation:** Extract a shared `<ConsultationCTA service?={} city?={} source={} />` component that pre-populates the modal with context (see Fix #3 below).

### Phone number consistency
- **There is no phone number anywhere on the public site.** Searched `tel:` across `src/components/*` — zero hits in homepage components.
- `00-MASTER-INDEX.md` line 37 references the phone `+17706521282` as part of the planned LocalBusiness JSON-LD, but it is not rendered on any page.
- Resend "From" address is `onboarding@resend.dev` (consultations route line 45), not a branded domain — minor trust signal weakness.

---

## Step 4 — Top 10 Conversion Leaks (Prioritized)

| # | Leak | Funnel(s) | Severity | Fix |
|---|------|-----------|---------|-----|
| 1 | **Lead magnet form has no backend** — `/api/leads` doesn't exist; calculators black-hole | F7 | P0 critical | Build `/api/leads` (Resend + DB insert + Slack webhook + drip enrollment) |
| 2 | **No calendar booking integrated anywhere** | All 8 | P0 | Embed Calendly/Cal.com in `ConsultationModal` success state + add "Book a Call" as alternative CTA on every funnel |
| 3 | **Service/city/source context not passed into modal** | F1-F6 | P0 | Extract `<ConsultationCTA>` w/ props; URL params `?service=&city=&source=` pre-fill modal state |
| 4 | **`ConsultationModal` SERVICES array is missing penetration testing** | F2, F3 | P0 | Add "Penetration Testing & Red Team Ops" and "Cybersecurity Consulting" to SERVICES (mirror `Services.tsx`) |
| 5 | **No phone number CTA on any page** | All | P1 | Add `tel:+17706521282` link + "Call now" CTA — particularly on Atlanta / fintech / pen-test pages where local-trust matters |
| 6 | **No social proof on conversion path** (no logo wall, no testimonials, no founder photo) | All | P1 | Add testimonial slot + 3 logos + founder photo (`/founder.jpg` is one of the missing static assets in `01-technical-seo-audit.md`) |
| 7 | **Resend `from` address is `onboarding@resend.dev`** — looks like dev artifact | F8 | P1 | Verify `quantlabusa.dev` with Resend; switch to `hello@quantlabusa.dev` or `consultations@quantlabusa.dev` |
| 8 | **No Slack/Discord notification on form submit** — owner only learns via email | F8 (and future) | P2 | Add Slack webhook in `/api/consultations` for sub-minute response time. Currently email-only (route line 41-73) |
| 9 | **`/contact` doesn't exist as a route** — external links to /contact will 404 | F1-F6 | P2 | Create `/contact` page that renders the same Contact section + open modal on mount |
| 10 | **No exit-intent / re-engagement** (no email-capture popup, no "save for later" magnet) | F1-F8 | P2 | Add lightweight exit-intent → "Get our Stripe Cost Calculator + 5-email playbook" mini-form (uses #1 backend) |

---

## Per-Funnel Scorecards (Roll-Up)

| Funnel | Clicks | Form | Calendar | Pre-fill | API | Sec. CTA | Next Steps | Social Proof | TOTAL /8 |
|---|---|---|---|---|---|---|---|---|---|
| 1. City `/software-development-atlanta-ga` | 6 (F) | Y | N | N | Y | N | Y | N | **3/8** |
| 2. Service `/services/penetration-testing` | 5 (F) | Y | N | N (broken!) | Y | N | partial | weak | **2.5/8** |
| 3. City×Service combo | 5 (F) | Y | N | N (worst) | Y | N | partial | N | **2/8** |
| 4. Case study `/work/hobbspeak` | 5 (F) | Y | N | N | Y | N | partial | Y | **3.5/8** |
| 5. Industry `/industries/fintech` | 5 (F) | Y | N | N | Y | N | partial | N | **2.5/8** |
| 6. VS `/vs/salesforce` | 5 (F) | Y | N | N | Y | N | partial | N | **2.5/8** |
| 7. Lead magnet `/calculators/stripe-cost` | 2 (P) | N (broken) | N | N | **NONE** | N | N | N | **1/8** |
| 8. Homepage `/` | 4 (P) | Y | N | N | Y | Y | Y | weak | **5.5/8** |

**Average: 2.8/8** across the planned funnel surface. Homepage is the only one above 5.

---

## Funnel Diagrams (Current State and Recommended State)

### Funnel 1 — City Page (CURRENT, hypothetical if built today)

```
ENTRY: /software-development-atlanta-ga
  │
  ▼  [Read page, look for CTA]
[CTA: "Book a Consultation"]
  │
  ▼  Click — scrolls to #contact OR opens modal directly
[ConsultationModal step 1: About You]   ← 4 inputs
  │
  ▼  Next
[Step 2: Your Project]                  ← service select (PEN-TEST MISSING), proj type, budget, timeline
  │
  ▼  Next
[Step 3: Details]                       ← message, referral
  │
  ▼  Submit
POST /api/consultations
  │
  ├─► DB insert (Neon)
  ├─► Resend email to beltz@quantlabusa.dev
  └─► Success modal: "we'll be in touch within 1 business day"
```

### Funnel 1 — City Page (RECOMMENDED)

```
ENTRY: /software-development-atlanta-ga
  │  (page is server-rendered, has LocalBusiness JSON-LD, social proof, 1 logo wall)
  │
  ▼
[PRIMARY CTA: "Book Atlanta Consultation"] — pre-fills modal with city=atlanta + source=atlanta-page
[SECONDARY CTA: "Schedule a 30-min call →"] — opens Calendly embed
[TERTIARY: tel:+17706521282 "Call now"]
[QUATERNARY: "Download Atlanta Build vs Buy guide"] — POST /api/leads
  │
  ▼  Click PRIMARY
[ConsultationModal — service & city pre-selected, message placeholder mentions Atlanta]
  │
  ▼  Submit (≤2 effective decisions for the user since pre-filled)
POST /api/consultations + Slack alert + Resend drip enrollment
  │
  ▼
Success state shows Calendly inline → user picks a time → next click is the call.
```

### Funnel 7 — Lead Magnet (CURRENT) — BROKEN

```
ENTRY: /calculators/stripe-cost                    [PAGE DOES NOT EXIST]
  │
  ▼
[Calculator form]
  │
  ▼
[Result shown]
  │
  ▼
[Email input — "send me the PDF"]
  │
  ▼
POST /api/leads                                    [ENDPOINT DOES NOT EXIST → 404]
  │
  ▼
EMAIL NEVER SENT, USER NEVER ENROLLED, LEAD LOST
```

### Funnel 7 — Lead Magnet (RECOMMENDED)

```
ENTRY: /calculators/stripe-cost
  │
  ▼
[Calculator (no gate yet) — user enters values, sees result instantly]
  │
  ▼
[Inline CTA: "Get the full $1,200 savings playbook PDF + 5-email Stripe course →"]
  │
  ▼
POST /api/leads { email, source: "stripe-calc", computed_savings, ... }
  │
  ├─► DB insert into leads table
  ├─► Resend transactional: PDF attachment delivered
  ├─► Resend audience add → drip sequence triggers
  ├─► Slack webhook → #leads channel ("New lead: jane@acme.com via Stripe calc, est. $1,200 savings")
  └─► Return 200 → success state shows Calendly + "Want help shipping this? Book a call →"
```

---

## Recommended Implementation Order

1. **Build `/api/leads` route** mirroring the structure of `/api/consultations/route.ts` but with:
   - `email`, `source`, `metadata` (jsonb) columns
   - Resend transactional email (PDF or markdown)
   - Resend audience-add for drip
   - Slack webhook env var `SLACK_LEADS_WEBHOOK`

2. **Extract `<ConsultationCTA service?={} city?={} source={} className={} />`** component:
   - Wraps button + modal
   - Pushes context to modal via prop or URL search-params
   - Modify `ConsultationModal` to accept `defaultService` / `defaultCity` props

3. **Fix `ConsultationModal.tsx:9-18` SERVICES array** — add Penetration Testing + Cybersecurity Consulting to match `Services.tsx`

4. **Embed Calendly in `ConsultationModal` success state** — `<iframe src="https://calendly.com/quantlabusa/30min" />` after submit

5. **Replace `onboarding@resend.dev` with `consultations@quantlabusa.dev`** in `/api/consultations/route.ts:45`

6. **Add phone number CTA** to Hero + Contact + Navbar (`tel:+17706521282`)

7. **Build `/calculators/stripe-cost` page + `StripeCalculator.tsx`** wired to `/api/leads`

8. **Replicate calculator pattern for the other 6 lead magnets** in `15-lead-magnets.md`

9. **Add Slack webhook to `/api/consultations`** for sub-minute response

10. **Build `/contact` route** that renders Contact section standalone + auto-opens modal

---

## Reference Map — Where to Edit

| Recommendation | File / Path |
|---|---|
| Fix SERVICES array | `src/components/ConsultationModal.tsx:9-18` |
| Add Calendly to success state | `src/components/ConsultationModal.tsx:281-308` |
| New lead API | `src/app/api/leads/route.ts` (create) |
| New CTA component | `src/components/ConsultationCTA.tsx` (create) |
| Pre-fill modal | `src/components/ConsultationModal.tsx:142-159` add `defaultService`/`defaultCity` props |
| Fix Resend sender | `src/app/api/consultations/route.ts:45` |
| Phone CTA on nav | `src/components/Navbar.tsx:46-51` |
| Phone CTA on hero | `src/components/Hero.tsx:93-101` |
| `/contact` route | `src/app/contact/page.tsx` (create) |
| Stripe calculator | `src/app/calculators/stripe-cost/page.tsx` + `StripeCalculator.tsx` (create) |
| Schema with phone | `src/app/layout.tsx` — add Organization+LocalBusiness JSON-LD per `10-schema-jsonld.md` |
| Slack webhook | `src/app/api/consultations/route.ts:41-73` add `fetch(process.env.SLACK_LEADS_WEBHOOK, ...)` |

---

## Cross-References

- Technical issues blocking all funnels: `01-technical-seo-audit.md` (P0 fixes — site is 404ing in prod)
- City pages content drafts: `05-city-landing-pages.md`
- Service pages content drafts: `06-service-pages.md`
- Case study templates: `07-case-studies.md`
- Lead magnet specs: `15-lead-magnets.md`
- Drip sequence to enroll into: `16-email-drip.md`
- Phone & address for tel: links + LocalBusiness: `00-MASTER-INDEX.md` (line 37) — `+17706521282`, Macon GA

---

*End of audit.*
