# Sitemap Ping Report — QUANT LAB USA INC

**Date:** 2026-05-12
**Sitemap URL:** `https://quantlabusa.dev/sitemap.xml`
**Production status:** Live

---

## 1. Sitemap Health Check

| Check | Result |
|---|---|
| HTTP status | **200 OK** |
| Content-Type | `application/xml` |
| Server | Vercel |
| Cache-Control | `public, max-age=0, must-revalidate` |
| ETag | `5bdb6c69e34089ecdbb805b65740a8fe` |
| `<url>` entry count | **177** (matches expected) |
| CORS | `access-control-allow-origin: *` (open to crawlers) |

Sitemap is healthy, well-formed XML, and publicly reachable by all major crawlers.

---

## 2. Search Engine Ping Results

Command template used:
```
curl -s -o /dev/null -w "%{http_code}|%{url_effective}|%{time_total}\n" --max-time 15 -L <URL>
```

| Engine | Endpoint | HTTP Status | Response Time | Redirected URL | Result |
|---|---|---|---|---|---|
| **Google** | `https://www.google.com/ping?sitemap=https://quantlabusa.dev/sitemap.xml` | **404** | 0.146 s | (none) | Expected — endpoint deprecated |
| **Bing** | `https://www.bing.com/ping?sitemap=https://quantlabusa.dev/sitemap.xml` | **410 Gone** | 0.176 s | (none) | Endpoint retired by Microsoft |
| **Yandex** | `https://webmaster.yandex.com/ping?sitemap=https://quantlabusa.dev/sitemap.xml` | **200 OK** | 1.042 s | (none) | Success — sitemap accepted |

---

## 3. Notes on Deprecated Endpoints

### Google (404)
Google **officially deprecated the sitemap ping endpoint in June 2023** ([Google Search Central announcement](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping)). Their stated reason: the ping was almost always spam or unsupported formats, and Googlebot already discovers sitemap changes via crawl scheduling and `lastmod` timestamps. A 404 here is expected and **not a problem** — Googlebot will still pick up the sitemap on its normal crawl cycle, and `lastmod` values inside the XML will signal freshness.

### Bing (410 Gone)
Bing has also retired its anonymous ping endpoint in favor of the **IndexNow protocol** and the Bing Webmaster Tools UI. A 410 ("Gone") response indicates Microsoft has permanently shut down the endpoint. This is also **expected and not a problem** — if IndexNow is set up (you appear to have `indexnow-urls.txt` in this directory), Bing/Yandex will receive instant updates that way.

### Yandex (200 OK)
Yandex still honors the anonymous sitemap ping endpoint, and the response indicates the sitemap was received successfully. Yandex will queue a crawl of the 177 URLs.

---

## 4. Recommendations

Because Google and Bing no longer accept anonymous ping requests, **the only reliable way to guarantee timely indexing is via their authenticated webmaster consoles and IndexNow**:

### Required actions (manual, one-time)
1. **Google Search Console** — `https://search.google.com/search-console`
   - Add and verify property `https://quantlabusa.dev`
   - Submit sitemap URL: `sitemap.xml`
   - Use the **URL Inspection** tool to request indexing on the top 10–20 highest-priority URLs (homepage, top service pages, top city pages)
   - Monitor *Pages* → *Indexed* and *Sitemaps* status weekly

2. **Bing Webmaster Tools** — `https://www.bing.com/webmasters`
   - Add and verify site (can import directly from Search Console)
   - Submit sitemap URL: `sitemap.xml`
   - Submit URLs via the *URL Submission* tool (up to 10,000/day)
   - This also feeds Yahoo and DuckDuckGo

3. **IndexNow protocol** (recommended for ongoing updates)
   - A single POST notifies Bing, Yandex, Seznam.cz, and Naver simultaneously
   - You already have `indexnow-urls.txt` staged in this directory — wire it up via Bing Webmaster Tools or post directly to `https://api.indexnow.org/indexnow`
   - Requires an API key file at `https://quantlabusa.dev/<key>.txt`

### Ongoing best practices
- Keep `lastmod` timestamps current in the sitemap whenever pages change — this is now the primary signal Google uses
- Re-submit the sitemap in Search Console only when you've added/removed a large batch of URLs (don't re-ping daily)
- Watch Search Console for *Discovery* vs *Crawl* vs *Index* coverage to identify orphan or de-prioritized URLs
- Build internal links to new URLs — crawl discovery via internal linking is now more valuable than ping

---

## 5. Summary

- Sitemap is healthy: **200 OK / 177 URLs / application/xml**
- Google: **404** (deprecated 2023 — expected)
- Bing: **410** (deprecated — expected)
- Yandex: **200 OK** — sitemap received
- For Google + Bing indexing, **submit via Search Console + Bing Webmaster Tools UI**. Set up IndexNow for ongoing updates.
