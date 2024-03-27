import Link from "next/link";
import '@/app/globals.css';
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const data_QUERY = `*[_type == "data" && defined(slug.current)]`;

export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(data_QUERY);

  return (
    <main className="">
      <h2 className="">
        Vår hantering av data- och personuppgifter
      </h2>
      <ul className="">
      {data.map((data) => (
    <li key={data._id}>
      <div className="content-center	">
        </div>
    </li>
  ))}
      </ul>
    </main>
  );
}