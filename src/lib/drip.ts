import crypto from "crypto";
import { sql } from "@/lib/db";
import type { DripStep } from "@/lib/email-templates";

export const DRIP_DELAYS_DAYS: Record<DripStep, number> = {
    1: 1,
    2: 3,
    3: 5,
    4: 8,
    5: 14,
};

export const DRIP_STEPS: DripStep[] = [1, 2, 3, 4, 5];

export type LeadDripRow = {
    id: string;
    lead_id: number | null;
    lead_email: string;
    lead_name: string;
    step: number;
    scheduled_at: string;
    sent_at: string | null;
    subject_variant: "A" | "B";
    source: string | null;
    status: "pending" | "sent" | "failed" | "unsubscribed" | "paused";
    created_at: string;
    updated_at: string;
};

export type EnqueueArgs = {
    leadId: number | null;
    leadEmail: string;
    leadName?: string;
    source?: string | null;
};

export type EnqueueResult = {
    enqueued: number;
    skipped: boolean;
    reason?: string;
};

export async function ensureDripTable(): Promise<void> {
    await sql`
        CREATE TABLE IF NOT EXISTS lead_drips (
            id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            lead_id         INTEGER,
            lead_email      TEXT NOT NULL,
            lead_name       TEXT NOT NULL DEFAULT '',
            step            INTEGER NOT NULL,
            scheduled_at    TIMESTAMPTZ NOT NULL,
            sent_at         TIMESTAMPTZ,
            subject_variant TEXT NOT NULL DEFAULT 'A',
            source          TEXT,
            status          TEXT NOT NULL DEFAULT 'pending',
            created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_lead_drips_status_scheduled ON lead_drips (status, scheduled_at)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_lead_drips_email ON lead_drips (lead_email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_lead_drips_lead_id ON lead_drips (lead_id)`;
}

export function variantForEmail(email: string): "A" | "B" {
    const norm = (email || "").trim().toLowerCase();
    const hash = crypto.createHash("sha256").update(norm).digest();
    return (hash[0] & 1) === 0 ? "A" : "B";
}

export async function enqueueDripSeries(args: EnqueueArgs): Promise<EnqueueResult> {
    const email = (args.leadEmail || "").trim().toLowerCase();
    if (!email) return { enqueued: 0, skipped: true, reason: "missing-email" };

    try {
        await ensureDripTable();

        const existing = await sql<{ id: string }>`
            SELECT id FROM lead_drips
            WHERE lead_email = ${email}
              AND status IN ('pending', 'sent')
            LIMIT 1
        `;
        if (existing.rows.length > 0) {
            return { enqueued: 0, skipped: true, reason: "already-enrolled" };
        }

        const unsub = await sql<{ id: string }>`
            SELECT id FROM lead_drips
            WHERE lead_email = ${email} AND status = 'unsubscribed'
            LIMIT 1
        `;
        if (unsub.rows.length > 0) {
            return { enqueued: 0, skipped: true, reason: "unsubscribed" };
        }

        const variant = variantForEmail(email);
        const now = Date.now();
        let inserted = 0;

        for (const step of DRIP_STEPS) {
            const delayMs = DRIP_DELAYS_DAYS[step] * 24 * 60 * 60 * 1000;
            const scheduledAt = new Date(now + delayMs).toISOString();
            await sql`
                INSERT INTO lead_drips (
                    lead_id, lead_email, lead_name, step,
                    scheduled_at, subject_variant, source, status
                ) VALUES (
                    ${args.leadId},
                    ${email},
                    ${args.leadName || ""},
                    ${step},
                    ${scheduledAt},
                    ${variant},
                    ${args.source || null},
                    'pending'
                )
            `;
            inserted += 1;
        }

        return { enqueued: inserted, skipped: false };
    } catch (err) {
        console.warn("[drip] enqueueDripSeries failed:", err);
        return { enqueued: 0, skipped: true, reason: "db-error" };
    }
}

