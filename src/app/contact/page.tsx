import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PageBackground } from "@/components/PageBackground";
import { PageHero } from "@/components/PageHero";
import { heroImages, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Request a quote for your Lake Tahoe wedding DJ. Call 775-233-6501 or email booking@idj.events.",
};

function ContactFormFallback() {
  return (
    <div className="glass-panel p-8 text-center text-slate-600">
      Loading form...
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageBackground
      image={heroImages.contact}
      imageAlt="Wooden pier on calm Lake Tahoe water at dusk with mountain reflections"
    >
      <PageHero
        eyebrow="Contact"
        title="Let's plan your celebration"
        description="Share your wedding details and we'll respond with availability, recommendations, and next steps."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-on-image font-display text-2xl font-semibold">
              Reach us directly
            </h2>
            <p className="text-on-image mt-3 text-white">
              Prefer to talk? Call or email — we&apos;re here to help you find
              the right package for your Tahoe wedding.
            </p>

            <div className="mt-8 space-y-6">
              <div className="glass-panel p-5">
                <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                  Phone
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 block font-display text-xl font-semibold text-navy-900 hover:text-lake-700"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="glass-panel p-5">
                <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                  Email
                </p>
                <a
                  href={siteConfig.emailHref}
                  className="mt-2 block font-display text-xl font-semibold text-navy-900 hover:text-lake-700"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="glass-panel p-5">
                <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
                  Service Area
                </p>
                <p className="mt-2 text-navy-900">{siteConfig.serviceArea}</p>
                <p className="mt-1 text-sm text-slate-600">{siteConfig.travelNote}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </PageBackground>
  );
}