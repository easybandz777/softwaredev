export type CronField = {
    raw: string;
    matches: (value: number) => boolean;
    values: number[];
};

export type ParsedCron = {
    minute: CronField;
    hour: CronField;
    dayOfMonth: CronField;
    month: CronField;
    dayOfWeek: CronField;
};

const FIELD_BOUNDS: Array<[number, number]> = [
    [0, 59], // minute
    [0, 23], // hour
    [1, 31], // day-of-month
    [1, 12], // month
    [0, 6], // day-of-week (0 = Sunday, 6 = Saturday)
];

const DOW_NAMES: Record<string, number> = {
    SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6,
};

const MONTH_NAMES: Record<string, number> = {
    JAN: 1, FEB: 2, MAR: 3, APR: 4, MAY: 5, JUN: 6,
    JUL: 7, AUG: 8, SEP: 9, OCT: 10, NOV: 11, DEC: 12,
};

function normalizeNames(part: string, fieldIndex: number): string {
    if (fieldIndex === 3) {
        // month
        return part.replace(/[A-Za-z]{3}/g, (m) => {
            const n = MONTH_NAMES[m.toUpperCase()];
            return n === undefined ? m : String(n);
        });
    }
    if (fieldIndex === 4) {
        // day of week
        return part.replace(/[A-Za-z]{3}/g, (m) => {
            const n = DOW_NAMES[m.toUpperCase()];
            return n === undefined ? m : String(n);
        });
    }
    return part;
}

function parseField(input: string, fieldIndex: number): CronField {
    const [min, max] = FIELD_BOUNDS[fieldIndex];
    const raw = input.trim();
    const normalized = normalizeNames(raw, fieldIndex);
    const values = new Set<number>();

    for (const part of normalized.split(",")) {
        let p = part.trim();
        let step = 1;
        const stepIdx = p.indexOf("/");
        if (stepIdx !== -1) {
            step = parseInt(p.slice(stepIdx + 1), 10);
            if (!Number.isFinite(step) || step <= 0) {
                throw new Error(`Invalid step in "${p}"`);
            }
            p = p.slice(0, stepIdx);
        }
        let start = min;
        let end = max;
        if (p === "*") {
            // range stays at full bounds
        } else if (p.includes("-")) {
            const [a, b] = p.split("-").map((s) => parseInt(s, 10));
            if (!Number.isFinite(a) || !Number.isFinite(b)) {
                throw new Error(`Invalid range "${p}"`);
            }
            start = a;
            end = b;
        } else {
            const n = parseInt(p, 10);
            if (!Number.isFinite(n)) {
                throw new Error(`Invalid value "${p}"`);
            }
            start = n;
            end = n;
        }
        if (start < min || end > max || start > end) {
            throw new Error(`Out of range: ${p} not within ${min}-${max}`);
        }
        for (let i = start; i <= end; i += step) values.add(i);
    }

    const arr = Array.from(values).sort((a, b) => a - b);
    return {
        raw,
        values: arr,
        matches: (v: number) => values.has(v),
    };
}

export function parseCron(expr: string): ParsedCron {
    const parts = expr.trim().split(/\s+/);
    if (parts.length !== 5) {
        throw new Error(
            `Cron expression must have 5 fields (minute hour day month weekday). Got ${parts.length}.`,
        );
    }
    return {
        minute: parseField(parts[0], 0),
        hour: parseField(parts[1], 1),
        dayOfMonth: parseField(parts[2], 2),
        month: parseField(parts[3], 3),
        dayOfWeek: parseField(parts[4], 4),
    };
}

export function nextRuns(expr: string, count: number, from: Date = new Date()): Date[] {
    const parsed = parseCron(expr);
    const results: Date[] = [];
    const cursor = new Date(from.getTime());
    cursor.setSeconds(0, 0);
    cursor.setMinutes(cursor.getMinutes() + 1);

    let safety = 0;
    const MAX_ITER = 4 * 365 * 24 * 60;

    while (results.length < count && safety < MAX_ITER) {
        safety++;

        const minute = cursor.getMinutes();
        const hour = cursor.getHours();
        const dom = cursor.getDate();
        const month = cursor.getMonth() + 1;
        const dow = cursor.getDay();

        const domStarUsed = parsed.dayOfMonth.raw.trim() === "*";
        const dowStarUsed = parsed.dayOfWeek.raw.trim() === "*";

        let dayMatch: boolean;
        if (domStarUsed && dowStarUsed) {
            dayMatch = true;
        } else if (domStarUsed) {
            dayMatch = parsed.dayOfWeek.matches(dow);
        } else if (dowStarUsed) {
            dayMatch = parsed.dayOfMonth.matches(dom);
        } else {
            dayMatch = parsed.dayOfMonth.matches(dom) || parsed.dayOfWeek.matches(dow);
        }

        if (
            parsed.minute.matches(minute) &&
            parsed.hour.matches(hour) &&
            parsed.month.matches(month) &&
            dayMatch
        ) {
            results.push(new Date(cursor.getTime()));
        }

        cursor.setMinutes(cursor.getMinutes() + 1);
    }

    return results;
}

const MONTH_LABELS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function describeField(raw: string, kind: "minute" | "hour" | "dom" | "month" | "dow"): string {
    if (raw === "*") {
        if (kind === "minute") return "every minute";
        if (kind === "hour") return "every hour";
        if (kind === "dom") return "every day of the month";
        if (kind === "month") return "every month";
        if (kind === "dow") return "every day of the week";
    }
    if (raw.startsWith("*/")) {
        const step = raw.slice(2);
        if (kind === "minute") return `every ${step} minutes`;
        if (kind === "hour") return `every ${step} hours`;
        if (kind === "dom") return `every ${step} days`;
        if (kind === "month") return `every ${step} months`;
        if (kind === "dow") return `every ${step} weekdays`;
    }
    if (kind === "month" && raw.match(/^\d+(,\d+)*$/)) {
        return raw.split(",").map((n) => MONTH_LABELS[parseInt(n, 10)] || n).join(", ");
    }
    if (kind === "dow" && raw.match(/^\d+(,\d+)*$/)) {
        return raw.split(",").map((n) => DOW_LABELS[parseInt(n, 10)] || n).join(", ");
    }
    return raw;
}

export function humanize(expr: string): string {
    try {
        const parts = expr.trim().split(/\s+/);
        if (parts.length !== 5) return "Invalid expression";
        const [m, h, dom, mon, dow] = parts;
        const minuteStr =
            m === "0" ? "on the hour" : m === "*" ? "every minute" : `at minute ${m}`;
        const hourStr =
            h === "*" ? "every hour" : `at ${parseInt(h, 10)}:${m === "*" ? "00" : m.padStart(2, "0")}`;
        const left = h === "*" || m === "*" ? minuteStr : hourStr;
        const domStr = describeField(dom, "dom");
        const monStr = describeField(mon, "month");
        const dowStr = describeField(dow, "dow");

        const parts2: string[] = [left];
        if (dom !== "*" || dow !== "*") {
            const dayBits: string[] = [];
            if (dom !== "*") dayBits.push(`on day ${domStr} of the month`);
            if (dow !== "*") dayBits.push(`on ${dowStr}`);
            parts2.push(dayBits.join(" or "));
        }
        if (mon !== "*") parts2.push(`in ${monStr}`);
        return parts2.join(", ");
    } catch {
        return "Invalid expression";
    }
}
