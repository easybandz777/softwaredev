"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, AlertTriangle, Copy, Code2, FileJson } from "lucide-react";

type SchemaType = "Organization" | "LocalBusiness" | "FAQPage" | "Article" | "Product";

type OrganizationInput = {
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string;
    email: string;
    telephone: string;
};

type LocalBusinessInput = {
    name: string;
    url: string;
    image: string;
    description: string;
    telephone: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
    priceRange: string;
    openingHours: string;
};

type FAQItem = { q: string; a: string };

type FAQInput = {
    items: FAQItem[];
};

type ArticleInput = {
    headline: string;
    description: string;
    image: string;
    authorName: string;
    publisherName: string;
    publisherLogo: string;
    datePublished: string;
    dateModified: string;
};

type ProductInput = {
    name: string;
    description: string;
    image: string;
    sku: string;
    brand: string;
    price: string;
    priceCurrency: string;
    availability: string;
    ratingValue: string;
    reviewCount: string;
};

type ValidationIssue = { field: string; severity: "error" | "warn"; message: string };

const URL_RE = /^https?:\/\/[^\s]+$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(Z|[+-]\d{2}:?\d{2})?)?$/;

function build(type: SchemaType, state: {
    org: OrganizationInput;
    lb: LocalBusinessInput;
    faq: FAQInput;
    article: ArticleInput;
    product: ProductInput;
}): { json: Record<string, unknown>; issues: ValidationIssue[] } {
    const issues: ValidationIssue[] = [];
    let json: Record<string, unknown> = {};

    if (type === "Organization") {
        const o = state.org;
        json = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: o.name,
            url: o.url,
            ...(o.logo ? { logo: o.logo } : {}),
            ...(o.description ? { description: o.description } : {}),
            ...(o.email ? { email: o.email } : {}),
            ...(o.telephone ? { telephone: o.telephone } : {}),
            ...(o.sameAs
                ? {
                      sameAs: o.sameAs
                          .split("\n")
                          .map((s) => s.trim())
                          .filter(Boolean),
                  }
                : {}),
        };
        if (!o.name.trim()) issues.push({ field: "name", severity: "error", message: "Organization.name is required." });
        if (!URL_RE.test(o.url)) issues.push({ field: "url", severity: "error", message: "url must be a full https URL." });
        if (o.logo && !URL_RE.test(o.logo)) issues.push({ field: "logo", severity: "warn", message: "logo should be a full URL." });
        if (o.email && !EMAIL_RE.test(o.email)) issues.push({ field: "email", severity: "warn", message: "email format looks off." });
    }

    if (type === "LocalBusiness") {
        const b = state.lb;
        json = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: b.name,
            url: b.url,
            ...(b.image ? { image: b.image } : {}),
            ...(b.description ? { description: b.description } : {}),
            ...(b.telephone ? { telephone: b.telephone } : {}),
            address: {
                "@type": "PostalAddress",
                streetAddress: b.streetAddress,
                addressLocality: b.addressLocality,
                addressRegion: b.addressRegion,
                postalCode: b.postalCode,
                addressCountry: b.addressCountry || "US",
            },
            ...(b.priceRange ? { priceRange: b.priceRange } : {}),
            ...(b.openingHours
                ? {
                      openingHours: b.openingHours
                          .split("\n")
                          .map((s) => s.trim())
                          .filter(Boolean),
                  }
                : {}),
        };
        if (!b.name.trim()) issues.push({ field: "name", severity: "error", message: "LocalBusiness.name is required." });
        if (!URL_RE.test(b.url)) issues.push({ field: "url", severity: "error", message: "url must be a full https URL." });
        if (!b.streetAddress.trim()) issues.push({ field: "streetAddress", severity: "error", message: "Street address is required for LocalBusiness." });
        if (!b.addressLocality.trim()) issues.push({ field: "addressLocality", severity: "error", message: "City is required." });
        if (!b.addressRegion.trim()) issues.push({ field: "addressRegion", severity: "warn", message: "State / region is strongly recommended." });
    }

    if (type === "FAQPage") {
        const f = state.faq;
        const valid = f.items.filter((i) => i.q.trim() && i.a.trim());
        json = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: valid.map((i) => ({
                "@type": "Question",
                name: i.q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: i.a,
                },
            })),
        };
        if (valid.length === 0) issues.push({ field: "mainEntity", severity: "error", message: "Add at least one question + answer pair." });
        if (valid.length < 2) issues.push({ field: "mainEntity", severity: "warn", message: "Google rewards FAQPages with 3+ Q&A pairs more reliably." });
    }

    if (type === "Article") {
        const a = state.article;
        json = {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.headline,
            description: a.description,
            ...(a.image ? { image: a.image } : {}),
            author: {
                "@type": "Person",
                name: a.authorName,
            },
            publisher: {
                "@type": "Organization",
                name: a.publisherName,
                ...(a.publisherLogo
                    ? {
                          logo: {
                              "@type": "ImageObject",
                              url: a.publisherLogo,
                          },
                      }
                    : {}),
            },
            datePublished: a.datePublished,
            ...(a.dateModified ? { dateModified: a.dateModified } : {}),
        };
        if (!a.headline.trim()) issues.push({ field: "headline", severity: "error", message: "Article.headline is required." });
        if (a.headline.length > 110) issues.push({ field: "headline", severity: "warn", message: "Headline > 110 chars may be truncated in Google results." });
        if (!a.authorName.trim()) issues.push({ field: "authorName", severity: "error", message: "Author name is required for Article." });
        if (!a.publisherName.trim()) issues.push({ field: "publisherName", severity: "error", message: "Publisher name is required for Article." });
        if (!ISO_DATE_RE.test(a.datePublished)) issues.push({ field: "datePublished", severity: "error", message: "datePublished must be ISO 8601 (YYYY-MM-DD or full)." });
        if (a.dateModified && !ISO_DATE_RE.test(a.dateModified)) issues.push({ field: "dateModified", severity: "warn", message: "dateModified should be ISO 8601." });
    }

    if (type === "Product") {
        const p = state.product;
        json = {
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            ...(p.image ? { image: p.image } : {}),
            ...(p.sku ? { sku: p.sku } : {}),
            ...(p.brand
                ? {
                      brand: {
                          "@type": "Brand",
                          name: p.brand,
                      },
                  }
                : {}),
            offers: {
                "@type": "Offer",
                price: p.price,
                priceCurrency: p.priceCurrency || "USD",
                availability: p.availability || "https://schema.org/InStock",
            },
            ...(p.ratingValue && p.reviewCount
                ? {
                      aggregateRating: {
                          "@type": "AggregateRating",
                          ratingValue: p.ratingValue,
                          reviewCount: p.reviewCount,
                      },
                  }
                : {}),
        };
        if (!p.name.trim()) issues.push({ field: "name", severity: "error", message: "Product.name is required." });
        if (!p.price.trim()) issues.push({ field: "price", severity: "error", message: "offers.price is required." });
        if (p.price && isNaN(Number(p.price))) issues.push({ field: "price", severity: "warn", message: "price should be a numeric string like \"49.99\"." });
        if (p.image && !URL_RE.test(p.image)) issues.push({ field: "image", severity: "warn", message: "image should be a full URL." });
    }

    return { json, issues };
}

