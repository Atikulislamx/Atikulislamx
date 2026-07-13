import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">Oops... This page doesn&apos;t exist.</h1>
      <p className="mt-4 text-zinc-300">The page may have moved or the URL may be incorrect.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          Go Home
        </Link>
        <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-zinc-100">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
