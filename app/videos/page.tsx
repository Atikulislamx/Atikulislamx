import { Section } from "@/components/site/section";

const videos = [
  "Facebook Security Basics",
  "Instagram Account Protection",
  "Meta Business Manager Overview",
  "Digital Security Best Practices",
  "Consultation Walkthrough",
];

export default function VideosPage() {
  return (
    <Section title="Videos" description="Educational video library with privacy-first presentation.">
      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video} className="rounded-2xl border border-white/10 bg-[#151515] p-5">
            <h3 className="font-semibold text-white">{video}</h3>
            <p className="mt-2 text-sm text-zinc-300">Video content placeholder for future YouTube integration.</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
