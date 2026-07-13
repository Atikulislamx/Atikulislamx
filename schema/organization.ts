import { SITE_URL } from "@/lib/constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cyber Infinity",
    url: SITE_URL,
    founder: "Atikul Islam Rabbi",
    description:
      "Professional digital security consultancy focused on social media security and account protection guidance.",
  };
}
