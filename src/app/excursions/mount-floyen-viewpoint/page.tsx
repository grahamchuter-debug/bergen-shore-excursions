import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { mountFloyenViewpointExcursion } from "@/lib/excursions/mount-floyen-viewpoint";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: mountFloyenViewpointExcursion.metaTitle,
  description: mountFloyenViewpointExcursion.metaDescription,
  path: mountFloyenViewpointExcursion.path,
  ogImage: mountFloyenViewpointExcursion.heroImage,
  ogImageAlt: mountFloyenViewpointExcursion.heroImageAlt,
});

export default function MountFloyenViewpointPage() {
  return <ExcursionDetailPage excursion={mountFloyenViewpointExcursion} />;
}
