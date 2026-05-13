import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
    fetchDuePending,
    markFailed,
    markSent,
    unsubscribeUrl,
    leadMagnetUrlForSource,
    CALENDLY_URL_DEFAULT,
    type LeadDripRow,
} from "@/lib/drip";
import { buildDripTemplate, pickSubject, type DripStep } from "@/lib/email-templates";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "William Beltz <onboarding@resend.dev>";
const REPLY_TO = "beltz@quantlabusa.dev";
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://quantlabusa.dev";
const MAX_PER_TICK = 50;

function unauthorized(): NextResponse {
    return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401, headers: { "Cache-Control": "no-store" } },
    );
}

function isAuthorized(request: NextRequest): boolean {
    const drip = process.env.DRIP_CRON_SECRET || "";
    const vercel = process.env.CRON_SECRET || "";
    if (!drip && !vercel) return false;

    const auth = request.headers.get("authorization") ?? "";
    const bearer = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
    const header = request.headers.get("x-drip-cron-secret") ?? "";
    const query = request.nextUrl.searchParams.get("token") ?? "";

    if (drip && (bearer === drip || header === drip || query === drip)) return true;
    if (vercel && (bearer === vercel || header === vercel || query === vercel)) return true;
    return false;
}

async function sendOne(row: LeadDripRow): Promise<{ ok: boolean; reason?: string }> {
    if (!process.env.RESEND_API_KEY) {
        return { ok: false, reason: "no-resend-key" };
    }

    const step = row.step as DripStep;
    if (step < 1 || step > 5) return { ok: false, reason: "invalid-step" };

    const ctx = {
        name: row.lead_name || row.lead_email,
        leadMagnetUrl: leadMagnetUrlForSource(row.source),
        calendlyUrl: CALENDLY_URL_DEFAULT,
        unsubscribeUrl: unsubscribeUrl(SITE_ORIGIN, row.lead_email),
    };

    const variant = row.subject_variant === "B" ? "B" : "A";
    const tpl = buildDripTemplate(step, ctx);
    const subject = pickSubject(tpl, variant);

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: row.lead_email,
            replyTo: REPLY_TO,
            subject,
            html: tpl.html,
            text: tpl.text,
            headers: {
                "List-Unsubscribe": `<${ctx.unsubscribeUrl}>, <mailto:${REPLY_TO}?subject=unsubscribe>`,
                "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
            },
        });
        if ((result as { error?: unknown }).error) {
            return { ok: false, reason: "resend-error" };
        }
        return { ok: true };
    } catch (err) {
        console.warn("[drip:tick] send failed:", err);
        return { ok: false, reason: "exception" };
    }
}

async function runTick(): Promise<NextResponse> {
    let processed = 0;
    let failed = 0;
    let skipped = 0;
    const errors: { id: string; reason?: string }[] = [];

    try {
        const due = await fetchDuePending(MAX_PER_TICK);
        for (const row of due) {
            const result = await sendOne(row);
            if (result.ok) {
                await markSent(row.id);
                processed += 1;
            } else {
                await markFailed(row.id);
                failed += 1;
                errors.push({ id: row.id, reason: result.reason });
            }
        }

        return NextResponse.json(
            {
                ok: true,
                processed,
                failed,
                skipped,
                errors: errors.slice(0, 10),
                ranAt: new Date().toISOString(),
            },
            { status: 200, headers: { "Cache-Control": "no-store" } },
        );
    } catch (err) {
        console.error("[drip:tick] fatal:", err);
        return NextResponse.json(
            { ok: false, error: "Internal error", processed, failed },
            { status: 500, headers: { "Cache-Control": "no-store" } },
        );
    }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    if (!isAuthorized(request)) return unauthorized();
    return runTick();
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    if (!isAuthorized(request)) return unauthorized();
    return runTick();
}
