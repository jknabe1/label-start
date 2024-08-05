"use client"

import React, { useEffect, useState } from 'react'
import AccessibilityMenu from './accessibility';
import Link from 'next/link';
import ScrambleText from './wordScrambler';


const Footer = () => {
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
    <div className="z-40 bottom-0 divide-x w-full  divide-black flex bg-white border-y-2 border-black dark:bg-black dark:border-white dark:divide-white uppercase">
      <Link href="/" className="p-[10px] w-1/2 flex bg-white dark:bg-black hover:text-orange">
      <div className="my-auto divide-y divide">
        <h1 className='bold uppercase'>K&K RECORDS</h1>
      </div>
      </Link>
      <div className="w-1/6 md:flex">
      <span className='flex p-[10px]'>Livesändning</span>
        </div>
          <button
        className="md:w-1/6 w-1/5 bg-white hover:bg-black hover:text-white dark:bg-black dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black"

      >
        <span className="uppercase">
        Örebro - {currentTime.toLocaleTimeString('sv-SE', { timeZone: 'Europe/Stockholm', timeStyle: 'short' })}
        </span>
      </button>

            <button className="md:w-1/6 w-1/5 hover:!bg-black hover:text-white hover:divide-white dark:hover:!bg-white dark:hover:text-black dark:hover:divide-black ">
              <Link href={'https://www.kkmedia.se'}>
                <span className='uppercase'>
                <ScrambleText text="POWERED BY K&K MEDIA GROUP" />
                </span>
              </Link>
            </button>
            </div>
  )
}

export default Footer