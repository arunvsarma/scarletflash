import { MetadataRoute } from "next";

const SITE_URL = "https://scarletflash.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      /* ── Standard search crawlers ─────────────────────────────────── */
      {
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Slurp"],
        allow: "/",
      },

      /* ── AI search & answer engines (allow for AIEO discoverability) ─ */
      {
        // OpenAI GPT crawler
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // OpenAI SearchGPT / web search
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // ChatGPT browsing plugin
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        // Anthropic Claude
        userAgent: ["anthropic-ai", "ClaudeBot"],
        allow: "/",
      },
      {
        // Perplexity
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Cohere
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        // You.com
        userAgent: "YouBot",
        allow: "/",
      },
      {
        // Meta AI / Llama
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        // Apple Intelligence / Siri
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      {
        // Amazon Alexa / Rufus AI
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        // Diffbot (knowledge graph)
        userAgent: "Diffbot",
        allow: "/",
      },

      /* ── AI training-only crawlers (disallow — not search-oriented) ── */
      {
        // Common Crawl (primarily bulk training datasets)
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        // ByteDance / TikTok (training scraper)
        userAgent: "Bytespider",
        disallow: "/",
      },

      /* ── Google AI training (separate from search indexing) ─────────── */
      {
        // Google-Extended controls Gemini/Vertex AI training
        userAgent: "Google-Extended",
        allow: "/",
      },

      /* ── Fallback: all other bots ────────────────────────────────── */
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
