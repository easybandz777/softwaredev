import { NextRequest, NextResponse } from "next/server";
import { requireAuth, ensureLegacyResolved } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();
    await ensureLegacyResolved();

    const { id } = await params;
    const leadId = parseInt(id);
    if (isNaN(leadId)) return NextResponse.json({ error: "Invalid lead ID" }, { status: 400 });

    const { rows } = await sql`
        SELECT id, lead_id, message_id, in_reply_to, thread_id, direction,
               from_address, to_address, subject, body_text, body_html, sent_at, synced_at
        FROM lead_emails
        WHERE lead_id = ${leadId}
        ORDER BY sent_at ASC
    `;

    return NextResponse.json(rows);
}
