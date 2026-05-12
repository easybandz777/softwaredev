import { SITE_URL } from "./organization";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbSchema(items: ReadonlyArray<BreadcrumbItem>, idSuffix?: string) {
  const id = idSuffix ? `${SITE_URL}${idSuffix.startsWith("/") ? "" : "/"}${idSuffix}#breadcrumb` : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url.startsWith("/") ? "" : "/"}${item.url}`,
    })),
  };
}
