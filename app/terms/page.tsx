import { Section } from "@/components/site/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata.terms;

export default function TermsPage() {
  return (
    <Section title="Terms of Service" description="Professional terms for consultation and guidance services.">
      <div className="space-y-4 text-zinc-300">
        <p>
          Services are provided as professional guidance and consultation. Platform decisions remain under the authority of Meta or other providers.
        </p>
        <p>
          No service guarantees account recovery, verification approval, or specific outcomes.
        </p>
        <p>
          Clients are responsible for the accuracy of provided information and implementation of recommended actions.
        </p>
        <p>
          By using this website and services, you agree to professional communication standards and lawful use of provided guidance.
        </p>
      </div>
    </Section>
  );
}
