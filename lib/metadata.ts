import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { toAbsoluteUrl } from "@/lib/utils";
import type { MetadataBuilder, SeoPage } from "@/types/seo";

export const buildMetadata: MetadataBuilder = (page: SeoPage): Metadata => {
  const title = `${page.title} | ${SITE_NAME}`;
  const url = toAbsoluteUrl(page.path);

  return {
    title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: toAbsoluteUrl(DEFAULT_OG_IMAGE),
          width: 1280,
          height: 640,
          alt: `${SITE_NAME} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
      images: [toAbsoluteUrl(DEFAULT_OG_IMAGE)],
    },
    metadataBase: new URL(SITE_URL),
  };
};
