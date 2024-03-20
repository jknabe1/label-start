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
      const data = await client.fetch('*[_type == "artist"]{name, image, "events": events[]->{name, date}}')
      setArtists(data)
    }

    fetchArtists()
  }, [])

  return (
    <div>
    {Array.isArray(artists) && artists.map((artist: { _id: string, name: string, image: any, events: any[] }) => (
        <div key={artist._id}>
            <h2>{artist.name}</h2>
            <img src={urlFor(artist.image).url()} alt={artist.name} />
            <h3>Events:</h3>
            <ul>
                {artist.events.map((event: { _id: string, name: string, date: string }) => (
                    <li key={event._id}>
                        {event.name} - {new Date(event.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    ))}
    </div>
  )
}

export default Page