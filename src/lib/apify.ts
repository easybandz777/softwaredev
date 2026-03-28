/**
 * Apify Google Maps Scraper integration.
 * Uses the compass/crawler-google-places actor to discover businesses.
 * Falls back to Google Places API if Apify is unavailable or times out.
 */

import type { PlaceCandidate } from "./places";

const APIFY_SYNC_URL =
    "https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items";

interface ApifyPlace {
    title?: string;
    address?: string;
    phone?: string;
    website?: string;
    totalScore?: number;
    reviewsCount?: number;
    placeId?: string;
    categoryName?: string;
    categories?: string[];
    permanentlyClosed?: boolean;
    temporarilyClosed?: boolean;
}

const DIRECTORY_BLOCKLIST = [
    "yelp.com", "yellowpages.com", "bbb.org", "thumbtack.com",
    "houzz.com", "angi.com", "angieslist.com", "homeadvisor.com",
    "manta.com", "mapquest.com", "superpages.com", "google.com",
    "facebook.com", "instagram.com", "linkedin.com", "nextdoor.com",
    "tripadvisor.com", "trustpilot.com", "porch.com", "bark.com",
    "alignable.com", "chamberofcommerce.com",
];

function isDirectory(url: string | undefined | null): boolean {
    if (!url) return false; // no website is OK — don't block
    try {
        const hostname = new URL(url).hostname.replace("www.", "");
        return DIRECTORY_BLOCKLIST.some(d => hostname.endsWith(d));
    } catch {
        return false;
    }
}

export async function searchApify(query: string, limit = 10): Promise<PlaceCandidate[]> {
    const token = (process.env.APIFY_API_TOKEN || "").trim();
    if (!token) throw new Error("APIFY_API_TOKEN is not set");

    const maxResults = Math.min(limit * 5, 50);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 45000); // 45s hard limit

    try {
        const res = await fetch(`${APIFY_SYNC_URL}?format=json&clean=true`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                searchStringsArray: [query],
                maxCrawledPlacesPerSearch: maxResults,
                language: "en",
                maxImages: 0,
                maxReviews: 0,
            }),
            signal: controller.signal,
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Apify error ${res.status}: ${errText.substring(0, 200)}`);
        }

        const places: ApifyPlace[] = await res.json();

        const candidates: PlaceCandidate[] = [];
        for (const p of places) {
            if (!p.title) continue;
            if (p.permanentlyClosed || p.temporarilyClosed) continue;
            if (isDirectory(p.website)) continue;

            candidates.push({
                companyName: p.title,
                location: p.address || "",
                phone: p.phone || null,
                website: p.website || null,
                placeId: p.placeId || `apify_${p.title.replace(/\s+/g, "_").substring(0, 40)}`,
                types: p.categories || (p.categoryName ? [p.categoryName] : []),
                rating: p.totalScore ?? null,
                reviewCount: p.reviewsCount ?? 0,
            });
        }

        return candidates;
    } finally {
        clearTimeout(timeout);
    }
}
