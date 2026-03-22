import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const paths = [
  "/",
  "/about",
  "/services",
  "/service-areas",
  "/testimonials",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
