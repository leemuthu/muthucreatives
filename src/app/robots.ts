import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI answer-engine crawlers we explicitly welcome. Listing each one gives an
// unambiguous opt-in signal (Google-Extended in particular controls whether
// Google may use the content for its AI products).
const aiCrawlers = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
