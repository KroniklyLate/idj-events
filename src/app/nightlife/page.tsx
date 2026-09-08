import type { Metadata } from "next";
import Link from "next/link";
import { KroniklyLateSitePreview } from "@/components/KroniklyLateSitePreview";
import { PageBackground } from "@/components/PageBackground";
import { createPageMetadata, heroImages, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("nightlife");

export default function NightlifePage() {
  return (
    <PageBackground
      image={heroImages.calendar.src}
      imageAlt={heroImages.calendar.alt}
    >
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-on-image text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase sm:text-sm">
            Nightlife &amp; Karaoke
          </p>
          <h1 className="text-on-image mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Nightlife bookings live on Kronikly Late.
          </h1>
          <p className="text-on-image mx-auto mt-4 max-w-xl text-base leading-relaxed text-white sm:text-lg">
            I DJ Events is the wedding side of the brand — ceremonies, receptions,
            and formal packages. For clubs, karaoke, residencies, and late-night
            sets, book through{" "}
            <span className="font-semibold text-gold-300">{siteConfig.nightlifeName}</span>.
          </p>
          <p className="text-on-image mx-auto mt-3 max-w-lg text-sm text-white/80">
            Same DJ. Clear paths so you get the right quote and planning flow.
            Preview the nightlife site below — click to open it.
          </p>
        </div>

        <div className="mb-12">
          <KroniklyLateSitePreview />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.nightlifeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-10 py-4 text-lg font-semibold text-navy-950 transition hover:bg-gold-400 sm:w-auto"
          >
            Book Nightlife
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-white/15 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 sm:w-auto"
          >
            Book Wedding Instead
          </Link>
        </div>

        <p className="text-on-image mt-12 text-center text-sm text-white/70">
          Planning a ceremony or reception?{" "}
          <Link
            href="/packages"
            className="font-semibold text-gold-300 underline underline-offset-2 hover:text-gold-400"
          >
            View wedding packages
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-semibold text-gold-300 underline underline-offset-2 hover:text-gold-400"
          >
            request a quote
          </Link>
          .
        </p>
      </section>
    </PageBackground>
  );
}
