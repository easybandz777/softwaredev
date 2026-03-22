import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// POST /api/sales/leads/[id]/disqualify — hide this lead for the current user
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const leadId = parseInt(id);
    if (isNaN(leadId)) return NextResponse.json({ error: "Invalid lead id" }, { status: 400 });

    await ensureMigrated();

    await sql`
        INSERT INTO lead_disqualifications (lead_id, user_id)
        VALUES (${leadId}, ${user!.id})
        ON CONFLICT (lead_id, user_id) DO NOTHING
    `;

    return NextResponse.json({ success: true });
}

// DELETE /api/sales/leads/[id]/disqualify — un-hide this lead for the current user
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const leadId = parseInt(id);
    if (isNaN(leadId)) return NextResponse.json({ error: "Invalid lead id" }, { status: 400 });

    await ensureMigrated();

    await sql`
        DELETE FROM lead_disqualifications
        WHERE lead_id = ${leadId} AND user_id = ${user!.id}
    `;

    return NextResponse.json({ success: true });
}
