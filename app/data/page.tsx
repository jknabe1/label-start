import Link from "next/link";
import '@/app/globals.css';
import { PortableText, SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const data_QUERY = `*[_type == "data" && defined(slug.current)]`;

export default async function Page() {
  const data = await client.fetch<SanityDocument[]>(data_QUERY);

  return (
    <div>
      <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">Hantering av data- och personuppgifter</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">Så här hanterar vi data- och personuppgifter</h2>
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
    <main className="mx-8">
      <h2 className="text-black">
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
    </div>

  );
}