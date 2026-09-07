"use client";

import { packages, siteConfig } from "@/lib/site-data";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

// Prefer same-origin /api/leads (rewritten to Ops). Optional absolute override only.
const leadEndpoint =
  process.env.NEXT_PUBLIC_LEAD_ENDPOINT?.trim() || "/api/leads";

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
 * inbox if the Ops CRM is briefly unreachable.
 *
 * Keeps the body reasonably short so clients/browsers that cap URL length
 * still open the compose window.
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
  // Some clients fail silently on very long mailto URLs; cap body length.
  const maxBody = 1500;
  const body =
    lines.length > maxBody ? `${lines.slice(0, maxBody)}…` : lines;

  return `${siteConfig.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Opens a mailto: URL in a way that works more reliably than assigning
 * window.location.href (which many browsers ignore when no default mail
 * app is registered, or when the URL is long).
 */
function openMailto(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.rel = "noopener noreferrer";
  // target=_blank helps some browsers hand off to the OS mail handler
  // without navigating the current tab away from the form page.
  anchor.target = "_blank";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedPackage = searchParams.get("package") ?? "";
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "mailto"
  >("idle");
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    const payload = {
      name: String(data.get("name") || ""),
      partner: String(data.get("partner") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      weddingDate: String(data.get("weddingDate") || ""),
      venue: String(data.get("venue") || ""),
      package: String(data.get("package") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""),
    };

    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;

      if (response.ok && body?.ok !== false) {
        setStatus("success");
        form.reset();
        return;
      }

      const href = buildMailtoHref(data);
      setMailtoHref(href);
      openMailto(href);
      setStatus("mailto");
    } catch {
      const href = buildMailtoHref(data);
      setMailtoHref(href);
      openMailto(href);
      setStatus("mailto");
    }
  }

  async function copyInquiryDetails() {
    if (!mailtoHref) return;
    try {
      // Decode the mailto body so the user can paste into any email app.
      const bodyMatch = mailtoHref.match(/[?&]body=([^&]*)/);
      const subjectMatch = mailtoHref.match(/[?&]subject=([^&]*)/);
      const subject = subjectMatch
        ? decodeURIComponent(subjectMatch[1])
        : "Wedding DJ inquiry";
      const body = bodyMatch ? decodeURIComponent(bodyMatch[1]) : "";
      const text = `To: ${siteConfig.email}\nSubject: ${subject}\n\n${body}`;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
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
            Your email app should open with your details ready to send. If
            nothing opened (common when no default mail app is set), use one of
            the options below.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {mailtoHref && (
              <a
                href={mailtoHref}
                className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-950 transition hover:bg-gold-400 sm:w-auto"
              >
                Open email app
              </a>
            )}
            <button
              type="button"
              onClick={copyInquiryDetails}
              className="inline-flex w-full items-center justify-center rounded-full border border-navy-900/20 bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 transition hover:bg-slate-50 sm:w-auto"
            >
              {copied ? "Copied!" : "Copy inquiry details"}
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Or email{" "}
            <a
              href={siteConfig.emailHref}
              className="font-semibold text-lake-700 underline"
            >
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-lake-700 underline"
            >
              {siteConfig.phone}
            </a>
            .
          </p>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setMailtoHref(null);
              setCopied(false);
            }}
            className="mt-4 text-sm font-medium text-lake-700 underline"
          >
            Edit and try again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
                Your Name *
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="partner"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
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
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
                Email *
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
                Phone *
              </label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-navy-900 outline-none transition focus:border-lake-500 focus:ring-2 focus:ring-lake-500/20"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="weddingDate"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
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
              <label
                htmlFor="venue"
                className="mb-1.5 block text-sm font-medium text-navy-900"
              >
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
            <label
              htmlFor="package"
              className="mb-1.5 block text-sm font-medium text-navy-900"
            >
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
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-navy-900"
            >
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

          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
