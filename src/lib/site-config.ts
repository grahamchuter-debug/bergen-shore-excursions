import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Bergen Shore Excursions",
  url: "https://bergenshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Bergen cruise port guides and shore excursion planning for passengers visiting Norway's gateway to the fjords, Bryggen, and Mount Fløyen.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Bergen Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
