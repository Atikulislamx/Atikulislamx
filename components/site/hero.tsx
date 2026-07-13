import Image from "next/image";
import Link from "next/link";

import { socialLinks } from "@/data/social-links";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,#173a63_0%,#0d0d0d_40%,#090909_100%)]">
      <div className="mx-auto grid min-h-[88vh] w-full max-w-6xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Official Website</p>
          <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">ATIKUL ISLAM RABBI</h1>
          <p className="mt-4 text-xl text-zinc-200">Social Media Security Specialist</p>
          <p className="mt-6 max-w-xl text-zinc-300">
            Helping individuals, creators, and businesses recover, secure, and protect their digital assets through professional consultation and security-focused guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/consultation"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-blue-400"
            >
              Book a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100 transition hover:border-blue-400"
            >
              Explore My Work
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
            {socialLinks.slice(0, 5).map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <Image
            src="/images/hero-portrait.svg"
            alt="Professional portrait illustration for Atikul Islam Rabbi"
            width={640}
            height={640}
            priority
            className="rounded-3xl border border-white/20 bg-[#111] p-4 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
