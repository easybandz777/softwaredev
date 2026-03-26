import { ImapFlow } from "imapflow";
import { sql, ensureMigrated } from "@/lib/db";
import { recalculateTemperature } from "@/lib/temperature";

const IMAP_HOST = "mail.spacemail.com";
const IMAP_PORT = 993;
const MAX_MESSAGES_PER_SYNC = 40;
const CONNECT_TIMEOUT_MS = 10_000;
const OVERALL_TIMEOUT_MS = 45_000;

interface ParsedEmail {
    messageId: string | null;
    inReplyTo: string | null;
    from: string;
    to: string;
    subject: string;
    bodyText: string;
    bodyHtml: string;
    date: Date;
    uid: number;
}

function extractEmail(addr: string): string {
    const match = addr.match(/<([^>]+)>/);
    return (match ? match[1] : addr).trim().toLowerCase();
}

function normalizeAddressField(field: unknown): string {
    if (!field) return "";
    if (typeof field === "string") return field;
    if (Array.isArray(field)) {
        return field.map(a => {
            if (typeof a === "string") return a;
            if (a && typeof a === "object" && "address" in a) return (a as { address: string }).address;
            return String(a);
        }).join(", ");
    }
    if (typeof field === "object" && field !== null && "address" in field) {
        return (field as { address: string }).address;
    }
    return String(field);
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
    return Promise.race([
        promise,
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)),
    ]);
}

export interface SyncResult {
    synced: number;
    newLeads: number;
    matched: number;
    errors: string[];
    capped?: boolean;
}

