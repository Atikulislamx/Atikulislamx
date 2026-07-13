import Link from "next/link";

import { mainNavigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="font-semibold tracking-wide text-white">
          Atikul Islam Rabbi
        </Link>
        <ul className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link className="transition hover:text-cyan-300" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/consultation"
          className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-blue-400"
        >
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}
