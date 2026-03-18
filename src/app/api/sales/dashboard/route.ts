import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/dashboard — aggregate stats (scoped by user role)
export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const isAdmin = user!.role === "admin";
    const userId = user!.id;

    // ── Total leads ──
    let totalLeads: number;
    if (isAdmin) {
        const { rows } = await sql`SELECT COUNT(*)::int AS count FROM consultations`;
        totalLeads = rows[0]?.count ?? 0;
    } else {
        const { rows } = await sql`SELECT COUNT(*)::int AS count FROM consultations WHERE assigned_to_id = ${userId}`;
        totalLeads = rows[0]?.count ?? 0;
    }

    // ── New unassigned (only meaningful for admins) ──
    let newUnassigned = 0;
    if (isAdmin) {
        const { rows } = await sql`
            SELECT COUNT(*)::int AS count FROM consultations WHERE status = 'new' AND assigned_to_id IS NULL
        `;
        newUnassigned = rows[0]?.count ?? 0;
    }

    // ── Active leads (not won/lost/closed) ──
    let activeLeads: number;
    if (isAdmin) {
        const { rows } = await sql`
            SELECT COUNT(*)::int AS count FROM consultations
            WHERE status NOT IN ('won', 'lost', 'closed')
        `;
        activeLeads = rows[0]?.count ?? 0;
    } else {
        const { rows } = await sql`
            SELECT COUNT(*)::int AS count FROM consultations
            WHERE status NOT IN ('won', 'lost', 'closed') AND assigned_to_id = ${userId}
        `;
        activeLeads = rows[0]?.count ?? 0;
    }

    // ── Won deals ──
    let wonDeals: number;
    if (isAdmin) {
        const { rows } = await sql`SELECT COUNT(*)::int AS count FROM consultations WHERE status = 'won'`;
        wonDeals = rows[0]?.count ?? 0;
    } else {
        const { rows } = await sql`SELECT COUNT(*)::int AS count FROM consultations WHERE status = 'won' AND assigned_to_id = ${userId}`;
        wonDeals = rows[0]?.count ?? 0;
    }

    // ── Total pipeline value ──
    let pipelineValue: number;
    if (isAdmin) {
        const { rows } = await sql`
            SELECT COALESCE(SUM(value_est), 0)::numeric AS total
            FROM consultations
            WHERE status NOT IN ('won', 'lost', 'closed')
        `;
        pipelineValue = parseFloat(rows[0]?.total ?? "0");
    } else {
        const { rows } = await sql`
            SELECT COALESCE(SUM(value_est), 0)::numeric AS total
            FROM consultations
            WHERE status NOT IN ('won', 'lost', 'closed') AND assigned_to_id = ${userId}
        `;
        pipelineValue = parseFloat(rows[0]?.total ?? "0");
    }

    // ── Active clients ──
    const { rows: clientRows } = await sql`SELECT COUNT(*)::int AS count FROM clients WHERE status = 'active'`;
    const activeClients = clientRows[0]?.count ?? 0;

    // ── Upcoming follow-ups (next 7 days, scoped) ──
    let followUpRows;
    if (isAdmin) {
        ({ rows: followUpRows } = await sql`
            SELECT c.id, c.name, c.company, c.next_follow_up, c.status
            FROM consultations c
            WHERE c.next_follow_up IS NOT NULL
                AND c.next_follow_up >= NOW()
                AND c.next_follow_up <= NOW() + INTERVAL '7 days'
                AND c.status NOT IN ('won', 'lost', 'closed')
            ORDER BY c.next_follow_up ASC
            LIMIT 10
        `);
    } else {
        ({ rows: followUpRows } = await sql`
            SELECT c.id, c.name, c.company, c.next_follow_up, c.status
            FROM consultations c
            WHERE c.next_follow_up IS NOT NULL
                AND c.next_follow_up >= NOW()
                AND c.next_follow_up <= NOW() + INTERVAL '7 days'
                AND c.status NOT IN ('won', 'lost', 'closed')
                AND c.assigned_to_id = ${userId}
            ORDER BY c.next_follow_up ASC
            LIMIT 10
        `);
    }

    // ── Sales users list (for assignment dropdowns — admins only need full list) ──
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
