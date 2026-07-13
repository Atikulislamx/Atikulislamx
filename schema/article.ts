import type { BlogPost } from "@/types/blog";
import { SITE_URL } from "@/lib/constants";

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Atikul Islam Rabbi",
    },
    publisher: {
      "@type": "Person",
      name: "Atikul Islam Rabbi",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
