import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { addOnServices, createPageMetadata, heroImages, services } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata("services");

export default function ServicesPage() {
  return (
    <PageBackground
      image={heroImages.services.src}
      imageAlt={heroImages.services.alt}
    >
      <PageHero
        eyebrow="Our Services"
        title="More than music"
        description="I DJ Events is your partner for sound, hosting, lighting, and ceremony — designed for the unique rhythm of Tahoe weddings."
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
            eyebrow="Third-Party Vendor Services"
            title="All-in-one event solutions"
            description="Round out your wedding team with trusted vendor partners — beauty, photo, catering, transportation, and more, coordinated through I DJ Events."
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
            Mention your interests when you request a quote and we&apos;ll connect
            you with the right partners.
          </p>
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