import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Bergen Shore Excursions for Cruise Passengers",
  description:
    "Compare Bergen shore excursions for cruise ships: Mostraumen fjord cruises, funicular city tours, walking tours, and return-to-ship timing advice for Vågen harbour.",
  path: "/bergen-shore-excursions",
  ogImage: siteImages.mostraumenFjord,
  ogImageAlt: imageAlts.mostraumenFjord,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Bergen port guide", href: "/bergen-port-guide" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
  { label: "Best time to visit", href: "/best-time-to-visit-bergen" },
] as const;

const faqs = [
  {
    question: "Should cruise passengers book Bergen excursions in advance?",
    answer:
      "Yes on busy summer days when several ships share the harbour. Pre-booking Mostraumen fjord cruises and popular city tours secures your departure slot and helps you return to ship on time.",
  },
  {
    question: "How long do the main Bergen shore excursions take?",
    answer:
      "Mostraumen fjord cruises run around three and a half hours. The Best of Bergen funicular tour takes three to four hours. Walking tours are typically two hours, and Mount Fløyen visits fit into one and a half to two hours.",
  },
  {
    question: "Can I explore Bergen independently as a cruise passenger?",
    answer:
      "Yes. Bryggen, Torget, and the Fish Market are walkable from most cruise berths. Independent guests should still build a 30–45 minute buffer before all aboard on peak turnaround days.",
  },
  {
    question: "Do Bergen tours guarantee return to the cruise ship?",
    answer:
      "Ship-sponsored excursions usually include a ship guarantee. Independent tickets do not — you are responsible for meeting your vessel's all-aboard time. Always confirm timing on your cruise app before booking.",
  },
] as const;

export default function BergenShoreExcursionsPage() {
  return (
    <ContentPage
      title="Bergen Shore Excursions"
      lead="Hand-picked fjord cruises, funicular city tours, and walking excursions for cruise ship guests, planned with enough buffer time to return to your ship on schedule."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Compare Bergen tours for your port day"
      ctaText="Use the guides below to match excursions to your ship's timetable, then choose the option that fits your hours ashore."
      ctaHref="/bergen-shore-excursions"
      ctaButtonLabel="View tour details"
    >
      <section>
        <h2>Why Bergen is ideal for cruise shore excursions</h2>
        <p>
          Bergen combines a UNESCO-listed harbour city with immediate access to
          Osterfjord and the Mostraumen strait. Cruise passengers step off near
          Vågen and can reach Bryggen, fjord cruise quays, and Fløibanen within
          minutes — less transfer time, more time for the experiences that matter.
        </p>
        <p>
          Before booking, read our{" "}
          <Link href="/bergen-port-guide">Bergen port guide</Link> for walking
          distances from your berth and use the Cruise Smart Planner below.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Fjord Cruise to Mostraumen — headline scenic tour</h2>
        <p>
          The Mostraumen cruise is the signature Bergen shore excursion for
          passengers who want fjord drama without a full-day expedition. Modern
          sightseeing vessels sail from Zachariasbryggen into steep-walled
          Osterfjord scenery, waterfalls, and the narrow Mostraumen strait.
        </p>
        <ul>
          <li>Approx. 3 hours 30 minutes round trip from central harbour</li>
          <li>Easy activity level on a catamaran-style fjord vessel</li>
          <li>Best for first-time visitors with 6+ hours in port</li>
          <li>Allow 45 minutes before all aboard after disembarkation</li>
        </ul>
        <p>
          <Link href="/excursions/fjord-cruise-to-mostraumen">
            View Mostraumen fjord cruise details
          </Link>
        </p>
      </section>

      <section>
        <h2>Best of Bergen with Funicular Railway</h2>
        <p>
          Want city culture and mountain views in one booking? This guided tour
          covers Bryggen, Vågen harbour, Bergenhus Fortress exterior, and a
          Fløibanen ride to Mount Fløyen for panoramic outlooks over the city
          and surrounding fjords.
        </p>
        <p>
          <Link href="/excursions/bergen-funicular-railway">
            View funicular city tour details
          </Link>
        </p>
      </section>

      <section>
        <h2>Bergen Walking Tour — explore the city on foot</h2>
        <p>
          The walking tour is our top pick for shorter port calls. Guides cover
          Bryggen, Vågen harbour, the Fish Market, Bergenhus Fortress exterior,
          and colourful Hanseatic streets in around two hours.
        </p>
        <p>
          <Link href="/excursions/bergen-walking-tour">
            View walking tour details
          </Link>
        </p>
      </section>

      <section>
        <h2>Mount Fløyen and private sightseeing</h2>
        <p>
          Mount Fløyen viewpoint tours focus on the Fløibanen funicular and
          summit terraces — ideal for photography and easy sightseeing. Private
          Bergen touring suits longer port days when families or small groups
          want flexible pacing through Bryggen, harbour viewpoints, and historic
          districts.
        </p>
        <p>
          <Link href="/excursions/mount-floyen-viewpoint">Mount Fløyen tour</Link>
          {" · "}
          <Link href="/excursions/private-bergen-sightseeing">
            Private sightseeing
          </Link>
        </p>
      </section>

      <section>
        <h2>How to choose the right excursion for your port time</h2>
        <ul>
          <li>
            <strong>Under 4 hours:</strong> Bergen walking tour or Bryggen and
            harbour self-exploration
          </li>
          <li>
            <strong>4–6 hours:</strong> Walking tour, Mount Fløyen, or funicular
            city tour if timings fit
          </li>
          <li>
            <strong>6–10 hours:</strong> Mostraumen cruise, funicular city tour,
            or walking tour
          </li>
          <li>
            <strong>10+ hours:</strong> Combine fjord cruise with city touring,
            private sightseeing, or walking tour plus Fløyen
          </li>
        </ul>
        <p>
          Read{" "}
          <Link href="/is-bergen-worth-visiting">is Bergen worth visiting?</Link>{" "}
          for an honest overview of what fits your cruise day.
        </p>
      </section>
    </ContentPage>
  );
}
