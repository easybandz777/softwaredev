import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { sql, ensureMigrated } from "@/lib/db";
import { enqueueDripSeries } from "@/lib/drip";

// ─── Constants ────────────────────────────────────────────────────────────────
const NOTIFICATION_EMAIL = "beltz@quantlabusa.dev";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "QuantLab Leads <onboarding@resend.dev>";
// TODO: once leads@quantlabusa.dev is verified in Resend, set RESEND_FROM_EMAIL=
// "QuantLab Leads <leads@quantlabusa.dev>" in env to use the branded sender.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Validation (manual — zod is not in deps) ────────────────────────────────
type LeadBody = {
    name: string;
    email: string;
    company?: string | null;
    source?: string | null;
    magnet?: string | null;
    drip?: string | null;
    calculatorInputs?: unknown;
    calculatorResult?: unknown;
    [k: string]: unknown;
};

function validate(body: unknown): { ok: true; data: LeadBody } | { ok: false; error: string } {
    if (!body || typeof body !== "object") {
        return { ok: false, error: "Request body must be a JSON object." };
    }
    const b = body as Record<string, unknown>;

    const name = typeof b.name === "string" ? b.name.trim() : "";
    const email = typeof b.email === "string" ? b.email.trim() : "";
    if (!name) return { ok: false, error: "Name is required." };
    if (!email) return { ok: false, error: "Email is required." };
    if (!EMAIL_RE.test(email)) return { ok: false, error: "Invalid email address." };
    if (name.length > 200) return { ok: false, error: "Name too long." };
    if (email.length > 320) return { ok: false, error: "Email too long." };

    const company = typeof b.company === "string" ? b.company.trim() : null;
    const source = typeof b.source === "string"
        ? b.source.trim()
        : typeof b.magnet === "string"
            ? b.magnet.trim()
            : null;
    const magnet = typeof b.magnet === "string" ? b.magnet.trim() : null;
    const drip = typeof b.drip === "string" ? b.drip.trim() : null;

    return {
        ok: true,
        data: {
            name,
            email,
            company,
            source,
            magnet,
            drip,
            calculatorInputs: b.calculatorInputs,
            calculatorResult: b.calculatorResult,
        },
    };
}

// ─── Lead persistence ─────────────────────────────────────────────────────────
// We have a Vercel Postgres connection via @/lib/db. The existing `consultations`
// table is the canonical lead store on this stack — we insert there so the lead
// shows up in the CRM dashboard immediately (status='new', source set on
// lead_source). A dedicated `leads` table is intentionally not created — the
// CRM is already wired to consultations and a separate table would split the
// pipeline. If we later need calculator-specific fields, a sidecar
// `lead_payloads` table keyed on consultation id is the cleanest add.
async function insertLead(data: LeadBody): Promise<number | null> {
    try {
        await ensureMigrated();

        const sourceLabel = data.source || data.magnet || "Lead Magnet";
        const service = "Lead Capture";
        const message = buildMessage(data);

        const { rows } = await sql`
            INSERT INTO consultations (
                name, email, company, service, message, status,
                lead_source, opportunity_level, last_activity_at
            )
            VALUES (
                ${data.name},
                ${data.email},
                ${data.company || null},
                ${service},
                ${message},
                'new',
                ${sourceLabel},
                'medium',
                NOW()
            )
            RETURNING id
        `;
        return rows[0]?.id ?? null;
    } catch (err) {
        console.error("[/api/leads] DB insert failed:", err);
        return null;
    }
}

function buildMessage(data: LeadBody): string {
    const lines: string[] = [];
    if (data.source) lines.push(`Source: ${data.source}`);
    if (data.magnet && data.magnet !== data.source) lines.push(`Magnet: ${data.magnet}`);
    if (data.drip) lines.push(`Drip code: ${data.drip}`);
    if (data.calculatorInputs) {
        lines.push("");
        lines.push("Calculator inputs:");
        lines.push(safeStringify(data.calculatorInputs));
    }
    if (data.calculatorResult) {
        lines.push("");
        lines.push("Calculator result:");
        lines.push(safeStringify(data.calculatorResult));
    }
    return lines.join("\n") || "(no additional details)";
}

function safeStringify(v: unknown): string {
    try {
        return JSON.stringify(v, null, 2);
    } catch {
        return String(v);
    }
}

