import { sql, ensureMigrated } from "@/lib/db";
import { CADENCE_STEPS } from "@/lib/cadence";

export type Temperature = "hot" | "warm" | "cold" | "dead";

export function calculateTemperature(lead: {
    status: string;
    last_reply_at: string | null;
    cadence_step: number;
    cadence_paused: boolean;
    cadence_started_at: string | null;
    last_activity_at: string | null;
}): Temperature {
    if (lead.status === "lost") return "dead";
    if (lead.status === "won") return "hot";

    const now = Date.now();

    if (lead.last_reply_at) {
        const daysSinceReply = (now - new Date(lead.last_reply_at).getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceReply <= 3) return "hot";
        if (daysSinceReply <= 14) return "warm";
    }

    if (lead.cadence_step >= CADENCE_STEPS.length && !lead.last_reply_at) {
        return "cold";
    }

    const lastActivityDate = lead.last_activity_at || lead.cadence_started_at;
    if (lastActivityDate) {
        const daysSinceActivity = (now - new Date(lastActivityDate).getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceActivity > 30) return "cold";
    }

    if (lead.cadence_step > 0 && lead.cadence_step <= 3) return "warm";
    if (lead.cadence_step > 3) return "cold";

    return "warm";
}

export async function recalculateTemperature(leadId: number): Promise<Temperature> {
    await ensureMigrated();
    const { rows } = await sql`
        SELECT status, last_reply_at, cadence_step, cadence_paused,
               cadence_started_at, last_activity_at
        FROM consultations WHERE id = ${leadId}
    `;
    if (!rows[0]) return "warm";

    const temp = calculateTemperature(rows[0] as {
        status: string;
        last_reply_at: string | null;
        cadence_step: number;
        cadence_paused: boolean;
        cadence_started_at: string | null;
        last_activity_at: string | null;
    });
    await sql`UPDATE consultations SET temperature = ${temp} WHERE id = ${leadId}`;
    return temp;
}
