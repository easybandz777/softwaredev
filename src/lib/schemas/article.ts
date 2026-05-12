import { ORGANIZATION_ID, PERSON_ID, SITE_URL } from "./organization";

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string | string[];
  author?: { name: string; url?: string } | { "@id": string };
  slug: string;
  section?: string;
  keywords?: string[];
};

export function articleSchema(input: ArticleSchemaInput) {
  const url = `${SITE_URL}/blog/${input.slug}`;
  const id = `${url}#article`;

  const author = input.author
    ? "@id" in input.author
      ? input.author
      : {
          "@type": "Person",
          name: input.author.name,
          ...(input.author.url ? { url: input.author.url } : {}),
        }
    : { "@id": PERSON_ID };

  const imageValue = Array.isArray(input.image)
    ? input.image
    : input.image
      ? [input.image]
      : [`${SITE_URL}/og-image.png`];

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": id,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    image: imageValue,
    author,
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-US",
    ...(input.section ? { articleSection: input.section } : {}),
    ...(input.keywords && input.keywords.length ? { keywords: input.keywords.join(", ") } : {}),
  };
}
