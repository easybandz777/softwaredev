import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser, ensureLegacyResolved } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import { syncInbox, getSyncStatus, setAutoCreateLeads } from "@/lib/email-sync";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();
    await ensureLegacyResolved();

    const sessionUser = getSessionUser(req);
    if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const status = await getSyncStatus(sessionUser.id);

    const { rows: countRows } = await sql`SELECT COUNT(*)::int as total FROM lead_emails`;
    const totalEmails = countRows[0]?.total || 0;

    return NextResponse.json({ ...status, totalEmails });
}

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();
    await ensureLegacyResolved();

    const sessionUser = getSessionUser(req);
    if (!sessionUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    let body: { action?: string; auto_create_leads?: boolean } = {};
    try { body = await req.json(); } catch { /* empty body OK for sync trigger */ }

    if (body.action === "set_auto_create") {
        await setAutoCreateLeads(sessionUser.id, body.auto_create_leads !== false);
        return NextResponse.json({ success: true });
    }

    const { rows } = await sql`SELECT email, smtp_pass FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
    const dbUser = rows[0];

    if (!dbUser?.email || !dbUser?.smtp_pass) {
        return NextResponse.json({
            error: "SMTP credentials not configured. Set your email password in Settings before syncing.",
        }, { status: 400 });
    }

    try {
        const result = await syncInbox(sessionUser.id, dbUser.email, dbUser.smtp_pass);
        return NextResponse.json({ success: true, ...result });
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error("Email sync error:", msg);

        let userMessage = "Failed to sync emails. Please try again.";
        if (msg.includes("EAUTH") || msg.includes("authentication")) {
            userMessage = "IMAP authentication failed. Check your email password in Settings.";
        } else if (msg.includes("ESOCKET") || msg.includes("ECONNREFUSED")) {
            userMessage = "Could not connect to the email server. Please try again later.";
        }
        return NextResponse.json({ error: userMessage }, { status: 500 });
    }
}
