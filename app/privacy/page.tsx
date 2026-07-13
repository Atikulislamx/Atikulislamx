import { Section } from "@/components/site/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.privacy;

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" description="Last updated: July 2026">
      <div className="space-y-4 text-zinc-300">
        <p>
          This website collects only necessary information for inquiries and consultation communication.
        </p>
        <p>
          Data may include your name, email address, message details, and website analytics information used to improve website performance.
        </p>
        <p>
          Information is never sold. Third-party services may process data for analytics, hosting, or communication.
        </p>
        <p>
          You may request updates or deletion of submitted contact data where applicable.
        </p>
      </div>
    </Section>
  );
}
