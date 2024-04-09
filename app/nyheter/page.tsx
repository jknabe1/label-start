import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import "@/app/globals.css";

const NEWS_QUERY = `*[_type == "nyhet" && slug.current == $slug][0]{
  name,
  slug,
  image,
  details
}`;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function page({
  params,
}: {
  params: { slug: string };
}) {
  const news = await client.fetch<SanityDocument>(NEWS_QUERY, params);
  const {
    name,
    slug,
    image,
    details
  } = news;
  

const page = () => {
  return (
    <div>
      <section className="w-full">
      <header className="bg-white text-zinc-900 py-4 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">News Site</div>
            <div className="space-x-4">
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Home
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Politics
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Business
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Tech
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Culture
              </Link>
              <Link className="text-zinc-900 hover:text-zinc-700" href="#">
                Sports
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                alt="Top Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">Top Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the top story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Politics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
    </div>
  )
}
}