import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  bergenScheduleIntegrity,
  formatScheduleDate,
  getBergenMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/bergen-schedules";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Bergen Cruise Ship Schedule 2026–2027",
  description:
    "Published Bergen cruise ship calls for 2026 and 2027. Find your ship and date, then plan a realistic day ashore around Bryggen, Fløyen or Mostraumen.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getBergenMonthSummaries();
  const firstLabel = bergenScheduleIntegrity.firstDate
    ? formatScheduleDate(bergenScheduleIntegrity.firstDate)
    : "";
  const lastLabel = bergenScheduleIntegrity.lastDate
    ? formatScheduleDate(bergenScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Bergen cruise ship schedule"
      lead={`Published calls for Bergen from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then choose a city or fjord plan that fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Bergen port day"
      ctaText="Once you know your hours ashore, compare city walks with fjord options and return-to-ship buffers."
      ctaHref="/one-day-in-bergen"
      ctaButtonLabel="Plan your Bergen day"
      relatedLinks={[
        { label: "Bergen excursions", href: "/excursions" },
        { label: "City or fjord?", href: "/bergen-city-or-fjord" },
        { label: "Port guide", href: "/bergen-port-guide" },
        { label: "Shore excursions guide", href: "/bergen-shore-excursions" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {bergenScheduleIntegrity.total} Bergen calls,{" "}
          {bergenScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {bergenScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {bergenScheduleIntegrity.uniqueShips} ships. No 2028 data is published
          here.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Bergen</h2>
        <p>
          A short call may suit Bryggen and the harbour. A longer day can support
          Fløibanen or a Mostraumen fjord cruise. Always leave a clear buffer before
          all aboard.
        </p>
        <p>
          Continue to the{" "}
          <Link href="/bergen-city-or-fjord">city or fjord decision guide</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, or the{" "}
          <Link href="/bergen-port-guide">port guide</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
