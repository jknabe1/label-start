"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'

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

  return (
    <ul className="grid grid-cols-3 gap-6 auto-rows-min lg:gap-8 pt-48">
      {artists.map((artist: { slug: { current: string }, _id: string, name: string, image: any }, index: number) => (
        <li
          className={`event-card bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
          key={artist._id}
        >
          <a
            className="hover:underline"
            href={`/artists/${artist.slug.current}`}
          >
            <img src={urlFor(artist.image).url()} alt={artist.name} />
            <h2 className="text-xl font-semibold">{artist.name}</h2>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Page