export async function fetchDuePending(limit = 50): Promise<LeadDripRow[]> {
    await ensureDripTable();
    const { rows } = await sql<LeadDripRow>`
        SELECT id, lead_id, lead_email, lead_name, step, scheduled_at, sent_at,
               subject_variant, source, status, created_at, updated_at
        FROM lead_drips
        WHERE status = 'pending'
          AND scheduled_at <= NOW()
        ORDER BY scheduled_at ASC
        LIMIT ${limit}
    `;
    return rows;
}

export async function fetchOnePending(leadId: number, step: number): Promise<LeadDripRow | null> {
    await ensureDripTable();
    const { rows } = await sql<LeadDripRow>`
        SELECT id, lead_id, lead_email, lead_name, step, scheduled_at, sent_at,
               subject_variant, source, status, created_at, updated_at
        FROM lead_drips
        WHERE lead_id = ${leadId}
          AND step = ${step}
          AND status IN ('pending', 'failed')
        ORDER BY created_at DESC
        LIMIT 1
    `;
    return rows[0] || null;
}

export async function markSent(id: string): Promise<void> {
    await sql`
        UPDATE lead_drips
        SET status = 'sent', sent_at = NOW(), updated_at = NOW()
        WHERE id = ${id}
    `;
}

export async function markFailed(id: string): Promise<void> {
    await sql`
        UPDATE lead_drips
        SET status = 'failed', updated_at = NOW()
        WHERE id = ${id}
    `;
}

export async function unsubscribeByEmail(email: string): Promise<number> {
    await ensureDripTable();
    const norm = email.trim().toLowerCase();
    const { rowCount } = await sql`
        UPDATE lead_drips
        SET status = 'unsubscribed', updated_at = NOW()
        WHERE lead_email = ${norm}
          AND status IN ('pending', 'failed')
    `;
    return rowCount ?? 0;
}

const UNSUB_SECRET_FALLBACK = "qlu-unsub-fallback-do-not-use-in-prod";

export function getUnsubSecret(): string {
    return process.env.UNSUBSCRIBE_JWT_SECRET || process.env.DRIP_CRON_SECRET || UNSUB_SECRET_FALLBACK;
}

export function signUnsubToken(email: string): string {
    const norm = email.trim().toLowerCase();
    const payload = Buffer.from(JSON.stringify({ e: norm, t: Date.now() })).toString("base64url");
    const sig = crypto
        .createHmac("sha256", getUnsubSecret())
        .update(payload)
        .digest("base64url");
    return `${payload}.${sig}`;
}

export function verifyUnsubToken(token: string): { email: string } | null {
    if (!token || !token.includes(".")) return null;
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return null;

    const expected = crypto
        .createHmac("sha256", getUnsubSecret())
        .update(payload)
        .digest("base64url");

    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return null;
    if (!crypto.timingSafeEqual(a, b)) return null;

    try {
        const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
        if (!data || typeof data.e !== "string") return null;
        return { email: data.e };
    } catch {
        return null;
    }
}

export function unsubscribeUrl(origin: string, email: string): string {
    const token = signUnsubToken(email);
    return `${origin.replace(/\/$/, "")}/api/drip/unsubscribe?token=${encodeURIComponent(token)}`;
}

export function leadMagnetUrlForSource(source: string | null | undefined): string {
    const s = (source || "").toLowerCase();
    if (s.includes("pentest")) return "https://quantlabusa.dev/lead-magnet/pentest-checklist";
    if (s.includes("build-vs-buy") || s.includes("build_vs_buy")) return "https://quantlabusa.dev/lead-magnet/build-vs-buy";
    if (s.includes("crm-roi") || s.includes("crm_roi")) return "https://quantlabusa.dev/resources";
    if (s.includes("stripe-cost") || s.includes("stripe_cost")) return "https://quantlabusa.dev/resources";
    if (s.startsWith("resource:")) return "https://quantlabusa.dev/resources";
    return "https://quantlabusa.dev/resources";
}

export const CALENDLY_URL_DEFAULT = "https://quantlabusa.dev/contact";
