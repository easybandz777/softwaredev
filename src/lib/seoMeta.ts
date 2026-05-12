import type { Metadata } from "next";

export const SITE_URL = "https://quantlabusa.dev";
export const BRAND_NAME = "QUANT LAB USA";
export const BRAND_LEGAL = "QUANT LAB USA INC";

export const DEFAULT_OG_IMAGE_PATH = "/og-image.png";
export const DEFAULT_TWITTER_IMAGE_PATH = "/twitter-card.png";
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export type OgType = "website" | "article" | "profile" | "book" | "video.other";

export type PageMetadataInput = {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    type?: OgType;
    canonical?: string;
    slug?: string;
    twitterImage?: string;
    siteName?: string;
    locale?: string;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    keywords?: string[];
    noindex?: boolean;
};

function absoluteUrl(maybeRelative: string): string {
    if (!maybeRelative) return SITE_URL;
    if (maybeRelative.startsWith("http://") || maybeRelative.startsWith("https://")) {
        return maybeRelative;
    }
    const path = maybeRelative.startsWith("/") ? maybeRelative : `/${maybeRelative}`;
    return `${SITE_URL}${path}`;
}

function buildCanonicalUrl(canonical?: string, slug?: string): string {
    if (canonical) return absoluteUrl(canonical);
    if (slug) return absoluteUrl(slug);
    return SITE_URL;
}

export function pageMetadata(input: PageMetadataInput): Metadata {
    const {
        title,
        description,
        image = DEFAULT_OG_IMAGE_PATH,
        imageAlt,
        imageWidth = DEFAULT_OG_IMAGE_WIDTH,
        imageHeight = DEFAULT_OG_IMAGE_HEIGHT,
        type = "website",
        canonical,
        slug,
        twitterImage,
        siteName = BRAND_NAME,
        locale = "en_US",
        publishedTime,
        modifiedTime,
        authors,
        keywords,
        noindex,
    } = input;

    const ogImageUrl = absoluteUrl(image);
    const twImageUrl = twitterImage ? absoluteUrl(twitterImage) : ogImageUrl;
    const canonicalUrl = buildCanonicalUrl(canonical, slug);
    const alt = imageAlt ?? `${title} — ${BRAND_NAME}`;

    const openGraph: NonNullable<Metadata["openGraph"]> = {
        title,
        description,
        url: canonicalUrl,
        siteName,
        type,
        locale,
        images: [
            {
                url: ogImageUrl,
                width: imageWidth,
                height: imageHeight,
                alt,
                type: "image/png",
            },
        ],
    };

    if (type === "article") {
        if (publishedTime) {
            (openGraph as { publishedTime?: string }).publishedTime = publishedTime;
        }
        if (modifiedTime) {
            (openGraph as { modifiedTime?: string }).modifiedTime = modifiedTime;
        }
        if (authors && authors.length > 0) {
            (openGraph as { authors?: string[] }).authors = authors;
        }
    }

    const metadata: Metadata = {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph,
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [twImageUrl],
            creator: "@quantlabusa",
            site: "@quantlabusa",
        },
        robots: noindex
            ? { index: false, follow: false }
            : { index: true, follow: true },
    };

    if (keywords && keywords.length > 0) {
        metadata.keywords = keywords;
    }

    if (authors && authors.length > 0) {
        metadata.authors = authors.map((name) => ({ name }));
    }

    return metadata;
}

export function articleMetadata(
    input: Omit<PageMetadataInput, "type"> & {
        publishedTime: string;
        modifiedTime?: string;
        authors?: string[];
    },
): Metadata {
    return pageMetadata({ ...input, type: "article" });
}

export function comparisonMetadata(
    input: Omit<PageMetadataInput, "type"> & { competitor: string },
): Metadata {
    return pageMetadata({
        ...input,
        type: "article",
        imageAlt:
            input.imageAlt ??
            `${BRAND_NAME} vs ${input.competitor} — feature, pricing and fit comparison`,
    });
}

export function calculatorMetadata(
    input: Omit<PageMetadataInput, "type">,
): Metadata {
    return pageMetadata({
        ...input,
        type: "website",
        imageAlt:
            input.imageAlt ??
            `${input.title} — interactive cost calculator from ${BRAND_NAME}`,
    });
}
