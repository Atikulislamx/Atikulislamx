import Link from "next/link";

import { CaseStudyCard } from "@/components/site/cards";
import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { caseStudies } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata.portfolio;

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ])
        }
      />
      <Section
        title="Portfolio & Case Studies"
        description="Selected projects presented with problem → solution → result while protecting confidentiality."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <Section title="Professional Presentation Standards">
        <ul className="space-y-2 text-zinc-300">
          <li>• No confidential information exposed</li>
          <li>• No fabricated statistics or outcomes</li>
          <li>• Transparent process and realistic result framing</li>
          <li>• Platform decisions remain under platform authority</li>
        </ul>
      </Section>

      <Section title="Interested in Working Together?">
        <div className="flex flex-wrap gap-4">
          <Link href="/consultation" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
            Book a Consultation
          </Link>
          <Link href="/services" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100">
            View My Services
          </Link>
        </div>
      </Section>
    </>
  );
}
