import { MetadataRoute } from "next";

const SITE_URL = "https://scarletflash.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/#services`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#process`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
