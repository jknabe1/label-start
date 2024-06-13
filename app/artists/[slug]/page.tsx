import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import "@/app/globals.css";

const ARTIST_QUERY = `*[
    _type == "artist" &&
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

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const artist = await client.fetch<SanityDocument>(ARTIST_QUERY, params);
const {
    name,
} = artist;

  return (
    <div>
        <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">
                    {name && (
                          {name}
                      )}
                    </h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">
                    
                      </h2>
                    <p>
                    Vi är ett ideellt skivbolag som är en del av Kulturföreningen 019. Vi arbetar med att främja ungdomar, främst inom Örebro län med deras kulturutveckling. 
                    </p>
                    <br/>
                    <p>
                    Alla är välkomna att vara med och driva föreningen! Vänligen <Link href={"/kontakt"} className="underline">kontakta oss</Link> för mer information. Hos oss finns det något för alla, 
                    oavsett om du är intresserad av musik, kultur, arrangemang eller vill engagera dig ideellt. I vissa fall kan vi även ta emot praktikanter från KAA.
                    </p>
                    </div>
                </div>
        </header>
    </div>
  );
}
