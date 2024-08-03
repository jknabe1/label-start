import '@/app/globals.css';
import { SanityDocument } from "next-sanity";
import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};


const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{_id, name, slug, date, image}|order(date desc)`;

export default async function IndexPage() {
  const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  return (
    <div>
      <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">ARRANGEMANG</h1>
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
    <main>
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white mb-8 sm:text-4xl md:text-5xl">
        Kommande 
      </h2>
      <EventList events={upcomingEvents} />
      </div>
      <div>
      <h2 className="text-3xl font-bold tracking-tighter text-center text-black dark:text-white mb-8 sm:text-4xl md:text-5xl mt-12">
        Tidigare 
      </h2>
      <p className="mb-4 text-center">Vill du veta mer om våra tidigare arrangemang? Läs mer nedan...</p>
      <EventList events={pastEvents} />
      </div>
    </main>
    </div>
  );
}

const EventList = ({ events }: { events: SanityDocument[] }) => (
      <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
    {events.map((event) => (
      <div key={event._id} className="divide-y divide-black flex  flex-col undefined dark:divide-white">
      <Image src={urlFor(event.image).url()} style={{ objectPosition: "center" }} alt={event.name} sizes="100vw" width={'1'} height={'1'} className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
      <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
        <div className="divide-black divide-y dark:divide-white">
          <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
            <div className="child:uppercase">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                  <span></span>
                  <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                  {event.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-small p-[10px] uppercase">
              <span className="text-[#7f7f7f]">
                <span className='uppercase'>
                <Link href={`/nyheter/${event.slug.current}`}>Läs mer</Link>                    </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
          <div className="text-small ">
            <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
              <p>{formatDate(event.date)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
);