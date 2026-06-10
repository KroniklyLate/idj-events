import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { PackageCard } from "@/components/PackageCard";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { addOnServices, createPageMetadata, heroImages, packages } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("packages");

export default function PackagesPage() {
  return (
    <PageBackground
      image={heroImages.packages.src}
      imageAlt={heroImages.packages.alt}
    >
      <PageHero
        eyebrow="Packages & Pricing"
        title="Find the perfect fit for your day"
        description="Every package includes professional setup and breakdown. Upgrade anytime with add-on services for a true all-in-one celebration."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Add-On Services"
            title="All-in-one event solutions"
            description="Round out your wedding team with trusted add-on partners — beauty, photo, catering, transportation, and more."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOnServices.map((service) => (
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
            Add-on services are coordinated through I DJ Events. Mention your
            interests when you request a quote and we&apos;ll connect you with
            the right partners.
          </p>
        </div>
      </section>

      <CTABanner />
    </PageBackground>
  );
}