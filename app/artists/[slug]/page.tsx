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
    <header className="lg:flex flex-col md:flex-row w-full pt-24 border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                  <h1 className="text-4xl md:text-6xl font-bold">{artists[0]?.name}</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">LÄR DIG MER OM OSS OCH VILKA VI ÄR</h2>
                    <p className="text-xs md:text-sm">
                      <p> 
                        Vi är ett ideellt skivbolag som är en del av Kulturföreningen 019. Vi arbetar med att främja ungdomar, främst inom Örebro län. 
                        Vi arbetar inom kultursektorn och har en bred verksamhet som sträcker sig från musikproduktion till evenemang och utbildning. Läs mer nedan om varför- och hur vi arbetar med vårt syfte och ändamål.
                      </p>
                    <p className="text-xs md:text-sm mt-4">
                    </p>
                    </p>
                    </div>
                </div>
            </header>
    </div>
  )
}

export default Page