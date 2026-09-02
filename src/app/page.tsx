import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import {
  bergenScheduleIntegrity,
} from "@/lib/bergen-schedules";
import { bergenTourCards, bergenTourListItems } from "@/lib/bergen-tours";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";

const pageMeta = {
  title: "Bergen Shore Excursions | Cruise Port Day Planning",
  description:
    "Your cruise ship is calling at Bergen. Compare city walks, Fløyen views and Mostraumen fjord options, check published ship schedules, and plan a realistic day ashore.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this the right site if my ship calls at Bergen?",
    answer:
      "Yes. This is an independent Bergen cruise-port planning site. It helps you understand the harbour day, check published ship calls and explore excursion ideas. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I stay in Bergen or take a fjord excursion?",
    answer:
      "It depends on time ashore and what you want from the day. Bryggen and Fløyen suit a city focus. Mostraumen is the main fjord option from Bergen. Use the city-or-fjord guide and your ship schedule before deciding.",
  },
  {
    question: "How far is the cruise port from Bryggen?",
    answer:
      "Most cruise berths are a short walk from Bryggen, Torget and the harbour. Exact walking time depends on your berth. See the Bergen port guide for practical detail.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const featured = bergenTourCards.slice(0, 3);
  const remaining = bergenTourCards.slice(3);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(bergenTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your cruise ship is calling at Bergen. What should you do with the day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Independent planning for a harbour city and fjord gateway: Bryggen,
            Fløyen, Mostraumen and published ship schedules through 2027.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/excursions"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Bergen excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Your day in Bergen</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stay in the city, or head into the fjords?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Most cruise passengers face this choice first. Neither is
              automatically better. Hours ashore, weather and pace decide it.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Stay in the city
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bryggen, the harbour, Fish Market and Fløibanen to Mount Fløyen.
                  Walkable from most berths when time is limited.
                </p>
                <Link
                  href="/bergen-city-or-fjord"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  City day guidance
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Head into the fjords
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Mostraumen and Osterfjord are the classic scenic sailings from
                  Bergen. Allow enough time for boarding, the cruise and your
                  return buffer.
                </p>
                <Link
                  href="/excursions/fjord-cruise-to-mostraumen"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Mostraumen fjord cruise
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Bergen
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {bergenScheduleIntegrity.total} published Bergen calls from{" "}
              {bergenScheduleIntegrity.firstDate} to{" "}
              {bergenScheduleIntegrity.lastDate}. Arrival and departure times
              shape what is realistic ashore.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Bergen ship schedule
              </Link>
              <Link
                href="/bergen-city-or-fjord"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Then decide city or fjord
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Bergen ideas that match a cruise day
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Genuine existing options: fjord, city, panoramic and private.
              Durations are approximate. Always keep a return buffer.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featured.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
            {remaining.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {remaining.map((tour) => (
                  <TourCard key={tour.href} {...tour} />
                ))}
              </div>
            ) : null}
            <p className="mt-8">
              <Link href="/excursions" className="btn-outline-dark">
                View all excursions
              </Link>
              {" · "}
              <Link href="/bergen-shore-excursions" className="content-link">
                Shore excursions guide
              </Link>
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Bergen?</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Practical guides for a short call
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  href: "/bergen-port-guide",
                  title: "Port guide",
                  text: "Where ships arrive, walks to Bryggen and how berth location affects the day.",
                },
                {
                  href: "/one-day-in-bergen",
                  title: "One day in Bergen",
                  text: "Conditional planning for short, medium and longer port calls.",
                },
                {
                  href: "/is-bergen-worth-visiting",
                  title: "Is Bergen worth visiting?",
                  text: "An honest take based on time ashore and what you want from Norway.",
                },
              ].map((item) => (
                <li key={item.href} className="border-t border-[var(--border-light)] pt-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                  >
                    Read guide
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="planner"
          className="scroll-mt-24 border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planner</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Match options to your hours ashore
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Enter your arrival and departure times for a simple fit guide. This
              is planning help, not a booking engine or guarantee.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="section-eyebrow">Return to ship</p>
                <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Keep a realistic buffer
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Independent days ashore work when timing is honest: walk back
                  from the harbour, queue for Fløibanen, or return from a fjord
                  sailing. Build margin before all aboard and confirm times on
                  your cruise app.
                </p>
              </div>
              <div className="border border-[var(--border-light)] bg-surface-muted p-6 sm:p-8">
                <p className="section-eyebrow">Norway network</p>
                <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900">
                  Cruising other Norwegian ports too?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  For national schedules and multi-port planning, use Norway
                  Shore Excursions. This site stays focused on the Bergen day.
                </p>
                <a
                  href={siteConfig.nationalAuthorityUrl}
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Norway Shore Excursions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              Frequently asked questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-[var(--border-light)] pb-6">
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="hero-dark bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Need a clearer Bergen plan?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85">
              Start with your ship schedule and the city-or-fjord guide. For
              planning questions, use the contact page.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/bergen-city-or-fjord" className="btn-primary">
                City or fjord?
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
