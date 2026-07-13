import { BlogCard } from "@/components/site/cards";
import { Section } from "@/components/site/section";
import { blogPosts } from "@/data/blog-posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.blog;

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  return (
    <>
      <Section
        title="Insights & Articles"
        description="SEO-friendly educational articles about social media security, recovery, and digital best practices."
      >
        <article className="rounded-3xl border border-blue-400/30 bg-gradient-to-r from-blue-600/20 to-cyan-500/10 p-8">
          <p className="text-xs uppercase tracking-wide text-cyan-300">Featured Article</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{featured.title}</h2>
          <p className="mt-3 max-w-3xl text-zinc-200">{featured.description}</p>
          <p className="mt-4 text-sm text-zinc-400">
            {featured.category} • {featured.readingTime}
          </p>
        </article>
      </Section>

      <Section title="Latest Articles">
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section title="Categories">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/20 bg-[#151515] px-4 py-2 text-sm text-zinc-200"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
