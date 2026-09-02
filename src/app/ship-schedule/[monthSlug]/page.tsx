import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getBergenEntriesForMonthKey,
  getBergenMonthKeysWithCalls,
  getBergenMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/bergen-schedules";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getBergenMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Bergen Cruise Schedule: ${label}`,
    description: `Published cruise ship calls in Bergen for ${label}. Check arrival and departure times, then plan city or fjord options that fit your hours ashore.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function BergenShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getBergenEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getBergenMonthSummaries().filter((m) => m.slug !== monthSlug);

  return (
    <ContentPage
      title={`Bergen cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Bergen plan.`}
      heroImage={siteImages.waterfront}
      heroImageAlt={imageAlts.waterfront}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Bergen cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Bergen port day"
      ctaText="Use your hours ashore to choose between harbour walking, Fløyen views or a Mostraumen fjord cruise."
      ctaHref="/one-day-in-bergen"
      ctaButtonLabel="Plan your Bergen day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "City or fjord?", href: "/bergen-city-or-fjord" },
        { label: "Port guide", href: "/bergen-port-guide" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, decide whether to stay
          in the city or head into Osterfjord. These pages help without inventing
          exact tour-fit guarantees from arrival times alone.
        </p>
        <ul>
          <li>
            <Link href="/bergen-city-or-fjord">Bergen city or fjord?</Link>
          </li>
          <li>
            <Link href="/excursions">Bergen excursion options</Link>
          </li>
          <li>
            <Link href="/bergen-port-guide">Bergen cruise port guide</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Bergen months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
