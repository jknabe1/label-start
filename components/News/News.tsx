"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch('*[_type == "news" && defined(slug.current)]{_id, name, slug, image, excerpt, date}| order(_createdAt desc)');
        setNews(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false)
      }
    };
  
    fetchNews();
  }, []);


  return (
    <div>
       <div className="grid md:grid-cols-1 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
      {news.slice(0,1).map((news: { _id: string, name: string, excerpt: string, image: string, current: string,  slug: { current: string }, _createdAt: string, }, index: number) => (                
        <>
        <div key={news._id} className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src={urlFor(news.image).url()} style={{ objectPosition: "center" }} alt={news.name} sizes="100vw" width={'1'} height={'1'} className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      {news.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href={`/nyheter/${news.slug.current}`}>Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p>{news.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
        ))}                                     
      </div>
      <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
      {news.slice(1, 4).map((news: { _id: string, name: string, excerpt: string, image: string, current: string,  slug: { current: string }, }, index: number) => (                
        <>
        <div key={news._id} className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <Image src={urlFor(news.image).url()} style={{ objectPosition: "center" }} alt={news.name} sizes="100vw" width={'1'} height={'1'} className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <p className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]">
                      {news.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px] uppercase">
                  <span className="text-[#7f7f7f]">
                    <span className='uppercase'>
                    <Link href={`/nyheter/${news.slug.current}`}>Läs mer</Link>                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small ">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col "><span></span>
                  <p>{news.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
        ))}      
                               
      </div>
      <div className="grid md:grid-cols-1 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
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
      </div>
    </div>
  )
}

export default News