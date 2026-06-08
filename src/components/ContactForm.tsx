"use client";

import { packages } from "@/lib/site-data";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const formEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ID
    ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
    : null;

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get("package") ?? "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);

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
              Form delivery is not configured yet. Please email{" "}
              <a href="mailto:booking@idj.events" className="font-semibold underline">
                booking@idj.events
              </a>{" "}
              or call 775-233-6501. Formspree setup instructions are in DEPLOYMENT.md.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong. Please call 775-233-6501 or email booking@idj.events.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting" || !formEndpoint}
            className="w-full rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      )}
    </div>
  );
}