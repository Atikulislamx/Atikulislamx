import { PROFESSIONAL_TITLE, SITE_URL } from "@/lib/constants";
import { socialLinks } from "@/data/social-links";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Atikul Islam Rabbi",
    jobTitle: PROFESSIONAL_TITLE,
    description:
      "Independent professional providing consultation on social media security and digital asset management.",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-portrait.svg`,
    nationality: "Bangladeshi",
    knowsAbout: [
      "Social Media Security",
      "Facebook Guidance",
      "Meta Business Manager",
      "Digital Asset Protection",
    ],
    sameAs: socialLinks.map((item) => item.href),
  };
}
