# 13 - CSS-Tricks (Geoff Graham)

- **Target site:** https://css-tricks.com
- **Contact:** Guest-post form at css-tricks.com/guest-posting/; Geoff Graham editor (DigitalOcean-owned)
- **DR/DA:** 91
- **Topical fit:** Front-end CSS, SVG, accessibility
- **Achievability:** Medium - editorial gate; topics must be novel and demo-rich
- **Time-to-link:** 60-90 days
- **What we want:** Published guest post with byline + dofollow link to quantlabusa.dev
- **Value to readers:** A working CSS+SVG service-area map pattern that ships in production

---

## DRAFT EMAIL

**To:** Submit via css-tricks.com/guest-posting/ form
**Subject (form's title field):**
- A: Service-area maps without Mapbox lock-in
- B: Pitch: Pure CSS + SVG service-area maps for service businesses
- C: Service-area maps in CSS+SVG, 1.2s LCP improvement vs Mapbox

---

Hi Geoff,

Your `:has()` for container-aware layouts post last quarter changed how I write a couple of our admin dashboards - we replaced two MutationObserver setups with selectors. I want to contribute back a small but useful frontend pattern.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. We build for service businesses (towing, fencing, painting) that need a service-area visualization on their marketing page without paying Mapbox $0.50/load and without an iframe that destroys CWV. We shipped a CSS + SVG approach on Wilder Recovery's site and again on Northcrest Fence & Gate's nine city pages.

The CSS-Tricks article I want to write:

- Pure SVG state-and-county pathing with viewBox-driven responsive sizing - no JavaScript for the rendering pass
- CSS custom properties for service-area shading so coverage and pricing tiers can update from a single data source (a 12-line CSS snippet that controls 9 city pages)
- `pointer-events` and `aria-label` patterns that keep the map accessible to screen readers without a separate text fallback
- LCP numbers vs. a Mapbox baseline - 1.2s improvement on mobile in real Lighthouse runs

Article spec: 1,600-2,000 words, includes full SVG, the CSS, a CodePen, and Lighthouse screenshots from the production deploys. Original to CSS-Tricks.

Live examples:
- https://northcrestfencing.com (city pages, view source)
- Case study: https://quantlabusa.dev/work/northcrest-fence

Happy to send a CodePen first if you want to vet the technique before committing to the article.

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Confirm Geoff is still editor at CSS-Tricks
- [ ] Reference his most recent post in last 30 days (substitute :has() example if dated)
- [ ] Verify the SVG service-area pattern hasn't been covered in last 12 months on CSS-Tricks
- [ ] Submit via the form
- [ ] Day +14 follow-up
- [ ] Day +45 final follow-up
