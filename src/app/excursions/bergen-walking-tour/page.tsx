import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { bergenWalkingTourExcursion } from "@/lib/excursions/bergen-walking-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: bergenWalkingTourExcursion.metaTitle,
  description: bergenWalkingTourExcursion.metaDescription,
  path: bergenWalkingTourExcursion.path,
  ogImage: bergenWalkingTourExcursion.heroImage,
  ogImageAlt: bergenWalkingTourExcursion.heroImageAlt,
});

export default function BergenWalkingTourPage() {
  return <ExcursionDetailPage excursion={bergenWalkingTourExcursion} />;
}
