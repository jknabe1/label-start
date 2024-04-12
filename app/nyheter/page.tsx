"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export const Page = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [visible, setVisible] = useState(3)


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch('*[_type == "news" && defined(slug.current)]{_id, name, slug, image, excerpt}|order(date desc)');
        setNews(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false)
      }
    };
  
    fetchNews();
  }, []);

  const filteredNews = news.filter((newsItem: { name: string }) =>
    newsItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  return (
    <div>
          <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">VAD HÄNDER HOS OSS?</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">For the record</h2>
                    <p>
                    Har du funderingar om vad som händer hos oss? Här kan du läsa om det senaste som händer hos oss. Vi uppdaterar regelbundet med nyheter om våra konserter och evenemang. Du kan även läsa om våra artister och band som spelar hos oss.
                    </p>
                    <br/>
                    <p>
                    Bortsett från mindre rolig formalia och nyheter så kommer vi även att använda denna sida som en liten journal/blogg för att dela med oss om vad som händer bakom kulisserna. Till exempel, vad händer på kontoret denna fredag - you name it.
                    </p>
                    </div>
                </div>
        </header>
        <section className="w-full">
        <main className="container mx-auto px-4 md:px-6 py-24">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Det senaste</h2>
            {loading ? (
            <div>Ha tålamod...</div> 
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news && news.slice(0, 1).map((news: { _id: string, name: string, excerpt: string, image: any, slug: string }, index: number) => (                
            <div key={news._id}>
                  <Image
                    alt={news.name}
                    className="w-full h-64 object-cover object-center border-4 border-black dark:border-white"
                    src={urlFor(news.image).url() || 'Misslyckad hämtning av bild'}
                    width={'1'}
                    height={'1'}
                    style={{
                      width: '100%',
                      height: '16rem',
                      objectFit: 'cover',
                    }} 
                    loading='lazy' 
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold my-2">{news.name}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {news.excerpt || 'Misslyckad hämtning av utdrag'}
                    </p>
                    <Link className="text-blue-500 hover:text-blue-700 mt-4" href={`/news/}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            )}
          </section>
          <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tidigare</h2>
          
          <input className="p-4 mb-8 border-2 border-black bg-white h-10 w-full text-sm" type="text" placeholder="Vad vill du hitta..?" onChange={(event) => setSearchTerm(event.target.value)}/>
            
          {filteredNews.length === 0 ? (
            <div>Här var det tomt - vi får börja skriva mer</div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.slice(0, visible).map((news: { _id: string, name: string, excerpt: string, image: any, slug: string }, index: number) => (                
            <div>
            <div key={news._id}>
              <Image
                alt={news.name}
                className="w-full h-64 object-cover object-center border-4 border-black dark:border-white"
                height="400"
                src={news.image ? urlFor(news.image).url() : 'Misslyckad hämtning av bild'}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                loading='lazy'
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{news.name}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {news.excerpt}
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Läs mer
              </Link>
            </div>
            </div>
          ))}
          </div>
      )}
          <button className="px-4 py-2 mt-8 bg-white border-2 border-black text-black hover:bg-black hover:text-white" onClick={loadMore}>
            {visible < filteredNews.length ? 'Hämta fler' : 'Slut :('} 
          </button>        
        </section>        
      </main>
    </section>
    </div>  
    )
}

export default Page