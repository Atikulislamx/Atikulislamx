import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "facebook-page-recovery",
    title: "Facebook Page Recovery",
    summary:
      "Guidance for ownership disputes, admin access problems, and page recovery planning.",
    category: "Business Assets",
    process: "Assessment → Admin review → Recovery strategy → Security hardening",
    features: [
      "Ownership and admin role review",
      "Page security recommendations",
      "Documentation and appeal guidance",
      "Long-term permission governance",
    ],
  },
  {
    slug: "business-manager-recovery",
    title: "Business Manager Recovery",
    summary:
      "Professional support for Meta Business Manager access, asset control, and recovery workflow.",
    category: "Business Assets",
    process: "Asset map → Risk analysis → Recovery plan → Business continuity steps",
    features: [
      "Business asset audit",
      "Permission restructuring",
      "Security-first recovery recommendations",
      "Verification readiness guidance",
    ],
  },
  {
    slug: "meta-security-consulting",
    title: "Meta Security Consulting",
    summary:
      "Strategic consulting to improve account, page, and business asset resilience.",
    category: "Consultation",
    process: "Discovery → Security review → Action plan → Follow-up",
    features: [
      "Risk assessment",
      "Authentication and recovery review",
      "Security improvement checklist",
      "Preventive best-practice implementation",
    ],
  },
  {
    slug: "admin-dispute-resolution",
    title: "Admin Dispute Resolution",
    summary:
      "Structured guidance for resolving role conflicts and access governance issues.",
    category: "Business Assets",
    process: "Incident review → Evidence mapping → Platform-aligned next steps",
    features: [
      "Admin conflict assessment",
      "Role and permission remediation",
      "Policy-aligned communication guidance",
      "Future governance framework",
    ],
  },
  {
    slug: "copyright-ip-support",
    title: "Copyright/IP Issue Support",
    summary:
      "Consultation for understanding copyright and intellectual property-related platform issues.",
    category: "Consultation",
    process: "Issue review → Policy analysis → Response planning",
    features: [
      "Report and notice review",
      "Policy interpretation support",
      "Response preparation guidance",
      "Preventive compliance recommendations",
    ],
  },
  {
    slug: "social-media-security-consulting",
    title: "Social Media Security Consulting",
    summary:
      "Personalized consultation for Facebook, Instagram, and connected digital assets.",
    category: "Personal Accounts",
    process: "Audit → Prioritized actions → Security implementation roadmap",
    features: [
      "Personal account security audit",
      "Compromise response planning",
      "Recovery readiness improvements",
      "Ongoing security posture recommendations",
    ],
  },
];
