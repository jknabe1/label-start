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

export const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [visible, setVisible] = useState(3)


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await client.fetch('*[_type == "news"  && featured == true && defined(slug.current)]{_id, name, slug, image, excerpt}|order(date desc)');
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
      <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white">
      {news && news.filter((newsItem: { featured: boolean }) => newsItem.featured).map((news: { _id: string, name: string, excerpt: string, image: any, current: string, featured: boolean,  slug: string }, index: number) => (                
        <><div key={news._id} className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <img src="https://static.bonniernews.se/bildix/api/images/6b4cd3e1-3282-4e5e-aaaf-a08d68c6a5a9.jpeg?fit=crop&w=980&h=551" style={{ objectPosition: "center" }} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
          <div className="divide-black flex flex-col divide-y min-h-0 dark:divide-white">
            <div className="divide-black divide-y dark:divide-white">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small ">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small ">
                      <span></span>
                      <a className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]" href="">
                        <p className='uppercase'>{news.name}</p>
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
        </div><div className="divide-y divide-black flex  flex-col undefined dark:divide-white">
            <img src="https://hymn.se/wp-content/uploads/2023/10/%C3%96P23-I.jpg" style={{ objectPosition: "center" }} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in md:!h-[33vw] opacity-100" />
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
                  </div></div></div></div></div><div className="divide-y divide-black dark:divide-white flex  flex-col undefined">
            <img src="https://dms-api.ntm.eu/api/v1/images/j81k20pl/smart/width/980/height/551/as/jpeg/redirect" style={{ objectPosition: "center" }} alt="[object Object]" className="duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100" />
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
          </div></>
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