// ─── Notification email (Resend) ──────────────────────────────────────────────
async function sendNotificationEmail(data: LeadBody, leadId: number | null): Promise<void> {
    if (!process.env.RESEND_API_KEY) {
        console.warn("[/api/leads] RESEND_API_KEY not set — skipping email notification.");
        return;
    }
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const sourceLabel = data.source || data.magnet || "lead magnet";
        const subject = `[Lead] New lead from ${sourceLabel}`;

        const inputsBlock = data.calculatorInputs
            ? `
                <div style="margin-top:16px;padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;">
                    <p style="color:#9ca3af;margin:0 0 8px;font-size:13px;font-weight:600;">Calculator inputs</p>
                    <pre style="margin:0;color:#e5e7eb;font-size:12px;white-space:pre-wrap;font-family:'Courier New',monospace;">${escapeHtml(safeStringify(data.calculatorInputs))}</pre>
                </div>`
            : "";

        const resultBlock = data.calculatorResult
            ? `
                <div style="margin-top:12px;padding:16px;background:rgba(255,255,255,0.04);border-radius:8px;">
                    <p style="color:#9ca3af;margin:0 0 8px;font-size:13px;font-weight:600;">Calculator result</p>
                    <pre style="margin:0;color:#e5e7eb;font-size:12px;white-space:pre-wrap;font-family:'Courier New',monospace;">${escapeHtml(safeStringify(data.calculatorResult))}</pre>
                </div>`
            : "";

        await resend.emails.send({
            from: FROM_EMAIL,
            to: NOTIFICATION_EMAIL,
            replyTo: data.email,
            subject,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#0a0f1e;color:#e5e7eb;border-radius:12px;">
                    <h2 style="color:#38bdf8;margin-top:0;">New lead — ${escapeHtml(sourceLabel)}</h2>
                    <table style="width:100%;border-collapse:collapse;">
                        <tr><td style="padding:8px 12px;color:#9ca3af;width:140px;">Name</td><td style="padding:8px 12px;color:#fff;">${escapeHtml(data.name)}</td></tr>
                        <tr><td style="padding:8px 12px;color:#9ca3af;">Email</td><td style="padding:8px 12px;color:#fff;"><a href="mailto:${escapeHtml(data.email)}" style="color:#38bdf8;">${escapeHtml(data.email)}</a></td></tr>
                        ${data.company ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Company</td><td style="padding:8px 12px;color:#fff;">${escapeHtml(data.company)}</td></tr>` : ""}
                        ${data.source ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Source</td><td style="padding:8px 12px;color:#fff;">${escapeHtml(data.source)}</td></tr>` : ""}
                        ${data.magnet && data.magnet !== data.source ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Magnet</td><td style="padding:8px 12px;color:#fff;">${escapeHtml(data.magnet)}</td></tr>` : ""}
                        ${data.drip ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Drip code</td><td style="padding:8px 12px;color:#fff;">${escapeHtml(data.drip)}</td></tr>` : ""}
                    </table>
                    ${inputsBlock}
                    ${resultBlock}
                    <p style="margin-top:20px;font-size:12px;color:#6b7280;">
                        ${leadId ? `Lead #${leadId} · ` : ""}Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET
                    </p>
                </div>
            `,
        });
    } catch (err) {
        console.warn("[/api/leads] Email notification failed (lead still captured):", err);
    }
}

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

// ─── Slack notification ───────────────────────────────────────────────────────
async function postToSlack(data: LeadBody, leadId: number | null): Promise<void> {
    const webhook = process.env.SLACK_LEADS_WEBHOOK;
    if (!webhook) {
        // TODO: set SLACK_LEADS_WEBHOOK in env to enable Slack notifications.
        // Create an Incoming Webhook in Slack pointed at the #leads channel.
        return;
    }
    try {
        const sourceLabel = data.source || data.magnet || "lead magnet";
        const text = [
            `*New lead from ${sourceLabel}*`,
            `*Name:* ${data.name}`,
            `*Email:* <mailto:${data.email}|${data.email}>`,
            data.company ? `*Company:* ${data.company}` : null,
            data.drip ? `*Drip:* ${data.drip}` : null,
            leadId ? `*Lead ID:* ${leadId}` : null,
        ]
            .filter(Boolean)
            .join("\n");

        await fetch(webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });
    } catch (err) {
        console.warn("[/api/leads] Slack post failed (lead still captured):", err);
    }
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
    try {
        let body: unknown;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { ok: false, error: "Invalid JSON body." },
                { status: 400 },
            );
        }

        const result = validate(body);
        if (!result.ok) {
            return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
        }
        const data = result.data;

        // Persist (best-effort — never block the response on DB issues)
        const leadId = await insertLead(data);

        // Notifications (fire-and-forget within the request, but awaited so Vercel
        // doesn't cut them off — they each swallow their own errors)
        await Promise.allSettled([
            sendNotificationEmail(data, leadId),
            postToSlack(data, leadId),
            enqueueDripSeries({
                leadId,
                leadEmail: data.email,
                leadName: data.name,
                source: data.source || data.magnet || null,
            }),
        ]);

        return NextResponse.json({ ok: true, id: leadId }, { status: 200 });
    } catch (err) {
        console.error("[/api/leads] Unhandled error:", err);
        return NextResponse.json(
            { ok: false, error: "Internal server error." },
            { status: 500 },
        );
    }
}
