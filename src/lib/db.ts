import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export { sql };

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface User {
    id: number;
    username: string;
    full_name: string;
    email: string;
    password_hash: string;
    role: "admin" | "sales";
    created_at: string;
}

export interface Consultation {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service: string;
    project_type: string | null;
    budget: string | null;
    timeline: string | null;
    message: string;
    referral: string | null;
    status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost" | "reviewed" | "closed";
    assigned_to_id: number | null;
    value_est: number | null;
    next_follow_up: string | null;
    created_at: string;
}

export interface LeadNote {
    id: number;
    lead_id: number;
    user_id: number;
    note_text: string;
    created_at: string;
    // joined fields
    author_name?: string;
}

export interface Client {
    id: number;
    company_name: string;
    primary_contact: string;
    email: string;
    phone: string | null;
    assigned_to_id: number | null;
    status: "active" | "inactive";
    converted_from_lead_id: number | null;
    created_at: string;
    // joined fields
    assigned_to_name?: string;
}

export interface ClientRecording {
    id: number;
    client_id: number;
    filename: string;
    file_type: string;
    file_size: number;
    uploaded_by: number | null;
    notes: string | null;
    created_at: string;
    // joined fields
    uploader_name?: string;
}

export interface ClientFile {
    id: number;
    client_id: number;
    project_id: number | null;
    filename: string;
    file_type: string;
    file_size: number;
    uploaded_by: number | null;
    notes: string | null;
    created_at: string;
    uploader_name?: string;
    project_name?: string;
}

export interface ClientNote {
    id: number;
    client_id: number;
    user_id: number;
    note_text: string;
    created_at: string;
    author_name?: string;
}

export interface ClientProject {
    id: number;
    client_id: number;
    name: string;
    description: string | null;
    status: "planning" | "active" | "completed" | "on-hold";
    value: number | null;
    start_date: string | null;
    created_at: string;
}

export interface PageVisit {
    id: number;
    ip: string | null;
    user_agent: string | null;
    referrer: string | null;
    path: string;
    created_at: string;
}

export interface QuestionnaireResponse {
    id: number;
    lead_id: number;
    salesman_code: string;
    company_size: string | null;
    industry: string | null;
    current_tools: string | null;
    satisfaction: number | null;
    pain_points: string | null;
    goals: string | null;
    budget_range: string | null;
    timeline: string | null;
    decision_maker: string | null;
    additional_notes: string | null;
    created_at: string;
}

export interface PaymentLink {
    id: number;
    client_name: string;
    client_email: string | null;
    description: string;
    amount_cents: number;
    link_type: "one_time" | "recurring";
    stripe_url: string;
    stripe_payment_link_id: string;
    stripe_price_id: string;
    stripe_product_id: string;
    status: "active" | "deactivated";
    created_at: string;
}

export interface InvoiceLineItem {
    description: string;
    quantity: number;
    rate_cents: number;
    amount_cents: number;
}

export interface Invoice {
    id: number;
    invoice_number: string;
    client_name: string;
    client_email: string | null;
    client_address: string | null;
    line_items: string; // JSON string of InvoiceLineItem[]
    subtotal_cents: number;
    tax_rate: number;
    tax_cents: number;
    total_cents: number;
    notes: string | null;
    due_date: string | null;
    payment_type: "one_time" | "recurring";
    status: "draft" | "sent" | "paid" | "cancelled";
    stripe_url: string;
    stripe_payment_link_id: string;
    stripe_price_id: string;
    stripe_product_id: string;
    created_at: string;
}

// ─── Migration ────────────────────────────────────────────────────────────────

let migrated = false;

