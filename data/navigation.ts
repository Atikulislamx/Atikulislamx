import { NAVIGATION } from "@/lib/constants";

export const mainNavigation = NAVIGATION;

export const footerNavigation = {
  quickLinks: [
    ...NAVIGATION,
    { href: "/consultation", label: "Consultation" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  services: [
    "Facebook Page Recovery",
    "Business Manager Recovery",
    "Meta Security Consulting",
    "Admin Dispute Resolution",
    "Copyright/IP Issue Support",
    "Social Media Security Consulting",
  ],
};
