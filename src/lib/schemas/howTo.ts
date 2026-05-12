export type HowToStep = {
  name: string;
  text: string;
  url?: string;
  image?: string;
};

export type HowToSchemaInput = {
  name: string;
  description: string;
  steps: ReadonlyArray<HowToStep>;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
  image?: string;
  id?: string;
};

export function howToSchema(input: HowToSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    ...(input.id ? { "@id": input.id } : {}),
    name: input.name,
    description: input.description,
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    ...(input.estimatedCost
      ? {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: input.estimatedCost.currency,
            value: input.estimatedCost.value,
          },
        }
      : {}),
    ...(input.image ? { image: input.image } : {}),
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}
