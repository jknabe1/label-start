import React from 'react'
import Link from "next/link";
import '@/app/globals.css';
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


const EVENT_QUERY = `*[
  _type == "event" &&
  slug.current == $slug
][0]{
...,
headline->,
venue->
}`;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
projectId && dataset
  ? imageUrlBuilder({ projectId, dataset }).image(source)
  : null;

export default async function EventPage() {
const event = await client.fetch<SanityDocument>(EVENT_QUERY);
const {
  name,
  date,
  headline,
  image,
  details,
  eventType,
  doorsOpen,
  venue,
  tickets,
} = event;
const eventImageUrl = image ? urlFor(image)?.url() : null;
const artistImageUrl = headline && headline.photo ? urlFor(headline.photo)?.url() : null;
const eventDate = new Date(date).toDateString();
const eventTime = new Date(date).toLocaleTimeString();
const doorsOpenTime = new Date(
  new Date(date).getTime() + doorsOpen * -60000
).toLocaleTimeString();
  return (
    <div>
        <div className="grid w-full grid-cols-1 gap-4 px-5 md:px-6 xl:px-12 mx-auto lg:grid-cols-12 lg:px-8 2xl:max-w-[1600px]">
    <h2 className="text-4xl">KOMMANDE</h2>
    <div className="group relative flex flex-col gap-4 lg:gap-6 lg:col-span-4" >
    <div className="relative aspect-square overflow-hidden lg:aspect-video h-full">
        <img alt="Grundarna Jens Knabe och Edwin Krutholm - K&K" loading="lazy" decoding="async" data-nimg="fill" className="h-auto w-full bg-transparent ease-out-expo  overflow-hidden transition h-full w-full mix-blend-plus-lighter object-cover object-center group-hover:scale-[1.025] duration-1000 lg:aspect-video" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} sizes="100vw"                  src={eventImageUrl || artistImageUrl || ""}        />
        <div className="absolute inset-0 bg-opacity-10 bg-gradient-to-tr  to-transparent to-80% opacity-90 transition duration-1000 group-hover:opacity-80"></div>
    </div>
    </div>
            </div>
    </div>
  )
}

const EventList = ({ events }: { events: SanityDocument[] }) => (
    <ul className="w-full grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
      {events.map((event) => (
        <li
          className="event-card bg-white p-6 border-4 border-black dark:bg-black dark:border-white shadow-md max-w-full"
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