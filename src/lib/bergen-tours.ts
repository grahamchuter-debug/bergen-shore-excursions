import { imageAlts, siteImages } from "@/lib/site-images";

export type BergenTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const bergenTourCards: readonly BergenTourCard[] = [
  {
    href: "/excursions/fjord-cruise-to-mostraumen",
    image: siteImages.mostraumenFjord,
    imageAlt: imageAlts.mostraumenCard,
    title: "Fjord Cruise to Mostraumen",
    description:
      "Modern catamaran-style fjord cruise through Osterfjord to mountains, waterfalls, and the narrow Mostraumen strait — Bergen's headline scenic shore excursion.",
    accent: "blue",
  },
  {
    href: "/excursions/bergen-funicular-railway",
    image: siteImages.funicularTour,
    imageAlt: imageAlts.funicularCard,
    title: "Best of Bergen with Funicular Railway",
    description:
      "Guided city sightseeing through Bryggen and the historic harbour, plus Fløibanen to Mount Fløyen for panoramic city and fjord views.",
    accent: "red",
  },
  {
    href: "/excursions/bergen-walking-tour",
    image: siteImages.walkingTour,
    imageAlt: imageAlts.walkingTourCard,
    title: "Bergen Walking Tour for Cruise Passengers",
    description:
      "Approx. two-hour guided walk through Bryggen, Vågen harbour, the Fish Market, and Hanseatic streets — ideal for shorter port calls.",
    accent: "blue",
  },
  {
    href: "/excursions/mount-floyen-viewpoint",
    image: siteImages.floyenView,
    imageAlt: imageAlts.floyenCard,
    title: "Mount Fløyen Viewpoint Tour",
    description:
      "Fløibanen funicular to scenic Bergen outlooks — easy sightseeing that pairs well with a harbour walk when time allows.",
    accent: "red",
  },
  {
    href: "/excursions/private-bergen-sightseeing",
    image: siteImages.privateSightseeing,
    imageAlt: imageAlts.privateCard,
    title: "Private Bergen Sightseeing",
    description:
      "Premium private guide or driver-guide experience with flexible routing through Bryggen, harbour viewpoints, and historic districts.",
    accent: "blue",
  },
] as const;

export const bergenTourListItems = bergenTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
