import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/data/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/resources",
    "/blog",
    "/videos",
    "/consultation",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const pages = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
