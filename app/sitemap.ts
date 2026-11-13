import type { MetadataRoute } from "next";
import { pages } from "@/lib/facts";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({ url: page.url }));
}