const INITIAL_ORG: OrganizationInput = {
    name: "Acme Inc",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    description: "We make widgets.",
    sameAs: "https://twitter.com/acme\nhttps://linkedin.com/company/acme",
    email: "hello@example.com",
    telephone: "+1-555-0100",
};

const INITIAL_LB: LocalBusinessInput = {
    name: "Acme Café",
    url: "https://example.com",
    image: "https://example.com/storefront.jpg",
    description: "Specialty coffee.",
    telephone: "+1-555-0100",
    streetAddress: "123 Main St",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30303",
    addressCountry: "US",
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-18:00\nSa-Su 08:00-16:00",
};

const INITIAL_FAQ: FAQInput = {
    items: [
        { q: "What is the return policy?", a: "30 days, no questions asked." },
        { q: "Do you ship internationally?", a: "Yes, to 40+ countries." },
    ],
};

const INITIAL_ARTICLE: ArticleInput = {
    headline: "Five lessons from shipping a SaaS",
    description: "What we learned shipping our first SaaS in 90 days.",
    image: "https://example.com/cover.jpg",
    authorName: "Jane Doe",
    publisherName: "Acme Blog",
    publisherLogo: "https://example.com/logo.png",
    datePublished: "2025-01-15",
    dateModified: "2025-01-20",
};

