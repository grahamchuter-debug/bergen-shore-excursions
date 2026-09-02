import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const mostraumenFjordCruiseExcursion: ExcursionData = {
  slug: "fjord-cruise-to-mostraumen",
  path: "/excursions/fjord-cruise-to-mostraumen",
  title: "Fjord Cruise to Mostraumen",
  headline: "Fjord Cruise to Mostraumen from Bergen",
  lead: "Bergen's headline scenic shore excursion, a modern catamaran-style fjord cruise through Osterfjord to the narrow Mostraumen strait, with mountains, waterfalls, and return-to-ship friendly timing for cruise passengers.",
  metaTitle: "Fjord Cruise to Mostraumen Shore Excursion from Bergen",
  metaDescription:
    "Book the Mostraumen fjord cruise from Bergen for cruise passengers. Approx. 3.5 hours through Osterfjord scenery with easy activity level and return-to-ship timing advice.",
  heroImage: siteImages.mostraumenFjord,
  heroImageAlt: imageAlts.mostraumenFjord,
  heroBadge: "Headline scenic tour for Bergen cruise passengers",
  summary: {
    duration: "Approx. 3 hours 30 minutes",
    meetingPoint:
      "Zachariasbryggen quay near Torget and the Fish Market, central Bergen",
    returnReassurance:
      "Timed for typical Bergen port calls with buffer before all aboard",
    bestFor:
      "First-time visitors with 6+ hours in port who want signature Norwegian fjord scenery",
  },
  snapshotCards: [
    { label: "Walk from ship", value: "Often 10–20 minutes to departure quay" },
    { label: "Fitness level", value: "Easy" },
    { label: "Vessel style", value: "Modern catamaran-style fjord cruise" },
    { label: "Season", value: "Popular May–September" },
  ],
  gallery: [
    { src: siteImages.mostraumenFjord, alt: imageAlts.mostraumenFjord },
    { src: siteImages.mostraumenStrait, alt: imageAlts.mostraumenStrait },
    { src: siteImages.osterfjord, alt: imageAlts.osterfjord },
    { src: siteImages.bryggen, alt: imageAlts.bryggen },
  ],
  highlights: [
    "Signature Bergen fjord experience through Osterfjord toward Mostraumen",
    "Steep mountains, waterfalls, and narrow strait navigation",
    "Modern sightseeing vessel with sundeck viewing",
    "Departs from central harbour near Bryggen and the Fish Market",
    "Easy activity level, ideal first-time visitor choice",
    "Strong fit for cruise passengers with six or more hours ashore",
  ],
  description: [
    "The Mostraumen fjord cruise is the scenic headline for cruise passengers calling at Bergen. From Zachariasbryggen beside Torget you board a modern catamaran-style vessel and sail into Osterfjord, a landscape of steep walls, cascading waterfalls, and calm inner-fjord waters that define the Norwegian coast.",
    "The route continues toward the shallow Mostraumen strait, where strong currents squeeze between rock faces and boats pass within metres of a thundering waterfall. Commentary on board helps you understand the geology and local communities of Modalen municipality before the return sailing to Bergen harbour.",
    "Because departures sit in the heart of the city, you spend less time on transfers and more time on the water. That makes this cruise a practical choice when you want dramatic fjord scenery without committing an entire port day to inland travel.",
    "Timed with cruise calls in mind, the sailing typically runs around three and a half hours round trip, leaving room for a short city walk or harbour lunch when your ship stays long enough.",
  ],
  included: [
    "Scenic fjord cruise through Osterfjord to Mostraumen",
    "On-board commentary during the sailing",
    "Standard seating and sundeck access on the sightseeing vessel",
  ],
  notIncluded: [
    "Food and drinks on board unless stated by operator",
    "Hotel or ship transfers beyond the meeting point",
    "Optional premium seating or upgrades",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Check your cruise line app for arrival, all-aboard, and departure times before booking. Treat all-aboard, not the published departure, as your hard deadline.",
    "Allow 30–45 minutes after the excursion ends to walk back to the gangway, clear pier queues, and board without stress.",
    "On busy summer days when several ships visit Bergen, disembark early and head straight to Zachariasbryggen.",
    "Compare your ship's hours in port with our Bergen Cruise Smart Planner before confirming a sailing time.",
  ],
  faqs: [
    {
      question: "How long is the Mostraumen fjord cruise from Bergen?",
      answer:
        "Most sailings take around three to three-and-a-half hours round trip, including boarding at Zachariasbryggen and the return to the same quay near Torget.",
    },
    {
      question: "Will I get back to my cruise ship on time?",
      answer:
        "This excursion suits typical Bergen port calls of six hours or more, but only your cruise line confirms all-aboard time. Build a personal buffer of 30–45 minutes and monitor your ship's app throughout the day.",
    },
    {
      question: "Where does the Mostraumen cruise depart in Bergen?",
      answer:
        "Boats depart from Zachariasbryggen at Torget, next to the Fish Market and within walking distance of Bryggen and most cruise berths.",
    },
    {
      question: "Is the Mostraumen cruise suitable for first-time visitors?",
      answer:
        "Yes. It delivers classic Norwegian fjord scenery with minimal walking and an easy activity level, one of the strongest introductions to the region for cruise guests.",
    },
    {
      question: "Should cruise passengers book the Mostraumen cruise in advance?",
      answer:
        "Yes on peak summer days. Bergen receives heavy cruise traffic and popular departures can sell out. Booking ahead secures your preferred sailing and return-to-ship planning.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Fjord Cruise to Mostraumen" },
  ],
  relatedLinks: [
    { label: "Bergen port guide", href: "/bergen-port-guide" },
    { label: "One day in Bergen", href: "/one-day-in-bergen" },
    { label: "Bergen walking tour", href: "/excursions/bergen-walking-tour" },
  ],
  bookingHref: "/excursions",
  exploreLabel: "Explore this excursion",
  ctaTitle: "Ready to book your Mostraumen fjord cruise from Bergen?",
  ctaText:
    "Secure your sailing time before port day and explore more cruise-friendly excursions designed around your ship's timetable.",
};
