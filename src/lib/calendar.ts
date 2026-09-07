export type CalendarEvent = {
  id: string;
  event_id: number;
  date: string;
  start_time: string | null;
  end_time: string | null;
  title: string;
  event_type: string;
  event_type_label: string;
  venue_name: string | null;
  venue_address: string | null;
  subcontractor: string | null;
  blurb: string | null;
  recurring: boolean;
  recurrence: string | null;
  sites: string[];
  /** True when this is a private/wedding busy marker with no client details. */
  busy?: boolean;
};

export type CalendarResponse = {
  ok: boolean;
  from: string;
  to: string;
  site: string;
  events: CalendarEvent[];
};

const PRIVATE_BUSY_TYPES = new Set(["Wedding", "Birthday", "Corporate"]);

/** Treat API busy flags and legacy "Private event" rows as Booked markers. */
export function isBusyEvent(event: CalendarEvent): boolean {
  if (event.busy) return true;
  if (PRIVATE_BUSY_TYPES.has(event.event_type)) return true;
  const title = (event.title || "").trim().toLowerCase();
  return title === "booked" || title === "private event";
}

export function displayEventTitle(event: CalendarEvent): string {
  return isBusyEvent(event) ? "Booked" : event.title;
}

/** Karaoke / nightlife / other marketed recurring appearances. */
export function isPublicRecurringEvent(event: CalendarEvent): boolean {
  if (isBusyEvent(event)) return false;
  if (event.recurring) return true;
  return event.event_type === "Karaoke" || event.event_type === "Nightlife";
}

function resolveOpsOrigin(explicit?: string) {
  const raw = (explicit || process.env.PORTAL_ORIGIN || "https://ops.idj.events")
    .trim()
    .replace(/\/$/, "");
  if (!raw || raw.includes("trycloudflare.com")) {
    return "https://ops.idj.events";
  }
  return raw;
}

export const OPS_CALENDAR_ORIGIN = resolveOpsOrigin();

export function monthBounds(year: number, monthIndex0: number) {
  const last = new Date(year, monthIndex0 + 1, 0).getDate();
  const pad = (n: number) => String(n).padStart(2, "0");
  return {
    from: `${year}-${pad(monthIndex0 + 1)}-01`,
    to: `${year}-${pad(monthIndex0 + 1)}-${pad(last)}`,
  };
}

export function shiftMonth(year: number, monthIndex0: number, delta: number) {
  const total = year * 12 + monthIndex0 + delta;
  return { year: Math.floor(total / 12), monthIndex0: ((total % 12) + 12) % 12 };
}

export async function fetchCalendarEvents(opts: {
  from: string;
  to: string;
  site: "idj" | "kroniklylate";
  origin?: string;
}): Promise<CalendarEvent[]> {
  const base = resolveOpsOrigin(opts.origin);
  const url = `${base}/api/calendar?from=${opts.from}&to=${opts.to}&site=${opts.site}`;
  const res = await fetch(url, { next: { revalidate: 120 } });
  if (!res.ok) {
    throw new Error(`Calendar unavailable (${res.status})`);
  }
  const body = (await res.json()) as CalendarResponse;
  return body.events || [];
}
