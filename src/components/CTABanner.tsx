import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function CTABanner() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-on-image text-xs font-semibold tracking-[0.2em] text-gold-300 uppercase">
          Let&apos;s Create Your Soundtrack
        </p>
        <h2 className="text-on-image mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Ready to book your Lake Tahoe wedding DJ?
        </h2>
        <p className="text-on-image mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
          Tell us about your date, venue, and vision. We&apos;ll help you choose
          the perfect package and bring the energy your celebration deserves.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
          >
            Get a Quote
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}