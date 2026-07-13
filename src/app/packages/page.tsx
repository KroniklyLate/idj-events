import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { PackageCard } from "@/components/PackageCard";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  createPageMetadata,
  entertainmentAddOns,
  featuredVenues,
  heroImages,
  packages,
  trustSignals,
  vendorPartners,
} from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("packages");

function formatAddOnPrice(price: number | null, priceLabel?: string) {
  if (price == null) return priceLabel ?? "Ask for quote";
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function PackagesPage() {
  return (
    <PageBackground
      image={heroImages.packages.src}
      imageAlt={heroImages.packages.alt}
    >
      <PageHero
        eyebrow="Packages & Pricing"
        title="Find the perfect fit for your day"
        description="Clear hours, multi-zone audio, and production that scales from intimate receptions to full concert-quality celebrations. Additional hours and zones available."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.slug}
                className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)]"
              >
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          <p className="text-on-image mx-auto mt-10 max-w-2xl text-center text-sm text-white">
            Additional hour: $300 · Additional sound zone: $300. One wedding per
            day. Setup and breakdown included.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Built for Tahoe"
            title="Outdoor-ready & fully insured"
            description="Mountain venues, beaches, and estate celebrations — we come prepared for power, weather, and bi-state logistics."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="glass-panel w-full p-5 sm:w-[calc(50%-0.5rem)] sm:p-6 lg:w-[calc((100%-2rem)/3)]"
              >
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
            title="Upgrade your celebration"
            description="Photo booth, silent disco, monogram lighting, after-party coverage, and more — priced clearly so you can plan with confidence."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {entertainmentAddOns.map((addOn) => (
              <div
                key={addOn.name}
                className="glass-panel-soft flex w-full flex-col gap-2 px-5 py-5 sm:w-[calc(50%-0.5rem)] sm:flex-row sm:items-start sm:justify-between sm:gap-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-navy-900">{addOn.name}</p>
                  {addOn.description && (
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {addOn.description}
                    </p>
                  )}
                </div>
                <p className="shrink-0 font-display text-lg font-bold text-lake-700">
                  {formatAddOnPrice(addOn.price, addOn.priceLabel)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vendor Partners"
            title="All-in-one coordination"
            description="Need beauty, photo, catering, or transportation? We coordinate trusted partners so you can keep planning simple."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {vendorPartners.map((service) => (
              <div
                key={service}
                className="glass-panel-soft flex w-full items-start gap-3 px-5 py-4 sm:w-[calc(50%-0.5rem)] lg:w-[calc((100%-2rem)/3)]"
              >
                <span className="mt-0.5 font-bold text-gold-600" aria-hidden="true">
                  +
                </span>
                <span className="text-sm text-slate-800 sm:text-base">{service}</span>
              </div>
            ))}
          </div>

          <p className="text-on-image mx-auto mt-10 max-w-2xl text-center text-sm text-white">
            Partner services are coordinated through I DJ Events. Mention your
            interests when you{" "}
            <Link href="/contact" className="font-semibold underline">
              request a quote
            </Link>{" "}
            and we&apos;ll connect you with the right team.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Venues We Know"
            title="From resorts to private estates"
            description="Experience across Tahoe’s most requested wedding settings — and countless private homes and lakeside properties."
          />
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {featuredVenues.map((venue) => (
              <li
                key={venue}
                className="glass-panel-soft w-full px-4 py-3 text-center text-sm font-medium text-slate-800 sm:w-[calc(50%-0.375rem)] lg:w-[calc((100%-2.25rem)/4)]"
              >
                {venue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}
