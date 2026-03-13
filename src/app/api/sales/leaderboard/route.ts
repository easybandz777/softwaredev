import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/leaderboard — per-person competition stats
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { searchParams } = new URL(req.url);
    const period = searchParams.get("period");

    const dateFilter = period === "month"
        ? `AND c.created_at >= DATE_TRUNC('month', NOW())`
        : "";

    // Lead counts from consultations (no dollar values — those come from projects)
    const { rows: leadStats } = await sql.query(`
        SELECT
            u.id,
            u.username,
            u.full_name,
            u.role,
            COUNT(c.id)::int AS leads_generated,
            COUNT(CASE WHEN c.status = 'won' THEN 1 END)::int AS deals_won,
            COUNT(CASE WHEN c.status NOT IN ('won','lost','closed') THEN 1 END)::int AS active_leads
        FROM crm_users u
        LEFT JOIN consultations c ON c.assigned_to_id = u.id ${dateFilter}
        WHERE u.role IN ('sales', 'admin')
        GROUP BY u.id, u.username, u.full_name, u.role
    `);

    // Revenue & pipeline from client_projects (single source of truth for $$$)
    // completed = revenue, active/planning = pipeline
    const { rows: projectStats } = await sql`
        SELECT
            cl.assigned_to_id AS user_id,
            COALESCE(SUM(CASE WHEN cp.status = 'completed' THEN cp.value ELSE 0 END), 0)::numeric AS revenue,
            COALESCE(SUM(CASE WHEN cp.status IN ('active', 'planning') THEN cp.value ELSE 0 END), 0)::numeric AS pipeline,
            COALESCE(MAX(CASE WHEN cp.status = 'completed' THEN cp.value ELSE 0 END), 0)::numeric AS biggest_deal,
            COUNT(DISTINCT cl.id)::int AS clients_managed
        FROM clients cl
        LEFT JOIN client_projects cp ON cp.client_id = cl.id
        WHERE cl.assigned_to_id IS NOT NULL
        GROUP BY cl.assigned_to_id
    `;

    const projectMap = new Map<number, { revenue: number; pipeline: number; biggest_deal: number; clients_managed: number }>();
    for (const row of projectStats) {
        projectMap.set(row.user_id, {
            revenue: parseFloat(row.revenue) || 0,
            pipeline: parseFloat(row.pipeline) || 0,
            biggest_deal: parseFloat(row.biggest_deal) || 0,
            clients_managed: row.clients_managed || 0,
        });
    }

    const leaderboard = leadStats.map((row) => {
        const total = row.leads_generated || 0;
        const won = row.deals_won || 0;
        const proj = projectMap.get(row.id) || { revenue: 0, pipeline: 0, biggest_deal: 0, clients_managed: 0 };
        return {
            id: row.id,
            username: row.username,
            full_name: row.full_name,
            role: row.role,
            leads_generated: total,
            deals_won: won,
            revenue_closed: proj.revenue,
            pipeline_value: proj.pipeline,
            active_leads: row.active_leads || 0,
            clients_managed: proj.clients_managed,
            win_rate: total > 0 ? Math.round((won / total) * 100) : 0,
            biggest_deal: proj.biggest_deal,
        };
    });

    leaderboard.sort((a, b) => b.revenue_closed - a.revenue_closed || b.deals_won - a.deals_won);
    const ranked = leaderboard.map((entry, idx) => ({ ...entry, rank: idx + 1 }));

    return NextResponse.json(ranked);
}
