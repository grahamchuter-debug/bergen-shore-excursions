import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import {
  ExploreNorwegianPorts,
  explorePortsFromBergen,
} from "@/components/explore-norwegian-ports";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { bergenTourCards, bergenTourListItems } from "@/lib/bergen-tours";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Bergen Shore Excursions | Cruise Port Tours & Fjord Guides for Passengers",
  description:
    "Plan your Bergen cruise port day with Mostraumen fjord cruises, walking tours, funicular sightseeing, port guides, and return-to-ship friendly shore excursion advice.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "Cruise passenger friendly", accent: false },
  { label: "Bergen fjord specialists", accent: false },
] as const;

const popularTours = bergenTourListItems;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Bergen for cruise passengers?",
    answer:
      "The Mostraumen fjord cruise is the signature scenic choice for first-time visitors with six or more hours ashore. For shorter port calls, the Bergen walking tour covers Bryggen, Vågen harbour, and the Fish Market within return-to-ship friendly timings.",
  },
  {
    question: "How far is the Bergen cruise port from Bryggen and fjord cruise departures?",
    answer:
      "Most cruise berths sit within a 10–20 minute walk of Bryggen, Torget, and Zachariasbryggen where Mostraumen sailings depart. Confirm your meeting point on your voucher the night before.",
  },
  {
    question: "Can I combine a walking tour and fjord cruise on the same Bergen port day?",
    answer:
      "Yes when your ship stays at least eight to ten hours. Many guests choose one headline excursion — either the Mostraumen cruise or the funicular city tour — and add a short walk or Fløibanen ride if time allows. Always keep 30–45 minutes buffer before all aboard.",
  },
  {
    question: "Should I book Bergen shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our Cruise Smart Planner, confirm all-aboard on your cruise app, and build buffer before the gangway closes.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(popularTours),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            Bergen Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Choose shore excursions that fit your port time — fjord cruises,
            city walks, and funicular views with return-to-ship friendly planning.
          </p>

          <a href="#tours" className="btn-primary px-8 py-4 text-base sm:text-lg">
            View Excursions
          </a>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Explore Bergen Like a Cruise Insider
          </h2>

          <p className="text-base leading-8 text-slate-700 sm:text-lg">
            Welcome to Bergen Shore Excursions — independent planning for
            cruise passengers calling at Norway&apos;s gateway to the fjords.
            Compare Mostraumen fjord cruises, Bryggen walking tours, Fløibanen
            viewpoint trips, and port-day tools built around your ship&apos;s
            timetable so you can return before all aboard.
          </p>
        </section>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
              Popular Bergen Tours
            </h2>
            <p className="mb-4 max-w-2xl text-slate-600">
              Cruise-friendly excursions that depart near central Bergen and
              fit typical port-day schedules.
            </p>
            <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
              Every excursion featured is selected to fit comfortably within a
              typical Bergen cruise port call.
            </p>

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
            <p className="mt-8">
              <Link
                href="/excursions"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
              >
                View all Bergen excursions
              </Link>
            </p>
          </div>
        </section>

        <section id="why-bergen" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why Bergen is ideal for cruise shore excursions
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Bergen packs UNESCO-listed Bryggen, a working harbour, and quick
              access to signature fjord scenery into one compact cruise port.
              Most berths sit within walking distance of Torget, excursion
              quays, and Fløibanen — so you spend less time in transfers and
              more time on the experiences that define a Norwegian port day.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Headline Mostraumen fjord cruises depart from central harbour quays</li>
              <li>Bryggen, Fish Market, and Bergenhus are walkable from most cruise piers</li>
              <li>Fløibanen delivers mountain views without a full-day inland transfer</li>
              <li>Match excursions to your actual hours ashore with our Cruise Smart Planner</li>
            </ul>
          </div>
        </section>

        <section id="planner" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
          </div>
        </section>

        <ExploreNorwegianPorts config={explorePortsFromBergen} />

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Bergen cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Bergen port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse shore excursions, read the port guide, and use the Cruise
              Smart Planner — everything built for cruise passengers who need
              to return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/bergen-port-guide" className="btn-secondary sm:text-base">
                Bergen Port Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
