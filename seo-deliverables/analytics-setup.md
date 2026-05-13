# Analytics & Tracking Setup Walkthrough

This is the operator manual for wiring up the analytics layer that ships with the site. The code is in place; what you need to do is create accounts, copy IDs into Vercel, and verify events fire. Plan on 45-60 minutes for the full setup.

## Why this matters

Every SEO win, every page we rank, every backlink — they are invisible until you can see traffic, sessions, scroll depth, and form submissions. This stack gives you four independent telemetry streams (GA4, Clarity, Meta, LinkedIn) plus one optional privacy-first alternative (Plausible). All of them are env-gated: an unset variable means that vendor's script never loads.

## 1. Google Analytics 4

GA4 is the baseline. Free, dominant, and required for Google Ads if you ever run paid.

1. Go to `https://analytics.google.com` and sign in with the Google account you want to own this property.
2. Click the gear (Admin) in the lower left. In the Account column hit "Create" then "Property". Name it "QUANT LAB USA — quantlabusa.dev", set the time zone to America/New_York, currency USD.
3. In the new property's column click "Data Streams" then "Add stream" then "Web". URL is `https://quantlabusa.dev`, stream name "Web — Production".
4. After it creates, you see a Measurement ID that looks like `G-XXXXXXXXXX`. Copy it.
5. Under Admin then Events then "Mark as conversion" toggle on these four events once they start appearing: `lead_form_submit`, `calculator_complete`, `consultation_modal_open`, `cta_click`. They appear within 24 hours of the first time a user fires one.

Paste that `G-XXXXXXXXXX` value into Vercel as `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (see section 6).

## 2. Microsoft Clarity

Clarity gives you free session replay and heatmaps. It also feeds Bing/Microsoft Advertising — useful because Bing traffic is undervalued by most competitors.

1. Go to `https://clarity.microsoft.com` and sign in with a Microsoft account.
2. Click "New project". Name it "quantlabusa.dev", site URL `https://quantlabusa.dev`, category "Business Services".
3. The project ID is the alphanumeric string in the install snippet — looks like `abc123xyz`. Copy it (not the entire script tag, just the ID).
4. Paste into Vercel as `NEXT_PUBLIC_CLARITY_PROJECT_ID`.

Clarity has no event setup needed — it captures everything automatically. Session replays start showing up within an hour of the first visitor.

## 3. Meta Pixel

Required if you ever advertise on Facebook or Instagram. Also useful for lookalike audience research even without active spend.

1. Go to `https://business.facebook.com` and create or open a Business account.
2. In Events Manager click "Connect data sources" then "Web" then "Meta Pixel". Name it "QUANT LAB USA Pixel".
3. URL `https://quantlabusa.dev`. Choose "Manual installation" (we already wired it).
4. Copy the 15-16 digit Pixel ID from the top of the pixel's overview page.
5. Paste into Vercel as `NEXT_PUBLIC_META_PIXEL_ID`.

Optional: also generate a Conversions API access token under Settings then "Generate access token" and store it as the server-side env `META_CAPI_ACCESS_TOKEN`. This unlocks higher-fidelity lead tracking that bypasses iOS 14+ tracking limits — wire it into `/api/leads` later.

## 4. LinkedIn Insight Tag

The single highest-intent channel for B2B services like QUANT LAB. Required to retarget executives and decision-makers.

1. Go to `https://www.linkedin.com/campaignmanager`. Create an ad account if you do not have one (no spend required to install the tag).
2. In the top nav choose "Account assets" then "Insight Tag" then "Install my Insight Tag".
3. Pick "I will install the tag myself". The Partner ID is the 6-7 digit number shown — copy it.
4. Paste into Vercel as `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`.
5. Optional: under "Conversions" create a new conversion called "Lead" with type "Lead", attribution "Last touch". Copy its conversion ID and add it as `NEXT_PUBLIC_LINKEDIN_LEAD_CONVERSION_ID` — the `trackLead` helper will fire it.

## 5. Plausible (optional — privacy-first alternative)

If you ever decide GA4 is too invasive or get a GDPR complaint, Plausible is the drop-in alternative. Paid ($9/mo for up to 10k visits/mo).

1. Sign up at `https://plausible.io`.
2. Add a site, domain `quantlabusa.dev`.
3. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=quantlabusa.dev` in Vercel.

Plausible reads `window.plausible(...)` calls — already wired in `trackEvent`. You can run Plausible in parallel with GA4; events fire to both.

## 6. Setting env vars in Vercel

For each ID you collected, run from a terminal with the Vercel CLI installed:

```
vercel env add NEXT_PUBLIC_GA4_MEASUREMENT_ID production
vercel env add NEXT_PUBLIC_CLARITY_PROJECT_ID production
vercel env add NEXT_PUBLIC_META_PIXEL_ID production
vercel env add NEXT_PUBLIC_LINKEDIN_PARTNER_ID production
```

It prompts you to paste the value. Repeat for `preview` and `development` if you want the tags to fire in those environments too (recommended for `preview` so you can verify before promoting).

After all vars are set, trigger a redeploy: `vercel --prod` or push an empty commit. Env vars only take effect on fresh builds.

## 7. Recommended conversion events in GA4

The site already emits the right events via `src/lib/analytics.ts`. In GA4 mark these four as conversions (Admin then Events then toggle "Mark as conversion"):

1. `lead_form_submit` — fires from any lead form on the site
2. `calculator_complete` — fires when a calculator (savings/ROI/quote) is completed
3. `consultation_modal_open` — proxy for high-intent (modal-open is closer to conversion than CTA-click alone)
4. `cta_click` — fires on every primary CTA

Set up custom audiences for retargeting once they have 7-30 days of data: "all leads", "calculator-completers who did not convert", "high-intent (modal opened, no submission)".

## 8. Privacy & consent

`ConsentBanner.tsx` shows a bottom-right card on first visit. Tracking scripts ONLY load after the visitor clicks "Accept all" — the banner sets a `qlu-consent=granted` cookie which `Analytics.tsx` reads on every render. "Reject non-essential" sets `qlu-consent=denied` and no tracking ever loads. Do-Not-Track headers are also honored — DNT visitors get no tracking regardless of consent.

Make sure `/privacy` (the link in the banner) explains what is collected, by whom, and how to opt out. It is required for GDPR, CCPA, and the Apple App Tracking Transparency framework if you ever ship a companion app.

## 9. Verifying the install

After deploying with all IDs set, accept consent on a fresh browser session and:

- GA4: open `https://analytics.google.com` then Reports then Realtime — you should see one user within 30 seconds.
- Clarity: dashboard at `clarity.microsoft.com` shows "Live users" within a minute.
- Meta Pixel: install the "Meta Pixel Helper" Chrome extension, browse the site, confirm it shows "1 pixel found, PageView fired".
- LinkedIn: in Campaign Manager then Insight Tag, status flips from "Unverified" to "Active" within an hour of the first visit.

If any of these fail, double-check the env var is set on the correct Vercel environment and that you redeployed after setting it.
