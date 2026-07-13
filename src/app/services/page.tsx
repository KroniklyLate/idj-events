import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  createPageMetadata,
  entertainmentAddOns,
  featuredVenues,
  heroImages,
  processSteps,
  services,
  trustSignals,
  vendorPartners,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("services");

function formatAddOnPrice(price: number | null, priceLabel?: string) {
  if (price == null) return priceLabel ?? "Ask for quote";
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function ServicesPage() {
  return (
    <PageBackground
      image={heroImages.services.src}
      imageAlt={heroImages.services.alt}
    >
      <PageHero
        eyebrow="Our Services"
        title="More than music"
        description="I DJ Events is your partner for sound, hosting, lighting, and ceremony — designed for the unique rhythm of Tahoe weddings, with multicultural playlists for every guest list."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-panel grid items-start gap-6 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-2xl text-white">
                  {service.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-navy-900">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="A clear path from inquiry to last dance"
            description="Couples love vendors who communicate. Here’s exactly how we plan and deliver your wedding day."
          />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item) => (
              <li key={item.step} className="glass-panel flex flex-col p-5 sm:p-6">
                <span className="font-display text-2xl font-bold text-gold-600">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tahoe Ready"
            title="Prepared for outdoor & multi-zone days"
            description="Battery ceremony audio, silent generators, backup gear, and CA + NV insurance — so destination couples can relax."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="glass-panel p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {signal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Entertainment Add-Ons"
            title="Production extras with clear pricing"
            description="Browse popular upgrades — full details and package tiers live on our packages page."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {entertainmentAddOns.slice(0, 6).map((addOn) => (
              <div key={addOn.name} className="glass-panel-soft px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-navy-900">{addOn.name}</p>
                  <p className="shrink-0 text-sm font-bold text-lake-700">
                    {formatAddOnPrice(addOn.price, addOn.priceLabel)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/packages" className="link-on-image text-sm">
              See full add-on menu & pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vendor Partners"
            title="All-in-one event solutions"
            description="Round out your wedding team with trusted partners — beauty, photo, catering, transportation, and more, coordinated through I DJ Events."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vendorPartners.map((service) => (
              <div
                key={service}
                className="glass-panel-soft flex items-start gap-3 px-5 py-4"
              >
                <span className="mt-0.5 font-bold text-gold-600" aria-hidden="true">
                  +
                </span>
                <span className="text-sm text-slate-800 sm:text-base">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-on-image mx-auto mt-10 max-w-2xl text-center text-sm text-white">
            Mention your interests when you request a quote and we&apos;ll connect
            you with the right partners.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Venues"
            title="Experience across the basin"
            description="From landmark resorts to private estates — we know Tahoe logistics."
          />
          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {featuredVenues.map((venue) => (
              <li
                key={venue}
                className="glass-panel-soft rounded-full px-4 py-2 text-sm font-medium text-slate-800"
              >
                {venue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-panel px-6 py-10 text-center sm:px-10">
            <h3 className="font-display text-2xl font-semibold text-navy-900">
              Not sure which services you need?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-slate-700">
              Share your venue, guest count, and vision — we&apos;ll recommend the
              right package and services for your celebration.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400"
            >
              Get Personalized Recommendations
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}
