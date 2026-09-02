import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const privateBergenSightseeingExcursion: ExcursionData = {
  slug: "private-bergen-sightseeing",
  path: "/excursions/private-bergen-sightseeing",
  title: "Private Bergen Sightseeing",
  headline: "Private Bergen Sightseeing",
  lead: "The premium private option, a flexible driver-guide or private guide experience covering Bryggen, harbour viewpoints, historic areas, and city highlights tailored to families, couples, and small groups.",
  metaTitle: "Private Bergen Sightseeing for Cruise Passengers",
  metaDescription:
    "Private Bergen sightseeing with flexible routing for cruise passengers. Personal guide or driver-guide covering Bryggen, harbour, viewpoints, and historic areas.",
  heroImage: siteImages.privateSightseeing,
  heroImageAlt: imageAlts.privateSightseeing,
  heroBadge: "Premium flexible touring for cruise passengers",
  summary: {
    duration: "Flexible, typically 3–5 hours",
    meetingPoint:
      "Cruise port pickup or central Bergen meeting point by arrangement",
    returnReassurance:
      "Itinerary built around your ship's timetable with explicit return buffer",
    bestFor:
      "Families, couples, and small groups wanting personalised pacing and routing",
  },
  snapshotCards: [
    { label: "Group size", value: "Private, your party only" },
    { label: "Style", value: "Guide-led or driver-guide touring" },
    { label: "Flexibility", value: "Custom stops and pacing" },
    { label: "Port call fit", value: "Best for 10+ hour visits" },
  ],
  gallery: [
    { src: siteImages.bryggen, alt: imageAlts.bryggen },
    { src: siteImages.fishMarket, alt: imageAlts.fishMarket },
    { src: siteImages.floyenView, alt: imageAlts.floyenView },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
  ],
  highlights: [
    "Private guide or driver-guide dedicated to your group",
    "Flexible sightseeing. Bryggen, harbour, viewpoints, and historic districts",
    "Pacing adjusted for children, photography stops, or mobility needs",
    "Efficient transport when walking distance is impractical",
    "Ideal for longer port days when you want a bespoke Bergen experience",
    "Return-to-ship timing discussed and built into the itinerary",
  ],
  description: [
    "Private sightseeing removes the fixed schedule of group tours. Your guide or driver-guide meets you at the cruise port or an agreed central point, then shapes the day around your interests, whether that means extended time in Bryggen, a detour to Mount Fløyen, or harbour viewpoints away from the busiest lanes.",
    "Couples and families often choose private touring when they want rest breaks, kid-friendly pacing, or the freedom to linger at the Fish Market without holding a bus group. Driver-guide formats add comfort on wet days and help you cover more ground when your ship stays ten hours or longer.",
    "Because the itinerary is yours, you can combine city highlights with a relaxed lunch stop or optional funicular ride. Operators typically confirm all-aboard time upfront and work backward to set a hard return-to-port deadline with buffer included.",
    "This is the premium option on our Cruise Smart Planner for extended port calls, especially when you have already done a group fjord cruise on a previous visit or want a personalised introduction to Bergen without sharing a coach.",
  ],
  included: [
    "Private guide or driver-guide for your party",
    "Customised routing around Bryggen, harbour, and city viewpoints",
    "Pickup near cruise port or central meeting point by arrangement",
  ],
  notIncluded: [
    "Fløibanen tickets, museum entries, and meals unless stated",
    "Gratuities for guide or driver",
    "Travel insurance and personal shopping",
    "Mostraumen fjord cruise unless booked as an add-on",
  ],
  timingAdvice: [
    "Best value on port days of eight to ten hours or more when flexibility matters.",
    "Share your all-aboard time when booking so the operator can propose a realistic route.",
    "Private tours cost more per person on small groups but save time versus piecing together independent tickets.",
    "Confirm vehicle size and accessibility if your party includes young children or mobility equipment.",
  ],
  faqs: [
    {
      question: "What is included in private Bergen sightseeing?",
      answer:
        "You receive a dedicated guide or driver-guide and a customised route covering Bryggen, harbour areas, historic districts, and viewpoints according to your interests and port time.",
    },
    {
      question: "Can private tours pick up at the cruise port?",
      answer:
        "Most operators offer pier pickup or a short walk to a coach meeting point. Confirm the exact location when booking and check your ship's map for the assigned berth.",
    },
    {
      question: "Is private sightseeing worth it for cruise passengers?",
      answer:
        "On longer port days, private touring suits families and small groups who want flexible pacing, personal attention, and efficient routing without coordinating multiple group departures.",
    },
    {
      question: "Can a private tour include Mount Fløyen or a fjord cruise?",
      answer:
        "City-focused private tours often include Fløibanen time. Fjord cruises usually book separately because of fixed sailing schedules, ask your operator about combining both on full-day calls.",
    },
    {
      question: "How far in advance should I book a private Bergen tour?",
      answer:
        "Book as early as possible on peak summer days when several ships visit. Popular guides and vehicles fill quickly during the May–September cruise season.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Bergen Sightseeing" },
  ],
  relatedLinks: [
    { label: "Fjord cruise to Mostraumen", href: "/excursions/fjord-cruise-to-mostraumen" },
    { label: "Best of Bergen funicular tour", href: "/excursions/bergen-funicular-railway" },
    { label: "One day in Bergen", href: "/one-day-in-bergen" },
  ],
  bookingHref: "/excursions",
  exploreLabel: "Explore this excursion",
  ctaTitle: "Ready to book private Bergen sightseeing?",
  ctaText:
    "Enjoy flexible, personal touring designed around your ship's timetable and your group's pace.",
};
