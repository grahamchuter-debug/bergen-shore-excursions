import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Bergen Shore Excursions",
  url: "https://bergenshoreexcursions.com",
  locale: "en_GB",
  tagline: "Cruise-day planning for Bergen harbour and the fjords",
  defaultDescription:
    "Independent Bergen cruise-port planning: Bryggen, Fløyen, Mostraumen and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Bergen Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/bergen-shore-excursions#planner",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@bergenshoreexcursions.com",
  /** Cloudflare Email Routing active: hello@ → info@wowatour.com */
  contactEmailVerified: true,
} as const;
