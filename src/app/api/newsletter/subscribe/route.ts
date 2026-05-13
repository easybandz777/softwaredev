import { NextRequest, NextResponse } from "next/server";
import { rateLimitOk, subscribeEmail } from "@/lib/newsletter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function clientIp(request: NextRequest): string {
    const fwd = request.headers.get("x-forwarded-for") || "";
    const first = fwd.split(",")[0]?.trim();
    if (first) return first;
    const real = request.headers.get("x-real-ip");
    if (real) return real.trim();
    return "unknown";
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid JSON body." },
            { status: 400, headers: { "Cache-Control": "no-store" } },
        );
    }
    if (!body || typeof body !== "object") {
        return NextResponse.json(
            { ok: false, error: "Body must be JSON object." },
            { status: 400, headers: { "Cache-Control": "no-store" } },
        );
    }
    const b = body as Record<string, unknown>;
    const email = typeof b.email === "string" ? b.email.trim() : "";
    const name = typeof b.name === "string" ? b.name.trim() : "";
    const source =
        typeof b.source === "string" && b.source.trim()
            ? b.source.trim()
            : null;

    if (!email) {
        return NextResponse.json(
            { ok: false, error: "Email is required." },
            { status: 400, headers: { "Cache-Control": "no-store" } },
        );
    }

    const ip = clientIp(request);
    const rl = await rateLimitOk(ip);
    if (!rl.ok) {
        return NextResponse.json(
            {
                ok: false,
                status: "rate_limited",
                error: "Too many requests. Try again later.",
            },
            {
                status: 429,
                headers: {
                    "Cache-Control": "no-store",
                    "Retry-After": String(rl.retryAfterSec),
                },
            },
        );
    }

    const result = await subscribeEmail({
        email,
        name,
        source: source || "newsletter",
    });

    if (result.status === "invalid") {
        return NextResponse.json(
            { ok: false, status: "invalid", error: result.error },
            { status: 400, headers: { "Cache-Control": "no-store" } },
        );
    }
    if (result.status === "error") {
        return NextResponse.json(
            { ok: false, status: "error", error: result.error },
            { status: 500, headers: { "Cache-Control": "no-store" } },
        );
    }

    return NextResponse.json(
        { ok: true, status: result.status, subscriberId: result.subscriberId },
        { status: 200, headers: { "Cache-Control": "no-store" } },
    );
}
