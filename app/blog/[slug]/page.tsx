import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { blogPosts } from "@/data/blog-posts";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, faqSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      description: "The requested article was not found.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      {post.faq ? <JsonLd data={faqSchema(post.faq)} /> : null}
      <Section title={post.title} description={post.description}>
        <p className="text-sm text-zinc-500">
          {post.publishedAt} • {post.readingTime} • {post.category}
        </p>
        <div className="mt-8 space-y-5 text-zinc-300">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title="Related Topics">
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200">
              {tag}
            </span>
          ))}
        </div>
      </Section>

      {post.faq ? (
        <Section title="FAQ">
          <div className="space-y-4">
            {post.faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
                <h3 className="font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
