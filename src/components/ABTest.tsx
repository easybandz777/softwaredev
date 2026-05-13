"use client";

import { useEffect, useState, type ReactNode } from "react";
import { getVariant } from "@/lib/ab";

interface Props {
  experiment: string;
  variants?: string[];
  fallback?: ReactNode;
  children: (variant: string) => ReactNode;
}

export function ABTest({ experiment, variants, fallback, children }: Props) {
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    const v = getVariant(experiment);
    if (variants && variants.length > 0 && !variants.includes(v)) {
      setVariant(variants[0]);
    } else {
      setVariant(v);
    }
  }, [experiment, variants]);

  if (variant === null) {
    return <>{fallback ?? null}</>;
  }
  return <>{children(variant)}</>;
}
