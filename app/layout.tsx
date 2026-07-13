import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata } from "@/lib/seo";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  ...pageMetadata.home,
  title: "Social Media Security Specialist | Atikul Islam Rabbi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
