import Link from "next/link";
import '@/app/globals.css';
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export default async function IndexPage() {
  const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-700 mb-8 sm:text-4xl md:text-5xl">
        Kommande event
      </h2>
      <EventList events={upcomingEvents} />
      </div>
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-700 mb-8 sm:text-4xl md:text-5xl mt-12">
        Tidigare event
      </h2>
      <p>Vill du veta mer om våra tidigare arrangemang? Läs mer nedan! </p>
      <EventList events={pastEvents} />
      </div>
    </main>
  );
}

const EventList = ({ events }: { events: SanityDocument[] }) => (
  <ul className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
    {events.map((event) => (
      <li
        className="event-card bg-white p-6 rounded-lg shadow-md"
        key={event._id}
      >
        <Link className="block hover:underline" href={`/events/${event.slug.current}`}>
            <h2 className="mb-2 text-xl font-semibold text-gray-700">{event?.name}</h2>
            <p className="text-gray-500">
              {new Date(event?.date).toLocaleDateString()}
            </p>
        </Link>
      </li>
    ))}
  </ul>
);