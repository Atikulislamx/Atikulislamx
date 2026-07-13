import { services } from "@/data/services";

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.summary,
      serviceType: service.category,
      provider: {
        "@type": "Person",
        name: "Atikul Islam Rabbi",
      },
    })),
  };
}
