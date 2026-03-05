import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export { sql };

export interface Consultation {
    id: number;
    name: string;
    email: string;
    company: string | null;
    service: string;
    message: string;
    status: "new" | "reviewed" | "closed";
    created_at: string;
}

let migrated = false;

export async function ensureMigrated() {
    if (migrated) return;
    migrated = true;

    await sql`
        CREATE TABLE IF NOT EXISTS consultations (
            id          SERIAL PRIMARY KEY,
            name        TEXT NOT NULL,
            email       TEXT NOT NULL,
            company     TEXT,
            service     TEXT NOT NULL,
            message     TEXT NOT NULL,
            status      TEXT NOT NULL DEFAULT 'new',
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS admin_users (
            id            SERIAL PRIMARY KEY,
            username      TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL
        )
    `;

    // Seed default admin if none exists
    const { rows } = await sql`SELECT id FROM admin_users LIMIT 1`;
    if (rows.length === 0) {
        const hash = bcrypt.hashSync("quantlab2024", 10);
        await sql`INSERT INTO admin_users (username, password_hash) VALUES ('admin', ${hash})`;
    }
}
