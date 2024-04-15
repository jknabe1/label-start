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
    <div>
      <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">EVENTS & ARRANGEMANG</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">HÄNG MED OSS PÅ VÅRA EVENTS & ARRANGEMANG</h2>
                    <p className="text-xs md:text-sm">
                      Utöver att vara ett skivbolag så arrangear vi även konserter och andra event, men under namnet 019 dvs Kulturföreningen 019. Exempelvis arrangerar vi Ung & Punk, Örebro Punkfest, flertal Klubb Mono-kvällar och mycket mer tillsammans med lokala arrangörer.
                    </p>
                    <p className="text-xs md:text-sm mt-4">
                      Här nedan hittar du all nödvändig information om våra kommande- och tidigare event. Vill du vara med och arrangera? Du är varmt välkommen till vår förening. Vänligen <Link href={"/kontakt"} className="underline">kontakta oss</Link> för mer information.
                    </p>
                    </div>
                </div>
        </header>
    <main className="flex flex-col items-center justify-center min-h-screen p-8 mb-12">
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white mb-8 sm:text-4xl md:text-5xl">
        Kommande event
      </h2>
      <EventList events={upcomingEvents} />
      </div>
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white mb-8 sm:text-4xl md:text-5xl mt-12">
        Tidigare event
      </h2>
      <p className="mb-4 text-center">Vill du veta mer om våra tidigare arrangemang? Läs mer nedan... </p>
      <EventList events={pastEvents} />
      </div>
    </main>
    </div>
  );
}

const EventList = ({ events }: { events: SanityDocument[] }) => (
  <ul className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
    {events.map((event) => (
      <li
        className="event-card bg-white p-6 border-4 border-black dark:bg-black dark:border-white shadow-md"
        key={event._id}
      >
        <Link className="block hover:underline" href={`/events/${event.slug.current}`}>
            <h2 className="mb-2 text-xl font-semibold text-black dark:text-white">{event?.name}</h2>
            <p className="text-gray-500">
              {new Date(event?.date).toLocaleDateString()}
            </p>
        </Link>
      </li>
    ))}
  </ul>
);