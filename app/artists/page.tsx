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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {artists.map((artist: { slug: { current: string }, _id: string, name: string, image: any }, index: number) => (
        <div key={artist._id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href={`/artists/${artist.slug.current}`} className="w-full block h-full">
            <img alt={artist.name} src={urlFor(artist.image).url()} className="max-h-40 w-full object-cover"/>
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                {artist.name}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Page