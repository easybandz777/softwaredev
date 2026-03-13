import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/leaderboard — per-person stats including project revenue
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { searchParams } = new URL(req.url);
    const period = searchParams.get("period"); // "month" or null (all time)

    const dateFilter = period === "month"
        ? `AND c.created_at >= DATE_TRUNC('month', NOW())`
        : "";

    // Lead stats from consultations (assigned leads)
    const { rows: leadStats } = await sql.query(`
        SELECT
            u.id,
            u.username,
            u.full_name,
            u.role,
            COUNT(c.id)::int AS leads_generated,
            COUNT(CASE WHEN c.status = 'won' THEN 1 END)::int AS deals_won,
            COALESCE(SUM(CASE WHEN c.status = 'won' THEN c.value_est ELSE 0 END), 0)::numeric AS lead_revenue,
            COALESCE(SUM(CASE WHEN c.status NOT IN ('won','lost','closed') THEN c.value_est ELSE 0 END), 0)::numeric AS lead_pipeline,
            COUNT(CASE WHEN c.status NOT IN ('won','lost','closed') THEN 1 END)::int AS active_leads,
            COALESCE(MAX(c.value_est) FILTER (WHERE c.status = 'won'), 0)::numeric AS biggest_deal
        FROM crm_users u
        LEFT JOIN consultations c ON c.assigned_to_id = u.id ${dateFilter}
        WHERE u.role IN ('sales', 'admin')
        GROUP BY u.id, u.username, u.full_name, u.role
    `);

    // Project revenue — completed projects count as revenue, active/planning count as pipeline
    const { rows: projectStats } = await sql`
        SELECT
            cl.assigned_to_id AS user_id,
            COALESCE(SUM(CASE WHEN cp.status = 'completed' THEN cp.value ELSE 0 END), 0)::numeric AS project_revenue,
            COALESCE(SUM(CASE WHEN cp.status IN ('active', 'planning') THEN cp.value ELSE 0 END), 0)::numeric AS project_pipeline,
            COUNT(*)::int AS clients_managed
        FROM clients cl
        LEFT JOIN client_projects cp ON cp.client_id = cl.id
        WHERE cl.assigned_to_id IS NOT NULL
        GROUP BY cl.assigned_to_id
    `;

    const projectMap = new Map<number, { project_revenue: number; project_pipeline: number; clients_managed: number }>();
    for (const row of projectStats) {
        projectMap.set(row.user_id, {
            project_revenue: parseFloat(row.project_revenue) || 0,
            project_pipeline: parseFloat(row.project_pipeline) || 0,
            clients_managed: row.clients_managed || 0,
        });
    }

    // Merge: total revenue = lead revenue + completed project revenue
    //        total pipeline = lead pipeline + active project pipeline
    const leaderboard = leadStats.map((row) => {
        const total = row.leads_generated || 0;
        const won = row.deals_won || 0;
        const proj = projectMap.get(row.id) || { project_revenue: 0, project_pipeline: 0, clients_managed: 0 };
        const leadRev = parseFloat(row.lead_revenue) || 0;
        const leadPipe = parseFloat(row.lead_pipeline) || 0;
        const biggestDeal = Math.max(parseFloat(row.biggest_deal) || 0, proj.project_revenue > 0 ? proj.project_revenue : 0);
        return {
            id: row.id,
            username: row.username,
            full_name: row.full_name,
            role: row.role,
            leads_generated: total,
            deals_won: won,
            revenue_closed: leadRev + proj.project_revenue,
            pipeline_value: leadPipe + proj.project_pipeline,
            active_leads: row.active_leads || 0,
            clients_managed: proj.clients_managed,
            win_rate: total > 0 ? Math.round((won / total) * 100) : 0,
            biggest_deal: biggestDeal,
        };
    });

    // Sort by total revenue descending, then deals won as tiebreaker
    leaderboard.sort((a, b) => b.revenue_closed - a.revenue_closed || b.deals_won - a.deals_won);

    const ranked = leaderboard.map((entry, idx) => ({ ...entry, rank: idx + 1 }));

    return NextResponse.json(ranked);
}
