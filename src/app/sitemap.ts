import type { MetadataRoute } from "next";

import {
  getBergenMonthSummaries,
  shipScheduleMonthPath,
} from "@/lib/bergen-schedules";
import { siteConfig } from "@/lib/site-config";
import { siteRoutes } from "@/lib/site-routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const monthRoutes = getBergenMonthSummaries().map((month) => ({
    url: `${siteConfig.url}${shipScheduleMonthPath(month.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...monthRoutes];
}
