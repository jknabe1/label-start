import Link from "next/link";
import '@/app/globals.css';
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const data_QUERY = `*[_type == "data" && defined(slug.current){_id, name, slug, date}]`;

export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(data_QUERY);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
        data
      </h2>
      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {data.map((data) => (
          <li
            className="event-card bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md"
            key={data._id}
          >
            <Link
              className="hover:underline"
              href={`/data/${data.slug.current}`}
            >
              <h2 className="text-xl font-semibold">{data?.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {new Date(data?.date).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}