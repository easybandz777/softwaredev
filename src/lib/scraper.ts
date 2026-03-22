import * as cheerio from "cheerio";

const EMAIL_REGEX = /\b[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}\b/gi;
const EMAIL_BLOCKLIST = ["example.com", "sentry.io", "wixpress.com", "squarespace.com"];

function isValidEmail(email: string) {
    const domain = email.split("@")[1]?.toLowerCase() || "";
    if (EMAIL_BLOCKLIST.some(b => domain.includes(b))) return false;
    if (email.endsWith(".png") || email.endsWith(".jpg")) return false;
    return true;
}

async function fetchWithTimeout(url: string, timeoutMs = 4000): Promise<string | null> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, {
            signal: controller.signal,
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
                Accept: "text/html",
            },
            redirect: "follow",
        });
        return await res.text();
    } catch {
        return null;
    } finally {
        clearTimeout(timer);
    }
}

function extractEmails(html: string | null): string | null {
    if (!html) return null;
    const $ = cheerio.load(html);
    const mailtoEmails: string[] = [];
    $('a[href^="mailto:"]').each((_, el) => {
        const href = $(el).attr("href") || "";
        const email = href.replace("mailto:", "").split("?")[0].trim();
        if (email) mailtoEmails.push(email);
    });
    if (mailtoEmails.length > 0) {
        const valid = mailtoEmails.find(isValidEmail);
        if (valid) return valid;
    }
    const text = $.text();
    const matches = text.match(EMAIL_REGEX) || [];
    return matches.find(isValidEmail) || null;
}

export type EnrichableLead = {
    website?: string | null;
} & Record<string, unknown>;

export async function enrichWithEmails<T extends EnrichableLead>(leads: T[], concurrency = 5): Promise<(T & { email: string | null; emailMissing: boolean })[]> {
    const results: (T & { email: string | null; emailMissing: boolean })[] = [];
    let index = 0;

    async function worker() {
        while (index < leads.length) {
            const current = index++;
            const lead = leads[current];
            if (!lead.website) {
                results[current] = { ...lead, email: null, emailMissing: true };
                continue;
            }
            let email: string | null = null;
            const homepage = await fetchWithTimeout(lead.website);
            email = extractEmails(homepage);

            const fallbackPaths = ["/contact", "/contact-us", "/about", "/about-us"];
            for (const path of fallbackPaths) {
                if (email) break;
                const fallbackUrl = lead.website!.replace(/\/$/, "") + path;
                const fallbackPage = await fetchWithTimeout(fallbackUrl);
                email = extractEmails(fallbackPage);
            }
            results[current] = { ...lead, email, emailMissing: !email };
        }
    }

    const workers = Array.from({ length: Math.min(concurrency, leads.length) }, worker);
    await Promise.all(workers);
    return results;
}
