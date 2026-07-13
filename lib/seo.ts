import { seoPages } from "@/data/seo";
import { buildMetadata } from "@/lib/metadata";

export const pageMetadata = {
  home: buildMetadata(seoPages.home),
  about: buildMetadata(seoPages.about),
  services: buildMetadata(seoPages.services),
  portfolio: buildMetadata(seoPages.portfolio),
  blog: buildMetadata(seoPages.blog),
  resources: buildMetadata(seoPages.resources),
  consultation: buildMetadata(seoPages.consultation),
  contact: buildMetadata(seoPages.contact),
  privacy: buildMetadata(seoPages.privacy),
  terms: buildMetadata(seoPages.terms),
};
