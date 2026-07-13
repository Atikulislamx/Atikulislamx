import Link from "next/link";

import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata.about;

const timeline = [
  { title: "Early Interest", details: "Developed a strong focus on technology, online identity, and platform systems." },
  { title: "Learning Technology", details: "Built practical knowledge through continuous study and hands-on problem-solving." },
  { title: "Helping First Clients", details: "Started supporting real account and security challenges with structured guidance." },
  { title: "Building Professional Experience", details: "Expanded into business asset, Meta platform, and digital security consultation work." },
  { title: "Creating Personal Brand", details: "Focused on trust-based communication and transparent professional standards." },
  { title: "Official Website", details: "Established a premium digital headquarters for services, resources, and consultation." },
];

const values = ["Professionalism", "Integrity", "Privacy", "Continuous Learning"];
const skills = [
  "Social Media Security",
  "Account Recovery Strategy",
  "Business Manager Governance",
  "Digital Security Consulting",
  "Technical Research",
  "Client Communication",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <Section
        title="About Me"
        description="Learn about my background, values, and approach to helping individuals and businesses protect digital assets."
      >
        <p className="max-w-4xl text-zinc-300">
          I&apos;m Atikul Islam Rabbi, a Social Media Security Specialist dedicated to clear communication, realistic expectations, and ethical consultation.
        </p>
      </Section>

      <Section title="Professional Story" description="A timeline of growth, specialization, and trust-based work.">
        <ol className="space-y-4">
          {timeline.map((item) => (
            <li key={item.title} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.details}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Core Values">
        <div className="grid gap-4 md:grid-cols-4">
          {values.map((value) => (
            <article key={value} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="text-lg font-semibold text-white">{value}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Skills, Experience, and Achievements">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <article key={skill} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h3 className="text-sm font-semibold text-zinc-100">{skill}</h3>
              <p className="mt-2 text-xs text-zinc-400">Professional Experience Badge</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Ready to discuss your issue?">
        <Link href="/consultation" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Book Consultation
        </Link>
      </Section>
    </>
  );
}
