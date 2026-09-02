import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Bergen City or Fjord from a Cruise Ship?",
  description:
    "Decide whether to spend your Bergen cruise day in the city around Bryggen and Fløyen, or take a Mostraumen fjord excursion, based on time ashore and pace.",
  path: "/bergen-city-or-fjord",
});

const faqs = [
  {
    question: "Is Mostraumen realistic on a short Bergen call?",
    answer:
      "Only if you have enough hours for boarding, the sailing and a clear return buffer. If your call is short, prioritise the harbour and Bryggen instead.",
  },
  {
    question: "Can I do Bryggen and Fløyen without a fjord cruise?",
    answer:
      "Yes. Many passengers stay in the city: walk Bryggen and the harbour, then take Fløibanen if queues and timing allow.",
  },
  {
    question: "Does rain mean I should skip Bergen?",
    answer:
      "Not necessarily. Bergen is often wet. Covered harbour walks, Bryggen alleys and flexible indoor pauses still work. A fjord sailing can feel exposed in poor weather, so check conditions and your own comfort.",
  },
] as const;

export default function BergenCityOrFjordPage() {
  return (
    <ContentPage
      title="Bergen city or fjord?"
      lead="The main cruise-day decision in Bergen: stay around the harbour and Fløyen, or sail into Osterfjord toward Mostraumen."
      heroImage={siteImages.mostraumenFjord}
      heroImageAlt={imageAlts.mostraumenFjord}
      pagePath="/bergen-city-or-fjord"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "City or fjord?" },
      ]}
      faqs={faqs}
      ctaTitle="Check your hours, then choose"
      ctaText="Look up your ship call, then explore city or fjord options that fit a realistic buffer."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check Bergen ship schedule"
      relatedLinks={[
        { label: "One day in Bergen", href: "/one-day-in-bergen" },
        { label: "Mostraumen fjord cruise", href: "/excursions/fjord-cruise-to-mostraumen" },
        { label: "Walking tour", href: "/excursions/bergen-walking-tour" },
        { label: "Mount Fløyen", href: "/excursions/mount-floyen-viewpoint" },
        { label: "Port guide", href: "/bergen-port-guide" },
      ]}
    >
      <section>
        <h2>Start with time, not a wishlist</h2>
        <p>
          Arrival, departure and all aboard set the shape of the day. A long call
          can support a fjord sailing. A shorter call usually favours the harbour
          and Bryggen.{" "}
          <Link href="/ship-schedule">Check your Bergen ship schedule</Link>{" "}
          before locking a plan.
        </p>
      </section>

      <section>
        <h2>Choose the city when</h2>
        <ul>
          <li>You have a shorter call and want less transfer risk</li>
          <li>Bryggen, the Fish Market and harbour atmosphere matter most</li>
          <li>You may add Fløibanen if queues look manageable</li>
          <li>Weather is unsettled and you want flexible short walks</li>
        </ul>
        <p>
          Useful next steps:{" "}
          <Link href="/excursions/bergen-walking-tour">walking tour</Link>,{" "}
          <Link href="/excursions/mount-floyen-viewpoint">Mount Fløyen</Link>, or{" "}
          <Link href="/excursions/bergen-funicular-railway">
            Best of Bergen with funicular
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Choose a fjord sailing when</h2>
        <ul>
          <li>You have enough hours for the full outing plus a return buffer</li>
          <li>Scenery is the priority over museum or shopping time</li>
          <li>You are comfortable committing to a fixed sailing window</li>
        </ul>
        <p>
          The main existing option on this site is the{" "}
          <Link href="/excursions/fjord-cruise-to-mostraumen">
            Mostraumen fjord cruise
          </Link>
          . Confirm meeting point, duration and latest return timing with the
          operator.
        </p>
      </section>

      <section>
        <h2>Combining both</h2>
        <p>
          Some longer calls can support a harbour morning and a scenic sailing, or
          a sailing plus a short walk. Do not assume a combination fits from the
          ship timetable alone. Check excursion duration and leave margin before
          all aboard.
        </p>
        <p>
          For a structured overview, see{" "}
          <Link href="/one-day-in-bergen">one day in Bergen</Link> and the{" "}
          <Link href="/bergen-shore-excursions">shore excursions guide</Link>.
        </p>
      </section>

      <section>
        <h2>Rain and wet-weather thinking</h2>
        <p>
          Bergen is often wet. That does not cancel a port day by itself. Pack a
          proper layer, favour short flexible walks when showers are heavy, and
          treat fjord sailings as weather-dependent comfort decisions rather than
          obligations.
        </p>
      </section>
    </ContentPage>
  );
}
