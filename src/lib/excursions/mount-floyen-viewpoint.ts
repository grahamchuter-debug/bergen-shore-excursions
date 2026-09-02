import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const mountFloyenViewpointExcursion: ExcursionData = {
  slug: "mount-floyen-viewpoint",
  path: "/excursions/mount-floyen-viewpoint",
  title: "Mount Fløyen Viewpoint",
  headline: "Mount Fløyen Viewpoint Tour",
  lead: "Scenic viewpoint sightseeing by Fløibanen funicular, panoramic Bergen and fjord views from Mount Fløyen, easy cruise-passenger access, and a natural pairing with a harbour walking tour when time allows.",
  metaTitle: "Mount Fløyen Viewpoint Tour for Bergen Cruise Passengers",
  metaDescription:
    "Mount Fløyen viewpoint tour via Fløibanen funicular for cruise passengers. Easy sightseeing, weather-dependent views, and pairs well with a Bergen walking tour.",
  heroImage: siteImages.floyenView,
  heroImageAlt: imageAlts.floyenView,
  heroBadge: "Scenic viewpoint and photography favourite",
  summary: {
    duration: "Approx. 1.5–2 hours including funicular ride",
    meetingPoint: "Fløibanen lower station in central Bergen",
    returnReassurance:
      "Short excursion format suited to mid-length port calls with buffer time",
    bestFor:
      "Guests who want elevated views without a full half-day city tour",
  },
  snapshotCards: [
    { label: "Fitness level", value: "Easy" },
    { label: "Transport", value: "Fløibanen funicular railway" },
    { label: "Views", value: "Weather-dependent visibility" },
    { label: "Combines with", value: "Bergen walking tour when time allows" },
  ],
  gallery: [
    { src: siteImages.floyenView, alt: imageAlts.floyenView },
    { src: siteImages.floibanen, alt: imageAlts.floibanen },
    { src: siteImages.waterfront, alt: imageAlts.waterfront },
    { src: siteImages.bryggen, alt: imageAlts.bryggen },
  ],
  highlights: [
    "Fløibanen funicular from city centre to Mount Fløyen",
    "Wide panoramic terraces over Bergen and surrounding fjords",
    "Easy cruise-passenger sightseeing with minimal walking at the top",
    "Popular photography stop on clear days",
    "Works well paired with a Bryggen walking tour on longer port days",
    "Weather-dependent, mist and cloud can limit visibility",
  ],
  description: [
    "Mount Fløyen is Bergen's most accessible summit viewpoint. The Fløibanen funicular climbs from the city centre in minutes, delivering one of Norway's classic urban panoramas, rooftops, harbour basins, and island-studded fjord approaches spread below.",
    "This excursion format focuses on the ride and summit time rather than a full city circuit. That makes it efficient for cruise passengers who already plan independent time in Bryggen or who want elevation after a harbour walk.",
    "At the top, terraces, café facilities, and short walking paths let you enjoy the outlook at your own pace within a typical one-and-a-half to two-hour window. Guides or timed tickets help you align the funicular schedule with your ship's all-aboard deadline.",
    "Visibility is weather-dependent. On clear days the view is clear and wide; in fog or drizzle the experience is still atmospheric but photographers should manage expectations. Packing a light layer is wise, the summit is often cooler than the harbour.",
  ],
  included: [
    "Fløibanen funicular return journey (when included by operator)",
    "Guided or timed summit visit depending on tour format",
    "Orientation at Mount Fløyen viewing areas",
  ],
  notIncluded: [
    "Food and drinks at summit café",
    "Extended hiking trails beyond the viewpoint terraces",
    "City walking tour unless booked as a combination",
    "Gratuities and personal expenses",
  ],
  timingAdvice: [
    "Fits well into four-to-six-hour port calls alongside a short city walk.",
    "On ten-plus-hour days, pair with a morning walking tour and afternoon funicular ride, or reverse the order.",
    "Check funicular frequency before booking; queues extend on peak summer days.",
    "If cloud sits on the summit, consider switching to a harbour-focused walking tour instead.",
  ],
  faqs: [
    {
      question: "How long does a Mount Fløyen viewpoint visit take?",
      answer:
        "Allow around one and a half to two hours including the Fløibanen ride, summit time, and return to the lower station near the harbour.",
    },
    {
      question: "Are views from Mount Fløyen guaranteed?",
      answer:
        "No. Bergen's weather changes quickly and visibility is weather-dependent. Many guests still enjoy the funicular experience even when cloud limits the panorama.",
    },
    {
      question: "Can I combine Mount Fløyen with a walking tour?",
      answer:
        "Yes on port days of six hours or more. Walk Bryggen and Torget first, then ride Fløibanen, always keep 30–45 minutes buffer before all aboard.",
    },
    {
      question: "Is Fløibanen suitable for visitors with limited mobility?",
      answer:
        "The funicular is generally accessible, with level viewing areas at the top. Contact the operator if you need step-free routing from your cruise berth to the lower station.",
    },
    {
      question: "Where is the Fløibanen lower station?",
      answer:
        "The lower station sits in central Bergen within walking distance of Vågen harbour and Bryggen, typically 10–20 minutes from most cruise berths.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Mount Fløyen Viewpoint" },
  ],
  relatedLinks: [
    { label: "Bergen walking tour", href: "/excursions/bergen-walking-tour" },
    { label: "Best of Bergen funicular tour", href: "/excursions/bergen-funicular-railway" },
    { label: "Bergen port guide", href: "/bergen-port-guide" },
  ],
  bookingHref: "/excursions",
  exploreLabel: "Explore this excursion",
  ctaTitle: "Ready to visit Mount Fløyen?",
  ctaText:
    "Ride Fløibanen for panoramic Bergen views, easy sightseeing built around your port schedule.",
};