export async function ensureMigrated() {
    if (migrated) return;
    migrated = true;

    // ── CRM Users table (namespaced to avoid collision) ────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS crm_users (
            id            SERIAL PRIMARY KEY,
            username      TEXT NOT NULL UNIQUE,
            full_name     TEXT NOT NULL DEFAULT '',
            email         TEXT NOT NULL DEFAULT '',
            password_hash TEXT NOT NULL,
            role          TEXT NOT NULL DEFAULT 'admin',
            created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // Migrate old admin_users into crm_users if they exist
    try {
        await sql`
            INSERT INTO crm_users (username, password_hash, role)
            SELECT username, password_hash, 'admin'
            FROM admin_users
            ON CONFLICT (username) DO NOTHING
        `;
    } catch {
        // admin_users table may not exist on fresh installs — that's fine
    }

    // ── Consultations (leads) ─────────────────────────────────────────────
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

    // Extended lead columns (safe — IF NOT EXISTS)
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS phone TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS project_type TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS budget TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS timeline TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS referral TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS assigned_to_id INTEGER`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS value_est NUMERIC`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS next_follow_up TIMESTAMPTZ`;

    // ── Lead Notes ────────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS lead_notes (
            id          SERIAL PRIMARY KEY,
            lead_id     INTEGER NOT NULL,
            user_id     INTEGER NOT NULL,
            note_text   TEXT NOT NULL,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Clients ───────────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS clients (
            id                     SERIAL PRIMARY KEY,
            company_name           TEXT NOT NULL,
            primary_contact        TEXT NOT NULL,
            email                  TEXT NOT NULL,
            phone                  TEXT,
            assigned_to_id         INTEGER,
            status                 TEXT NOT NULL DEFAULT 'active',
            converted_from_lead_id INTEGER,
            created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Page visits ───────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS page_visits (
            id          SERIAL PRIMARY KEY,
            ip          TEXT,
            user_agent  TEXT,
            referrer    TEXT,
            path        TEXT NOT NULL DEFAULT '/',
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Recordings ─────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_recordings (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            filename    TEXT NOT NULL,
            file_data   TEXT NOT NULL,
            file_type   TEXT NOT NULL DEFAULT 'audio/mpeg',
            file_size   INTEGER NOT NULL DEFAULT 0,
            uploaded_by  INTEGER,
            notes       TEXT,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Notes ──────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_notes (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            user_id     INTEGER NOT NULL,
            note_text   TEXT NOT NULL,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Projects ──────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_projects (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            name        TEXT NOT NULL,
            description TEXT,
            status      TEXT NOT NULL DEFAULT 'planning',
            value       NUMERIC,
            start_date  TIMESTAMPTZ,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Files (general attachments) ───────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_files (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            project_id  INTEGER,
            filename    TEXT NOT NULL,
            file_data   TEXT NOT NULL,
            file_type   TEXT NOT NULL DEFAULT 'application/octet-stream',
            file_size   INTEGER NOT NULL DEFAULT 0,
            uploaded_by  INTEGER,
            notes       TEXT,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Referral code on users ─────────────────────────────────────────────
    await sql`ALTER TABLE crm_users ADD COLUMN IF NOT EXISTS referral_code TEXT`;
    // Default referral_code to username for any user that doesn't have one
    await sql`UPDATE crm_users SET referral_code = username WHERE referral_code IS NULL`;

    // ── Questionnaire Responses ───────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS questionnaire_responses (
            id               SERIAL PRIMARY KEY,
            lead_id          INTEGER NOT NULL,
            salesman_code    TEXT NOT NULL,
            company_size     TEXT,
            industry         TEXT,
            current_tools    TEXT,
            satisfaction     INTEGER,
            pain_points      TEXT,
            goals            TEXT,
            budget_range     TEXT,
            timeline         TEXT,
            decision_maker   TEXT,
            additional_notes TEXT,
            created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
    // ── Payment Links ──────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS payment_links (
            id                     SERIAL PRIMARY KEY,
            client_name            TEXT NOT NULL,
            client_email           TEXT,
            description            TEXT NOT NULL,
            amount_cents           INTEGER NOT NULL,
            link_type              TEXT NOT NULL DEFAULT 'one_time',
            stripe_url             TEXT NOT NULL,
            stripe_payment_link_id TEXT NOT NULL,
            stripe_price_id        TEXT NOT NULL,
            stripe_product_id      TEXT NOT NULL,
            status                 TEXT NOT NULL DEFAULT 'active',
            created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Invoices ─────────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS invoices (
            id                     SERIAL PRIMARY KEY,
            invoice_number         TEXT NOT NULL UNIQUE,
            client_name            TEXT NOT NULL,
            client_email           TEXT,
            client_address         TEXT,
            line_items             TEXT NOT NULL DEFAULT '[]',
            subtotal_cents         INTEGER NOT NULL DEFAULT 0,
            tax_rate               NUMERIC NOT NULL DEFAULT 0,
            tax_cents              INTEGER NOT NULL DEFAULT 0,
            total_cents            INTEGER NOT NULL DEFAULT 0,
            notes                  TEXT,
            due_date               TIMESTAMPTZ,
            payment_type           TEXT NOT NULL DEFAULT 'one_time',
            status                 TEXT NOT NULL DEFAULT 'sent',
            stripe_url             TEXT NOT NULL,
            stripe_payment_link_id TEXT NOT NULL,
            stripe_price_id        TEXT NOT NULL,
            stripe_product_id      TEXT NOT NULL,
            created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
    await sql`ALTER TABLE invoices ADD COLUMN IF NOT EXISTS payment_type TEXT NOT NULL DEFAULT 'one_time'`;

    // ── J5 Sales OS enrichment columns on consultations ───────────────
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS website TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS linkedin_url TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS instagram_url TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS facebook_url TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS location TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS business_category TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS lead_source TEXT DEFAULT 'Manual Entry'`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS opportunity_level TEXT DEFAULT 'medium'`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS solutions TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS analysis_data TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMPTZ DEFAULT NOW()`;

    // ── Prospect presets (per-user saved search criteria) ─────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS sales_prospect_presets (
            id          SERIAL PRIMARY KEY,
            user_id     INTEGER NOT NULL,
            name        TEXT NOT NULL,
            criteria    TEXT NOT NULL DEFAULT '{}',
            is_default  BOOLEAN NOT NULL DEFAULT FALSE,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Dual-mode lookup columns on consultations ──────────────────────
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS entity_type TEXT DEFAULT 'organization'`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS job_title TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS source_refs TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS contact_confidence INTEGER`;

    // ── Mode column on presets ─────────────────────────────────────────
    await sql`ALTER TABLE sales_prospect_presets ADD COLUMN IF NOT EXISTS mode TEXT DEFAULT 'organization'`;

    // ── Per-user SMTP credentials + prompt rules for outreach ──────────
    await sql`ALTER TABLE crm_users ADD COLUMN IF NOT EXISTS smtp_pass TEXT`;
    await sql`ALTER TABLE crm_users ADD COLUMN IF NOT EXISTS outreach_prompt_rules TEXT`;

    // ── Seed superadmin ────────────────────────────────────────────────────
    const superAdminHash = bcrypt.hashSync("gold".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code, smtp_pass)
        VALUES ('beltz', 'Beltz', 'beltz@quantlabusa.dev', ${superAdminHash}, 'admin', 'QL9K4B', 'Printer123!!!')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                email         = EXCLUDED.email,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code,
                smtp_pass     = EXCLUDED.smtp_pass
    `;

    // ── Seed sales team ───────────────────────────────────────────────────
    const marshHash = bcrypt.hashSync("printer".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code)
        VALUES ('marsh', 'Marsh', 'marsh@quantlab.dev', ${marshHash}, 'sales', 'QL7X2M')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code
    `;

    const salesHash = bcrypt.hashSync("sales123".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code)
        VALUES ('sarah', 'Sarah Chen', 'sarah@quantlab.dev', ${salesHash}, 'sales', 'QL3R8S')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code
    `;

    const wilderHash = bcrypt.hashSync("printer".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code, smtp_pass)
        VALUES ('wilder', 'Wilder', 'wilder@quantlabusa.dev', ${wilderHash}, 'sales', 'QL5W1J', 'Printer123!!!')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                email         = EXCLUDED.email,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code,
                smtp_pass     = EXCLUDED.smtp_pass
    `;

    const jordanHash = bcrypt.hashSync("limitless".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code, smtp_pass)
        VALUES ('jordan', 'Jordan Atkins', 'atkins@quantlabusa.dev', ${jordanHash}, 'sales', 'QL8J6D', 'Thejordanatkins777!!!')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                email         = EXCLUDED.email,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code,
                smtp_pass     = EXCLUDED.smtp_pass
    `;

    const lucasHash = bcrypt.hashSync("money".toLowerCase(), 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role, referral_code)
        VALUES ('lucas', 'Lucas', 'lucas@quantlab.dev', ${lucasHash}, 'sales', 'QL4L9K')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                full_name     = EXCLUDED.full_name,
                role          = EXCLUDED.role,
                referral_code = EXCLUDED.referral_code
    `;
}
