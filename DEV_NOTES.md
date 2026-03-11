# QuantLab Dev Notes

A running log of issues encountered and how they were resolved.

---

## 2026-03-05 — Consultation System Build

### Issue 1: `middleware.ts` deprecation in Next.js 16

**What broke:** Next.js 16 deprecated the `middleware.ts` file convention and replaced it with `proxy.ts`. The dev server emitted:
```
⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.
```

**Fix:**
1. Renamed `src/middleware.ts` → `src/proxy.ts`
2. Renamed the exported function from `middleware` to `proxy`:
   ```ts
   // Before
   export function middleware(req: NextRequest) { ... }
   // After
   export function proxy(req: NextRequest) { ... }
   ```
The `config.matcher` array stays the same — only the filename and function name change.

---

### Issue 2: Nested `<html>/<body>` in child layout

**What broke:** `src/app/admin/layout.tsx` was initially written with its own `<html>` and `<body>` tags. In Next.js App Router, only the **root** `layout.tsx` may contain these tags. A child layout wrapping content in `<html>/<body>` causes a hydration error.

**Fix:** Replaced the html/body structure with a plain `<div>` carrying the background/color styles:
```tsx
// Before (wrong)
export default function AdminLayout({ children }) {
  return <html><body style={...}>{children}</body></html>;
}

// After (correct)
export default function AdminLayout({ children }) {
  return <div style={{ background: "#080d18", minHeight: "100vh" }}>{children}</div>;
}
```

---

### Issue 3: Dev server dropped / connection refused

**What happened:** The `npm run dev` process was terminated (user cancelled a background task), leaving the browser on `chrome-error://chromewebdata/`.

**Fix:** Simply re-ran `npm run dev` from `c:\softwareco`. The server restarts in ~1.3s using Turbopack.

```powershell
npm run dev
```

---

## Architecture Notes — Consultation System

| Layer | File | Notes |
|---|---|---|
| Database | `src/lib/db.ts` | SQLite via `better-sqlite3`. DB file at `data/quantlab.db`. Auto-migrates on startup. Seeds `admin`/`quantlab2024` on first run. |
| Public API | `src/app/api/consultations/route.ts` | POST — accepts form submissions |
| Admin Auth | `src/app/api/admin/login/route.ts` | POST login / DELETE logout. Sets `httpOnly` cookie for 8 hours. |
| Admin Data | `src/app/api/admin/consultations/route.ts` | GET all records (auth-protected) |
| Admin CRUD | `src/app/api/admin/consultations/[id]/route.ts` | PATCH status, DELETE record (auth-protected) |
| Route guard | `src/proxy.ts` | Redirects `/admin/dashboard` to `/admin` if session cookie missing |
| Modal UI | `src/components/ConsultationModal.tsx` | Glassmorphism modal with form, loading, success states |
| Admin UI | `src/app/admin/page.tsx` | Login page |
| Admin UI | `src/app/admin/dashboard/page.tsx` | Dashboard with stat cards, data table, status management |

**Default admin credentials:** `marsh` / `printer`
**Database:** Neon Postgres (via `@vercel/postgres` — needs `POSTGRES_URL` env var on Vercel)

---

## ⚠️ CRITICAL — Dual-Purpose Architecture (quantlabusa.dev)

### What this repo does

`c:\softwareco` (deployed to **quantlabusa.dev**) serves **two purposes simultaneously**:

1. **The public QuantLab Software Solutions website** — hero, services, about, contact, training portal, admin dashboard
2. **License server proxy** — forwards license API calls from `quantlabusa.com` products to the real license server at `quantlabusa.com`

### The 3 license proxy routes — DO NOT DELETE

These files must always exist in this codebase:

| File | Route | What it does |
|---|---|---|
| `src/app/api/activate/route.ts` | `POST /api/activate` | Proxies license activation to `quantlabusa.com` |
| `src/app/api/verify/route.ts` | `POST /api/verify` | Proxies license verification to `quantlabusa.com` |
| `src/app/api/deactivate/route.ts` | `POST /api/deactivate` | Proxies license deactivation to `quantlabusa.com` |

Each one simply forwards the POST body to the matching endpoint on `https://quantlabusa.com` and returns the response. They are **called by software products sold on quantlabusa.com** — removing them will break license checks for paying customers.

### Where the actual license logic lives

The **real** license server is a **separate repo**:
- **Repo:** `github.com/easybandz777/quantlab-website`
- **Local path:** `c:\quantlab website`
- **Routes:** `/pages/api/activate.ts`, `/pages/api/verify.ts`, `/pages/api/deactivate.ts`
- **Deployed at:** `quantlabusa.com`

The proxy files in **this** repo (`quantlabusa.dev`) just forward traffic to that server.

### How the two repos relate

```
Your software product
        │
        │  POST /api/verify  (called by the app's license check)
        ▼
quantlabusa.dev  ←── this repo (c:\softwareco)
  /api/verify/route.ts
        │
        │  forwards request
        ▼
quantlabusa.com  ←── license server repo (c:\quantlab website)
  /pages/api/verify.ts
        │
        │  checks Neon DB, returns { valid: true/false }
        ▼
Response flows back to your software
```

### What broke before and why

The `softwaredev-proxy` (3 plain JS files in `c:\quantlab website\softwaredev-proxy`) was deployed separately to `quantlabusa.dev` via Vercel CLI. When the domain was pointed at this Next.js app instead, those proxy routes disappeared — because they lived in a different deployment, not in this codebase. The fix was moving them into this repo as proper `route.ts` files.

### Rule of thumb

> If you're adding or deleting API routes in `src/app/api/`, make sure you never touch the `activate/`, `verify/`, or `deactivate/` folders. Everything else is fair game.

---
