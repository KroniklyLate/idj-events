import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { pageSeo, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPriority: Record<keyof typeof pageSeo, number> = {
    home: 1,
    packages: 0.9,
    services: 0.9,
    calendar: 0.8,
    contact: 0.8,
    about: 0.7,
    blog: 0.7,
  };

  const staticEntries: MetadataRoute.Sitemap = (
    Object.keys(pageSeo) as (keyof typeof pageSeo)[]
  ).map((key) => ({
    url: `${siteConfig.siteUrl}${pageSeo[key].path}`,
    changeFrequency:
      key === "blog" || key === "calendar" ? "weekly" : "monthly",
    priority: staticPriority[key],
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
