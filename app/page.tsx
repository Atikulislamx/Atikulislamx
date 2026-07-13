import Link from "next/link";

import { CaseStudyCard, BlogCard, ServiceCard } from "@/components/site/cards";
import { HomeHero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { blogPosts } from "@/data/blog-posts";
import { caseStudies } from "@/data/case-studies";
import { globalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata = pageMetadata.home;

const trustIndicators = [
  {
    title: "Professional Consultation",
    description: "Structured guidance based on analysis and platform-aligned practices.",
  },
  { title: "Privacy First", description: "Client confidentiality and responsible handling of information." },
  { title: "Remote Worldwide", description: "Online professional consultation for global clients." },
  { title: "Security Focused", description: "Recommendations designed for long-term protection." },
  { title: "Transparent Communication", description: "Clear expectations with no exaggerated claims." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(globalFaqs)} />
      <HomeHero />

      <Section
        title="Built on Trust, Transparency, and Professionalism"
        description="A premium security-first approach for individuals, creators, and businesses."
      >
        <div className="grid gap-4 md:grid-cols-5">
          {trustIndicators.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Who I Am" description="Social media security specialist focused on ethical and transparent guidance.">
        <p className="max-w-4xl text-zinc-300">
          I&apos;m Atikul Islam Rabbi, helping individuals and businesses understand complex account issues, plan professional recovery actions, and improve long-term digital security.
        </p>
        <Link href="/about" className="mt-6 inline-flex rounded-xl bg-blue-500 px-4 py-2 text-sm text-white">
          Learn More About Me
        </Link>
      </Section>

      <Section title="Professional Services" description="Six focused services designed for practical outcomes and long-term security.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section title="Selected Case Studies" description="Real projects presented with privacy-first problem-solution-result structure.">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <Section title="Client Feedback" description="Genuine experience-focused feedback presented professionally.">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.project} className="rounded-2xl border border-white/10 bg-[#151515] p-6">
              <p className="text-sm text-zinc-200">“{item.quote}”</p>
              <p className="mt-4 text-xs text-zinc-500">
                {item.name} • {item.project}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Latest Articles" description="Educational content built for SEO and AI-search discoverability.">
        <div className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section title="Need Professional Guidance?" description="Book a consultation to discuss your issue and define practical next steps.">
        <div className="rounded-3xl border border-blue-400/30 bg-gradient-to-r from-blue-600/25 to-cyan-500/10 p-8">
          <p className="max-w-3xl text-zinc-200">
            Every situation is different. A consultation helps analyze your case, discuss possible options, and prioritize a security-first action plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/consultation" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
              Schedule Consultation
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100">
              Send a Message
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
