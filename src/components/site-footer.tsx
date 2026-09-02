import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const planLinks = [
  { label: "Excursions", href: "/excursions" },
  { label: "Shore excursions guide", href: "/bergen-shore-excursions" },
  { label: "City or fjord?", href: "/bergen-city-or-fjord" },
  { label: "One day in Bergen", href: "/one-day-in-bergen" },
  { label: "Port guide", href: "/bergen-port-guide" },
  { label: "Ship schedule", href: "/ship-schedule" },
] as const;

const guideLinks = [
  { label: "Is Bergen worth visiting?", href: "/is-bergen-worth-visiting" },
  { label: "Best time to visit", href: "/best-time-to-visit-bergen" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-soft)]">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <section className="border-t border-white/10 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-6 sm:py-12">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            Ready to shape your Bergen port day?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Check your ship times, decide city or fjord, then explore excursion
            options that match your hours ashore.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={siteConfig.shoreExcursionsPath} className="btn-primary">
              Explore Bergen excursions
            </Link>
            <Link href={siteConfig.schedulePath} className="btn-secondary">
              Check ship schedule
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 bg-navy-deep text-slate-300">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-white transition hover:text-white/90"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                Independent Bergen cruise-port planning for harbour walks,
                Fløyen views and Osterfjord days. Not affiliated with any cruise
                line or port authority.
              </p>
              {siteConfig.contactEmailVerified ? (
                <p className="mt-3 text-sm text-white/65">
                  Planning questions:{" "}
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-white/85 underline-offset-2 hover:underline"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </p>
              ) : null}
              <p className="mt-4 text-sm text-white/55">
                Cruising elsewhere in Norway?{" "}
                <a
                  href={siteConfig.nationalAuthorityUrl}
                  className="text-white/80 underline-offset-2 hover:underline"
                >
                  Norway Shore Excursions
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:col-span-1 sm:grid-cols-2 lg:col-span-8">
              <FooterColumn title="Plan Bergen">
                <ul className="space-y-2">
                  {planLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Guides & legal">
                <ul className="space-y-2">
                  {guideLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-5 text-white/45">
            © {new Date().getFullYear()} {siteConfig.copyrightEntity}. Independent
            cruise-port planning for Bergen.
          </p>
        </div>
      </div>
    </footer>
  );
}
