import Link from "next/link";

import { ServiceCard } from "@/components/site/cards";
import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { globalFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata = pageMetadata.services;

const process = [
  "Initial Discussion",
  "Problem Analysis",
  "Recovery Strategy",
  "Implementation Guidance",
  "Review & Next Steps",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema()} />
      <JsonLd data={faqSchema(globalFaqs)} />
      <Section
        title="Professional Services"
        description="Helping individuals and businesses recover, secure, and manage digital assets responsibly."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section title="Service Process Timeline">
        <ol className="grid gap-4 md:grid-cols-5">
          {process.map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/10 bg-[#151515] p-5 text-sm text-zinc-300">
              <p className="text-xs text-blue-300">Step {index + 1}</p>
              <h3 className="mt-2 font-semibold text-white">{step}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Frequently Asked Questions">
        <div className="space-y-4">
          {globalFaqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-sm text-zinc-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Need Professional Guidance?">
        <div className="flex flex-wrap gap-4">
          <Link href="/consultation" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
            Book a Consultation
          </Link>
          <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100">
            Contact Me
          </Link>
        </div>
      </Section>
    </>
  );
}
