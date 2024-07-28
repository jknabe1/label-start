"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'


const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const ArtistGrid = () => {
    const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await client.fetch('*[_type == "artist  && defined(slug.current)]{name, image, _id}"]')
      setArtists(data)
    }

    fetchArtists()
  }, [])


  return (
    <div>
        {artists.map((artist, index) => (
      <><div key={artist || index} className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
                <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
                    <img src={urlFor(artists).url()} style={{ objectPosition: "center" }} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
                    <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
                        <div className="divide-black divide-y dark:divide-white">
                            <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                                <div className="child:uppercase">
                                    <div className="text-small ">
                                        <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                                            <span></span>
                                            <a className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]" href="">
                                                <p className='uppercase'>{artist}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-small p-[10px] uppercase">
                                    <span className="text-[#7f7f7f]">
                                        <span className='uppercase'>KATEGORI&nbsp;</span>
                                    </span>
                                    Festivalen
                                </div>
                            </div>
                        </div>
                        <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                            <div className="text-small ">
                                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore dicta cupiditate soluta vero error repudiandae. Animi sed, odio sapiente quibusdam molestias eaque perferendis, enim fugit ut explicabo dicta quasi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div><div className="grid md:grid-cols-1 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
                    <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
                        <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
                            <div className="divide-black divide-y dark:divide-white"></div>
                            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                                <div className="text-small ">
                                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span>
                                        <Link href='/nyheter' className='text-center'>LÄS MER NYHETER</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
        ))}
    </div>
  )
}

export default ArtistGrid