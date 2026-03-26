import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// Temporary diagnostic endpoint — DELETE after debugging
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const testEmail = req.nextUrl.searchParams.get("email") || "orders@athreadofblue.com";
    const testLeadId = req.nextUrl.searchParams.get("leadId") || "105";

    // 1. Check if lead_emails table has any rows
    const { rows: countRows } = await sql`SELECT COUNT(*)::int as total FROM lead_emails`;

    // 2. Check emails for specific lead
    const { rows: leadEmails } = await sql`SELECT id, lead_id, direction, to_address, subject, sent_at FROM lead_emails WHERE lead_id = ${parseInt(testLeadId)} ORDER BY sent_at DESC LIMIT 5`;

    // 3. Look up lead by email
    const { rows: matchRows } = await sql`SELECT id, name, email, status FROM consultations WHERE LOWER(email) = LOWER(${testEmail}) ORDER BY created_at DESC LIMIT 3`;

    // 4. Check ALL lead_emails (last 10)
    const { rows: recentEmails } = await sql`SELECT id, lead_id, direction, to_address, subject, sent_at FROM lead_emails ORDER BY id DESC LIMIT 10`;

    // 5. Check lead 105 info
    const { rows: leadInfo } = await sql`SELECT id, name, email, status, last_activity_at FROM consultations WHERE id = ${parseInt(testLeadId)}`;

    return NextResponse.json({
        lead_emails_total: countRows[0].total,
        emails_for_lead: leadEmails,
        lead_by_email_lookup: matchRows,
        recent_lead_emails: recentEmails,
        lead_info: leadInfo[0] || null,
    });
}
