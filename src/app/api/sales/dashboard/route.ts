import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/dashboard — aggregate stats
export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    // Total leads
    const { rows: totalRows } = await sql`SELECT COUNT(*)::int AS count FROM consultations`;
    const totalLeads = totalRows[0]?.count ?? 0;

    // New unassigned
    const { rows: newRows } = await sql`
        SELECT COUNT(*)::int AS count FROM consultations WHERE status = 'new' AND assigned_to_id IS NULL
    `;
    const newUnassigned = newRows[0]?.count ?? 0;

    // Active leads (not won/lost/closed)
    const { rows: activeRows } = await sql`
        SELECT COUNT(*)::int AS count FROM consultations
        WHERE status NOT IN ('won', 'lost', 'closed')
    `;
    const activeLeads = activeRows[0]?.count ?? 0;

    // Won deals
    const { rows: wonRows } = await sql`SELECT COUNT(*)::int AS count FROM consultations WHERE status = 'won'`;
    const wonDeals = wonRows[0]?.count ?? 0;

    // Total pipeline value
    const { rows: valRows } = await sql`
        SELECT COALESCE(SUM(value_est), 0)::numeric AS total
        FROM consultations
        WHERE status NOT IN ('won', 'lost', 'closed')
    `;
    const pipelineValue = parseFloat(valRows[0]?.total ?? "0");

    // Active clients
    const { rows: clientRows } = await sql`SELECT COUNT(*)::int AS count FROM clients WHERE status = 'active'`;
    const activeClients = clientRows[0]?.count ?? 0;

    // Upcoming follow-ups (next 7 days)
    const { rows: followUpRows } = await sql`
        SELECT c.id, c.name, c.company, c.next_follow_up, c.status
        FROM consultations c
        WHERE c.next_follow_up IS NOT NULL
            AND c.next_follow_up >= NOW()
            AND c.next_follow_up <= NOW() + INTERVAL '7 days'
            AND c.status NOT IN ('won', 'lost', 'closed')
        ORDER BY c.next_follow_up ASC
        LIMIT 10
    `;

    // Sales users list (for assignment dropdowns)
    const { rows: salesUsers } = await sql`
        SELECT id, username, full_name FROM crm_users WHERE role IN ('admin', 'sales') ORDER BY full_name
    `;

    return NextResponse.json({
        totalLeads,
        newUnassigned,
        activeLeads,
        wonDeals,
        pipelineValue,
        activeClients,
        upcomingFollowUps: followUpRows,
        salesUsers,
    });
}
