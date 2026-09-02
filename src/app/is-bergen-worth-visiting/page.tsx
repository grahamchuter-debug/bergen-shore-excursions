import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Bergen Worth Visiting for Cruise Passengers?",
  description:
    "Honest guide for cruise guests: is Bergen worth visiting? Fjord scenery, Bryggen culture, port time needed, and when to stay on board.",
  path: "/is-bergen-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Bergen port guide", href: "/bergen-port-guide" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
  { label: "Best time to visit", href: "/best-time-to-visit-bergen" },
] as const;

const faqs = [
  {
    question: "Is Bergen worth it for a short cruise port call?",
    answer:
      "Yes if you have at least four hours ashore. A walking tour or harbour stroll delivers authentic Norway city and wharf culture quickly. With six or more hours, add the Mostraumen fjord cruise for the full Bergen experience.",
  },
  {
    question: "What makes Bergen special compared with other Norwegian ports?",
    answer:
      "Bergen pairs a UNESCO-listed Hanseatic city with immediate access to Osterfjord, you get both urban culture and signature fjord scenery without long coach transfers from the pier.",
  },
  {
    question: "When is Bergen not worth leaving the ship?",
    answer:
      "If your port time is under three hours, weather is severe, or you have mobility limits without a suitable tour, staying aboard may be safer. Very tight schedules rarely fit a Mostraumen cruise comfortably.",
  },
  {
    question: "Is Bergen crowded when cruise ships visit?",
    answer:
      "Summer can be busy when multiple large ships call the same day. Go ashore early, pre-book excursions, and use our port guide to avoid peak queues near Bryggen and Torget.",
  },
] as const;

export default function IsBergenWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Bergen Worth Visiting?"
      lead="An honest look at whether Bergen deserves your hours ashore: harbour culture around Bryggen, Fløyen views, and what different port lengths realistically allow."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Short answer: yes for most cruise itineraries</h2>
        <p>
          Bergen is one of the strongest mainstream cruise ports on the
          Norwegian coast. You get a real city with restaurants, museums and
          harbour life, plus quick access to fjord scenery. For most guests,
          going ashore is worthwhile.
        </p>
      </section>

      <section>
        <h2>What you gain by going ashore</h2>
        <ul>
          <li>Mostraumen fjord cruises through Osterfjord mountain scenery</li>
          <li>Bryggen, a UNESCO World Heritage Hanseatic wharf</li>
          <li>Compact walking routes ideal for guided and independent exploration</li>
          <li>Fløibanen funicular views over the city and surrounding fjords</li>
          <li>Fish Market atmosphere at Torget beside Vågen harbour</li>
        </ul>
      </section>

      <section>
        <h2>How much port time you really need</h2>
        <ul>
          <li>
            <strong>Under 4 hours:</strong> Walking tour or Bryggen self-tour , 
            still rewarding
          </li>
          <li>
            <strong>4–6 hours:</strong> Walking tour, Mount Fløyen, or funicular
            city tour
          </li>
          <li>
            <strong>6–10 hours:</strong> Mostraumen cruise or full funicular
            sightseeing tour
          </li>
          <li>
            <strong>10+ hours:</strong> Combine fjord cruise with city touring
            or private sightseeing
          </li>
        </ul>
      </section>

      <section>
        <h2>When staying on board makes sense</h2>
        <p>
          Extremely short port calls, severe weather, or mobility constraints
          without a suitable tour can make staying aboard the safer choice. If
          you have already visited Bergen on a previous cruise, you might
          prioritise rest, though a second visit rewards guests who missed
          Fløyen or the Mostraumen sailing the first time.
        </p>
      </section>

      <section>
        <h2>Plan your visit</h2>
        <p>
          Use our{" "}
          <Link href="/bergen-shore-excursions">shore excursions hub</Link> and{" "}
          <Link href="/one-day-in-bergen">one day in Bergen</Link> guide to
          match activities to your ship&apos;s schedule.
        </p>
      </section>
    </ContentPage>
  );
}
