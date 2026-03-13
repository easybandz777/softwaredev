import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/leaderboard — per-salesperson competition stats
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { searchParams } = new URL(req.url);
    const period = searchParams.get("period"); // "month" or null (all time)

    // Build date filter
    const dateFilter = period === "month"
        ? `AND c.created_at >= DATE_TRUNC('month', NOW())`
        : "";

    // Per-user lead stats from consultations
    const { rows: leadStats } = await sql.query(`
        SELECT
            u.id,
            u.username,
            u.full_name,
            u.role,
            COUNT(c.id)::int AS leads_generated,
            COUNT(CASE WHEN c.status = 'won' THEN 1 END)::int AS deals_won,
            COALESCE(SUM(CASE WHEN c.status = 'won' THEN c.value_est ELSE 0 END), 0)::numeric AS revenue_closed,
            COALESCE(SUM(CASE WHEN c.status NOT IN ('won','lost','closed') THEN c.value_est ELSE 0 END), 0)::numeric AS pipeline_value,
            COUNT(CASE WHEN c.status NOT IN ('won','lost','closed') THEN 1 END)::int AS active_leads,
            COALESCE(MAX(c.value_est) FILTER (WHERE c.status = 'won'), 0)::numeric AS biggest_deal
        FROM crm_users u
        LEFT JOIN consultations c ON c.assigned_to_id = u.id ${dateFilter}
        WHERE u.role = 'sales'
        GROUP BY u.id, u.username, u.full_name, u.role
    `);

    // Per-user client count (not time-filtered — clients are ongoing)
    const { rows: clientStats } = await sql`
        SELECT
            assigned_to_id AS id,
            COUNT(*)::int AS clients_managed
        FROM clients
        WHERE assigned_to_id IS NOT NULL
        GROUP BY assigned_to_id
    `;

    const clientMap = new Map<number, number>();
    for (const row of clientStats) {
        clientMap.set(row.id, row.clients_managed);
    }

    // Merge and compute derived stats
    const leaderboard = leadStats.map((row) => {
        const total = row.leads_generated || 0;
        const won = row.deals_won || 0;
        return {
            id: row.id,
            username: row.username,
            full_name: row.full_name,
            role: row.role,
            leads_generated: total,
            deals_won: won,
            revenue_closed: parseFloat(row.revenue_closed) || 0,
            pipeline_value: parseFloat(row.pipeline_value) || 0,
            active_leads: row.active_leads || 0,
            clients_managed: clientMap.get(row.id) || 0,
            win_rate: total > 0 ? Math.round((won / total) * 100) : 0,
            biggest_deal: parseFloat(row.biggest_deal) || 0,
        };
    });

    // Sort by revenue descending, then deals won as tiebreaker
    leaderboard.sort((a, b) => b.revenue_closed - a.revenue_closed || b.deals_won - a.deals_won);

    // Add rank
    const ranked = leaderboard.map((entry, idx) => ({ ...entry, rank: idx + 1 }));

    return NextResponse.json(ranked);
}
