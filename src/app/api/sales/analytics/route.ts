import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows: countRows } = await sql`SELECT COUNT(*)::int AS count FROM consultations`;
    const totalLeads = countRows[0]?.count ?? 0;

    const { rows: stageRows } = await sql`SELECT status, COUNT(*)::int AS count FROM consultations GROUP BY status`;
    const byStage: Record<string, number> = {};
    stageRows.forEach((r) => { byStage[r.status as string] = r.count as number; });

    const outreachSent = byStage["contacted"] || 0;
    const qualified = byStage["qualified"] || 0;

    const { rows: sourceRows } = await sql`SELECT COALESCE(lead_source, 'Unknown') AS source, COUNT(*)::int AS count FROM consultations GROUP BY lead_source`;
    const bySource: Record<string, number> = {};
    sourceRows.forEach((r) => { bySource[r.source as string] = r.count as number; });

    const { rows: oppRows } = await sql`SELECT COALESCE(opportunity_level, 'medium') AS opp, COUNT(*)::int AS count FROM consultations GROUP BY opportunity_level`;
    const byOpportunity: Record<string, number> = {};
    oppRows.forEach((r) => { byOpportunity[r.opp as string] = r.count as number; });

    const { rows: recentRows } = await sql`SELECT COUNT(*)::int AS count FROM consultations WHERE created_at >= NOW() - INTERVAL '7 days'`;
    const recentLeads = recentRows[0]?.count ?? 0;

    return NextResponse.json({
        kpis: { totalLeads, outreachSent, qualified, recentLeads },
        byStage,
        bySource,
        byOpportunity,
    });
}
