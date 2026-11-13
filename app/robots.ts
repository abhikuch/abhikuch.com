import type { MetadataRoute } from "next";

const allow = { allow: "/" } as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allow },
      { userAgent: "GPTBot", ...allow },
      { userAgent: "ChatGPT-User", ...allow },
      { userAgent: "ClaudeBot", ...allow },
      { userAgent: "anthropic-ai", ...allow },
      { userAgent: "PerplexityBot", ...allow },
      { userAgent: "Google-Extended", ...allow },
    ],
    host: "https://abhikuch.com",
    sitemap: "https://abhikuch.com/sitemap.xml",
  };
}