export async function syncInbox(userId: number, userEmail: string, userSmtpPass: string): Promise<SyncResult> {
    await ensureMigrated();

    const result: SyncResult = { synced: 0, newLeads: 0, matched: 0, errors: [] };
    const deadline = Date.now() + OVERALL_TIMEOUT_MS;

    const { rows: stateRows } = await sql`
        SELECT last_uid, auto_create_leads FROM email_sync_state WHERE user_id = ${userId}
    `;
    let lastUid = stateRows[0]?.last_uid || 0;
    const autoCreate = stateRows[0]?.auto_create_leads === true;
    const isFirstSync = lastUid === 0;

    const client = new ImapFlow({
        host: IMAP_HOST,
        port: IMAP_PORT,
        secure: true,
        auth: { user: userEmail, pass: userSmtpPass },
        logger: false,
        tls: { rejectUnauthorized: false },
    });

    try {
        await withTimeout(client.connect(), CONNECT_TIMEOUT_MS, "IMAP connect");
        const lock = await withTimeout(client.getMailboxLock("INBOX"), 10_000, "Mailbox lock");

        try {
            const messages: ParsedEmail[] = [];

            if (isFirstSync) {
                const totalMessages = (client.mailbox as { exists?: number })?.exists ?? 0;
                const startSeq = Math.max(1, totalMessages - MAX_MESSAGES_PER_SYNC + 1);
                const fetchRange = `${startSeq}:*`;

                for await (const msg of client.fetch(fetchRange, {
                    uid: true,
                    envelope: true,
                    source: false,
                    headers: ["message-id", "in-reply-to"],
                })) {
                    if (Date.now() > deadline) { result.capped = true; break; }

                    const env = msg.envelope;
                    if (!env) continue;

                    const fromAddr = normalizeAddressField(env.from?.[0]?.address || env.from);
                    const toAddr = normalizeAddressField(env.to?.[0]?.address || env.to);

                    let msgIdHeader: string | undefined;
                    let inReplyToHeader: string | undefined;
                    if (msg.headers) {
                        const headerStr = Buffer.isBuffer(msg.headers)
                            ? msg.headers.toString("utf-8")
                            : typeof msg.headers === "string" ? msg.headers : "";
                        const idMatch = headerStr.match(/message-id:\s*(.+)/i);
                        if (idMatch) msgIdHeader = idMatch[1].trim();
                        const replyMatch = headerStr.match(/in-reply-to:\s*(.+)/i);
                        if (replyMatch) inReplyToHeader = replyMatch[1].trim();
                    }

                    messages.push({
                        messageId: typeof msgIdHeader === "string" ? msgIdHeader.trim() : null,
                        inReplyTo: typeof inReplyToHeader === "string" ? inReplyToHeader.trim() : null,
                        from: extractEmail(fromAddr),
                        to: extractEmail(toAddr),
                        subject: env.subject || "(no subject)",
                        bodyText: "",
                        bodyHtml: "",
                        date: env.date ? new Date(env.date) : new Date(),
                        uid: msg.uid,
                    });
                }
            } else {
                const searchRange = `${lastUid + 1}:*`;

                let count = 0;
                for await (const msg of client.fetch(searchRange, {
                    uid: true,
                    envelope: true,
                    source: false,
                    headers: ["message-id", "in-reply-to"],
                }, { uid: true })) {
                    if (msg.uid <= lastUid) continue;
                    if (Date.now() > deadline || count >= MAX_MESSAGES_PER_SYNC) { result.capped = true; break; }
                    count++;

                    const env = msg.envelope;
                    if (!env) continue;

                    const fromAddr = normalizeAddressField(env.from?.[0]?.address || env.from);
                    const toAddr = normalizeAddressField(env.to?.[0]?.address || env.to);

                    let bodyText = "";
                    try {
                        const textPart = await withTimeout(
                            client.download(String(msg.uid), "1", { uid: true }),
                            5_000,
                            "Body download"
                        );
                        if (textPart?.content) {
                            const chunks: Buffer[] = [];
                            for await (const chunk of textPart.content) {
                                chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
                            }
                            bodyText = Buffer.concat(chunks).toString("utf-8");
                        }
                    } catch {
                        bodyText = "";
                    }

                    let msgIdHeader: string | undefined;
                    let inReplyToHeader: string | undefined;
                    if (msg.headers) {
                        const headerStr = Buffer.isBuffer(msg.headers)
                            ? msg.headers.toString("utf-8")
                            : typeof msg.headers === "string" ? msg.headers : "";
                        const idMatch = headerStr.match(/message-id:\s*(.+)/i);
                        if (idMatch) msgIdHeader = idMatch[1].trim();
                        const replyMatch = headerStr.match(/in-reply-to:\s*(.+)/i);
                        if (replyMatch) inReplyToHeader = replyMatch[1].trim();
                    }

                    messages.push({
                        messageId: typeof msgIdHeader === "string" ? msgIdHeader.trim() : null,
                        inReplyTo: typeof inReplyToHeader === "string" ? inReplyToHeader.trim() : null,
                        from: extractEmail(fromAddr),
                        to: extractEmail(toAddr),
                        subject: env.subject || "(no subject)",
                        bodyText,
                        bodyHtml: "",
                        date: env.date ? new Date(env.date) : new Date(),
                        uid: msg.uid,
                    });
                }
            }

            for (const email of messages) {
                if (Date.now() > deadline) { result.capped = true; break; }

                try {
                    const isInbound = email.to.toLowerCase() === userEmail.toLowerCase();
                    const contactEmail = isInbound ? email.from : email.to;
                    const direction = isInbound ? "inbound" : "outbound";

                    const { rows: leadRows } = await sql`
                        SELECT id FROM consultations WHERE LOWER(email) = ${contactEmail.toLowerCase()} LIMIT 1
                    `;

                    let leadId: number;

                    if (leadRows.length > 0) {
                        leadId = leadRows[0].id;
                        result.matched++;
                    } else if (autoCreate && isInbound) {
                        const name = email.from.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
                        const { rows: newRows } = await sql`
                            INSERT INTO consultations (name, email, service, message, status, lead_source)
                            VALUES (${name}, ${contactEmail}, 'Inquiry', ${`Email: ${email.subject}`}, 'new', 'Email')
                            RETURNING id
                        `;
                        leadId = newRows[0].id;
                        result.newLeads++;
                    } else {
                        if (email.uid > lastUid) lastUid = email.uid;
                        continue;
                    }

                    const { rows: dupeCheck } = await sql`
                        SELECT id FROM lead_emails WHERE message_id = ${email.messageId} AND message_id IS NOT NULL LIMIT 1
                    `;
                    if (dupeCheck.length > 0) {
                        if (email.uid > lastUid) lastUid = email.uid;
                        continue;
                    }

                    const threadId = email.inReplyTo || email.messageId || null;

                    await sql`
                        INSERT INTO lead_emails (lead_id, message_id, in_reply_to, thread_id, direction, from_address, to_address, subject, body_text, body_html, sent_at)
                        VALUES (${leadId}, ${email.messageId}, ${email.inReplyTo}, ${threadId}, ${direction}, ${email.from}, ${email.to}, ${email.subject}, ${email.bodyText}, ${email.bodyHtml}, ${email.date.toISOString()})
                    `;

                    if (isInbound) {
                        await sql`
                            UPDATE consultations
                            SET last_activity_at = NOW(), last_reply_at = NOW(), cadence_paused = true
                            WHERE id = ${leadId}
                        `;
                    } else {
                        await sql`
                            UPDATE consultations SET last_activity_at = NOW() WHERE id = ${leadId}
                        `;
                    }

                    await recalculateTemperature(leadId);
                    result.synced++;
                    if (email.uid > lastUid) lastUid = email.uid;
                } catch (err) {
                    result.errors.push(`UID ${email.uid}: ${err instanceof Error ? err.message : String(err)}`);
                    if (email.uid > lastUid) lastUid = email.uid;
                }
            }

            await sql`
                INSERT INTO email_sync_state (user_id, last_uid, last_synced_at)
                VALUES (${userId}, ${lastUid}, NOW())
                ON CONFLICT (user_id) DO UPDATE SET last_uid = ${lastUid}, last_synced_at = NOW()
            `;
        } finally {
            lock.release();
        }

        // ── Sync Sent folder for outbound email recovery ─────────────────────
        // If we are extremely close to the deadline, skip Sent sync this round so we can exit gracefully
        if (Date.now() > deadline - 5000) {
            result.capped = true;
            return result; // return early, next sync will pick up
        }

        const sentFolderNames = ["Sent", "INBOX.Sent", "Sent Items", "Sent Messages", "[Gmail]/Sent Mail"];
        let sentFolder: string | null = null;
        try {
            const mailboxes = await client.list();
            for (const name of sentFolderNames) {
                if (mailboxes.some(mb => mb.path === name || mb.name === name)) {
                    sentFolder = name;
                    break;
                }
            }
        } catch { /* list not supported, try common names */ }
        if (!sentFolder) sentFolder = "Sent"; // default guess

        try {
            // Get last UID for sent folder
            await sql`ALTER TABLE email_sync_state ADD COLUMN IF NOT EXISTS last_uid_sent INT NOT NULL DEFAULT 0`;
            const { rows: sentState } = await sql`SELECT last_uid_sent FROM email_sync_state WHERE user_id = ${userId}`;
            let lastUidSent = sentState[0]?.last_uid_sent || 0;

            const sentLock = await withTimeout(client.getMailboxLock(sentFolder), 10_000, "Sent lock");
            try {
                const sentMessages: ParsedEmail[] = [];
                const searchRange = lastUidSent === 0
                    ? `${Math.max(1, ((client.mailbox as { exists?: number })?.exists ?? 0) - MAX_MESSAGES_PER_SYNC + 1)}:*`
                    : `${lastUidSent + 1}:*`;

                let count = 0;
                for await (const msg of client.fetch(searchRange, {
                    uid: true,
                    envelope: true,
                    source: false,
                    headers: ["message-id", "in-reply-to"],
                }, lastUidSent > 0 ? { uid: true } : undefined)) {
                    if (lastUidSent > 0 && msg.uid <= lastUidSent) continue;
                    if (Date.now() > deadline || count >= MAX_MESSAGES_PER_SYNC) { result.capped = true; break; }
                    count++;

                    const env = msg.envelope;
                    if (!env) continue;

                    const fromAddr = normalizeAddressField(env.from?.[0]?.address || env.from);
                    const toAddr = normalizeAddressField(env.to?.[0]?.address || env.to);

                    let bodyText = "";
                    try {
                        const textPart = await withTimeout(
                            client.download(String(msg.uid), "1", { uid: true }),
                            5_000,
                            "Sent body download"
                        );
                        if (textPart?.content) {
                            const chunks: Buffer[] = [];
                            for await (const chunk of textPart.content) {
                                chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
                            }
                            bodyText = Buffer.concat(chunks).toString("utf-8");
                        }
                    } catch { bodyText = ""; }

                    let msgIdHeader: string | undefined;
                    let inReplyToHeader: string | undefined;
                    if (msg.headers) {
                        const headerStr = Buffer.isBuffer(msg.headers)
                            ? msg.headers.toString("utf-8")
                            : typeof msg.headers === "string" ? msg.headers : "";
                        const idMatch = headerStr.match(/message-id:\s*(.+)/i);
                        if (idMatch) msgIdHeader = idMatch[1].trim();
                        const replyMatch = headerStr.match(/in-reply-to:\s*(.+)/i);
                        if (replyMatch) inReplyToHeader = replyMatch[1].trim();
                    }

                    sentMessages.push({
                        messageId: typeof msgIdHeader === "string" ? msgIdHeader.trim() : null,
                        inReplyTo: typeof inReplyToHeader === "string" ? inReplyToHeader.trim() : null,
                        from: extractEmail(fromAddr),
                        to: extractEmail(toAddr),
                        subject: env.subject || "(no subject)",
                        bodyText,
                        bodyHtml: "",
                        date: env.date ? new Date(env.date) : new Date(),
                        uid: msg.uid,
                    });
                }

                // Process sent messages — all are outbound
                for (const email of sentMessages) {
                    if (Date.now() > deadline) { result.capped = true; break; }
                    try {
                        const contactEmail = email.to;
                        const { rows: leadRows } = await sql`
                            SELECT id FROM consultations WHERE LOWER(email) = ${contactEmail.toLowerCase()} LIMIT 1
                        `;
                        if (leadRows.length === 0) {
                            if (email.uid > lastUidSent) lastUidSent = email.uid;
                            continue;
                        }
                        const leadId = leadRows[0].id;

                        const { rows: dupeCheck } = await sql`
                            SELECT id FROM lead_emails WHERE message_id = ${email.messageId} AND message_id IS NOT NULL LIMIT 1
                        `;
                        if (dupeCheck.length > 0) {
                            if (email.uid > lastUidSent) lastUidSent = email.uid;
                            continue;
                        }

                        const threadId = email.inReplyTo || email.messageId || null;
                        await sql`
                            INSERT INTO lead_emails (lead_id, message_id, in_reply_to, thread_id, direction, from_address, to_address, subject, body_text, body_html, sent_at)
                            VALUES (${leadId}, ${email.messageId}, ${email.inReplyTo}, ${threadId}, 'outbound', ${email.from}, ${email.to}, ${email.subject}, ${email.bodyText}, ${email.bodyHtml}, ${email.date.toISOString()})
                        `;
                        await sql`UPDATE consultations SET last_activity_at = NOW() WHERE id = ${leadId}`;
                        await recalculateTemperature(leadId);
                        result.synced++;
                        result.matched++;
                        if (email.uid > lastUidSent) lastUidSent = email.uid;
                    } catch (err) {
                        result.errors.push(`Sent UID ${email.uid}: ${err instanceof Error ? err.message : String(err)}`);
                        if (email.uid > lastUidSent) lastUidSent = email.uid;
                    }
                }

                await sql`
                    UPDATE email_sync_state SET last_uid_sent = ${lastUidSent} WHERE user_id = ${userId}
                `;
            } finally {
                sentLock.release();
            }
        } catch (sentErr) {
            result.errors.push(`Sent folder sync: ${sentErr instanceof Error ? sentErr.message : String(sentErr)}`);
        }
    } finally {
        await client.logout().catch(() => {});
    }

    return result;
}

export async function getSyncStatus(userId: number): Promise<{ lastSyncedAt: string | null; lastUid: number; autoCreateLeads: boolean }> {
    await ensureMigrated();
    const { rows } = await sql`SELECT last_synced_at, last_uid, auto_create_leads FROM email_sync_state WHERE user_id = ${userId}`;
    if (!rows[0]) return { lastSyncedAt: null, lastUid: 0, autoCreateLeads: true };
    return {
        lastSyncedAt: rows[0].last_synced_at,
        lastUid: rows[0].last_uid,
        autoCreateLeads: rows[0].auto_create_leads !== false,
    };
}

export async function setAutoCreateLeads(userId: number, enabled: boolean): Promise<void> {
    await ensureMigrated();
    await sql`
        INSERT INTO email_sync_state (user_id, auto_create_leads)
        VALUES (${userId}, ${enabled})
        ON CONFLICT (user_id) DO UPDATE SET auto_create_leads = ${enabled}
    `;
}
