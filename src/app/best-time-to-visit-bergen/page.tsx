import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Bergen for Cruise Passengers",
  description:
    "When to visit Bergen on a cruise: peak season, weather, Mostraumen cruise availability, Bryggen crowds, and return-to-ship planning by month.",
  path: "/best-time-to-visit-bergen",
  ogImage: siteImages.fishMarket,
  ogImageAlt: imageAlts.fishMarket,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Bergen port guide", href: "/bergen-port-guide" },
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
] as const;

const faqs = [
  {
    question: "What is the best month for Bergen cruise shore excursions?",
    answer:
      "May through September offers the most reliable Mostraumen sailings, long daylight, and walkable weather for Bryggen tours. June and July are busiest, book excursions early.",
  },
  {
    question: "Is Bergen crowded in summer?",
    answer:
      "Yes on peak cruise days when multiple ships call. Disembark early, pre-book fjord tickets, and consider morning walking tours before harbour restaurants fill up.",
  },
  {
    question: "Can I visit Bergen on a winter cruise?",
    answer:
      "Winter calls are possible with fewer crowds and dramatic light, but daylight is short and some sailings may run reduced schedules. Pack warm layers and confirm excursion times in advance.",
  },
  {
    question: "Does weather affect Mostraumen fjord cruises from Bergen?",
    answer:
      "Operators may adjust routes in high winds or poor visibility. Keep flexible plans and monitor announcements, have a Bryggen walking backup if sailing is delayed.",
  },
] as const;

export default function BestTimeToVisitBergenPage() {
  return (
    <ContentPage
      title="Best Time to Visit Bergen"
      lead="Season-by-season advice for cruise passengers choosing when to book Mostraumen fjord cruises, walking tours, and harbour time in Bergen."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Peak cruise season: May to September</h2>
        <p>
          Most Bergen cruise calls arrive between late spring and early autumn.
          Longer daylight, active fjord operators, and comfortable walking
          weather make this the best window for shore excursions. June through
          August sees the highest ship volumes, plan ahead.
        </p>
      </section>

      <section>
        <h2>June and July: best scenery, busiest ports</h2>
        <p>
          Mid-summer delivers the classic Norway experience cruise guests expect
         , green fjord walls, busy harbours, and full excursion timetables.
          Book Mostraumen cruises and walking tours in advance, and disembark
          early on days when several ships share Bergen.
        </p>
      </section>

      <section>
        <h2>May and September: strong value months</h2>
        <p>
          Shoulder season often means slightly fewer crowds while operators
          still run regular fjord sailings. Temperatures can be cooler and rain
          more frequent, pack layers and waterproof footwear for Bryggen
          cobblestones.
        </p>
      </section>

      <section>
        <h2>Weather and Mount Fløyen visibility</h2>
        <p>
          Bergen is known for changeable weather. Fløibanen and Mount Fløyen
          views are weather-dependent, mist and cloud can limit panoramas even
          in summer. Fjord cruises may alter routes in high winds. Always have
          a city-focused backup plan.
        </p>
      </section>

      <section>
        <h2>Plan your Bergen port day by season</h2>
        <p>
          Compare tours on our{" "}
          <Link href="/bergen-shore-excursions">shore excursions hub</Link>,
          read the{" "}
          <Link href="/bergen-port-guide">port guide</Link>, and use the Cruise
          Smart Planner to match excursions to your actual hours ashore.
        </p>
      </section>
    </ContentPage>
  );
}
