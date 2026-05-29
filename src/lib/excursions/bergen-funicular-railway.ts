import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const bergenFunicularRailwayExcursion: ExcursionData = {
  slug: "bergen-funicular-railway",
  path: "/excursions/bergen-funicular-railway",
  title: "Best of Bergen with Funicular Railway",
  headline: "Best of Bergen with Funicular Railway",
  lead: "Bergen's strongest sightseeing and viewpoint tour — city highlights including Bryggen, Bergenhus Fortress, Vågen harbour, and a ride on the Fløibanen funicular to panoramic Mount Fløyen views.",
  metaTitle: "Best of Bergen with Funicular Railway Shore Excursion",
  metaDescription:
    "Guided Best of Bergen tour with Fløibanen funicular railway for cruise passengers. Bryggen, harbour, Bergenhus, and Mount Fløyen views in approx. 3–4 hours.",
  heroImage: siteImages.funicularTour,
  heroImageAlt: imageAlts.funicularTour,
  heroBadge: "Strongest sightseeing and viewpoint tour in Bergen",
  summary: {
    duration: "Approx. 3–4 hours",
    meetingPoint:
      "Central Bergen near Vågen harbour or cruise-friendly city centre pickup",
    returnReassurance:
      "Planned with return-to-ship buffer for typical Bergen port calls",
    bestFor:
      "Cruise passengers who want city culture and mountain views in one excursion",
  },
  snapshotCards: [
    { label: "Fitness level", value: "Easy" },
    { label: "Highlights", value: "Bryggen, harbour, Fløibanen, Mount Fløyen" },
    { label: "View quality", value: "Weather-dependent panoramic outlook" },
    { label: "Port call fit", value: "Ideal for 4–10 hour visits" },
  ],
  gallery: [
    { src: siteImages.floyenView, alt: imageAlts.floyenView },
    { src: siteImages.floibanen, alt: imageAlts.floibanen },
    { src: siteImages.bryggen, alt: imageAlts.bryggen },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
  ],
  highlights: [
    "Guided Bergen city sightseeing with UNESCO-listed Bryggen",
    "Historic harbour area and Bergenhus Fortress exterior",
    "Fløibanen funicular railway to Mount Fløyen",
    "Panoramic city and fjord views from the summit",
    "Easy activity level with efficient routing for cruise timetables",
    "Strong seller for guests who want city plus viewpoints in one booking",
  ],
  description: [
    "This guided tour combines Bergen's essential city sights with the city's most famous viewpoint. You walk or ride through the historic core — Bryggen's Hanseatic wharf, colourful wooden streets, Vågen harbour, and the fortress area that guarded the harbour for centuries.",
    "The Fløibanen funicular carries you from the city centre to Mount Fløyen in minutes. At the top, wide terraces overlook Bergen's rooftops, islands, and fjord approaches — a perspective that photographs beautifully on clear days and still impresses when low cloud rolls in.",
    "Guides pace the route for cruise passengers, keeping transfers short and commentary focused on what you can realistically cover in three to four hours. That makes this tour a dependable choice when you want both culture at sea level and elevation without managing tickets and timings yourself.",
    "Weather affects visibility at the summit, so operators may adjust time on Mount Fløyen. Even with mist, the city walk through Bryggen and the harbour delivers authentic Bergen character within return-to-ship friendly margins.",
  ],
  included: [
    "Guided Bergen city sightseeing",
    "Fløibanen funicular return ticket (when included by operator)",
    "Commentary on Bryggen, harbour, and historic areas",
  ],
  notIncluded: [
    "Food, drinks, and personal shopping",
    "Interior admission to museums unless stated",
    "Gratuities for guide or driver",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "This tour works best when you have at least four hours ashore. With six or more hours, you can combine it comfortably with harbour lunch time.",
    "Confirm whether your sailing includes funicular tickets and whether the route starts near your cruise berth.",
    "Build 30–45 minutes of buffer before all aboard — funicular queues can lengthen on peak summer days.",
    "If visibility is poor at Mount Fløyen, ask your guide about adjusting time in Bryggen or near Bergenhus.",
  ],
  faqs: [
    {
      question: "What does the Best of Bergen funicular tour include?",
      answer:
        "Typical itineraries cover Bryggen, Vågen harbour, exterior views of Bergenhus Fortress, and a Fløibanen ride to Mount Fløyen for panoramic outlooks. Exact stops vary by operator and daily conditions.",
    },
    {
      question: "How long is the Best of Bergen with Funicular Railway tour?",
      answer:
        "Most departures run around three to four hours, including the funicular ride and guided city walking. Confirm exact duration on your booking voucher.",
    },
    {
      question: "Is this tour suitable for cruise passengers with limited mobility?",
      answer:
        "The funicular is accessible, but Bryggen includes cobblestones and uneven lanes. Contact the operator before booking if you use a wheelchair or need step-free routing.",
    },
    {
      question: "What happens if Mount Fløyen is foggy?",
      answer:
        "Views are weather-dependent. Guides may shorten time at the summit and expand the city walk. Pack a light jacket — the top can be cooler and windier than the harbour.",
    },
    {
      question: "Can I do this tour on a 4–6 hour port call?",
      answer:
        "Yes if your all-aboard time allows a full three-to-four-hour excursion plus return buffer. Use our Cruise Smart Planner to confirm margins before booking.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Best of Bergen with Funicular Railway" },
  ],
  relatedLinks: [
    { label: "Mount Fløyen viewpoint", href: "/excursions/mount-floyen-viewpoint" },
    { label: "Bergen walking tour", href: "/excursions/bergen-walking-tour" },
    { label: "Bergen port guide", href: "/bergen-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book Best of Bergen with the funicular?",
  ctaText:
    "Combine Bryggen, harbour history, and Mount Fløyen views in one cruise-friendly tour.",
};
