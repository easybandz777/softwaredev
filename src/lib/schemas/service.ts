import { AREA_SERVED_CITIES, ORGANIZATION_ID, SITE_URL } from "./organization";

type CityRef = { name: string; state?: string };

export type ServiceOffer = {
  priceCurrency?: string;
  price?: string;
  priceDescription?: string;
  availability?: string;
  url?: string;
};

export type ServiceSchemaInput = {
  name: string;
  description: string;
  slug?: string;
  url?: string;
  serviceType?: string;
  category?: string;
  areaServed?: ReadonlyArray<CityRef>;
  offers?: ServiceOffer;
  image?: string;
};

export function serviceSchema(input: ServiceSchemaInput) {
  const url = input.url ?? (input.slug ? `${SITE_URL}/services/${input.slug}` : undefined);
  const id = url ? `${url}#service` : undefined;
  const cities = input.areaServed ?? AREA_SERVED_CITIES;

  const offer = input.offers ?? {};

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    ...(id ? { "@id": id } : {}),
    name: input.name,
    ...(input.serviceType ? { serviceType: input.serviceType } : {}),
    description: input.description,
    ...(url ? { url } : {}),
    provider: { "@id": ORGANIZATION_ID },
    ...(input.category ? { category: input.category } : {}),
    ...(input.image ? { image: input.image } : {}),
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
      ...(c.state ? { containedInPlace: { "@type": "State", name: c.state } } : {}),
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: offer.priceCurrency ?? "USD",
      ...(offer.price ? { price: offer.price } : { price: "0" }),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: offer.priceCurrency ?? "USD",
        description: offer.priceDescription ?? "Contact for quote",
      },
      availability: offer.availability ?? "https://schema.org/InStock",
      url: offer.url ?? `${SITE_URL}/contact`,
    },
  };
}
