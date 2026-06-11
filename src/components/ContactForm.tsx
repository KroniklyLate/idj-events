"use client";

import { packages, siteConfig } from "@/lib/site-data";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : null;

const fieldLabels: Record<string, string> = {
  name: "Name",
  partner: "Partner's name",
  email: "Email",
  phone: "Phone",
  weddingDate: "Wedding date",
  venue: "Venue / location",
  package: "Package of interest",
  message: "Details",
};

/**
 * Builds a mailto: link from the form fields so inquiries still reach the
 * inbox even when Formspree (NEXT_PUBLIC_FORMSPREE_ID) is not configured.
 */
function buildMailtoHref(data: FormData) {
  const lines = Object.entries(fieldLabels)
    .map(([key, label]) => {
      const value = (data.get(key) as string | null)?.trim();
      return value ? `${label}: ${value}` : null;
    })
    .filter(Boolean)
    .join("\n");

  const subject = `Wedding DJ inquiry — ${(data.get("name") as string) || "New lead"}`;
  return `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get("package") ?? "";
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "mailto"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    // Fallback: no Formspree configured — open the visitor's email client
    // with a pre-filled message so the lead is never lost.
    if (!formEndpoint) {
      window.location.href = buildMailtoHref(data);
      setStatus("mailto");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const packageOptions = packages.map((pkg) => ({
    value: pkg.slug,
    label: `${pkg.name} — $${pkg.price.toLocaleString()}`,
  }));

  return (
    <div className="glass-panel p-6 sm:p-8">
      {status === "success" ? (
        <div className="py-8 text-center">
          <p className="font-display text-2xl font-semibold text-navy-900">
            Thank you!
          </p>
          <p className="mt-3 text-slate-600">
            We received your inquiry and will be in touch shortly.
          </p>
        </div>
      ) : status === "mailto" ? (
        <div className="py-8 text-center">
          <p className="font-display text-2xl font-semibold text-navy-900">
            Almost there!
          </p>
          <p className="mt-3 text-slate-600">
            Your email app should have opened with your details ready to send.
            If it didn&apos;t, email{" "}
            <a href={siteConfig.emailHref} className="font-semibold text-lake-700 underline">
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-lake-700 underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
                Your Name *
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
            <div>
              <label htmlFor="partner" className="mb-1.5 block text-sm font-medium text-navy-900">
                Partner&apos;s Name
              </label>
              <input
                id="partner"
                name="partner"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
                Email *
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
                Phone *
              </label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="weddingDate" className="mb-1.5 block text-sm font-medium text-navy-900">
                Wedding Date
              </label>
              <input
                id="weddingDate"
                name="weddingDate"
                type="date"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
            <div>
              <label htmlFor="venue" className="mb-1.5 block text-sm font-medium text-navy-900">
                Venue / Location
              </label>
              <input
                id="venue"
                name="venue"
                type="text"
                placeholder="e.g. South Lake Tahoe"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
          </div>

          <div>
            <label htmlFor="package" className="mb-1.5 block text-sm font-medium text-navy-900">
              Package of Interest
            </label>
            <select
              id="package"
              name="package"
              defaultValue={preselectedPackage}
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
            >
              <option value="">Select a package (optional)</option>
              {packageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value="custom">Custom / Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
              Tell us about your wedding *
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={5}
              placeholder="Guest count, vibe, must-play songs, add-ons you're interested in..."
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
            />
          </div>

          {!formEndpoint && (
            <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Tapping send will open your email app with these details ready to
              go. Prefer to reach us directly? Email{" "}
              <a href={siteConfig.emailHref} className="font-semibold underline">
                {siteConfig.email}
              </a>{" "}
              or call {siteConfig.phone}.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong. Please call {siteConfig.phone} or email{" "}
              {siteConfig.email}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}