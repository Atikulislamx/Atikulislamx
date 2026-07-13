import { ResourceCard } from "@/components/site/cards";
import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { globalFaqs } from "@/data/faqs";
import { resources } from "@/data/resources";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata.resources;

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Section
        title="Resources"
        description="Guides, FAQs, practical documents, and helpful materials for digital safety and account management."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="space-y-4">
          {globalFaqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
