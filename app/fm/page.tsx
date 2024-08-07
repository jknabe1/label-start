"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Volume1Icon } from 'lucide-react';
import { FullscreenIcon } from 'lucide-react';


const Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
<div>
    <section className="relative w-full pt-8 md:pt-12 xl:pt-16 bg-black text-white bright-cursor relative flex items-end w-full min-h-[80vh] lg:min-h-screen pb-10">
        <div className="overflow-hidden absolute inset-0">
            <div className="absolute z-10 inset-0" style={{ transition: 'transform 1000ms, opacity 150ms' }}>
                <video src="https://kkmediagroup.imgix.net/shroom-land-kkmedia.mp4" className="w-full h-full object-cover relative z-10 transition duration-500 opacity-100" autoPlay muted playsInline loop ></video>
            </div>
        </div>
    </section>
    <div className="z-40 bottom-0 divide-x w-full  divide-black flex bg-white border-y-2 border-black dark:bg-black dark:border-white dark:divide-white uppercase">
      <Link href="/" className="p-[10px] w-1/2 flex bg-white dark:bg-black hover:text-orange">
      <div className="my-auto divide-y divide">
            <Volume1Icon size={24} />
      </div>
      </Link>
      <div className="w-1/6 md:flex">
      <Link href={"/fm"}>
      <span className='flex p-[10px]'>FM</span>
      </Link>
        </div>
          <button
        className="md:w-1/6 w-1/5 bg-white hover:bg-black hover:text-white dark:bg-black dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black"

      >
        <FullscreenIcon/>
      </button>

            <button className="md:w-1/6 w-1/5 hover:!bg-black hover:text-white hover:divide-white dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black ">
              <Link href={'https://www.kkmedia.se'}>
                <span className='uppercase'>
                </span>
              </Link>
            </button>
            </div>
</div>
  )
}

export default Page