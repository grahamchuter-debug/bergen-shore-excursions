import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { bergenFunicularRailwayExcursion } from "@/lib/excursions/bergen-funicular-railway";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: bergenFunicularRailwayExcursion.metaTitle,
  description: bergenFunicularRailwayExcursion.metaDescription,
  path: bergenFunicularRailwayExcursion.path,
  ogImage: bergenFunicularRailwayExcursion.heroImage,
  ogImageAlt: bergenFunicularRailwayExcursion.heroImageAlt,
});

export default function BergenFunicularRailwayPage() {
  return <ExcursionDetailPage excursion={bergenFunicularRailwayExcursion} />;
}
