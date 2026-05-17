import Link from "next/link";
import { ExternalLink, MapPin, Star, ThumbsUp } from "lucide-react";

interface Props {
    /** Display name of the city, e.g. "Atlanta". */
    city: string;
    /** State abbreviation, e.g. "GA". */
    state: string;
    /** 1–2 sentence local-market insight you can stand behind. Required —
     *  do not leave blank. */
    localInsight: string;
    /** Optional landmark / neighborhood reference embedded near the headline. */
    landmark?: string;
    /** Whether to show the GBP review link (only for cities where reviewers
     *  reasonably came from). Defaults to true. */
    showGbp?: boolean;
    /** Optional className passthrough. */
    className?: string;
}

const GBP_REVIEW_URL = "https://g.page/r/CbkSyF5E2JFtEBM/review";
const GBP_PROFILE_URL = "https://g.page/r/CbkSyF5E2JFtEBM";

/**
 * Local E-E-A-T strip for city landing pages.
 *
 * Renders a verified local insight, a link to the QUANT LAB USA Google
 * Business Profile (review + profile), and a placeholder area where a Google
 * Reviews widget can be embedded once the GBP API key is wired up.
 *
 * Do not invent local statistics or claims. Pass `localInsight` from
 * verifiable city/page knowledge (Transaction Alley, Tech Square, etc).
 */
export function LocalTrustStrip({
    city,
    state,
    localInsight,
    landmark,
    showGbp = true,
    className,
}: Props) {
    return (
        <div
            className={
                "rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 md:p-8 " +
                (className ?? "")
            }
            data-testid="local-trust-strip"
            aria-label={`Why ${city} clients choose QUANT LAB USA`}
        >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <MapPin className="h-3.5 w-3.5" />
                Why {city}, {state} clients choose us
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white leading-tight">
                {landmark ? (
                    <>
                        From {landmark} to your office —{" "}
                    </>
                ) : null}
                local accountability, not a 1-800 line.
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">{localInsight}</p>

            {showGbp ? (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                        href={GBP_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-3 rounded-xl border border-white/8 bg-[#0a1120] p-4 hover:border-sky-400/30 transition-colors"
                    >
                        <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
                        <span className="text-sm leading-relaxed text-gray-300">
                            <span className="font-semibold text-white">
                                See us on Google
                            </span>
                            <br />
                            Verified Google Business Profile · QUANT LAB USA INC,
                            Macon, GA{" "}
                            <ExternalLink className="ml-1 inline-block h-3 w-3 text-gray-500" />
                        </span>
                    </a>
                    <a
                        href={GBP_REVIEW_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-3 rounded-xl border border-white/8 bg-[#0a1120] p-4 hover:border-sky-400/30 transition-colors"
                    >
                        <ThumbsUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                        <span className="text-sm leading-relaxed text-gray-300">
                            <span className="font-semibold text-white">
                                Leave a review
                            </span>
                            <br />
                            Worked with us in {city}? One-tap Google review link.{" "}
                            <ExternalLink className="ml-1 inline-block h-3 w-3 text-gray-500" />
                        </span>
                    </a>
                </div>
            ) : null}

            {showGbp ? (
                <div
                    className="mt-5 rounded-xl border border-dashed border-white/10 bg-black/30 p-4 text-xs text-gray-500"
                    data-eeat-reviews-widget
                >
                    {/* TODO(user): drop a Google Reviews widget (Elfsight,
                        SociableKIT, or hand-rolled fetch from Places API) into
                        this container once a Places API key is provisioned.
                        Until then, the GBP buttons above carry the load. */}
                    Live reviews widget loads here once the Google Places API key
                    is provisioned. Until then, see the verified profile linked
                    above.
                </div>
            ) : null}

            <p className="mt-5 text-xs text-gray-500">
                Bookkeeping, entity, and credentials:{" "}
                <Link
                    href="/certifications-credentials"
                    className="text-sky-400 hover:underline"
                >
                    QUANT LAB USA INC, GA SOS #26086454
                </Link>
                .
            </p>
        </div>
    );
}