const INITIAL_PRODUCT: ProductInput = {
    name: "Acme Widget Pro",
    description: "Heavy-duty widget for industrial use.",
    image: "https://example.com/widget.jpg",
    sku: "WIDGET-001",
    brand: "Acme",
    price: "49.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    ratingValue: "4.7",
    reviewCount: "127",
};

export function SchemaGenerator() {
    const [type, setType] = useState<SchemaType>("Organization");
    const [org, setOrg] = useState(INITIAL_ORG);
    const [lb, setLb] = useState(INITIAL_LB);
    const [faq, setFaq] = useState(INITIAL_FAQ);
    const [article, setArticle] = useState(INITIAL_ARTICLE);
    const [product, setProduct] = useState(INITIAL_PRODUCT);
    const [copied, setCopied] = useState(false);

    const { json, issues } = useMemo(
        () => build(type, { org, lb, faq, article, product }),
        [type, org, lb, faq, article, product],
    );

    const jsonString = useMemo(() => JSON.stringify(json, null, 2), [json]);
    const scriptString = useMemo(
        () => `<script type="application/ld+json">\n${jsonString}\n</script>`,
        [jsonString],
    );

    async function handleCopy(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    function updateFaqItem(i: number, key: "q" | "a", val: string) {
        setFaq((prev) => ({
            items: prev.items.map((it, idx) => (idx === i ? { ...it, [key]: val } : it)),
        }));
    }

    function addFaqItem() {
        setFaq((prev) => ({ items: [...prev.items, { q: "", a: "" }] }));
    }

    function removeFaqItem(i: number) {
        setFaq((prev) => ({ items: prev.items.filter((_, idx) => idx !== i) }));
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-5">
                    <div>
                        <label
                            htmlFor="schema-type"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Schema type
                        </label>
                        <select
                            id="schema-type"
                            value={type}
                            onChange={(e) => setType(e.target.value as SchemaType)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="Organization">Organization</option>
                            <option value="LocalBusiness">LocalBusiness</option>
                            <option value="FAQPage">FAQPage</option>
                            <option value="Article">Article</option>
                            <option value="Product">Product</option>
                        </select>
                    </div>

                    {type === "Organization" && (
                        <div className="space-y-4">
                            <Field
                                id="o-name"
                                label="Name *"
                                value={org.name}
                                onChange={(v) => setOrg({ ...org, name: v })}
                            />
                            <Field
                                id="o-url"
                                label="URL *"
                                value={org.url}
                                onChange={(v) => setOrg({ ...org, url: v })}
                                placeholder="https://example.com"
                            />
                            <Field
                                id="o-logo"
                                label="Logo URL"
                                value={org.logo}
                                onChange={(v) => setOrg({ ...org, logo: v })}
                            />
                            <TextArea
                                id="o-description"
                                label="Description"
                                value={org.description}
                                onChange={(v) => setOrg({ ...org, description: v })}
                                rows={3}
                            />
                            <Field
                                id="o-email"
                                label="Email"
                                value={org.email}
                                onChange={(v) => setOrg({ ...org, email: v })}
                            />
                            <Field
                                id="o-tel"
                                label="Telephone"
                                value={org.telephone}
                                onChange={(v) => setOrg({ ...org, telephone: v })}
                            />
                            <TextArea
                                id="o-sameas"
                                label="sameAs (one URL per line — social profiles, Wikidata, etc.)"
                                value={org.sameAs}
                                onChange={(v) => setOrg({ ...org, sameAs: v })}
                                rows={3}
                            />
                        </div>
                    )}

                    {type === "LocalBusiness" && (
                        <div className="space-y-4">
                            <Field id="lb-name" label="Name *" value={lb.name} onChange={(v) => setLb({ ...lb, name: v })} />
                            <Field id="lb-url" label="URL *" value={lb.url} onChange={(v) => setLb({ ...lb, url: v })} />
                            <Field id="lb-image" label="Image URL" value={lb.image} onChange={(v) => setLb({ ...lb, image: v })} />
                            <TextArea id="lb-desc" label="Description" value={lb.description} onChange={(v) => setLb({ ...lb, description: v })} rows={3} />
                            <Field id="lb-tel" label="Telephone" value={lb.telephone} onChange={(v) => setLb({ ...lb, telephone: v })} />
                            <Field id="lb-street" label="Street address *" value={lb.streetAddress} onChange={(v) => setLb({ ...lb, streetAddress: v })} />
                            <div className="grid grid-cols-3 gap-3">
                                <Field id="lb-city" label="City *" value={lb.addressLocality} onChange={(v) => setLb({ ...lb, addressLocality: v })} />
                                <Field id="lb-state" label="State/Region" value={lb.addressRegion} onChange={(v) => setLb({ ...lb, addressRegion: v })} />
                                <Field id="lb-zip" label="Postal code" value={lb.postalCode} onChange={(v) => setLb({ ...lb, postalCode: v })} />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <Field id="lb-country" label="Country (ISO)" value={lb.addressCountry} onChange={(v) => setLb({ ...lb, addressCountry: v })} placeholder="US" />
                                <Field id="lb-price" label="Price range" value={lb.priceRange} onChange={(v) => setLb({ ...lb, priceRange: v })} placeholder="$$" />
                            </div>
                            <TextArea id="lb-hours" label="Opening hours (one line per range)" value={lb.openingHours} onChange={(v) => setLb({ ...lb, openingHours: v })} rows={3} />
                        </div>
                    )}

                    {type === "FAQPage" && (
                        <div className="space-y-4">
                            {faq.items.map((item, i) => (
                                <div key={i} className="rounded-lg border border-white/10 bg-[#0d1526] p-4 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs uppercase tracking-widest text-gray-500">
                                            Q&A #{i + 1}
                                        </p>
                                        {faq.items.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeFaqItem(i)}
                                                className="text-xs text-rose-400 hover:text-rose-300"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <Field
                                        id={`faq-q-${i}`}
                                        label="Question"
                                        value={item.q}
                                        onChange={(v) => updateFaqItem(i, "q", v)}
                                    />
                                    <TextArea
                                        id={`faq-a-${i}`}
                                        label="Answer"
                                        value={item.a}
                                        onChange={(v) => updateFaqItem(i, "a", v)}
                                        rows={3}
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addFaqItem}
                                className="text-sm text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                            >
                                + Add another question
                            </button>
                        </div>
                    )}

                    {type === "Article" && (
                        <div className="space-y-4">
                            <Field id="a-headline" label="Headline *" value={article.headline} onChange={(v) => setArticle({ ...article, headline: v })} />
                            <TextArea id="a-desc" label="Description" value={article.description} onChange={(v) => setArticle({ ...article, description: v })} rows={3} />
                            <Field id="a-image" label="Image URL" value={article.image} onChange={(v) => setArticle({ ...article, image: v })} />
                            <Field id="a-author" label="Author name *" value={article.authorName} onChange={(v) => setArticle({ ...article, authorName: v })} />
                            <Field id="a-publisher" label="Publisher name *" value={article.publisherName} onChange={(v) => setArticle({ ...article, publisherName: v })} />
                            <Field id="a-pub-logo" label="Publisher logo URL" value={article.publisherLogo} onChange={(v) => setArticle({ ...article, publisherLogo: v })} />
                            <div className="grid grid-cols-2 gap-3">
                                <Field id="a-pub-date" label="Date published * (YYYY-MM-DD)" value={article.datePublished} onChange={(v) => setArticle({ ...article, datePublished: v })} />
                                <Field id="a-mod-date" label="Date modified" value={article.dateModified} onChange={(v) => setArticle({ ...article, dateModified: v })} />
                            </div>
                        </div>
                    )}

                    {type === "Product" && (
                        <div className="space-y-4">
                            <Field id="p-name" label="Name *" value={product.name} onChange={(v) => setProduct({ ...product, name: v })} />
                            <TextArea id="p-desc" label="Description" value={product.description} onChange={(v) => setProduct({ ...product, description: v })} rows={3} />
                            <Field id="p-image" label="Image URL" value={product.image} onChange={(v) => setProduct({ ...product, image: v })} />
                            <div className="grid grid-cols-2 gap-3">
                                <Field id="p-sku" label="SKU" value={product.sku} onChange={(v) => setProduct({ ...product, sku: v })} />
                                <Field id="p-brand" label="Brand" value={product.brand} onChange={(v) => setProduct({ ...product, brand: v })} />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <Field id="p-price" label="Price *" value={product.price} onChange={(v) => setProduct({ ...product, price: v })} placeholder="49.99" />
                                <Field id="p-currency" label="Currency" value={product.priceCurrency} onChange={(v) => setProduct({ ...product, priceCurrency: v })} placeholder="USD" />
                                <div>
                                    <label htmlFor="p-avail" className="block text-xs font-medium text-gray-400 mb-1.5">
                                        Availability
                                    </label>
                                    <select
                                        id="p-avail"
                                        value={product.availability}
                                        onChange={(e) => setProduct({ ...product, availability: e.target.value })}
                                        className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none"
                                    >
                                        <option value="https://schema.org/InStock">InStock</option>
                                        <option value="https://schema.org/OutOfStock">OutOfStock</option>
                                        <option value="https://schema.org/PreOrder">PreOrder</option>
                                        <option value="https://schema.org/Discontinued">Discontinued</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <Field id="p-rating" label="Aggregate rating (1–5)" value={product.ratingValue} onChange={(v) => setProduct({ ...product, ratingValue: v })} />
                                <Field id="p-reviews" label="Review count" value={product.reviewCount} onChange={(v) => setProduct({ ...product, reviewCount: v })} />
                            </div>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                    <FileJson className="w-3.5 h-3.5" /> Generated JSON-LD
                                </p>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(jsonString)}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                                >
                                    <Copy className="w-3 h-3" /> {copied ? "Copied" : "Copy JSON"}
                                </button>
                            </div>
                            <pre className="font-mono text-xs text-gray-200 leading-relaxed whitespace-pre-wrap break-all max-h-96 overflow-y-auto">
                                {jsonString}
                            </pre>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
                                    <Code2 className="w-3.5 h-3.5" /> Drop-in &lt;script&gt; tag
                                </p>
                                <Button
                                    type="button"
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleCopy(scriptString)}
                                    className="px-3"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? "Copied" : "Copy"}
                                </Button>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Paste inside the &lt;head&gt; or before &lt;/body&gt;. Google ignores
                                placement — search engines scan the whole HTML.
                            </p>
                        </div>

                        {issues.length > 0 ? (
                            <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                    <p className="text-sm font-semibold text-white">
                                        {issues.filter((i) => i.severity === "error").length} error(s),{" "}
                                        {issues.filter((i) => i.severity === "warn").length} warning(s)
                                    </p>
                                </div>
                                <ul className="space-y-2">
                                    {issues.map((i, idx) => (
                                        <li key={idx} className="text-xs leading-relaxed">
                                            <span
                                                className={
                                                    i.severity === "error"
                                                        ? "text-rose-400 font-semibold"
                                                        : "text-amber-300 font-semibold"
                                                }
                                            >
                                                {i.severity === "error" ? "Error" : "Warn"}
                                            </span>{" "}
                                            <span className="text-gray-400">
                                                ({i.field}): {i.message}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <Check className="w-4 h-4 text-emerald-400" />
                                    <p className="text-sm font-semibold text-white">
                                        All required fields present
                                    </p>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Run it through Google&apos;s Rich Results Test for the final
                                    word before pushing.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Field({
    id,
    label,
    value,
    onChange,
    placeholder,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-medium text-gray-400 mb-1.5">
                {label}
            </label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
            />
        </div>
    );
}

function TextArea({
    id,
    label,
    value,
    onChange,
    rows = 3,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    rows?: number;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-xs font-medium text-gray-400 mb-1.5">
                {label}
            </label>
            <textarea
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
            />
        </div>
    );
}
