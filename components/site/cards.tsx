import Link from "next/link";

import type { BlogPost, ResourceItem } from "@/types/blog";
import type { CaseStudy } from "@/types/portfolio";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#151515] p-6 transition hover:border-blue-400/60">
      <p className="text-xs uppercase tracking-wide text-blue-300">{service.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm text-zinc-300">{service.summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-400">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <Link
          href="/services"
          className="rounded-xl border border-white/15 px-3 py-2 text-xs text-zinc-200 hover:border-blue-400"
        >
          Learn More
        </Link>
        <Link
          href="/consultation"
          className="rounded-xl bg-blue-500 px-3 py-2 text-xs font-medium text-white"
        >
          Book Consultation
        </Link>
      </div>
    </article>
  );
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#151515] p-6">
      <p className="text-xs uppercase tracking-wide text-cyan-300">{study.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
      <div className="mt-4 space-y-3 text-sm text-zinc-300">
        <p>
          <span className="text-zinc-100">Problem:</span> {study.challenge}
        </p>
        <p>
          <span className="text-zinc-100">Solution:</span> {study.solution}
        </p>
        <p>
          <span className="text-zinc-100">Result:</span> {study.result}
        </p>
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#151515] p-6">
      <p className="text-xs uppercase tracking-wide text-blue-300">{post.category}</p>
      <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 text-sm text-zinc-300">{post.description}</p>
      <p className="mt-4 text-xs text-zinc-500">
        {post.readingTime} • {post.publishedAt}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex rounded-xl border border-white/15 px-3 py-2 text-xs text-zinc-200 hover:border-blue-400"
      >
        Read Article
      </Link>
    </article>
  );
}

export function ResourceCard({ resource }: { resource: ResourceItem }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#151515] p-6">
      <p className="text-xs uppercase tracking-wide text-emerald-300">{resource.category}</p>
      <h3 className="mt-2 text-lg font-semibold text-white">{resource.title}</h3>
      <p className="mt-3 text-sm text-zinc-300">{resource.summary}</p>
      <p className="mt-4 text-xs text-zinc-500">
        {resource.level} • {resource.readingTime}
      </p>
      <button className="mt-5 rounded-xl bg-blue-500 px-3 py-2 text-xs font-medium text-white">
        Read Guide
      </button>
    </article>
  );
}
