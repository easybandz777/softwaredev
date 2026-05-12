import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const SITEMAP_URL = "https://quantlabusa.dev/sitemap.xml";

const PING_ENDPOINTS: { name: string; url: string }[] = [
  {
    name: "google",
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: "bing",
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: "yandex",
    url: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
];

type PingResult = {
  engine: string;
  url: string;
  ok: boolean;
  status: number | null;
  error?: string;
};

function unauthorized(): NextResponse {
  return NextResponse.json(
    { ok: false, error: "Unauthorized" },
    { status: 401, headers: { "Cache-Control": "no-store" } },
  );
}

function isAuthorized(request: NextRequest): boolean {
  const expected = process.env.SITEMAP_PING_TOKEN;
  if (!expected || expected.length === 0) return false;

  const header = request.headers.get("authorization") ?? "";
  const bearer = header.toLowerCase().startsWith("bearer ")
    ? header.slice(7).trim()
    : "";
  const headerToken = request.headers.get("x-sitemap-ping-token") ?? "";
  const queryToken = request.nextUrl.searchParams.get("token") ?? "";

  return bearer === expected || headerToken === expected || queryToken === expected;
}

async function pingEngine(endpoint: { name: string; url: string }): Promise<PingResult> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(endpoint.url, {
      method: "GET",
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": "QuantLabUSA-SitemapPing/1.0 (+https://quantlabusa.dev)" },
    });
    clearTimeout(timer);
    return {
      engine: endpoint.name,
      url: endpoint.url,
      ok: response.ok,
      status: response.status,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return {
      engine: endpoint.name,
      url: endpoint.url,
      ok: false,
      status: null,
      error: message,
    };
  }
}

async function executePings(): Promise<PingResult[]> {
  return Promise.all(PING_ENDPOINTS.map(pingEngine));
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) return unauthorized();
  const results = await executePings();
  const allOk = results.every((r) => r.ok);
  return NextResponse.json(
    {
      ok: allOk,
      sitemap: SITEMAP_URL,
      pingedAt: new Date().toISOString(),
      results,
    },
    {
      status: allOk ? 200 : 207,
      headers: { "Cache-Control": "no-store" },
    },
  );
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!isAuthorized(request)) return unauthorized();
  return NextResponse.json(
    {
      ok: true,
      sitemap: SITEMAP_URL,
      endpoints: PING_ENDPOINTS.map((e) => e.name),
      hint: "POST this endpoint with the same auth to trigger pings.",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
