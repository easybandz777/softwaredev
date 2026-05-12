import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = [
    "/admin",
    "/sales",
    "/print",
    "/api",
    "/training",
    "/search",
  ];

  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "Diffbot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
  ];

  const blockedScrapers = [
    "AhrefsBot",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "BLEXBot",
    "PetalBot",
    "DataForSeoBot",
    "serpstatbot",
    "MegaIndex",
    "BacklinkCrawler",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowPaths,
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: disallowPaths,
      })),
      ...blockedScrapers.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: "https://quantlabusa.dev/sitemap.xml",
    host: "https://quantlabusa.dev",
  };
}
