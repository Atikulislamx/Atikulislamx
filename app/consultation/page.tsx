import Link from "next/link";

import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { globalFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMetadata.consultation;

const includes = [
  "Professional Analysis",
  "Issue Diagnosis",
  "Recovery Strategy",
  "Security Recommendations",
  "Platform Guidance",
  "Questions & Answers",
  "Meeting Summary",
];

const checklist = [
  "Prepare screenshots",
  "Gather account information",
  "Collect previous appeal responses",
  "Write key questions",
  "Ensure stable internet connection",
];

export default function ConsultationPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Section
        title="Book a Professional Consultation"
        description="Get personalized guidance for Facebook, Instagram, Meta Business Manager, and digital security issues."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
            Book Consultation
          </Link>
          <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100">
            Send Message
          </Link>
        </div>
      </Section>

      <Section title="Consultation Includes">
        <div className="grid gap-4 md:grid-cols-3">
          {includes.map((item) => (
            <article key={item} className="rounded-2xl border border-white/10 bg-[#151515] p-5 text-sm text-zinc-300">
              {item}
            </article>
          ))}
        </div>
      </Section>

      <Section title="Meeting Information">
        <ul className="space-y-2 text-zinc-300">
          <li>• Platforms: Google Meet, Zoom, Microsoft Teams</li>
          <li>• Standard duration: 30 minutes</li>
          <li>• Remote consultation: Worldwide</li>
          <li>• Timezone-aligned scheduling support</li>
        </ul>
      </Section>

      <Section title="Before the Meeting">
        <ul className="space-y-2 text-zinc-300">
          {checklist.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Important Notice">
        <p className="max-w-4xl text-zinc-300">
          Consultation provides professional guidance based on available information. No consultation guarantees account recovery, verification approval, or specific outcomes.
        </p>
      </Section>
    </>
  );
}
