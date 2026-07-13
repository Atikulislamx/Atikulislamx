export interface Service {
  slug: string;
  title: string;
  summary: string;
  category: "Personal Accounts" | "Business Assets" | "Consultation";
  features: string[];
  process: string;
}
