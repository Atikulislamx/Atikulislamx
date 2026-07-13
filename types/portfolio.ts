export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  status: "Completed" | "Consultation" | "In Progress";
  challenge: string;
  solution: string;
  result: string;
  lessons: string;
}
