import { sql, ensureMigrated } from "@/lib/db";

export interface CadenceStep {
    step: number;
    day: number;
    label: string;
    channel: string;
    script: string;
    why: string;
}

export const CADENCE_STEPS: CadenceStep[] = [
    {
        step: 1, day: 1, label: "The Immediate Value-Add", channel: "Email / LinkedIn",
        script: `Hey [Name], really enjoyed our conversation earlier. I was thinking about the intake problem you described and wanted to share something relevant — I put together a quick 2-min screen recording showing exactly how we'd handle that for your setup. Here's the link: [Loom link]. No obligation — just wanted to give you something concrete to look at.`,
        why: "Shows you were listening. Demonstrates competence. Gives them a reason to respond.",
    },
    {
        step: 2, day: 3, label: "The Specific Follow-Through", channel: "Email",
        script: `Hey [Name], wanted to follow up on the Loom I sent. I did some digging on your current setup — I ran a quick speed test on your site and it's loading at 8.4 seconds on mobile. For context, anything over 3 seconds loses 53% of users before they ever see your page. Happy to show you what a fixed version looks like. Worth 15 minutes this week?`,
        why: "Specific data creates urgency. You gave them something new — not just 'checking in.'",
    },
    {
        step: 3, day: 5, label: "The Social Proof Drop", channel: "LinkedIn",
        script: `Hey [Name] — just wrapped up a project for a [similar industry] business in [City]. They were in the exact same spot you described — 6-hour lead response time. We cut it to under 60 seconds and they signed 4 more clients in month one. Thought you'd find that relevant. Still worth a quick chat?`,
        why: "Proof from a relatable peer removes risk perception.",
    },
    {
        step: 4, day: 8, label: "The Direct Honesty Check", channel: "Email",
        script: `Hey [Name], typically when I don't hear back at this stage it means one of two things: either the timeline shifted, or the investment wasn't quite right. Either way, that's completely fine — I just don't want to keep following up if it's not a fit. Are we pausing on this for now, or is there a better time to revisit?`,
        why: "Honesty disarms. It makes them want to engage because most reps never ask this directly.",
    },
    {
        step: 5, day: 12, label: "The New Angle", channel: "Email / Call",
        script: `Hey [Name], I know we've been going back and forth. I wanted to reach out with a different angle — instead of a full build, what if we started with just the intake automation piece? We could solve the lead response problem in about 3 weeks for a fraction of the full investment. Would that be an easier entry point to test us out?`,
        why: "Offering a smaller scope removes the biggest barrier — cost and commitment.",
    },
    {
        step: 6, day: 18, label: "The Breakup Message", channel: "Email / LinkedIn",
        script: `Hey [Name], haven't heard back so I'm going to assume the timing just isn't right this quarter. I'll close out your file on our end. No hard feelings at all — if fixing the [specific pain they mentioned] comes back to the top of the list later this year, reach out and we'll pick up right where we left off. Best of luck.`,
        why: "This message gets more replies than any other. The permission to say 'no' makes people say 'wait, actually...'",
    },
];

export function getCadenceStep(step: number): CadenceStep | null {
    return CADENCE_STEPS.find(s => s.step === step) || null;
}

export function getNextFollowUpDate(cadenceStartedAt: Date, step: number): Date | null {
    const stepDef = getCadenceStep(step);
    if (!stepDef) return null;
    const date = new Date(cadenceStartedAt);
    date.setDate(date.getDate() + stepDef.day);
    return date;
}

export function getDaysUntilDue(nextFollowUp: string | null): number | null {
    if (!nextFollowUp) return null;
    const now = new Date();
    const due = new Date(nextFollowUp);
    return Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export async function startCadence(leadId: number): Promise<void> {
    await ensureMigrated();
    const now = new Date().toISOString();
    const nextFollowUp = getNextFollowUpDate(new Date(), 1);
    await sql`
        UPDATE consultations
        SET cadence_step = 1,
            cadence_started_at = ${now},
            cadence_paused = false,
            next_follow_up = ${nextFollowUp?.toISOString() || null}
        WHERE id = ${leadId}
    `;
}

export async function pauseCadence(leadId: number): Promise<void> {
    await ensureMigrated();
    await sql`
        UPDATE consultations
        SET cadence_paused = true
        WHERE id = ${leadId}
    `;
}

export async function resumeCadence(leadId: number): Promise<void> {
    await ensureMigrated();
    const { rows } = await sql`SELECT cadence_step, cadence_started_at FROM consultations WHERE id = ${leadId}`;
    const lead = rows[0];
    if (!lead || !lead.cadence_started_at) return;

    const nextFollowUp = getNextFollowUpDate(new Date(lead.cadence_started_at), lead.cadence_step);
    await sql`
        UPDATE consultations
        SET cadence_paused = false,
            next_follow_up = ${nextFollowUp?.toISOString() || null}
        WHERE id = ${leadId}
    `;
}

export async function resetCadence(leadId: number): Promise<void> {
    await ensureMigrated();
    await sql`
        UPDATE consultations
        SET cadence_step = 0,
            cadence_started_at = NULL,
            cadence_paused = false,
            next_follow_up = NULL
        WHERE id = ${leadId}
    `;
}

export async function advanceCadence(leadId: number): Promise<{ advanced: boolean; newStep: number; isComplete: boolean }> {
    await ensureMigrated();
    const { rows } = await sql`SELECT cadence_step, cadence_started_at, cadence_paused FROM consultations WHERE id = ${leadId}`;
    const lead = rows[0];
    if (!lead || lead.cadence_paused || !lead.cadence_started_at) {
        return { advanced: false, newStep: lead?.cadence_step || 0, isComplete: false };
    }

    const currentStep = lead.cadence_step || 0;
    const nextStep = currentStep + 1;

    if (nextStep > CADENCE_STEPS.length) {
        await sql`UPDATE consultations SET temperature = 'cold' WHERE id = ${leadId} AND temperature != 'hot'`;
        return { advanced: false, newStep: currentStep, isComplete: true };
    }

    const nextFollowUp = getNextFollowUpDate(new Date(lead.cadence_started_at), nextStep);
    await sql`
        UPDATE consultations
        SET cadence_step = ${nextStep},
            next_follow_up = ${nextFollowUp?.toISOString() || null},
            last_activity_at = NOW()
        WHERE id = ${leadId}
    `;

    return { advanced: true, newStep: nextStep, isComplete: false };
}
