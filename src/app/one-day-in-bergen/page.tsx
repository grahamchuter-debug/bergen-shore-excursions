import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Bergen for Cruise Passengers",
  description:
    "Sample one-day Bergen itinerary for cruise guests with realistic timing for Mostraumen fjord cruises, walking tours, funicular views, and buffer to return to ship on time.",
  path: "/one-day-in-bergen",
  ogImage: siteImages.bryggen,
  ogImageAlt: imageAlts.bryggen,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "City or fjord?", href: "/bergen-city-or-fjord" },
  { label: "Shore excursions", href: "/excursions" },
  { label: "Bergen port guide", href: "/bergen-port-guide" },
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
  { label: "Best time to visit", href: "/best-time-to-visit-bergen" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Bergen with only four hours ashore?",
    answer:
      "Focus on the Bergen walking tour or a self-guided loop through Bryggen and Torget. Skip Mostraumen fjord cruises unless your operator confirms sailing times fit with a 45-minute return buffer.",
  },
  {
    question: "Can I combine a fjord cruise and walking tour in one Bergen day?",
    answer:
      "Yes if your ship stays at least eight to ten hours. Many guests run a morning walking tour, enjoy lunch near the Fish Market, then board an afternoon Mostraumen sailing, or reverse the order on early-arrival days.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Bergen?",
    answer:
      "Pre-booking is strongly recommended on peak summer days. Walk-up fjord tickets exist but popular departures sell out when several ships share the port.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30–45 minutes before the published all-aboard time. Harbour queues and late-running tours can compress that window quickly in Bergen.",
  },
] as const;

export default function OneDayInBergenPage() {
  return (
    <ContentPage
      title="One Day in Bergen"
      lead="A practical cruise-day plan for Bergen that combines fjord scenery, Bryggen culture, and funicular views with realistic timing so you can return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Bergen schedule</h2>
        <p>
          Every good Bergen day begins with arrival, departure and all-aboard
          times. Subtract at least 45 minutes from your last possible return to
          set a hard gangway deadline. Confirm times on your ship&apos;s app the
          morning you arrive. Browse published calls on the{" "}
          <Link href="/ship-schedule">Bergen ship schedule</Link>, then decide{" "}
          <Link href="/bergen-city-or-fjord">city or fjord</Link> before locking
          a plan. Not every call supports the same combination.
        </p>
      </section>

      <section>
        <h2>Morning: disembark early and confirm excursions</h2>
        <p>
          Walk from the pier to Bryggen, Torget, or your excursion meeting point
          as soon as you are cleared ashore. If you pre-booked a Mostraumen
          cruise or walking tour, confirm check-in times immediately. On peak
          days, popular sailings fill quickly when several ships are in port.
        </p>
      </section>

      <section>
        <h2>Sample itinerary: 6–10 hours in port</h2>
        <ol>
          <li>
            <strong>First hour:</strong> Disembark and walk to Zachariasbryggen
            or your tour meeting point
          </li>
          <li>
            <strong>Morning:</strong> Mostraumen fjord cruise (approx. 3.5
            hours) or Best of Bergen funicular tour (3–4 hours)
          </li>
          <li>
            <strong>Midday:</strong> Lunch at Torget Fish Market or a Bryggen café
          </li>
          <li>
            <strong>Afternoon:</strong> Short Bryggen stroll or Mount Fløyen if
            time and weather allow
          </li>
          <li>
            <strong>Final hour:</strong> Return to the cruise port with buffer
            before all aboard
          </li>
        </ol>
      </section>

      <section>
        <h2>Sample itinerary: under 6 hours in port</h2>
        <p>
          Prioritise the{" "}
          <Link href="/excursions/bergen-walking-tour">Bergen walking tour</Link>{" "}
          or independent exploration of Bryggen and Vågen harbour. Add a quick
          Fløibanen ride only if your all-aboard time allows one and a half to
          two hours plus return buffer.
        </p>
      </section>

      <section>
        <h2>Sample itinerary: 10+ hours in port</h2>
        <p>
          Combine the{" "}
          <Link href="/excursions/fjord-cruise-to-mostraumen">
            Mostraumen fjord cruise
          </Link>{" "}
          with afternoon{" "}
          <Link href="/excursions/private-bergen-sightseeing">
            private sightseeing
          </Link>{" "}
          or a walking tour plus{" "}
          <Link href="/excursions/mount-floyen-viewpoint">Mount Fløyen</Link>.
          Long port days reward early starts and pre-booked tickets.
        </p>
      </section>

      <section>
        <h2>End the day with margin</h2>
        <p>
          Keep the final 45 minutes free for the walk back to your gangway.
          Bergen&apos;s compact centre makes last-minute souvenir stops tempting
         , set a phone alarm for your personal return-to-port deadline.
        </p>
      </section>
    </ContentPage>
  );
}
