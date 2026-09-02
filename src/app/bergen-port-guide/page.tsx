import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Bergen Cruise Port Guide",
  description:
    "Bergen cruise port guide for passengers: pier location, walking distances to Bryggen, facilities, tender info, and tips to return before all aboard.",
  path: "/bergen-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
  { label: "Best time to visit", href: "/best-time-to-visit-bergen" },
] as const;

const faqs = [
  {
    question: "How far is the Bergen cruise port from Bryggen?",
    answer:
      "Most cruise berths are 10–20 minutes on foot from Bryggen, Torget, and the Fish Market. Signage leads from the waterfront to tourist information and excursion meeting points.",
  },
  {
    question: "Do cruise ships tender in Bergen or dock at the pier?",
    answer:
      "Most vessels dock at Bergen's main cruise and harbour facilities close to the city centre. Tender operations are uncommon but possible, check your cruise app on the morning of arrival.",
  },
  {
    question: "Are there restrooms and Wi-Fi near the Bergen cruise port?",
    answer:
      "Yes. Restrooms, cafés, and visitor services sit around Vågen, Torget, and Bergen Tourist Information. Free Wi-Fi is available in much of the city centre, though speeds vary on busy turnaround days.",
  },
  {
    question: "How early should cruise passengers return to the ship in Bergen?",
    answer:
      "Plan to be back at the gangway at least 30–45 minutes before all aboard. Queues at the Fish Market, fjord cruise returns, and security screening can eat into that buffer on peak summer days.",
  },
] as const;

export default function BergenPortGuidePage() {
  return (
    <ContentPage
      title="Bergen Port Guide for Cruise Passengers"
      lead="Practical guidance for Bergen cruise port: pier location, walking routes, facilities, and how to reach shore excursions without losing port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Where cruise ships dock in Bergen</h2>
        <p>
          Bergen is one of Norway&apos;s busiest cruise hubs with deep-water
          berths near the city centre. Large ships typically dock at facilities
          close to Vågen harbour, with Bryggen, Torget, and Mostraumen cruise
          departures within walking distance of most gangways.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before
          arrival. Berth assignments can change when several vessels share the
          port on the same day.
        </p>
      </section>

      <section>
        <h2>Walking from the pier to key locations</h2>
        <ul>
          <li>
            <strong>Bryggen UNESCO wharf:</strong> often 10–15 minutes on foot
          </li>
          <li>
            <strong>Torget Fish Market:</strong> typically 10–20 minutes from
            main cruise berths
          </li>
          <li>
            <strong>Zachariasbryggen (Mostraumen cruises):</strong> beside
            Torget, walkable from most piers
          </li>
          <li>
            <strong>Fløibanen lower station:</strong> roughly 15–20 minutes
            through the city centre
          </li>
          <li>
            <strong>Bergenhus Fortress area:</strong> about 15 minutes along the
            harbour promenade
          </li>
        </ul>
      </section>

      <section>
        <h2>Facilities near the cruise port</h2>
        <p>
          Tourist information, ATMs, pharmacies, and cafés cluster around
          Vågen and Torget. The Fish Market area offers restrooms, food stalls,
          and shelter on wet days. Most excursion operators meet guests at
          signed locations near Bryggen or the Fish Market, check your voucher
          for the exact quay or street corner.
        </p>
      </section>

      <section>
        <h2>Getting to shore excursions on time</h2>
        <p>
          Disembark as early as your cruise line allows on busy port days.
          Mostraumen sailings and guided walking tours operate to fixed
          schedules, late arrival at the meeting point can mean forfeiting your
          ticket. Build 30–45 minutes before all aboard on the return leg.
        </p>
        <p>
          Compare tours on our{" "}
          <Link href="/bergen-shore-excursions">shore excursions hub</Link> and
          use the{" "}
          <Link href="/bergen-shore-excursions">Cruise Smart Planner</Link> to
          match activities to your hours ashore.
        </p>
      </section>

      <section>
        <h2>Practical tips for Bergen port days</h2>
        <ul>
          <li>Carry Norwegian kroner or a contactless card for market stalls and cafés</li>
          <li>Pack a light rain layer. Bergen weather changes quickly</li>
          <li>Wear sturdy shoes for Bryggen cobblestones</li>
          <li>Monitor your cruise app for all-aboard updates throughout the day</li>
        </ul>
      </section>
    </ContentPage>
  );
}
