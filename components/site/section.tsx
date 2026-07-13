import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 md:px-6", className)}>
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-zinc-300">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
