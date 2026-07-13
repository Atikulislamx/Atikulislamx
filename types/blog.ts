export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featured?: boolean;
  tags: string[];
  content: string[];
  faq?: Array<{ question: string; answer: string }>;
}

export interface ResourceItem {
  slug: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  readingTime: string;
  summary: string;
}
