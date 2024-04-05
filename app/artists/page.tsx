"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'


const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const Page = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await client.fetch('*[_type == "artist"]')
      setArtists(data)
    }

    fetchArtists()
  }, [])

  const imageClasses = [
    "object-cover h-72 w-full ",
    "object-cover h-28 w-full  sm:col-span-2",
    "object-cover h-96 w-full  sm:row-span-2",
    "object-cover h-40 w-full  sm:col-span-2",
    "object-cover h-60 w-full "
  ];

  return (
    <div>
    <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">VÅRA ARTISTER OCH BAND</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">VI FRÄMJER MUSIKEN INOM ÖREBRO LÄN</h2>
                    <div className="text-xs md:text-sm">
                      <p> 
                        Vårt syfte är att främja artistutveckling inom de ungdomsband som finns i Örebro län. 
                        Vi vill ge dem möjligheten att spela in musik, spela live och att utvecklas som band. Vi vill även ge dem möjligheten att få ut sin musik till en större publik. I vissa undantagsfall jobbar vi med artister utanför Örebro län, dock är vårt huvudsyfte att främja lokal musiken - likt <Link href={'https://www.dalapop.se'} className='underline'>Dalapop</Link>. 
                      </p>
                    </div>
                    </div>
                </div>
            </header>
    <div className="flex justify-center items-center h-screen py-24">
  <section className="grid sm:grid-cols-4 sm:grid-rows-2 w-full h-full p-7 rounded-xl gap-5 grid-cols-1 auto-rows-auto">
    <img className="object-cover h-full w-full " src="https://images.unsplash.com/photo-1686918101049-d7fc95087424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80"/>
    <img className="object-cover h-full w-full  sm:col-span-2" src="https://images.unsplash.com/photo-1648614593495-e0955bf287e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"/>
    <img className="object-cover h-full w-full  sm:row-span-2" src="https://images.unsplash.com/photo-1687273195751-14befe467d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80"/>
    <img className="object-cover h-full w-full  sm:col-span-2" src="https://images.unsplash.com/photo-1687812693663-c322b9af62a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
    <img className="object-cover h-full w-full " src="https://images.unsplash.com/photo-1685980201821-6577f4feec1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"/>
  </section>
  </div>
</div>
  )
}

export default Page