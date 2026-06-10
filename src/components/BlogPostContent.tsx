import Image from "next/image";
import type { BlogContentBlock, BlogVenue } from "@/lib/blog-types";

type BlogPostContentProps = {
  content: BlogContentBlock[];
  venues?: BlogVenue[];
  directoryTitle?: string;
  directoryDescription?: string;
};

function isNorthShore(area: string) {
  return /north shore|north lake|incline|tahoe city|kings beach|carnelian|truckee/i.test(area);
}

function VenueCard({ venue }: { venue: BlogVenue }) {
  return (
    <div className="glass-panel-soft p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold text-navy-900">{venue.name}</h3>
          <p className="mt-1 text-sm font-semibold tracking-wide text-gold-600 uppercase">
            {venue.type} · {venue.area}
          </p>
        </div>
        <a
          href={venue.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-lake-700 transition hover:text-navy-900"
        >
          Visit website →
        </a>
      </div>

      {venue.notes && (
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{venue.notes}</p>
      )}

      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {venue.address && <li>{venue.address}</li>}
        {venue.phone && (
          <li>
            <a href={`tel:${venue.phone.replace(/[^\d+]/g, "")}`} className="text-lake-700">
              {venue.phone}
            </a>
          </li>
        )}
        {venue.hours && <li>Hours: {venue.hours}</li>}
        {venue.email && (
          <li>
            <a href={`mailto:${venue.email}`} className="text-lake-700">
              {venue.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export function BlogPostContent({
  content,
  venues,
  directoryTitle = "Tahoe wedding venues to explore",
  directoryDescription = "Contact information is listed for planning convenience. Availability, pricing, and policies change — always confirm details directly with each venue.",
}: BlogPostContentProps) {
  const southShoreVenues = venues?.filter((venue) => !isNorthShore(venue.area)) ?? [];
  const northShoreVenues = venues?.filter((venue) => isNorthShore(venue.area)) ?? [];
  const showShoreSections =
    southShoreVenues.length > 0 && northShoreVenues.length > 0;

  return (
    <>
      <div className="prose-blog space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
        {content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return <p key={index}>{block.text}</p>;
            case "heading":
              return (
                <h2
                  key={index}
                  className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl"
                >
                  {block.text}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="list-disc space-y-2 pl-6">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            case "image":
              return (
                <figure
                  key={index}
                  className="overflow-hidden rounded-2xl border border-white/40 shadow-lg"
                >
                  <Image
                    src={block.image.src}
                    alt={block.image.alt}
                    width={1200}
                    height={675}
                    className="h-auto w-full object-cover"
                  />
                  {block.image.caption && (
                    <figcaption className="bg-white/90 px-4 py-3 text-sm text-slate-600">
                      {block.image.caption}
                    </figcaption>
                  )}
                </figure>
              );
            default:
              return null;
          }
        })}
      </div>

      {venues && venues.length > 0 && (
        <div className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
            {directoryTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {directoryDescription}
          </p>

          {showShoreSections ? (
            <div className="mt-8 space-y-10">
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                  South Shore
                </h3>
                <div className="mt-6 grid gap-6">
                  {southShoreVenues.map((venue) => (
                    <VenueCard key={venue.name} venue={venue} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                  North Shore
                </h3>
                <div className="mt-6 grid gap-6">
                  {northShoreVenues.map((venue) => (
                    <VenueCard key={venue.name} venue={venue} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-6">
              {venues.map((venue) => (
                <VenueCard key={venue.name} venue={venue} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}