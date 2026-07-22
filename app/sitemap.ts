import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elitesourcepoint.com",
      lastModified: new Date(),
    },
    {
      url: "https://elitesourcepoint.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://elitesourcepoint.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://elitesourcepoint.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://elitesourcepoint.com/privacy",
      lastModified: new Date(),
    },
  ];
}