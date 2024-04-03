"use client"

import React, { useEffect, useState } from 'react';
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export default function NotFound() {
  const [upcomingEvents, setUpcomingEvents] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);
      const upcoming = events.filter(event => new Date(event.date) >= new Date());
      setUpcomingEvents(upcoming);
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl">404 - Sidan kunde inte hittas</h1>
      <p className="mt-4 text-xl text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p className="mt-4 text-xl text-center">Du får gärna kontakta oss och beskriva felet - då kan vi arbeta mot att detta sker igen!</p>
      <div className='pt-6 border-b-2 border-black w-full'></div>
      <br/>
      <div>
        <h2 className="text-xl mb-8 sm:text-4xl md:text-5xl mt-4 text-center">
          Kommande event
        </h2>
        <EventList events={upcomingEvents} />
      </div>
    </div>
  );
}

const EventList = ({ events }: { events: SanityDocument[] }) => (
    <ul className="w-full flex flex-wrap justify-center gap-6 lg:gap-8">
      {events.map((event) => (
        <li
          className="event-card bg-white p-6 rounded-lg shadow-md m-2"
          key={event._id}
        >
          <a className="block hover:underline" href={`/events/${event.slug.current}`}>
              <h2 className="mb-2 text-xl font-semibold text-gray-700">{event?.name}</h2>
              <p className="text-gray-500">
                {new Date(event?.date).toLocaleDateString()}
              </p>
          </a>
        </li>
      ))}
    </ul>
  );