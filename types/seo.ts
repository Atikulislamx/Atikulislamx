import type { Metadata } from "next";

export interface SeoPage {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export type MetadataBuilder = (page: SeoPage) => Metadata;
