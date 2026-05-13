import { ORGANIZATION_ID, SITE_URL } from "./organization";

export type VideoObjectSchemaInput = {
  name: string;
  description: string;
  thumbnailUrl: string | string[];
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string;
  transcript?: string;
  id?: string;
  url?: string;
  inLanguage?: string;
  keywords?: string[];
  isFamilyFriendly?: boolean;
  interactionCount?: number;
};

export function videoObjectSchema(input: VideoObjectSchemaInput) {
  const thumb = Array.isArray(input.thumbnailUrl)
    ? input.thumbnailUrl
    : [input.thumbnailUrl];

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    ...(input.id ? { "@id": input.id } : {}),
    name: input.name,
    description: input.description,
    thumbnailUrl: thumb,
    uploadDate: input.uploadDate,
    ...(input.contentUrl ? { contentUrl: input.contentUrl } : {}),
    ...(input.embedUrl ? { embedUrl: input.embedUrl } : {}),
    ...(input.duration ? { duration: input.duration } : {}),
    ...(input.transcript ? { transcript: input.transcript } : {}),
    ...(input.url ? { url: input.url } : {}),
    inLanguage: input.inLanguage ?? "en-US",
    isFamilyFriendly: input.isFamilyFriendly ?? true,
    publisher: { "@id": ORGANIZATION_ID },
    creator: { "@id": ORGANIZATION_ID },
    ...(input.keywords && input.keywords.length
      ? { keywords: input.keywords.join(", ") }
      : {}),
    ...(typeof input.interactionCount === "number"
      ? {
          interactionStatistic: {
            "@type": "InteractionCounter",
            interactionType: { "@type": "WatchAction" },
            userInteractionCount: input.interactionCount,
          },
        }
      : {}),
    potentialAction: {
      "@type": "SeekToAction",
      target: `${SITE_URL}?t={seek_to_second_number}`,
      "startOffset-input": "required name=seek_to_second_number",
    },
  };
}
