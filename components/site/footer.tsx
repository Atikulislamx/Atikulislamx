import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Atikul Islam Rabbi</h2>
          <p className="text-sm text-zinc-400">
            Professional consultation for social media security, digital asset
            management, and Meta Business guidance.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-200">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {footerNavigation.quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-200">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {footerNavigation.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-200">
            Connect
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {socialLinks.slice(0, 5).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-cyan-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-zinc-500">
        © 2026 Atikul Islam Rabbi. All rights reserved. No guaranteed outcomes.
      </div>
    </footer>
  );
}
