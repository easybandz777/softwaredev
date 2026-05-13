import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
    ensureDripTable,
    fetchOnePending,
    markFailed,
    markSent,
    unsubscribeUrl,
    leadMagnetUrlForSource,
    CALENDLY_URL_DEFAULT,
} from "@/lib/drip";
import { buildDripTemplate, pickSubject, type DripStep } from "@/lib/email-templates";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "William Beltz <onboarding@resend.dev>";
const REPLY_TO = "beltz@quantlabusa.dev";
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://quantlabusa.dev";

function unauthorized(): NextResponse {
    return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401, headers: { "Cache-Control": "no-store" } },
    );
}

function isAuthorized(request: NextRequest): boolean {
    const expected = process.env.DRIP_CRON_SECRET;
    if (!expected || expected.length === 0) return false;
    const auth = request.headers.get("authorization") ?? "";
    const bearer = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
    const header = request.headers.get("x-drip-cron-secret") ?? "";
    return bearer === expected || header === expected;
}

type Body = {
    lead_id?: number;
    step?: number;
    lead_email?: string;
    lead_name?: string;
    source?: string | null;
    subject_variant?: "A" | "B";
    dry_run?: boolean;
};

export async function POST(request: NextRequest): Promise<NextResponse> {
    if (!isAuthorized(request)) return unauthorized();

    let body: Body;
    try {
        body = (await request.json()) as Body;
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
    }

    const step = Number(body.step);
    if (![1, 2, 3, 4, 5].includes(step)) {
        return NextResponse.json({ ok: false, error: "step must be 1-5" }, { status: 400 });
    }

    await ensureDripTable();

    let row = body.lead_id ? await fetchOnePending(Number(body.lead_id), step) : null;

    const email = (row?.lead_email || body.lead_email || "").trim().toLowerCase();
    if (!email) {
        return NextResponse.json(
            { ok: false, error: "lead_email or lead_id with pending row required" },
            { status: 400 },
        );
    }

    if (!row && body.lead_id) {
        const ins = await sql<{ id: string }>`
            INSERT INTO lead_drips (lead_id, lead_email, lead_name, step, scheduled_at, subject_variant, source, status)
            VALUES (${body.lead_id}, ${email}, ${body.lead_name || ""}, ${step},
                    NOW(), ${body.subject_variant === "B" ? "B" : "A"}, ${body.source || null}, 'pending')
            RETURNING id
        `;
        row = {
            id: ins.rows[0].id,
            lead_id: body.lead_id,
            lead_email: email,
            lead_name: body.lead_name || "",
            step,
            scheduled_at: new Date().toISOString(),
            sent_at: null,
            subject_variant: body.subject_variant === "B" ? "B" : "A",
            source: body.source || null,
            status: "pending",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };
    }

    const ctx = {
        name: row?.lead_name || body.lead_name || email,
        leadMagnetUrl: leadMagnetUrlForSource(row?.source || body.source || null),
        calendlyUrl: CALENDLY_URL_DEFAULT,
        unsubscribeUrl: unsubscribeUrl(SITE_ORIGIN, email),
    };

    const variant = (row?.subject_variant === "B" || body.subject_variant === "B") ? "B" : "A";
    const tpl = buildDripTemplate(step as DripStep, ctx);
    const subject = pickSubject(tpl, variant);

    if (body.dry_run) {
        return NextResponse.json(
            {
                ok: true,
                dry_run: true,
                to: email,
                subject,
                variant,
                text_preview: tpl.text.slice(0, 200),
            },
            { status: 200, headers: { "Cache-Control": "no-store" } },
        );
    }

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { ok: false, error: "RESEND_API_KEY not set" },
            { status: 500 },
        );
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
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
            if (row) await markFailed(row.id);
            return NextResponse.json(
                { ok: false, error: "Resend rejected", detail: (result as { error?: unknown }).error },
                { status: 502 },
            );
        }

        if (row) await markSent(row.id);
        return NextResponse.json(
            { ok: true, to: email, step, variant, subject },
            { status: 200, headers: { "Cache-Control": "no-store" } },
        );
    } catch (err) {
        if (row) await markFailed(row.id);
        console.error("[drip:send] fatal:", err);
        return NextResponse.json(
            { ok: false, error: "Send failed" },
            { status: 500 },
        );
    }
}
