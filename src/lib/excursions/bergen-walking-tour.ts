import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const bergenWalkingTourExcursion: ExcursionData = {
  slug: "bergen-walking-tour",
  path: "/excursions/bergen-walking-tour",
  title: "Bergen Walking Tour",
  headline: "Bergen Walking Tour for Cruise Passengers",
  lead: "The best short-port and city-focused option, a guided walk through Bryggen, Vågen harbour, the Fish Market, Bergenhus Fortress exterior, and Hanseatic streets in around two hours.",
  metaTitle: "Bergen Walking Tour for Cruise Passengers",
  metaDescription:
    "Guided Bergen walking tour for cruise passengers. Bryggen, Vågen harbour, Fish Market, and historic streets in approx. 2 hours, ideal for shorter port calls.",
  heroImage: siteImages.walkingTour,
  heroImageAlt: imageAlts.walkingTour,
  heroBadge: "Best short-port city option in Bergen",
  summary: {
    duration: "Approx. 2 hours",
    meetingPoint:
      "Central Bergen near Vågen harbour, Bryggen, or cruise-friendly city centre",
    returnReassurance:
      "Compact route designed for shorter port calls with gangway buffer",
    bestFor:
      "Cruise passengers with under six hours ashore who want authentic city culture on foot",
  },
  snapshotCards: [
    { label: "Fitness level", value: "Easy to moderate walking" },
    { label: "Terrain", value: "Cobblestones and harbour promenades" },
    { label: "Port call fit", value: "Ideal for under 4–6 hour visits" },
    { label: "Ends near", value: "Harbour and cruise-friendly areas" },
  ],
  gallery: [
    { src: siteImages.bryggenAlley, alt: imageAlts.bryggenAlley },
    { src: siteImages.bryggen, alt: imageAlts.bryggen },
    { src: siteImages.fishMarket, alt: imageAlts.fishMarket },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
  ],
  highlights: [
    "UNESCO-listed Bryggen and Hanseatic wooden streets",
    "Vågen harbour and Torget Fish Market atmosphere",
    "Exterior views of Bergenhus Fortress and historic harbour defences",
    "Colourful lanes and local viewpoints where route allows",
    "Approx. two hours, efficient for shorter port calls",
    "Easy to moderate walking with return-to-ship friendly pacing",
  ],
  description: [
    "When your ship offers limited hours ashore, a focused walking tour delivers the most Bergen per minute. Guides lead you from the harbour into Bryggen, the UNESCO-listed wharf where Hanseatic merchants traded for centuries, and through narrow alleys between leaning wooden warehouses.",
    "The route continues along Vågen to Torget, where the Fish Market buzzes with seafood stalls and harbour views. Exterior stops at Bergenhus Fortress connect Norway's medieval past to the working port you see today, while commentary explains how Bergen became the gateway to the fjords.",
    "Because the tour stays compact, you keep margin for independent lunch, souvenir shopping, or a quick Fløibanen ride if your schedule allows. That flexibility makes the walking tour the anchor recommendation for under-four-hour and four-to-six-hour port calls in our Cruise Smart Planner.",
    "Designed for cruise passengers, meeting points sit within walking distance of most berths. The pace suits mixed fitness levels, though Bryggen's cobblestones reward sensible footwear.",
  ],
  included: [
    "Locally guided Bergen walking tour",
    "Commentary on Bryggen, harbour, and historic areas",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Food, drinks, and market purchases",
    "Museum or fortress interior admission",
    "Fløibanen funicular tickets",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Ideal when you have three to six hours ashore. With longer port days, pair this tour with a Mostraumen cruise or Mount Fløyen visit.",
    "Disembark promptly on busy turnaround days, guided groups can fill quickly when multiple ships share the harbour.",
    "Keep 30–45 minutes before all aboard for the walk back to your gangway.",
    "Ask your guide where the tour ends so you can plan any independent time near Bryggen or Torget.",
  ],
  faqs: [
    {
      question: "How long is the Bergen walking tour for cruise passengers?",
      answer:
        "Most guided walks run around two hours, covering Bryggen, Vågen harbour, the Fish Market area, and Bergenhus Fortress exterior at an efficient pace.",
    },
    {
      question: "Is the walking tour good for short port calls?",
      answer:
        "Yes. It is our top recommendation for under-four-hour and four-to-six-hour port days when a fjord cruise or full funicular tour will not fit comfortably.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Expect easy to moderate walking on cobblestones and harbour promenades. The route is not strenuous but does include uneven surfaces in Bryggen.",
    },
    {
      question: "Can I combine the walking tour with Mount Fløyen?",
      answer:
        "On longer port days, many guests walk Bryggen first then ride Fløibanen independently. Confirm your all-aboard time before adding a second activity.",
    },
    {
      question: "Where does the tour meet in Bergen?",
      answer:
        "Meeting points are typically near Vågen harbour or Bryggen within walking distance of cruise berths. Check your voucher the night before for the exact location.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Bergen Walking Tour" },
  ],
  relatedLinks: [
    { label: "Mount Fløyen viewpoint", href: "/excursions/mount-floyen-viewpoint" },
    { label: "Best of Bergen funicular tour", href: "/excursions/bergen-funicular-railway" },
    { label: "One day in Bergen", href: "/one-day-in-bergen" },
  ],
  bookingHref: "/excursions",
  exploreLabel: "Explore this excursion",
  ctaTitle: "Ready to book your Bergen walking tour?",
  ctaText:
    "See Bryggen, the harbour, and historic streets with a guide who understands cruise timetables.",
};
