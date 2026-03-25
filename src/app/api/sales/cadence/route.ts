import { NextRequest, NextResponse } from "next/server";
import { requireAuth, ensureLegacyResolved } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import {
    startCadence, pauseCadence, resumeCadence, resetCadence, advanceCadence,
    getCadenceStep, getDaysUntilDue, CADENCE_STEPS,
} from "@/lib/cadence";
import { recalculateTemperature } from "@/lib/temperature";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();
    await ensureLegacyResolved();

    const leadId = req.nextUrl.searchParams.get("leadId");
    if (!leadId) return NextResponse.json({ error: "leadId is required" }, { status: 400 });

    const { rows } = await sql`
        SELECT cadence_step, cadence_started_at, cadence_paused, next_follow_up, temperature
        FROM consultations WHERE id = ${parseInt(leadId)}
    `;
    if (!rows[0]) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

    const lead = rows[0];
    const currentStep = getCadenceStep(lead.cadence_step);
    const daysUntil = getDaysUntilDue(lead.next_follow_up);

    return NextResponse.json({
        cadenceStep: lead.cadence_step,
        cadenceStartedAt: lead.cadence_started_at,
        cadencePaused: lead.cadence_paused,
        nextFollowUp: lead.next_follow_up,
        temperature: lead.temperature,
        daysUntilDue: daysUntil,
        currentStep,
        totalSteps: CADENCE_STEPS.length,
        allSteps: CADENCE_STEPS,
    });
}

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();
    await ensureLegacyResolved();

    const { leadId, action } = await req.json();
    if (!leadId || !action) {
        return NextResponse.json({ error: "leadId and action are required" }, { status: 400 });
    }

    const id = parseInt(leadId);

    switch (action) {
        case "start":
            await startCadence(id);
            await recalculateTemperature(id);
            return NextResponse.json({ success: true, message: "Cadence started" });

        case "pause":
            await pauseCadence(id);
            return NextResponse.json({ success: true, message: "Cadence paused" });

        case "resume":
            await resumeCadence(id);
            return NextResponse.json({ success: true, message: "Cadence resumed" });

        case "reset":
            await resetCadence(id);
            await recalculateTemperature(id);
            return NextResponse.json({ success: true, message: "Cadence reset" });

        case "advance": {
            const result = await advanceCadence(id);
            await recalculateTemperature(id);
            return NextResponse.json({ success: true, ...result });
        }

        default:
            return NextResponse.json({ error: "Invalid action. Use: start, pause, resume, reset, advance" }, { status: 400 });
    }
}
