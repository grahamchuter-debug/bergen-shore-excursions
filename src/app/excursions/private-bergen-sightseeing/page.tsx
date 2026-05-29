import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { privateBergenSightseeingExcursion } from "@/lib/excursions/private-bergen-sightseeing";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privateBergenSightseeingExcursion.metaTitle,
  description: privateBergenSightseeingExcursion.metaDescription,
  path: privateBergenSightseeingExcursion.path,
  ogImage: privateBergenSightseeingExcursion.heroImage,
  ogImageAlt: privateBergenSightseeingExcursion.heroImageAlt,
});

export default function PrivateBergenSightseeingPage() {
  return <ExcursionDetailPage excursion={privateBergenSightseeingExcursion} />;
}
