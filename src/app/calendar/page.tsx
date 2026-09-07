import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { PublicCalendar } from "@/components/PublicCalendar";
import {
  fetchCalendarEvents,
  monthBounds,
  OPS_CALENDAR_ORIGIN,
  type CalendarEvent,
} from "@/lib/calendar";
import {
  createPageMetadata,
  heroImages,
  siteConfig,
} from "@/lib/site-data";

export const revalidate = 120;

export const metadata: Metadata = createPageMetadata("calendar");

export default async function CalendarPage() {
  const now = new Date();
  const year = now.getFullYear();
  const monthIndex0 = now.getMonth();
  const { from, to } = monthBounds(year, monthIndex0);

  let events: CalendarEvent[] = [];
  let loadError: string | null = null;
  try {
    events = await fetchCalendarEvents({
      from,
      to,
      site: "idj",
      origin: OPS_CALENDAR_ORIGIN,
    });
  } catch {
    loadError = "The live calendar could not be reached. Try again in a moment.";
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "I DJ Events calendar",
    url: `${siteConfig.siteUrl}/calendar`,
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    subEvent: events.slice(0, 20).map((event) => ({
      "@type": "Event",
      name: event.title,
      startDate: event.date,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: event.venue_name
        ? {
            "@type": "Place",
            name: event.venue_name,
            address: event.venue_address || undefined,
          }
        : undefined,
      description: event.blurb || undefined,
    })),
  };

  return (
    <PageBackground
      image={heroImages.calendar.src}
      imageAlt={heroImages.calendar.alt}
    >
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow="Calendar"
        title="Where to find us"
        description="Public karaoke nights, nightlife, and listed appearances. Private weddings stay off this page."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {loadError && events.length === 0 && (
            <div className="glass-panel mb-6 p-4 text-center text-sm text-slate-700">
              {loadError}
            </div>
          )}
          <PublicCalendar
            initialYear={year}
            initialMonthIndex0={monthIndex0}
            initialEvents={events}
            site="idj"
          />

          <div className="glass-panel mt-10 grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                Nightlife &amp; karaoke
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
                Kronikly Late
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Club nights, residencies, and karaoke live on the nightlife
                site — same public calendar, nightlife branding.
              </p>
              <a
                href={siteConfig.nightlifeUrl}
                className="mt-4 inline-flex rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                rel="noopener noreferrer"
              >
                Open kroniklylate.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                Book a wedding
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
                Private dates stay private
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Wedding bookings do not publish client names here. Check
                availability and request a quote on the contact page.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-gold-400"
              >
                Check a wedding date
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}
