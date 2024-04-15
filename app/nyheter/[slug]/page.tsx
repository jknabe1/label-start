import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import "@/app/globals.css";

const news_QUERY = `*[
    _type == "news" &&
    slug.current == $slugd
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

export default async function newsPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await client.fetch<SanityDocument>(news_QUERY, params);
const {
    name,
    date,
    headline,
    image,
    details,
    newsType,
    doorsOpen,
    venue,
    tickets,
} = news;
const newsImageUrl = image ? urlFor(image)?.url() : null;
const artistImageUrl = headline && headline.photo ? urlFor(headline.photo)?.url() : null;
const newsDate = new Date(date).toDateString();
const newsTime = new Date(date).toLocaleTimeString();
  const doorsOpenTime = new Date(
    new Date(date).getTime() + doorsOpen * -60000
  ).toLocaleTimeString();



  return (
    <main className="w-full min-h-screen py-24 md:py-24 lg:py-48">
      <div className="container px-4 md:px-6">
        <div className="mb-4">
          <Link href="/newss">← Tillbaka</Link>
        </div>
          
        <div className="grid items-top gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        {(newsImageUrl || artistImageUrl) && (
            <Image
                alt={headline?.name || "news"}
                className="mx-auto aspect-video overflow-hidden object-cover object-center sm:w-full"
                height={"310"}
                src={newsImageUrl || artistImageUrl || ""}
                width="550"
            />
        )}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {newsType && (
                <div className="inline-block border-black border-4 px-3 py-1 text-sm dark:bg-gray-800 capitalize">
                  {newsType.replace("-", " ")}
                </div>
              )}
              {name && (
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {name}
                </h1>
              )}
              {headline?.name && (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <div className="flex items-start">
                    <dt className="sr-only">Artist</dt>
                    <dd className="font-semibold">Artist</dd>
                  </div>
                  <div className="grid gap-1">
                    <dt>{headline?.name}</dt>
                  </div>
                </dl>
              )}
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <div className="flex items-start">
                  <dt className="sr-only">Date</dt>
                  <dd className="font-semibold">Date</dd>
                </div>
                <div className="grid gap-1">
                  {newsDate && <dt>{newsDate}</dt>}
                  {newsTime && <dt>{newsTime}</dt>}
                </div>
              </dl>
              {doorsOpenTime && (
                <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                  <div className="flex items-start">
                    <dt className="sr-only">Doors Open</dt>
                    <dd className="font-semibold">Doors Open</dd>
                  </div>
                  <div className="grid gap-1">
                    <dt>Doors Open</dt>
                    <dt>{doorsOpenTime}</dt>
                  </div>
                </dl>
              )}
              <dl className="grid grid-cols-2 gap-1 text-sm font-medium sm:gap-2 lg:text-base">
                <div className="flex items-start">
                  <dt className="sr-only">Venue</dt>
                  <dd className="font-semibold">Venue</dd>
                </div>
                <div className="grid gap-1">
                  <dt>{venue.name}</dt>
                  <dt className="hidden">
                    {venue.city}, {venue.country}
                  </dt>
                </div>
              </dl>
            </div>
            {details && details.length > 0 && (
              <div className="prose max-w-none">
                <PortableText value={details} />
              </div>
            )}
            {tickets && (
              <div className="flex gap-4">
                <a
                  className="inline-flex h-10 items-center justify-center border-4 border-black text-black w-1/2 text-sm font-medium shadow transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-newss-none disabled:opacity-50 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:focus-visible:ring-gray-300"
                  href={tickets}
                >
                  Buy Tickets
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
