"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'


const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const Page = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const data = await client.fetch('*[_type == "artist  && defined(slug.current)]{name, image, _id}"]')
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
      <div className="">
        <div className="text-small border-y-2 border-black bg-orange dark:border-white">
          <div className="p-[10px] accordion-body gap-[10px] flex-col large ">
            <span></span> 
            <Marquee>
            <p className="text-8xl dark:text-black">  /  VÅRA ARTISTER OCH BAND  / VÅRA ARTISTER OCH BAND </p>
            </Marquee>
          </div>
        </div>
      </div>
            <header className="lg:flex flex-col md:flex-row w-full border-b-2 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">VÅRA ARTISTER OCH BAND</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">VI FRÄMJER MUSIKEN INOM ÖREBRO LÄN</h2>
                    <p>
                      Vårt syfte är att främja artistutveckling inom de ungdomsband som finns i Örebro län. 
                        Vi vill ge dem möjligheten att spela in musik, spela live och att utvecklas som band. Vi vill även ge dem möjligheten att få ut sin musik till en större publik. I vissa undantagsfall jobbar vi med artister utanför Örebro län, dock är vårt huvudsyfte att främja lokal musiken - likt <Link href={'https://www.dalapop.se'} className='underline'>Dalapop</Link>. 
                      </p>
                    </div>
                </div>
        </header>
        <div>
        {artists.map((artist, index) => (
      <div key={artist || index} className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
        <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <img src={urlFor(artists).url()} style={{objectPosition: "center"}} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100"/>
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

                              <div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
                                <img src="https://hymn.se/wp-content/uploads/2023/10/%C3%96P23-I.jpg" style={{objectPosition: "center"}} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in md:!h-[33vw] opacity-100"/>
                                <div className="divide-black dark:divide-white flex flex-col divide-y min-h-0">
                                  <div className="divide-black dark:divide-white divide-y">
                                    <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                                      <div className="child:uppercase">
                                        <div className="text-small ">
                                          <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span>
                                          <a className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]" href="">
                                          <p className='uppercase'>Festival information</p> </a>
                                          </div>
                                          </div>
                                          </div>
                                          <div className="text-small p-[10px] uppercase">
                                          <span className="text-[#7f7f7f]">
                                          <span>KATEGORI&nbsp;</span>
                                          </span> Festivalen
                                          </div>
                                          </div>
                                          </div>
                                          <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                                            <div className="text-small ">
                                            <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span> 
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore dicta cupiditate soluta vero error repudiandae. Animi sed, odio sapiente quibusdam molestias eaque perferendis, enim fugit ut explicabo dicta quasi!</p>
                                            </div></div></div></div></div>
                                            
                                            <div className="divide-y divide-black dark:divide-white flex  flex-col undefined">
                                              <img src="https://dms-api.ntm.eu/api/v1/images/j81k20pl/smart/width/980/height/551/as/jpeg/redirect" style={{objectPosition: "center"}} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100"/>
                                            <div className="divide-black dark:divide-white flex flex-col divide-y min-h-0">
                                              <div className="divide-black dark:divide-white divide-y">
                                              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                                                <div className="child:uppercase">
                                                  <div className="text-small ">
                                                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span>
                                                    <a className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]" href=""> 
                                              <p>SKITHUVVE</p></a>
                                              </div>
                                              </div>
                                              </div> 
                                            <div className="text-small p-[10px]">
                                                <span className="text-[#7f7f7f]">
                                            <span>KATEGORI&nbsp;</span>
                                            </span> SVERIGE
                                            </div></div></div> 
                                            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
                                              <div className="text-small ">
                                              <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small "><span></span> 
                                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore dicta cupiditate soluta vero error repudiandae. Animi sed, odio sapiente quibusdam molestias eaque perferendis, enim fugit ut explicabo dicta quasi!</p>
                                              </div>
                                              </div>
                                              </div>
                                              </div>
                                              </div>
      </div>
        ))}
    </div>
</div>
  )
}

export default Page