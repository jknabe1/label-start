"use client"

import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';
import Link from 'next/link';
import Image from 'next/image';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.fetch('*[_type == "event" && defined(slug.current)]{_id, name, slug, image, excerpt}|order(date desc)');
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid md:grid-cols-1 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
        {events.slice(0, 1).map((event: { _id: string, name: string, excerpt: string, image: string, current: string, slug: { current: string } }, index: number) => (
          <div key={event._id} className="divide-y divide-black flex flex-col dark:divide-white">
            <Image src={urlFor(event.image).url()} style={{ objectPosition: 'center' }} alt={event.name} sizes="100vw" width={'1'} height={'1'} className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
            <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
              <div className="divide-black divide-y dark:divide-white">
                <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                  <div className="child:uppercase">
                    <div className="text-small">
                      <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                        <span></span>
                        <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                          {event.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-small p-[10px] uppercase">
                    <span className="text-[#7f7f7f]">
                      <span className="uppercase">
                        <Link href={`/nyheter/${event.slug.current}`}>Läs mer</Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                <div className="text-small">
                  <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col">
                    <span></span>
                    <p>{event.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
        {events.slice(1, 4).map((event: { _id: string, name: string, excerpt: string, image: string, current: string, slug: { current: string } }, index: number) => (
          <div key={event._id} className="divide-y divide-black flex flex-col dark:divide-white">
            <Image src={urlFor(event.image).url()} style={{ objectPosition: 'center' }} alt={event.name} sizes="100vw" width={'1'} height={'1'} className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
            <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
              <div className="divide-black divide-y dark:divide-white">
                <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                  <div className="child:uppercase">
                    <div className="text-small">
                      <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                        <span></span>
                        <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                          {event.name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-small p-[10px] uppercase">
                    <span className="text-[#7f7f7f]">
                      <span className="uppercase">
                        <Link href={`/nyheter/${event.slug.current}`}>Läs mer</Link>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                <div className="text-small">
                  <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col">
                    <span></span>
                    <p>{event.excerpt}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};