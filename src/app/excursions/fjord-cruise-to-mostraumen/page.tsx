import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { mostraumenFjordCruiseExcursion } from "@/lib/excursions/fjord-cruise-to-mostraumen";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: mostraumenFjordCruiseExcursion.metaTitle,
  description: mostraumenFjordCruiseExcursion.metaDescription,
  path: mostraumenFjordCruiseExcursion.path,
  ogImage: mostraumenFjordCruiseExcursion.heroImage,
  ogImageAlt: mostraumenFjordCruiseExcursion.heroImageAlt,
});

export default function FjordCruiseToMostraumenPage() {
  return <ExcursionDetailPage excursion={mostraumenFjordCruiseExcursion} />;
}
