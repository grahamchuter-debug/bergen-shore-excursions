import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import { bergenTourCards, bergenTourListItems } from "@/lib/bergen-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Bergen Excursions — All Shore Tours for Cruise Passengers",
  description:
    "Browse all Bergen shore excursions for cruise passengers: Mostraumen fjord cruise, funicular city tour, walking tour, Mount Fløyen, and private sightseeing.",
  path: "/excursions",
  ogImage: siteImages.mostraumenFjord,
  ogImageAlt: imageAlts.mostraumenFjord,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Shore excursions guide", href: "/bergen-shore-excursions" },
  { label: "Bergen port guide", href: "/bergen-port-guide" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best Bergen excursion for first-time cruise visitors?",
    answer:
      "The Fjord Cruise to Mostraumen is the headline scenic choice when you have six or more hours in port. For shorter calls, the Bergen Walking Tour covers Bryggen and the harbour in around two hours.",
  },
  {
    question: "How do I choose between Bergen shore excursions?",
    answer:
      "Match the tour to your hours ashore: walking tours and Mount Fløyen suit 4–6 hour calls; Mostraumen and the funicular city tour need longer port time. Use the Cruise Smart Planner on our shore excursions guide to compare options.",
  },
  {
    question: "Do all Bergen excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in central Bergen near Vågen harbour, Bryggen, or Torget — typically a 10–20 minute walk from most cruise berths.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(bergenTourListItems)]} />
      <ContentPage
        title="Bergen Excursions"
        lead="Every cruise-friendly shore excursion in Bergen — fjord cruises, city walks, funicular viewpoints, and private touring — with return-to-ship timing in mind."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing a Bergen tour?"
        ctaText="Use the shore excursions guide and Cruise Smart Planner to match tours to your ship's timetable."
        ctaHref="/bergen-shore-excursions"
        ctaButtonLabel="Open shore excursions guide"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {bergenTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    accent={tour.accent}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Bergen shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at Bergen.
            Fjord cruises need the longest port window; walking tours and Mount
            Fløyen fit shorter schedules. Private sightseeing suits families and
            small groups on extended port days.
          </p>
          <p>
            For port-day planning tools and tier-based recommendations, visit
            the{" "}
            <Link href="/bergen-shore-excursions">Bergen shore excursions guide</Link>{" "}
            and use the Cruise Smart Planner.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
