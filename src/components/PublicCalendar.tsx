"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CalendarEvent } from "@/lib/calendar";
import { monthBounds, shiftMonth } from "@/lib/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function eventsOnDate(events: CalendarEvent[], iso: string) {
  return events.filter((event) => event.date === iso);
}

function formatLongDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

type Props = {
  initialYear: number;
  initialMonthIndex0: number;
  initialEvents: CalendarEvent[];
  site: "idj" | "kroniklylate";
};

export function PublicCalendar({
  initialYear,
  initialMonthIndex0,
  initialEvents,
  site,
}: Props) {
  const [year, setYear] = useState(initialYear);
  const [monthIndex0, setMonthIndex0] = useState(initialMonthIndex0);
  const [events, setEvents] = useState<CalendarEvent[]>(initialEvents);
  const [selected, setSelected] = useState<string | null>(
    initialEvents[0]?.date ?? null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const { from, to } = monthBounds(year, monthIndex0);
  const monthLabel = new Date(year, monthIndex0, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const cells = useMemo(() => {
    const first = new Date(year, monthIndex0, 1);
    const pad = first.getDay();
    const last = new Date(year, monthIndex0 + 1, 0).getDate();
    const out: (string | null)[] = Array.from({ length: pad }, () => null);
    for (let day = 1; day <= last; day += 1) {
      const iso = `${year}-${String(monthIndex0 + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      out.push(iso);
    }
    while (out.length % 7) out.push(null);
    return out;
  }, [year, monthIndex0]);

  const selectedEvents = selected ? eventsOnDate(events, selected) : [];
  const upcoming = events.filter((event) => event.date >= from);

  useEffect(() => {
    if (initialEvents.length > 0) return;
    let cancelled = false;
    const bounds = monthBounds(initialYear, initialMonthIndex0);
    setLoading(true);
    fetch(`/api/calendar?from=${bounds.from}&to=${bounds.to}&site=${site}`)
      .then((res) => {
        if (!res.ok) throw new Error("Could not load this month");
        return res.json() as Promise<{ events?: CalendarEvent[] }>;
      })
      .then((body) => {
        if (cancelled) return;
        const next = body.events || [];
        setEvents(next);
        setSelected(next[0]?.date ?? null);
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Could not load this month");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [initialEvents.length, initialYear, initialMonthIndex0, site]);

  async function go(delta: number) {
    const next = shiftMonth(year, monthIndex0, delta);
    const bounds = monthBounds(next.year, next.monthIndex0);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/calendar?from=${bounds.from}&to=${bounds.to}&site=${site}`,
      );
      if (!res.ok) throw new Error("Could not load this month");
      const body = (await res.json()) as { events?: CalendarEvent[] };
      setYear(next.year);
      setMonthIndex0(next.monthIndex0);
      setEvents(body.events || []);
      setSelected(body.events?.[0]?.date ?? null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load this month");
    } finally {
      setLoading(false);
    }
  }

  function selectDay(iso: string) {
    setSelected(iso);
    // Keep the detail heading clear of the sticky site header on narrow screens.
    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="glass-panel p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="rounded-full border border-navy-900/15 px-3 py-1.5 text-sm font-semibold text-navy-900 hover:bg-navy-900/5"
            disabled={loading}
          >
            ← Prev
          </button>
          <h2 className="font-display text-2xl font-semibold text-navy-900">
            {monthLabel}
          </h2>
          <button
            type="button"
            onClick={() => go(1)}
            className="rounded-full border border-navy-900/15 px-3 py-1.5 text-sm font-semibold text-navy-900 hover:bg-navy-900/5"
            disabled={loading}
          >
            Next →
          </button>
        </div>
        {error && <p className="mb-3 text-sm text-red-700">{error}</p>}
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((iso, index) => {
            if (!iso) {
              return <div key={`empty-${index}`} className="min-h-[4.5rem]" />;
            }
            const dayEvents = eventsOnDate(events, iso);
            const isSelected = selected === iso;
            const dayNum = Number(iso.slice(-2));
            return (
              <button
                key={iso}
                type="button"
                onClick={() => selectDay(iso)}
                className={`min-h-[4.5rem] rounded-lg border p-1.5 text-left transition ${
                  isSelected
                    ? "border-gold-500 bg-gold-400/20"
                    : dayEvents.length
                      ? "border-navy-900/15 bg-white hover:border-gold-400"
                      : "border-transparent bg-white/40 hover:bg-white/70"
                }`}
              >
                <div className="text-sm font-semibold text-navy-900">{dayNum}</div>
                {dayEvents.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="mt-1 truncate text-[11px] leading-tight text-navy-800"
                  >
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-[10px] text-slate-500">
                    +{dayEvents.length - 2}
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {loading ? "Loading…" : `${from} – ${to}`}
        </p>
      </div>

      <div className="space-y-4">
        <div
          ref={detailRef}
          id="calendar-day-detail"
          className="glass-panel scroll-mt-28 p-5 sm:p-6"
        >
          <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            {selected ? formatLongDate(selected) : "Select a day"}
          </p>
          {selectedEvents.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">No public events this day.</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {selectedEvents.map((event) => (
                <li key={event.id}>
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="glass-panel p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-widest text-gold-600 uppercase">
            Upcoming
          </p>
          {upcoming.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">
              Nothing listed yet this month. Private weddings stay off this calendar.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {upcoming.slice(0, 8).map((event) => (
                <li key={event.id}>
                  <button
                    type="button"
                    onClick={() => selectDay(event.date)}
                    className="w-full text-left"
                  >
                    <p className="text-sm font-semibold text-navy-900">{event.title}</p>
                    <p className="text-xs text-slate-600">
                      {formatLongDate(event.date)}
                      {event.start_time ? ` · ${event.start_time}` : ""}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: CalendarEvent }) {
  return (
    <article>
      <p className="text-xs font-semibold tracking-wide text-gold-700 uppercase">
        {event.event_type_label}
        {event.recurring ? " · weekly" : ""}
      </p>
      <h3 className="mt-1 scroll-mt-28 font-display text-xl font-semibold text-navy-900">
        {event.title}
      </h3>
      {(event.start_time || event.end_time) && (
        <p className="mt-1 text-sm text-navy-800">
          {event.start_time || "TBD"}
          {event.end_time ? ` – ${event.end_time}` : ""}
        </p>
      )}
      {event.venue_name && (
        <p className="mt-1 text-sm text-slate-700">
          {event.venue_name}
          {event.venue_address ? ` — ${event.venue_address}` : ""}
        </p>
      )}
      {event.blurb && (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.blurb}</p>
      )}
    </article>
  );
}
