# CRO Integration Guide

How to drop the CRO components into the existing Next.js App Router site. All components are client components and assume `framer-motion` + `lucide-react` (already in deps).

## Provider pattern for site-wide modals

The `StickyMobileCTA` and `ScrollTriggeredCTA` both need to open the existing `ConsultationModal`. The cleanest pattern is a thin client wrapper that owns the modal state and renders the global CTAs. Create it once and mount it inside `src/app/layout.tsx`.

Suggested wrapper (`src/components/GlobalCROProviders.tsx` — author whichever agent owns layout integration):

```tsx
"use client";

import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { ScrollTriggeredCTA } from "./ScrollTriggeredCTA";

export function GlobalCROProviders() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ScrollTriggeredCTA onCtaClick={() => setOpen(true)} />
      <StickyMobileCTA onBookClick={() => setOpen(true)} hidden={open} />
      <ConsultationModal open={open} onClose={() => setOpen(false)} source="global_cro" />
    </>
  );
}
```

Then `<GlobalCROProviders />` goes inside `<body>` in `src/app/layout.tsx`. `<SocialProofBar />` goes outside `<Navbar />` so it sits above the header.

## SocialProofBar

**Where.** Inside `src/app/layout.tsx`, immediately before `<Navbar />`. Renders site-wide.

**Snippet.**
```tsx
import { SocialProofBar } from "@/components/SocialProofBar";

<SocialProofBar />
```

**When to customize.** Pass a custom `items` array for industry-specific landing pages — e.g. fintech pages can highlight the trading-bot case study.

**Tracks.** Dismissal is stored in `localStorage` (`qlu-social-proof-dismissed-v1`). Conversion: count `consultation_modal_open` events from sessions that did not dismiss the bar.

## StickyMobileCTA

**Where.** Site-wide via the `GlobalCROProviders` wrapper above. Only shows on viewports `<lg` (1024px).

**Snippet (inside provider).**
```tsx
<StickyMobileCTA onBookClick={() => setOpen(true)} hidden={open} />
```

**Recommended pages (if you want to scope it per-page instead of site-wide).** All city-landing pages (`/software-development-*`), all service pages (`/services/*`), and the home page. Skip on `/sales`, `/print`, and `/admin`.

**Tracks.** Tel: click and Book click both fire `trackEvent("cta_click", { source: "sticky_mobile_call" | "sticky_mobile_book" })` (see `src/lib/analytics.ts`).

## ExitIntentModal

**Where.** Mount inside specific page components. Do NOT mount site-wide — only on commercial-intent pages.

**Recommended pages.**
- `/software-development-*` (14 city pages)
- `/services/*` (service pages)
- `/calculators/*` (after calculator completion is a different flow — these are pre-completion)
- `/vs/*` (comparison pages)
- `/industries/*`

**Snippet (drop at the end of the page component).**
```tsx
import { ExitIntentModal } from "@/components/ExitIntentModal";

<ExitIntentModal
  slug="atlanta-ga"
  resourceName="Build vs Buy Playbook"
  resourceUrl="/resources/build-vs-buy.pdf"
/>
```

**Tracks.** On submit, fires `trackLead({ source: "exit-intent-<slug>", magnet: resourceName })` against `/api/leads`.

## ScrollTriggeredCTA

**Where.** Site-wide via `GlobalCROProviders` wrapper. Pass `disabled` on pages where it would distract — `/contact`, `/questionnaire`, `/admin/*`, `/print/*`.

**Snippet (inside provider).**
```tsx
<ScrollTriggeredCTA onCtaClick={() => setOpen(true)} />
```

**Tracks.** Click fires `trackEvent("cta_click", { source: "scroll_triggered_cta" })`.

## AnnouncementBar

**Where.** Conditionally inside `src/app/layout.tsx`, above `<SocialProofBar />`. Hidden by default. Use only for time-sensitive announcements.

**Snippet (in layout, wrapped in a server-side check or env flag).**
```tsx
import { AnnouncementBar } from "@/components/AnnouncementBar";

{process.env.NEXT_PUBLIC_ANNOUNCEMENT_MESSAGE && (
  <AnnouncementBar
    message={process.env.NEXT_PUBLIC_ANNOUNCEMENT_MESSAGE}
    href={process.env.NEXT_PUBLIC_ANNOUNCEMENT_HREF}
  />
)}
```

**Tracks.** Link click fires `trackEvent("cta_click", { source: "announcement_bar" })`.

## ABTest + ab.ts

**Where.** Anywhere you want to fork UI by variant. Page-level or component-level.

**React component snippet.**
```tsx
import { ABTest } from "@/components/ABTest";

<ABTest experiment="hero-cta-v1" variants={["A", "B"]}>
  {(v) => v === "A" ? <Button>Book a Call</Button> : <Button>Get a Custom Quote</Button>}
</ABTest>
```

**Imperative snippet (for non-React code, event handlers, etc.).**
```tsx
import { getVariant } from "@/lib/ab";

const v = getVariant("pricing-cta-color-v1");
const bgClass = v === "B" ? "bg-amber-500" : "bg-sky-500";
```

**Important.** The variant resolver is client-only. If you call `<ABTest>` server-side, it will render the `fallback` until hydration completes. Use `fallback` to avoid layout shift.

## Tracking conversions per experiment

The Analytics agent has already exposed `trackEvent` and `trackLead` in `src/lib/analytics.ts`. Every variant impression automatically fires:

```js
gtag('event', 'experiment_impression', { experiment_id, variant_id });
plausible('experiment_impression', { props: { experiment_id, variant_id } });
```

In GA4: create two event-scoped Custom Dimensions — `experiment_id` and `variant_id` — and use them as a Comparison or Audience filter on the conversion event (`lead_form_submit`, `calculator_complete`, `consultation_modal_open`). The CVR per variant is then visible in standard GA4 reports.

## Quick checklist for shipping a new experiment

1. Add the entry to `src/lib/cro-config.ts` with `status: "running"`.
2. Wrap the variant UI in `<ABTest experiment="...">`.
3. Verify the impression fires in GA4 Realtime > Events.
4. Wait for the sample-size threshold from `cro-playbook.md`.
5. Read the result; if winner, flip `status: "winner"` and `winner: "B"`.
6. After 30 days, replace the `<ABTest>` call site with the winning UI directly and set `status: "archived"`.
