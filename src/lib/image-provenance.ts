/**
 * Image provenance registry for Bergen Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED here without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status: "KEEP" | "REPLACE" | "WRONG_LOCATION" | "PROVENANCE_UNKNOWN" | "BROKEN";
  notes: string;
  licence?: string;
};

export const bergenImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath: "Wikimedia Commons Harbour Bergen Norway 2009",
    status: "KEEP",
    notes: "Bergen harbour / Bryggen context. Confirm file page licence before commercial hardening.",
    licence: "Likely CC BY-SA; confirm on Commons file page",
  },
  {
    key: "bryggen",
    urlOrPath: "Wikimedia Commons Bryggen in Bergen Norway",
    status: "KEEP",
    notes: "Correct location. Confirm licence on Commons.",
  },
  {
    key: "floyenView",
    urlOrPath: "Wikimedia Commons Bergen panoramic from Fløyen",
    status: "KEEP",
    notes: "Correct Bergen viewpoint. Confirm licence.",
  },
  {
    key: "mostraumenStrait",
    urlOrPath: "Wikimedia Commons Mostraumen, Osterfjord",
    status: "KEEP",
    notes: "Correct Mostraumen context. Confirm licence.",
  },
  {
    key: "floibanen",
    urlOrPath: "Wikimedia Commons Floibanen",
    status: "KEEP",
    notes: "Correct funicular. Confirm licence.",
  },
  {
    key: "fishMarket",
    urlOrPath: "Wikimedia Commons Bergen fish market",
    status: "KEEP",
    notes: "Correct Torget context. Confirm licence.",
  },
  {
    key: "flamPortCard",
    urlOrPath: "Wikimedia Flam harbour",
    status: "KEEP",
    notes: "Intentionally Flam for sibling port card, not labelled as Bergen.",
  },
  {
    key: "stavangerPortCard",
    urlOrPath: "/images/stavanger-hero.png",
    status: "KEEP",
    notes: "Local asset for Stavanger sibling card only.",
  },
] as const;
