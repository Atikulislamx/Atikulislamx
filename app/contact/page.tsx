import { Section } from "@/components/site/section";
import { JsonLd } from "@/components/ui/json-ld";
import { socialLinks } from "@/data/social-links";
import { pageMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { globalFaqs } from "@/data/faqs";

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqSchema(globalFaqs)} />
      <Section
        title="Let's Connect"
        description="Whether you need consultation, guidance, or have a project inquiry, I'm here to help."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <h2 className="text-xl font-semibold text-white">Contact Methods</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a className="hover:text-cyan-300" href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#151515] p-6">
            <h2 className="text-xl font-semibold text-white">Send a Message</h2>
            <form className="mt-4 space-y-4" action="#" method="post">
              <label className="block text-sm text-zinc-300">
                Full Name
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f0f0f] px-4 py-3" name="name" required />
              </label>
              <label className="block text-sm text-zinc-300">
                Email
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f0f0f] px-4 py-3" type="email" name="email" required />
              </label>
              <label className="block text-sm text-zinc-300">
                Subject
                <input className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f0f0f] px-4 py-3" name="subject" required />
              </label>
              <label className="block text-sm text-zinc-300">
                Message
                <textarea className="mt-2 min-h-32 w-full rounded-xl border border-white/15 bg-[#0f0f0f] px-4 py-3" name="message" required />
              </label>
              <label className="flex items-center gap-2 text-xs text-zinc-400">
                <input type="checkbox" required /> I agree to be contacted regarding this inquiry.
              </label>
              <button className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white" type="submit">
                Send Message
              </button>
            </form>
          </article>
        </div>
      </Section>
    </>
  );
}
